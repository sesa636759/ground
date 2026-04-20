import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';

import type { GroundUiInputChangeEvent, GroundUiInputProps } from '../types';
import { GroundUiDirectiveBase } from './ground-ui-directive-base';

const UI_INPUT_PROPS = [
  'accept',
  'autoResize',
  'autoSelect',
  'autoTrim',
  'autocomplete',
  'autofocus',
  'badge',
  'clearIcon',
  'customClass',
  'customTabIndex',
  'debounce',
  'disabled',
  'enterkeyhint',
  'errorText',
  'floatingLabel',
  'fullWidth',
  'helperText',
  'infoText',
  'inputId',
  'inputmode',
  'label',
  'loading',
  'mask',
  'max',
  'maxLength',
  'maxRows',
  'min',
  'multiline',
  'name',
  'pattern',
  'placeholder',
  'prefixIcon',
  'prefixText',
  'readonly',
  'required',
  'rows',
  'rippleEffect',
  'showClear',
  'showCopy',
  'showCounter',
  'showPasswordToggle',
  'size',
  'step',
  'successText',
  'suffixIcon',
  'suffixText',
  'tooltip',
  'type',
  'validationState',
  'value',
  'warningText',
] as const;

@Directive({ selector: 'ui-input', standalone: true })
export class UiInput extends GroundUiDirectiveBase<HTMLElement> {
  protected override readonly propNames = UI_INPUT_PROPS;

  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
  }

  @Input() accept?: GroundUiInputProps['accept'];
  @Input({ transform: booleanAttribute }) autoResize: GroundUiInputProps['autoResize'] = false;
  @Input({ transform: booleanAttribute }) autoSelect: GroundUiInputProps['autoSelect'] = false;
  @Input({ transform: booleanAttribute }) autoTrim: GroundUiInputProps['autoTrim'] = false;
  @Input() autocomplete: GroundUiInputProps['autocomplete'] = 'off';
  @Input({ transform: booleanAttribute }) autofocus: GroundUiInputProps['autofocus'] = false;
  @Input() badge?: GroundUiInputProps['badge'];
  @Input() clearIcon: GroundUiInputProps['clearIcon'] = 'x-circle';
  @Input() customClass?: GroundUiInputProps['customClass'];
  @Input({ transform: numberAttribute }) customTabIndex?: GroundUiInputProps['customTabIndex'];
  @Input({ transform: numberAttribute }) debounce: GroundUiInputProps['debounce'] = 0;
  @Input({ transform: booleanAttribute }) disabled: GroundUiInputProps['disabled'] = false;
  @Input() enterkeyhint?: GroundUiInputProps['enterkeyhint'];
  @Input() errorText: GroundUiInputProps['errorText'] = '';
  @Input({ transform: booleanAttribute }) floatingLabel: GroundUiInputProps['floatingLabel'] = false;
  @Input({ transform: booleanAttribute }) fullWidth: GroundUiInputProps['fullWidth'] = false;
  @Input() helperText: GroundUiInputProps['helperText'] = '';
  @Input() infoText: GroundUiInputProps['infoText'] = '';
  @Input() inputId?: GroundUiInputProps['inputId'];
  @Input() inputmode?: GroundUiInputProps['inputmode'];
  @Input() label: GroundUiInputProps['label'] = '';
  @Input({ transform: booleanAttribute }) loading: GroundUiInputProps['loading'] = false;
  @Input() mask: GroundUiInputProps['mask'] = 'none';
  @Input() max?: GroundUiInputProps['max'];
  @Input({ transform: numberAttribute }) maxLength?: GroundUiInputProps['maxLength'];
  @Input({ transform: numberAttribute }) maxRows?: GroundUiInputProps['maxRows'];
  @Input() min?: GroundUiInputProps['min'];
  @Input({ transform: booleanAttribute }) multiline: GroundUiInputProps['multiline'] = false;
  @Input() name?: GroundUiInputProps['name'];
  @Input() pattern?: GroundUiInputProps['pattern'];
  @Input() placeholder?: GroundUiInputProps['placeholder'];
  @Input() prefixIcon?: GroundUiInputProps['prefixIcon'];
  @Input() prefixText?: GroundUiInputProps['prefixText'];
  @Input({ transform: booleanAttribute }) readonly: GroundUiInputProps['readonly'] = false;
  @Input({ transform: booleanAttribute }) required: GroundUiInputProps['required'] = false;
  @Input({ transform: numberAttribute }) rows: GroundUiInputProps['rows'] = 3;
  @Input({ transform: booleanAttribute }) rippleEffect: GroundUiInputProps['rippleEffect'] = true;
  @Input({ transform: booleanAttribute }) showClear: GroundUiInputProps['showClear'] = false;
  @Input({ transform: booleanAttribute }) showCopy: GroundUiInputProps['showCopy'] = false;
  @Input({ transform: booleanAttribute }) showCounter: GroundUiInputProps['showCounter'] = false;
  @Input({ transform: booleanAttribute }) showPasswordToggle: GroundUiInputProps['showPasswordToggle'] = false;
  @Input() size: GroundUiInputProps['size'] = 'medium';
  @Input() step?: GroundUiInputProps['step'];
  @Input() successText: GroundUiInputProps['successText'] = '';
  @Input() suffixIcon?: GroundUiInputProps['suffixIcon'];
  @Input() suffixText?: GroundUiInputProps['suffixText'];
  @Input() tooltip?: GroundUiInputProps['tooltip'];
  @Input() type: GroundUiInputProps['type'] = 'text';
  @Input() validationState: GroundUiInputProps['validationState'] = 'default';
  @Input() value: GroundUiInputProps['value'] = '';
  @Input() warningText: GroundUiInputProps['warningText'] = '';

  @Output() readonly inputChange = new EventEmitter<string>();

  @HostListener('inputChange', ['$event'])
  protected handleInputChange(event: GroundUiInputChangeEvent): void {
    this.inputChange.emit(event.detail);
  }
}