import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/ui-checkbox-value-accessor.directive';
import {} from '../../../../../directives/ui-dropdown-value-accessor.directive';

import {} from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'dm-lollipop-chart-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, ,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './lollipop-chart-playground.component.html',

  styleUrl: './lollipop-chart-playground.component.scss',
})
export class DmLollipopChartPlaygroundComponent {
  generatedCode = signal<string>('');
  cfg = {
    circleR: 8,
    stickW: 2,
    orientation: 'vertical',
    showValues: true,
    multiColor: true,
    filled: true,
  };

  orientOpts = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  data = [
    { label: 'Jan', value: 42, color: '#6366f1' },
    { label: 'Feb', value: 58, color: '#10b981' },
    { label: 'Mar', value: 35, color: '#f59e0b' },
    { label: 'Apr', value: 78, color: '#0ea5e9' },
    { label: 'May', value: 65, color: '#f43f5e' },
    { label: 'Jun', value: 92, color: '#8b5cf6' },
    { label: 'Jul', value: 55, color: '#06b6d4' },
    { label: 'Aug', value: 88, color: '#fb923c' },
  ];

  padL = 40;
  padT = 20;
  padB = 30;
  svgW = 580;
  svgH = 320;
  get baseY() {
    return this.svgH - this.padB;
  }
  get chartH() {
    return this.svgH - this.padT - this.padB;
  }
  get max() {
    return Math.max(...this.data.map((d) => d.value));
  }

  lx(i: number) {
    return this.padL + ((i + 0.5) * (this.svgW - this.padL)) / this.data.length;
  }
  ly(v: number) {
    return this.padT + (1 - v / this.max) * this.chartH;
  }

  get yTicks() {
    return Array.from({ length: 5 }, (_, i) => {
      const val = Math.round((i / 4) * this.max);
      return { val, y: this.ly(val) };
    });
  }

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  update() {
    const c = `<!-- Lollipop Chart (SVG) -->
<svg width="${this.svgW}" height="${this.svgH}">
  <!-- circleR: ${this.cfg.circleR}px | stickW: ${this.cfg.stickW}px -->
  <!-- multiColor: ${this.cfg.multiColor} | filled: ${this.cfg.filled} -->
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
      circleR: 8,
      stickW: 2,
      orientation: 'vertical',
      showValues: true,
      multiColor: true,
      filled: true,
    };
    this.update();
  }
}
