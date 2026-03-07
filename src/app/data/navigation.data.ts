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
    icon: 'house',
    iconLibrary: 'lucide',
  },
  {
    id: 'overview',
    label: 'Overview',
    icon: 'search',
    iconLibrary: 'lucide',
  },
  {
    id: 'documentation',
    label: 'Documentation',
    icon: 'book-open',
    iconLibrary: 'lucide',
  },
  {
    id: 'showroom',
    label: 'Showroom',
    icon: 'building-2',
    iconLibrary: 'lucide',
  },
];

export const categoryNavItems: NavItem[] = [
  // {
  //   id: 'Duplicate',
  //   label: 'Duplicate',
  //   icon: 'navigation-2',
  //   iconLibrary: 'lucide',
  //   children: [
  //     { id: 'bar-chart', label: 'Bar Chart', icon: 'bar-chart-2', iconLibrary: 'lucide' },
  //     { id: 'line-chart', label: 'Line Chart', icon: 'line-chart', iconLibrary: 'lucide' },
  //     { id: 'pie-chart', label: 'Pie Chart', icon: 'pie-chart', iconLibrary: 'lucide' },
  //     { id: 'waffle-chart', label: 'Waffle Chart', icon: 'grid-2x2', iconLibrary: 'lucide' },
  //     { id: 'donut-chart', label: 'Donut Chart', icon: 'donut', iconLibrary: 'lucide' },
  //     { id: 'charts/area-chart', label: 'Area Chart', icon: 'area-chart', iconLibrary: 'lucide' },
  //     {
  //       id: 'charts/timeline-range',
  //       label: 'Timeline Range',
  //       icon: 'calendar-range',
  //       iconLibrary: 'lucide',
  //     },
  //     { id: 'charts/sparkline', label: 'Sparkline', icon: 'activity', iconLibrary: 'lucide' },
  //     { id: 'charts/radial-bar', label: 'Radial Bar', icon: 'target', iconLibrary: 'lucide' },
  //     {
  //       id: 'charts/gantt-chart',
  //       label: 'Gantt Chart',
  //       icon: 'gantt-chart',
  //       iconLibrary: 'lucide',
  //     },
  //     { id: 'charts/step-line-chart', label: 'Step Line', icon: 'stairs', iconLibrary: 'lucide' },
  //     { id: 'charts/waterfall-chart', label: 'Waterfall', icon: 'waves', iconLibrary: 'lucide' },
  //     { id: 'charts/funnel-chart', label: 'Funnel Chart', icon: 'filter', iconLibrary: 'lucide' },
  //     { id: 'charts/rose-chart', label: 'Rose Chart', icon: 'flower-2', iconLibrary: 'lucide' },
  //     { id: 'charts/lollipop-chart', label: 'Lollipop', icon: 'circle-dot', iconLibrary: 'lucide' },
  //     { id: 'charts/polar-area-chart', label: 'Polar Area', icon: 'radar', iconLibrary: 'lucide' },
  //     {
  //       id: 'charts/candlestick-chart',
  //       label: 'Candlestick',
  //       icon: 'candlestick-chart',
  //       iconLibrary: 'lucide',
  //     },
  //     { id: 'charts/ohlc-chart', label: 'OHLC Chart', icon: 'bar-chart-4', iconLibrary: 'lucide' },
  //     { id: 'charts/tree-diagram', label: 'Tree Diagram', icon: 'network', iconLibrary: 'lucide' },
  //     { id: 'anchor', label: 'Anchor', icon: 'link', iconLibrary: 'lucide' },
  //     { id: 'breadcrumb', label: 'Breadcrumb', icon: 'chevron-right', iconLibrary: 'lucide' },
  //     { id: 'context-menu', label: 'Context Menu', icon: 'menu-square', iconLibrary: 'lucide' },
  //     {
  //       id: 'horizontal-nav',
  //       label: 'Horizontal Nav',
  //       icon: 'more-horizontal',
  //       iconLibrary: 'lucide',
  //     },
  //     { id: 'nav-bar', label: 'Nav Bar', icon: 'navigation', iconLibrary: 'lucide' },
  //     { id: 'scroll-top', label: 'Scroll Top', icon: 'arrow-up', iconLibrary: 'lucide' },
  //     { id: 'smart-menu', label: 'Smart Menu', icon: 'zap', iconLibrary: 'lucide' },
  //     { id: 'smart-stepper', label: 'Smart Stepper', icon: 'list-checks', iconLibrary: 'lucide' },
  //     { id: 'speed-dial', label: 'Speed Dial', icon: 'plus-circle', iconLibrary: 'lucide' },
  //     { id: 'stepper', label: 'Stepper', icon: 'list', iconLibrary: 'lucide' },
  //     { id: 'tabs', label: 'Tabs', icon: 'panels-top-left', iconLibrary: 'lucide' },
  //     { id: 'top-bar', label: 'Top Bar', icon: 'layout-template', iconLibrary: 'lucide' },
  //   ],
  // },
  {
    id: 'charts',
    label: 'Charts',
    icon: 'bar-chart',
    iconLibrary: 'lucide',
    children: [
      { id: 'bar-chart', label: 'Bar Chart', icon: 'bar-chart', iconLibrary: 'lucide' },
      { id: 'line-chart', label: 'Line Chart', icon: 'line-chart', iconLibrary: 'lucide' },
      { id: 'pie-chart', label: 'Pie Chart', icon: 'pie-chart', iconLibrary: 'lucide' },
      { id: 'waffle-chart', label: 'Waffle Chart', icon: 'grid-2x2', iconLibrary: 'lucide' },
      { id: 'donut-chart', label: 'Donut Chart', icon: 'pie-chart', iconLibrary: 'lucide' },
      { id: 'charts/area-chart', label: 'Area Chart', icon: 'area-chart', iconLibrary: 'lucide' },
      {
        id: 'charts/timeline-range',
        label: 'Timeline Range',
        icon: 'calendar-range',
        iconLibrary: 'lucide',
      },
      { id: 'charts/sparkline', label: 'Sparkline', icon: 'activity', iconLibrary: 'lucide' },
      { id: 'charts/radial-bar', label: 'Radial Bar', icon: 'target', iconLibrary: 'lucide' },
      {
        id: 'charts/gantt-chart',
        label: 'Gantt Chart',
        icon: 'gantt-chart',
        iconLibrary: 'lucide',
      },
      {
        id: 'charts/step-line-chart',
        label: 'Step Line',
        icon: 'trending-up',
        iconLibrary: 'lucide',
      },
      { id: 'charts/waterfall-chart', label: 'Waterfall', icon: 'waves', iconLibrary: 'lucide' },
      { id: 'charts/funnel-chart', label: 'Funnel Chart', icon: 'filter', iconLibrary: 'lucide' },
      { id: 'charts/rose-chart', label: 'Rose Chart', icon: 'flower-2', iconLibrary: 'lucide' },
      { id: 'charts/lollipop-chart', label: 'Lollipop', icon: 'circle-dot', iconLibrary: 'lucide' },
      { id: 'charts/polar-area-chart', label: 'Polar Area', icon: 'radar', iconLibrary: 'lucide' },
      {
        id: 'charts/candlestick-chart',
        label: 'Candlestick',
        icon: 'candlestick-chart',
        iconLibrary: 'lucide',
      },
      { id: 'charts/ohlc-chart', label: 'OHLC Chart', icon: 'bar-chart-4', iconLibrary: 'lucide' },
      { id: 'charts/tree-diagram', label: 'Tree Diagram', icon: 'network', iconLibrary: 'lucide' },
    ],
  },

  {
    id: 'layout',
    label: 'Foundation & Layout',
    icon: 'layout-dashboard',
    iconLibrary: 'lucide',
    children: [
      { id: 'card', label: 'Card', icon: 'credit-card', iconLibrary: 'lucide' },
      { id: 'card-set', label: 'Card Set', icon: 'layers', iconLibrary: 'lucide' },
      { id: 'divider', label: 'Divider', icon: 'minus', iconLibrary: 'lucide' },
      { id: 'dock', label: 'Dock', icon: 'anchor', iconLibrary: 'lucide' },
      // { id: 'dock-host', label: 'Dock Host' },  not working as of now//
      {
        id: 'layout-manager',
        label: 'Layout Manager',
        badge: '✨',
        icon: 'layout-panel-top',
        iconLibrary: 'lucide',
      },
      {
        id: 'layout-manager-set',
        label: 'Layout Manager Set',
        icon: 'layout-dashboard',
        iconLibrary: 'lucide',
      },
      { id: 'masonry-set', label: 'Masonry Set', icon: 'wall', iconLibrary: 'lucide' },
      {
        id: 'splitter-set',
        label: 'Splitter Set',
        icon: 'split-square-horizontal',
        iconLibrary: 'lucide',
      },
      { id: 'stack', label: 'Stack', icon: 'layers-2', iconLibrary: 'lucide' },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    icon: 'map',
    iconLibrary: 'lucide',
    children: [
      { id: 'anchor', label: 'Anchor', icon: 'link', iconLibrary: 'lucide' },
      { id: 'anchor-set', label: 'Anchor Set', icon: 'link-2', iconLibrary: 'lucide' },
      { id: 'breadcrumb', label: 'Breadcrumb', icon: 'chevrons-right', iconLibrary: 'lucide' },
      {
        id: 'context-menu',
        label: 'Context Menu',
        icon: 'mouse-pointer-click',
        iconLibrary: 'lucide',
      },
      {
        id: 'modern-sidebar-set',
        label: 'Modern Sidebar Set',
        icon: 'panel-left',
        iconLibrary: 'lucide',
      },
      { id: 'scroll-top', label: 'Scroll Top', icon: 'arrow-up-circle', iconLibrary: 'lucide' },
      { id: 'sidebar-set', label: 'Sidebar Set', icon: 'panel-right', iconLibrary: 'lucide' },
      { id: 'speed-dial', label: 'Speed Dial', icon: 'zap', iconLibrary: 'lucide' },
      { id: 'tabs', label: 'Tabs', icon: 'folder', iconLibrary: 'lucide' },
      { id: 'tabs-set', label: 'Tabs Set', icon: 'folder-open', iconLibrary: 'lucide' },
      { id: 'top-bar', label: 'Top Bar', icon: 'layout-template', iconLibrary: 'lucide' },
    ],
  },
  {
    id: 'inputs',
    label: 'Inputs & Forms',
    icon: 'keyboard',
    iconLibrary: 'lucide',
    children: [
      { id: 'button', label: 'Button', icon: 'square', iconLibrary: 'lucide' },
      // { id: 'button-group', label: 'Button Group' },
      {
        id: 'button-toggle-set',
        label: 'Button Toggle Set',
        icon: 'toggle-left',
        iconLibrary: 'lucide',
      },
      { id: 'cascade-select', label: 'Cascade Select', icon: 'target', iconLibrary: 'lucide' },
      { id: 'checkbox-set', label: 'Checkbox Set', icon: 'check-square', iconLibrary: 'lucide' },
      { id: 'dropdown', label: 'Dropdown', icon: 'chevron-down-square', iconLibrary: 'lucide' },
      { id: 'input-set', label: 'Input Set', icon: 'pencil', iconLibrary: 'lucide' },
      { id: 'label-set', label: 'Label Set', icon: 'tag', iconLibrary: 'lucide' },
      { id: 'otp-input-set', label: 'OTP Input Set', icon: 'hash', iconLibrary: 'lucide' },
      { id: 'pattern-input', label: 'Pattern Input', icon: 'regex', iconLibrary: 'lucide' },
      { id: 'picklist', label: 'Picklist', icon: 'list-checks', iconLibrary: 'lucide' },
      { id: 'radio-set', label: 'Radio Set', icon: 'radio', iconLibrary: 'lucide' },
      { id: 'range-slider', label: 'Range Slider', icon: 'sliders', iconLibrary: 'lucide' },
      { id: 'rating', label: 'Rating', icon: 'star', iconLibrary: 'lucide' },
      { id: 'switch', label: 'Switch', icon: 'toggle-right', iconLibrary: 'lucide' },
      {
        id: 'transfer-list',
        label: 'Transfer List',
        icon: 'arrow-left-right',
        iconLibrary: 'lucide',
      },
      { id: 'toggle-set', label: 'Toggle Set', icon: 'toggle-left', iconLibrary: 'lucide' },
    ],
  },
  {
    id: 'data',
    label: 'Data Visualization',
    icon: 'database',
    iconLibrary: 'lucide',
    children: [
      {
        id: 'advanced-data-table',
        label: 'Advanced Table',
        icon: 'table-2',
        iconLibrary: 'lucide',
      },
      { id: 'pagination', label: 'Pagination', icon: 'book-copy', iconLibrary: 'lucide' },
      // { id: 'bar-chart', label: 'Bar Chart', icon: 'bar-chart-2', iconLibrary: 'lucide' },
      // { id: 'line-chart', label: 'Line Chart', icon: 'line-chart', iconLibrary: 'lucide' },
      // { id: 'pie-chart', label: 'Pie Chart', icon: 'pie-chart', iconLibrary: 'lucide' },
      // { id: 'waffle-chart', label: 'Waffle Chart', icon: 'grid-2x2', iconLibrary: 'lucide' },
      // { id: 'chart', label: 'Charts', icon: 'bar-chart-4', iconLibrary: 'lucide' },
      { id: 'knob', label: 'Knob', icon: 'gauge', iconLibrary: 'lucide' },
      { id: 'list-set', label: 'List Set', icon: 'list', iconLibrary: 'lucide' },
      { id: 'meter-group', label: 'Meter Group', icon: 'thermometer', iconLibrary: 'lucide' },
      { id: 'progress-set', label: 'Progress Set', icon: 'loader', iconLibrary: 'lucide' },
      { id: 'speedometer', label: 'Speedometer', icon: 'gauge-circle', iconLibrary: 'lucide' },
      { id: 'timeline', label: 'Timeline', icon: 'calendar', iconLibrary: 'lucide' },
      { id: 'timeline-set', label: 'Timeline Set', icon: 'calendar-days', iconLibrary: 'lucide' },
      { id: 'timer', label: 'Timer', icon: 'timer', iconLibrary: 'lucide' },
      { id: 'tree-set', label: 'Tree Set', icon: 'network', iconLibrary: 'lucide' },
      { id: 'tree-list', label: 'Tree List', icon: 'git-branch', iconLibrary: 'lucide' },
    ],
  },
  {
    id: 'display',
    label: 'Display',
    icon: 'monitor',
    iconLibrary: 'lucide',
    children: [
      {
        id: 'animate-on-scroll-set',
        label: 'Animate on Scroll Set',
        icon: 'video',
        iconLibrary: 'lucide',
      },
      { id: 'avatar', label: 'Avatar', icon: 'user-circle', iconLibrary: 'lucide' },
      { id: 'avatar-set', label: 'Avatar Set', icon: 'user', iconLibrary: 'lucide' },
      { id: 'avatar-group', label: 'Avatar Group', icon: 'users', iconLibrary: 'lucide' },
      { id: 'avatar-group-set', label: 'Avatar Group Set', icon: 'users-2', iconLibrary: 'lucide' },
      { id: 'badge', label: 'Badge', icon: 'badge', iconLibrary: 'lucide' },
      { id: 'carousel-set', label: 'Carousel Set', icon: 'image-play', iconLibrary: 'lucide' },
      { id: 'chip', label: 'Chip', icon: 'tag', iconLibrary: 'lucide' },
      { id: 'code-editor-set', label: 'Code Editor Set', icon: 'code-2', iconLibrary: 'lucide' },
      {
        id: 'dashboard-set',
        label: 'Dashboard Set',
        icon: 'layout-dashboard',
        iconLibrary: 'lucide',
      },
      { id: 'empty-state-set', label: 'Empty State Set', icon: 'inbox', iconLibrary: 'lucide' },
      { id: 'pill', label: 'Pill', icon: 'pill', iconLibrary: 'lucide' },
      { id: 'smart-stepper', label: 'Smart Stepper', icon: 'trending-up', iconLibrary: 'lucide' },
      { id: 'stepper', label: 'Stepper', icon: 'footprints', iconLibrary: 'lucide' },
      { id: 'stepper-set', label: 'Stepper Set', icon: 'list-ordered', iconLibrary: 'lucide' },
      { id: 'tags-input-set', label: 'Tags Input Set', icon: 'tags', iconLibrary: 'lucide' },
      {
        id: 'theme-switcher-set',
        label: 'Theme Switcher Set',
        icon: 'sun-moon',
        iconLibrary: 'lucide',
      },
    ],
  },
  {
    id: 'overlays',
    label: 'Feedback & Overlays',
    icon: 'message-circle',
    iconLibrary: 'lucide',
    children: [
      { id: 'accordian', label: 'Accordian', icon: 'chevrons-down-up', iconLibrary: 'lucide' },
      { id: 'aside', label: 'Aside Panel', icon: 'panel-right-close', iconLibrary: 'lucide' },
      { id: 'context-menu-set', label: 'Context Menu Set', icon: 'book', iconLibrary: 'lucide' },
      { id: 'dialog', label: 'Dialog', icon: 'message-square', iconLibrary: 'lucide' },
      {
        id: 'layout-manager-set',
        label: 'Layout Manager Set',
        icon: 'layout-panel-left',
        iconLibrary: 'lucide',
      },
      { id: 'panel', label: 'Panel', icon: 'frame', iconLibrary: 'lucide' },
      { id: 'popover', label: 'Popover', icon: 'message-circle', iconLibrary: 'lucide' },
      {
        id: 'resizable-panel-set',
        label: 'Resizable Panel Set',
        icon: 'move-horizontal',
        iconLibrary: 'lucide',
      },
      { id: 'skeleton', label: 'Skeleton', icon: 'loader-circle', iconLibrary: 'lucide' },
      { id: 'smart-menu', label: 'Smart Menu', icon: 'lightbulb', iconLibrary: 'lucide' },
      { id: 'snackbar', label: 'Snackbar', icon: 'bell', iconLibrary: 'lucide' },
      { id: 'tooltip-set', label: 'Tooltip Set', icon: 'help-circle', iconLibrary: 'lucide' },
    ],
  },
  {
    id: 'mega-menu',
    label: 'Mega Menu (50 Items)',
    icon: 'layers',
    iconLibrary: 'lucide',
    children: Array.from({ length: 50 }).map((_, i) => ({
      id: `mega-item-${i + 1}`,
      label: `Mega Item ${i + 1}`,
      icon: 'star',
      iconLibrary: 'lucide',
    })),
  },
];

export const userProfileNavItems: NavItem[] = [
  { id: 'about', label: 'About', icon: 'info', iconLibrary: 'lucide' },
  {
    id: 'user-profile-praveen',
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
    id: 'user-profile-john',
    label: 'John Doe',
    status: 'away',
    icon: 'users',
    iconLibrary: 'lucide',
    children: [
      { id: 'my-profile-john', label: 'John Profile', icon: 'contact', iconLibrary: 'lucide' },
      {
        id: 'account-settings-john',
        label: 'Account Settings',
        icon: 'sliders',
        iconLibrary: 'lucide',
      },
      { id: 'privacy-john', label: 'Privacy & Security', icon: 'lock', iconLibrary: 'lucide' },
      { id: 'logout-john', label: 'Logout', icon: 'power', iconLibrary: 'lucide' },
    ],
  },
];

export const bottomNavItems: NavItem[] = [
  {
    id: 'user-management',
    label: 'User Management',
    icon: 'users',
    iconLibrary: 'lucide',
    badge: 'New',
  },

  {
    id: 'settings',
    label: 'Settings',
    badge: '1',
    icon: 'settings',
    iconLibrary: 'lucide',
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



