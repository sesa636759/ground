import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-aside-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aside-playground.component.html',
  styleUrl: './aside-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmAsidePlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['global', 'states'];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Glass', value: 'glass' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      open: false,
      direction: 'right',
      size: '400px',
      variant: 'default',
      closeable: true,
      closeOnOverlayClick: true,
      closeOnEscape: true,
      resizable: true,
      minSize: '200px',
      maxSize: '800px',
      backdropBlur: '0',
      loading: false,
      persistKey: '',
    };
  }

  updateConfig() {
    this.updateConfigFromDom(
      this.demoElement,
      'ui-aside-panel',
      `
  <div slot="header">
    <h3 style="margin: 0">Panel Title</h3>
  </div>
  <div slot="content" style="padding: 24px">
    <p>Main body content goes here...</p>
  </div>
  <div slot="footer" style="padding: 16px; border-top: 1px solid var(--border-color); display: flex; gap: 12px">
    <ui-button variant="secondary" label="Cancel" style="flex: 1"></ui--button>
    <ui-button variant="primary" label="Save" style="flex: 1"></ui--button>
  </div>`,
    );
  }
}
