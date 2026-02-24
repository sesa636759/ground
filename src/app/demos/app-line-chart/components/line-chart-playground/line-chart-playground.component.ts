import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-line-chart-playground',
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
                <h3>📐 Data</h3>
                <div class="control-group">
                  <label>Dataset</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.dataset"
                    (ngModelChange)="onDatasetChange()"
                    [options]="datasetOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Curve Style</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.curveStyle"
                    (ngModelChange)="updateConfig()"
                    [options]="curveOptions"
                  ></ui-dropdown>
                </div>
              </div>

              <div class="control-section">
                <h3>🎨 Appearance</h3>
                <div class="control-group">
                  <label>Legend Position</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.legendPosition"
                    (ngModelChange)="updateConfig()"
                    [options]="legendPositionOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Point Radius</label>
                  <input type="range" min="0" max="8" step="1"
                    [(ngModel)]="pgConfig.pointRadius"
                    (ngModelChange)="updateConfig()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ pgConfig.pointRadius }}px</span>
                </div>
                <div class="control-group">
                  <label>Line Width</label>
                  <input type="range" min="1" max="6" step="1"
                    [(ngModel)]="pgConfig.lineWidth"
                    (ngModelChange)="updateConfig()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ pgConfig.lineWidth }}px</span>
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
                  <app-checkbox id="fillArea" [(ngModel)]="pgConfig.fillArea"
                    (ngModelChange)="updateConfig()" label="Fill Area"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showPoints" [(ngModel)]="pgConfig.showPoints"
                    (ngModelChange)="updateConfig()" label="Show Points"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="enableAnimation" [(ngModel)]="pgConfig.enableAnimation"
                    (ngModelChange)="updateConfig()" label="Animate on Load"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="responsive" [(ngModel)]="pgConfig.responsive"
                    (ngModelChange)="updateConfig()" label="Responsive"></app-checkbox>
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
        <ui-chart
          type="line"
          [attr.fill]="pgConfig.fillArea ? 'true' : 'false'"
          [attr.show-legend]="pgConfig.showLegend ? '' : null"
          [attr.show-grid]="pgConfig.showGrid ? '' : null"
          [attr.responsive]="pgConfig.responsive ? '' : null"
          [attr.enable-animation]="pgConfig.enableAnimation ? '' : null"
          [attr.legend-position]="pgConfig.legendPosition"
          [attr.point-radius]="pgConfig.pointRadius"
          [attr.border-width]="pgConfig.lineWidth"
          [attr.tension]="tensionValue"
          [data]="chartDataJson"
          style="width: 100%; height: 380px;"
        ></ui-chart>

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
  styleUrl: './line-chart-playground.component.scss',
})
export class LineChartPlaygroundComponent {
  pgConfig = {
    dataset: 'monthly',
    curveStyle: 'smooth',
    legendPosition: 'top',
    pointRadius: 4,
    lineWidth: 2,
    showLegend: true,
    showGrid: true,
    fillArea: false,
    showPoints: true,
    enableAnimation: true,
    responsive: true,
  };

  datasetOptions = [
    { label: 'Monthly Revenue', value: 'monthly' },
    { label: 'Multi Series', value: 'multi' },
    { label: 'Weekly Trend', value: 'weekly' },
  ];

  curveOptions = [
    { label: 'Smooth (Bezier)', value: 'smooth' },
    { label: 'Straight Lines', value: 'straight' },
    { label: 'Step', value: 'step' },
  ];

  legendPositionOptions = [
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Revenue ($k)',
        data: [42, 58, 53, 70, 89, 95, 112, 104],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.15)',
      },
    ],
  };

  multiData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Revenue',
        data: [42, 58, 53, 70, 89, 95, 112, 104],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.1)',
      },
      {
        label: 'Expenses',
        data: [30, 40, 45, 55, 60, 65, 75, 80],
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245,158,11,0.1)',
      },
      {
        label: 'Profit',
        data: [12, 18, 8, 15, 29, 30, 37, 24],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16,185,129,0.1)',
      },
    ],
  };

  weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Visitors',
        data: [1200, 1900, 1700, 2100, 2400, 1800, 1100],
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14,165,233,0.15)',
      },
    ],
  };

  chartDataJson = JSON.stringify(this.monthlyData);
  generatedCode = signal('');
  showCode = true;

  get tensionValue(): number {
    if (this.pgConfig.curveStyle === 'smooth') return 0.4;
    if (this.pgConfig.curveStyle === 'step') return 0;
    return 0;
  }

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  onDatasetChange() {
    if (this.pgConfig.dataset === 'multi') {
      this.chartDataJson = JSON.stringify(this.multiData);
    } else if (this.pgConfig.dataset === 'weekly') {
      this.chartDataJson = JSON.stringify(this.weeklyData);
    } else {
      this.chartDataJson = JSON.stringify(this.monthlyData);
    }
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
    let code = '<ui-chart\n';
    code += `  type="line"\n`;
    if (this.pgConfig.fillArea) code += `  fill="true"\n`;
    if (this.pgConfig.showLegend) code += `  show-legend\n`;
    if (this.pgConfig.showGrid) code += `  show-grid\n`;
    if (this.pgConfig.responsive) code += `  responsive\n`;
    if (this.pgConfig.enableAnimation) code += `  enable-animation\n`;
    code += `  legend-position="${this.pgConfig.legendPosition}"\n`;
    code += `  point-radius="${this.pgConfig.pointRadius}"\n`;
    code += `  border-width="${this.pgConfig.lineWidth}"\n`;
    if (this.pgConfig.curveStyle === 'smooth') code += `  tension="0.4"\n`;
    code += `  [data]="chartData"\n`;
    code += '></ui-chart>';
    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      dataset: 'monthly',
      curveStyle: 'smooth',
      legendPosition: 'top',
      pointRadius: 4,
      lineWidth: 2,
      showLegend: true,
      showGrid: true,
      fillArea: false,
      showPoints: true,
      enableAnimation: true,
      responsive: true,
    };
    this.chartDataJson = JSON.stringify(this.monthlyData);
    this.updateConfig();
  }
}
