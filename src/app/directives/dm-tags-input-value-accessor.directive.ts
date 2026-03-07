import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  // Since selector is a list, and it seems to be app-tags-input component based on previous investigation
  selector: 'app-tags-input[ngModel], app-tags-input[formControl], app-tags-input[formControlName]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DmTagsInputValueAccessorDirective),
      multi: true,
    },
  ],
})
export class DmTagsInputValueAccessorDirective implements ControlValueAccessor {
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('tagsChange', ['$event'])
  _handleInput(event: Event): void {
    // tagsChange emits { tags: string[] }
    const detail = (event as CustomEvent).detail;
    this.onChange(detail?.tags);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: any): void {
    const normalizedValue = value == null ? [] : value;
    this.renderer.setProperty(this.el.nativeElement, 'tags', normalizedValue);
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




