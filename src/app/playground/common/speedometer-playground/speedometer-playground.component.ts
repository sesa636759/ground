import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-speedometer-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speedometer-playground.component.html',
  styleUrl: './speedometer-playground.component.scss',
})
export class DmSpeedometerPlaygroundComponent extends BasePlaygroundComponent {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'settings', title: 'Core Settings', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced & Indicators', icon: 'sliders', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['settings'];

  needleShapeOptions = [
    { label: 'Triangle', value: 'triangle' },
    { label: 'Arrow', value: 'arrow' },
    { label: 'Line', value: 'line' },
  ];

  updateConfig() {
    let code = `<ui-speedometer\n`;
    code += `  [value]="${this.pgConfig.value}"\n`;
    if (this.pgConfig.secondaryValue !== undefined) code += `  [secondary-value]="${this.pgConfig.secondaryValue}"\n`;
    if (this.pgConfig.minValue !== 0) code += `  [min-value]="${this.pgConfig.minValue}"\n`;
    if (this.pgConfig.maxValue !== 100) code += `  [max-value]="${this.pgConfig.maxValue}"\n`;
    if (this.pgConfig.size !== 250) code += `  [size]="${this.pgConfig.size}"\n`;
    if (this.pgConfig.label) code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.unit) code += `  unit="${this.pgConfig.unit}"\n`;
    if (this.pgConfig.showPercentage) code += `  show-percentage\n`;
    
    if (this.pgConfig.needleColor !== '#1f2937') code += `  needle-color="${this.pgConfig.needleColor}"\n`;
    if (!this.pgConfig.showTicks) code += `  [show-ticks]="false"\n`;
    if (this.pgConfig.tickCount !== 10) code += `  [tick-count]="${this.pgConfig.tickCount}"\n`;
    if (this.pgConfig.animationDuration !== 1000) code += `  [animation-duration]="${this.pgConfig.animationDuration}"\n`;
    
    if (this.pgConfig.startAngle !== -135) code += `  [start-angle]="${this.pgConfig.startAngle}"\n`;
    if (this.pgConfig.endAngle !== 135) code += `  [end-angle]="${this.pgConfig.endAngle}"\n`;
    if (this.pgConfig.needleShape !== 'triangle') code += `  needle-shape="${this.pgConfig.needleShape}"\n`;
    
    if (this.pgConfig.interactive) code += `  interactive\n`;
    
    if (this.pgConfig.ranges) code += `  ranges='${this.pgConfig.ranges}'\n`;
    if (this.pgConfig.customLabels) code += `  custom-labels='${this.pgConfig.customLabels}'\n`;
    if (this.pgConfig.gradientColors) code += `  gradient-colors="${this.pgConfig.gradientColors}"\n`;

    code += `></ui-speedometer>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  getDefaultConfig() {
    return {
      value: 65,
      secondaryValue: undefined as number | undefined,
      minValue: 0,
      maxValue: 100,
      size: 250,
      label: 'Speed',
      unit: 'km/h',
      showPercentage: false,
      needleColor: '#1f2937',
      showTicks: true,
      tickCount: 10,
      animationDuration: 1000,
      startAngle: -135,
      endAngle: 135,
      needleShape: 'triangle',
      interactive: false,
      ranges: '',
      customLabels: '',
      gradientColors: '',
    };
  }

  onValueChange(event: any) {
    this.pgConfig.value = event.detail;
    this.updateConfig();
  }
}
