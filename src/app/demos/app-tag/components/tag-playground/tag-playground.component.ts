import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tag-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Value / Text</label>
              <input type="text" [(ngModel)]="pgConfig.value" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Icon</label>
              <input type="text" [(ngModel)]="pgConfig.icon" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Severity</label>
              <select [(ngModel)]="pgConfig.severity" (change)="updateConfig()">
                <option value="info">Info</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="danger">Danger</option>
              </select>
            </div>
          </div>

          <div class="control-section">
            <h3>Styling</h3>
            <div class="checkpoint-group">
              <input
                type="checkbox"
                id="rounded"
                [(ngModel)]="pgConfig.rounded"
                (change)="updateConfig()"
              />
              <label for="rounded">Rounded Corners</label>
            </div>
            <div class="control-group">
              <label>Size</label>
              <select [(ngModel)]="pgConfig.size" (change)="updateConfig()">
                <option value="small">Small</option>
                <option value="large">Large</option>
              </select>
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
        <ui-tag
          [attr.value]="pgConfig.value"
          [attr.icon]="pgConfig.icon"
          [attr.severity]="pgConfig.severity"
          [attr.rounded]="pgConfig.rounded ? '' : null"
          [attr.size]="pgConfig.size"
        ></ui-tag>
      </div>
    </div>
  `,
  styleUrl: './tag-playground.component.scss',
})
export class TagPlaygroundComponent {
  pgConfig = {
    value: 'New Update',
    icon: '⚡',
    severity: 'info',
    rounded: true,
    size: 'small',
  };

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-tag\n';
    code += `  value="${this.pgConfig.value}"\n`;
    code += `  severity="${this.pgConfig.severity}"\n`;
    if (this.pgConfig.rounded) code += `  rounded\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    code += '></ui-tag>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      value: 'New Update',
      icon: '⚡',
      severity: 'info',
      rounded: true,
      size: 'small',
    };
    this.updateConfig();
  }
}
