import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-split-button-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './split-button-playground.component.html',
  styleUrl: './split-button-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SplitButtonPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  variantOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Outline', value: 'outline' },
    { label: 'Ghost', value: 'ghost' },
  ];

  menuItems = [
    { label: 'Save and Exit', icon: '??' },
    { label: 'Save as Draft', icon: '??' },
    { separator: true },
    { label: 'Discard', icon: '???' },
  ];

  constructor() {
    super();
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      label: 'Save Changes',
      icon: '??',
      variant: 'primary',
      size: 'md',
      disabled: false,
      loading: false,
    };
  }

  updateConfig() {
    let code = '<ui-split-button\n';
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.disabled) code += `  disabled="true"\n`;
    if (this.pgConfig.loading) code += `  loading="true"\n`;
    code += `  [model]="menuItems"\n`;
    code += '></ui-split-button>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onPrimaryClick() {
    this.logEvent('Primary button clicked: ' + this.pgConfig.label);
  }

  onMenuClick(event: any) {
    this.logEvent('Menu item clicked: ' + event.detail?.label);
  }
}
