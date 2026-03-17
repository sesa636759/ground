import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-badge-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './badge-playground.component.html',
  styleUrl: './badge-playground.component.scss',
})
export class DmBadgePlaygroundComponent extends BasePlaygroundComponent {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'content', title: 'Content & Value', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance & Style', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'layout', title: 'Layout & Position', icon: 'move', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior & Interaction', icon: 'zap', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['content', 'appearance'];

  variantOptions = [
    { label: 'Standard', value: 'standard' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Soft', value: 'soft' },
  ];

  shapeOptions = [
    { label: 'Default (Pill)', value: 'default' },
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
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

  iconPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  gradientOptions = [
    { label: 'None', value: '' },
    { label: 'Blue Purple', value: 'blue-purple' },
    { label: 'Green Teal', value: 'green-teal' },
    { label: 'Orange Red', value: 'orange-red' },
  ];

  getDefaultConfig() {
    return {
      value: '5',
      max: 99,
      color: 'danger',
      size: 'md',
      variant: 'standard',
      shape: 'default',
      position: 'top-right',
      animation: 'none',
      dot: false,
      glow: false,
      icon: '',
      iconPosition: 'start',
      iconLibrary: 'lucide',
      offsetX: 0,
      offsetY: 0,
      gradient: '',
      interactive: false,
      closeable: false,
      showZero: false,
    };
  }

  updateConfig() {
    let code = '<dui-badge\n';
    if (!this.pgConfig.dot) code += `  value="${this.pgConfig.value}"\n`;
    if (this.pgConfig.max !== 99) code += `  [max]="${this.pgConfig.max}"\n`;

    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;
    code += `  position="${this.pgConfig.position}"\n`;

    if (this.pgConfig.animation !== 'none') code += `  animation="${this.pgConfig.animation}"\n`;
    if (this.pgConfig.dot) code += `  dot\n`;
    if (this.pgConfig.glow) code += `  glow\n`;
    if (this.pgConfig.interactive) code += `  interactive\n`;
    if (this.pgConfig.closeable) code += `  closeable\n`;
    if (this.pgConfig.showZero) code += `  show-zero\n`;

    if (this.pgConfig.icon) {
      code += `  icon="${this.pgConfig.icon}"\n`;
      code += `  icon-position="${this.pgConfig.iconPosition}"\n`;
      code += `  icon-library="${this.pgConfig.iconLibrary}"\n`;
    }

    if (this.pgConfig.gradient) code += `  gradient="${this.pgConfig.gradient}"\n`;
    if (this.pgConfig.offsetX !== 0) code += `  [offset-x]="${this.pgConfig.offsetX}"\n`;
    if (this.pgConfig.offsetY !== 0) code += `  [offset-y]="${this.pgConfig.offsetY}"\n`;

    code += '>\n';
    code +=
      '  <div style="width: 48px; height: 48px; background: var(--surface-2); border-radius: 8px;"></div>\n';
    code += '</dui-badge>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onBadgeClick() {
    this.logEvent('Badge Clicked');
  }

  onBadgeClose() {
    this.logEvent('Badge Closed');
  }
}
