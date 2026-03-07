import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-tab-stack-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tab-stack-playground.component.html',
  styleUrl: './tab-stack-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTabStackPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = {
    orientation: 'horizontal',
    variant: 'default',
    size: 'medium',
    closable: false,
    draggable: false,
    scrollable: false,
    grouped: false,
  };

  tabs = [
    { id: 'tab1', label: 'Dashboard', icon: 'fas fa-home' },
    { id: 'tab2', label: 'Analytics', icon: 'fas fa-chart-line' },
    { id: 'tab3', label: 'Settings', icon: 'fas fa-cog' },
  ];

  constructor() {
    super();
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-tab-stack orientation="${this.pgConfig.orientation}" variant="${this.pgConfig.variant}" size="${this.pgConfig.size}"`;
    if (this.pgConfig.closable) code += ` closable="true"`;
    if (this.pgConfig.draggable) code += ` draggable="true"`;
    if (this.pgConfig.scrollable) code += ` scrollable="true"`;
    if (this.pgConfig.grouped) code += ` grouped="true"`;
    code += ` [tabs]="tabs"></app-tab-stack>`;
    this.generatedCode.set(code);
    this.refreshCode();
  }

  getDefaultConfig() {
    return {
      orientation: 'horizontal',
      variant: 'default',
      size: 'medium',
      closable: false,
      draggable: false,
      scrollable: false,
      grouped: false,
    };
  }
}



