import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-pill-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pill-playground.component.html',
  styleUrl: './pill-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmPillPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'content', title: 'Content & Media', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visual & Style', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'States & Interaction', icon: 'zap', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['content', 'visuals'];

  variantOptions = [
    { label: 'Filled', value: 'filled' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Soft', value: 'soft' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Gradient', value: 'gradient' },
  ];

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
    { label: 'Vertical Text', value: 'vertical-text' },
    { label: 'Vertical Rotated', value: 'vertical-rotated' },
  ];

  animationOptions = [
    { label: 'Scale', value: 'scale' },
    { label: 'Fade', value: 'fade' },
    { label: 'Slide', value: 'slide' },
    { label: 'None', value: 'none' },
  ];

  gradientOptions = [
    { label: 'Primary', value: 'blue-purple' },
    { label: 'Success', value: 'green-teal' },
    { label: 'Danger', value: 'orange-red' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      label: 'Interactive Pill',
      variant: 'soft',
      color: 'primary',
      size: 'md',
      orientation: 'horizontal',
      selected: false,
      removable: true,
      clickable: true,
      loading: false,
      disabled: false,
      counter: null as string | null,
      icon: '',
      iconLibrary: 'lucide',
      iconPosition: 'start',
      avatar: '',
      tooltip: '',
      animation: 'scale',
      gradient: '',
    };
  }

  updateConfig() {
    let code = '<ui-pill\n';
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;

    if (this.pgConfig.orientation !== 'horizontal')
      code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.selected) code += `  selected\n`;
    if (this.pgConfig.removable) code += `  removable\n`;
    if (this.pgConfig.clickable) code += `  clickable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.counter) code += `  counter="${this.pgConfig.counter}"\n`;
    if (this.pgConfig.icon) {
      code += `  icon="${this.pgConfig.icon}"\n`;
      code += `  icon-library="${this.pgConfig.iconLibrary}"\n`;
      code += `  icon-position="${this.pgConfig.iconPosition}"\n`;
    }
    if (this.pgConfig.avatar) code += `  avatar="${this.pgConfig.avatar}"\n`;
    if (this.pgConfig.tooltip) code += `  tooltip="${this.pgConfig.tooltip}"\n`;
    if (this.pgConfig.animation !== 'scale') code += `  animation="${this.pgConfig.animation}"\n`;
    if (this.pgConfig.variant === 'gradient' && this.pgConfig.gradient) {
      code += `  gradient="${this.pgConfig.gradient}"\n`;
    }

    code += '></ui-pill>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onPillClick() {
    this.logEvent('Pill Clicked');
  }

  onPillRemove() {
    this.logEvent('Pill Removed');
  }

  onPillSelect(event: any) {
    this.pgConfig.selected = event.detail;
    this.logEvent(`Pill ${event.detail ? 'Selected' : 'Deselected'}`);
    this.updateConfig();
  }
}
