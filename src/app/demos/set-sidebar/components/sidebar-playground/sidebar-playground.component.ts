import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-sidebar-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar-playground.component.html',
  styleUrl: './sidebar-playground.component.scss',
})
export class SidebarPlaygroundComponent implements OnInit {
  pgConfig = {
    position: 'left',
    variant: 'default',
    width: '250px',
    collapsible: true,
    collapsed: false,
    showBackdrop: false,
    overlay: false,
  };

  menuItems = JSON.stringify([
    { id: '1', label: 'Dashboard', icon: 'fas fa-home' },
    { id: '2', label: 'Analytics', icon: 'fas fa-chart-line' },
    { id: '3', label: 'Settings', icon: 'fas fa-cog' },
    { id: '4', label: 'Profile', icon: 'fas fa-user' },
  ]);

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
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
  }

  onSidebarToggle(event: any) {
    this.logEvent(`Sidebar toggled: ${event.detail.collapsed ? 'collapsed' : 'expanded'}`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
