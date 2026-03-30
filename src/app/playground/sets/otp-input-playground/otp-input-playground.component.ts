import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-otp-input-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './otp-input-playground.component.html',
  styleUrl: './otp-input-playground.component.scss',
})
export class DmOtpInputPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance & Styles', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'zap', iconLibrary: 'lucide' },
  ];

  typeOptions = [
    { label: 'Number', value: 'number' },
    { label: 'Numeric', value: 'numeric' },
    { label: 'Text', value: 'text' },
    { label: 'Password', value: 'password' },
    { label: 'Alphanumeric', value: 'alphanumeric' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
    { label: 'Info', value: 'info' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Underlined', value: 'underlined' },
    { label: 'Flushed', value: 'flushed' },
    { label: 'Separated', value: 'separated' },
  ];

  // Playground State
  pgConfig = this.getDefaultConfig();

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      length: 6,
      value: '',
      type: 'number',
      size: 'medium',
      color: 'primary',
      variant: 'default',
      groupSize: 0,
      secure: false,
      skeleton: false,
      invalid: false,
      disabled: false,
      readonly: false,
      required: false,
      autoFocus: true,
      autoSubmit: false,
      label: 'Verification Code',
      helperText: 'We sent a code to your phone',
      errorText: 'Verification failed. Please try again.',
      placeholder: '',
    };
  }

  updateConfig() {
    let code = `<ui-otp-input\n`;
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  length="${this.pgConfig.length}"\n`;

    if (this.pgConfig.type !== 'number') code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.color !== 'primary') code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.groupSize > 0) code += `  group-size="${this.pgConfig.groupSize}"\n`;
    if (this.pgConfig.placeholder) code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    if (this.pgConfig.value) code += `  value="${this.pgConfig.value}"\n`;

    // Boolean attributes
    if (this.pgConfig.secure) code += `  secure\n`;
    if (this.pgConfig.skeleton) code += `  skeleton\n`;
    if (this.pgConfig.invalid) code += `  invalid\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.required) code += `  required\n`;
    if (!this.pgConfig.autoFocus) code += `  [auto-focus]="false"\n`;
    if (this.pgConfig.autoSubmit) code += `  auto-submit\n`;

    // Texts
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.invalid && this.pgConfig.errorText)
      code += `  error-text="${this.pgConfig.errorText}"\n`;

    code += `></ui-otp-input>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onOtpChange(event: any) {
    this.logEvent(`Typing: ${event.detail.value} (Complete: ${event.detail.complete})`);
  }

  onOtpComplete(event: any) {
    this.logEvent(`Completed: ${event.detail.value}`);
  }
}
