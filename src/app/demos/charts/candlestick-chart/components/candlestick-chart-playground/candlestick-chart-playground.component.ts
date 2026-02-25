import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

interface Candle { date: string; open: number; high: number; low: number; close: number; }

@Component({
  selector: 'app-candlestick-chart-playground',
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
                  <label>Candle Width</label>
                  <input type="range" min="8" max="28" step="2" [(ngModel)]="cfg.candleW" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.candleW }}px</span>
                </div>
                <div class="control-group">
                  <label>Up Color</label>
                  <ui-dropdown [(ngModel)]="cfg.upColor" (ngModelChange)="update()" [options]="upColorOpts"></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Down Color</label>
                  <ui-dropdown [(ngModel)]="cfg.downColor" (ngModelChange)="update()" [options]="downColorOpts"></ui-dropdown>
                </div>
              </div>
              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="showGrid" [(ngModel)]="cfg.showGrid" (ngModelChange)="update()" label="Show Grid"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showDates" [(ngModel)]="cfg.showDates" (ngModelChange)="update()" label="Show Dates"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="hollow" [(ngModel)]="cfg.hollow" (ngModelChange)="update()" label="Hollow Style"></app-checkbox>
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
          <svg width="620" height="340" style="display:block;font-family:inherit;">
            <!-- Y Axis -->
            <g *ngFor="let t of yTicks">
              <line *ngIf="cfg.showGrid" [attr.x1]="padL" [attr.y1]="t.y" x2="605" [attr.y2]="t.y" stroke="#f3f4f6" stroke-width="1"/>
              <text [attr.x]="padL-6" [attr.y]="t.y+4" text-anchor="end" font-size="10" fill="#9ca3af">{{ t.val }}</text>
            </g>
            <!-- X Axis -->
            <line [attr.x1]="padL" [attr.y1]="padT+chartH" x2="605" [attr.y2]="padT+chartH" stroke="#e5e7eb" stroke-width="1"/>
            <!-- Candles -->
            <g *ngFor="let c of candles; let i = index">
              <!-- Wick -->
              <line
                [attr.x1]="cx(i)" [attr.y1]="yScale(c.high)"
                [attr.x2]="cx(i)" [attr.y2]="yScale(c.low)"
                [attr.stroke]="c.close >= c.open ? cfg.upColor : cfg.downColor"
                stroke-width="1.5"
              />
              <!-- Body -->
              <rect
                [attr.x]="cx(i) - cfg.candleW/2"
                [attr.y]="yScale(Math.max(c.open, c.close))"
                [attr.width]="cfg.candleW"
                [attr.height]="Math.max(2, Math.abs(yScale(c.open) - yScale(c.close)))"
                [attr.fill]="cfg.hollow ? 'none' : (c.close >= c.open ? cfg.upColor : cfg.downColor)"
                [attr.stroke]="c.close >= c.open ? cfg.upColor : cfg.downColor"
                stroke-width="1.5"
              />
              <!-- Date -->
              <text *ngIf="cfg.showDates && i % 2 === 0"
                [attr.x]="cx(i)" [attr.y]="padT+chartH+16"
                text-anchor="middle" font-size="9" fill="#9ca3af">{{ c.date }}</text>
            </g>
          </svg>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './candlestick-chart-playground.component.scss',
})
export class CandlestickChartPlaygroundComponent {
  cfg = { candleW: 14, upColor: '#10b981', downColor: '#f43f5e', showGrid: true, showDates: true, hollow: false };
  Math = Math;

  upColorOpts = [
    { label: 'Emerald', value: '#10b981' }, { label: 'Green', value: '#22c55e' },
    { label: 'Sky', value: '#0ea5e9' }, { label: 'Indigo', value: '#6366f1' },
  ];
  downColorOpts = [
    { label: 'Rose', value: '#f43f5e' }, { label: 'Red', value: '#ef4444' },
    { label: 'Orange', value: '#fb923c' }, { label: 'Amber', value: '#f59e0b' },
  ];

  candles: Candle[] = [
    { date: '1/2', open: 142, high: 148, low: 139, close: 145 },
    { date: '1/3', open: 145, high: 152, low: 143, close: 150 },
    { date: '1/4', open: 150, high: 155, low: 146, close: 148 },
    { date: '1/5', open: 148, high: 154, low: 145, close: 153 },
    { date: '1/6', open: 153, high: 158, low: 149, close: 156 },
    { date: '1/9', open: 156, high: 160, low: 151, close: 152 },
    { date: '1/10', open: 152, high: 157, low: 148, close: 155 },
    { date: '1/11', open: 155, high: 162, low: 153, close: 160 },
    { date: '1/12', open: 160, high: 165, low: 157, close: 158 },
    { date: '1/13', open: 158, high: 163, low: 154, close: 161 },
    { date: '1/16', open: 161, high: 168, low: 159, close: 166 },
    { date: '1/17', open: 166, high: 171, low: 162, close: 164 },
    { date: '1/18', open: 164, high: 170, low: 161, close: 168 },
    { date: '1/19', open: 168, high: 173, low: 165, close: 163 },
    { date: '1/20', open: 163, high: 168, low: 159, close: 165 },
  ];

  padL = 44; padT = 20; chartH = 280; svgW = 620;
  get minVal() { return Math.min(...this.candles.map(c => c.low)) - 5; }
  get maxVal() { return Math.max(...this.candles.map(c => c.high)) + 5; }

  yScale(v: number) { return this.padT + (1 - (v - this.minVal) / (this.maxVal - this.minVal)) * this.chartH; }
  cx(i: number) { return this.padL + (i + 0.5) * (this.svgW - this.padL) / this.candles.length; }

  get yTicks() {
    const step = (this.maxVal - this.minVal) / 5;
    return Array.from({ length: 6 }, (_, i) => {
      const val = Math.round(this.minVal + i * step);
      return { val, y: this.yScale(val) };
    });
  }

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) { this.update(); }

  update() {
    const c = `<!-- Candlestick Chart (SVG) -->
<svg width="${this.svgW}" height="340">
  <!-- candleWidth: ${this.cfg.candleW}px | upColor: ${this.cfg.upColor} | downColor: ${this.cfg.downColor} -->
  <!-- hollow: ${this.cfg.hollow} | showGrid: ${this.cfg.showGrid} -->
</svg>`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { candleW: 14, upColor: '#10b981', downColor: '#f43f5e', showGrid: true, showDates: true, hollow: false };
    this.update();
  }
}
