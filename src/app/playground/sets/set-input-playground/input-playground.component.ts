import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ui-input-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './input-playground.component.html',
  styleUrl: './input-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmInputPlaygroundComponent extends BasePlaygroundComponent {
  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  // Playground State
  pgConfig = this.getDefaultConfig();

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
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
      prefixIcon: '',
      prefixIconLibrary: 'lucide',
      suffixIcon: '',
      suffixIconLibrary: 'lucide',
      helperText: 'Choose a unique username',
      errorText: 'This field is required',
      successText: 'Looking good!',
      warningText: 'Strong passwords are better',
      infoText: 'Extra info here.',
      maxLength: 0,
      minLengthIndicator: 0,
      maxLengthIndicator: 0,
      showCharCount: false,
      floatingLabel: false,
      loading: false,
      debounce: 0,
      // File & Color extras
      accept: '',
      multiple: false,
      showCopy: false,
      mask: 'none',
      pattern: '',
      name: '',
      inputId: '',
      autofocus: false,
      customTabIndex: 0,
      tooltip: '',
      suggestions: '',
      inputmode: 'none',
      clearIcon: 'x-circle',
      rtl: false,
      enterkeyhint: 'enter',
      passwordIcon: 'eye',
      passwordVisibleIcon: 'eye-off',
      prefixClickable: false,
      suffixClickable: false,
    };
  }

  updateConfig() {
    let code = `<ui-input\n`;
    code += `  type="${this.pgConfig.type}"\n`;
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;

    if (this.pgConfig.placeholder) code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    if (this.pgConfig.value) code += `  value="${this.pgConfig.value}"\n`;
    if (this.pgConfig.validationState !== 'none')
      code += `  validation-state="${this.pgConfig.validationState}"\n`;
    if (!this.pgConfig.fullWidth) code += `  full-width="false"\n`;
    if (this.pgConfig.disabled) code += `  disabled="true"\n`;
    if (this.pgConfig.readonly) code += `  readonly="true"\n`;
    if (this.pgConfig.required) code += `  required="true"\n`;
    if (this.pgConfig.showClear) code += `  show-clear="true"\n`;
    if (this.pgConfig.showPasswordToggle) code += `  show-password-toggle="true"\n`;
    if (this.pgConfig.showSteppers) code += `  show-steppers="true"\n`;
    if (this.pgConfig.autoSelect) code += `  auto-select="true"\n`;
    if (this.pgConfig.autoTrim) code += `  auto-trim="true"\n`;
    if (this.pgConfig.multiline) code += `  multiline="true"\n`;
    if (this.pgConfig.autoResize) code += `  auto-resize="true"\n`;
    if (this.pgConfig.maxRows) code += `  max-rows="${this.pgConfig.maxRows}"\n`;
    if (this.pgConfig.rows) code += `  rows="${this.pgConfig.rows}"\n`;
    if (this.pgConfig.skeleton) code += `  show-skeleton="true"\n`;
    if (this.pgConfig.prefixText) code += `  prefix-text="${this.pgConfig.prefixText}"\n`;
    if (this.pgConfig.suffixText) code += `  suffix-text="${this.pgConfig.suffixText}"\n`;

    // Built-in icon attributes (only work for default lucide library in ui-input)
    if (this.pgConfig.prefixIcon && this.pgConfig.prefixIconLibrary === 'lucide') {
      code += `  prefix-icon="${this.pgConfig.prefixIcon}"\n`;
    }
    if (this.pgConfig.suffixIcon && this.pgConfig.suffixIconLibrary === 'lucide') {
      code += `  suffix-icon="${this.pgConfig.suffixIcon}"\n`;
    }

    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.errorText) code += `  error-text="${this.pgConfig.errorText}"\n`;
    if (this.pgConfig.successText) code += `  success-text="${this.pgConfig.successText}"\n`;
    if (this.pgConfig.warningText) code += `  warning-text="${this.pgConfig.warningText}"\n`;
    if (this.pgConfig.infoText) code += `  info-text="${this.pgConfig.infoText}"\n`;
    if (this.pgConfig.maxLength) code += `  max-length="${this.pgConfig.maxLength}"\n`;
    if (this.pgConfig.minLengthIndicator)
      code += `  min-length-indicator="${this.pgConfig.minLengthIndicator}"\n`;
    if (this.pgConfig.maxLengthIndicator)
      code += `  max-length-indicator="${this.pgConfig.maxLengthIndicator}"\n`;
    if (this.pgConfig.showCharCount) code += `  show-char-count="true"\n`;
    if (this.pgConfig.floatingLabel) code += `  floating-label="true"\n`;
    if (this.pgConfig.loading) code += `  loading="true"\n`;
    if (this.pgConfig.accept) code += `  accept="${this.pgConfig.accept}"\n`;
    if (this.pgConfig.multiple) code += `  multiple="true"\n`;
    if (this.pgConfig.showCopy) code += `  show-copy="true"\n`;
    if (this.pgConfig.mask && this.pgConfig.mask !== 'none')
      code += `  mask="${this.pgConfig.mask}"\n`;
    if (this.pgConfig.pattern) code += `  pattern="${this.pgConfig.pattern}"\n`;
    if (this.pgConfig.name) code += `  name="${this.pgConfig.name}"\n`;
    if (this.pgConfig.inputId) code += `  input-id="${this.pgConfig.inputId}"\n`;
    if (this.pgConfig.autofocus) code += `  autofocus="true"\n`;
    if (this.pgConfig.customTabIndex)
      code += `  custom-tab-index="${this.pgConfig.customTabIndex}"\n`;
    if (this.pgConfig.tooltip) code += `  tooltip="${this.pgConfig.tooltip}"\n`;
    if (this.pgConfig.inputmode && this.pgConfig.inputmode !== 'none')
      code += `  inputmode="${this.pgConfig.inputmode}"\n`;
    if (this.pgConfig.clearIcon && this.pgConfig.clearIcon !== 'x-circle')
      code += `  clear-icon="${this.pgConfig.clearIcon}"\n`;
    if (this.pgConfig.debounce) code += `  debounce="${this.pgConfig.debounce}"\n`;
    if (this.pgConfig.rtl) code += `  rtl="true"\n`;
    if (this.pgConfig.enterkeyhint && this.pgConfig.enterkeyhint !== 'enter')
      code += `  enterkeyhint="${this.pgConfig.enterkeyhint}"\n`;
    if (this.pgConfig.passwordIcon && this.pgConfig.passwordIcon !== 'eye')
      code += `  password-icon="${this.pgConfig.passwordIcon}"\n`;
    if (this.pgConfig.passwordVisibleIcon && this.pgConfig.passwordVisibleIcon !== 'eye-off')
      code += `  password-visible-icon="${this.pgConfig.passwordVisibleIcon}"\n`;
    if (this.pgConfig.prefixClickable) code += `  prefix-clickable="true"\n`;
    if (this.pgConfig.suffixClickable) code += `  suffix-clickable="true"\n`;

    // Convert suggestion string to proper binding
    if (this.pgConfig.suggestions) {
      const parts = this.pgConfig.suggestions.split(',').map((s) => `'${s.trim()}'`);
      code += `  [suggestions]="[${parts.join(', ')}]"\n`;
    }

    // If using custom icon libraries, we demonstrate passing icons via slots
    let slotsCode = '';

    if (this.pgConfig.prefixIcon && this.pgConfig.prefixIconLibrary !== 'lucide') {
      slotsCode += `\n  <ui-icon slot="prefix" library="${this.pgConfig.prefixIconLibrary}" name="${this.pgConfig.prefixIcon}"></ui-icon>`;
    }

    if (this.pgConfig.suffixIcon && this.pgConfig.suffixIconLibrary !== 'lucide') {
      slotsCode += `\n  <ui-icon slot="suffix" library="${this.pgConfig.suffixIconLibrary}" name="${this.pgConfig.suffixIcon}"></ui-icon>`;
    }

    if (slotsCode) {
      code += `>${slotsCode}\n</ui-input>`;
    } else {
      code += `></ui-input>`;
    }

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onInputChange(event: any) {
    this.logEvent(`Value changed to: "${event.target.value}"`);
  }

  onInputFocus() {
    this.logEvent(`Input focused`);
  }

  onInputBlur() {
    this.logEvent(`Input blurred`);
  }

  onInputClear() {
    this.logEvent(`Input cleared`);
  }
}



