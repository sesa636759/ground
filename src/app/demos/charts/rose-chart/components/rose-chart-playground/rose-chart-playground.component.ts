import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-rose-chart-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective, UiDropdownValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion items='[{"id":"cfg","title":"Configuration","icon":"⚙️"}]' defaultOpen='["cfg"]' multiple>
          <div slot="content-cfg">
            <div class="control-grid">
              <div class="control-section">
                <h3>📐 Layout</h3>
                <div class="control-group">
                  <label>Size</label>
                  <input type="range" min="200" max="380" step="20" [(ngModel)]="cfg.size" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.size }}px</span>
                </div>
                <div class="control-group">
                  <label>Inner Radius</label>
                  <input type="range" min="0" max="60" step="5" [(ngModel)]="cfg.innerR" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.innerR }}px</span>
                </div>
                <div class="control-group">
                  <label>Dataset</label>
                  <ui-dropdown [(ngModel)]="cfg.dataset" (ngModelChange)="onDataset()" [options]="datasetOpts"></ui-dropdown>
                </div>
              </div>
              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="showLabels" [(ngModel)]="cfg.showLabels" (ngModelChange)="update()" label="Show Labels"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showVals" [(ngModel)]="cfg.showValues" (ngModelChange)="update()" label="Show Values"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="legend" [(ngModel)]="cfg.showLegend" (ngModelChange)="update()" label="Show Legend"></app-checkbox>
                </div>
              </div>
            </div>
            <div class="action-buttons">
              <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
              <ui-button variant="secondary" (click)="reset()" label="Reset"></ui-button>
            </div>
          </div>
        </ui-accordion>
      </div>
      <div class="playground-preview">
        <div class="chart-preview-wrapper" style="flex-direction:column;gap:16px;">
          <app-chart
            chartType="polarArea"
            [showLegend]="cfg.showLegend"
            legendPosition="right"
            [responsive]="true"
            [data]="activeData"
            style="width:100%;max-width:480px;height:360px;margin:0 auto;display:block;"
          ></app-chart>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './rose-chart-playground.component.scss',
})
export class RoseChartPlaygroundComponent {
  cfg = { size: 320, innerR: 0, dataset: 'monthly', showLabels: true, showValues: false, showLegend: true };

  datasetOpts = [
    { label: 'Monthly Revenue', value: 'monthly' },
    { label: 'Performance Score', value: 'perf' },
    { label: 'Wind Direction', value: 'wind' },
  ];

  monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{ data: [42, 55, 48, 70, 65, 90, 88, 95, 78, 68, 52, 60], backgroundColor: ['#6366f1','#7c3aed','#0ea5e9','#10b981','#f59e0b','#f43f5e','#8b5cf6','#06b6d4','#84cc16','#fb923c','#a855f7','#ec4899'], borderWidth: 1 }],
  };

  perfData = {
    labels: ['Speed', 'Reliability', 'Security', 'UX', 'Scalability', 'Accessibility', 'Performance', 'Coverage'],
    datasets: [{ data: [85, 92, 78, 95, 88, 76, 91, 83], backgroundColor: ['#6366f1','#10b981','#f59e0b','#0ea5e9','#f43f5e','#8b5cf6','#06b6d4','#fb923c'], borderWidth: 1 }],
  };

  windData = {
    labels: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
    datasets: [{ data: [22, 14, 18, 30, 25, 10, 16, 20], backgroundColor: ['#6366f1','#8b5cf6','#0ea5e9','#10b981','#f59e0b','#f43f5e','#06b6d4','#fb923c'], borderWidth: 1 }],
  };

  activeData: any = this.monthlyData;
  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) { this.update(); }

  onDataset() {
    if (this.cfg.dataset === 'perf') this.activeData = { ...this.perfData };
    else if (this.cfg.dataset === 'wind') this.activeData = { ...this.windData };
    else this.activeData = { ...this.monthlyData };
    this.update();
  }

  update() {
    const c = `<!-- Rose / Nightingale Chart -->
<app-chart
  chartType="polarArea"
  [showLegend]="${this.cfg.showLegend}"
  legendPosition="right"
  [responsive]="true"
  [data]="roseData"
  style="width: 480px; height: 360px;"
></app-chart>

// TypeScript
roseData = ${JSON.stringify(this.activeData, null, 2)};`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { size: 320, innerR: 0, dataset: 'monthly', showLabels: true, showValues: false, showLegend: true };
    this.activeData = { ...this.monthlyData };
    this.update();
  }
}
