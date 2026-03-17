import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-avatar-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-playground.component.html',
  styleUrl: './avatar-playground.component.scss',
})
export class DmAvatarPlaygroundComponent extends BasePlaygroundComponent {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'profile', title: 'Profile Info', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'style', title: 'Visual Styles', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'status', title: 'Status & Badges', icon: 'settings', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['profile'];

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
    { label: 'Hexagon', value: 'hexagon' },
    { label: 'Squircle', value: 'squircle' },
  ];

  statusOptions = [
    { label: 'None', value: '' },
    { label: 'Online', value: 'online' },
    { label: 'Away', value: 'away' },
    { label: 'Busy', value: 'busy' },
    { label: 'Offline', value: 'offline' },
  ];

  getDefaultConfig() {
    return {
      name: 'John Doe',
      src: 'https://i.pravatar.cc/150?u=playground',
      icon: '',
      shape: 'circle',
      size: '80px',
      status: 'online',
      badge: '',
      badgeColor: '',
      badgePosition: 'bottom-right',
      variant: 'default',
      animation: 'none',
      statusPulse: false,
      story: false,
      storySeen: false,
      activeSpeaker: false,
      verified: false,
      editable: false,
      glass: false,
      skeleton: false,
      gradient: false,
      autoColor: false,
    };
  }

  badgePositionOptions = [
    { label: 'Top Right', value: 'top-right' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
    { label: 'Bottom Left', value: 'bottom-left' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Glass', value: 'glass' },
  ];

  animationOptions = [
    { label: 'None', value: 'none' },
    { label: 'Pulse', value: 'pulse' },
    { label: 'Ring', value: 'ring' },
    { label: 'Glow', value: 'glow' },
  ];

  updateConfig() {
    let code = '<dui-avatar\n';
    if (this.pgConfig.name) code += `  name="${this.pgConfig.name}"\n`;
    if (this.pgConfig.src) code += `  src="${this.pgConfig.src}"\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;

    if (this.pgConfig.status) {
      code += `  status="${this.pgConfig.status}"\n`;
      if (this.pgConfig.statusPulse) code += `  status-pulse\n`;
    }

    if (this.pgConfig.badge) {
      code += `  badge="${this.pgConfig.badge}"\n`;
      if (this.pgConfig.badgeColor) code += `  badge-color="${this.pgConfig.badgeColor}"\n`;
      if (this.pgConfig.badgePosition !== 'bottom-right')
        code += `  badge-position="${this.pgConfig.badgePosition}"\n`;
    }

    if (this.pgConfig.animation !== 'none') code += `  animation="${this.pgConfig.animation}"\n`;
    if (this.pgConfig.story) {
      code += `  story\n`;
      if (this.pgConfig.storySeen) code += `  story-seen\n`;
    }

    if (this.pgConfig.activeSpeaker) code += `  active-speaker\n`;
    if (this.pgConfig.verified) code += `  verified\n`;
    if (this.pgConfig.editable) code += `  editable\n`;
    if (this.pgConfig.glass) code += `  glass\n`;
    if (this.pgConfig.skeleton) code += `  skeleton\n`;
    if (this.pgConfig.gradient) code += `  gradient\n`;
    if (this.pgConfig.autoColor) code += `  auto-color\n`;

    code += '></dui-avatar>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
