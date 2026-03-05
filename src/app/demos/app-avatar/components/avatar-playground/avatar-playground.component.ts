import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-avatar-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-playground.component.html',
  styleUrl: './avatar-playground.component.scss',
})
export class AvatarPlaygroundComponent extends BasePlaygroundComponent {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'profile', title: 'Profile Info', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'style', title: 'Visual Styles', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'status', title: 'Status & Badges', icon: 'settings', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = JSON.stringify(['profile']);

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
    };
  }

  updateConfig() {
    let code = '<ui-avatar\n';
    if (this.pgConfig.name) code += `  name="${this.pgConfig.name}"\n`;
    if (this.pgConfig.src) code += `  src="${this.pgConfig.src}"\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.status) code += `  status="${this.pgConfig.status}"\n`;
    if (this.pgConfig.badge) code += `  badge="${this.pgConfig.badge}"\n`;
    if (this.pgConfig.badgeColor) code += `  badge-color="${this.pgConfig.badgeColor}"\n`;
    code += '></ui-avatar>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
