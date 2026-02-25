import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-timeline-range-playground',
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
                <h3>📋 Dataset</h3>
                <div class="control-group">
                  <label>Category</label>
                  <ui-dropdown [(ngModel)]="cfg.dataset" (ngModelChange)="update()" [options]="datasetOpts"></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Row Height</label>
                  <input type="range" min="24" max="56" step="4" [(ngModel)]="cfg.rowHeight" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.rowHeight }}px</span>
                </div>
              </div>
              <div class="control-section">
                <h3>🎨 Style</h3>
                <div class="control-group">
                  <label>Corner Radius</label>
                  <input type="range" min="0" max="12" step="2" [(ngModel)]="cfg.radius" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.radius }}px</span>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showTooltip" [(ngModel)]="cfg.showTooltip" (ngModelChange)="update()" label="Show Tooltip"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showLabels" [(ngModel)]="cfg.showLabels" (ngModelChange)="update()" label="Show Labels"></app-checkbox>
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
          <div style="width:100%;max-width:700px;overflow-x:auto;">
            <svg [attr.width]="svgWidth" [attr.height]="svgHeight" style="font-family:inherit;display:block;margin:0 auto;">
              <!-- Grid lines -->
              <g *ngFor="let col of gridCols">
                <line [attr.x1]="labelW + col.x" [attr.y1]="headerH" [attr.x2]="labelW + col.x" [attr.y2]="svgHeight" stroke="#e5e7eb" stroke-width="1"/>
                <text [attr.x]="labelW + col.x" [attr.y]="headerH - 6" text-anchor="middle" font-size="11" fill="#6b7280">{{ col.label }}</text>
              </g>
              <!-- Rows -->
              <g *ngFor="let row of activeRows; let i = index">
                <rect [attr.x]="0" [attr.y]="headerH + i * (cfg.rowHeight + gap)" [attr.width]="labelW - 8" [attr.height]="cfg.rowHeight" fill="transparent"/>
                <text [attr.x]="labelW - 12" [attr.y]="headerH + i * (cfg.rowHeight + gap) + cfg.rowHeight / 2 + 4" text-anchor="end" font-size="12" fill="#374151">{{ row.label }}</text>
                <g *ngFor="let bar of row.bars">
                  <rect
                    [attr.x]="labelW + bar.x1"
                    [attr.y]="headerH + i * (cfg.rowHeight + gap) + 3"
                    [attr.width]="bar.x2 - bar.x1"
                    [attr.height]="cfg.rowHeight - 6"
                    [attr.rx]="cfg.radius"
                    [attr.fill]="bar.color"
                    opacity="0.85"
                  />
                  <text *ngIf="cfg.showLabels && (bar.x2 - bar.x1) > 40"
                    [attr.x]="labelW + bar.x1 + (bar.x2 - bar.x1) / 2"
                    [attr.y]="headerH + i * (cfg.rowHeight + gap) + cfg.rowHeight / 2 + 4"
                    text-anchor="middle" font-size="11" fill="white" font-weight="600">{{ bar.label }}</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './timeline-range-playground.component.scss',
})
export class TimelineRangePlaygroundComponent {
  cfg = { dataset: 'project', rowHeight: 36, radius: 6, showTooltip: true, showLabels: true };

  datasetOpts = [
    { label: 'Project Phases', value: 'project' },
    { label: 'Team Schedule', value: 'team' },
    { label: 'Sprint Planning', value: 'sprint' },
  ];

  labelW = 110; headerH = 30; gap = 8;
  svgWidth = 700; svgHeight = 200;
  showCode = true;
  code = signal('');

  projectRows = [
    { label: 'Planning',    bars: [{ x1: 0,   x2: 100, color: '#6366f1', label: 'Planning' }] },
    { label: 'Design',      bars: [{ x1: 80,  x2: 220, color: '#8b5cf6', label: 'Design' }] },
    { label: 'Development', bars: [{ x1: 180, x2: 450, color: '#0ea5e9', label: 'Development' }] },
    { label: 'Testing',     bars: [{ x1: 380, x2: 510, color: '#f59e0b', label: 'Testing' }] },
    { label: 'Deployment',  bars: [{ x1: 490, x2: 575, color: '#10b981', label: 'Deploy' }] },
  ];
  teamRows = [
    { label: 'Alice',  bars: [{ x1: 0, x2: 200, color: '#6366f1', label: 'Task A' }, { x1: 230, x2: 420, color: '#10b981', label: 'Task B' }] },
    { label: 'Bob',    bars: [{ x1: 50, x2: 280, color: '#f59e0b', label: 'Task C' }, { x1: 310, x2: 575, color: '#0ea5e9', label: 'Task D' }] },
    { label: 'Carol',  bars: [{ x1: 100, x2: 330, color: '#f43f5e', label: 'Task E' }] },
    { label: 'Dave',   bars: [{ x1: 200, x2: 490, color: '#8b5cf6', label: 'Task F' }] },
  ];
  sprintRows = [
    { label: 'Sprint 1', bars: [{ x1: 0,   x2: 140, color: '#6366f1', label: 'S1' }] },
    { label: 'Sprint 2', bars: [{ x1: 140, x2: 285, color: '#0ea5e9', label: 'S2' }] },
    { label: 'Sprint 3', bars: [{ x1: 285, x2: 420, color: '#10b981', label: 'S3' }] },
    { label: 'Sprint 4', bars: [{ x1: 420, x2: 575, color: '#f59e0b', label: 'S4' }] },
  ];

  gridCols = [
    { x: 0, label: 'Jan' }, { x: 96, label: 'Feb' }, { x: 192, label: 'Mar' },
    { x: 287, label: 'Apr' }, { x: 383, label: 'May' }, { x: 479, label: 'Jun' }, { x: 575, label: '' },
  ];

  get activeRows() {
    if (this.cfg.dataset === 'team') return this.teamRows;
    if (this.cfg.dataset === 'sprint') return this.sprintRows;
    return this.projectRows;
  }

  constructor(private cd: ChangeDetectorRef) { this.update(); }

  update() {
    this.svgHeight = this.headerH + this.activeRows.length * (this.cfg.rowHeight + this.gap) + 8;
    const c = `<!-- Timeline Range Chart -->
<div class="timeline-range-chart">
  <svg width="700" height="${this.svgHeight}">
    <!-- rows with bars for dataset: ${this.cfg.dataset} -->
    <!-- rowHeight: ${this.cfg.rowHeight}px | radius: ${this.cfg.radius}px -->
  </svg>
</div>`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { dataset: 'project', rowHeight: 36, radius: 6, showTooltip: true, showLabels: true };
    this.update();
  }
}
