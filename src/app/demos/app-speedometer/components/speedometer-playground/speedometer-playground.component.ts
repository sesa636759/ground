import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-speedometer-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
                <h3>Metric</h3>
                <div class="control-group">
                  <label>Value</label>
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
                  <label>Label</label>
                  <input
                    type="text"
                    [(ngModel)]="pgConfig.label"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
              </div>

              <div class="control-section">
                <h3>Appearance</h3>
                <div class="control-group">
                  <label>Size</label>
                  <input
                    type="number"
                    [(ngModel)]="pgConfig.size"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="control-group">
                  <label>Arc Width</label>
                  <input
                    type="number"
                    [(ngModel)]="pgConfig.arcWidth"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="control-group">
                  <label>Color Mode</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.colorMode"
                    (ngModelChange)="updateConfig()"
                    [options]="colorModeOptions"
                  ></ui-dropdown>
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
        <ui-speedometer
          [attr.value]="pgConfig.value"
          [attr.min]="pgConfig.min"
          [attr.max]="pgConfig.max"
          [attr.label]="pgConfig.label"
          [attr.size]="pgConfig.size"
          [attr.arc-width]="pgConfig.arcWidth"
          [attr.color-mode]="pgConfig.colorMode"
        ></ui-speedometer>

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
    let code = '<ui-speedometer\n';
    code += `  [value]="${this.pgConfig.value}"\n`;
    code += `  [min]="${this.pgConfig.min}"\n`;
    code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  [size]="${this.pgConfig.size}"\n`;
    code += `  color-mode="${this.pgConfig.colorMode}"\n`;
    code += '></ui-speedometer>';

    this.generatedCode.set(code);
    this.refreshCode();
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
