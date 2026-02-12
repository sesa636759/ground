import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meter-group-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Layout</h3>
            <div class="control-group">
              <label>Orientation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.orientation"
                (change)="updateConfig()"
                [options]="orientationOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Label Orientation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.labelOrientation"
                (change)="updateConfig()"
                [options]="labelOrientationOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Label Position</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.labelPosition"
                (change)="updateConfig()"
                [options]="labelPositionOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Min Height (H) / Width (V)</label>
                <app-input
                  type="text"
                  [(ngModel)]="pgConfig.meterHeight"
                  (ngModelChange)="updateConfig()"
                ></app-input>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showLabels"
                [(ngModel)]="pgConfig.showLabels"
                (change)="updateConfig()"
                label="Show Labels"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showMarkers"
                [(ngModel)]="pgConfig.showMarkers"
                (change)="updateConfig()"
                label="Show Markers"
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
        <div
          class="meter-wrapper"
          [style.height]="pgConfig.orientation === 'vertical' ? '300px' : 'auto'"
        >
          <ui-meter-group
            [attr.orientation]="pgConfig.orientation"
            [attr.label-orientation]="pgConfig.labelOrientation"
            [attr.label-position]="pgConfig.labelPosition"
            [attr.meter-height]="pgConfig.meterHeight"
            [attr.show-labels]="pgConfig.showLabels ? '' : null"
            [attr.show-markers]="pgConfig.showMarkers ? '' : null"
            [values]="valuesJson"
          ></ui-meter-group>
        </div>
      </div>
    </div>
  `,
  styleUrl: './meter-group-playground.component.scss',
})
export class MeterGroupPlaygroundComponent {
  pgConfig = {
    orientation: 'horizontal',
    labelOrientation: 'horizontal',
    labelPosition: 'end',
    meterHeight: '12px',
    showLabels: true,
    showMarkers: true,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  labelOrientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  labelPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  values = [
    { label: 'Apps', value: 40, color: '#3b82f6', icon: '📱' },
    { label: 'System', value: 25, color: '#ef4444', icon: '⚙️' },
    { label: 'Media', value: 15, color: '#10b981', icon: '🎬' },
    { label: 'Free', value: 20, color: '#e2e8f0', icon: '☁️' },
  ];

  valuesJson = JSON.stringify(this.values);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-meter-group\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    if (!this.pgConfig.showLabels) code += `  [show-labels]="false"\n`;
    code += `  [values]="storageData"\n`;
    code += '></ui-meter-group>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      labelOrientation: 'horizontal',
      labelPosition: 'end',
      meterHeight: '12px',
      showLabels: true,
      showMarkers: true,
    };
    this.updateConfig();
  }
}
