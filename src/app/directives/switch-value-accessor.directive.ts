import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'dui-switch[ngModel], dui-switch[formControl], dui-switch[formControlName]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchValueAccessorDirective),
      multi: true,
    },
  ],
})
export class SwitchValueAccessorDirective implements ControlValueAccessor {
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('switchChange', ['$event'])
  _handleInput(event: Event): void {
    // switchChange emits a CustomEvent with detail: { checked: boolean }
    const detail = (event as CustomEvent).detail;
    this.onChange(detail?.checked);
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
