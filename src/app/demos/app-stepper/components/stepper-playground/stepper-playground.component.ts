import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-stepper-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stepper-playground.component.html',
  styleUrl: './stepper-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StepperPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout Properties', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'options', title: 'Options', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = JSON.stringify(['layout', 'options']);

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
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      orientation: 'horizontal',
      size: 'md',
      variant: 'default',
      activeStep: 0,
      showNumbers: true,
      showDescriptions: true,
      progressDot: false,
    };
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
    this.updateConfig();
    this.logEvent(`Active step changed to: ${this.pgConfig.activeStep}`);
  }
}
