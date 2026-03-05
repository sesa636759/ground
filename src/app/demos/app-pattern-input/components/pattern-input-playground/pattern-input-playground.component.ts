import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-pattern-input-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pattern-input-playground.component.html',
  styleUrl: './pattern-input-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PatternInputPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
    { id: 'labels', title: 'Labels & Text', icon: '🏷️' },
  ]);

  patternOptions = [
    { label: 'Phone: (999) 999-9999', value: '(999) 999-9999' },
    { label: 'Date: 99/99/9999', value: '99/99/9999' },
    { label: 'Card: ****-****-****-****', value: '****-****-****-****' },
    { label: 'Custom: AAA-999', value: 'AAA-999' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      pattern: '(999) 999-9999',
      placeholder: 'Enter phone number',
      label: 'Phone Number',
      size: 'md',
      maskChar: '9',
      maxLength: 0,
      helperText: '',
      errorMessage: '',
      disabled: false,
      readonly: false,
      required: false,
      showValidation: true,
      autoFormat: true,
      showCounter: false,
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.demoElement, 'ui-pattern-input');
  }
}
