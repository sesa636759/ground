import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-speedometer-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Metric</h3>
            <div class="control-group">
              <label>Value</label>
              <app-input type="number" [(ngModel)]="pgConfig.value" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Min</label>
              <app-input type="number" [(ngModel)]="pgConfig.min" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Max</label>
              <app-input type="number" [(ngModel)]="pgConfig.max" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Label</label>
              <app-input type="text" [(ngModel)]="pgConfig.label" (change)="updateConfig()" />
            </div>
          </div>

          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Size</label>
              <app-input type="number" [(ngModel)]="pgConfig.size" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Arc Width</label>
              <app-input type="number" [(ngModel)]="pgConfig.arcWidth" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Color Mode</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.colorMode"
                (change)="updateConfig()"
                [options]="colorModeOptions"
              ></ui-dropdown>
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
        <ui-speedometer
          [attr.value]="pgConfig.value"
          [attr.min]="pgConfig.min"
          [attr.max]="pgConfig.max"
          [attr.label]="pgConfig.label"
          [attr.size]="pgConfig.size"
          [attr.arc-width]="pgConfig.arcWidth"
          [attr.color-mode]="pgConfig.colorMode"
        ></ui-speedometer>
      </div>
    </div>
  `,
  styleUrl: './speedometer-playground.component.scss',
})
export class SpeedometerPlaygroundComponent {
  pgConfig = {
    value: 65,
    min: 0,
    max: 100,
    label: 'km/h',
    size: 250,
    arcWidth: 20,
    colorMode: 'gradient',
  };

  colorModeOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Gradient', value: 'gradient' },
    { label: 'Segments', value: 'segments' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-speedometer\n';
    code += `  [value]="${this.pgConfig.value}"\n`;
    code += `  [min]="${this.pgConfig.min}"\n`;
    code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  [size]="${this.pgConfig.size}"\n`;
    code += `  color-mode="${this.pgConfig.colorMode}"\n`;
    code += '></ui-speedometer>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      value: 65,
      min: 0,
      max: 100,
      label: 'km/h',
      size: 250,
      arcWidth: 20,
      colorMode: 'gradient',
    };
    this.updateConfig();
  }
}
