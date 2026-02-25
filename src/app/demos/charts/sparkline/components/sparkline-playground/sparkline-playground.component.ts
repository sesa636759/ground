import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-sparkline-playground',
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
                <h3>📐 Size</h3>
                <div class="control-group">
                  <label>Width</label>
                  <input type="range" min="80" max="240" step="10" [(ngModel)]="cfg.width" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.width }}px</span>
                </div>
                <div class="control-group">
                  <label>Height</label>
                  <input type="range" min="30" max="100" step="5" [(ngModel)]="cfg.height" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.height }}px</span>
                </div>
                <div class="control-group">
                  <label>Stroke Width</label>
                  <input type="range" min="1" max="4" step="0.5" [(ngModel)]="cfg.strokeWidth" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.strokeWidth }}</span>
                </div>
              </div>
              <div class="control-section">
                <h3>🎨 Style</h3>
                <div class="control-group">
                  <label>Color</label>
                  <ui-dropdown [(ngModel)]="cfg.color" (ngModelChange)="update()" [options]="colorOpts"></ui-dropdown>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="fill" [(ngModel)]="cfg.fill" (ngModelChange)="update()" label="Fill Area"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showDot" [(ngModel)]="cfg.showDot" (ngModelChange)="update()" label="Show Last Point"></app-checkbox>
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
          <div style="display:flex;flex-wrap:wrap;gap:32px;justify-content:center;align-items:center;">
            <div *ngFor="let s of sparklines" style="display:flex;flex-direction:column;align-items:center;gap:8px;">
              <svg [attr.width]="cfg.width" [attr.height]="cfg.height" style="display:block;overflow:visible;">
                <defs>
                  <linearGradient [attr.id]="'sg'+s.id" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" [attr.stop-color]="s.color" stop-opacity="0.35"/>
                    <stop offset="100%" [attr.stop-color]="s.color" stop-opacity="0.02"/>
                  </linearGradient>
                </defs>
                <path *ngIf="cfg.fill" [attr.d]="getAreaPath(s.points, cfg.width, cfg.height)" [attr.fill]="'url(#sg'+s.id+')'"/>
                <polyline [attr.points]="getPolyline(s.points, cfg.width, cfg.height)" fill="none" [attr.stroke]="s.color" [attr.stroke-width]="cfg.strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
                <circle *ngIf="cfg.showDot" [attr.cx]="getLastPoint(s.points, cfg.width).x" [attr.cy]="getLastPoint(s.points, cfg.width, cfg.height).y" r="4" [attr.fill]="s.color"/>
              </svg>
              <span style="font-size:11px;color:#6b7280;font-weight:500;">{{ s.label }}</span>
              <span style="font-size:14px;font-weight:700;" [style.color]="s.trend >= 0 ? '#10b981' : '#f43f5e'">
                {{ s.trend >= 0 ? '+' : '' }}{{ s.trend }}%
              </span>
            </div>
          </div>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './sparkline-playground.component.scss',
})
export class SparklinePlaygroundComponent {
  cfg = { width: 140, height: 55, strokeWidth: 2, color: '#6366f1', fill: true, showDot: true };

  colorOpts = [
    { label: 'Indigo', value: '#6366f1' },
    { label: 'Emerald', value: '#10b981' },
    { label: 'Amber', value: '#f59e0b' },
    { label: 'Sky', value: '#0ea5e9' },
    { label: 'Rose', value: '#f43f5e' },
  ];

  sparklines = [
    { id: 'a', label: 'Revenue',  trend: 12.4, color: '#6366f1', points: [42, 55, 48, 70, 65, 80, 75, 95] },
    { id: 'b', label: 'Users',    trend: 8.1,  color: '#10b981', points: [20, 30, 25, 40, 38, 55, 60, 65] },
    { id: 'c', label: 'Sessions', trend: -3.2, color: '#f43f5e', points: [90, 85, 78, 70, 65, 60, 58, 55] },
    { id: 'd', label: 'Sales',    trend: 5.6,  color: '#f59e0b', points: [30, 28, 35, 42, 38, 50, 48, 58] },
  ];

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) { this.update(); }

  getPolyline(pts: number[], w: number, h: number): string {
    const n = pts.length; const pad = 4;
    const min = Math.min(...pts); const max = Math.max(...pts);
    return pts.map((v, i) => {
      const x = pad + (i / (n - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
      return `${x},${y}`;
    }).join(' ');
  }

  getAreaPath(pts: number[], w: number, h: number): string {
    const n = pts.length; const pad = 4;
    const min = Math.min(...pts); const max = Math.max(...pts);
    const coords = pts.map((v, i) => ({ x: pad + (i / (n - 1)) * (w - pad * 2), y: h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2) }));
    const line = coords.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
    return `${line} L${coords[n - 1].x},${h} L${coords[0].x},${h} Z`;
  }

  getLastPoint(pts: number[], w: number, h = 55): { x: number; y: number } {
    const n = pts.length; const pad = 4;
    const min = Math.min(...pts); const max = Math.max(...pts);
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
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { width: 140, height: 55, strokeWidth: 2, color: '#6366f1', fill: true, showDot: true };
    this.update();
  }
}
