import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-radial-bar-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion items='[{"id":"cfg","title":"Configuration","icon":"⚙️"}]' defaultOpen='["cfg"]' multiple>
          <div slot="content-cfg">
            <div class="control-grid">
              <div class="control-section">
                <h3>📐 Layout</h3>
                <div class="control-group">
                  <label>Size</label>
                  <input type="range" min="180" max="360" step="20" [(ngModel)]="cfg.size" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.size }}px</span>
                </div>
                <div class="control-group">
                  <label>Track Width</label>
                  <input type="range" min="10" max="30" step="2" [(ngModel)]="cfg.trackWidth" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.trackWidth }}px</span>
                </div>
                <div class="control-group">
                  <label>Gap</label>
                  <input type="range" min="4" max="16" step="2" [(ngModel)]="cfg.gap" (ngModelChange)="update()" />
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.gap }}px</span>
                </div>
              </div>
              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="showVal" [(ngModel)]="cfg.showValues" (ngModelChange)="update()" label="Show Values"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="showLabels" [(ngModel)]="cfg.showLabels" (ngModelChange)="update()" label="Show Labels"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="rounded" [(ngModel)]="cfg.rounded" (ngModelChange)="update()" label="Rounded Caps"></app-checkbox>
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
          <div style="position:relative;display:inline-block;">
            <svg [attr.width]="cfg.size" [attr.height]="cfg.size" style="display:block;">
              <g *ngFor="let bar of bars; let i = index" [attr.transform]="'translate('+cfg.size/2+','+cfg.size/2+')'">
                <!-- Track -->
                <circle
                  [attr.r]="getR(i)"
                  fill="none"
                  stroke="#f3f4f6"
                  [attr.stroke-width]="cfg.trackWidth"
                />
                <!-- Arc -->
                <circle
                  [attr.r]="getR(i)"
                  fill="none"
                  [attr.stroke]="bar.color"
                  [attr.stroke-width]="cfg.trackWidth"
                  [attr.stroke-dasharray]="getDash(bar.value, i)"
                  stroke-dashoffset="0"
                  [attr.stroke-linecap]="cfg.rounded ? 'round' : 'butt'"
                  transform="rotate(-90)"
                />
                <!-- Label -->
                <text *ngIf="cfg.showLabels"
                  [attr.x]="-(getR(i) + cfg.trackWidth/2 + 4)"
                  y="4" text-anchor="end" font-size="11" [attr.fill]="bar.color" font-weight="600">{{ bar.label }}</text>
                <text *ngIf="cfg.showValues"
                  [attr.x]="getR(i) + cfg.trackWidth/2 + 4"
                  y="4" text-anchor="start" font-size="11" fill="#374151" font-weight="700">{{ bar.value }}%</text>
              </g>
            </svg>
          </div>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './radial-bar-playground.component.scss',
})
export class RadialBarPlaygroundComponent {
  cfg = { size: 280, trackWidth: 18, gap: 8, showValues: true, showLabels: true, rounded: true };

  bars = [
    { label: 'Revenue',    value: 88, color: '#6366f1' },
    { label: 'Users',      value: 72, color: '#10b981' },
    { label: 'Conversion', value: 61, color: '#f59e0b' },
    { label: 'Retention',  value: 45, color: '#0ea5e9' },
    { label: 'NPS',        value: 93, color: '#f43f5e' },
  ];

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) { this.update(); }

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
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { size: 280, trackWidth: 18, gap: 8, showValues: true, showLabels: true, rounded: true };
    this.update();
  }
}
