import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-knob-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Value Control</h3>
            <div class="control-group">
              <label>Current Value</label>
              <input type="number" [(ngModel)]="pgConfig.value" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Min</label>
              <input type="number" [(ngModel)]="pgConfig.min" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Max</label>
              <input type="number" [(ngModel)]="pgConfig.max" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Step</label>
              <input type="number" [(ngModel)]="pgConfig.step" (change)="updateConfig()" />
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Size</label>
              <input type="number" [(ngModel)]="pgConfig.size" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Stroke Width</label>
              <input type="number" [(ngModel)]="pgConfig.strokeWidth" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Color</label>
              <input type="color" [(ngModel)]="pgConfig.valueColor" (change)="updateConfig()" />
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="readonly"
                [(ngModel)]="pgConfig.readonly"
                (change)="updateConfig()"
              />
              <label for="readonly">Readonly</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="showValue"
                [(ngModel)]="pgConfig.showValue"
                (change)="updateConfig()"
              />
              <label for="showValue">Show Value</label>
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
        <ui-knob
          [attr.value]="pgConfig.value"
          [attr.min]="pgConfig.min"
          [attr.max]="pgConfig.max"
          [attr.step]="pgConfig.step"
          [attr.size]="pgConfig.size"
          [attr.stroke-width]="pgConfig.strokeWidth"
          [attr.value-color]="pgConfig.valueColor"
          [attr.readonly]="pgConfig.readonly ? '' : null"
          [attr.show-value]="pgConfig.showValue ? '' : null"
          (knobChange)="onValueChange($event)"
        ></ui-knob>

        <div style="margin-top: 16px; font-weight: 600; color: var(--text-primary);">
          Value: {{ pgConfig.value }}
        </div>
      </div>
    </div>
  `,
  styleUrl: './knob-playground.component.scss',
})
export class KnobPlaygroundComponent {
  pgConfig = {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    size: 150,
    strokeWidth: 10,
    valueColor: '#3b82f6',
    readonly: false,
    showValue: true,
  };

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-knob\n';
    code += `  [value]="${this.pgConfig.value}"\n`;
    code += `  [min]="${this.pgConfig.min}"\n`;
    code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  [size]="${this.pgConfig.size}"\n`;
    code += `  value-color="${this.pgConfig.valueColor}"\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (!this.pgConfig.showValue) code += `  [show-value]="false"\n`;
    code += '></ui-knob>';

    this.generatedCode.set(code);
  }

  onValueChange(event: any) {
    this.pgConfig.value = event.detail.value;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 150,
      strokeWidth: 10,
      valueColor: '#3b82f6',
      readonly: false,
      showValue: true,
    };
    this.updateConfig();
  }
}
