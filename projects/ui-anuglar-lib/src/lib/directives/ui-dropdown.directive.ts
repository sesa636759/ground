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

import type { DropdownChangeEvent, DropdownOption, GroundUiDropdownChangeEvent, GroundUiDropdownProps } from '../types';
import { GroundUiDirectiveBase } from './ground-ui-directive-base';

const UI_DROPDOWN_PROPS = [
  'appearance',
  'cascading',
  'clearable',
  'disabled',
  'maxHeight',
  'multiSelect',
  'options',
  'placeholder',
  'searchable',
  'showArrow',
  'size',
  'value',
] as const;

@Directive({ selector: 'ui-dropdown', standalone: true })
export class UiDropdown extends GroundUiDirectiveBase<HTMLElement> {
  protected override readonly propNames = UI_DROPDOWN_PROPS;

  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
  }

  @Input() appearance: GroundUiDropdownProps['appearance'] = 'dropdown';
  @Input({ transform: booleanAttribute }) cascading: GroundUiDropdownProps['cascading'] = false;
  @Input() clearable?: GroundUiDropdownProps['clearable'];
  @Input({ transform: booleanAttribute }) disabled: GroundUiDropdownProps['disabled'] = false;
  @Input({ transform: numberAttribute }) maxHeight: GroundUiDropdownProps['maxHeight'] = 300;
  @Input({ transform: booleanAttribute }) multiSelect: GroundUiDropdownProps['multiSelect'] = false;
  @Input() options: DropdownOption[] | string = [];
  @Input() placeholder: GroundUiDropdownProps['placeholder'] = 'Select an option';
  @Input({ transform: booleanAttribute }) searchable: GroundUiDropdownProps['searchable'] = false;
  @Input() showArrow?: GroundUiDropdownProps['showArrow'];
  @Input() size: GroundUiDropdownProps['size'] = 'md';
  @Input() value: GroundUiDropdownProps['value'] = '';

  @Output() readonly valueChange = new EventEmitter<DropdownChangeEvent>();

  @HostListener('valueChange', ['$event'])
  protected handleValueChange(event: GroundUiDropdownChangeEvent): void {
    this.valueChange.emit(event.detail);
  }
}