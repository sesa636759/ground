import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';

interface GanttTask { id: string; name: string; start: number; end: number; color: string; group: string; }

@Component({
  selector: 'app-gantt-chart-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion items='[{"id":"cfg","title":"Configuration","icon":"⚙️"}]' defaultOpen='["cfg"]' multiple>
          <div slot="content-cfg">
            <div class="control-grid">
              <div class="control-section">
                <h3>📋 Display</h3>
                <div class="control-group">
                  <label>Row Height</label>
                  <input type="range" min="28" max="56" step="4" [(ngModel)]="cfg.rowH" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.rowH }}px</span>
                </div>
                <div class="control-group">
                  <label>Corner Radius</label>
                  <input type="range" min="0" max="10" step="2" [(ngModel)]="cfg.radius" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.radius }}px</span>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showDeps" [(ngModel)]="cfg.showDeps" (ngModelChange)="update()" label="Show Dependencies"></app-checkbox>
                </div>
              </div>
              <div class="control-section">
                <h3>🎨 Style</h3>
                <div class="checkbox-group">
                  <app-checkbox id="showGrid" [(ngModel)]="cfg.showGrid" (ngModelChange)="update()" label="Show Grid"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showLabels" [(ngModel)]="cfg.showLabels" (ngModelChange)="update()" label="Bar Labels"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="zebra" [(ngModel)]="cfg.zebra" (ngModelChange)="update()" label="Zebra Rows"></app-checkbox>
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
          <div style="width:100%;max-width:720px;overflow-x:auto;">
            <svg [attr.width]="svgW" [attr.height]="svgH" style="display:block;font-family:inherit;">
              <!-- Header -->
              <rect x="0" y="0" [attr.width]="svgW" [attr.height]="headerH" fill="#f9fafb"/>
              <text x="4" [attr.y]="headerH-8" font-size="11" font-weight="600" fill="#6b7280">TASK</text>
              <g *ngFor="let col of cols">
                <text [attr.x]="labelW + col.x + colW/2" [attr.y]="headerH-8" text-anchor="middle" font-size="11" fill="#6b7280">{{ col.label }}</text>
                <line *ngIf="cfg.showGrid" [attr.x1]="labelW+col.x" [attr.y1]="headerH" [attr.x2]="labelW+col.x" [attr.y2]="svgH" stroke="#e5e7eb" stroke-width="1"/>
              </g>
              <line [attr.x1]="0" [attr.y1]="headerH" [attr.x2]="svgW" [attr.y2]="headerH" stroke="#e5e7eb" stroke-width="1"/>
              <!-- Tasks -->
              <g *ngFor="let task of tasks; let i = index">
                <rect *ngIf="cfg.zebra && i%2===0" x="0" [attr.y]="rowY(i)" [attr.width]="svgW" [attr.height]="cfg.rowH" fill="#fafafa"/>
                <text [attr.x]="4" [attr.y]="rowY(i)+cfg.rowH/2+4" font-size="12" fill="#374151">{{ task.name }}</text>
                <rect
                  [attr.x]="labelW + xScale(task.start)"
                  [attr.y]="rowY(i)+4"
                  [attr.width]="xScale(task.end) - xScale(task.start)"
                  [attr.height]="cfg.rowH-8"
                  [attr.rx]="cfg.radius"
                  [attr.fill]="task.color"
                  opacity="0.85"
                />
                <text *ngIf="cfg.showLabels && xScale(task.end)-xScale(task.start) > 50"
                  [attr.x]="labelW + xScale(task.start) + (xScale(task.end)-xScale(task.start))/2"
                  [attr.y]="rowY(i)+cfg.rowH/2+4"
                  text-anchor="middle" font-size="11" fill="white" font-weight="600">{{ task.name }}</text>
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
  styleUrl: './gantt-chart-playground.component.scss',
})
export class GanttChartPlaygroundComponent {
  cfg = { rowH: 36, radius: 4, showDeps: true, showGrid: true, showLabels: true, zebra: true };

  labelW = 120; headerH = 32; gap = 4;
  svgW = 720;
  totalDays = 60; colW = 0;

  cols = [
    { x: 0,   label: 'Week 1' }, { x: 100, label: 'Week 2' }, { x: 200, label: 'Week 3' },
    { x: 300, label: 'Week 4' }, { x: 400, label: 'Week 5' }, { x: 500, label: 'Week 6' },
  ];

  tasks: GanttTask[] = [
    { id:'1', name: 'Requirements', start: 0,  end: 10, color: '#6366f1', group: 'Phase 1' },
    { id:'2', name: 'UI Design',    start: 8,  end: 22, color: '#8b5cf6', group: 'Phase 1' },
    { id:'3', name: 'Backend API',  start: 15, end: 38, color: '#0ea5e9', group: 'Phase 2' },
    { id:'4', name: 'Frontend Dev', start: 20, end: 45, color: '#10b981', group: 'Phase 2' },
    { id:'5', name: 'Integration',  start: 42, end: 52, color: '#f59e0b', group: 'Phase 3' },
    { id:'6', name: 'Testing',      start: 48, end: 55, color: '#f43f5e', group: 'Phase 3' },
    { id:'7', name: 'Deployment',   start: 54, end: 60, color: '#64748b', group: 'Phase 4' },
  ];

  showCode = true;
  code = signal('');

  get svgH() { return this.headerH + this.tasks.length * (this.cfg.rowH + this.gap) + 8; }

  rowY(i: number) { return this.headerH + i * (this.cfg.rowH + this.gap); }

  xScale(day: number): number {
    return (day / this.totalDays) * (this.svgW - this.labelW);
  }

  constructor(private cd: ChangeDetectorRef) { this.update(); }

  update() {
    const c = `<!-- Gantt Chart (SVG) -->
<svg width="${this.svgW}" height="${this.svgH}">
  <!-- Tasks rendered as horizontal bars -->
  <!-- rowHeight: ${this.cfg.rowH}px | radius: ${this.cfg.radius}px -->
  <!-- showGrid: ${this.cfg.showGrid} | zebra: ${this.cfg.zebra} -->
</svg>`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { rowH: 36, radius: 4, showDeps: true, showGrid: true, showLabels: true, zebra: true };
    this.update();
  }
}
