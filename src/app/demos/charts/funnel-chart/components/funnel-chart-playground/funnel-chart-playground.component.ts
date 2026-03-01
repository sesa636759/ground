import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

import { AppPlaygroundComponent } from '../../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-funnel-chart-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './funnel-chart-playground.component.html',

  styleUrl: './funnel-chart-playground.component.scss',
})
export class FunnelChartPlaygroundComponent {
  generatedCode = signal<string>('');
  cfg = {
    orientation: 'vertical',
    gap: 4,
    neckPct: 20,
    showValues: true,
    showPct: true,
    curved: false,
  };

  orientOpts = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  segments = [
    { label: 'Visitors', value: 10000, color: '#6366f1' },
    { label: 'Leads', value: 6500, color: '#8b5cf6' },
    { label: 'Prospects', value: 3800, color: '#0ea5e9' },
    { label: 'Qualified', value: 1900, color: '#10b981' },
    { label: 'Customers', value: 750, color: '#f59e0b' },
  ];

  get svgH() {
    return 380;
  }
  get segH() {
    return (this.svgH - this.cfg.gap * (this.segments.length - 1)) / this.segments.length;
  }

  segTop(i: number) {
    return i * (this.segH + this.cfg.gap);
  }

  getPoints(i: number): string {
    const maxW = 400;
    const neckW = (this.cfg.neckPct / 100) * maxW;
    const topW = maxW - (maxW - neckW) * (i / this.segments.length);
    const botW = maxW - (maxW - neckW) * ((i + 1) / this.segments.length);
    const cx = 210;
    const y1 = this.segTop(i);
    const y2 = y1 + this.segH;
    return `${cx - topW / 2},${y1} ${cx + topW / 2},${y1} ${cx + botW / 2},${y2} ${cx - botW / 2},${y2}`;
  }

  pct(i: number): number {
    const max = this.segments[0].value;
    return Math.round((this.segments[i].value / max) * 100);
  }

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

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
      orientation: 'vertical',
      gap: 4,
      neckPct: 20,
      showValues: true,
      showPct: true,
      curved: false,
    };
    this.update();
  }
}
