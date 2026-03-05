import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-panel-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './panel-playground.component.html',
  styleUrl: './panel-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PanelPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'content', title: 'Content & Header', icon: '📝' },
    { id: 'visual', title: 'Visual Styles', icon: '🎨' },
    { id: 'behavior', title: 'Behavioral Settings', icon: '⚙️' },
  ]);

  accordionDefaultOpen = JSON.stringify(['content']);

  variantOptions = [
    { label: 'Elevated', value: 'elevated' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
    { label: 'Flat', value: 'flat' },
  ];

  themeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  constructor() {
    super();
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      panelTitle: 'Interactive Panel',
      panelSubtitle: 'Customizable layout component',
      badge: 'New',
      variant: 'elevated',
      theme: 'default',
      showClose: true,
      showSettings: true,
      toggleable: true,
      minimizable: true,
      maximizable: true,
      isDraggable: false,
      resizable: true,
      loading: false,
      noPadding: false,
      glass: false,
    };
  }

  updateConfig() {
    let code = '<ui-panel\n';
    code += `  panel-title="${this.pgConfig.panelTitle}"\n`;
    code += `  panel-subtitle="${this.pgConfig.panelSubtitle}"\n`;
    if (this.pgConfig.badge) code += `  badge="${this.pgConfig.badge}"\n`;
    if (this.pgConfig.variant !== 'elevated') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.theme !== 'default') code += `  theme="${this.pgConfig.theme}"\n`;
    if (!this.pgConfig.showClose) code += `  [show-close]="false"\n`;
    if (!this.pgConfig.showSettings) code += `  [show-settings]="false"\n`;
    if (this.pgConfig.toggleable) code += `  toggleable\n`;
    if (this.pgConfig.minimizable) code += `  minimizable\n`;
    if (this.pgConfig.maximizable) code += `  maximizable\n`;
    if (this.pgConfig.isDraggable) code += `  is-draggable\n`;
    if (this.pgConfig.resizable) code += `  resizable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.noPadding) code += `  no-padding\n`;
    if (this.pgConfig.glass) code += `  glass\n`;
    code += '>\n';
    code += '  <div slot="content">Panel content here...</div>\n';
    code += '  <div slot="footer">Panel footer here...</div>\n';
    code += '</ui-panel>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onPanelEvent(event: string) {
    this.logEvent(`Panel event: ${event}`);
  }
}
