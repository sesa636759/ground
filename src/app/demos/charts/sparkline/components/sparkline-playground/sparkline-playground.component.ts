import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-sparkline-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sparkline-playground.component.html',

  styleUrl: './sparkline-playground.component.scss',
})
export class SparklinePlaygroundComponent {
  generatedCode = signal<string>('');
  cfg = { width: 140, height: 55, strokeWidth: 2, color: '#6366f1', fill: true, showDot: true };

  colorOpts = [
    { label: 'Indigo', value: '#6366f1' },
    { label: 'Emerald', value: '#10b981' },
    { label: 'Amber', value: '#f59e0b' },
    { label: 'Sky', value: '#0ea5e9' },
    { label: 'Rose', value: '#f43f5e' },
  ];

  sparklines = [
    {
      id: 'a',
      label: 'Revenue',
      trend: 12.4,
      color: '#6366f1',
      points: [42, 55, 48, 70, 65, 80, 75, 95],
    },
    {
      id: 'b',
      label: 'Users',
      trend: 8.1,
      color: '#10b981',
      points: [20, 30, 25, 40, 38, 55, 60, 65],
    },
    {
      id: 'c',
      label: 'Sessions',
      trend: -3.2,
      color: '#f43f5e',
      points: [90, 85, 78, 70, 65, 60, 58, 55],
    },
    {
      id: 'd',
      label: 'Sales',
      trend: 5.6,
      color: '#f59e0b',
      points: [30, 28, 35, 42, 38, 50, 48, 58],
    },
  ];

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  getPolyline(pts: number[], w: number, h: number): string {
    const n = pts.length;
    const pad = 4;
    const min = Math.min(...pts);
    const max = Math.max(...pts);
    return pts
      .map((v, i) => {
        const x = pad + (i / (n - 1)) * (w - pad * 2);
        const y = h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
        return `${x},${y}`;
      })
      .join(' ');
  }

  getAreaPath(pts: number[], w: number, h: number): string {
    const n = pts.length;
    const pad = 4;
    const min = Math.min(...pts);
    const max = Math.max(...pts);
    const coords = pts.map((v, i) => ({
      x: pad + (i / (n - 1)) * (w - pad * 2),
      y: h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2),
    }));
    const line = coords.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
    return `${line} L${coords[n - 1].x},${h} L${coords[0].x},${h} Z`;
  }

  getLastPoint(pts: number[], w: number, h = 55): { x: number; y: number } {
    const n = pts.length;
    const pad = 4;
    const min = Math.min(...pts);
    const max = Math.max(...pts);
    return {
      x: w - pad,
      y: h - pad - ((pts[n - 1] - min) / (max - min || 1)) * (h - pad * 2),
    };
  }

  update() {
    const c = `<!-- Sparkline Chart -->
<svg width="${this.cfg.width}" height="${this.cfg.height}">
  ${this.cfg.fill ? '<path d="..." fill="url(#gradient)"/>' : ''}
  <polyline points="..." fill="none" stroke="${this.cfg.color}" stroke-width="${this.cfg.strokeWidth}"/>
  ${this.cfg.showDot ? '<circle cx="..." cy="..." r="4" fill="' + this.cfg.color + '"/>' : ''}
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
      width: 140,
      height: 55,
      strokeWidth: 2,
      color: '#6366f1',
      fill: true,
      showDot: true,
    };
    this.update();
  }
}
