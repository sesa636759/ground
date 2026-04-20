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

import type { GroundUiCheckboxChangeEvent, GroundUiCheckboxProps } from '../types';
import { GroundUiDirectiveBase } from './ground-ui-directive-base';

const UI_CHECKBOX_PROPS = [
  'ariaDescribedBy',
  'ariaLabel',
  'badge',
  'checkboxTabIndex',
  'checked',
  'color',
  'customCheckIcon',
  'customClass',
  'customIndeterminateIcon',
  'disabled',
  'enableAnimation',
  'errorMessage',
  'helperText',
  'indeterminate',
  'invalid',
  'label',
  'labelPosition',
  'name',
  'readonly',
  'required',
  'rippleEffect',
  'showCheckIcon',
  'size',
  'skeleton',
  'tooltip',
  'tooltipPosition',
  'value',
  'variant',
] as const;

@Directive({ selector: 'ui-checkbox', standalone: true })
export class UiCheckbox extends GroundUiDirectiveBase<HTMLElement> {
  protected override readonly propNames = UI_CHECKBOX_PROPS;

  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
  }

  @Input() ariaDescribedBy: GroundUiCheckboxProps['ariaDescribedBy'] = '';
  @Input() ariaLabel: GroundUiCheckboxProps['ariaLabel'] = '';
  @Input() badge?: GroundUiCheckboxProps['badge'];
  @Input({ transform: numberAttribute }) checkboxTabIndex: GroundUiCheckboxProps['checkboxTabIndex'] = 0;
  @Input({ transform: booleanAttribute }) checked: GroundUiCheckboxProps['checked'] = false;
  @Input() color: GroundUiCheckboxProps['color'] = 'primary';
  @Input() customCheckIcon: GroundUiCheckboxProps['customCheckIcon'] = '';
  @Input() customClass?: GroundUiCheckboxProps['customClass'];
  @Input() customIndeterminateIcon: GroundUiCheckboxProps['customIndeterminateIcon'] = '';
  @Input({ transform: booleanAttribute }) disabled: GroundUiCheckboxProps['disabled'] = false;
  @Input({ transform: booleanAttribute }) enableAnimation: GroundUiCheckboxProps['enableAnimation'] = true;
  @Input() errorMessage: GroundUiCheckboxProps['errorMessage'] = '';
  @Input() helperText: GroundUiCheckboxProps['helperText'] = '';
  @Input({ transform: booleanAttribute }) indeterminate: GroundUiCheckboxProps['indeterminate'] = false;
  @Input({ transform: booleanAttribute }) invalid: GroundUiCheckboxProps['invalid'] = false;
  @Input() label: GroundUiCheckboxProps['label'] = '';
  @Input() labelPosition: GroundUiCheckboxProps['labelPosition'] = 'right';
  @Input() name: GroundUiCheckboxProps['name'] = '';
  @Input({ transform: booleanAttribute }) readonly: GroundUiCheckboxProps['readonly'] = false;
  @Input({ transform: booleanAttribute }) required: GroundUiCheckboxProps['required'] = false;
  @Input({ transform: booleanAttribute }) rippleEffect: GroundUiCheckboxProps['rippleEffect'] = true;
  @Input({ transform: booleanAttribute }) showCheckIcon: GroundUiCheckboxProps['showCheckIcon'] = true;
  @Input() size: GroundUiCheckboxProps['size'] = 'medium';
  @Input({ transform: booleanAttribute }) skeleton: GroundUiCheckboxProps['skeleton'] = false;
  @Input() tooltip?: GroundUiCheckboxProps['tooltip'];
  @Input() tooltipPosition: GroundUiCheckboxProps['tooltipPosition'] = 'top';
  @Input() value: GroundUiCheckboxProps['value'] = '';
  @Input() variant: GroundUiCheckboxProps['variant'] = 'default';

  @Output() readonly checkboxChange = new EventEmitter<{
    checked: boolean;
    value: string;
    indeterminate: boolean;
  }>();

  @HostListener('checkboxChange', ['$event'])
  protected handleCheckboxChange(event: GroundUiCheckboxChangeEvent): void {
    this.checkboxChange.emit(event.detail);
  }
}