import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-sidebar-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar-playground.component.html',
  styleUrl: './sidebar-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = {
    position: 'left',
    variant: 'default',
    width: '250px',
    collapsible: true,
    collapsed: false,
    showBackdrop: false,
    overlay: false,
  };

  menuItems = [
    { id: '1', label: 'Dashboard', icon: 'fas fa-home' },
    { id: '2', label: 'Analytics', icon: 'fas fa-chart-line' },
    { id: '3', label: 'Settings', icon: 'fas fa-cog' },
    { id: '4', label: 'Profile', icon: 'fas fa-user' },
  ];

  constructor() {
    super();
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-sidebar\n`;
    code += `  position="${this.pgConfig.position}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  width="${this.pgConfig.width}"\n`;

    if (this.pgConfig.collapsible) code += `  collapsible="true"\n`;
    if (this.pgConfig.collapsed) code += `  collapsed="true"\n`;
    if (this.pgConfig.showBackdrop) code += `  show-backdrop="true"\n`;
    if (this.pgConfig.overlay) code += `  overlay="true"\n`;

    code += `  [items]="menuItems"\n`;
    code += `></app-sidebar>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onSidebarToggle(event: any) {
    this.logEvent(`Sidebar toggled: ${event.detail.collapsed ? 'collapsed' : 'expanded'}`);
  }

  getDefaultConfig() {
    return {
      position: 'left',
      variant: 'default',
      width: '250px',
      collapsible: true,
      collapsed: false,
      showBackdrop: false,
      overlay: false,
    };
  }
}
