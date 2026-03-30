import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-dialog-box-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dialog-box-playground.component.html',
  styleUrl: './dialog-box-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmDialogBoxPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  visible = false;

  pgAccordionItems = [
    { id: 'appearance', title: 'Appearance & Styles', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior & Logic', icon: 'settings', iconLibrary: 'lucide' },
    {
      id: 'visibility',
      title: 'Header & Footer Controls',
      icon: 'settings',
      iconLibrary: 'lucide',
    },
  ];

  defaultOpen = ['appearance'];

  sizeOptions = [
    { label: 'XS (320px)', value: 'xs' },
    { label: 'SM (480px)', value: 'sm' },
    { label: 'MD (768px)', value: 'md' },
    { label: 'LG (1024px)', value: 'lg' },
    { label: 'XL (1280px)', value: 'xl' },
    { label: 'Fill (90%)', value: 'fill' },
  ];

  variantOptions = [
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
  ];

  statusOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Info', value: 'info' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Error', value: 'error' },
  ];

  backdropOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Static', value: 'static' },
    { label: 'None', value: 'none' },
  ];

  positionOptions = [
    { label: 'Center', value: 'center' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top Right', value: 'top-right' },
  ];

  menuItems = [
    { label: 'Action 1', id: 'act1', icon: 'zap' },
    { label: 'Action 2', id: 'act2', icon: 'flag' },
    { type: 'separator' },
    { label: 'Close', id: 'close', icon: 'x', variant: 'danger' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      size: 'sm',
      variant: 'outlined',
      status: 'default',
      backdrop: 'default',
      position: 'center',
      okText: '',
      cancelText: '',
      draggable: false,
      resizable: false,
      showHeader: true,
      showFooter: true,
      showMenu: false,
      showMin: true,
      showMax: true,
      showClose: true,
    };
  }

  openDialog() {
    this.visible = true;
    this.logEvent('Opened dialog');
  }

  closeDialog() {
    this.visible = false;
    this.logEvent('Closed dialog');
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      const innerContent = `
  <div style="padding: 20px">
    <p>This is the content of the dialog.</p>
  </div>`;
      const code = this.getCleanFormattedDom(this.demoElement, 'ui-dialog-box').replace(
        '></ui--dialog-box>',
        `>\n${innerContent}\n</ui--dialog-box>`,
      );
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }
}
