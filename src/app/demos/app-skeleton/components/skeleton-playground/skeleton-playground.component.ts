import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-skeleton-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skeleton-playground.component.html',
  styleUrl: './skeleton-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SkeletonPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  cfg = {
    shape: 'rectangle',
    animationType: 'pulse',
    animated: 'true',
    size: 'custom',
    width: '100%',
    height: '80px',
    borderRadius: '',
  };

  pgAccordionItems = JSON.stringify([
    { id: 'appearance', title: 'Appearance', icon: '🎨' },
    { id: 'sizing', title: 'Sizing', icon: '📏' },
  ]);

  accordionDefaultOpen = JSON.stringify(['appearance']);

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

  recreate = true;

  constructor() {
    super();
    this.updateConfig();
  }

  updateConfig() {
    this.recreate = !this.recreate;
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
    this.generatedCode.set(lines.join('\n'));
    this.refreshCode();
  }

  override resetConfig() {
    this.cfg = {
      shape: 'rectangle',
      animationType: 'pulse',
      animated: 'true',
      size: 'custom',
      width: '100%',
      height: '80px',
      borderRadius: '',
    };
    this.updateConfig();
    this.eventLog.set([]);
  }
}
