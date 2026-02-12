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
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (change)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (change)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Orientation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.orientation"
                (change)="updateConfig()"
                [options]="orientationOptions"
              ></ui-dropdown>
            </div>
          </div>

          <!-- Special -->
          <div class="control-section">
            <h3>Special</h3>
            <div class="control-group">
              <label>Pattern</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.pattern"
                (change)="updateConfig()"
                [options]="patternOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Shape</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.shape"
                (change)="updateConfig()"
                [options]="shapeOptions"
              ></ui-dropdown>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="loading"
                [(ngModel)]="pgConfig.loading"
                (change)="updateConfig()"
                label="Loading"
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

  variantOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Dashed', value: 'dashed' },
    { label: 'Dotted', value: 'dotted' },
    { label: 'Double Solid', value: 'double-solid' },
    { label: 'Gradient', value: 'gradient' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  patternOptions = [
    { label: 'None', value: 'none' },
    { label: 'Dots', value: 'dots' },
    { label: 'Stripes', value: 'stripes' },
    { label: 'Zigzag', value: 'zigzag' },
  ];

  shapeOptions = [
    { label: 'None', value: 'none' },
    { label: 'Curve', value: 'curve' },
    { label: 'Wave', value: 'wave' },
    { label: 'Triangle', value: 'triangle' },
    { label: 'Zigzag', value: 'zigzag' },
    { label: 'Arrow', value: 'arrow' },
  ];

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
