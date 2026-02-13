import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';
import { ModernSidebarPlaygroundComponent } from './components/modern-sidebar-playground/modern-sidebar-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

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
  imports: [
    CommonModule,
    FormsModule,
    ModernSidebarPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
  ],
})
export class SetModernSidebarDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Layouts', icon: '📋' },
    { id: 'features', title: 'Features & Variants', icon: '✨' },
    { id: 'advanced', title: 'Advanced Examples', icon: '🚀' },
  ];

  exampleVariants = [
    { id: 'basic', title: 'Basic Layouts', icon: '📋' },
    { id: 'features', title: 'Features & Variants', icon: '✨' },
    { id: 'advanced', title: 'Advanced Examples', icon: '🚀' },
  ];

  // Basic Layouts Signals
  basicSidebarCode = signal(`<app-modern-sidebar
  brand-name="My App"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-bar" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);

  minimalCode = signal(`<app-modern-sidebar
  brand-name="Simple App"
  selected-id="home"
  [items]='[
    { id: "home", label: "Home", icon: "fas fa-home" },
    { id: "about", label: "About", icon: "fas fa-info-circle" },
    { id: "contact", label: "Contact", icon: "fas fa-envelope" }
  ]'>
</app-modern-sidebar>`);

  compactCode = signal(`<app-modern-sidebar
  brand-name="Compact"
  selected-id="dashboard"
  collapsed="true"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "projects", label: "Projects", icon: "fas fa-folder" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);

  // Features & Variants Signals
  nestedNavCode = signal(`<app-modern-sidebar
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
        { id: "archived", label: "Archived", icon: "fas fa-archive" }
      ]
    }
  ]'>
</app-modern-sidebar>`);

  badgesCode = signal(`<app-modern-sidebar
  brand-name="Notification Hub"
  selected-id="messages"
  accent-color="#f59e0b"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "messages", label: "Messages", icon: "fas fa-envelope", badge: 12 },
    { id: "notifications", label: "Notifications", icon: "fas fa-bell", badge: "New" },
    { id: "tasks", label: "Tasks", icon: "fas fa-tasks", badge: 5 }
  ]'>
</app-modern-sidebar>`);

  userProfileCode = signal(`<app-modern-sidebar
  brand-name="Enterprise App"
  selected-id="dashboard"
  accent-color="#8b5cf6"
  user-name="Sarah Johnson"
  user-role="Product Manager"
  user-avatar="https://i.pravatar.cc/100?img=44"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "projects", label: "Projects", icon: "fas fa-folder" },
    { id: "team", label: "Team", icon: "fas fa-users" }
  ]'>
</app-modern-sidebar>`);

  lightThemeCode = signal(`<app-modern-sidebar
  brand-name="Light Theme App"
  selected-id="dashboard"
  accent-color="#06b6d4"
  theme="light"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-line" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);

  darkThemeCode = signal(`<app-modern-sidebar
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
    { id: "terminal", label: "Terminal", icon: "fas fa-terminal" }
  ]'>
</app-modern-sidebar>`);

  customColorsCode = signal(`<app-modern-sidebar
  brand-name="Colorful App"
  selected-id="dashboard"
  accent-color="#14b8a6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "design", label: "Design", icon: "fas fa-palette" },
    { id: "media", label: "Media", icon: "fas fa-image" }
  ]'>
</app-modern-sidebar>`);

  // Advanced Examples Signals
  fullFeaturedCode = signal(`<app-modern-sidebar
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
    { id: "messages", label: "Messages", icon: "fas fa-envelope", badge: "New" },
    { id: "reports", label: "Reports", icon: "fas fa-file-alt" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);

  multiLevelCode = signal(`<app-modern-sidebar
  brand-name="Multi-Level Navigation"
  selected-id="user-settings"
  accent-color="#ec4899"
  [items]='[
    { id: "overview", label: "Overview", icon: "fas fa-chart-pie" },
    {
      id: "workspace",
      label: "Workspace",
      icon: "fas fa-briefcase",
      children: [
        { id: "teams", label: "Teams", icon: "fas fa-users" },
        { id: "projects", label: "Projects", icon: "fas fa-folder" }
      ]
    },
    {
      id: "management",
      label: "Management",
      icon: "fas fa-sliders-h",
      children: [
        { id: "users", label: "Users", icon: "fas fa-user-tie" },
        { id: "roles", label: "Roles", icon: "fas fa-shield-alt" },
        { id: "permissions", label: "Permissions", icon: "fas fa-lock" }
      ]
    },
    {
      id: "preferences",
      label: "Preferences",
      icon: "fas fa-cog",
      children: [
        { id: "account-settings", label: "Account", icon: "fas fa-user" },
        { id: "user-settings", label: "User Preferences", icon: "fas fa-sliders-h" },
        { id: "notifications", label: "Notifications", icon: "fas fa-bell" }
      ]
    }
  ]'>
</app-modern-sidebar>`);

  formCode = signal(`<app-modern-sidebar
  brand-name="Admin Panel"
  selected-id="dashboard"
  accent-color="#10b981"
  user-name="Admin User"
  user-role="Administrator"
  user-avatar="https://i.pravatar.cc/100?img=1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home", badge: 0 },
    {
      id: "management",
      label: "User Management",
      icon: "fas fa-users",
      children: [
        { id: "all-users", label: "All Users", icon: "fas fa-list" },
        { id: "roles-perms", label: "Roles & Permissions", icon: "fas fa-key" }
      ]
    },
    {
      id: "content",
      label: "Content Management",
      icon: "fas fa-file-alt",
      children: [
        { id: "pages", label: "Pages", icon: "fas fa-file" },
        { id: "posts", label: "Posts", icon: "fas fa-newspaper" }
      ]
    },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-bar", badge: 5 }
  ]'>
</app-modern-sidebar>`);

  playgroundCode = signal(`<app-modern-sidebar
  brand-name="Playground"
  selected-id="explore"
  accent-color="#a855f7"
  [items]='[
    { id: "explore", label: "Explore", icon: "fas fa-compass" },
    { id: "create", label: "Create", icon: "fas fa-plus-circle" },
    { id: "library", label: "Library", icon: "fas fa-book" }
  ]'>
</app-modern-sidebar>`);

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
