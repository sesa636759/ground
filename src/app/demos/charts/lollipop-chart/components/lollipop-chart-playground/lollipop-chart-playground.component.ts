import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-lollipop-chart-playground',
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
                <h3>📐 Style</h3>
                <div class="control-group">
                  <label>Circle Radius</label>
                  <input type="range" min="4" max="16" step="2" [(ngModel)]="cfg.circleR" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.circleR }}px</span>
                </div>
                <div class="control-group">
                  <label>Stick Width</label>
                  <input type="range" min="1" max="6" step="1" [(ngModel)]="cfg.stickW" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.stickW }}px</span>
                </div>
                <div class="control-group">
                  <label>Orientation</label>
                  <ui-dropdown [(ngModel)]="cfg.orientation" (ngModelChange)="update()" [options]="orientOpts"></ui-dropdown>
                </div>
              </div>
              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="showVals" [(ngModel)]="cfg.showValues" (ngModelChange)="update()" label="Show Values"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="multiColor" [(ngModel)]="cfg.multiColor" (ngModelChange)="update()" label="Multi Color"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="filled" [(ngModel)]="cfg.filled" (ngModelChange)="update()" label="Filled Circles"></app-checkbox>
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
          <svg width="580" height="320" style="display:block;font-family:inherit;">
            <!-- Y grid -->
            <g *ngFor="let t of yTicks">
              <line [attr.x1]="padL" [attr.y1]="t.y" x2="565" [attr.y2]="t.y" stroke="#f3f4f6" stroke-width="1"/>
              <text [attr.x]="padL-6" [attr.y]="t.y+4" text-anchor="end" font-size="11" fill="#9ca3af">{{ t.val }}</text>
            </g>
            <!-- Baseline -->
            <line [attr.x1]="padL" [attr.y1]="baseY" x2="565" [attr.y2]="baseY" stroke="#d1d5db" stroke-width="1.5"/>
            <!-- Lollipops -->
            <g *ngFor="let d of data; let i = index">
              <!-- Stick -->
              <line
                [attr.x1]="lx(i)" [attr.y1]="baseY"
                [attr.x2]="lx(i)" [attr.y2]="ly(d.value)"
                [attr.stroke]="cfg.multiColor ? d.color : '#6366f1'"
                [attr.stroke-width]="cfg.stickW"
                stroke-linecap="round"
              />
              <!-- Circle -->
              <circle
                [attr.cx]="lx(i)" [attr.cy]="ly(d.value)"
                [attr.r]="cfg.circleR"
                [attr.fill]="cfg.filled ? (cfg.multiColor ? d.color : '#6366f1') : 'white'"
                [attr.stroke]="cfg.multiColor ? d.color : '#6366f1'"
                [attr.stroke-width]="cfg.stickW"
              />
              <!-- Value -->
              <text *ngIf="cfg.showValues"
                [attr.x]="lx(i)" [attr.y]="ly(d.value) - cfg.circleR - 6"
                text-anchor="middle" font-size="11" font-weight="700"
                [attr.fill]="cfg.multiColor ? d.color : '#374151'">{{ d.value }}</text>
              <!-- X label -->
              <text [attr.x]="lx(i)" y="308" text-anchor="middle" font-size="11" fill="#6b7280">{{ d.label }}</text>
            </g>
          </svg>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './lollipop-chart-playground.component.scss',
})
export class LollipopChartPlaygroundComponent {
  cfg = { circleR: 8, stickW: 2, orientation: 'vertical', showValues: true, multiColor: true, filled: true };

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

  padL = 40; padT = 20; padB = 30;
  svgW = 580; svgH = 320;
  get baseY() { return this.svgH - this.padB; }
  get chartH() { return this.svgH - this.padT - this.padB; }
  get max() { return Math.max(...this.data.map(d => d.value)); }

  lx(i: number) { return this.padL + (i + 0.5) * (this.svgW - this.padL) / this.data.length; }
  ly(v: number) { return this.padT + (1 - v / this.max) * this.chartH; }

  get yTicks() {
    return Array.from({ length: 5 }, (_, i) => {
      const val = Math.round((i / 4) * this.max);
      return { val, y: this.ly(val) };
    });
  }

  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) { this.update(); }

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
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { circleR: 8, stickW: 2, orientation: 'vertical', showValues: true, multiColor: true, filled: true };
    this.update();
  }
}
