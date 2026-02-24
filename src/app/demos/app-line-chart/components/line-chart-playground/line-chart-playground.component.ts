import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-line-chart-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UiDropdownValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion items='[{"id":"config","title":"Configuration","icon":"⚙️"}]' defaultOpen='["config"]' multiple>
          <div slot="content-config">
            <div class="control-grid">

              <div class="control-section">
                <h3>📐 Data</h3>
                <div class="control-group">
                  <label>Dataset</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.dataset"
                    (ngModelChange)="onDatasetChange()"
                    [options]="datasetOptions"
                  ></ui-dropdown>
                </div>
              </div>

              <div class="control-section">
                <h3>🎨 Appearance</h3>
                <div class="control-group">
                  <label>Stroke Width <span class="range-val">{{ pgConfig.strokeWidth }}px</span></label>
                  <input type="range" min="1" max="6" step="1"
                    [(ngModel)]="pgConfig.strokeWidth"
                    (ngModelChange)="updateConfig()" />
                </div>
                <div class="control-group">
                  <label>Chart Width <span class="range-val">{{ pgConfig.width }}px</span></label>
                  <input type="range" min="300" max="800" step="50"
                    [(ngModel)]="pgConfig.width"
                    (ngModelChange)="updateConfig()" />
                </div>
                <div class="control-group">
                  <label>Chart Height <span class="range-val">{{ pgConfig.height }}px</span></label>
                  <input type="range" min="200" max="500" step="50"
                    [(ngModel)]="pgConfig.height"
                    (ngModelChange)="updateConfig()" />
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
                  <app-checkbox id="showMarkers" [(ngModel)]="pgConfig.showMarkers"
                    (ngModelChange)="updateConfig()" label="Show Markers"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="enableAnimation" [(ngModel)]="pgConfig.enableAnimation"
                    (ngModelChange)="updateConfig()" label="Enable Animation"></app-checkbox>
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
        <chart-line
          [attr.chart-title]="activeTitle"
          [attr.x-axis-label]="activeXLabel"
          [attr.y-axis-label]="activeYLabel"
          [attr.show-legend]="pgConfig.showLegend ? '' : null"
          [attr.show-grid]="pgConfig.showGrid ? '' : null"
          [attr.show-markers]="pgConfig.showMarkers ? '' : null"
          [attr.enable-animation]="pgConfig.enableAnimation ? '' : null"
          [attr.stroke-width]="pgConfig.strokeWidth"
          [attr.width]="pgConfig.width"
          [attr.height]="pgConfig.height"
          [data]="chartData"
        ></chart-line>

        <div class="code-output">
          <ui-code-preview
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './line-chart-playground.component.scss',
})
export class LineChartPlaygroundComponent {
  pgConfig = {
    dataset: 'monthly',
    strokeWidth: 2,
    width: 600,
    height: 300,
    showLegend: true,
    showGrid: true,
    showMarkers: true,
    enableAnimation: true,
  };

  datasetOptions = [
    { label: 'Monthly Revenue', value: 'monthly' },
    { label: 'Multi Series', value: 'multi' },
    { label: 'Weekly Visitors', value: 'weekly' },
  ];

  monthlyData = [
    {
      name: 'Revenue ($k)',
      color: '#6366f1',
      points: [
        { x: 1, y: 42 }, { x: 2, y: 58 }, { x: 3, y: 53 }, { x: 4, y: 70 },
        { x: 5, y: 89 }, { x: 6, y: 95 }, { x: 7, y: 112 }, { x: 8, y: 104 },
      ],
    },
  ];

  multiData = [
    {
      name: 'Revenue',
      color: '#6366f1',
      points: [
        { x: 1, y: 42 }, { x: 2, y: 58 }, { x: 3, y: 53 }, { x: 4, y: 70 },
        { x: 5, y: 89 }, { x: 6, y: 95 }, { x: 7, y: 112 }, { x: 8, y: 104 },
      ],
    },
    {
      name: 'Expenses',
      color: '#f59e0b',
      points: [
        { x: 1, y: 30 }, { x: 2, y: 40 }, { x: 3, y: 45 }, { x: 4, y: 55 },
        { x: 5, y: 60 }, { x: 6, y: 65 }, { x: 7, y: 75 }, { x: 8, y: 80 },
      ],
    },
    {
      name: 'Profit',
      color: '#10b981',
      points: [
        { x: 1, y: 12 }, { x: 2, y: 18 }, { x: 3, y: 8 }, { x: 4, y: 15 },
        { x: 5, y: 29 }, { x: 6, y: 30 }, { x: 7, y: 37 }, { x: 8, y: 24 },
      ],
    },
  ];

  weeklyData = [
    {
      name: 'Visitors',
      color: '#0ea5e9',
      points: [
        { x: 1, y: 1200 }, { x: 2, y: 1900 }, { x: 3, y: 1700 },
        { x: 4, y: 2100 }, { x: 5, y: 2400 }, { x: 6, y: 1800 }, { x: 7, y: 1100 },
      ],
    },
  ];

  private datasets: Record<string, { data: any[]; title: string; x: string; y: string }> = {
    monthly: { data: this.monthlyData, title: 'Monthly Revenue', x: 'Month', y: 'Revenue ($k)' },
    multi: { data: this.multiData, title: 'Financial Overview', x: 'Month', y: 'Amount ($k)' },
    weekly: { data: this.weeklyData, title: 'Weekly Visitors', x: 'Day', y: 'Visitors' },
  };

  chartData: any[] = this.monthlyData;
  activeTitle = 'Monthly Revenue';
  activeXLabel = 'Month';
  activeYLabel = 'Revenue ($k)';
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  onDatasetChange() {
    const ds = this.datasets[this.pgConfig.dataset];
    this.chartData = ds.data;
    this.activeTitle = ds.title;
    this.activeXLabel = ds.x;
    this.activeYLabel = ds.y;
    this.updateConfig();
  }

  updateConfig() {
    const d = this.pgConfig;
    const attrs: string[] = [`chart-title="${this.activeTitle}"`, `x-axis-label="${this.activeXLabel}"`, `y-axis-label="${this.activeYLabel}"`];
    if (d.showLegend) attrs.push('show-legend');
    if (d.showGrid) attrs.push('show-grid');
    if (d.showMarkers) attrs.push('show-markers');
    if (d.enableAnimation) attrs.push('enable-animation');
    if (d.strokeWidth !== 2) attrs.push(`stroke-width="${d.strokeWidth}"`);
    if (d.width !== 600) attrs.push(`width="${d.width}"`);
    if (d.height !== 300) attrs.push(`height="${d.height}"`);
    attrs.push('[data]="seriesData"');

    this.generatedCode.set('<chart-line\n  ' + attrs.join('\n  ') + '\n></chart-line>');
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      dataset: 'monthly',
      strokeWidth: 2,
      width: 600,
      height: 300,
      showLegend: true,
      showGrid: true,
      showMarkers: true,
      enableAnimation: true,
    };
    this.chartData = this.monthlyData;
    this.activeTitle = 'Monthly Revenue';
    this.activeXLabel = 'Month';
    this.activeYLabel = 'Revenue ($k)';
    this.updateConfig();
  }
}
