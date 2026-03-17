import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-tooltip-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tooltip-playground.component.html',
  styleUrl: './tooltip-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTooltipPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  variantOptions = [
    { label: 'Dark', value: 'dark' },
    { label: 'Light', value: 'light' },
    { label: 'Primary', value: 'primary' },
    { label: 'Info', value: 'info' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Error', value: 'error' },
    { label: 'Glass', value: 'glass' },
  ];

  shapeOptions = [
    { label: 'Rounded', value: 'rounded' },
    { label: 'Square', value: 'square' },
    { label: 'Pill', value: 'pill' },
  ];

  animationOptions = [
    { label: 'Fade', value: 'fade' },
    { label: 'Slide', value: 'slide' },
    { label: 'Scale', value: 'scale' },
    { label: 'Bounce', value: 'bounce' },
    { label: 'None', value: 'none' },
  ];

  timingOptions = [
    { label: 'Ease', value: 'ease' },
    { label: 'Linear', value: 'linear' },
    { label: 'Ease In', value: 'ease-in' },
    { label: 'Ease Out', value: 'ease-out' },
    { label: 'Ease In Out', value: 'ease-in-out' },
  ];

  standardTriggerOptions = [
    { label: 'Hover', value: 'hover' },
    { label: 'Click', value: 'click' },
    { label: 'Focus', value: 'focus' },
  ];

  customTriggerOptions = [...this.standardTriggerOptions, { label: 'Manual', value: 'manual' }];

  constructor() {
    super();
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      content: 'Tooltip Content',
      position: 'top',
      trigger: 'hover',
      variant: 'dark',
      shape: 'rounded',
      animation: 'fade',
      arrow: true,
      showDelay: 0,
      hideDelay: 0,
      maxWidth: 250,
      interactive: false,
      followCursor: false,
      html: false,
      showGlow: false,
      customColor: '#3DCD58',
      textColor: '#ffffff',
      transitionDuration: 200,
      targetText: 'Hover Me',
      targetIcon: 'fas fa-info-circle',
      elevation: 0,
      offset: 8,
      transitionTiming: 'ease',
      arrowSize: 8,
      trackMouse: false,
      openAtMousePosition: false,
      autoShift: true,
      portal: true,
      useCustomColor: false,
      visible: false,
      closable: false,
    };
  }

  updateConfig() {
    let code = `<dui-tooltip\n`;
    code += `  content="${this.pgConfig.content}"\n`;
    if (this.pgConfig.position !== 'top') code += `  position="${this.pgConfig.position}"\n`;
    if (this.pgConfig.trigger !== 'hover') code += `  trigger="${this.pgConfig.trigger}"\n`;
    if (this.pgConfig.variant !== 'dark') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.shape !== 'rounded') code += `  shape="${this.pgConfig.shape}"\n`;
    if (this.pgConfig.animation !== 'fade') code += `  animation="${this.pgConfig.animation}"\n`;
    if (this.pgConfig.elevation > 0) code += `  elevation="${this.pgConfig.elevation}"\n`;

    if (!this.pgConfig.arrow) code += `  [arrow]="false"\n`;
    if (this.pgConfig.showDelay > 0) code += `  [showDelay]="${this.pgConfig.showDelay}"\n`;
    if (this.pgConfig.hideDelay > 0) code += `  [hideDelay]="${this.pgConfig.hideDelay}"\n`;
    if (this.pgConfig.maxWidth !== 250) code += `  [maxWidth]="${this.pgConfig.maxWidth}"\n`;
    if (this.pgConfig.offset !== 8) code += `  [offset]="${this.pgConfig.offset}"\n`;

    if (this.pgConfig.interactive) code += `  [interactive]="true"\n`;
    if (this.pgConfig.followCursor) code += `  [followCursor]="true"\n`;
    if (this.pgConfig.html) code += `  [html]="true"\n`;
    if (this.pgConfig.showGlow) code += `  [showGlow]="true"\n`;
    if (this.pgConfig.trackMouse) code += `  [trackMouse]="true"\n`;
    if (this.pgConfig.openAtMousePosition) code += `  [openAtMousePosition]="true"\n`;
    if (this.pgConfig.visible) code += `  [visible]="true"\n`;
    if (this.pgConfig.closable) code += `  [closable]="true"\n`;
    if (!this.pgConfig.autoShift) code += `  [autoShift]="false"\n`;
    if (!this.pgConfig.portal) code += `  [portal]="false"\n`;

    if (this.pgConfig.useCustomColor) {
      if (this.pgConfig.customColor) code += `  custom-color="${this.pgConfig.customColor}"\n`;
      if (this.pgConfig.textColor) code += `  text-color="${this.pgConfig.textColor}"\n`;
    }

    if (this.pgConfig.transitionDuration !== 200)
      code += `  [transitionDuration]="${this.pgConfig.transitionDuration}"\n`;
    if (this.pgConfig.transitionTiming !== 'ease')
      code += `  transition-timing="${this.pgConfig.transitionTiming}"\n`;
    if (this.pgConfig.arrowSize !== 8) code += `  [arrowSize]="${this.pgConfig.arrowSize}"\n`;

    code += `>\n`;
    code += `  <dui-button slot="target" class="btn-target">\n`;
    code += `    <i class="${this.pgConfig.targetIcon}"></i> ${this.pgConfig.targetText}\n`;
    code += `  </dui-button>\n`;
    code += `</dui-tooltip>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
