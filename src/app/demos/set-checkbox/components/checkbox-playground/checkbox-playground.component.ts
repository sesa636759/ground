import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-checkbox-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './checkbox-playground.component.html',
  styleUrl: './checkbox-playground.component.scss',
})
export class CheckboxPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Group Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

  // Playground State
  pgConfig = {
    size: 'medium',
    color: 'primary',
    variant: 'default',
    labelPosition: 'right',
    label: 'Accept terms and conditions',
    helperText: 'You must agree to continue',
    checked: false,
    indeterminate: false,
    disabled: false,
    readonly: false,
    required: true,
    invalid: false,
    errorMessage: 'This field has an error',
    enableAnimation: true,
    rippleEffect: true,
    skeleton: false,
  };

  eventMessage = signal('Interact with the checkbox...');
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
    return generatePlaygroundCode(this.demoElement.nativeElement as Element, 'app-checkbox');
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

  onCheckboxChange(event: any) {
    const { checked, indeterminate } = event.detail;
    this.eventMessage.set(
      `Changed: checked=${checked}, indeterminate=${indeterminate} at ${new Date().toLocaleTimeString()}`,
    );
    this.pgConfig.checked = checked;
    this.pgConfig.indeterminate = indeterminate;
    this.updateConfig();
  }

  onCheckboxFocus() {
    this.eventMessage.set(`Focused at ${new Date().toLocaleTimeString()}`);
  }

  onCheckboxBlur() {
    this.eventMessage.set(`Blurred at ${new Date().toLocaleTimeString()}`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
