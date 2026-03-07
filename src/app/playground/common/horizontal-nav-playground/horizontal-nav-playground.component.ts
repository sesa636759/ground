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
  selector: 'dm-horizontal-nav-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './horizontal-nav-playground.component.html',
  styleUrl: './horizontal-nav-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmHorizontalNavPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'appearance', title: 'Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'layout', title: 'Layout', icon: 'ruler', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['appearance'];

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  model = [
    { label: 'Home', icon: '🏠', command: () => this.logEvent('Home Clicked') },
    { label: 'Products', icon: '📦', command: () => this.logEvent('Products Clicked') },
    { label: 'Services', icon: '⚙️', command: () => this.logEvent('Services Clicked') },
    { label: 'About', icon: 'ℹ️', command: () => this.logEvent('About Clicked') },
    { label: 'Contact', icon: '📧', command: () => this.logEvent('Contact Clicked') },
  ];

  modelJson = JSON.stringify(this.model);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      theme: 'light',
      sticky: true,
      showIcons: true,
    };
  }

  updateConfig() {
    setTimeout(() => {
      let code = '<ui-horizontal-nav\n';
      code += `  theme="${this.pgConfig.theme}"\n`;
      if (this.pgConfig.sticky) code += `  sticky\n`;
      code += `  [model]="navItems"\n`;
      code += '></ui-horizontal-nav>';

      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }
}



