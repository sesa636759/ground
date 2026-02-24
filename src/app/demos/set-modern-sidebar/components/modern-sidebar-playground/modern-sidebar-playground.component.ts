import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-modern-sidebar-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './modern-sidebar-playground.component.html',
  styleUrl: './modern-sidebar-playground.component.scss',
})
export class ModernSidebarPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    brandName: 'Set UI Lib',
    selectedId: 'dashboard',
    accentColor: '#6366f1',
    userName: 'John Doe',
    userRole: 'Administrator',
    userAvatar: 'https://i.pravatar.cc/100?img=11',
    collapsed: false,
    theme: 'light',
  };

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  accentColorOptions = [
    { label: 'Indigo', value: '#6366f1' },
    { label: 'Blue', value: '#3b82f6' },
    { label: 'Green', value: '#10b981' },
    { label: 'Teal', value: '#14b8a6' },
    { label: 'Purple', value: '#8b5cf6' },
    { label: 'Pink', value: '#ec4899' },
    { label: 'Orange', value: '#f59e0b' },
    { label: 'Red', value: '#ef4444' },
  ];

  sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-home' },
    { id: 'analytics', label: 'Analytics', icon: 'fas fa-chart-line', badge: 3 },
    {
      id: 'projects',
      label: 'Projects',
      icon: 'fas fa-folder',
      badge: 12,
      children: [
        { id: 'active', label: 'Active Projects', icon: 'fas fa-circle', badge: 8 },
        { id: 'paused', label: 'Paused', icon: 'fas fa-pause-circle', badge: 2 },
        { id: 'completed', label: 'Completed', icon: 'fas fa-check-circle', badge: 2 },
      ],
    },
    {
      id: 'tasks',
      label: 'Tasks',
      icon: 'fas fa-tasks',
      badge: 15,
      children: [
        { id: 'active-tasks', label: 'Active', icon: 'fas fa-play', badge: 10 },
        { id: 'pending', label: 'Pending', icon: 'fas fa-clock', badge: 5 },
      ],
    },
    { id: 'calendar', label: 'Calendar', icon: 'fas fa-calendar' },
    { id: 'messages', label: 'Messages', icon: 'fas fa-envelope', badge: 'New' },
    { id: 'team', label: 'Team', icon: 'fas fa-users' },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'fas fa-cog',
      children: [
        { id: 'profile', label: 'Profile', icon: 'fas fa-user' },
        { id: 'security', label: 'Security', icon: 'fas fa-lock' },
        { id: 'notifications', label: 'Notifications', icon: 'fas fa-bell' },
      ],
    },
    { id: 'help', label: 'Help & Support', icon: 'fas fa-question-circle' },
  ];

  eventLog = signal<string[]>([]);
  generatedCode = signal('');
  showCode = true;
  sidebarItemsJson = JSON.stringify(this.sidebarItems);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  updateConfig() {
    let code = `<app-modern-sidebar\n`;
    code += `  brand-name="${this.pgConfig.brandName}"\n`;
    code += `  selected-id="${this.pgConfig.selectedId}"\n`;
    code += `  accent-color="${this.pgConfig.accentColor}"\n`;
    if (this.pgConfig.userName) code += `  user-name="${this.pgConfig.userName}"\n`;
    if (this.pgConfig.userRole) code += `  user-role="${this.pgConfig.userRole}"\n`;
    if (this.pgConfig.userAvatar) code += `  user-avatar="${this.pgConfig.userAvatar}"\n`;
    if (this.pgConfig.collapsed) code += `  collapsed="true"\n`;
    if (this.pgConfig.theme !== 'light') code += `  theme="${this.pgConfig.theme}"\n`;
    code += `  [items]="sidebarItemsJson"\n`;
    code += `  (itemSelected)="onItemSelected($event)"\n`;
    code += `  (sidebarToggled)="onSidebarToggled($event)"\n`;
    code += `></app-modern-sidebar>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  onItemSelected(event: any) {
    this.logEvent(`Item selected: ${event.detail.label} (${event.detail.id})`);
    this.pgConfig.selectedId = event.detail.id;
    this.updateConfig();
  }

  onSidebarToggled(event: any) {
    this.logEvent(`Sidebar ${event.detail ? 'collapsed' : 'expanded'}`);
    this.pgConfig.collapsed = event.detail;
    this.updateConfig();
  }

  onProfileClick() {
    this.logEvent(`Profile clicked`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  // Helper for JSON strings
  jsonOptions = (opts: any) => JSON.stringify(opts);
}
