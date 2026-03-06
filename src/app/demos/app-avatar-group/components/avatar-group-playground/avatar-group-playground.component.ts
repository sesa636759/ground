import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-avatar-group-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-group-playground.component.html',
  styleUrl: './avatar-group-playground.component.scss',
})
export class AvatarGroupPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('avatarGroupElement') avatarGroupElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout Configuration', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'style', title: 'Visual Styles', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['layout'];

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
  ];

  getDefaultConfig() {
    return {
      size: 'medium',
      max: 3,
      shape: 'circle',
      layout: 'stack',
      spacing: 8,
      overlap: -8,
      animated: true,
      enablePopover: true,
      borderColor: '#ffffff',
      borderWidth: 2,
    };
  }

  layoutOptions = [
    { label: 'Stack (Overlapping)', value: 'stack' },
    { label: 'Grid', value: 'grid' },
  ];

  updateConfig() {
    setTimeout(() => {
      if (!this.avatarGroupElement) return;

      const el = this.avatarGroupElement.nativeElement as any;

      // Manually set properties for the live preview to reflect
      el.size = this.pgConfig.size;
      el.max = this.pgConfig.max;
      el.shape = this.pgConfig.shape;
      el.layout = this.pgConfig.layout;
      el.spacing = this.pgConfig.spacing;
      el.overlap = this.pgConfig.overlap;
      el.animated = this.pgConfig.animated;
      el.enablePopover = this.pgConfig.enablePopover;
      el.borderColor = this.pgConfig.borderColor;
      el.borderWidth = this.pgConfig.borderWidth;

      const innerContent = `
  <ui-avatar label="JD" src="https://i.pravatar.cc/150?u=1"></ui-avatar>
  <ui-avatar label="AB" src="https://i.pravatar.cc/150?u=2"></ui-avatar>
  <ui-avatar label="CD" src="https://i.pravatar.cc/150?u=3"></ui-avatar>
  <ui-avatar label="EF" src="https://i.pravatar.cc/150?u=4"></ui-avatar>
  <ui-avatar label="GH" src="https://i.pravatar.cc/150?u=5"></ui-avatar>`;

      let code = `<ui-avatar-group
  size="${this.pgConfig.size}"
  max="${this.pgConfig.max}"
  shape="${this.pgConfig.shape}"
  layout="${this.pgConfig.layout}"`;

      if (this.pgConfig.layout === 'grid') code += `\n  spacing="${this.pgConfig.spacing}"`;
      if (this.pgConfig.layout === 'stack') code += `\n  overlap="${this.pgConfig.overlap}"`;
      if (this.pgConfig.animated) code += `\n  animated`;
      if (this.pgConfig.enablePopover) code += `\n  enable-popover`;
      if (this.pgConfig.borderColor !== '#ffffff')
        code += `\n  border-color="${this.pgConfig.borderColor}"`;
      if (this.pgConfig.borderWidth !== 2)
        code += `\n  border-width="${this.pgConfig.borderWidth}"`;

      code += `\n>${innerContent}\n</ui-avatar-group>`;

      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }
}
