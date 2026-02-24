import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-bar-chart-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion items='[{"id":"config","title":"Configuration","icon":"⚙️"}]' defaultOpen='["config"]' multiple>
          <div slot="content-config">
            <div class="control-grid">

              <div class="control-section">
                <h3>📐 Layout</h3>
                <div class="control-group">
                  <label>Orientation</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.orientation"
                    (ngModelChange)="updateConfig()"
                    [options]="orientationOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Dataset Mode</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.mode"
                    (ngModelChange)="onModeChange()"
                    [options]="modeOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Bar Width %</label>
                  <input type="range" min="20" max="90" step="5"
                    [(ngModel)]="pgConfig.barWidth"
                    (ngModelChange)="updateConfig()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ pgConfig.barWidth }}%</span>
                </div>
                <div class="control-group">
                  <label>Border Radius</label>
                  <input type="range" min="0" max="16" step="2"
                    [(ngModel)]="pgConfig.borderRadius"
                    (ngModelChange)="updateConfig()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ pgConfig.borderRadius }}px</span>
                </div>
              </div>

              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="showLegend" [(ngModel)]="pgConfig.showLegend"
                    (ngModelChange)="updateConfig()" label="Show Legend"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showGrid" [(ngModel)]="pgConfig.showGrid"
                    (ngModelChange)="updateConfig()" label="Show Grid"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showValues" [(ngModel)]="pgConfig.showValues"
                    (ngModelChange)="updateConfig()" label="Show Values"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="stacked" [(ngModel)]="pgConfig.stacked"
                    (ngModelChange)="updateConfig()" label="Stacked"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="enableAnimation" [(ngModel)]="pgConfig.enableAnimation"
                    (ngModelChange)="updateConfig()" label="Animate on Load"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showTooltip" [(ngModel)]="pgConfig.showTooltip"
                    (ngModelChange)="updateConfig()" label="Show Tooltip"></app-checkbox>
                </div>
              </div>

            </div>
            <div class="action-buttons">
              <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
              <ui-button variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
            </div>
          </div>
        </ui-accordion>
      </div>

      <div class="playground-preview">
        <ui-bar-chart
          [attr.orientation]="pgConfig.orientation"
          [attr.bar-width]="pgConfig.barWidth"
          [attr.border-radius]="pgConfig.borderRadius"
          [attr.show-legend]="pgConfig.showLegend ? '' : null"
          [attr.show-grid]="pgConfig.showGrid ? '' : null"
          [attr.show-values]="pgConfig.showValues ? '' : null"
          [attr.stacked]="pgConfig.stacked ? '' : null"
          [attr.enable-animation]="pgConfig.enableAnimation ? '' : null"
          [attr.show-tooltip]="pgConfig.showTooltip ? '' : null"
          [labels]="labelsJson"
          [datasets]="datasetsJson"
          style="width: 100%; height: 380px;"
        ></ui-bar-chart>

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
  styleUrl: './bar-chart-playground.component.scss',
})
export class BarChartPlaygroundComponent {
  pgConfig = {
    orientation: 'vertical',
    mode: 'single',
    barWidth: 60,
    borderRadius: 6,
    showLegend: true,
    showGrid: true,
    showValues: false,
    stacked: false,
    enableAnimation: true,
    showTooltip: true,
  };

  orientationOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  modeOptions = [
    { label: 'Single Dataset', value: 'single' },
    { label: 'Multi Dataset', value: 'multi' },
  ];

  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  singleDatasets = [
    { label: 'Revenue ($k)', data: [42, 58, 75, 63, 89, 104], color: '#6366f1' },
  ];

  multiDatasets = [
    { label: 'Revenue ($k)', data: [42, 58, 75, 63, 89, 104], color: '#6366f1' },
    { label: 'Expenses ($k)', data: [30, 45, 52, 48, 61, 78], color: '#f59e0b' },
    { label: 'Profit ($k)', data: [12, 13, 23, 15, 28, 26], color: '#10b981' },
  ];

  labelsJson = JSON.stringify(this.labels);
  datasetsJson = JSON.stringify(this.singleDatasets);
  generatedCode = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  onModeChange() {
    this.datasetsJson =
      this.pgConfig.mode === 'multi'
        ? JSON.stringify(this.multiDatasets)
        : JSON.stringify(this.singleDatasets);
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
    let code = '<ui-bar-chart\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  bar-width="${this.pgConfig.barWidth}"\n`;
    code += `  border-radius="${this.pgConfig.borderRadius}"\n`;
    if (this.pgConfig.showLegend) code += `  show-legend\n`;
    if (this.pgConfig.showGrid) code += `  show-grid\n`;
    if (this.pgConfig.showValues) code += `  show-values\n`;
    if (this.pgConfig.stacked) code += `  stacked\n`;
    if (this.pgConfig.enableAnimation) code += `  enable-animation\n`;
    if (this.pgConfig.showTooltip) code += `  show-tooltip\n`;
    code += `  [labels]="labels"\n`;
    code += `  [datasets]="datasets"\n`;
    code += '></ui-bar-chart>';
    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'vertical',
      mode: 'single',
      barWidth: 60,
      borderRadius: 6,
      showLegend: true,
      showGrid: true,
      showValues: false,
      stacked: false,
      enableAnimation: true,
      showTooltip: true,
    };
    this.datasetsJson = JSON.stringify(this.singleDatasets);
    this.updateConfig();
  }
}
