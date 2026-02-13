import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModernSidebarPlaygroundComponent } from './components/modern-sidebar-playground/modern-sidebar-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-modern-sidebar-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModernSidebarPlaygroundComponent,
    CodeBlockComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-modern-sidebar-demo.component.html',
  styleUrl: './set-modern-sidebar-demo.component.scss',
})
export class SetModernSidebarDemoComponent {
  variants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'basic', title: 'Basic Sidebar', icon: '📋' },
    { id: 'nested', title: 'Nested Navigation', icon: '🗂️' },
    { id: 'badges', title: 'With Badges', icon: '🔔' },
    { id: 'user-profile', title: 'User Profile', icon: '👤' },
    { id: 'collapsed', title: 'Collapsed State', icon: '↔️' },
    { id: 'dark-theme', title: 'Dark Theme', icon: '🌙' },
    { id: 'custom-colors', title: 'Custom Colors', icon: '🎨' },
    { id: 'advanced', title: 'Advanced Layout', icon: '⚡' },
  ];

  basicCode = `<app-modern-sidebar
  brand-name="My App"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-bar" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'
></app-modern-sidebar>`;

  nestedCode = `<app-modern-sidebar
  brand-name="Project Hub"
  selected-id="active"
  accent-color="#10b981"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    {
      id: "projects",
      label: "Projects",
      icon: "fas fa-folder",
      children: [
        { id: "active", label: "Active Projects", icon: "fas fa-circle" },
        { id: "archived", label: "Archived", icon: "fas fa-archive" },
        { id: "templates", label: "Templates", icon: "fas fa-file" }
      ]
    },
    {
      id: "team",
      label: "Team",
      icon: "fas fa-users",
      children: [
        { id: "members", label: "Members", icon: "fas fa-user" },
        { id: "roles", label: "Roles", icon: "fas fa-shield-alt" }
      ]
    }
  ]'
></app-modern-sidebar>`;

  badgesCode = `<app-modern-sidebar
  brand-name="Notification App"
  selected-id="messages"
  accent-color="#f59e0b"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "messages", label: "Messages", icon: "fas fa-envelope", badge: 12 },
    { id: "notifications", label: "Notifications", icon: "fas fa-bell", badge: "New" },
    { id: "tasks", label: "Tasks", icon: "fas fa-tasks", badge: 5 },
    { id: "calendar", label: "Calendar", icon: "fas fa-calendar" }
  ]'
></app-modern-sidebar>`;

  userProfileCode = `<app-modern-sidebar
  brand-name="Enterprise App"
  selected-id="dashboard"
  accent-color="#8b5cf6"
  user-name="Sarah Johnson"
  user-role="Product Manager"
  user-avatar="https://i.pravatar.cc/100?img=44"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "projects", label: "Projects", icon: "fas fa-folder" },
    { id: "team", label: "Team", icon: "fas fa-users" },
    { id: "reports", label: "Reports", icon: "fas fa-chart-line" }
  ]'
></app-modern-sidebar>`;

  collapsedCode = `<app-modern-sidebar
  brand-name="Compact UI"
  selected-id="dashboard"
  accent-color="#ec4899"
  collapsed="true"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-bar" },
    { id: "projects", label: "Projects", icon: "fas fa-folder" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'
></app-modern-sidebar>`;

  darkThemeCode = `<app-modern-sidebar
  brand-name="Dark Mode App"
  selected-id="dashboard"
  accent-color="#3b82f6"
  theme="dark"
  user-name="Alex Smith"
  user-role="Developer"
  user-avatar="https://i.pravatar.cc/100?img=33"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "projects", label: "Projects", icon: "fas fa-folder", badge: 8 },
    { id: "code", label: "Code", icon: "fas fa-code" },
    { id: "terminal", label: "Terminal", icon: "fas fa-terminal" }
  ]'
></app-modern-sidebar>`;

  customColorsCode = `<app-modern-sidebar
  brand-name="Colorful App"
  selected-id="dashboard"
  accent-color="#14b8a6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "design", label: "Design", icon: "fas fa-palette" },
    { id: "media", label: "Media", icon: "fas fa-image" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'
></app-modern-sidebar>`;

  advancedCode = `<app-modern-sidebar
  brand-name="Advanced Dashboard"
  selected-id="active-tasks"
  accent-color="#6366f1"
  user-name="Emily Davis"
  user-role="Team Lead"
  user-avatar="https://i.pravatar.cc/100?img=25"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-line", badge: 3 },
    {
      id: "projects",
      label: "Projects",
      icon: "fas fa-folder",
      badge: 12,
      children: [
        { id: "active-projects", label: "Active", icon: "fas fa-circle", badge: 8 },
        { id: "paused", label: "Paused", icon: "fas fa-pause-circle", badge: 2 },
        { id: "completed", label: "Completed", icon: "fas fa-check-circle", badge: 2 }
      ]
    },
    {
      id: "tasks",
      label: "Tasks",
      icon: "fas fa-tasks",
      badge: 15,
      children: [
        { id: "active-tasks", label: "Active", icon: "fas fa-play", badge: 10 },
        { id: "pending", label: "Pending", icon: "fas fa-clock", badge: 5 }
      ]
    },
    { id: "calendar", label: "Calendar", icon: "fas fa-calendar" },
    { id: "messages", label: "Messages", icon: "fas fa-envelope", badge: "New" },
    { id: "team", label: "Team", icon: "fas fa-users" },
    { id: "reports", label: "Reports", icon: "fas fa-file-alt" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'
></app-modern-sidebar>`;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
