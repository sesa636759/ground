import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-splitter-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './splitter-playground.component.html',
  styleUrl: './splitter-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SplitterPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = {
    direction: 'horizontal',
    gutterSize: 8,
    snapThreshold: 20,
    theme: 'light',
    animated: true,
    rounded: false,
    elevated: false,
    showGutterIcon: true,
    doubleClickCollapse: true,
  };

  constructor() {
    super();
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-splitter\n`;
    code += `  direction="${this.pgConfig.direction}"\n`;
    if (this.pgConfig.gutterSize !== 8) code += `  [gutterSize]="${this.pgConfig.gutterSize}"\n`;
    if (this.pgConfig.snapThreshold !== 20)
      code += `  [snapThreshold]="${this.pgConfig.snapThreshold}"\n`;
    if (this.pgConfig.theme !== 'light') code += `  theme="${this.pgConfig.theme}"\n`;
    if (!this.pgConfig.animated) code += `  [animated]="false"\n`;
    if (this.pgConfig.rounded) code += `  rounded="true"\n`;
    if (this.pgConfig.elevated) code += `  elevated="true"\n`;
    if (!this.pgConfig.showGutterIcon) code += `  [showGutterIcon]="false"\n`;
    if (this.pgConfig.doubleClickCollapse) code += `  double-click-collapse\n`;
    code += `>\n`;
    code += `  <div slot="panel-0">Panel 1 Content</div>\n`;
    code += `  <div slot="panel-1">Panel 2 Content</div>\n`;
    code += `</app-splitter>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onSizeChange(event: any) {
    const sizes = event.detail.sizes.map((s: any) => `${s.toFixed(1)}%`).join(', ');
    this.logEvent(`Sizes changed: [${sizes}]`);
  }

  onPanelCollapse(event: any) {
    this.logEvent(
      `Panel ${event.detail.index} ${event.detail.collapsed ? 'collapsed' : 'expanded'}`,
    );
  }

  onDragStart(event: any) {
    this.logEvent(`Drag started on gutter ${event.detail.index}`);
  }

  onDragEnd(_event: any) {
    this.logEvent(`Drag ended`);
  }

  getDefaultConfig() {
    return {
      direction: 'horizontal',
      gutterSize: 8,
      snapThreshold: 20,
      theme: 'light',
      animated: true,
      rounded: false,
      elevated: false,
      showGutterIcon: true,
      doubleClickCollapse: true,
    };
  }
}
