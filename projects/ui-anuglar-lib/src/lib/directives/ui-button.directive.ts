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

import type { GroundUiButtonClickEvent, GroundUiButtonProps } from '../types';
import { GroundUiDirectiveBase } from './ground-ui-directive-base';

const UI_BUTTON_PROPS = [
  'badge',
  'disabled',
  'elevation',
  'fullWidth',
  'href',
  'icon',
  'iconLibrary',
  'iconOnly',
  'iconPosition',
  'iconSize',
  'label',
  'loading',
  'loadingPosition',
  'noRipple',
  'pill',
  'rel',
  'rounded',
  'selected',
  'size',
  'target',
  'type',
  'variant',
] as const;

@Directive({ selector: 'ui-button', standalone: true })
export class UiButton extends GroundUiDirectiveBase<HTMLElement> {
  protected override readonly propNames = UI_BUTTON_PROPS;

  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
  }

  @Input() badge?: GroundUiButtonProps['badge'];
  @Input({ transform: booleanAttribute }) disabled: GroundUiButtonProps['disabled'] = false;
  @Input({ transform: numberAttribute }) elevation?: GroundUiButtonProps['elevation'];
  @Input({ transform: booleanAttribute }) fullWidth: GroundUiButtonProps['fullWidth'] = false;
  @Input() href?: GroundUiButtonProps['href'];
  @Input() icon?: GroundUiButtonProps['icon'];
  @Input() iconLibrary: GroundUiButtonProps['iconLibrary'] = 'default';
  @Input({ transform: booleanAttribute }) iconOnly: GroundUiButtonProps['iconOnly'] = false;
  @Input() iconPosition: GroundUiButtonProps['iconPosition'] = 'left';
  @Input() iconSize?: GroundUiButtonProps['iconSize'];
  @Input() label?: GroundUiButtonProps['label'];
  @Input({ transform: booleanAttribute }) loading: GroundUiButtonProps['loading'] = false;
  @Input() loadingPosition: GroundUiButtonProps['loadingPosition'] = 'left';
  @Input({ transform: booleanAttribute }) noRipple: GroundUiButtonProps['noRipple'] = false;
  @Input({ transform: booleanAttribute }) pill: GroundUiButtonProps['pill'] = false;
  @Input() rel?: GroundUiButtonProps['rel'];
  @Input({ transform: booleanAttribute }) rounded: GroundUiButtonProps['rounded'] = false;
  @Input({ transform: booleanAttribute }) selected: GroundUiButtonProps['selected'] = false;
  @Input() size: GroundUiButtonProps['size'] = 'medium';
  @Input() target?: GroundUiButtonProps['target'];
  @Input() type: GroundUiButtonProps['type'] = 'button';
  @Input() variant: GroundUiButtonProps['variant'] = 'primary';

  @Output() readonly buttonClick = new EventEmitter<MouseEvent>();

  @HostListener('buttonClick', ['$event'])
  protected handleButtonClick(event: GroundUiButtonClickEvent): void {
    this.buttonClick.emit(event.detail);
  }
}