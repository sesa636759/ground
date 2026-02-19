import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-dialog-box-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Structure</h3>
            <div class="control-group">
              <label>Header Text</label>
              <app-input type="text" [(ngModel)]="pgConfig.header" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Width</label>
              <app-input type="text" [(ngModel)]="pgConfig.width" (change)="updateConfig()" />
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

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <button (click)="copyCode()">Copy Code</button>
          <button class="btn-secondary" (click)="resetConfig()">Reset</button>
        </div>
      </div>

      <div class="playground-preview">
        <button class="variant-btn" style="background: #8b5cf6;" (click)="visible = true">
          Open Dialog
        </button>

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
              <button class="variant-btn btn-secondary" (click)="visible = false">Cancel</button>
              <button class="variant-btn" style="background: #10b981;" (click)="visible = false">
                Confirm
              </button>
            </div>
          </div>
        </ui-dialog-box>
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
