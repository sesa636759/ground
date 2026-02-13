import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-input-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './input-playground.component.html',
  styleUrl: './input-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class InputPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username',
    value: '',
    variant: 'outlined',
    size: 'medium',
    validationState: 'none',
    fullWidth: true,
    disabled: false,
    readonly: false,
    required: false,
    showClear: false,
    showPasswordToggle: false,
    showSteppers: false,
    autoSelect: false,
    autoTrim: false,
    multiline: false,
    autoResize: false,
    maxRows: 3,
    rows: 3,
    skeleton: false,
    prefixText: '',
    suffixText: '',
    helperText: 'Choose a unique username',
    errorText: 'This field is required',
    successText: 'Looking good!',
    warningText: 'Strong passwords are better',
    maxLength: 0,
    showCharCount: false,
    floatingLabel: false,
    loading: false,
    debounce: 0,
  };

  eventMessage = signal('Interact with the input...');
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-input\n`;
    if (this.pgConfig.type !== 'text') code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.label) code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.placeholder) code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    if (this.pgConfig.variant !== 'outlined') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.validationState !== 'none')
      code += `  validation-state="${this.pgConfig.validationState}"\n`;
    if (this.pgConfig.fullWidth) code += `  full-width\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.required) code += `  required\n`;
    if (this.pgConfig.showClear) code += `  show-clear\n`;
    if (this.pgConfig.showPasswordToggle) code += `  show-password-toggle\n`;
    if (this.pgConfig.showSteppers) code += `  show-steppers\n`;
    if (this.pgConfig.autoSelect) code += `  auto-select\n`;
    if (this.pgConfig.autoTrim) code += `  auto-trim\n`;
    if (this.pgConfig.multiline) code += `  multiline\n`;
    if (this.pgConfig.autoResize) code += `  auto-resize\n`;
    if (this.pgConfig.maxRows !== 3 && this.pgConfig.multiline)
      code += `  max-rows="${this.pgConfig.maxRows}"\n`;
    if (this.pgConfig.rows !== 3 && this.pgConfig.multiline)
      code += `  rows="${this.pgConfig.rows}"\n`;
    if (this.pgConfig.skeleton) code += `  skeleton\n`;
    if (this.pgConfig.prefixText) code += `  prefix-text="${this.pgConfig.prefixText}"\n`;
    if (this.pgConfig.suffixText) code += `  suffix-text="${this.pgConfig.suffixText}"\n`;
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.maxLength > 0) code += `  max-length="${this.pgConfig.maxLength}"\n`;
    if (this.pgConfig.showCharCount) code += `  show-char-count\n`;
    if (this.pgConfig.floatingLabel) code += `  floating-label\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.debounce > 0) code += `  debounce="${this.pgConfig.debounce}"\n`;

    if (this.pgConfig.validationState === 'error')
      code += `  error-text="${this.pgConfig.errorText}"\n`;
    if (this.pgConfig.validationState === 'success')
      code += `  success-text="${this.pgConfig.successText}"\n`;
    if (this.pgConfig.validationState === 'warning')
      code += `  warning-text="${this.pgConfig.warningText}"\n`;

    code += `></app-input>`;
    this.generatedCode.set(code);
  }

  onInputChange(event: any) {
    this.eventMessage.set(`Value changed to: "${event.target.value}"`);
  }

  onInputFocus() {
    this.eventMessage.set(`Input focused`);
  }

  onInputBlur() {
    this.eventMessage.set(`Input blurred`);
  }

  onInputClear() {
    this.eventMessage.set(`Input cleared`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
