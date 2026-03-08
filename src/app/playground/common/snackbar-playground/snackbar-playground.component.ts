import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-snackbar-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './snackbar-playground.component.html',
  styleUrl: './snackbar-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmSnackbarPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('snackbarElement') snackbarElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  notiConfig = {
    type: 'success',
    title: 'New Notification',
    message: 'This is a test notification message!',
    duration: 5000,
  };

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'house', iconLibrary: 'lucide' },
    { id: 'notification', title: 'Notification Settings', icon: 'bell', iconLibrary: 'lucide' },
  ];

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

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      position: 'top-right',
      maxVisible: 5,
      stackMode: 'stack',
      openMode: 'slide-down',
      cardStack: false,
    };
  }

  updateConfig() {
    setTimeout(() => {
      let code = this.getCleanFormattedDom(this.snackbarElement, 'ui-snackbar');
      code += `\n/* Usage in TS */\nconst snackbar = document.querySelector('ui-snackbar');\nsnackbar.add({\n  type: '${this.notiConfig.type}',\n  title: '${this.notiConfig.title}',\n  message: '${this.notiConfig.message}',\n  duration: ${this.notiConfig.duration}\n});`;
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  async showSnackbar() {
    const el = this.snackbarElement?.nativeElement;
    if (el && typeof el.add === 'function') {
      await el.add({ ...this.notiConfig });
      this.logEvent(`Showed ${this.notiConfig.type} snackbar`);
    } else {
      console.warn('Snackbar component not ready or add method missing');
    }
  }

  async clearAll() {
    const el = this.snackbarElement?.nativeElement;
    if (el && typeof el.closeAll === 'function') {
      await el.closeAll();
      this.logEvent('Cleared all snackbars');
    }
  }

  override resetConfig() {
    super.resetConfig();
    this.notiConfig = {
      type: 'success',
      title: 'New Notification',
      message: 'This is a test notification message!',
      duration: 5000,
    };
  }
}



