export interface NavItem {
  id: string;
  label: string;
  icon?: string;
  badge?: string;
  status?: string;
  iconLibrary?: string; // e.g., 'lucide', 'font-awesome', etc.
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
    icon: '🔍',
  },
  {
    id: 'documentation',
    label: 'Documentation',
    icon: '📖',
  },
  {
    id: 'showroom',
    label: 'Showroom',
    icon: '🏢',
  },
  {
    id: 'login',
    label: 'Login',
    icon: '🔑',
  },
];

export const categoryNavItems: NavItem[] = [
  {
    id: 'wip',
    label: 'Work in Progress',
    icon: '🚧',
    children: [
      { id: 'dock-host', label: 'Dock Host', icon: '🐳' },
      { id: 'horizontal-nav', label: 'Horizontal Nav', icon: '🛶' },
      { id: 'nav-bar', label: 'Nav Bar', icon: '🧭' },
      { id: 'scroll-top-set', label: 'Scroll Top Set', icon: '🚀' },
      { id: 'pagination', label: 'Pagination', icon: '📑' },
    ],
  },
  {
    id: 'charts',
    label: 'Charts',
    icon: '📈',
    children: [
      { id: 'bar-chart', label: 'Bar Chart', icon: '📉' },
      { id: 'line-chart', label: 'Line Chart', icon: '💹' },
      { id: 'pie-chart', label: 'Pie Chart', icon: '🥧' },
      { id: 'donut-chart', label: 'Donut Chart', icon: '🍩' },
      { id: 'area-chart', label: 'Area Chart', icon: '🏔️' },
    ],
  },

  {
    id: 'layout',
    label: 'Foundation & Layout',
    icon: 'layout-dashboard',
    iconLibrary: 'lucide',
    children: [
      { id: 'card', label: 'Card', icon: '🃏' },
      { id: 'card-set', label: 'Card Set', icon: '🎴' },
      { id: 'divider', label: 'Divider', icon: '➖' },
      { id: 'dock', label: 'Dock', icon: '⚓' },
      // { id: 'dock-host', label: 'Dock Host', icon: '🏠' },  not working as of now//
      { id: 'layout-manager', label: 'Layout Manager', badge: '✨', icon: '📐' },
      { id: 'layout-manager-set', label: 'Layout Manager Set', icon: '📏' },
      { id: 'masonry-set', label: 'Masonry Set', icon: '🧱' },
      { id: 'splitter-set', label: 'Splitter Set', icon: '✂️' },
      { id: 'stack', label: 'Stack', icon: '📚' },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    icon: '🗺️',
    children: [
      { id: 'anchor', label: 'Anchor', icon: '🔗' },
      { id: 'anchor-set', label: 'Anchor Set', icon: '🖇️' },
      { id: 'breadcrumb', label: 'Breadcrumb', icon: '🍞' },
      { id: 'context-menu', label: 'Context Menu', icon: '🖱️' },
      { id: 'modern-sidebar-set', label: 'Modern Sidebar Set', icon: '📱' },
      { id: 'scroll-top', label: 'Scroll Top', icon: '⏫' },
      { id: 'sidebar-set', label: 'Sidebar Set', icon: '🗂️' },
      { id: 'speed-dial', label: 'Speed Dial', icon: '⚡' },
      { id: 'tabs', label: 'Tabs', icon: '📁' },
      { id: 'tabs-set', label: 'Tabs Set', icon: '📂' },
      { id: 'top-bar', label: 'Top Bar', icon: '🔝' },
    ],
  },
  {
    id: 'inputs',
    label: 'Inputs & Forms',
    icon: '⌨️',
    children: [
      { id: 'button', label: 'Button', icon: '🔘' },
      // { id: 'button-group', label: 'Button Group', icon: '🔲' },
      { id: 'button-toggle-set', label: 'Button Toggle Set', icon: '🔲' },
      { id: 'cascade-select', label: 'Cascade Select', icon: '🎯' },
      { id: 'checkbox-set', label: 'Checkbox Set', icon: '☑️' },
      { id: 'dropdown', label: 'Dropdown', icon: '⏬' },
      { id: 'input-set', label: 'Input Set', icon: '🖊️' },
      { id: 'otp-input-set', label: 'OTP Input Set', icon: '🔢' },
      { id: 'pattern-input', label: 'Pattern Input', icon: '🔤' },
      { id: 'picklist', label: 'Picklist', icon: '📝' },
      { id: 'radio-set', label: 'Radio Set', icon: '📻' },
      { id: 'range-slider', label: 'Range Slider', icon: '🎚️' },
      { id: 'rating', label: 'Rating', icon: '⭐' },
      { id: 'switch', label: 'Switch', icon: '🔀' },
      { id: 'transfer-list', label: 'Transfer List', icon: '🔄' },
      { id: 'toggle-set', label: 'Toggle Set', icon: '🚥' },
    ],
  },
  {
    id: 'data',
    label: 'data visualization',
    icon: '🗃️',
    children: [
      { id: 'advanced-data-table', label: 'Advanced Table', icon: '🗄️' },
      { id: 'bar-chart', label: 'Bar Chart', icon: '📶' },
      { id: 'chart', label: 'Charts', icon: '📊' },
      { id: 'knob', label: 'Knob', icon: '🎛️' },
      { id: 'list-set', label: 'List Set', icon: '📜' },
      { id: 'meter-group', label: 'Meter Group', icon: '🌡️' },
      { id: 'progress-set', label: 'Progress Set', icon: '⏳' },
      { id: 'speedometer', label: 'Speedometer', icon: '⏱️' },
      { id: 'timeline', label: 'Timeline', icon: '📅' },
      { id: 'timeline-set', label: 'Timeline Set', icon: '📆' },
      { id: 'timer', label: 'Timer', icon: '⏲️' },
      { id: 'tree-set', label: 'Tree Set', icon: '🌳' },
      { id: 'tree-list', label: 'Tree List', icon: '🌲' },
    ],
  },
  {
    id: 'display',
    label: ' Display',
    icon: '📺',
    children: [
      { id: 'animate-on-scroll-set', label: 'Animate on Scroll Set', icon: '🎬' },
      { id: 'avatar', label: 'Avatar', icon: '👤' },
      { id: 'avatar-set', label: 'Avatar Set', icon: '🧑' },
      { id: 'avatar-group', label: 'Avatar Group', icon: '👥' },
      { id: 'avatar-group-set', label: 'Avatar Group Set', icon: '👨‍👩‍👧‍👦' },
      { id: 'badge', label: 'Badge', icon: '📛' },
      { id: 'carousel-set', label: 'Carousel Set', icon: '🎠' },
      { id: 'chip', label: 'Chip', icon: '🎫' },
      { id: 'code-editor-set', label: 'Code Editor Set', icon: '💻' },
      { id: 'dashboard-set', label: 'Dashboard Set', icon: '🖥️' },
      { id: 'empty-state-set', label: 'Empty State Set', icon: '📭' },
      { id: 'pill', label: 'Pill', icon: '💊' },
      { id: 'smart-stepper', label: 'Smart Stepper', icon: '🪜' },
      { id: 'stepper', label: 'Stepper', icon: '👣' },
      { id: 'stepper-set', label: 'Stepper Set', icon: '🧗' },
      { id: 'tags-input-set', label: 'Tags Input Set', icon: '🔖' },
      { id: 'theme-switcher-set', label: 'Theme Switcher Set', icon: '🌓' },
    ],
  },
  {
    id: 'overlays',
    label: 'Feedback & Overlays',
    icon: '💬',
    children: [
      { id: 'accordian', label: 'Accordian', icon: '🪗' },
      { id: 'aside', label: 'Aside Panel', icon: '📴' },
      { id: 'context-menu-set', label: 'Context Menu Set', icon: '📑' },
      { id: 'dialog', label: 'Dialog', icon: '🗣️' },
      { id: 'layout-manager-set', label: 'Layout Manager Set', icon: '🏗️' },
      { id: 'panel', label: 'Panel', icon: '🖼️' },
      { id: 'popover', label: 'Popover', icon: '💭' },
      { id: 'resizable-panel-set', label: 'Resizable Panel Set', icon: '🎞️' },
      { id: 'skeleton', label: 'Skeleton', icon: '💀' },
      { id: 'smart-menu', label: 'Smart Menu', icon: '💡' },
      { id: 'snackbar', label: 'Snackbar', icon: '📢' },
      { id: 'tooltip-set', label: 'Tooltip Set', icon: '🗯️' },
    ],
  },
  {
    id: 'navigation1',
    label: 'Navigation',
    icon: 'navigation-2',
    iconLibrary: 'lucide',
    children: [
      { id: 'anchor', label: 'Anchor', icon: 'link', iconLibrary: 'lucide' },
      { id: 'breadcrumb', label: 'Breadcrumb', icon: 'chevron-right', iconLibrary: 'lucide' },
      { id: 'context-menu', label: 'Context Menu', icon: 'menu-square', iconLibrary: 'lucide' },
      {
        id: 'horizontal-nav',
        label: 'Horizontal Nav',
        icon: 'more-horizontal',
        iconLibrary: 'lucide',
      },
      { id: 'nav-bar', label: 'Nav Bar', icon: 'navigation', iconLibrary: 'lucide' },
      { id: 'pagination', label: 'Pagination', icon: 'pager', iconLibrary: 'lucide' },
      { id: 'scroll-top', label: 'Scroll Top', icon: 'arrow-up', iconLibrary: 'lucide' },
      { id: 'smart-menu', label: 'Smart Menu', icon: 'zap', iconLibrary: 'lucide' },
      { id: 'smart-stepper', label: 'Smart Stepper', icon: 'list-checks', iconLibrary: 'lucide' },
      { id: 'speed-dial', label: 'Speed Dial', icon: 'plus-circle', iconLibrary: 'lucide' },
      { id: 'stepper', label: 'Stepper', icon: 'list', iconLibrary: 'lucide' },
      { id: 'tabs', label: 'Tabs', icon: 'panels-top-left', iconLibrary: 'lucide' },
      { id: 'top-bar', label: 'Top Bar', icon: 'layout-template', iconLibrary: 'lucide' },
      { id: 'anchor', label: 'Anchor', icon: 'link-2', iconLibrary: 'lucide' },
      { id: 'breadcrumb', label: 'Breadcrumb', icon: 'chevrons-right', iconLibrary: 'lucide' },
      {
        id: 'context-menu',
        label: 'Context Menu',
        icon: 'mouse-pointer-click',
        iconLibrary: 'lucide',
      },
      {
        id: 'horizontal-nav',
        label: 'Horizontal Nav',
        icon: 'git-commit',
        iconLibrary: 'lucide',
      },
      { id: 'nav-bar', label: 'Nav Bar', icon: 'compass', iconLibrary: 'lucide' },
      { id: 'pagination', label: 'Pagination', icon: 'book-open', iconLibrary: 'lucide' },
      { id: 'scroll-top', label: 'Scroll Top', icon: 'arrow-up-circle', iconLibrary: 'lucide' },
      { id: 'smart-menu', label: 'Smart Menu', icon: 'lightbulb', iconLibrary: 'lucide' },
      { id: 'smart-stepper', label: 'Smart Stepper', icon: 'check-square', iconLibrary: 'lucide' },
      { id: 'speed-dial', label: 'Speed Dial', icon: 'zap-fast', iconLibrary: 'lucide' },
      { id: 'stepper', label: 'Stepper', icon: 'list-ordered', iconLibrary: 'lucide' },
      { id: 'tabs', label: 'Tabs', icon: 'folder-open', iconLibrary: 'lucide' },
      { id: 'top-bar', label: 'Top Bar', icon: 'monitor-up', iconLibrary: 'lucide' },
    ],
  },
];

export const userProfileNavItems: NavItem[] = [
  { id: 'about', label: 'About', icon: 'info', iconLibrary: 'lucide' },
  {
    id: 'user-profile1',
    label: 'Praveen Doe',
    status: 'away',
    icon: 'user',
    iconLibrary: 'lucide',
    children: [
      { id: 'my-profile', label: 'My Profile', icon: 'circle-user', iconLibrary: 'lucide' },
      {
        id: 'account-settings',
        label: 'Account Settings',
        icon: 'settings-2',
        iconLibrary: 'lucide',
      },
      { id: 'privacy', label: 'Privacy & Security', icon: 'shield-check', iconLibrary: 'lucide' },
      { id: 'notifications', label: 'Notifications', icon: 'bell-ring', iconLibrary: 'lucide' },
      { id: 'logout', label: 'Logout', icon: 'log-out', iconLibrary: 'lucide' },
    ],
  },
  {
    id: 'user-profile',
    label: 'John Doe',
    status: 'away',
    icon: 'users',
    iconLibrary: 'lucide',
    children: [
      {
        id: 'user-profile',
        label: 'John Doe',
        status: 'away',
        icon: 'user-cog',
        iconLibrary: 'lucide',
        children: [
          { id: 'my-profile', label: 'My Profile', icon: 'contact', iconLibrary: 'lucide' },
          {
            id: 'account-settings',
            label: 'Account Settings',
            icon: 'sliders',
            iconLibrary: 'lucide',
          },
          { id: 'privacy', label: 'Privacy & Security', icon: 'lock', iconLibrary: 'lucide' },
          { id: 'notifications', label: 'Notifications', icon: 'bell-dot', iconLibrary: 'lucide' },
          { id: 'logout', label: 'Logout', icon: 'power', iconLibrary: 'lucide' },
        ],
      },
    ],
  },
];

export const bottomNavItems: NavItem[] = [
  {
    id: 'user-management',
    label: 'User Management',
    icon: '🧑‍💼',
    badge: 'New',
  },

  {
    id: 'settings',
    label: 'Settings',
    badge: '1',
    icon: '🎛️',
  },
  // {
  //   id: 'support',
  //   label: 'Support',
  //   icon: '❓',
  // },
];

// export const bottomSecondaryItems: NavItem[] = [
//   {
//     id: 'about',
//     label: 'About',
//     icon: 'ℹ️',
//   },
// ];

// export const categoryNavItems: NavItem[] = [
//   {
//     id: 'Working',
//     label: 'Foundation & Layout',
//     icon: '🏗️',
//     children: [
//       { id: 'tree-set', label: 'Tree Set', icon: '🌳' },
//       { id: 'avatar-set', label: 'Avatar Set', icon: '👤' },
//       { id: 'empty-state-set', label: 'Empty State Set', icon: '📭' },
//       { id: 'checkbox-set', label: 'Checkbox Set', icon: '☑️' },
//       { id: 'input-set', label: 'Input Set', icon: '⌨️' },
//       { id: 'radio-set', label: 'Radio Set', icon: '🔘' },
//       { id: 'button-toggle-set', label: 'Button Toggle Set', icon: '🔲' },
//       { id: 'tooltip-set', label: 'Tooltip Set', icon: '💬' },
//       { id: 'list-set', label: 'List Set', icon: '📝' },
//       { id: 'timeline-set', label: 'Timeline Set', icon: '📅' },
//       { id: 'anchor-set', label: 'Anchor Set', icon: '⚓' },
//        { id: 'carousel-set', label: 'Carousel Set', icon: '🎠' },
//        { id: 'tags-input-set', label: 'Tags Input Set', icon: '🏷️' },
//           { id: 'avatar-group-set', label: 'Avatar Group Set', icon: '👥' },
//     ],
//   },

//   {
//     id: 'layout',
//     label: 'Foundation & Layout',
//     icon: '🏗️',
//     children: [
//       { id: 'card-set', label: 'Card Set', icon: '🃏' },
//       { id: 'layout-manager-set', label: 'Layout Manager Set', icon: '📐' },
//       { id: 'masonry-set', label: 'Masonry Set', icon: '🧱' },
//       { id: 'splitter-set', label: 'Splitter Set', icon: '✂️' },
//       { id: 'modern-sidebar-set', label: 'Modern Sidebar Set', icon: '📱' },
//       { id: 'scroll-top-set', label: 'Scroll Top Set', icon: '⬆️' },

//     ],
//   },

//   {
//     id: 'inputs',
//     label: 'Inputs & Forms',
//     icon: '⌨️',
//     children: [
//       { id: 'otp-input-set', label: 'OTP Input Set', icon: '🔢' },
//          { id: 'toggle-set', label: 'Toggle Set', icon: '🔘' },
//     ],
//   },
//   {
//     id: 'data',
//     label: 'Data Visualization',
//     icon: '📊',
//     children: [{ id: 'progress-set', label: 'Progress Set', icon: '⏳' }],
//   },
//   {
//     id: 'display',
//     label: 'Display & Presentation',
//     icon: '🎨',
//     children: [
//       { id: 'animate-on-scroll-set', label: 'Animate on Scroll Set', icon: '📜' },
//       { id: 'code-editor-set', label: 'Code Editor Set', icon: '💻' },
//       { id: 'dashboard-set', label: 'Dashboard Set', icon: '📊' },
//           { id: 'theme-switcher-set', label: 'Theme Switcher Set', icon: '🌓' },
//     ],
//   },
//   {
//     id: 'overlays',
//     label: 'Feedback & Overlays',
//     icon: '💬',
//     children: [

//        { id: 'stepper-set', label: 'Stepper Set', icon: '🪜' },
//       { id: 'context-menu-set', label: 'Context Menu Set', icon: '📋' },
//       { id: 'resizable-panel-set', label: 'Resizable Panel Set', icon: '📐' },
//       { id: 'tooltip-set', label: 'Tooltip Set', icon: '💬' },
//         { id: 'tabs-set', label: 'Tabs Set', icon: '📑' },
//     ],
//   },
// ];

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
  // addItems(bottomSecondaryItems);

  return allItems;
}
