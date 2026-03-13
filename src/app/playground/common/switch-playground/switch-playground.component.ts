import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-switch-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './switch-playground.component.html',
  styleUrl: './switch-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmSwitchPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'shield', iconLibrary: 'lucide' },
    { id: 'visual', title: 'Visual & Feedback', icon: 'eye', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced & Forms', icon: 'command', iconLibrary: 'lucide' },
  ];

  sizeOptions = [
    { label: 'XXXS', value: 'xxxs' },
    { label: 'XXS', value: 'xxs' },
    { label: 'XS', value: 'xs' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
    { label: 'XL', value: 'xl' },
    { label: 'XXL', value: 'xxl' },
    { label: 'XXXL', value: 'xxxl' },
  ];

  shapeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Pill', value: 'pill' },
    { label: 'Square', value: 'square' },
  ];

  labelPositionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  variantOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  iconLibraryOptions = [
    { label: 'Ionicons', value: 'ionicons' },
    { label: 'Lucide', value: 'lucide' },
    { label: 'Material', value: 'material' },
    { label: 'FontAwesome', value: 'fontawesome' },
    { label: 'Default', value: 'default' },
  ];

  constructor() {
    super();
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      label: 'Enable Notifications',
      checked: false,
      disabled: false,
      loading: false,
      readonly: false,
      invalid: false,
      required: false,
      size: 'medium',
      variant: 'primary',
      shape: 'default',
      labelPosition: 'right',
      iconOn: '',
      iconOff: '',
      iconLibrary: 'lucide',
      showIcons: false,
      showDefaultIcons: false,
      thumbShape: 'circle',
      orientation: 'horizontal',
      helperText: '',
      errorMessage: 'This field is required',
      checkedText: 'ON',
      uncheckedText: 'OFF',
      showTrackText: false,
      indeterminate: false,
      gradient: false,
      gradientColors: '["#3b82f6", "#8b5cf6"]',
      elevation: 0,
      enableAnimation: true,
      ariaLabel: 'Switch component',
      tooltipText: 'Toggle this setting',
      showTooltip: false,
      showSuccessFeedback: false,
      requireConfirmation: false,
      confirmationMessage: 'Are you sure you want to change this?',
      autoSubmit: false,
      formId: '',
      value: 'notifications',
      switchTabIndex: 0,
    };
  }

  thumbShapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
  ];

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  updateConfig() {
    let code = `<ui-switch\n`;
    code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.checked) code += `  checked\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;

    if (this.pgConfig.thumbShape !== 'circle') code += `  thumb-shape="${this.pgConfig.thumbShape}"\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.invalid) code += `  invalid\n`;
    if (this.pgConfig.indeterminate) code += `  indeterminate\n`;
    if (this.pgConfig.gradient) {
      code += `  gradient\n`;
      if (this.pgConfig.gradientColors) code += `  gradient-colors='${this.pgConfig.gradientColors}'\n`;
    }
    if (this.pgConfig.elevation > 0) code += `  elevation="${this.pgConfig.elevation}"\n`;
    if (this.pgConfig.required) code += `  required\n`;
    if (this.pgConfig.labelPosition !== 'right')
      code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    if (this.pgConfig.orientation !== 'horizontal')
      code += `  orientation="${this.pgConfig.orientation}"\n`;

    if (this.pgConfig.showIcons) {
      code += `  show-icons\n`;
      if (this.pgConfig.iconOn) code += `  icon-on="${this.pgConfig.iconOn}"\n`;
      if (this.pgConfig.iconOff) code += `  icon-off="${this.pgConfig.iconOff}"\n`;
      if (this.pgConfig.iconLibrary !== 'ionicons')
        code += `  icon-library="${this.pgConfig.iconLibrary}"\n`;
    }

    if (this.pgConfig.showDefaultIcons) code += `  show-default-icons\n`;

    if (this.pgConfig.showTrackText) {
      code += `  show-track-text\n`;
      if (this.pgConfig.checkedText) code += `  checked-text="${this.pgConfig.checkedText}"\n`;
      if (this.pgConfig.uncheckedText)
        code += `  unchecked-text="${this.pgConfig.uncheckedText}"\n`;
    }

    if (this.pgConfig.showTooltip) {
      code += `  show-tooltip\n`;
      if (this.pgConfig.tooltipText) code += `  tooltip-text="${this.pgConfig.tooltipText}"\n`;
    }

    if (this.pgConfig.showSuccessFeedback) code += `  show-success-feedback\n`;
    if (this.pgConfig.requireConfirmation) {
      code += `  require-confirmation\n`;
      code += `  confirmation-message="${this.pgConfig.confirmationMessage}"\n`;
    }

    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.invalid && this.pgConfig.errorMessage)
      code += `  error-message="${this.pgConfig.errorMessage}"\n`;

    if (this.pgConfig.autoSubmit) code += `  auto-submit\n`;
    if (this.pgConfig.formId) code += `  form-id="${this.pgConfig.formId}"\n`;
    if (this.pgConfig.value) code += `  value="${this.pgConfig.value}"\n`;
    if (this.pgConfig.ariaLabel) code += `  aria-label="${this.pgConfig.ariaLabel}"\n`;

    code += '></ui-switch>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onSwitchChange(event: any) {
    const isChecked = event.detail.checked;
    this.pgConfig.checked = isChecked;
    this.logEvent(`Switch changed to: ${isChecked}`);
    this.updateConfig();
  }
}
