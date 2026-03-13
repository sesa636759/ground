import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';

import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-pattern-input-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pattern-input-playground.component.html',
  styleUrl: './pattern-input-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmPatternInputPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'logic', title: 'Pattern & Logic', icon: 'binary', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'labels', title: 'Labels & Messages', icon: 'type', iconLibrary: 'lucide' },
  ];

  patternOptions = [
    { label: 'None', value: '' },
    { label: 'Phone: (###) ###-####', value: '(###) ###-####' },
    { label: 'Date: ##/##/####', value: '##/##/####' },
    { label: 'Card: ####-####-####-####', value: '####-####-####-####' },
    { label: 'SSN: ###-##-####', value: '###-##-####' },
    { label: 'MAC: XX:XX:XX:XX:XX:XX', value: 'XX:XX:XX:XX:XX:XX' },
    { label: 'Time: ##:##:##', value: '##:##:##' },
    { label: 'Key: ****-****-****-****', value: '****-****-****-****' },
    { label: 'Postal: A#A #A#', value: 'A#A #A#' },
    { label: 'IBAN: AA## #### #### ####', value: 'AA## #### #### ####' },
    { label: 'SKU: AAA-####-AA', value: 'AAA-####-AA' },
    { label: 'IPv4: ###.###.###.###', value: '###.###.###.###' },
    { label: 'Custom: AAA-999', value: 'AAA-999' },
  ];

  inputTypeOptions = [
    { label: 'Text', value: 'text' },
    { label: 'Numeric', value: 'numeric' },
    { label: 'Alpha', value: 'alpha' },
    { label: 'Alphanumeric', value: 'alphanumeric' },
    { label: 'Custom', value: 'custom' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      pattern: '(###) ###-####',
      placeholder: 'Enter phone number',
      label: 'Phone Number',
      size: 'md',
      maskChar: '#',
      maxLength: 14,
      helperText: 'Format: (123) 456-7890',
      errorMessage: 'Invalid entry detected',
      successMessage: 'Validated successfully',
      disabled: false,
      required: false,
      showValidation: true,
      autoFormat: true,
      showCounter: false,
      inputType: 'text',
      allowedChars: '',
      validationRegex: '',
      value: ''
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.demoElement, 'ui-pattern-input');
  }

  onPatternInputChange(event: any) {
    this.pgConfig.value = event.detail.formatted;
    this.logEvent(`Changed: ${JSON.stringify(event.detail)}`);
  }
}
