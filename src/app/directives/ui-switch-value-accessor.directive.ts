import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'ui-switch[ngModel], ui-switch[formControl], ui-switch[formControlName]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiSwitchValueAccessorDirective),
      multi: true,
    },
  ],
})
export class UiSwitchValueAccessorDirective implements ControlValueAccessor {
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('switchChange', ['$event.detail'])
  _handleInput(detail: any): void {
    // switchChange emits { checked: boolean }
    this.onChange(detail.checked);
  }

  @HostListener('switchBlur')
  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: any): void {
    const normalizedValue = value == null ? false : value;
    this.renderer.setProperty(this.el.nativeElement, 'checked', normalizedValue);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled);
  }
}
