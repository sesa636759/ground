import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-input-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './input-playground.component.html',
  styleUrl: './input-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class InputPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

  // Playground State
  pgConfig = {
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username',
    value: '',
    variant: 'outlined',
    size: 'medium',
    validationState: 'none',
    fullWidth: true,
    disabled: false,
    readonly: false,
    required: false,
    showClear: false,
    showPasswordToggle: false,
    showSteppers: false,
    autoSelect: false,
    autoTrim: false,
    multiline: false,
    autoResize: false,
    maxRows: 3,
    rows: 3,
    skeleton: false,
    prefixText: '',
    suffixText: '',
    helperText: 'Choose a unique username',
    errorText: 'This field is required',
    successText: 'Looking good!',
    warningText: 'Strong passwords are better',
    maxLength: 0,
    showCharCount: false,
    floatingLabel: false,
    loading: false,
    debounce: 0,
  };

  eventMessage = signal('Interact with the input...');
  generatedCode = signal('');

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateConfig();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  getCleanFormatedDom(): string {
    if (!this.demoElement) return '';
    return generatePlaygroundCode(this.demoElement.nativeElement as Element, 'app-input');
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  onInputChange(event: any) {
    this.eventMessage.set(`Value changed to: "${event.target.value}"`);
  }

  onInputFocus() {
    this.eventMessage.set(`Input focused`);
  }

  onInputBlur() {
    this.eventMessage.set(`Input blurred`);
  }

  onInputClear() {
    this.eventMessage.set(`Input cleared`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
