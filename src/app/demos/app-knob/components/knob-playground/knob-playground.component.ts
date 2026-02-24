import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-knob-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion
          items='[{"id":"config","title":"Configuration","icon":"⚙️"}]'
          defaultOpen='["config"]'
          multiple
        >
          <div slot="content-config">
            <div class="control-grid">
              <div class="control-section">
                <h3>Value Control</h3>
                <div class="control-group">
                  <label>Current Value</label>
                  <input
                    type="number"
                    [(ngModel)]="pgConfig.value"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="control-group">
                  <label>Min</label>
                  <input
                    type="number"
                    [(ngModel)]="pgConfig.min"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="control-group">
                  <label>Max</label>
                  <input
                    type="number"
                    [(ngModel)]="pgConfig.max"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="control-group">
                  <label>Step</label>
                  <input
                    type="number"
                    [(ngModel)]="pgConfig.step"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
              </div>

              <div class="control-section">
                <h3>Visuals</h3>
                <div class="control-group">
                  <label>Size</label>
                  <input
                    type="number"
                    [(ngModel)]="pgConfig.size"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="control-group">
                  <label>Stroke Width</label>
                  <input
                    type="number"
                    [(ngModel)]="pgConfig.strokeWidth"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="control-group">
                  <label>Color</label>
                  <input
                    type="color"
                    [(ngModel)]="pgConfig.valueColor"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="readonly"
                    [(ngModel)]="pgConfig.readonly"
                    (ngModelChange)="updateConfig()"
                    label="Readonly"
                  ></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="showValue"
                    [(ngModel)]="pgConfig.showValue"
                    (ngModelChange)="updateConfig()"
                    label="Show Value"
                  ></app-checkbox>
                </div>
              </div>
            </div>

            <div class="action-buttons">
              <ui-button
                class="btn-secondary"
                variant="secondary"
                (click)="resetConfig()"
                label="Reset"
              ></ui-button>
            </div>
          </div>
        </ui-accordion>
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

        <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
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
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
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
    this.refreshCode();
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
