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
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-otp-input-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './otp-input-playground.component.html',
  styleUrl: './otp-input-playground.component.scss',
})
export class OtpInputPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

  pgConfig = {
    length: 6,
    size: 'medium',
    color: 'primary',
    variant: 'default',
    groupSize: 0,
    secure: false,
    skeleton: false,
    invalid: false,
    label: 'Verification Code',
    helperText: 'We sent a code to your phone',
    errorText: 'Verification failed. Please try again.',
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
    return generatePlaygroundCode(this.demoElement.nativeElement as Element, 'app-otp-input');
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

  onOtpChange(event: any) {
    this.logEvent(`Typing: ${event.detail.value} (Complete: ${event.detail.complete})`);
  }

  onOtpComplete(event: any) {
    this.logEvent(`Completed: ${event.detail.value}`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
