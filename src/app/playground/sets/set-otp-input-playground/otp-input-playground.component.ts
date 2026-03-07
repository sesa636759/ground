import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ui-otp-input-playground',
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
    { id: 'states', title: 'Behavioral States', icon: 'help-circle', iconLibrary: 'lucide' },
  ];

  pgConfig = {
    length: 6,
    value: '',
    type: 'number', // 'text', 'number', 'password'
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
  };

  getDefaultConfig() {
    return {
      length: 6,
      value: '',
      type: 'number', // 'text', 'number', 'password'
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
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.demoElement, 'ui-otp-input');
  }

  onOtpChange(event: any) {
    this.logEvent(`Typing: ${event.detail.value} (Complete: ${event.detail.complete})`);
  }

  onOtpComplete(event: any) {
    this.logEvent(`Completed: ${event.detail.value}`);
  }
}



