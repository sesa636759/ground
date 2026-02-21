import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-dialog-box-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Structure</h3>
            <div class="control-group">
              <label>Header Text</label>
              <input type="text" [(ngModel)]="pgConfig.header" (ngModelChange)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Width</label>
              <input type="text" [(ngModel)]="pgConfig.width" (ngModelChange)="updateConfig()" />
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="modal"
                [(ngModel)]="pgConfig.modal"
                (change)="updateConfig()"
                label="Modal (Backdrop)"
              ></app-checkbox>
            </div>
          </div>

          <div class="control-section">
            <h3>Behavior</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="closable"
                [(ngModel)]="pgConfig.closable"
                (change)="updateConfig()"
                label="Show Close Icon"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="draggable"
                [(ngModel)]="pgConfig.draggable"
                (change)="updateConfig()"
                label="Draggable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="resizable"
                [(ngModel)]="pgConfig.resizable"
                (change)="updateConfig()"
                label="Resizable"
              ></app-checkbox>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <ui-button variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
        </div>
      </div>

      <div class="playground-preview">
        <ui-button (click)="visible = true" label="Open Dialog"></ui-button>

        <ui-dialog-box
          [attr.header]="pgConfig.header"
          [attr.width]="pgConfig.width"
          [attr.modal]="pgConfig.modal ? '' : null"
          [attr.closable]="pgConfig.closable ? '' : null"
          [attr.draggable]="pgConfig.draggable ? '' : null"
          [attr.resizable]="pgConfig.resizable ? '' : null"
          [attr.visible]="visible ? '' : null"
          (uiHide)="visible = false"
        >
          <div style="padding: 20px;">
            <p>This is the content of the dialog. You can put any HTML here.</p>
            <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px;">
              <ui-button variant="secondary" (click)="visible = false" label="Cancel"></ui-button>
              <ui-button variant="success" (click)="visible = false" label="Confirm"></ui-button>
            </div>
          </div>
        </ui-dialog-box>

        <div class="code-output">
          <ui-code-preview
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './dialog-box-playground.component.scss',
})
export class DialogBoxPlaygroundComponent {
  pgConfig = {
    header: 'Confirm Operation',
    width: '450px',
    modal: true,
    closable: true,
    draggable: true,
    resizable: true,
  };

  visible = false;
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-dialog-box\n';
    code += `  header="${this.pgConfig.header}"\n`;
    code += `  [width]="${this.pgConfig.width}"\n`;
    if (this.pgConfig.modal) code += `  modal\n`;
    if (this.pgConfig.draggable) code += `  draggable\n`;
    code += '>\n';
    code += '  <p>Dialog Body Content</p>\n';
    code += '</ui-dialog-box>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      header: 'Confirm Operation',
      width: '450px',
      modal: true,
      closable: true,
      draggable: true,
      resizable: true,
    };
    this.updateConfig();
  }
}
