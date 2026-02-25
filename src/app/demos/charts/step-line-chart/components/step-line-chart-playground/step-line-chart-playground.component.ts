import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-step-line-chart-playground',
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
                <h3>📐 Style</h3>
                <div class="control-group">
                  <label>Stroke Width</label>
                  <input type="range" min="1" max="5" step="0.5" [(ngModel)]="cfg.strokeWidth" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.strokeWidth }}px</span>
                </div>
                <div class="control-group">
                  <label>Point Radius</label>
                  <input type="range" min="0" max="8" step="1" [(ngModel)]="cfg.pointR" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.pointR }}px</span>
                </div>
                <div class="control-group">
                  <label>Color</label>
                  <ui-dropdown [(ngModel)]="cfg.color" (ngModelChange)="update()" [options]="colorOpts"></ui-dropdown>
                </div>
              </div>
              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="fill" [(ngModel)]="cfg.fill" (ngModelChange)="update()" label="Fill Area"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showGrid" [(ngModel)]="cfg.showGrid" (ngModelChange)="update()" label="Show Grid"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showAxes" [(ngModel)]="cfg.showAxes" (ngModelChange)="update()" label="Show Axes"></app-checkbox>
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
          <svg width="600" height="300" style="display:block;font-family:inherit;">
            <defs>
              <linearGradient id="slg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" [attr.stop-color]="cfg.color" stop-opacity="0.3"/>
                <stop offset="100%" [attr.stop-color]="cfg.color" stop-opacity="0.02"/>
              </linearGradient>
            </defs>
            <!-- Grid -->
            <g *ngIf="cfg.showGrid">
              <line *ngFor="let g of hGridLines" [attr.x1]="pad" [attr.y1]="g" x2="570" [attr.y2]="g" stroke="#f3f4f6" stroke-width="1"/>
            </g>
            <!-- Axes -->
            <g *ngIf="cfg.showAxes">
              <line [attr.x1]="pad" [attr.y1]="pad" [attr.x2]="pad" y2="270" stroke="#d1d5db" stroke-width="1"/>
              <line [attr.x1]="pad" y1="270" x2="570" y2="270" stroke="#d1d5db" stroke-width="1"/>
              <text *ngFor="let lbl of xLabels" [attr.x]="lbl.x" y="288" text-anchor="middle" font-size="11" fill="#6b7280">{{ lbl.label }}</text>
              <text *ngFor="let lbl of yLabels" [attr.x]="pad-6" [attr.y]="lbl.y+4" text-anchor="end" font-size="11" fill="#6b7280">{{ lbl.label }}</text>
            </g>
            <!-- Fill area -->
            <path *ngIf="cfg.fill" [attr.d]="areaPath" [attr.fill]="'url(#slg)'"/>
            <!-- Step line -->
            <polyline [attr.points]="stepPolyline" fill="none" [attr.stroke]="cfg.color" [attr.stroke-width]="cfg.strokeWidth" stroke-linejoin="miter"/>
            <!-- Points -->
            <g *ngFor="let p of dataPoints">
              <circle *ngIf="cfg.pointR > 0" [attr.cx]="p.x" [attr.cy]="p.y" [attr.r]="cfg.pointR" [attr.fill]="cfg.color" stroke="white" [attr.stroke-width]="1.5"/>
            </g>
          </svg>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './step-line-chart-playground.component.scss',
})
export class StepLineChartPlaygroundComponent {
  cfg = { strokeWidth: 2.5, pointR: 4, color: '#6366f1', fill: true, showGrid: true, showAxes: true };
  pad = 40;

  colorOpts = [
    { label: 'Indigo', value: '#6366f1' },
    { label: 'Emerald', value: '#10b981' },
    { label: 'Amber', value: '#f59e0b' },
    { label: 'Sky', value: '#0ea5e9' },
  ];

  rawData = [
    { label: 'Jan', value: 20 }, { label: 'Feb', value: 45 }, { label: 'Mar', value: 45 },
    { label: 'Apr', value: 72 }, { label: 'May', value: 60 }, { label: 'Jun', value: 60 },
    { label: 'Jul', value: 88 }, { label: 'Aug', value: 95 }, { label: 'Sep', value: 95 },
  ];

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) { this.update(); }

  get chartW() { return 570 - this.pad; }
  get chartH() { return 270 - this.pad; }

  getX(i: number) { return this.pad + (i / (this.rawData.length - 1)) * this.chartW; }
  getY(v: number) {
    const max = Math.max(...this.rawData.map(d => d.value));
    return this.pad + (1 - v / max) * this.chartH;
  }

  get dataPoints() {
    return this.rawData.map((d, i) => ({ x: this.getX(i), y: this.getY(d.value) }));
  }

  get stepPolyline(): string {
    const pts = this.dataPoints;
    let path = `${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      path += ` ${pts[i].x},${pts[i - 1].y} ${pts[i].x},${pts[i].y}`;
    }
    return path;
  }

  get areaPath(): string {
    const pts = this.dataPoints;
    let d = `M${pts[0].x},270 L${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      d += ` L${pts[i].x},${pts[i - 1].y} L${pts[i].x},${pts[i].y}`;
    }
    d += ` L${pts[pts.length - 1].x},270 Z`;
    return d;
  }

  get hGridLines() { return [this.pad, this.pad + 57, this.pad + 115, this.pad + 172, 270].filter(() => this.cfg.showGrid); }
  get xLabels() { return this.rawData.map((d, i) => ({ x: this.getX(i), label: d.label })); }
  get yLabels() {
    const max = Math.max(...this.rawData.map(d => d.value));
    return [0, 25, 50, 75, 100].map(v => ({ y: this.getY(v), label: Math.round(v * max / 100) }));
  }

  update() {
    const c = `<!-- Step Line Chart (SVG) -->
<svg width="600" height="300">
  <polyline points="${this.stepPolyline}" fill="none" stroke="${this.cfg.color}" stroke-width="${this.cfg.strokeWidth}"/>
  <!-- strokeWidth: ${this.cfg.strokeWidth} | pointRadius: ${this.cfg.pointR} | fill: ${this.cfg.fill} -->
</svg>`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { strokeWidth: 2.5, pointR: 4, color: '#6366f1', fill: true, showGrid: true, showAxes: true };
    this.update();
  }
}
