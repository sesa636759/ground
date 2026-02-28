import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-smart-stepper-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './smart-stepper-playground.component.html',

  styleUrl: './smart-stepper-playground.component.scss',
})
export class SmartStepperPlaygroundComponent {
  pgConfig = {
    orientation: 'horizontal',
    theme: 'default',
    showIcons: true,
    allowBranching: false,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  themeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Compact', value: 'compact' },
  ];

  currentStep = '1';
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-smart-stepper\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  theme="${this.pgConfig.theme}"\n`;
    code += '>\n';
    code += '  <ui-smart-step label="Step 1" value="1"> Content </ui-smart-step>\n';
    code += '  <ui-smart-step label="Step 2" value="2"> Content </ui-smart-step>\n';
    code += '</ui-smart-stepper>';

    this.generatedCode.set(code);
  }

  onStepChange(event: any) {
    this.currentStep = event.detail.value;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      theme: 'default',
      showIcons: true,
      allowBranching: false,
    };
    this.updateConfig();
  }
}
