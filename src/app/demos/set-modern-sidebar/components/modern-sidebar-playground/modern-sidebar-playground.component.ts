import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modern-sidebar-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-home' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-folder', badge: 5 },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'fas fa-cog',
      children: [
        { id: 'profile', label: 'Profile', icon: 'fas fa-user' },
        { id: 'security', label: 'Security', icon: 'fas fa-lock' },
      ],
    },
    { id: 'messages', label: 'Messages', icon: 'fas fa-envelope', badge: 'New' },
    { id: 'help', label: 'Help', icon: 'fas fa-question-circle' },
  ];

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-modern-sidebar\n`;
    code += `  brand-name="${this.pgConfig.brandName}"\n`;
    code += `  selected-id="${this.pgConfig.selectedId}"\n`;
    code += `  accent-color="${this.pgConfig.accentColor}"\n`;
    code += `  user-name="${this.pgConfig.userName}"\n`;
    code += `  user-role="${this.pgConfig.userRole}"\n`;
    code += `  user-avatar="${this.pgConfig.userAvatar}"\n`;
    if (this.pgConfig.collapsed) code += `  collapsed\n`;
    if (this.pgConfig.theme !== 'light') code += `  theme="${this.pgConfig.theme}"\n`;
    code += `  [items]="sidebarItems"\n`;
    code += `></app-modern-sidebar>`;

    this.generatedCode.set(code);
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
