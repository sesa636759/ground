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
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'appearance', title: 'Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizing', title: 'Sizing', icon: 'ruler', iconLibrary: 'lucide' },
  ];

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

  getDefaultConfig() {
    return {
      shape: 'rectangle',
      animationType: 'pulse',
      animated: 'true',
      size: 'custom',
      width: '100%',
      height: '80px',
      borderRadius: '',
    };
  }

  updateConfig() {
    this.recreate = !this.recreate;
    const lines = ['<skeleton-loader'];
    lines.push(`  shape="${this.pgConfig.shape}"`);
    lines.push(`  animation-type="${this.pgConfig.animationType}"`);
    if (this.pgConfig.animated === 'false') lines.push(`  animated="false"`);
    if (this.pgConfig.size !== 'custom') {
      lines.push(`  size="${this.pgConfig.size}"`);
    } else {
      if (this.pgConfig.width) lines.push(`  width="${this.pgConfig.width}"`);
      if (this.pgConfig.height) lines.push(`  height="${this.pgConfig.height}"`);
    }
    if (this.pgConfig.borderRadius) lines.push(`  border-radius="${this.pgConfig.borderRadius}"`);
    lines.push('></skeleton-loader>');
    this.generatedCode.set(lines.join('\n'));
    this.refreshCode();
  }
}
