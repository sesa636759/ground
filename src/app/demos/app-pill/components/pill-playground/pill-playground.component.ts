import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pill-playground',
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
              <label>Label</label>
              <input type="text" [(ngModel)]="pgConfig.label" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Variant</label>
              <select [(ngModel)]="pgConfig.variant" (change)="updateConfig()">
                <option value="filled">Filled</option>
                <option value="outlined">Outlined</option>
                <option value="soft">Soft</option>
                <option value="bordered">Bordered</option>
                <option value="gradient">Gradient</option>
              </select>
            </div>
            <div class="control-group">
              <label>Color</label>
              <select [(ngModel)]="pgConfig.color" (change)="updateConfig()">
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="danger">Danger</option>
                <option value="warning">Warning</option>
              </select>
            </div>
            <div class="control-group">
              <label>Size</label>
              <select [(ngModel)]="pgConfig.size" (change)="updateConfig()">
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
          </div>

          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="removable"
                [(ngModel)]="pgConfig.removable"
                (change)="updateConfig()"
              />
              <label for="removable">Removable</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="clickable"
                [(ngModel)]="pgConfig.clickable"
                (change)="updateConfig()"
              />
              <label for="clickable">Clickable</label>
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
            <div class="control-group">
              <label>Counter</label>
              <input type="number" [(ngModel)]="pgConfig.counter" (change)="updateConfig()" />
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
        <ui-pill
          [attr.label]="pgConfig.label"
          [attr.variant]="pgConfig.variant"
          [attr.color]="pgConfig.color"
          [attr.size]="pgConfig.size"
          [attr.removable]="pgConfig.removable ? '' : null"
          [attr.clickable]="pgConfig.clickable ? '' : null"
          [attr.loading]="pgConfig.loading ? '' : null"
          [attr.counter]="pgConfig.counter"
          icon="🏷️"
        ></ui-pill>
      </div>
    </div>
  `,
  styleUrl: './pill-playground.component.scss',
})
export class PillPlaygroundComponent {
  pgConfig = {
    label: 'Status Active',
    variant: 'soft',
    color: 'primary',
    size: 'md',
    removable: true,
    clickable: true,
    loading: false,
    counter: null,
  };

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-pill\n';
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.removable) code += `  removable\n`;
    if (this.pgConfig.clickable) code += `  clickable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.counter !== null) code += `  counter="${this.pgConfig.counter}"\n`;
    code += '></ui-pill>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Status Active',
      variant: 'soft',
      color: 'primary',
      size: 'md',
      removable: true,
      clickable: true,
      loading: false,
      counter: null,
    };
    this.updateConfig();
  }
}
