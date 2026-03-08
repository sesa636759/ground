import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmModernSidebarSetPlaygroundComponent } from '../../../playground/sets/modern-sidebar-playground/modern-sidebar-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-modern-sidebar-set-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmModernSidebarSetPlaygroundComponent,
    DemoTabsComponent,

    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './modern-sidebar-demo.component.html',
  styleUrl: './modern-sidebar-demo.component.scss',
})
export class DmModernSidebarDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '??', color: '#8b5cf6' },
    { id: 'basic-default', title: 'Basic Default', icon: '??' },
    { id: 'minimal-items', title: 'Minimal Items', icon: '?' },
    { id: 'collapsed-compact', title: 'Collapsed/Compact', icon: '??' },
    { id: 'expanded-full', title: 'Expanded Full', icon: '??' },
    { id: 'nested-navigation', title: 'Nested Navigation', icon: '??' },
    { id: 'nested-deep', title: 'Deep Nesting (3 Levels)', icon: '???' },
    { id: 'with-badges', title: 'With Badges', icon: '??' },
    { id: 'badges-mixed', title: 'Mixed Badge Types', icon: '??' },
    { id: 'user-profile', title: 'User Profile', icon: '??' },
    { id: 'user-with-avatar', title: 'User with Avatar', icon: '???' },
    { id: 'no-user-profile', title: 'No User Profile', icon: '?' },
    { id: 'theme-light', title: 'Light Theme', icon: '??' },
    { id: 'theme-dark', title: 'Dark Theme', icon: '??' },
    { id: 'accent-indigo', title: 'Accent: Indigo', icon: '??' },
    { id: 'accent-green', title: 'Accent: Green', icon: '??' },
    { id: 'accent-purple', title: 'Accent: Purple', icon: '??' },
    { id: 'accent-orange', title: 'Accent: Orange', icon: '??' },
    { id: 'accent-pink', title: 'Accent: Pink', icon: '??' },
    { id: 'brand-custom', title: 'Custom Branding', icon: '???' },
    { id: 'brand-icon', title: 'Brand with Icon', icon: '??' },
    { id: 'icons-fontawesome', title: 'FontAwesome Icons', icon: '??' },
    { id: 'icons-custom', title: 'Custom Icons', icon: '?' },
    { id: 'full-featured', title: 'Full Featured', icon: '??' },
    { id: 'dashboard-layout', title: 'Dashboard Layout', icon: '??' },
    { id: 'admin-panel', title: 'Admin Panel', icon: '??' },
    { id: 'project-management', title: 'Project Management', icon: '??' },
    { id: 'messaging-app', title: 'Messaging App', icon: '??' },
    { id: 'ecommerce', title: 'E-commerce Admin', icon: '??' },
    { id: 'analytics-dashboard', title: 'Analytics Dashboard', icon: '??' },
    { id: 'settings-menu', title: 'Settings Menu', icon: '??' },
  ];

  basicDefaultCode = signal(`<app-modern-sidebar
  brand-name="My App"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-bar" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);

  minimalItemsCode = signal(`<app-modern-sidebar
  brand-name="Simple App"
  selected-id="home"
  [items]='[
    { id: "home", label: "Home", icon: "fas fa-home" },
    { id: "about", label: "About", icon: "fas fa-info-circle" },
    { id: "contact", label: "Contact", icon: "fas fa-envelope" }
  ]'>
</app-modern-sidebar>`);

  collapsedCompactCode = signal(`<app-modern-sidebar
  brand-name="Compact"
  selected-id="dashboard"
  collapsed="true"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "projects", label: "Projects", icon: "fas fa-folder" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);

  expandedFullCode = signal(`<app-modern-sidebar
  brand-name="Full Width"
  selected-id="dashboard"
  collapsed="false"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-line" },
    { id: "projects", label: "Projects", icon: "fas fa-folder" },
    { id: "team", label: "Team", icon: "fas fa-users" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);

  nestedNavigationCode = signal(`<app-modern-sidebar
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

  nestedDeepCode = signal(`<app-modern-sidebar
  brand-name="Deep Nesting"
  selected-id="notifications"
  accent-color="#ec4899"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    {
      id: "settings",
      label: "Settings",
      icon: "fas fa-cog",
      children: [
        { id: "account", label: "Account", icon: "fas fa-user" },
        { id: "security", label: "Security", icon: "fas fa-lock" },
        {
          id: "preferences",
          label: "Preferences",
          icon: "fas fa-sliders-h",
          children: [
            { id: "notifications", label: "Notifications", icon: "fas fa-bell" },
            { id: "privacy", label: "Privacy", icon: "fas fa-shield-alt" }
          ]
        }
      ]
    }
  ]'>
</app-modern-sidebar>`);

  withBadgesCode = signal(`<app-modern-sidebar
  brand-name="Notification Hub"
  selected-id="messages"
  accent-color="#f59e0b"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "messages", label: "Messages", icon: "fas fa-envelope", badge: 12 },
    { id: "notifications", label: "Notifications", icon: "fas fa-bell", badge: 5 },
    { id: "tasks", label: "Tasks", icon: "fas fa-tasks", badge: 8 }
  ]'>
</app-modern-sidebar>`);

  badgesMixedCode = signal(`<app-modern-sidebar
  brand-name="Mixed Badges"
  selected-id="inbox"
  accent-color="#3b82f6"
  [items]='[
    { id: "inbox", label: "Inbox", icon: "fas fa-inbox", badge: 42 },
    { id: "updates", label: "Updates", icon: "fas fa-sync", badge: "New" },
    { id: "alerts", label: "Alerts", icon: "fas fa-exclamation-triangle", badge: "!" },
    { id: "archive", label: "Archive", icon: "fas fa-archive" }
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

  userWithAvatarCode = signal(`<app-modern-sidebar
  brand-name="Team Hub"
  selected-id="projects"
  accent-color="#14b8a6"
  user-name="Alex Chen"
  user-role="Senior Developer"
  user-avatar="https://i.pravatar.cc/100?img=33"
  [items]='[
    { id: "projects", label: "Projects", icon: "fas fa-folder", badge: 5 },
    { id: "team", label: "Team", icon: "fas fa-users" },
    { id: "profile", label: "Profile", icon: "fas fa-user" }
  ]'>
</app-modern-sidebar>`);

  noUserProfileCode = signal(`<app-modern-sidebar
  brand-name="Public App"
  selected-id="home"
  accent-color="#6366f1"
  [items]='[
    { id: "home", label: "Home", icon: "fas fa-home" },
    { id: "explore", label: "Explore", icon: "fas fa-compass" },
    { id: "about", label: "About", icon: "fas fa-info-circle" }
  ]'>
</app-modern-sidebar>`);

  themeLightCode = signal(`<app-modern-sidebar
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

  themeDarkCode = signal(`<app-modern-sidebar
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

  accentIndigoCode = signal(`<app-modern-sidebar
  brand-name="Indigo App"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "data", label: "Data", icon: "fas fa-database" }
  ]'>
</app-modern-sidebar>`);

  accentGreenCode = signal(`<app-modern-sidebar
  brand-name="Green Theme"
  selected-id="dashboard"
  accent-color="#10b981"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "eco", label: "Eco Dashboard", icon: "fas fa-leaf" }
  ]'>
</app-modern-sidebar>`);

  accentPurpleCode = signal(`<app-modern-sidebar
  brand-name="Purple Theme"
  selected-id="dashboard"
  accent-color="#8b5cf6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "creative", label: "Creative", icon: "fas fa-palette" }
  ]'>
</app-modern-sidebar>`);

  accentOrangeCode = signal(`<app-modern-sidebar
  brand-name="Orange Theme"
  selected-id="dashboard"
  accent-color="#f59e0b"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "alerts", label: "Alerts", icon: "fas fa-bell", badge: 3 }
  ]'>
</app-modern-sidebar>`);

  accentPinkCode = signal(`<app-modern-sidebar
  brand-name="Pink Theme"
  selected-id="dashboard"
  accent-color="#ec4899"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "favorites", label: "Favorites", icon: "fas fa-heart" }
  ]'>
</app-modern-sidebar>`);

  brandCustomCode = signal(`<app-modern-sidebar
  brand-name="?? Rocket Dashboard"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "launch", label: "Launch", icon: "fas fa-rocket" }
  ]'>
</app-modern-sidebar>`);

  brandIconCode = signal(`<app-modern-sidebar
  brand-name="? FastApp"
  selected-id="dashboard"
  accent-color="#14b8a6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-tachometer-alt" },
    { id: "performance", label: "Performance", icon: "fas fa-bolt" }
  ]'>
</app-modern-sidebar>`);

  iconsFontawesomeCode = signal(`<app-modern-sidebar
  brand-name="Icon Gallery"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "chart", label: "Charts", icon: "fas fa-chart-pie" },
    { id: "users", label: "Users", icon: "fas fa-users" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);

  iconsCustomCode = signal(`<app-modern-sidebar
  brand-name="Custom Icons"
  selected-id="dashboard"
  accent-color="#8b5cf6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-th-large" },
    { id: "widgets", label: "Widgets", icon: "fas fa-cubes" },
    { id: "tools", label: "Tools", icon: "fas fa-wrench" }
  ]'>
</app-modern-sidebar>`);

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
        { id: "completed", label: "Completed", icon: "fas fa-check-circle" }
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
    }
  ]'>
</app-modern-sidebar>`);

  dashboardLayoutCode = signal(`<app-modern-sidebar
  brand-name="Dashboard Pro"
  selected-id="overview"
  accent-color="#3b82f6"
  user-name="Dashboard Admin"
  user-role="Administrator"
  user-avatar="https://i.pravatar.cc/100?img=12"
  [items]='[
    { id: "overview", label: "Overview", icon: "fas fa-chart-pie" },
    { id: "metrics", label: "Metrics", icon: "fas fa-tachometer-alt" },
    { id: "reports", label: "Reports", icon: "fas fa-file-alt" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);

  adminPanelCode = signal(`<app-modern-sidebar
  brand-name="Admin Panel"
  selected-id="users"
  accent-color="#10b981"
  user-name="Admin User"
  user-role="Super Admin"
  user-avatar="https://i.pravatar.cc/100?img=1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    {
      id: "user-mgmt",
      label: "User Management",
      icon: "fas fa-users-cog",
      children: [
        { id: "users", label: "All Users", icon: "fas fa-users" },
        { id: "roles", label: "Roles & Permissions", icon: "fas fa-key" }
      ]
    },
    { id: "system", label: "System", icon: "fas fa-server" }
  ]'>
</app-modern-sidebar>`);

  projectManagementCode = signal(`<app-modern-sidebar
  brand-name="Project Manager"
  selected-id="active"
  accent-color="#8b5cf6"
  user-name="Project Lead"
  user-role="Manager"
  user-avatar="https://i.pravatar.cc/100?img=20"
  [items]='[
    { id: "overview", label: "Overview", icon: "fas fa-chart-line" },
    {
      id: "projects",
      label: "Projects",
      icon: "fas fa-folder-open",
      badge: 12,
      children: [
        { id: "active", label: "Active", icon: "fas fa-play", badge: 8 },
        { id: "paused", label: "Paused", icon: "fas fa-pause", badge: 2 },
        { id: "completed", label: "Completed", icon: "fas fa-check" }
      ]
    },
    { id: "team", label: "Team", icon: "fas fa-users" }
  ]'>
</app-modern-sidebar>`);

  messagingAppCode = signal(`<app-modern-sidebar
  brand-name="ChatApp"
  selected-id="inbox"
  accent-color="#ec4899"
  user-name="Chat User"
  user-role="Online"
  user-avatar="https://i.pravatar.cc/100?img=15"
  [items]='[
    { id: "inbox", label: "Inbox", icon: "fas fa-inbox", badge: 42 },
    { id: "direct", label: "Direct Messages", icon: "fas fa-comment", badge: 12 },
    { id: "channels", label: "Channels", icon: "fas fa-hashtag", badge: 5 },
    { id: "mentions", label: "Mentions", icon: "fas fa-at", badge: "New" }
  ]'>
</app-modern-sidebar>`);

  ecommerceCode = signal(`<app-modern-sidebar
  brand-name="E-Shop Admin"
  selected-id="orders"
  accent-color="#f59e0b"
  user-name="Shop Admin"
  user-role="Store Manager"
  user-avatar="https://i.pravatar.cc/100?img=30"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-chart-line" },
    { id: "orders", label: "Orders", icon: "fas fa-shopping-cart", badge: 28 },
    { id: "products", label: "Products", icon: "fas fa-box" },
    { id: "customers", label: "Customers", icon: "fas fa-users" },
    { id: "reports", label: "Reports", icon: "fas fa-file-invoice-dollar" }
  ]'>
</app-modern-sidebar>`);

  analyticsDashboardCode = signal(`<app-modern-sidebar
  brand-name="Analytics Pro"
  selected-id="realtime"
  accent-color="#14b8a6"
  user-name="Data Analyst"
  user-role="Analytics Team"
  user-avatar="https://i.pravatar.cc/100?img=40"
  [items]='[
    { id: "overview", label: "Overview", icon: "fas fa-chart-pie" },
    { id: "realtime", label: "Real-time", icon: "fas fa-bolt", badge: "Live" },
    { id: "trends", label: "Trends", icon: "fas fa-chart-line" },
    { id: "reports", label: "Reports", icon: "fas fa-file-alt" }
  ]'>
</app-modern-sidebar>`);

  settingsMenuCode = signal(`<app-modern-sidebar
  brand-name="Settings"
  selected-id="notifications"
  accent-color="#6366f1"
  [items]='[
    { id: "account", label: "Account", icon: "fas fa-user" },
    { id: "security", label: "Security", icon: "fas fa-lock" },
    { id: "notifications", label: "Notifications", icon: "fas fa-bell" },
    { id: "privacy", label: "Privacy", icon: "fas fa-shield-alt" },
    { id: "advanced", label: "Advanced", icon: "fas fa-sliders-h" }
  ]'>
</app-modern-sidebar>`);
}
