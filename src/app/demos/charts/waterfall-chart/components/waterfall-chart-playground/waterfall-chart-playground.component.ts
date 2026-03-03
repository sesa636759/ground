import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../../shared/components/app-playground/app-playground.component';

interface WfBar {
  label: string;
  value: number;
  abs: number;
  start: number;
  type: 'pos' | 'neg' | 'total';
}

@Component({
  selector: 'app-waterfall-chart-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './waterfall-chart-playground.component.html',

  styleUrl: './waterfall-chart-playground.component.scss',
})
export class WaterfallChartPlaygroundComponent {
  generatedCode = signal<string>('');

  cfg = {
    posColor: '#10b981',
    negColor: '#f43f5e',
    gap: 8,
    showValues: true,
    showConnectors: true,
    rounded: true,
  };

  colorOpts = [
    { label: 'Emerald', value: '#10b981' },
    { label: 'Indigo', value: '#6366f1' },
    { label: 'Sky', value: '#0ea5e9' },
    { label: 'Amber', value: '#f59e0b' },
  ];
  negColorOpts = [
    { label: 'Rose', value: '#f43f5e' },
    { label: 'Orange', value: '#fb923c' },
    { label: 'Red', value: '#ef4444' },
  ];

  rawData = [
    { label: 'Start', value: 200, type: 'total' as const },
    { label: 'Sales', value: 120, type: 'pos' as const },
    { label: 'Returns', value: -30, type: 'neg' as const },
    { label: 'Costs', value: -80, type: 'neg' as const },
    { label: 'Bonus', value: 50, type: 'pos' as const },
    { label: 'Tax', value: -40, type: 'neg' as const },
    { label: 'Net', value: 0, type: 'total' as const },
  ];

  padL = 44;
  padT = 20;
  maxH = 280;
  barW = 64;
  get svgW() {
    return this.padL + this.computedBars.length * (this.barW + this.cfg.gap) + 20;
  }
  get baseY() {
    return this.padT + this.maxH;
  }

  showCode = true;
  code = signal('');

  get computedBars(): WfBar[] {
    let running = 0;
    return this.rawData.map((d) => {
      if (d.type === 'total') {
        if (d.label === 'Start') {
          const bar = {
            label: d.label,
            value: d.value,
            abs: d.value,
            start: 0,
            type: 'total' as const,
          };
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

  get maxVal() {
    return Math.max(
      ...this.rawData.map((d) =>
        d.type === 'total' ? (d.label === 'Start' ? d.value : 220) : 220,
      ),
      200,
    );
  }

  yScale(v: number) {
    return this.padT + this.maxH - (v / this.maxVal) * this.maxH;
  }
  barX(i: number) {
    return this.padL + i * (this.barW + this.cfg.gap);
  }

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
    return Array.from({ length: 6 }, (_, i) => ({
      label: Math.round(i * step),
      y: this.yScale(i * step),
    }));
  }

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

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
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  copyCode() {
    navigator.clipboard.writeText(this.code());
  }

  reset() {
    this.cfg = {
      posColor: '#10b981',
      negColor: '#f43f5e',
      gap: 8,
      showValues: true,
      showConnectors: true,
      rounded: true,
    };
    this.update();
  }
}

