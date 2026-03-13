import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'ui-radio-group[ngModel], ui-radio-group[formControl], ui-radio-group[formControlName]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupValueAccessorDirective),
      multi: true,
    },
  ],
})
export class RadioGroupValueAccessorDirective implements ControlValueAccessor {
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('radioGroupChange', ['$event'])
  _handleInput(event: Event): void {
    // radioGroupChange emits { value: string }
    const detail = (event as CustomEvent).detail;
    this.onChange(detail?.value);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: any): void {
    const normalizedValue = value == null ? '' : value;
    this.renderer.setProperty(this.el.nativeElement, 'value', normalizedValue);
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
