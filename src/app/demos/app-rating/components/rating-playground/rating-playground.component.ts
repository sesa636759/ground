import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-rating-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Model -->
          <div class="control-section">
            <h3>Model</h3>
            <div class="control-group">
              <label>Type</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.type"
                (change)="updateConfig()"
                [options]="typeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Value</label>
              <app-input type="number" [(ngModel)]="pgConfig.value" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Max (Stars/Smiley)</label>
              <app-input type="number" [(ngModel)]="pgConfig.max" (change)="updateConfig()" />
            </div>
          </div>

          <!-- Appearance -->
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (change)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Color</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.color"
                (change)="updateConfig()"
                [options]="colorOptions"
              ></ui-dropdown>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="half"
                [(ngModel)]="pgConfig.allowHalf"
                (change)="updateConfig()"
                label="Allow Half (Star only)"
                [disabled]="pgConfig.type !== 'star'"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showVal"
                [(ngModel)]="pgConfig.showValue"
                (change)="updateConfig()"
                label="Show Value Text"
              ></app-checkbox>
            </div>
          </div>

          <!-- State -->
          <div class="control-section">
            <h3>State</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="readonly"
                [(ngModel)]="pgConfig.readonly"
                (change)="updateConfig()"
                label="Read-Only"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="disabled"
                [(ngModel)]="pgConfig.disabled"
                (change)="updateConfig()"
                label="Disabled"
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
        <ui-rating
          [attr.type]="pgConfig.type"
          [attr.value]="pgConfig.value"
          [attr.max]="pgConfig.max"
          [attr.size]="pgConfig.size"
          [attr.color]="pgConfig.color"
          [attr.readonly]="pgConfig.readonly ? '' : null"
          [attr.disabled]="pgConfig.disabled ? '' : null"
          [attr.allow-half]="pgConfig.allowHalf ? '' : null"
          [attr.show-value]="pgConfig.showValue ? '' : null"
          (ratingChange)="onRatingChange($event)"
        ></ui-rating>
        <div class="rating-display">Current Value: {{ pgConfig.value }}</div>
      </div>
    </div>
  `,
  styleUrl: './rating-playground.component.scss',
})
export class RatingPlaygroundComponent {
  pgConfig = {
    type: 'star',
    value: 3,
    max: 5,
    size: 'md',
    color: 'warning',
    readonly: false,
    disabled: false,
    allowHalf: false,
    showValue: true,
  };

  typeOptions = [
    { label: 'Star', value: 'star' },
    { label: 'Smiley', value: 'smiley' },
    { label: 'Thumb', value: 'thumb' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Warning', value: 'warning' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-rating\n';
    code += `  type="${this.pgConfig.type}"\n`;
    code += `  [value]="${this.pgConfig.value}"\n`;
    if (this.pgConfig.type !== 'thumb') code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.allowHalf && this.pgConfig.type === 'star') code += `  allow-half\n`;
    if (this.pgConfig.showValue) code += `  show-value\n`;
    code += '></ui-rating>';

    this.generatedCode.set(code);
  }

  onRatingChange(event: any) {
    this.pgConfig.value = event.detail;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      type: 'star',
      value: 3,
      max: 5,
      size: 'md',
      color: 'warning',
      readonly: false,
      disabled: false,
      allowHalf: false,
      showValue: true,
    };
    this.updateConfig();
  }
}
