export interface NavItem {
  id: string;
  label: string;
  icon?: string;
  badge?: string;
  status?: string;
  children?: NavItem[];
}

export const topNavItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    status: 'online',
    icon: '🏠',
  },
  {
    id: 'overview',
    label: 'Overview',
    icon: '📋',
  },
  {
    id: 'documentation',
    label: 'Documentation',
    icon: '📖',
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: '👤',
  },
  {
    id: 'login',
    label: 'Login',
    icon: '🔑',
  },
];

export const categoryNavItems: NavItem[] = [
  {
    id: 'foundation',
    label: 'Foundation & Layout',
    icon: '🏗️',
    children: [
      { id: 'accordian', label: 'Accordian', icon: '📂' },
      { id: 'aside', label: 'Aside Panel', icon: '📱' },
      { id: 'card', label: 'Card', icon: '🃏' },
      { id: 'divider', label: 'Divider', icon: '➖' },
      { id: 'dock', label: 'Dock', icon: '⚓' },
      { id: 'dock-host', label: 'Dock Host', icon: '🏠' },
      { id: 'layout-manager', label: 'Layout Manager', badge: '✨', icon: '📐' },
      { id: 'panel', label: 'Panel', icon: '🖼️' },
      { id: 'splitter', label: 'Splitter', icon: '✂️' },
      { id: 'stack', label: 'Stack', icon: '📚' },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    icon: '🧭',
    children: [
      { id: 'anchor', label: 'Anchor', icon: '⚓' },
      { id: 'breadcrumb', label: 'Breadcrumb', icon: '🍞' },
      { id: 'context-menu', label: 'Context Menu', icon: '📋' },
      { id: 'horizontal-nav', label: 'Horizontal Nav', icon: '↔️' },
      { id: 'nav-bar', label: 'Nav Bar', icon: '📊' },
      { id: 'pagination', label: 'Pagination', icon: '📄' },
      { id: 'scroll-top', label: 'Scroll Top', icon: '⬆️' },
      { id: 'smart-menu', label: 'Smart Menu', icon: '🎯' },
      { id: 'smart-stepper', label: 'Smart Stepper', icon: '🪜' },
      { id: 'speed-dial', label: 'Speed Dial', icon: '⚡' },
      { id: 'stepper', label: 'Stepper', icon: '👣' },
      { id: 'tabs', label: 'Tabs', icon: '📑' },
      { id: 'top-bar', label: 'Top Bar', icon: '🔝' },
    ],
  },
  {
    id: 'inputs',
    label: 'Inputs & Forms',
    icon: '⌨️',
    children: [
      { id: 'button', label: 'Button', icon: '🔘' },
      { id: 'button-group', label: 'Button Group', icon: '🔲' },
      { id: 'cascade-select', label: 'Cascade Select', icon: '🎯' },
      { id: 'dropdown', label: 'Dropdown', icon: '⬇️' },
      { id: 'knob', label: 'Knob', icon: '🎛️' },
      { id: 'pattern-input', label: 'Pattern Input', icon: '🔤' },
      { id: 'picklist', label: 'Picklist', icon: '📝' },
      { id: 'range-slider', label: 'Range Slider', icon: '🎚️' },
      { id: 'rating', label: 'Rating', icon: '⭐' },
      { id: 'switch', label: 'Switch', icon: '🔀' },
      { id: 'transfer-list', label: 'Transfer List', icon: '↔️' },
    ],
  },
  {
    id: 'data-display',
    label: 'Data Display',
    icon: '📊',
    children: [
      { id: 'advanced-data-table', label: 'Advanced Table', icon: '📋' },
      { id: 'avatar', label: 'Avatar', icon: '👤' },
      { id: 'avatar-group', label: 'Avatar Group', icon: '👥' },
      { id: 'badge', label: 'Badge', icon: '🏷️' },
      { id: 'bar-chart', label: 'Bar Chart', icon: '📊' },
      { id: 'chart', label: 'Charts', icon: '📈' },
      { id: 'chip', label: 'Chip', icon: '🏷️' },
      { id: 'meter-group', label: 'Meter Group', icon: '📏' },
      { id: 'pill', label: 'Pill', icon: '💊' },
      { id: 'speedometer', label: 'Speedometer', icon: '⏱️' },
      { id: 'tag', label: 'Tag', icon: '🔖' },
      { id: 'timeline', label: 'Timeline', icon: '📅' },
      { id: 'tree-list', label: 'Tree List', icon: '🌳' },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback & Overlays',
    icon: '💬',
    children: [
      { id: 'dialog', label: 'Dialog', icon: '💬' },
      { id: 'popover', label: 'Popover', icon: '💭' },
      { id: 'snackbar', label: 'Snackbar', icon: '📢' },
      { id: 'timer', label: 'Timer', icon: '⏲️' },
      { id: 'skeleton', label: 'Skeleton', icon: '💀' },
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise Modules',
    icon: '🏢',
    children: [
      { id: 'set-dashboard', label: 'Dashboard', icon: '📊' },
      { id: 'set-code-editor', label: 'Code Editor', icon: '💻' },
      { id: 'set-masonry', label: 'Masonry', icon: '🧱' },
      { id: 'set-avatar', label: 'Avatar', icon: '👤' },
      { id: 'set-avatar-group', label: 'Avatar Group', icon: '👥' },
      { id: 'set-list', label: 'List', icon: '📝' },
      { id: 'set-timeline', label: 'Timeline', icon: '📅' },
      { id: 'set-tree', label: 'Tree', icon: '🌳' },
    ],
  },
  {
    id: 'experience',
    label: 'Experience Design',
    icon: '✨',
    children: [
      { id: 'set-carousel', label: 'Carousel', icon: '🎠' },
      { id: 'set-empty-state', label: 'Empty State', icon: '📭' },
      { id: 'set-animate-on-scroll', label: 'Animate on Scroll', icon: '📜' },
      { id: 'set-otp-input', label: 'OTP Input', icon: '🔢' },
      { id: 'set-progress', label: 'Progress', icon: '⏳' },
      { id: 'set-tooltip', label: 'Tooltip', icon: '💬' },
      { id: 'set-tags-input', label: 'Tags Input', icon: '🏷️' },
      { id: 'set-toggle', label: 'Toggle', icon: '🔘' },
      { id: 'set-stepper', label: 'Stepper', icon: '🪜' },
    ],
  },
  {
    id: 'set-ui-lib',
    label: 'Set UI Library',
    icon: '🎨',
    children: [
      { id: 'set-tabs', label: 'Tabs', icon: '📑' },
      { id: 'set-resizable-panel', label: 'Resizable Panel', icon: '📐' },
      { id: 'set-modern-sidebar', label: 'Modern Sidebar', icon: '📱' },
      { id: 'set-anchor', label: 'Anchor', icon: '⚓' },
      { id: 'set-button-toggle', label: 'Button Toggle', icon: '🔲' },
      { id: 'set-checkbox', label: 'Checkbox', icon: '☑️' },
      { id: 'set-radio', label: 'Radio', icon: '🔘' },
      { id: 'set-input', label: 'Input', icon: '⌨️' },
      { id: 'set-layout-manager', label: 'Layout Manager', icon: '📐' },
      { id: 'set-context-menu', label: 'Context Menu', icon: '📋' },
      { id: 'set-card', label: 'Card', icon: '🃏' },
      { id: 'set-splitter', label: 'Splitter', icon: '✂️' },
      { id: 'set-scroll-top', label: 'Scroll Top', icon: '⬆️' },
      { id: 'set-sidebar', label: 'Sidebar', icon: '📑' },
      { id: 'set-theme-switcher', label: 'Theme Switcher', icon: '🌓' },
    ],
  },
];

export const userProfileNavItems: NavItem[] = [
  {
    id: 'personal-info',
    label: 'Personal Information',
    icon: '👤',
    status: 'online',
  },
  {
    id: 'security',
    label: 'Security & Password',
    icon: '🔒',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: '🔔',
    badge: '3',
  },
  {
    id: 'billing',
    label: 'Billing & Subscriptions',
    icon: '💳',
  },
  {
    id: 'connected-accounts',
    label: 'Connected Accounts',
    icon: '🔗',
  },
  {
    id: 'privacy',
    label: 'Privacy Settings',
    icon: '🛡️',
  },
  {
    id: 'activity-log',
    label: 'Activity Log',
    icon: '🕒',
  },
  {
    id: 'preferences',
    label: 'System Preferences',
    icon: '⚙️',
  },
  {
    id: 'help-support',
    label: 'Help & Support',
    icon: '❓',
  },
  {
    id: 'logout',
    label: 'Sign Out',
    icon: '🚪',
  },
];

export const bottomNavItems: NavItem[] = [
  {
    id: 'user-management',
    label: 'User Management',
    icon: '👥',
    badge: 'New',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: '📊',
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: '📄',
  },
  {
    id: 'theme-selector',
    label: 'Settings',
    badge: '1',
    icon: '⚙️',
  },
  {
    id: 'support',
    label: 'Support',
    icon: '❓',
  },
];

export const bottomSecondaryItems: NavItem[] = [
  {
    id: 'about',
    label: 'About',
    icon: 'ℹ️',
  },
];

// Flatten all navigation items for routing
export function getAllNavItems(): NavItem[] {
  const allItems: NavItem[] = [];

  const addItems = (items: NavItem[]) => {
    items.forEach((item) => {
      allItems.push(item);
      if (item.children) {
        addItems(item.children);
      }
    });
  };

  addItems(topNavItems);
  addItems(categoryNavItems);
  addItems(bottomNavItems);
  addItems(userProfileNavItems);
  addItems(bottomSecondaryItems);

  return allItems;
}
