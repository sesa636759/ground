import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { AppInputValueAccessorDirective } from '../../../../directives/ui-input-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-snackbar-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    AppInputValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './snackbar-playground.component.html',

  styleUrl: './snackbar-playground.component.scss',
})
export class SnackbarPlaygroundComponent implements AfterViewInit {
  @ViewChild('snackbarElement') snackbarElement!: ElementRef;

  pgConfig = {
    position: 'top-right',
    maxVisible: 5,
    stackMode: 'stack',
    openMode: 'slide-down',
    cardStack: false,
  };

  notiConfig = {
    type: 'success',
    title: 'New Notification',
    message: 'This is a test notification message!',
    duration: 5000,
  };

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '🌐' },
    { id: 'notification', title: 'Notification Settings', icon: '🔔' },
  ]);

  accordionDefaultOpen = JSON.stringify(['global']);

  positionOptions = [
    { label: 'Top Right', value: 'top-right' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Top Center', value: 'top-center' },
    { label: 'Bottom Right', value: 'bottom-right' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Bottom Center', value: 'bottom-center' },
  ];

  stackModeOptions = [
    { label: 'Stack', value: 'stack' },
    { label: 'Queue', value: 'queue' },
    { label: 'LIFO', value: 'lifo' },
  ];

  openModeOptions = [
    { label: 'Slide Down', value: 'slide-down' },
    { label: 'Slide Up', value: 'slide-up' },
    { label: 'Slide Left', value: 'slide-left' },
    { label: 'Slide Right', value: 'slide-right' },
    { label: 'Fade', value: 'fade' },
    { label: 'Scale', value: 'scale' },
    { label: 'Bounce', value: 'bounce' },
  ];

  typeOptions = [
    { label: 'Success', value: 'success' },
    { label: 'Info', value: 'info' },
    { label: 'Warning', value: 'warning' },
    { label: 'Error', value: 'error' },
  ];

  generatedCodeSignal = signal<string>('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  getCleanFormattedDom(): string {
    if (!this.snackbarElement) return '';
    let code = generatePlaygroundCode(this.snackbarElement.nativeElement as Element, 'ui-snackbar');
    code += `\n\n/* Usage in TS */
const snackbar = document.querySelector('ui-snackbar');
snackbar.add({
  type: '${this.notiConfig.type}',
  title: '${this.notiConfig.title}',
  message: '${this.notiConfig.message}',
  duration: ${this.notiConfig.duration}
});`;
    return code;
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormattedDom());
      this.refreshCode();
    }, 50);
  }

  async showSnackbar() {
    const el = this.snackbarElement.nativeElement;
    if (el && typeof el.add === 'function') {
      await el.add({ ...this.notiConfig });
    }
  }

  async clearAll() {
    const el = this.snackbarElement.nativeElement;
    if (el && typeof el.closeAll === 'function') {
      await el.closeAll();
    }
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      position: 'top-right',
      maxVisible: 5,
      stackMode: 'stack',
      openMode: 'slide-down',
      cardStack: false,
    };
    this.notiConfig = {
      type: 'success',
      title: 'New Notification',
      message: 'This is a test notification message!',
      duration: 5000,
    };
    this.updateConfig();
  }
}
