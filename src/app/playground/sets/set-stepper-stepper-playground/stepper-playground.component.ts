import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-stepper-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stepper-playground.component.html',
  styleUrl: './stepper-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmStepperPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = {
    orientation: 'horizontal',
    size: 'md',
    variant: 'default',
    activeStep: 1,
    showNumbers: true,
    showDescriptions: true,
    progressDot: false,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Modern', value: 'modern' },
  ];

  steps = [
    { id: '1', label: 'Identity', description: 'Verify your personal details' },
    { id: '2', label: 'Security', description: 'Setup 2FA and passwords' },
    { id: '3', label: 'Preferences', description: 'Choose your theme and language' },
    { id: '4', label: 'Finish', description: 'You are all set to go!' },
  ];

  stepsJson = JSON.stringify(this.steps);

  constructor() {
    super();
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-stepper\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  [active-step]="${this.pgConfig.activeStep}"\n`;
    if (!this.pgConfig.showNumbers) code += `  [show-numbers]="false"\n`;
    if (this.pgConfig.showDescriptions) code += `  show-descriptions\n`;
    if (this.pgConfig.progressDot) code += `  progress-dot\n`;
    code += `  [steps]="steps"\n`;
    code += '></ui-stepper>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onStepChange(event: any) {
    this.pgConfig.activeStep = event.detail.index;
    this.logEvent(`Step changed to: ${this.steps[event.detail.index].label}`);
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      orientation: 'horizontal',
      size: 'md',
      variant: 'default',
      activeStep: 1,
      showNumbers: true,
      showDescriptions: true,
      progressDot: false,
    };
  }
}
