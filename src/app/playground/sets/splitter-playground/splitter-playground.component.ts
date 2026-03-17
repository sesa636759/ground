import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-splitter-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './splitter-playground.component.html',
  styleUrl: './splitter-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmSplitterPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout & Handles', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'style', title: 'Styling', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior', icon: 'zap', iconLibrary: 'lucide' },
  ];

  themeOptions = [
    { label: 'Auto', value: 'auto' },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  directionOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      direction: 'horizontal',
      gutterSize: 8,
      snapThreshold: 20,
      theme: 'auto',
      animated: true,
      rounded: false,
      elevated: false,
      showGutterIcon: true,
      doubleClickCollapse: true,
      keyboardNavigation: true,
      persistState: false,
      rtl: false,
      gutterColor: '#e5e7eb',
      gutterHoverColor: '#3b82f6',
    };
  }

  updateConfig() {
    let code = `<dui-splitter\n`;
    if (this.pgConfig.direction !== 'horizontal')
      code += `  direction="${this.pgConfig.direction}"\n`;
    if (this.pgConfig.gutterSize !== 8) code += `  [gutter-size]="${this.pgConfig.gutterSize}"\n`;
    if (this.pgConfig.snapThreshold !== 20)
      code += `  [snap-threshold]="${this.pgConfig.snapThreshold}"\n`;
    if (this.pgConfig.theme !== 'auto') code += `  theme="${this.pgConfig.theme}"\n`;
    if (!this.pgConfig.animated) code += `  [animated]="false"\n`;
    if (this.pgConfig.rounded) code += `  rounded\n`;
    if (this.pgConfig.elevated) code += `  elevated\n`;
    if (!this.pgConfig.showGutterIcon) code += `  [show-gutter-icon]="false"\n`;
    if (!this.pgConfig.doubleClickCollapse) code += `  [double-click-collapse]="false"\n`;
    if (!this.pgConfig.keyboardNavigation) code += `  [keyboard-navigation]="false"\n`;
    if (this.pgConfig.persistState) code += `  persist-state\n`;
    if (this.pgConfig.rtl) code += `  rtl\n`;
    if (this.pgConfig.gutterColor !== '#e5e7eb')
      code += `  gutter-color="${this.pgConfig.gutterColor}"\n`;
    if (this.pgConfig.gutterHoverColor !== '#3b82f6')
      code += `  gutter-hover-color="${this.pgConfig.gutterHoverColor}"\n`;

    code += `>\n`;
    code += `  <div slot="panel-0">Left Panel</div>\n`;
    code += `  <div slot="panel-1">Right Panel</div>\n`;
    code += `</dui-splitter>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onSizeChange(ev: any) {
    this.logEvent(`Sizes changed: ${JSON.stringify(ev.detail.sizes)}`);
  }

  onPanelCollapse(ev: any) {
    this.logEvent(`Panel ${ev.detail.index} ${ev.detail.collapsed ? 'collapsed' : 'expanded'}`);
  }
}
