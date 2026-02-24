import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-skeleton-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, UiDropdownValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Shape & Animation -->
          <div class="control-section">
            <h3>Appearance</h3>

            <div class="control-group">
              <label>shape</label>
              <ui-dropdown
                [(ngModel)]="cfg.shape"
                (change)="update()"
                [options]="shapeOpts"
              ></ui-dropdown>
            </div>

            <div class="control-group">
              <label>animation-type</label>
              <ui-dropdown
                [(ngModel)]="cfg.animationType"
                (change)="update()"
                [options]="animTypeOpts"
              ></ui-dropdown>
            </div>

            <div class="control-group">
              <label>animated</label>
              <ui-dropdown
                [(ngModel)]="cfg.animated"
                (change)="update()"
                [options]="boolOpts"
              ></ui-dropdown>
            </div>
          </div>

          <!-- Sizing -->
          <div class="control-section">
            <h3>Sizing</h3>

            <div class="control-group">
              <label
                >size <span style="font-weight:400;font-size:0.75rem">(predefined)</span></label
              >
              <ui-dropdown
                [(ngModel)]="cfg.size"
                (change)="update()"
                [options]="sizeOpts"
              ></ui-dropdown>
              <span class="control-hint">Overrides width/height for most shapes</span>
            </div>

            <div class="control-group">
              <label>width</label>
              <input
                type="text"
                [(ngModel)]="cfg.width"
                (ngModelChange)="update()"
                placeholder="100%"
              />
            </div>

            <div class="control-group">
              <label>height</label>
              <input
                type="text"
                [(ngModel)]="cfg.height"
                (ngModelChange)="update()"
                placeholder="20px"
              />
            </div>

            <div class="control-group">
              <label
                >border-radius
                <span style="font-weight:400;font-size:0.75rem">(rounded shapes)</span></label
              >
              <input
                type="text"
                [(ngModel)]="cfg.borderRadius"
                (ngModelChange)="update()"
                placeholder="4px"
              />
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <ui-button variant="secondary" (click)="reset()" label="Reset"></ui-button>
        </div>
      </div>

      <!-- Preview — @if toggle forces element recreation on every prop change  -->
      <!-- (skeleton-loader has mutable:false props that don't react to attr mutations) -->
      <div class="playground-preview">
        @if (recreate) {
          <skeleton-loader
            [attr.shape]="cfg.shape"
            [attr.animation-type]="cfg.animationType"
            [attr.animated]="cfg.animated"
            [attr.size]="cfg.size !== 'custom' ? cfg.size : null"
            [attr.width]="cfg.size === 'custom' ? cfg.width : null"
            [attr.height]="cfg.size === 'custom' ? cfg.height : null"
            [attr.border-radius]="cfg.borderRadius || null"
          ></skeleton-loader>
        } @else {
          <skeleton-loader
            [attr.shape]="cfg.shape"
            [attr.animation-type]="cfg.animationType"
            [attr.animated]="cfg.animated"
            [attr.size]="cfg.size !== 'custom' ? cfg.size : null"
            [attr.width]="cfg.size === 'custom' ? cfg.width : null"
            [attr.height]="cfg.size === 'custom' ? cfg.height : null"
            [attr.border-radius]="cfg.borderRadius || null"
          ></skeleton-loader>
        }

        
      
      <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="code()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
    </div>
    </div>
  `,
  styleUrl: './skeleton-playground.component.scss',
})
export class SkeletonPlaygroundComponent {
  cfg = {
    shape: 'rectangle',
    animationType: 'pulse',
    animated: 'true',
    size: 'custom',
    width: '100%',
    height: '80px',
    borderRadius: '',
  };

  shapeOpts = [
    { label: 'rectangle', value: 'rectangle' },
    { label: 'rounded-rectangle', value: 'rounded-rectangle' },
    { label: 'rounded', value: 'rounded' },
    { label: 'square', value: 'square' },
    { label: 'rounded-square', value: 'rounded-square' },
    { label: 'circle', value: 'circle' },
    { label: 'oval', value: 'oval' },
    { label: 'text', value: 'text' },
    { label: 'avatar', value: 'avatar' },
    { label: 'button', value: 'button' },
    { label: 'card', value: 'card' },
    { label: 'list-item', value: 'list-item' },
    { label: 'image', value: 'image' },
  ];

  allShapes = this.shapeOpts;

  animTypeOpts = [
    { label: 'pulse', value: 'pulse' },
    { label: 'wave', value: 'wave' },
  ];

  boolOpts = [
    { label: 'true — animated', value: 'true' },
    { label: 'false — static', value: 'false' },
  ];

  sizeOpts = [
    { label: 'custom (use width/height)', value: 'custom' },
    { label: 'xs — 16px', value: 'xs' },
    { label: 'sm — 24px', value: 'sm' },
    { label: 'md — 32px', value: 'md' },
    { label: 'lg — 48px', value: 'lg' },
    { label: 'xl — 64px', value: 'xl' },
    { label: '2xl — 80px', value: '2xl' },
  ];

  code = signal('');
  recreate = true;
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  update() {
    this.recreate = !this.recreate; // force skeleton-loader element recreation
    const lines = ['<skeleton-loader'];
    lines.push(`  shape="${this.cfg.shape}"`);
    lines.push(`  animation-type="${this.cfg.animationType}"`);
    if (this.cfg.animated === 'false') lines.push(`  animated="false"`);
    if (this.cfg.size !== 'custom') {
      lines.push(`  size="${this.cfg.size}"`);
    } else {
      if (this.cfg.width) lines.push(`  width="${this.cfg.width}"`);
      if (this.cfg.height) lines.push(`  height="${this.cfg.height}"`);
    }
    if (this.cfg.borderRadius) lines.push(`  border-radius="${this.cfg.borderRadius}"`);
    lines.push('></skeleton-loader>');
    this.code.set(lines.join('\n'));
    this.refreshCode();
  }

  copy() {
    navigator.clipboard.writeText(this.code());
  }

  reset() {
    this.cfg = {
      shape: 'rectangle',
      animationType: 'pulse',
      animated: 'true',
      size: 'custom',
      width: '100%',
      height: '80px',
      borderRadius: '',
    };
    this.update();
  }
}
