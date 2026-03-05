import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'ui-checkbox-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './checkbox-playground.component.html',
  styleUrl: './checkbox-playground.component.scss',
})
export class CheckboxPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Group Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '✨' },
  ]);

  // Playground State
  pgConfig = this.getDefaultConfig();

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      size: 'medium',
      color: 'primary',
      variant: 'default',
      labelPosition: 'right',
      label: 'Accept terms and conditions',
      helperText: 'You must agree to continue',
      checked: false,
      indeterminate: false,
      disabled: false,
      readonly: false,
      required: true,
      invalid: false,
      errorMessage: 'This field has an error',
      enableAnimation: true,
      rippleEffect: true,
      skeleton: false,
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
