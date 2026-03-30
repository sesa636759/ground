import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-input-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './input-playground.component.html',
  styleUrl: './input-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmInputPlaygroundComponent extends BasePlaygroundComponent {
  pgAccordionItems = [
    { id: 'global', title: 'Global & Identity', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Aesthetics & Style', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'decorators', title: 'Prefix, Suffix & Slots', icon: 'tags', iconLibrary: 'lucide' },
    {
      id: 'behavior',
      title: 'Behavior & Interaction',
      icon: 'mouse-pointer-2',
      iconLibrary: 'lucide',
    },
    {
      id: 'validation',
      title: 'Validation & Constraints',
      icon: 'check-circle',
      iconLibrary: 'lucide',
    },
    {
      id: 'special',
      title: 'Special Types (File/Color/...)',
      icon: 'sparkles',
      iconLibrary: 'lucide',
    },
  ];

  typeOptions = [
    { label: 'Text', value: 'text' },
    { label: 'Password', value: 'password' },
    { label: 'Email', value: 'email' },
    { label: 'Number', value: 'number' },
    { label: 'Search', value: 'search' },
    { label: 'Tel', value: 'tel' },
    { label: 'Url', value: 'url' },
    { label: 'Time', value: 'time' },
    { label: 'Date', value: 'date' },
    { label: 'DateTime Local', value: 'datetime-local' },
    { label: 'Month', value: 'month' },
    { label: 'Week', value: 'week' },
    { label: 'Range', value: 'range' },
    { label: 'Color', value: 'color' },
    { label: 'File', value: 'file' },
    { label: 'OTP Code', value: 'otp' },
    { label: 'PIN Code', value: 'pin' },
    { label: 'Currency', value: 'currency' },
  ];

  variantOptions = [
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
    { label: 'Underlined', value: 'underlined' },
    { label: 'Soft', value: 'soft' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Glass', value: 'glass' },
    { label: 'Raised', value: 'raised' },
    { label: 'Borderless', value: 'borderless' },
  ];

  sizeOptions = [
    { label: 'XXX Small', value: 'xxxs' },
    { label: 'XX Small', value: 'xxs' },
    { label: 'X Small', value: 'xs' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
    { label: 'X Large', value: 'xl' },
    { label: 'XX Large', value: 'xxl' },
    { label: 'XXX Large', value: 'xxxl' },
  ];

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
    { label: 'Secondary', value: 'secondary' },
  ];

  statusIndicatorOptions = [
    { label: 'None', value: '' },
    { label: 'Online', value: 'online' },
    { label: 'Typing', value: 'typing' },
    { label: 'Offline', value: 'offline' },
    { label: 'Away', value: 'away' },
  ];

  prefixColorOptions = [
    { label: 'None', value: '' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
    { label: 'Secondary', value: 'secondary' },
  ];

  validationOptions = [
    { label: 'None', value: 'none' },
    { label: 'Error', value: 'error' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  maskOptions = [
    { label: 'None', value: 'none' },
    { label: 'Phone', value: 'phone' },
    { label: 'Credit Card', value: 'credit-card' },
    { label: 'Date', value: 'date' },
    { label: 'Currency', value: 'currency' },
    { label: 'SSN', value: 'ssn' },
    { label: 'Zip', value: 'zip' },
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
      maxRows: 0,
      rows: 3,
      skeleton: false,
      prefixText: '',
      suffixText: '',
      prefixIcon: '',
      suffixIcon: '',
      badge: '',
      helperText: 'Choose a unique username',
      errorText: 'This field is required',
      successText: 'Looking good!',
      warningText: 'Strong passwords are better',
      infoText: 'Extra info here.',
      maxLength: 0,
      minLengthIndicator: 0,
      maxLengthIndicator: 0,
      showCounter: false,
      floatingLabel: false,
      loading: false,
      debounce: 0,
      accept: '',
      multiple: false,
      showCopy: false,
      mask: 'none',
      pattern: '',
      name: 'username',
      inputId: 'user_input_1',
      autofocus: false,
      customTabIndex: 0,
      tooltip: 'Enter your account name',
      suggestions: '',
      inputmode: 'text',
      clearIcon: 'x-circle',
      rtl: false,
      enterkeyhint: 'enter',
      passwordIcon: 'eye',
      passwordVisibleIcon: 'eye-off',
      prefixClickable: false,
      suffixClickable: false,
      rippleEffect: true,
      color: 'primary',
      statusIndicator: '',
      voiceEnabled: false,
      gradientBorder: false,
      backdropSheen: false,
      animatedLine: false,
      showProgressCircle: false,
      dirtyTracking: false,
      prefixColor: '',
      suffixColor: '',
      otpLength: 6,
      suggestedValue: '',
    };
  }

  updateConfig() {
    let code = `<ui-input\n`;
    code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.type !== 'text') code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.variant !== 'outlined') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.placeholder) code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    if (this.pgConfig.value) code += `  value="${this.pgConfig.value}"\n`;

    // Boolean Props
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.required) code += `  required\n`;
    if (this.pgConfig.fullWidth) code += `  full-width\n`;
    if (this.pgConfig.floatingLabel) code += `  floating-label\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.skeleton) code += `  skeleton\n`;
    if (this.pgConfig.showClear) code += `  show-clear\n`;
    if (this.pgConfig.showCopy) code += `  show-copy\n`;
    if (this.pgConfig.autoSelect) code += `  auto-select\n`;
    if (this.pgConfig.autoTrim) code += `  auto-trim\n`;
    if (this.pgConfig.rtl) code += `  rtl\n`;
    if (!this.pgConfig.rippleEffect) code += `  [ripple-effect]="false"\n`;

    // Validation
    if (this.pgConfig.validationState !== 'none')
      code += `  validation-state="${this.pgConfig.validationState}"\n`;
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.errorText) code += `  error-text="${this.pgConfig.errorText}"\n`;
    if (this.pgConfig.successText) code += `  success-text="${this.pgConfig.successText}"\n`;

    // Decorators
    if (this.pgConfig.color) code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.prefixText) code += `  prefix-text="${this.pgConfig.prefixText}"\n`;
    if (this.pgConfig.suffixText) code += `  suffix-text="${this.pgConfig.suffixText}"\n`;
    if (this.pgConfig.prefixIcon) code += `  prefix-icon="${this.pgConfig.prefixIcon}"\n`;
    if (this.pgConfig.suffixIcon) code += `  suffix-icon="${this.pgConfig.suffixIcon}"\n`;
    if (this.pgConfig.badge) code += `  badge="${this.pgConfig.badge}"\n`;
    if (this.pgConfig.prefixColor) code += `  prefix-color="${this.pgConfig.prefixColor}"\n`;
    if (this.pgConfig.suffixColor) code += `  suffix-color="${this.pgConfig.suffixColor}"\n`;
    if (this.pgConfig.prefixClickable) code += `  prefix-clickable\n`;
    if (this.pgConfig.suffixClickable) code += `  suffix-clickable\n`;

    // Number & Special
    if (this.pgConfig.type === 'number' && this.pgConfig.showSteppers) code += `  show-steppers\n`;
    if (this.pgConfig.mask !== 'none') code += `  mask="${this.pgConfig.mask}"\n`;
    if (this.pgConfig.maxLength) code += `  max-length="${this.pgConfig.maxLength}"\n`;
    if (this.pgConfig.showCounter) code += `  show-counter\n`;
    if (this.pgConfig.statusIndicator)
      code += `  status-indicator="${this.pgConfig.statusIndicator}"\n`;
    if (this.pgConfig.voiceEnabled) code += `  voice-enabled\n`;
    if (this.pgConfig.gradientBorder) code += `  gradient-border\n`;
    if (this.pgConfig.backdropSheen) code += `  backdrop-sheen\n`;
    if (this.pgConfig.animatedLine) code += `  animated-line\n`;
    if (this.pgConfig.showProgressCircle) code += `  show-progress-circle\n`;
    if (this.pgConfig.dirtyTracking) code += `  dirty-tracking\n`;
    if (this.pgConfig.suggestedValue)
      code += `  suggested-value="${this.pgConfig.suggestedValue}"\n`;
    if ((this.pgConfig.type === 'otp' || this.pgConfig.type === 'pin') && this.pgConfig.otpLength)
      code += `  otp-length="${this.pgConfig.otpLength}"\n`;

    // Multiline
    if (this.pgConfig.multiline) {
      code += `  multiline\n`;
      if (this.pgConfig.autoResize) code += `  auto-resize\n`;
      if (this.pgConfig.rows !== 3) code += `  rows="${this.pgConfig.rows}"\n`;
    }

    code += `></ui-input>`;

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
