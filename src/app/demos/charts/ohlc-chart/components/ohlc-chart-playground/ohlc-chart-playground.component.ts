import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../../shared/components/app-playground/app-playground.component';

interface OhlcBar {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

@Component({
  selector: 'app-ohlc-chart-playground',
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
  templateUrl: './ohlc-chart-playground.component.html',

  styleUrl: './ohlc-chart-playground.component.scss',
})
export class OhlcChartPlaygroundComponent {
  generatedCode = signal<string>('');
  cfg = {
    barW: 10,
    upColor: '#10b981',
    downColor: '#f43f5e',
    showGrid: true,
    showDates: true,
    showMA: true,
  };

  upColorOpts = [
    { label: 'Emerald', value: '#10b981' },
    { label: 'Green', value: '#22c55e' },
    { label: 'Sky', value: '#0ea5e9' },
  ];
  downColorOpts = [
    { label: 'Rose', value: '#f43f5e' },
    { label: 'Red', value: '#ef4444' },
    { label: 'Orange', value: '#fb923c' },
  ];

  bars: OhlcBar[] = [
    { date: '1/3', open: 142, high: 149, low: 140, close: 147 },
    { date: '1/4', open: 147, high: 153, low: 144, close: 150 },
    { date: '1/5', open: 150, high: 155, low: 146, close: 148 },
    { date: '1/6', open: 148, high: 152, low: 145, close: 151 },
    { date: '1/9', open: 151, high: 158, low: 149, close: 156 },
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

  padL = 44;
  padT = 20;
  chartH = 280;
  svgW = 620;
  get minVal() {
    return Math.min(...this.bars.map((b) => b.low)) - 5;
  }
  get maxVal() {
    return Math.max(...this.bars.map((b) => b.high)) + 5;
  }

  yScale(v: number) {
    return this.padT + (1 - (v - this.minVal) / (this.maxVal - this.minVal)) * this.chartH;
  }
  bx(i: number) {
    return this.padL + ((i + 0.5) * (this.svgW - this.padL)) / this.bars.length;
  }

  get yTicks() {
    const step = (this.maxVal - this.minVal) / 5;
    return Array.from({ length: 6 }, (_, i) => ({
      val: Math.round(this.minVal + i * step),
      y: this.yScale(Math.round(this.minVal + i * step)),
    }));
  }

  get maPoints(): string {
    const window = 3;
    return this.bars
      .map((_, i) => {
        if (i < window - 1) return null;
        const avg =
          this.bars.slice(i - window + 1, i + 1).reduce((s, b) => s + b.close, 0) / window;
        return `${this.bx(i)},${this.yScale(avg)}`;
      })
      .filter(Boolean)
      .join(' ');
  }

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

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
      barW: 10,
      upColor: '#10b981',
      downColor: '#f43f5e',
      showGrid: true,
      showDates: true,
      showMA: true,
    };
    this.update();
  }
}

