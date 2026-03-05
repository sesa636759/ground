import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-aside-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aside-playground.component.html',
  styleUrl: './aside-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AsidePlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global', 'states']);

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
      resizable: true,
      backdropBlur: '0',
      loading: false,
    };
  }

  updateConfig() {
    let code = '<ui-aside\n';
    code += `  [open]="${this.pgConfig.open}"\n`;
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (!this.pgConfig.closeable) code += `  [closeable]="false"\n`;
    if (!this.pgConfig.closeOnOverlayClick) code += `  [close-on-overlay-click]="false"\n`;
    if (this.pgConfig.resizable) code += `  resizable\n`;
    if (this.pgConfig.backdropBlur !== '0')
      code += `  backdrop-blur="${this.pgConfig.backdropBlur}"\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    code += '>\n';
    code += '  <div slot="header"><h3>Header Content</h3></div>\n';
    code += '  <div slot="content">Main body content goes here...</div>\n';
    code += '  <div slot="footer">Footer actions</div>\n';
    code += '</ui-aside>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onAsideChange(event: any) {
    this.pgConfig.open = event.detail?.open || false;
    this.logEvent(`Aside open state: ${this.pgConfig.open}`);
    this.updateConfig();
  }
}
