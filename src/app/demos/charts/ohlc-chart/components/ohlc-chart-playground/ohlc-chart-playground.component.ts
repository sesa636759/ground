import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

interface OhlcBar { date: string; open: number; high: number; low: number; close: number; }

@Component({
  selector: 'app-ohlc-chart-playground',
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
                  <label>Bar Width</label>
                  <input type="range" min="4" max="20" step="2" [(ngModel)]="cfg.barW" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.barW }}px</span>
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
                  <app-checkbox id="showMA" [(ngModel)]="cfg.showMA" (ngModelChange)="update()" label="Show MA Line"></app-checkbox>
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
            <!-- Grid -->
            <g *ngFor="let t of yTicks">
              <line *ngIf="cfg.showGrid" [attr.x1]="padL" [attr.y1]="t.y" x2="605" [attr.y2]="t.y" stroke="#f3f4f6" stroke-width="1"/>
              <text [attr.x]="padL-6" [attr.y]="t.y+4" text-anchor="end" font-size="10" fill="#9ca3af">{{ t.val }}</text>
            </g>
            <line [attr.x1]="padL" [attr.y1]="padT+chartH" x2="605" [attr.y2]="padT+chartH" stroke="#e5e7eb" stroke-width="1"/>
            <!-- MA Line -->
            <polyline *ngIf="cfg.showMA" [attr.points]="maPoints" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
            <!-- OHLC Bars -->
            <g *ngFor="let bar of bars; let i = index">
              <!-- Vertical line (high-low) -->
              <line
                [attr.x1]="bx(i)" [attr.y1]="yScale(bar.high)"
                [attr.x2]="bx(i)" [attr.y2]="yScale(bar.low)"
                [attr.stroke]="bar.close >= bar.open ? cfg.upColor : cfg.downColor"
                stroke-width="2"
              />
              <!-- Open tick (left) -->
              <line
                [attr.x1]="bx(i) - cfg.barW/2" [attr.y1]="yScale(bar.open)"
                [attr.x2]="bx(i)"               [attr.y2]="yScale(bar.open)"
                [attr.stroke]="bar.close >= bar.open ? cfg.upColor : cfg.downColor"
                stroke-width="2"
              />
              <!-- Close tick (right) -->
              <line
                [attr.x1]="bx(i)"               [attr.y1]="yScale(bar.close)"
                [attr.x2]="bx(i) + cfg.barW/2" [attr.y2]="yScale(bar.close)"
                [attr.stroke]="bar.close >= bar.open ? cfg.upColor : cfg.downColor"
                stroke-width="2"
              />
              <!-- Date -->
              <text *ngIf="cfg.showDates && i % 3 === 0"
                [attr.x]="bx(i)" [attr.y]="padT+chartH+16"
                text-anchor="middle" font-size="9" fill="#9ca3af">{{ bar.date }}</text>
            </g>
          </svg>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './ohlc-chart-playground.component.scss',
})
export class OhlcChartPlaygroundComponent {
  cfg = { barW: 10, upColor: '#10b981', downColor: '#f43f5e', showGrid: true, showDates: true, showMA: true };

  upColorOpts = [
    { label: 'Emerald', value: '#10b981' }, { label: 'Green', value: '#22c55e' }, { label: 'Sky', value: '#0ea5e9' },
  ];
  downColorOpts = [
    { label: 'Rose', value: '#f43f5e' }, { label: 'Red', value: '#ef4444' }, { label: 'Orange', value: '#fb923c' },
  ];

  bars: OhlcBar[] = [
    { date: '1/3',  open: 142, high: 149, low: 140, close: 147 },
    { date: '1/4',  open: 147, high: 153, low: 144, close: 150 },
    { date: '1/5',  open: 150, high: 155, low: 146, close: 148 },
    { date: '1/6',  open: 148, high: 152, low: 145, close: 151 },
    { date: '1/9',  open: 151, high: 158, low: 149, close: 156 },
    { date: '1/10', open: 156, high: 161, low: 152, close: 154 },
    { date: '1/11', open: 154, high: 160, low: 151, close: 159 },
    { date: '1/12', open: 159, high: 165, low: 157, close: 162 },
    { date: '1/13', open: 162, high: 168, low: 159, close: 161 },
    { date: '1/16', open: 161, high: 166, low: 157, close: 164 },
    { date: '1/17', open: 164, high: 170, low: 162, close: 168 },
    { date: '1/18', open: 168, high: 172, low: 164, close: 166 },
    { date: '1/19', open: 166, high: 171, low: 162, close: 169 },
    { date: '1/20', open: 169, high: 174, low: 165, close: 172 },
    { date: '1/23', open: 172, high: 177, low: 168, close: 170 },
  ];

  padL = 44; padT = 20; chartH = 280; svgW = 620;
  get minVal() { return Math.min(...this.bars.map(b => b.low)) - 5; }
  get maxVal() { return Math.max(...this.bars.map(b => b.high)) + 5; }

  yScale(v: number) { return this.padT + (1 - (v - this.minVal) / (this.maxVal - this.minVal)) * this.chartH; }
  bx(i: number) { return this.padL + (i + 0.5) * (this.svgW - this.padL) / this.bars.length; }

  get yTicks() {
    const step = (this.maxVal - this.minVal) / 5;
    return Array.from({ length: 6 }, (_, i) => ({ val: Math.round(this.minVal + i * step), y: this.yScale(Math.round(this.minVal + i * step)) }));
  }

  get maPoints(): string {
    const window = 3;
    return this.bars.map((_, i) => {
      if (i < window - 1) return null;
      const avg = this.bars.slice(i - window + 1, i + 1).reduce((s, b) => s + b.close, 0) / window;
      return `${this.bx(i)},${this.yScale(avg)}`;
    }).filter(Boolean).join(' ');
  }

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) { this.update(); }

  update() {
    const c = `<!-- OHLC Chart (SVG) -->
<svg width="${this.svgW}" height="340">
  <!-- barWidth: ${this.cfg.barW}px | upColor: ${this.cfg.upColor} | downColor: ${this.cfg.downColor} -->
  <!-- showGrid: ${this.cfg.showGrid} | showMA: ${this.cfg.showMA} -->
</svg>`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { barW: 10, upColor: '#10b981', downColor: '#f43f5e', showGrid: true, showDates: true, showMA: true };
    this.update();
  }
}
