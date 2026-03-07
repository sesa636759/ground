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
  selector: 'dm-nav-bar-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nav-bar-playground.component.html',
  styleUrl: './nav-bar-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmNavBarPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'visuals', title: 'Visuals', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'structure', title: 'Structure', icon: 'ruler', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['visuals'];

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  model = [
    { label: 'Dashboard', icon: '📊', items: [] },
    {
      label: 'Users',
      icon: '👥',
      items: [
        { label: 'List', icon: '📝' },
        { label: 'Groups', icon: '📁' },
      ],
    },
    { label: 'Settings', icon: '⚙️', items: [] },
    { label: 'Help', icon: '❓', items: [] },
  ];

  modelJson = JSON.stringify(this.model);

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      theme: 'light',
      collapsed: false,
      showFooter: true,
    };
  }

  updateConfig() {
    let code = '<ui-nav-bar\n';
    code += `  theme="${this.pgConfig.theme}"\n`;
    if (this.pgConfig.collapsed) code += `  collapsed\n`;
    code += `  [model]="navItems"\n`;
    code += '>\n';
    code += '  <div slot="header"> Logo </div>\n';
    code += '</ui-nav-bar>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}



