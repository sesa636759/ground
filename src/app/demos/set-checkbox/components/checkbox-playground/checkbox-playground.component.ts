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
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-checkbox-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
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

  eventLog = signal<string[]>([]);
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
    this.logEvent(`Changed: checked=${checked}, indeterminate=${indeterminate}`);
    this.pgConfig.checked = checked;
    this.pgConfig.indeterminate = indeterminate;
    this.updateConfig();
  }

  onCheckboxFocus() {
    this.logEvent(`Focused`);
  }

  onCheckboxBlur() {
    this.logEvent(`Blurred`);
  }

  private logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((logs) => [`[${time}] ${msg}`, ...logs.slice(0, 4)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
