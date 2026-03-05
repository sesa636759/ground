import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-badge-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './badge-playground.component.html',
  styleUrl: './badge-playground.component.scss',
})
export class BadgePlaygroundComponent extends BasePlaygroundComponent {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'content', title: 'Content & Value', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance & Style', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior & Animation', icon: 'settings', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['content'];

  variantOptions = [
    { label: 'Standard', value: 'standard' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Soft', value: 'soft' },
  ];

  positionOptions = [
    { label: 'Top Right', value: 'top-right' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
    { label: 'Bottom Left', value: 'bottom-left' },
  ];

  animationOptions = [
    { label: 'None', value: 'none' },
    { label: 'Pulse', value: 'pulse' },
    { label: 'Bounce', value: 'bounce' },
    { label: 'Shake', value: 'shake' },
  ];

  getDefaultConfig() {
    return {
      value: '5',
      max: 99,
      color: 'danger',
      size: 'md',
      variant: 'standard',
      position: 'top-right',
      animation: 'none',
      dot: false,
      glow: false,
      icon: '',
    };
  }

  updateConfig() {
    let code = '<ui-badge\n';
    if (!this.pgConfig.dot) code += `  value="${this.pgConfig.value}"\n`;
    if (this.pgConfig.max !== 99) code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  position="${this.pgConfig.position}"\n`;
    if (this.pgConfig.animation !== 'none') code += `  animation="${this.pgConfig.animation}"\n`;
    if (this.pgConfig.dot) code += `  dot\n`;
    if (this.pgConfig.glow) code += `  glow\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    code += '>\n';
    code += '  <icon>🔔</icon>\n';
    code += '</ui-badge>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
