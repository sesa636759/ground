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
  // {
  //   id: 'profile',
  //   label: 'Profile',
  //   icon: '👤',
  // },
  {
    id: 'login',
    label: 'Login',
    icon: '🔑',
  },
];

// export const categoryNavItems: NavItem[] = [
//   {
//     id: 'layout',
//     label: 'Foundation & Layout',
//     icon: '🏗️',
//     children: [
//       { id: 'card', label: 'Card', icon: '🃏' },
//       { id: 'card-set', label: 'Card Set', icon: '🃏' },
//       { id: 'divider', label: 'Divider', icon: '➖' },
//       { id: 'dock', label: 'Dock', icon: '⚓' },
//       { id: 'dock-host', label: 'Dock Host', icon: '🏠' },
//       { id: 'layout-manager', label: 'Layout Manager', badge: '✨', icon: '📐' },
//       { id: 'layout-manager-set', label: 'Layout Manager Set', icon: '📐' },
//       { id: 'masonry-set', label: 'Masonry Set', icon: '🧱' },
//       { id: 'splitter', label: 'Splitter', icon: '✂️' },
//       { id: 'splitter-set', label: 'Splitter Set', icon: '✂️' },
//       { id: 'stack', label: 'Stack', icon: '📚' },
//     ],
//   },
//   {
//     id: 'navigation',
//     label: 'Navigation',
//     icon: '🧭',
//     children: [
//       { id: 'anchor', label: 'Anchor', icon: '⚓' },
//       { id: 'anchor-set', label: 'Anchor Set', icon: '⚓' },
//       { id: 'breadcrumb', label: 'Breadcrumb', icon: '🍞' },
//       { id: 'context-menu', label: 'Context Menu', icon: '📋' },
//       { id: 'horizontal-nav', label: 'Horizontal Nav', icon: '↔️' },
//       { id: 'modern-sidebar-set', label: 'Modern Sidebar Set', icon: '📱' },
//       { id: 'nav-bar', label: 'Nav Bar', icon: '📊' },
//       { id: 'pagination', label: 'Pagination', icon: '📄' },
//       { id: 'scroll-top', label: 'Scroll Top', icon: '⬆️' },
//       { id: 'scroll-top-set', label: 'Scroll Top Set', icon: '⬆️' },
//       { id: 'sidebar-set', label: 'Sidebar Set', icon: '📑' },
//       { id: 'speed-dial', label: 'Speed Dial', icon: '⚡' },
//       { id: 'tabs', label: 'Tabs', icon: '📑' },
//       { id: 'tabs-set', label: 'Tabs Set', icon: '📑' },
//       { id: 'top-bar', label: 'Top Bar', icon: '🔝' },
//     ],
//   },
//   {
//     id: 'inputs',
//     label: 'Inputs & Forms',
//     icon: '⌨️',
//     children: [
//       { id: 'button', label: 'Button', icon: '🔘' },
//       { id: 'button-group', label: 'Button Group', icon: '🔲' },
//       { id: 'button-toggle-set', label: 'Button Toggle Set', icon: '🔲' },
//       { id: 'cascade-select', label: 'Cascade Select', icon: '🎯' },
//       { id: 'checkbox-set', label: 'Checkbox Set', icon: '☑️' },
//       { id: 'dropdown', label: 'Dropdown', icon: '⬇️' },
//       { id: 'input-set', label: 'Input Set', icon: '⌨️' },
//       { id: 'otp-input-set', label: 'OTP Input Set', icon: '🔢' },
//       { id: 'pattern-input', label: 'Pattern Input', icon: '🔤' },
//       { id: 'picklist', label: 'Picklist', icon: '📝' },
//       { id: 'radio-set', label: 'Radio Set', icon: '🔘' },
//       { id: 'range-slider', label: 'Range Slider', icon: '🎚️' },
//       { id: 'rating', label: 'Rating', icon: '⭐' },
//       { id: 'switch', label: 'Switch', icon: '🔀' },
//       { id: 'transfer-list', label: 'Transfer List', icon: '↔️' },
//       { id: 'toggle-set', label: 'Toggle Set', icon: '🔘' },
//     ],
//   },
//   {
//     id: 'data',
//     label: 'data visualization',
//     icon: '📊',
//     children: [
//       { id: 'advanced-data-table', label: 'Advanced Table', icon: '📋' },
//       { id: 'bar-chart', label: 'Bar Chart', icon: '📊' },
//       { id: 'chart', label: 'Charts', icon: '📈' },
//       { id: 'knob', label: 'Knob', icon: '🎛️' },
//       { id: 'list-set', label: 'List Set', icon: '📝' },
//       { id: 'meter-group', label: 'Meter Group', icon: '📏' },
//       { id: 'progress-set', label: 'Progress Set', icon: '⏳' },
//       { id: 'speedometer', label: 'Speedometer', icon: '⏱️' },
//       { id: 'timeline', label: 'Timeline', icon: '📅' },
//       { id: 'timeline-set', label: 'Timeline Set', icon: '📅' },
//       { id: 'timer', label: 'Timer', icon: '⏲️' },
//       { id: 'tree-set', label: 'Tree Set', icon: '🌳' },
//       { id: 'tree-list', label: 'Tree List', icon: '🌳' },
//     ],
//   },
//   {
//     id: 'display',
//     label: ' Display',
//     icon: '📊',
//     children: [
//       { id: 'animate-on-scroll-set', label: 'Animate on Scroll Set', icon: '📜' },
//       { id: 'avatar', label: 'Avatar', icon: '👤' },
//       { id: 'avatar-set', label: 'Avatar Set', icon: '👤' },
//       { id: 'avatar-group', label: 'Avatar Group', icon: '👥' },
//       { id: 'avatar-group-set', label: 'Avatar Group Set', icon: '👥' },
//       { id: 'badge', label: 'Badge', icon: '🏷️' },
//       { id: 'carousel-set', label: 'Carousel Set', icon: '🎠' },
//       { id: 'chip', label: 'Chip', icon: '🏷️' },
//       { id: 'code-editor-set', label: 'Code Editor Set', icon: '💻' },
//       { id: 'dashboard-set', label: 'Dashboard Set', icon: '📊' },
//       { id: 'empty-state-set', label: 'Empty State Set', icon: '📭' },
//       { id: 'pill', label: 'Pill', icon: '💊' },
//       { id: 'smart-stepper', label: 'Smart Stepper', icon: '🪜' },
//       { id: 'stepper', label: 'Stepper', icon: '👣' },
//       { id: 'stepper-set', label: 'Stepper Set', icon: '🪜' },
//       { id: 'tags-input-set', label: 'Tags Input Set', icon: '🏷️' },
//       { id: 'theme-switcher-set', label: 'Theme Switcher Set', icon: '🌓' },
//     ],
//   },
//   {
//     id: 'overlays',
//     label: 'Feedback & Overlays',
//     icon: '💬',
//     children: [
//       { id: 'accordian', label: 'Accordian', icon: '📂' },
//       { id: 'aside', label: 'Aside Panel', icon: '📱' },
//       { id: 'context-menu-set', label: 'Context Menu Set', icon: '📋' },
//       { id: 'dialog', label: 'Dialog', icon: '💬' },
//       { id: 'layout-manager-set', label: 'Layout Manager Set', icon: '📐' },
//       { id: 'panel', label: 'Panel', icon: '🖼️' },
//       { id: 'popover', label: 'Popover', icon: '💭' },
//       { id: 'resizable-panel-set', label: 'Resizable Panel Set', icon: '📐' },
//       { id: 'skeleton', label: 'Skeleton', icon: '💀' },
//       { id: 'smart-menu', label: 'Smart Menu', icon: '🎯' },
//       { id: 'snackbar', label: 'Snackbar', icon: '📢' },
//       { id: 'tooltip-set', label: 'Tooltip Set', icon: '💬' },
//     ],
//   },
// ];

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

export const categoryNavItems: NavItem[] = [
  {
    id: 'layout',
    label: 'Foundation & Layout',
    icon: '🏗️',
    children: [
      { id: 'anchor-set', label: 'Anchor Set', icon: '⚓' },
      { id: 'card-set', label: 'Card Set', icon: '🃏' },
      
      { id: 'layout-manager-set', label: 'Layout Manager Set', icon: '📐' },
      { id: 'masonry-set', label: 'Masonry Set', icon: '🧱' },
 
      { id: 'splitter-set', label: 'Splitter Set', icon: '✂️' },
{ id: 'modern-sidebar-set', label: 'Modern Sidebar Set', icon: '📱' },
    { id: 'scroll-top-set', label: 'Scroll Top Set', icon: '⬆️' },
      { id: 'sidebar-set', label: 'Sidebar Set', icon: '📑' },
           { id: 'tabs-set', label: 'Tabs Set', icon: '📑' },
    ],
  },

  {
    id: 'inputs',
    label: 'Inputs & Forms',
    icon: '⌨️',
    children: [
   
      { id: 'button-toggle-set', label: 'Button Toggle Set', icon: '🔲' },
   
      { id: 'checkbox-set', label: 'Checkbox Set', icon: '☑️' },
    
      { id: 'input-set', label: 'Input Set', icon: '⌨️' },
      { id: 'otp-input-set', label: 'OTP Input Set', icon: '🔢' },
     
     
      { id: 'radio-set', label: 'Radio Set', icon: '🔘' },
  
      { id: 'toggle-set', label: 'Toggle Set', icon: '🔘' },
    ],
  },
  {
    id: 'data',
    label: 'data visualization',
    icon: '📊',
    children: [
   
      { id: 'list-set', label: 'List Set', icon: '📝' },

      { id: 'progress-set', label: 'Progress Set', icon: '⏳' },
  
      { id: 'timeline-set', label: 'Timeline Set', icon: '📅' },

      { id: 'tree-set', label: 'Tree Set', icon: '🌳' },

    ],
  },
  {
    id: 'display',
    label: ' Display',
    icon: '📊',
    children: [
      { id: 'animate-on-scroll-set', label: 'Animate on Scroll Set', icon: '📜' },
   
      { id: 'avatar-set', label: 'Avatar Set', icon: '👤' },
     
      { id: 'avatar-group-set', label: 'Avatar Group Set', icon: '👥' },
     
      { id: 'carousel-set', label: 'Carousel Set', icon: '🎠' },
      { id: 'chip', label: 'Chip', icon: '🏷️' },
      { id: 'code-editor-set', label: 'Code Editor Set', icon: '💻' },
      { id: 'dashboard-set', label: 'Dashboard Set', icon: '📊' },
      { id: 'empty-state-set', label: 'Empty State Set', icon: '📭' },
       { id: 'stepper-set', label: 'Stepper Set', icon: '🪜' },
      { id: 'tags-input-set', label: 'Tags Input Set', icon: '🏷️' },
      { id: 'theme-switcher-set', label: 'Theme Switcher Set', icon: '🌓' },
      { id: 'tooltip-set', label: 'Tooltip Set', icon: '💬' },
           { id: 'resizable-panel-set', label: 'Resizable Panel Set', icon: '📐' },
                 { id: 'context-menu-set', label: 'Context Menu Set', icon: '📋' },
    
      { id: 'layout-manager-set', label: 'Layout Manager Set', icon: '📐' },
    ],
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
