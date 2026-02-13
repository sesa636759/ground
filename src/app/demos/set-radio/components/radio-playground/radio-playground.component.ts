import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-radio-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-playground.component.html',
  styleUrl: './radio-playground.component.scss',
})
export class RadioPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    layout: 'vertical',
    columns: 2,
    size: 'medium',
    color: 'primary',
    labelPosition: 'right',
    label: 'Select your preference',
    helperText: 'Choose one option',
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    enableAnimation: true,
    rippleEffect: true,
    variant: 'default',
    buttonGroup: false,
    skeleton: false,
    allowEmpty: false,
    value: 'option1',
  };

  radioOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  eventMessage = signal('Select an option...');
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-radio-group\n`;
    code += `  name="demo-group"\n`;
    if (this.pgConfig.label) code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.layout !== 'vertical') code += `  layout="${this.pgConfig.layout}"\n`;
    if (this.pgConfig.layout === 'grid') code += `  columns="${this.pgConfig.columns}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.color !== 'primary') code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.labelPosition !== 'right')
      code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.required) code += `  required\n`;
    if (this.pgConfig.invalid) {
      code += `  invalid\n`;
      code += `  error-message="Please select an option"\n`;
    }
    if (!this.pgConfig.enableAnimation) code += `  enable-animation="false"\n`;
    if (!this.pgConfig.rippleEffect) code += `  ripple-effect="false"\n`;
    if (this.pgConfig.buttonGroup) code += `  button-group="true"\n`;
    if (this.pgConfig.skeleton) code += `  skeleton="true"\n`;
    if (this.pgConfig.allowEmpty) code += `  allow-empty="true"\n`;
    code += `>\n`;
    code += `</app-radio-group>`;
    this.generatedCode.set(code);
  }

  onRadioGroupChange(event: any) {
    this.eventMessage.set(
      `Selection changed to: "${event.detail.value}" at ${new Date().toLocaleTimeString()}`,
    );
    this.pgConfig.value = event.detail.value;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  jsonOptions = (opts: any) => JSON.stringify(opts);
}
