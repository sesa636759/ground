import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-funnel-chart-playground',
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
                  <label>Orientation</label>
                  <ui-dropdown [(ngModel)]="cfg.orientation" (ngModelChange)="update()" [options]="orientOpts"></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Segment Gap</label>
                  <input type="range" min="0" max="12" step="2" [(ngModel)]="cfg.gap" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.gap }}px</span>
                </div>
                <div class="control-group">
                  <label>Neck Width %</label>
                  <input type="range" min="10" max="50" step="5" [(ngModel)]="cfg.neckPct" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.neckPct }}%</span>
                </div>
              </div>
              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="showVals" [(ngModel)]="cfg.showValues" (ngModelChange)="update()" label="Show Values"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showPct" [(ngModel)]="cfg.showPct" (ngModelChange)="update()" label="Show %"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="curved" [(ngModel)]="cfg.curved" (ngModelChange)="update()" label="Curved Sides"></app-checkbox>
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
          <svg width="420" height="380" style="display:block;font-family:inherit;">
            <g *ngFor="let seg of segments; let i = index">
              <polygon
                [attr.points]="getPoints(i)"
                [attr.fill]="seg.color"
                [attr.opacity]="0.85 - i * 0.05"
              />
              <text [attr.x]="210" [attr.y]="segTop(i) + segH/2 + 5" text-anchor="middle" font-size="13" fill="white" font-weight="700">
                {{ seg.label }}
                <tspan *ngIf="cfg.showValues"> — {{ seg.value }}</tspan>
                <tspan *ngIf="cfg.showPct"> ({{ pct(i) }}%)</tspan>
              </text>
            </g>
          </svg>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './funnel-chart-playground.component.scss',
})
export class FunnelChartPlaygroundComponent {
  cfg = { orientation: 'vertical', gap: 4, neckPct: 20, showValues: true, showPct: true, curved: false };

  orientOpts = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  segments = [
    { label: 'Visitors',     value: 10000, color: '#6366f1' },
    { label: 'Leads',        value: 6500,  color: '#8b5cf6' },
    { label: 'Prospects',    value: 3800,  color: '#0ea5e9' },
    { label: 'Qualified',    value: 1900,  color: '#10b981' },
    { label: 'Customers',    value: 750,   color: '#f59e0b' },
  ];

  get svgH() { return 380; }
  get segH() { return (this.svgH - this.cfg.gap * (this.segments.length - 1)) / this.segments.length; }

  segTop(i: number) { return i * (this.segH + this.cfg.gap); }

  getPoints(i: number): string {
    const maxW = 400; const neckW = (this.cfg.neckPct / 100) * maxW;
    const topW = maxW - (maxW - neckW) * (i / this.segments.length);
    const botW = maxW - (maxW - neckW) * ((i + 1) / this.segments.length);
    const cx = 210;
    const y1 = this.segTop(i); const y2 = y1 + this.segH;
    return `${cx - topW / 2},${y1} ${cx + topW / 2},${y1} ${cx + botW / 2},${y2} ${cx - botW / 2},${y2}`;
  }

  pct(i: number): number {
    const max = this.segments[0].value;
    return Math.round((this.segments[i].value / max) * 100);
  }

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) { this.update(); }

  update() {
    const c = `<!-- Funnel Chart (SVG trapezoids) -->
<svg width="420" height="${this.svgH}">
  <!-- ${this.segments.length} segments | gap: ${this.cfg.gap}px | neckPct: ${this.cfg.neckPct}% -->
  <!-- showValues: ${this.cfg.showValues} | showPct: ${this.cfg.showPct} -->
</svg>`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { orientation: 'vertical', gap: 4, neckPct: 20, showValues: true, showPct: true, curved: false };
    this.update();
  }
}
