import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

@Component({
  selector: 'dm-step-line-chart-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './step-line-chart-playground.component.html',

  styleUrl: './step-line-chart-playground.component.scss',
})
export class DmStepLineChartPlaygroundComponent {
  generatedCode = signal<string>('');
  cfg = {
    strokeWidth: 2.5,
    pointR: 4,
    color: '#6366f1',
    fill: true,
    showGrid: true,
    showAxes: true,
  };
  pad = 40;

  colorOpts = [
    { label: 'Indigo', value: '#6366f1' },
    { label: 'Emerald', value: '#10b981' },
    { label: 'Amber', value: '#f59e0b' },
    { label: 'Sky', value: '#0ea5e9' },
  ];

  rawData = [
    { label: 'Jan', value: 20 },
    { label: 'Feb', value: 45 },
    { label: 'Mar', value: 45 },
    { label: 'Apr', value: 72 },
    { label: 'May', value: 60 },
    { label: 'Jun', value: 60 },
    { label: 'Jul', value: 88 },
    { label: 'Aug', value: 95 },
    { label: 'Sep', value: 95 },
  ];

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  get chartW() {
    return 570 - this.pad;
  }
  get chartH() {
    return 270 - this.pad;
  }

  getX(i: number) {
    return this.pad + (i / (this.rawData.length - 1)) * this.chartW;
  }
  getY(v: number) {
    const max = Math.max(...this.rawData.map((d) => d.value));
    return this.pad + (1 - v / max) * this.chartH;
  }

  get dataPoints() {
    return this.rawData.map((d, i) => ({ x: this.getX(i), y: this.getY(d.value) }));
  }

  get stepPolyline(): string {
    const pts = this.dataPoints;
    let path = `${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      path += ` ${pts[i].x},${pts[i - 1].y} ${pts[i].x},${pts[i].y}`;
    }
    return path;
  }

  get areaPath(): string {
    const pts = this.dataPoints;
    let d = `M${pts[0].x},270 L${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      d += ` L${pts[i].x},${pts[i - 1].y} L${pts[i].x},${pts[i].y}`;
    }
    d += ` L${pts[pts.length - 1].x},270 Z`;
    return d;
  }

  get hGridLines() {
    return [this.pad, this.pad + 57, this.pad + 115, this.pad + 172, 270].filter(
      () => this.cfg.showGrid,
    );
  }
  get xLabels() {
    return this.rawData.map((d, i) => ({ x: this.getX(i), label: d.label }));
  }
  get yLabels() {
    const max = Math.max(...this.rawData.map((d) => d.value));
    return [0, 25, 50, 75, 100].map((v) => ({
      y: this.getY(v),
      label: Math.round((v * max) / 100),
    }));
  }

  update() {
    const c = `<!-- Step Line Chart (SVG) -->
<svg width="600" height="300">
  <polyline points="${this.stepPolyline}" fill="none" stroke="${this.cfg.color}" stroke-width="${this.cfg.strokeWidth}"/>
  <!-- strokeWidth: ${this.cfg.strokeWidth} | pointRadius: ${this.cfg.pointR} | fill: ${this.cfg.fill} -->
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
      strokeWidth: 2.5,
      pointR: 4,
      color: '#6366f1',
      fill: true,
      showGrid: true,
      showAxes: true,
    };
    this.update();
  }
}
