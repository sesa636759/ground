import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-pie-chart-playground',
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
                <h3>📐 Type</h3>
                <div class="control-group">
                  <label>Chart Type</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.chartType"
                    (ngModelChange)="updateConfig()"
                    [options]="typeOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Dataset</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.dataset"
                    (ngModelChange)="onDatasetChange()"
                    [options]="datasetOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group" *ngIf="pgConfig.chartType === 'doughnut'">
                  <label>Cutout %</label>
                  <input type="range" min="30" max="80" step="5"
                    [(ngModel)]="pgConfig.cutout"
                    (ngModelChange)="updateConfig()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ pgConfig.cutout }}%</span>
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
                  <label>Border Width</label>
                  <input type="range" min="0" max="6" step="1"
                    [(ngModel)]="pgConfig.borderWidth"
                    (ngModelChange)="updateConfig()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ pgConfig.borderWidth }}px</span>
                </div>
              </div>

              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="showLegend" [(ngModel)]="pgConfig.showLegend"
                    (ngModelChange)="updateConfig()" label="Show Legend"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="responsive" [(ngModel)]="pgConfig.responsive"
                    (ngModelChange)="updateConfig()" label="Responsive"></app-checkbox>
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
        <div class="pie-preview-wrapper">
          <app-chart
            [chartType]="pgConfig.chartType"
            [showLegend]="pgConfig.showLegend"
            [legendPosition]="pgConfig.legendPosition"
            [responsive]="pgConfig.responsive"
            [data]="activeChartData"
            [options]="activeOptions"
            style="width: 100%; max-width: 480px; height: 360px; margin: 0 auto; display: block;"
          ></app-chart>
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
  styleUrl: './pie-chart-playground.component.scss',
})
export class PieChartPlaygroundComponent {
  pgConfig = {
    chartType: 'pie',
    dataset: 'sales',
    cutout: 60,
    legendPosition: 'right',
    borderWidth: 2,
    showLegend: true,
    responsive: true,
    enableAnimation: true,
    showTooltip: true,
  };

  typeOptions = [
    { label: 'Pie', value: 'pie' },
    { label: 'Doughnut', value: 'doughnut' },
    { label: 'Polar Area', value: 'polarArea' },
  ];

  datasetOptions = [
    { label: 'Sales by Region', value: 'sales' },
    { label: 'Budget Allocation', value: 'budget' },
    { label: 'Market Share', value: 'market' },
  ];

  legendPositionOptions = [
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
  ];

  salesData = {
    labels: ['North', 'South', 'East', 'West', 'Central'],
    datasets: [{
      data: [35, 20, 18, 15, 12],
      backgroundColor: ['#6366f1', '#f59e0b', '#10b981', '#0ea5e9', '#f43f5e'],
      borderWidth: 2,
      borderColor: '#ffffff',
    }],
  };

  budgetData = {
    labels: ['Engineering', 'Marketing', 'Operations', 'HR', 'R&D'],
    datasets: [{
      data: [40, 15, 20, 10, 15],
      backgroundColor: ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'],
      borderWidth: 2,
      borderColor: '#ffffff',
    }],
  };

  marketData = {
    labels: ['Product A', 'Product B', 'Product C', 'Others'],
    datasets: [{
      data: [42, 28, 18, 12],
      backgroundColor: ['#0ea5e9', '#22d3ee', '#67e8f9', '#bae6fd'],
      borderWidth: 2,
      borderColor: '#ffffff',
    }],
  };

  activeChartData: any = this.salesData;
  activeOptions: any = {};
  generatedCode = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  onDatasetChange() {
    if (this.pgConfig.dataset === 'budget') {
      this.activeChartData = { ...this.budgetData };
    } else if (this.pgConfig.dataset === 'market') {
      this.activeChartData = { ...this.marketData };
    } else {
      this.activeChartData = { ...this.salesData };
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
    if (this.pgConfig.chartType === 'doughnut') {
      this.activeOptions = { cutout: `${this.pgConfig.cutout}%` };
    } else {
      this.activeOptions = {};
    }
    let code = '<app-chart\n';
    code += `  chartType="${this.pgConfig.chartType}"\n`;
    code += `  [showLegend]="${this.pgConfig.showLegend}"\n`;
    code += `  legendPosition="${this.pgConfig.legendPosition}"\n`;
    code += `  [responsive]="${this.pgConfig.responsive}"\n`;
    if (this.pgConfig.chartType === 'doughnut') {
      code += `  [options]="{ cutout: '${this.pgConfig.cutout}%' }"\n`;
    }
    code += `  [data]="chartData"\n`;
    code += '></app-chart>';
    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      chartType: 'pie',
      dataset: 'sales',
      cutout: 60,
      legendPosition: 'right',
      borderWidth: 2,
      showLegend: true,
      responsive: true,
      enableAnimation: true,
      showTooltip: true,
    };
    this.activeChartData = { ...this.salesData };
    this.activeOptions = {};
    this.updateConfig();
  }
}
