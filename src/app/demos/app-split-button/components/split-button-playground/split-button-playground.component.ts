import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-split-button-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Basic Config</h3>
            <div class="control-group">
              <label>Label</label>
              <input type="text" [(ngModel)]="pgConfig.label" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Icon (Home/Save/etc)</label>
              <input type="text" [(ngModel)]="pgConfig.icon" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Variant</label>
              <select [(ngModel)]="pgConfig.variant" (change)="updateConfig()">
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="danger">Danger</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
              </select>
            </div>
          </div>

          <div class="control-section">
            <h3>Behavior</h3>
            <div class="control-group">
              <label>Size</label>
              <select [(ngModel)]="pgConfig.size" (change)="updateConfig()">
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="disabled"
                [(ngModel)]="pgConfig.disabled"
                (change)="updateConfig()"
              />
              <label for="disabled">Disabled</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="loading"
                [(ngModel)]="pgConfig.loading"
                (change)="updateConfig()"
              />
              <label for="loading">Loading</label>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
          <ui-button class="btn-secondary" variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
        </div>
      </div>

      <div class="playground-preview">
        <ui-split-button
          [attr.label]="pgConfig.label"
          [attr.icon]="pgConfig.icon"
          [attr.variant]="pgConfig.variant"
          [attr.size]="pgConfig.size"
          [attr.disabled]="pgConfig.disabled ? '' : null"
          [attr.loading]="pgConfig.loading ? '' : null"
          [model]="modelJson"
          (uiClick)="onPrimaryClick()"
        ></ui-split-button>

        <div
          *ngIf="lastAction"
          style="margin-top: 20px; color: var(--text-secondary); font-size: 0.9rem;"
        >
          Last Action: <strong>{{ lastAction }}</strong>
        </div>
      </div>
    </div>
  `,
  styleUrl: './split-button-playground.component.scss',
})
export class SplitButtonPlaygroundComponent {
  pgConfig = {
    label: 'Save Changes',
    icon: '💾',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  };

  model = [
    { label: 'Save and Exit', icon: '🚪', command: () => this.logAction('Save and Exit') },
    { label: 'Save as Draft', icon: '📝', command: () => this.logAction('Save as Draft') },
    { separator: true },
    { label: 'Discard', icon: '🗑️', command: () => this.logAction('Discard') },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');
  lastAction = '';

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-split-button\n';
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  [model]="menuItems"\n`;
    code += '></ui-split-button>';

    this.generatedCode.set(code);
  }

  onPrimaryClick() {
    this.logAction('Primary: ' + this.pgConfig.label);
  }

  logAction(action: string) {
    this.lastAction = action;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Save Changes',
      icon: '💾',
      variant: 'primary',
      size: 'md',
      disabled: false,
      loading: false,
    };
    this.updateConfig();
  }
}
