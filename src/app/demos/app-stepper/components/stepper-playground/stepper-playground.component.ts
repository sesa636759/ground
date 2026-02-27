import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-stepper-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stepper-playground.component.html',

  styleUrl: './stepper-playground.component.scss',
})
export class StepperPlaygroundComponent {
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
  generatedCode = signal('');

  constructor() {
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
  }

  onStepChange(event: any) {
    this.pgConfig.activeStep = event.detail.index;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      size: 'md',
      variant: 'default',
      activeStep: 1,
      showNumbers: true,
      showDescriptions: true,
      progressDot: false,
    };
    this.updateConfig();
  }
}
