import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-tabs-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tabs-playground.component.html',
  styleUrl: './tabs-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTabsPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout Configuration', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'visual', title: 'Visual Styles', icon: 'palette', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['layout'];

  alignOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Justify', value: 'justify' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Pills', value: 'pills' },
    { label: 'Underline', value: 'underline' },
    { label: 'Enclosed', value: 'enclosed' },
  ];

  currentTab = 'overview';

  constructor() {
    super();
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      orientation: 'horizontal',
      align: 'start',
      variant: 'default',
      scrollable: false,
      closeable: false,
    };
  }

  updateConfig() {
    let code = '<ui-tabs\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  align="${this.pgConfig.align}"\n`;
    if (this.pgConfig.scrollable) code += `  scrollable="true"\n`;
    if (this.pgConfig.closeable) code += `  closeable="true"\n`;
    code += '>\n';
    code += '  <ui-tab label="Overview" value="overview"> Content 1 </ui-tab>\n';
    code += '  <ui-tab label="Settings" value="settings"> Content 2 </ui-tab>\n';
    code += '</ui-tabs>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onTabChange(event: any) {
    this.currentTab = event.detail.value;
    this.logEvent(`Tab changed to: ${this.currentTab}`);
  }
}



