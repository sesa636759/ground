import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-progress-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './progress-playground.component.html',
  styleUrl: './progress-playground.component.scss',
})
export class DmProgressPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = {
    percent: 50,
    type: 'line',
    status: 'normal',
    strokeWidth: 10,
    width: '100%',
    size: 'default',
    strokeLinecap: 'round',
    showInfo: true,
    steps: 0,
    gapDegree: 0,
    gapPosition: 'top',
    indeterminate: false,
    liquid: false,
    glass: false,
    glow: false,
    strokeColor: '#1890ff',
    trailColor: '#f0f0f0',
    buffer: 0,
    showBuffer: false,
    paused: false,
    showPauseButton: false,
    estimatedTime: 0,
    showTimeEstimate: false,
    decimalPrecision: 0,
    percentageColor: '',
    labelPosition: 'outside',
  };

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visual', title: 'Visual Enhancements', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced Controls', icon: 'sliders', iconLibrary: 'lucide' },
  ];

  updateConfig() {
    let code = `<ui-progress\n`;
    code += `  [percent]="${this.pgConfig.percent}"\n`;
    if (this.pgConfig.type !== 'line') code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.status !== 'normal') code += `  status="${this.pgConfig.status}"\n`;
    if (this.pgConfig.strokeWidth !== 10) code += `  [stroke-width]="${this.pgConfig.strokeWidth}"\n`;
    if (this.pgConfig.size !== 'default') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.width !== '100%') code += `  width="${this.pgConfig.width}"\n`;
    if (this.pgConfig.strokeLinecap !== 'round') code += `  stroke-linecap="${this.pgConfig.strokeLinecap}"\n`;
    if (!this.pgConfig.showInfo) code += `  [show-info]="false"\n`;
    if (this.pgConfig.steps > 0) code += `  [steps]="${this.pgConfig.steps}"\n`;
    
    if (this.pgConfig.type !== 'line') {
      if (this.pgConfig.gapDegree !== 0) code += `  [gap-degree]="${this.pgConfig.gapDegree}"\n`;
      if (this.pgConfig.gapPosition !== 'top') code += `  gap-position="${this.pgConfig.gapPosition}"\n`;
    }

    if (this.pgConfig.indeterminate) code += `  indeterminate\n`;
    if (this.pgConfig.liquid) code += `  liquid\n`;
    if (this.pgConfig.glass) code += `  glass\n`;
    if (this.pgConfig.glow) code += `  glow\n`;

    if (this.pgConfig.strokeColor !== '#1890ff') code += `  stroke-color="${this.pgConfig.strokeColor}"\n`;
    if (this.pgConfig.trailColor !== '#f0f0f0') code += `  trail-color="${this.pgConfig.trailColor}"\n`;
    
    if (this.pgConfig.showBuffer) {
      code += `  show-buffer\n`;
      code += `  [buffer]="${this.pgConfig.buffer}"\n`;
    }

    if (this.pgConfig.showPauseButton) {
      code += `  show-pause-button\n`;
      if (this.pgConfig.paused) code += `  paused\n`;
    }

    if (this.pgConfig.showTimeEstimate) {
      code += `  show-time-estimate\n`;
      if (this.pgConfig.estimatedTime > 0) code += `  [estimated-time]="${this.pgConfig.estimatedTime}"\n`;
    }

    if (this.pgConfig.decimalPrecision > 0) code += `  [decimal-precision]="${this.pgConfig.decimalPrecision}"\n`;
    if (this.pgConfig.percentageColor) code += `  percentage-color="${this.pgConfig.percentageColor}"\n`;
    if (this.pgConfig.labelPosition !== 'outside') code += `  label-position="${this.pgConfig.labelPosition}"\n`;

    code += `></ui-progress>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  getDefaultConfig() {
    return {
      percent: 50,
      type: 'line',
      status: 'normal',
      strokeWidth: 10,
      width: '100%',
      size: 'default',
      strokeLinecap: 'round',
      showInfo: true,
      steps: 0,
      gapDegree: 0,
      gapPosition: 'top',
      indeterminate: false,
      liquid: false,
      glass: false,
      glow: false,
      strokeColor: '#1890ff',
      trailColor: '#f0f0f0',
      buffer: 0,
      showBuffer: false,
      paused: false,
      showPauseButton: false,
      estimatedTime: 0,
      showTimeEstimate: false,
      decimalPrecision: 0,
      percentageColor: '',
      labelPosition: 'outside',
    };
  }
}
