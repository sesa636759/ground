import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
              <select [(ngModel)]="pgConfig.orientation" (change)="updateConfig()">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>
          </div>

          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="showIcons"
                [(ngModel)]="pgConfig.showIcons"
                (change)="updateConfig()"
              />
              <label for="showIcons">Show Icons</label>
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
