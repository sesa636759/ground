import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-smart-menu-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Orientation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.orientation"
                (change)="updateConfig()"
                [options]="orientationOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="showIcons"
                [(ngModel)]="pgConfig.showIcons"
                (change)="updateConfig()"
                label="Show Icons"
              ></app-checkbox>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
          <ui-button
            class="btn-secondary"
            variant="secondary"
            (click)="resetConfig()"
            label="Reset"
          ></ui-button>
        </div>
      </div>

      <div class="playground-preview">
        <ui-smart-menu [attr.orientation]="pgConfig.orientation" [model]="modelJson">
        </ui-smart-menu>
      </div>
    </div>
  `,
  styleUrl: './smart-menu-playground.component.scss',
})
export class SmartMenuPlaygroundComponent {
  pgConfig = {
    orientation: 'vertical',
    showIcons: true,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  model = [
    {
      label: 'File',
      icon: '📁',
      items: [
        { label: 'New', icon: '➕', command: () => {} },
        { label: 'Open', icon: '📂', command: () => {} },
        { label: 'Save', icon: '💾', command: () => {} },
      ],
    },
    {
      label: 'Edit',
      icon: '✏️',
      items: [
        { label: 'Cut', icon: '✂️', command: () => {} },
        { label: 'Copy', icon: '📋', command: () => {} },
        { label: 'Paste', icon: '📌', command: () => {} },
      ],
    },
    { label: 'View', icon: '👁️', items: [] },
    { label: 'Help', icon: '❓', items: [] },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-smart-menu\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  [model]="menuItems"\n`;
    code += '></ui-smart-menu>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'vertical',
      showIcons: true,
    };
    this.updateConfig();
  }
}
