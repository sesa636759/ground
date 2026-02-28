import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-skeleton-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, UiDropdownValueAccessorDirective, AppPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skeleton-playground.component.html',

  styleUrl: './skeleton-playground.component.scss',
})
export class SkeletonPlaygroundComponent {
  generatedCode = signal<string>('');
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
