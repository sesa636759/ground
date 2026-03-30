import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-resizable-panel-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './resizable-panel-playground.component.html',
  styleUrl: './resizable-panel-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmResizablePanelPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = {
    direction: 'horizontal',
    theme: 'light',
    handleSize: 8,
    minPanelSize: 10,
    maxPanelSize: -1,
    snapThreshold: 30,
    animated: true,
    showHandleIcon: true,
    snapToEdge: true,
    saveState: false,
    collapsible1: true,
    collapsible2: false,
    collapsible3: true,
  };

  panelsData = [
    { id: 'panel-1', size: 30, minSize: 15, maxSize: 50, collapsible: true },
    { id: 'panel-2', size: 40, minSize: 20 },
    { id: 'panel-3', size: 30, minSize: 15, maxSize: 50, collapsible: true },
  ];

  constructor() {
    super();
    this.updateConfig();
  }

  updateConfig() {
    // Sync collapse flags with panel data
    this.panelsData[0].collapsible = this.pgConfig.collapsible1;
    this.panelsData[1].collapsible = this.pgConfig.collapsible2;
    this.panelsData[2].collapsible = this.pgConfig.collapsible3;

    let code = `<ui-resizable-panel\n`;
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  theme="${this.pgConfig.theme}"\n`;
    if (this.pgConfig.handleSize !== 8) code += `  [handleSize]="${this.pgConfig.handleSize}"\n`;
    if (!this.pgConfig.showHandleIcon) code += `  [showHandleIcon]="false"\n`;
    if (this.pgConfig.snapToEdge) code += `  snap-to-edge="true"\n`;
    if (this.pgConfig.animated) code += `  animated="true"\n`;
    code += `  [panels]="panelsConfig"\n`;
    code += `>\n`;
    code += `  <div slot="panel-1">Panel 1 Content</div>\n`;
    code += `  <div slot="panel-2">Panel 2 Content</div>\n`;
    code += `  <div slot="panel-3">Panel 3 Content</div>\n`;
    code += `</ui-resizable-panel>`;

    this.generatedCode.set(code);
    // Recreate array to trigger change detection
    this.panelsData = [...this.panelsData];
    this.refreshCode();
  }

  onPanelResize(event: any) {
    const sizes = event.detail.panels.map((p: any) => `${p.size.toFixed(1)}%`).join(', ');
    this.logEvent(`Resizing: [${sizes}]`);
  }

  onPanelCollapse(event: any) {
    this.logEvent(
      `Panel ${event.detail.panel.id} ${event.detail.collapsed ? 'collapsed' : 'expanded'}`,
    );
  }

  getDefaultConfig() {
    return {
      direction: 'horizontal',
      theme: 'light',
      handleSize: 8,
      minPanelSize: 10,
      maxPanelSize: -1,
      snapThreshold: 30,
      animated: true,
      showHandleIcon: true,
      snapToEdge: true,
      saveState: false,
      collapsible1: true,
      collapsible2: false,
      collapsible3: true,
    };
  }
}
