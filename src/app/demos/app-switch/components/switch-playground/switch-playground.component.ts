import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-switch-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './switch-playground.component.html',
  styleUrl: './switch-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SwitchPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  sizeOptions = [
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra Large', value: 'xl' },
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
      size: 'md',
      variant: 'primary',
      shape: 'default',
      labelPosition: 'right',
      iconOn: '✔️',
      iconOff: '❌',
      showDefaultIcons: false,
      thumbShape: 'circle',
      orientation: 'horizontal',
      helperText: '',
      errorMessage: '',
      checkedText: '',
      uncheckedText: '',
      showTrackText: false,
      indeterminate: false,
      gradient: false,
      required: false,
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
    let code = '<ui-switch\n';
    code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.checked) code += `  checked\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;
    code += `  thumb-shape="${this.pgConfig.thumbShape}"\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.indeterminate) code += `  indeterminate\n`;
    if (this.pgConfig.gradient) code += `  gradient\n`;
    if (this.pgConfig.required) code += `  required\n`;
    if (this.pgConfig.labelPosition !== 'right')
      code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    if (this.pgConfig.orientation !== 'horizontal')
      code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.iconOn) code += `  icon-on="${this.pgConfig.iconOn}"\n`;
    if (this.pgConfig.iconOff) code += `  icon-off="${this.pgConfig.iconOff}"\n`;
    if (this.pgConfig.showDefaultIcons) code += `  show-default-icons\n`;
    if (this.pgConfig.showTrackText) {
      code += `  show-track-text\n`;
      if (this.pgConfig.checkedText) code += `  checked-text="${this.pgConfig.checkedText}"\n`;
      if (this.pgConfig.uncheckedText)
        code += `  unchecked-text="${this.pgConfig.uncheckedText}"\n`;
    }
    if (this.pgConfig.helperText && !this.pgConfig.errorMessage)
      code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.errorMessage) code += `  error-message="${this.pgConfig.errorMessage}"\n`;
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
