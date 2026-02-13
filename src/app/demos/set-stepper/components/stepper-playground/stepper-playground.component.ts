import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-stepper-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stepper-playground.component.html',
  styleUrl: './stepper-playground.component.scss',
})
export class StepperPlaygroundComponent implements OnInit {
  pgConfig = {
    mode: 'horizontal',
    activeStep: 1,
    variant: 'default',
    colorScheme: 'primary',
    labelPosition: 'bottom',
    descriptionPosition: 'right',
    theme: 'light',
    showContentArea: true,
    showNavigation: true,
    animated: true,
    clickable: true,
    showProgress: false,
    compact: false,
    iconLineWidth: '',
    iconLineHeight: '',
  };

  stepsData = [
    { label: 'Setup', description: 'Initial configuration', status: 'success' },
    { label: 'Review', description: 'Check details', status: 'success' },
    { label: 'Process', description: 'Currently processing', status: 'info' },
    { label: 'Verify', description: 'Verification step', status: 'waiting' },
    { label: 'Complete', description: 'Final step', status: 'waiting' },
  ];

  stepsJson = JSON.stringify(this.stepsData);
  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-stepper-container\n`;
    code += `  mode="${this.pgConfig.mode}"\n`;
    code += `  active-step="${this.pgConfig.activeStep}"\n`;

    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.colorScheme !== 'primary')
      code += `  color-scheme="${this.pgConfig.colorScheme}"\n`;

    if (this.pgConfig.mode === 'horizontal') {
      if (this.pgConfig.labelPosition !== 'bottom')
        code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    } else {
      if (this.pgConfig.descriptionPosition !== 'right')
        code += `  description-position="${this.pgConfig.descriptionPosition}"\n`;
    }

    if (this.pgConfig.theme !== 'light') code += `  theme="${this.pgConfig.theme}"\n`;
    if (this.pgConfig.showContentArea) code += `  show-content-area="true"\n`;
    if (this.pgConfig.showNavigation) code += `  show-navigation="true"\n`;
    if (this.pgConfig.animated) code += `  animated="true"\n`;
    if (this.pgConfig.clickable) code += `  clickable="true"\n`;
    if (this.pgConfig.showProgress) code += `  show-progress="true"\n`;
    if (this.pgConfig.compact) code += `  compact="true"\n`;

    if (this.pgConfig.iconLineWidth) code += `  icon-line-width="${this.pgConfig.iconLineWidth}"\n`;
    if (this.pgConfig.iconLineHeight)
      code += `  icon-line-height="${this.pgConfig.iconLineHeight}"\n`;

    code += `  steps='${this.stepsJson}'\n`;
    code += `>\n`;

    if (this.pgConfig.showContentArea) {
      this.stepsData.forEach((step, index) => {
        code += `  <div slot="step-${index}" style="padding: 20px;">\n`;
        code += `    <h3>${step.label}</h3>\n`;
        code += `    <p>${step.description}</p>\n`;
        code += `  </div>\n`;
      });
    }

    code += `</app-stepper-container>`;

    this.generatedCode.set(code);
  }

  onStepChange(event: any) {
    this.logEvent(`Step changed to: ${event.detail + 1}`);
    this.pgConfig.activeStep = event.detail; // Sync with UI
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
