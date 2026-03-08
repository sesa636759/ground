import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

@Component({
  selector: 'dm-radial-bar-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radial-bar-playground.component.html',

  styleUrl: './radial-bar-playground.component.scss',
})
export class DmRadialBarPlaygroundComponent {
  generatedCode = signal<string>('');
  cfg = { size: 280, trackWidth: 18, gap: 8, showValues: true, showLabels: true, rounded: true };

  bars = [
    { label: 'Revenue', value: 88, color: '#6366f1' },
    { label: 'Users', value: 72, color: '#10b981' },
    { label: 'Conversion', value: 61, color: '#f59e0b' },
    { label: 'Retention', value: 45, color: '#0ea5e9' },
    { label: 'NPS', value: 93, color: '#f43f5e' },
  ];

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  getR(index: number): number {
    const maxR = this.cfg.size / 2 - this.cfg.trackWidth / 2 - 4;
    return maxR - index * (this.cfg.trackWidth + this.cfg.gap);
  }

  getDash(value: number, index: number): string {
    const r = this.getR(index);
    const circ = 2 * Math.PI * r;
    const arc = (value / 100) * circ;
    return `${arc} ${circ - arc}`;
  }

  update() {
    const c = `<!-- Radial Bar Chart (SVG) -->
<svg width="${this.cfg.size}" height="${this.cfg.size}">
  <!-- Concentric arc bars for each metric -->
  <!-- trackWidth: ${this.cfg.trackWidth}px | gap: ${this.cfg.gap}px -->
  <!-- rounded: ${this.cfg.rounded} | showValues: ${this.cfg.showValues} -->
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
      size: 280,
      trackWidth: 18,
      gap: 8,
      showValues: true,
      showLabels: true,
      rounded: true,
    };
    this.update();
  }
}
