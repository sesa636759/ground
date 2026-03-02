import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-input-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './input-playground.component.html',
  styleUrl: './input-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class InputPlaygroundComponent implements OnInit {
  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

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

  constructor() {}

  ngOnInit() {
    this.updateConfig();
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
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.errorText) code += `  error-text="${this.pgConfig.errorText}"\n`;
    if (this.pgConfig.successText) code += `  success-text="${this.pgConfig.successText}"\n`;
    if (this.pgConfig.warningText) code += `  warning-text="${this.pgConfig.warningText}"\n`;
    if (this.pgConfig.maxLength) code += `  max-length="${this.pgConfig.maxLength}"\n`;
    if (this.pgConfig.showCharCount) code += `  show-char-count="true"\n`;
    if (this.pgConfig.floatingLabel) code += `  floating-label="true"\n`;
    if (this.pgConfig.loading) code += `  show-loading="true"\n`;

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
