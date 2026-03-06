import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/ui-checkbox-value-accessor.directive';
import {} from '../../../../../directives/ui-dropdown-value-accessor.directive';

import {} from '../../../../shared/components/app-playground/app-playground.component';

interface Candle {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

@Component({
  selector: 'dm-candlestick-chart-playground',
  standalone: true,
  imports: [AppInputValueAccessorDirective, ...PLAYGROUND_IMPORTS, , AppPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './candlestick-chart-playground.component.html',

  styleUrl: './candlestick-chart-playground.component.scss',
})
export class DmCandlestickChartPlaygroundComponent {
  generatedCode = signal<string>('');
  cfg = {
    candleW: 14,
    upColor: '#10b981',
    downColor: '#f43f5e',
    showGrid: true,
    showDates: true,
    hollow: false,
  };
  Math = Math;

  upColorOpts = [
    { label: 'Emerald', value: '#10b981' },
    { label: 'Green', value: '#22c55e' },
    { label: 'Sky', value: '#0ea5e9' },
    { label: 'Indigo', value: '#6366f1' },
  ];
  downColorOpts = [
    { label: 'Rose', value: '#f43f5e' },
    { label: 'Red', value: '#ef4444' },
    { label: 'Orange', value: '#fb923c' },
    { label: 'Amber', value: '#f59e0b' },
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

  padL = 44;
  padT = 20;
  chartH = 280;
  svgW = 620;
  get minVal() {
    return Math.min(...this.candles.map((c) => c.low)) - 5;
  }
  get maxVal() {
    return Math.max(...this.candles.map((c) => c.high)) + 5;
  }

  yScale(v: number) {
    return this.padT + (1 - (v - this.minVal) / (this.maxVal - this.minVal)) * this.chartH;
  }
  cx(i: number) {
    return this.padL + ((i + 0.5) * (this.svgW - this.padL)) / this.candles.length;
  }

  get yTicks() {
    const step = (this.maxVal - this.minVal) / 5;
    return Array.from({ length: 6 }, (_, i) => {
      const val = Math.round(this.minVal + i * step);
      return { val, y: this.yScale(val) };
    });
  }

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

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
      candleW: 14,
      upColor: '#10b981',
      downColor: '#f43f5e',
      showGrid: true,
      showDates: true,
      hollow: false,
    };
    this.update();
  }
}
