import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-polar-area-chart-playground',
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
                  <label>Dataset</label>
                  <ui-dropdown [(ngModel)]="cfg.dataset" (ngModelChange)="onDataset()" [options]="datasetOpts"></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Legend Position</label>
                  <ui-dropdown [(ngModel)]="cfg.legendPos" (ngModelChange)="update()" [options]="legendOpts"></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Fill Opacity</label>
                  <input type="range" min="0.3" max="1" step="0.05" [(ngModel)]="cfg.opacity" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.opacity }}</span>
                </div>
              </div>
              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="legend" [(ngModel)]="cfg.showLegend" (ngModelChange)="update()" label="Show Legend"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="anim" [(ngModel)]="cfg.animate" (ngModelChange)="update()" label="Animate"></app-checkbox>
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
        <div class="chart-preview-wrapper">
          <app-chart
            chartType="polarArea"
            [showLegend]="cfg.showLegend"
            [legendPosition]="cfg.legendPos"
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
  styleUrl: './polar-area-chart-playground.component.scss',
})
export class PolarAreaChartPlaygroundComponent {
  cfg = { dataset: 'skills', legendPos: 'right', opacity: 0.7, showLegend: true, animate: true };

  datasetOpts = [
    { label: 'Developer Skills', value: 'skills' },
    { label: 'Market Share', value: 'market' },
    { label: 'Project Budget', value: 'budget' },
  ];

  legendOpts = [
    { label: 'Right', value: 'right' }, { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' }, { label: 'Left', value: 'left' },
  ];

  skillsData = {
    labels: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'CSS'],
    datasets: [{ data: [90, 85, 92, 78, 82, 88], backgroundColor: ['rgba(99,102,241,0.7)','rgba(139,92,246,0.7)','rgba(14,165,233,0.7)','rgba(16,185,129,0.7)','rgba(245,158,11,0.7)','rgba(244,63,94,0.7)'], borderWidth: 1 }],
  };

  marketData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [{ data: [38, 22, 18, 12, 10], backgroundColor: ['rgba(99,102,241,0.7)','rgba(16,185,129,0.7)','rgba(245,158,11,0.7)','rgba(14,165,233,0.7)','rgba(244,63,94,0.7)'], borderWidth: 1 }],
  };

  budgetData = {
    labels: ['Engineering', 'Marketing', 'Operations', 'HR', 'R&D', 'Sales'],
    datasets: [{ data: [40, 15, 20, 10, 10, 5], backgroundColor: ['rgba(99,102,241,0.7)','rgba(245,158,11,0.7)','rgba(16,185,129,0.7)','rgba(14,165,233,0.7)','rgba(244,63,94,0.7)','rgba(139,92,246,0.7)'], borderWidth: 1 }],
  };

  activeData: any = this.skillsData;
  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) { this.update(); }

  onDataset() {
    if (this.cfg.dataset === 'market') this.activeData = { ...this.marketData };
    else if (this.cfg.dataset === 'budget') this.activeData = { ...this.budgetData };
    else this.activeData = { ...this.skillsData };
    this.update();
  }

  update() {
    const c = `<!-- Polar Area Chart -->
<app-chart
  chartType="polarArea"
  [showLegend]="${this.cfg.showLegend}"
  legendPosition="${this.cfg.legendPos}"
  [responsive]="true"
  [data]="polarData"
  style="width: 480px; height: 360px;"
></app-chart>

// TypeScript
polarData = ${JSON.stringify(this.activeData, null, 2)};`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { dataset: 'skills', legendPos: 'right', opacity: 0.7, showLegend: true, animate: true };
    this.activeData = { ...this.skillsData };
    this.update();
  }
}
