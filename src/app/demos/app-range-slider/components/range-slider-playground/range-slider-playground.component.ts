import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-range-slider-playground',
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
              <label>Orientation</label>
              <select [(ngModel)]="pgConfig.orientation" (change)="updateConfig()">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="range"
                [(ngModel)]="pgConfig.range"
                (change)="updateConfig()"
              />
              <label for="range">Range Mode (Dual)</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="showValue"
                [(ngModel)]="pgConfig.showValue"
                (change)="updateConfig()"
              />
              <label for="showValue">Show Tooltip</label>
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
        <div
          class="slider-container"
          [style.height]="pgConfig.orientation === 'vertical' ? '250px' : 'auto'"
        >
          <ui-range-slider
            [attr.min]="pgConfig.min"
            [attr.max]="pgConfig.max"
            [attr.step]="pgConfig.step"
            [attr.orientation]="pgConfig.orientation"
            [attr.range]="pgConfig.range ? '' : null"
            [attr.show-value]="pgConfig.showValue ? '' : null"
            [value]="currentValue"
            (rangeChange)="onValueChange($event)"
          ></ui-range-slider>
        </div>

        <div style="margin-top: 24px; font-weight: 600;">Value: {{ currentValue | json }}</div>
      </div>
    </div>
  `,
  styleUrl: './range-slider-playground.component.scss',
})
export class RangeSliderPlaygroundComponent {
  pgConfig = {
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    range: true,
    showValue: true,
  };

  currentValue: any = [20, 80];
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-range-slider\n';
    code += `  [min]="${this.pgConfig.min}"\n`;
    code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  [step]="${this.pgConfig.step}"\n`;
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.range) code += `  range\n`;
    code += `  [value]="${JSON.stringify(this.currentValue)}"\n`;
    code += '></ui-range-slider>';

    this.generatedCode.set(code);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail.value;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      min: 0,
      max: 100,
      step: 1,
      orientation: 'horizontal',
      range: true,
      showValue: true,
    };
    this.currentValue = [20, 80];
    this.updateConfig();
  }
}
