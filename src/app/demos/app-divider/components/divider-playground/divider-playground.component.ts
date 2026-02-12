import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divider-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Content -->
          <div class="control-section">
            <h3>Content</h3>
            <div class="control-group">
              <label>Text</label>
              <input type="text" [(ngModel)]="pgConfig.text" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Icon</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.icon"
                (change)="updateConfig()"
                placeholder="e.g. ⭐"
              />
            </div>
            <div class="control-group">
              <label>Badge</label>
              <input type="text" [(ngModel)]="pgConfig.badge" (change)="updateConfig()" />
            </div>
          </div>

          <!-- Line Style -->
          <div class="control-section">
            <h3>Line Style</h3>
            <div class="control-group">
              <label>Variant</label>
              <select [(ngModel)]="pgConfig.variant" (change)="updateConfig()">
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double-solid">Double Solid</option>
                <option value="gradient">Gradient</option>
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
            <div class="control-group">
              <label>Orientation</label>
              <select [(ngModel)]="pgConfig.orientation" (change)="updateConfig()">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>
          </div>

          <!-- Special -->
          <div class="control-section">
            <h3>Special</h3>
            <div class="control-group">
              <label>Pattern</label>
              <select [(ngModel)]="pgConfig.pattern" (change)="updateConfig()">
                <option value="none">None</option>
                <option value="dots">Dots</option>
                <option value="stripes">Stripes</option>
                <option value="zigzag">Zigzag</option>
              </select>
            </div>
            <div class="control-group">
              <label>Shape</label>
              <select [(ngModel)]="pgConfig.shape" (change)="updateConfig()">
                <option value="none">None</option>
                <option value="curve">Curve</option>
                <option value="wave">Wave</option>
                <option value="triangle">Triangle</option>
                <option value="zigzag">Zigzag</option>
                <option value="arrow">Arrow</option>
              </select>
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

      <div
        class="playground-preview"
        [class.vertical-container]="pgConfig.orientation === 'vertical'"
      >
        <div *ngIf="pgConfig.orientation === 'vertical'">Panel Start</div>
        <ui-divider
          [attr.text]="pgConfig.text"
          [attr.icon]="pgConfig.icon"
          [attr.badge]="pgConfig.badge"
          [attr.variant]="pgConfig.variant"
          [attr.size]="pgConfig.size"
          [attr.orientation]="pgConfig.orientation"
          [attr.pattern]="pgConfig.pattern"
          [attr.shape]="pgConfig.shape"
          [attr.loading]="pgConfig.loading ? '' : null"
        ></ui-divider>
        <div *ngIf="pgConfig.orientation === 'vertical'">Panel End</div>
      </div>
    </div>
  `,
  styleUrl: './divider-playground.component.scss',
})
export class DividerPlaygroundComponent {
  pgConfig = {
    text: 'OR',
    icon: '',
    badge: '',
    variant: 'solid',
    size: 'md',
    orientation: 'horizontal',
    pattern: 'none',
    shape: 'none',
    loading: false,
  };

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-divider\n';
    if (this.pgConfig.text) code += `  text="${this.pgConfig.text}"\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    if (this.pgConfig.badge) code += `  badge="${this.pgConfig.badge}"\n`;
    if (this.pgConfig.variant !== 'solid') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'md') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.orientation !== 'horizontal')
      code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.pattern !== 'none') code += `  pattern="${this.pgConfig.pattern}"\n`;
    if (this.pgConfig.shape !== 'none') code += `  shape="${this.pgConfig.shape}"\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    code += '></ui-divider>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      text: 'OR',
      icon: '',
      badge: '',
      variant: 'solid',
      size: 'md',
      orientation: 'horizontal',
      pattern: 'none',
      shape: 'none',
      loading: false,
    };
    this.updateConfig();
  }
}
