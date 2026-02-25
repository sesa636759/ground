import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

interface WfBar { label: string; value: number; abs: number; start: number; type: 'pos' | 'neg' | 'total'; }

@Component({
  selector: 'app-waterfall-chart-playground',
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
                <h3>🎨 Colors</h3>
                <div class="control-group">
                  <label>Positive Color</label>
                  <ui-dropdown [(ngModel)]="cfg.posColor" (ngModelChange)="update()" [options]="colorOpts"></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Negative Color</label>
                  <ui-dropdown [(ngModel)]="cfg.negColor" (ngModelChange)="update()" [options]="negColorOpts"></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Bar Gap</label>
                  <input type="range" min="4" max="20" step="2" [(ngModel)]="cfg.gap" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.gap }}px</span>
                </div>
              </div>
              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="showVals" [(ngModel)]="cfg.showValues" (ngModelChange)="update()" label="Show Values"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showConn" [(ngModel)]="cfg.showConnectors" (ngModelChange)="update()" label="Connectors"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="rounded" [(ngModel)]="cfg.rounded" (ngModelChange)="update()" label="Rounded Tops"></app-checkbox>
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
            <g *ngFor="let tick of yTicks">
              <line [attr.x1]="padL-4" [attr.y1]="tick.y" [attr.x2]="620" [attr.y2]="tick.y" stroke="#f3f4f6" stroke-width="1"/>
              <text [attr.x]="padL-8" [attr.y]="tick.y+4" text-anchor="end" font-size="11" fill="#6b7280">{{ tick.label }}</text>
            </g>
            <!-- Baseline -->
            <line [attr.x1]="padL" [attr.y1]="baseY" x2="620" [attr.y2]="baseY" stroke="#d1d5db" stroke-width="1.5"/>
            <!-- Bars -->
            <g *ngFor="let bar of computedBars; let i = index">
              <rect
                [attr.x]="barX(i)"
                [attr.y]="barY(bar)"
                [attr.width]="barW"
                [attr.height]="barH(bar)"
                [attr.rx]="cfg.rounded ? 4 : 0"
                [attr.fill]="barColor(bar)"
                opacity="0.9"
              />
              <text *ngIf="cfg.showValues"
                [attr.x]="barX(i) + barW/2"
                [attr.y]="bar.type === 'neg' ? barY(bar) + barH(bar) + 14 : barY(bar) - 6"
                text-anchor="middle" font-size="11" font-weight="700" [attr.fill]="barColor(bar)">
                {{ bar.value > 0 ? '+' : '' }}{{ bar.value }}
              </text>
              <!-- Connector -->
              <line *ngIf="cfg.showConnectors && i < computedBars.length - 1 && bar.type !== 'total'"
                [attr.x1]="barX(i) + barW"
                [attr.y1]="barY(bar)"
                [attr.x2]="barX(i+1)"
                [attr.y2]="barY(bar)"
                stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,3"/>
              <!-- X label -->
              <text [attr.x]="barX(i) + barW/2" y="325" text-anchor="middle" font-size="11" fill="#6b7280">{{ bar.label }}</text>
            </g>
          </svg>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './waterfall-chart-playground.component.scss',
})
export class WaterfallChartPlaygroundComponent {
  cfg = { posColor: '#10b981', negColor: '#f43f5e', gap: 8, showValues: true, showConnectors: true, rounded: true };

  colorOpts = [
    { label: 'Emerald', value: '#10b981' }, { label: 'Indigo', value: '#6366f1' },
    { label: 'Sky', value: '#0ea5e9' }, { label: 'Amber', value: '#f59e0b' },
  ];
  negColorOpts = [
    { label: 'Rose', value: '#f43f5e' }, { label: 'Orange', value: '#fb923c' },
    { label: 'Red', value: '#ef4444' },
  ];

  rawData = [
    { label: 'Start',    value: 200, type: 'total' as const },
    { label: 'Sales',    value: 120, type: 'pos' as const },
    { label: 'Returns',  value: -30, type: 'neg' as const },
    { label: 'Costs',    value: -80, type: 'neg' as const },
    { label: 'Bonus',    value: 50,  type: 'pos' as const },
    { label: 'Tax',      value: -40, type: 'neg' as const },
    { label: 'Net',      value: 0,   type: 'total' as const },
  ];

  padL = 44; padT = 20; maxH = 280;
  barW = 64;
  get svgW() { return this.padL + this.computedBars.length * (this.barW + this.cfg.gap) + 20; }
  get baseY() { return this.padT + this.maxH; }

  showCode = true;
  code = signal('');

  get computedBars(): WfBar[] {
    let running = 0;
    return this.rawData.map(d => {
      if (d.type === 'total') {
        if (d.label === 'Start') {
          const bar = { label: d.label, value: d.value, abs: d.value, start: 0, type: 'total' as const };
          running = d.value;
          return bar;
        } else {
          return { label: d.label, value: running, abs: running, start: 0, type: 'total' as const };
        }
      }
      const start = running;
      running += d.value;
      return { label: d.label, value: d.value, abs: Math.abs(d.value), start, type: d.type };
    });
  }

  get maxVal() { return Math.max(...this.rawData.map(d => d.type === 'total' ? (d.label === 'Start' ? d.value : 220) : 220), 200); }

  yScale(v: number) { return this.padT + this.maxH - (v / this.maxVal) * this.maxH; }
  barX(i: number) { return this.padL + i * (this.barW + this.cfg.gap); }

  barY(bar: WfBar): number {
    if (bar.type === 'total') return this.yScale(bar.abs);
    if (bar.type === 'pos') return this.yScale(bar.start + bar.abs);
    return this.yScale(bar.start);
  }

  barH(bar: WfBar): number {
    return Math.max(2, (bar.abs / this.maxVal) * this.maxH);
  }

  barColor(bar: WfBar): string {
    if (bar.type === 'total') return '#6366f1';
    return bar.type === 'pos' ? this.cfg.posColor : this.cfg.negColor;
  }

  get yTicks() {
    const step = this.maxVal / 5;
    return Array.from({ length: 6 }, (_, i) => ({ label: Math.round(i * step), y: this.yScale(i * step) }));
  }

  constructor(private cd: ChangeDetectorRef) { this.update(); }

  update() {
    const c = `<!-- Waterfall Chart (SVG) -->
<svg width="620" height="340">
  <!-- Floating bars: posColor=${this.cfg.posColor} | negColor=${this.cfg.negColor} -->
  <!-- showValues: ${this.cfg.showValues} | connectors: ${this.cfg.showConnectors} -->
</svg>`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { posColor: '#10b981', negColor: '#f43f5e', gap: 8, showValues: true, showConnectors: true, rounded: true };
    this.update();
  }
}
