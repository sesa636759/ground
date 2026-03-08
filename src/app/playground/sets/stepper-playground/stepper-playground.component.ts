import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-stepper-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
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
    colorScheme: 'primary',
    activeStep: 0,
    showNumbers: true,
    showDescriptions: true,
    showControls: false,
    progressDot: false,
    flow: 'linear',
    labelPosition: 'right',
    animated: true,
    showProgress: false,
    compact: false,
    scrollable: true,
    clickable: true,
    stepsPerPage: 0,
    maxVisibleSteps: 5,
    iconLibrary: 'default',
    keyboardNavigation: true,
    responsive: true,
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
    { label: 'Navigation', value: 'navigation' },
    { label: 'Panel', value: 'panel' },
    { label: 'Inline', value: 'inline' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
    { label: 'Minimal', value: 'minimal' },
    { label: 'Snack', value: 'snack' },
  ];

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
  ];

  labelPositionOptions = [
    { label: 'Right', value: 'right' },
    { label: 'Left', value: 'left' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  flowOptions = [
    { label: 'Linear', value: 'linear' },
    { label: 'Non-Linear', value: 'non-linear' },
  ];

  iconLibraryOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Schneider', value: 'se' },
    { label: 'FontAwesome', value: 'fontawesome' },
    { label: 'Lucide', value: 'lucide' },
    { label: 'Bootstrap', value: 'bootstrap' },
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
    let code = '<app-stepper-container\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  color-scheme="${this.pgConfig.colorScheme}"\n`;
    code += `  [active-step]="${this.pgConfig.activeStep}"\n`;
    code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    code += `  flow="${this.pgConfig.flow}"\n`;

    if (!this.pgConfig.showNumbers) code += `  [show-numbers]="false"\n`;
    if (this.pgConfig.showDescriptions) code += `  show-descriptions\n`;
    if (this.pgConfig.showControls) code += `  show-controls\n`;
    if (this.pgConfig.progressDot) code += `  progress-dot\n`;
    if (!this.pgConfig.animated) code += `  [animated]="false"\n`;
    if (this.pgConfig.showProgress) code += `  show-progress\n`;
    if (this.pgConfig.compact) code += `  compact\n`;
    if (!this.pgConfig.scrollable) code += `  [scrollable]="false"\n`;
    if (this.pgConfig.clickable) code += `  clickable\n`;

    if (this.pgConfig.stepsPerPage > 0)
      code += `  [steps-per-page]="${this.pgConfig.stepsPerPage}"\n`;
    if (this.pgConfig.maxVisibleSteps !== 5)
      code += `  [max-visible-steps]="${this.pgConfig.maxVisibleSteps}"\n`;

    code += `  icon-library="${this.pgConfig.iconLibrary}"\n`;
    code += `  [steps]="steps"\n`;
    code += '></app-stepper-container>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onStepChange(event: any) {
    this.pgConfig.activeStep = event.detail.index;
    this.logEvent(`Step changed to: ${this.steps[event.detail.index].label}`);
    this.updateConfig();
  }

  onEvent(event: any, name: string) {
    this.logEvent(`Event: ${name} - Detail: ${JSON.stringify(event.detail || {})}`);
  }

  getDefaultConfig() {
    return {
      orientation: 'horizontal',
      size: 'md',
      variant: 'default',
      colorScheme: 'primary',
      activeStep: 0,
      showNumbers: true,
      showDescriptions: true,
      showControls: false,
      progressDot: false,
      flow: 'linear',
      labelPosition: 'right',
      animated: true,
      showProgress: false,
      compact: false,
      scrollable: true,
      clickable: true,
      stepsPerPage: 0,
      maxVisibleSteps: 5,
      iconLibrary: 'default',
      keyboardNavigation: true,
      responsive: true,
    };
  }
}
