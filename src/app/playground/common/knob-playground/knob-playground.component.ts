import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-knob-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './knob-playground.component.html',
  styleUrl: './knob-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmKnobPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visual Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavioral States', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'ticks', title: 'Ticks & Labels', icon: 'dialpad', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['global', 'visuals'];

  colorOptions = [
    { label: 'Primary Blue', value: '#3b82f6' },
    { label: 'Success Green', value: '#10b981' },
    { label: 'Warning Amber', value: '#f59e0b' },
    { label: 'Danger Red', value: '#ef4444' },
    { label: 'Indigo', value: '#6366f1' },
    { label: 'Violet', value: '#8b5cf6' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 150,
      strokeWidth: 10,
      color: '#3b82f6',
      trackColor: '#e2e8f0',
      showValue: true,
      valueSuffix: '%',
      showMinMax: false,
      disabled: false,
      readonly: false,
      startAngle: 135,
      endAngle: 405,
      enableWheel: true,
      showTicks: false,
      tickCount: 10,
      tickColor: '#94a3b8',
      tickLength: 0.1,
      showLabels: false,
      snap: false,
      allowInput: false,
    };
  }

  updateConfig() {
    const config = this.pgConfig;
    let code = `<ui-knob\n`;
    code += `  [value]="${config.value}"\n`;
    if (config.min !== 0) code += `  [min]="${config.min}"\n`;
    if (config.max !== 100) code += `  [max]="${config.max}"\n`;
    if (config.step !== 1) code += `  [step]="${config.step}"\n`;
    if (config.size !== 120) code += `  [size]="${config.size}"\n`;
    if (config.strokeWidth !== 8) code += `  [stroke-width]="${config.strokeWidth}"\n`;
    if (config.color !== '#3b82f6') code += `  color="${config.color}"\n`;
    if (config.trackColor !== '#e2e8f0') code += `  track-color="${config.trackColor}"\n`;
    if (!config.showValue) code += `  [show-value]="false"\n`;
    if (config.valueSuffix) code += `  value-suffix="${config.valueSuffix}"\n`;
    if (config.showMinMax) code += `  show-min-max\n`;
    if (config.disabled) code += `  disabled\n`;
    if (config.readonly) code += `  readonly\n`;
    if (config.startAngle !== 135) code += `  [start-angle]="${config.startAngle}"\n`;
    if (config.endAngle !== 405) code += `  [end-angle]="${config.endAngle}"\n`;
    if (!config.enableWheel) code += `  [enable-wheel]="false"\n`;
    if (config.showTicks) {
      code += `  show-ticks\n`;
      if (config.tickCount !== 10) code += `  [tick-count]="${config.tickCount}"\n`;
      if (config.tickColor !== '#94a3b8') code += `  tick-color="${config.tickColor}"\n`;
      if (config.tickLength !== 0.1) code += `  [tick-length]="${config.tickLength}"\n`;
    }
    if (config.showLabels) code += `  show-labels\n`;
    if (config.snap) code += `  snap\n`;
    if (config.allowInput) code += `  allow-input\n`;
    code += `  (knobChange)="onValueChange($event)"\n`;
    code += `></ui-knob>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onValueChange(event: any) {
    this.pgConfig.value = event.detail.value ?? event.detail;
    this.updateConfig();
    this.logEvent(`Knob Value Changed: ${this.pgConfig.value}`);
  }
}
