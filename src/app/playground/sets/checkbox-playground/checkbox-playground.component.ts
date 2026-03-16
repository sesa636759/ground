import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-checkbox-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './checkbox-playground.component.html',
  styleUrl: './checkbox-playground.component.scss',
})
export class DmCheckboxPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = [
    { id: 'global', title: 'Global Settings', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visual', title: 'Visual Styles', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior & States', icon: 'activity', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced & Icons', icon: 'zap', iconLibrary: 'lucide' },
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

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Square', value: 'square' },
    { label: 'Button', value: 'button' },
    { label: 'Chip', value: 'chip' },
    { label: 'Filled', value: 'filled' },
    { label: 'Tick', value: 'tick' },
    { label: 'Round Color', value: 'round-color' },
  ];

  labelPositionOptions = [
    { label: 'Right', value: 'right' },
    { label: 'Left', value: 'left' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  tooltipPositionOptions = [
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  // Playground State
  pgConfig = this.getDefaultConfig();

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      label: 'Accept terms and conditions',
      helperText: 'You must agree to continue',
      errorMessage: 'This field has an error',
      value: 'terms',
      name: 'terms-checkbox',
      checked: false,
      indeterminate: false,
      disabled: false,
      readonly: false,
      required: true,
      invalid: false,
      size: 'medium',
      color: 'primary',
      variant: 'default',
      skeleton: false,
      labelPosition: 'right',
      showCheckIcon: true,
      customCheckIcon: '',
      customIndeterminateIcon: '',
      badge: '',
      tooltip: 'Information tooltip',
      tooltipPosition: 'top',
      enableAnimation: true,
      rippleEffect: true,
      labelClickable: true,
      rtl: false,
      customClass: '',
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.demoElement, 'ui-checkbox');
  }

  onCheckboxChange(event: any) {
    const { checked, indeterminate } = event.detail;
    this.logEvent(`Changed: checked=${checked}, indeterminate=${indeterminate}`);
    this.pgConfig.checked = checked;
    this.pgConfig.indeterminate = indeterminate;
    this.updateConfig();
  }

  onCheckboxFocus() {
    this.logEvent(`Focused`);
  }

  onCheckboxBlur() {
    this.logEvent(`Blurred`);
  }
}
