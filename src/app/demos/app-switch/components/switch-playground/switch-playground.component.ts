import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-switch-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,

    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './switch-playground.component.html',

  styleUrl: './switch-playground.component.scss',
})
export class SwitchPlaygroundComponent implements OnInit {
  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

  pgConfig = {
    label: 'Enable Notifications',
    checked: false,
    disabled: false,
    loading: false,
    size: 'md',
    variant: 'primary',
    shape: 'default',
    labelPosition: 'right',
    iconOn: '🔔',
    iconOff: '🔕',
    showDefaultIcons: false,
  };

  variantOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
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

  generatedCodeSignal = signal('');
  eventLog: { time: string; msg: string }[] = [];

  constructor() {}

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-switch\n';
    code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.checked) code += `  checked\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.labelPosition !== 'right')
      code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    if (this.pgConfig.iconOn) code += `  icon-on="${this.pgConfig.iconOn}"\n`;
    if (this.pgConfig.iconOff) code += `  icon-off="${this.pgConfig.iconOff}"\n`;
    if (this.pgConfig.showDefaultIcons) code += `  show-default-icons\n`;
    code += '></ui-switch>';

    this.generatedCodeSignal.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Enable Notifications',
      checked: false,
      disabled: false,
      loading: false,
      size: 'md',
      variant: 'primary',
      shape: 'default',
      labelPosition: 'right',
      iconOn: '🔔',
      iconOff: '🔕',
      showDefaultIcons: false,
    };
    this.updateConfig();
    this.eventLog = [];
  }

  onSwitchChange(event: any) {
    const isChecked = event.detail.checked;
    this.pgConfig.checked = isChecked;
    this.updateConfig();

    const time = new Date().toLocaleTimeString();
    this.eventLog.unshift({ time, msg: `Switch value: ${isChecked}` });
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}
