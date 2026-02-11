import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./pages/overview/overview.component').then((m) => m.OverviewComponent),
  },

  {
    path: 'documentation',
    loadComponent: () =>
      import('./pages/documentation/documentation.component').then((m) => m.DocumentationComponent),
  },

  {
    path: 'theme-selector',
    loadComponent: () =>
      import('./pages/settings/settings.component').then((m) => m.ThemeSettingsComponent),
  },
  {
    path: 'demos',
    children: [
      {
        path: 'set-button-toggle',
        loadComponent: () =>
          import('./demos/set-button-toggle/set-button-toggle-demo.component').then(
            (m) => m.SetButtonToggleDemoComponent,
          ),
      },
      {
        path: 'set-checkbox',
        loadComponent: () =>
          import('./demos/set-checkbox/set-checkbox-demo.component').then(
            (m) => m.SetCheckboxDemoComponent,
          ),
      },
      {
        path: 'set-input',
        loadComponent: () =>
          import('./demos/set-input/set-input-demo.component').then((m) => m.SetInputDemoComponent),
      },
      {
        path: 'set-radio',
        loadComponent: () =>
          import('./demos/set-radio/set-radio-demo.component').then((m) => m.SetRadioDemoComponent),
      },
      {
        path: 'set-card',
        loadComponent: () =>
          import('./demos/set-card/set-card-demo.component').then((m) => m.SetCardDemoComponent),
      },
      {
        path: 'set-context-menu',
        loadComponent: () =>
          import('./demos/set-context-menu/set-context-menu-demo.component').then(
            (m) => m.SetContextMenuDemoComponent,
          ),
      },
      {
        path: 'set-tree',
        loadComponent: () =>
          import('./demos/set-tree/set-tree-demo.component').then((m) => m.SetTreeDemoComponent),
      },
      {
        path: 'set-tabs',
        loadComponent: () =>
          import('./demos/set-tabs/set-tabs-demo.component').then((m) => m.SetTabsDemoComponent),
      },
      {
        path: 'set-resizable-panel',
        loadComponent: () =>
          import('./demos/set-resizable-panel/set-resizable-panel-demo.component').then(
            (m) => m.SetResizablePanelDemoComponent,
          ),
      },
      {
        path: 'set-splitter',
        loadComponent: () =>
          import('./demos/set-splitter/set-splitter-demo.component').then(
            (m) => m.SetSplitterDemoComponent,
          ),
      },
      {
        path: 'set-scroll-top',
        loadComponent: () =>
          import('./demos/set-scroll-top/set-scroll-top-demo.component').then(
            (m) => m.SetScrollTopDemoComponent,
          ),
      },
      {
        path: 'set-modern-sidebar',
        loadComponent: () =>
          import('./demos/set-modern-sidebar/set-modern-sidebar-demo.component').then(
            (m) => m.SetModernSidebarDemoComponent,
          ),
      },
      {
        path: 'set-anchor',
        loadComponent: () =>
          import('./demos/set-anchor/set-anchor-demo.component').then(
            (m) => m.SetAnchorDemoComponent,
          ),
      },
      {
        path: 'set-tooltip',
        loadComponent: () =>
          import('./demos/set-tooltip/set-tooltip-demo.component').then(
            (m) => m.SetTooltipDemoComponent,
          ),
      },
      {
        path: 'set-tree',
        loadComponent: () =>
          import('./demos/set-tree/set-tree-demo.component').then((m) => m.SetTreeDemoComponent),
      },
      {
        path: 'set-timeline',
        loadComponent: () =>
          import('./demos/set-timeline/set-timeline-demo.component').then(
            (m) => m.SetTimelineDemoComponent,
          ),
      },
      {
        path: 'set-progress',
        loadComponent: () =>
          import('./demos/set-progress/set-progress-demo.component').then(
            (m) => m.SetProgressDemoComponent,
          ),
      },
      {
        path: 'set-toggle',
        loadComponent: () =>
          import('./demos/set-toggle/set-toggle-demo.component').then(
            (m) => m.SetToggleDemoComponent,
          ),
      },

      {
        path: 'set-list',
        loadComponent: () =>
          import('./demos/set-list/set-list-demo.component').then((m) => m.SetListDemoComponent),
      },
      {
        path: 'set-masonry',
        loadComponent: () =>
          import('./demos/set-masonry/set-masonry-demo.component').then(
            (m) => m.SetMasonryDemoComponent,
          ),
      },
      {
        path: 'set-empty-state',
        loadComponent: () =>
          import('./demos/set-empty-state/set-empty-state-demo.component').then(
            (m) => m.SetEmptyStateDemoComponent,
          ),
      },
      {
        path: 'set-avatar',
        loadComponent: () =>
          import('./demos/set-avatar/set-avatar-demo.component').then(
            (m) => m.SetAvatarDemoComponent,
          ),
      },
      {
        path: 'set-carousel',
        loadComponent: () =>
          import('./demos/set-carousel/set-carousel-demo.component').then(
            (m) => m.SetCarouselDemoComponent,
          ),
      },
      {
        path: 'set-stepper',
        loadComponent: () =>
          import('./demos/set-stepper/set-stepper-demo.component').then(
            (m) => m.SetStepperDemoComponent,
          ),
      },
      {
        path: 'set-otp-input',
        loadComponent: () =>
          import('./demos/set-otp-input/set-otp-input-demo.component').then(
            (m) => m.SetOtpInputDemoComponent,
          ),
      },
      {
        path: 'set-code-editor',
        loadComponent: () =>
          import('./demos/set-code-editor/set-code-editor-demo.component').then(
            (m) => m.SetCodeEditorDemoComponent,
          ),
      },
      {
        path: 'set-dashboard',
        loadComponent: () =>
          import('./demos/set-dashboard/set-dashboard-demo.component').then(
            (m) => m.SetDashboardDemoComponent,
          ),
      },
      {
        path: 'set-tags-input',
        loadComponent: () =>
          import('./demos/set-tags-input/set-tags-input-demo.component').then(
            (m) => m.SetTagsInputDemoComponent,
          ),
      },
      {
        path: 'set-theme-switcher',
        loadComponent: () =>
          import('./demos/set-theme-switcher/set-theme-switcher-demo.component').then(
            (m) => m.SetThemeSwitcherDemoComponent,
          ),
      },
      {
        path: 'set-sidebar',
        loadComponent: () =>
          import('./demos/set-sidebar/set-sidebar-demo.component').then(
            (m) => m.SetSidebarDemoComponent,
          ),
      },
      {
        path: 'set-animate-on-scroll',
        loadComponent: () =>
          import('./demos/set-animate-on-scroll/set-animate-on-scroll-demo.component').then(
            (m) => m.SetAnimateOnScrollDemoComponent,
          ),
      },
      {
        path: 'set-dock-overlay',
        loadComponent: () =>
          import('./demos/set-dock-overlay/set-dock-overlay-demo.component').then(
            (m) => m.SetDockOverlayDemoComponent,
          ),
      },
      {
        path: 'set-avatar-group',
        loadComponent: () =>
          import('./demos/set-avatar-group/set-avatar-group-demo.component').then(
            (m) => m.SetAvatarGroupDemoComponent,
          ),
      },
      {
        path: 'set-tab-stack',
        loadComponent: () =>
          import('./demos/set-tab-stack/set-tab-stack-demo.component').then(
            (m) => m.SetTabStackDemoComponent,
          ),
      },
      {
        path: 'set-layout-manager',
        loadComponent: () =>
          import('./demos/set-layout-manager/set-layout-manager-demo.component').then(
            (m) => m.SetLayoutManagerDemoComponent,
          ),
      },

      {
        path: 'set-button-toggle',
        loadComponent: () =>
          import('./demos/set-button-toggle/set-button-toggle-demo.component').then(
            (m) => m.SetButtonToggleDemoComponent,
          ),
      },
      {
        path: 'set-checkbox',
        loadComponent: () =>
          import('./demos/set-checkbox/set-checkbox-demo.component').then(
            (m) => m.SetCheckboxDemoComponent,
          ),
      },
      {
        path: 'set-input',
        loadComponent: () =>
          import('./demos/set-input/set-input-demo.component').then((m) => m.SetInputDemoComponent),
      },
      {
        path: 'radio',
        loadComponent: () =>
          import('./demos/set-radio/set-radio-demo.component').then((m) => m.SetRadioDemoComponent),
      },
      {
        path: 'set-card',
        loadComponent: () =>
          import('./demos/set-card/set-card-demo.component').then((m) => m.SetCardDemoComponent),
      },
      {
        path: 'set-context-menu',
        loadComponent: () =>
          import('./demos/set-context-menu/set-context-menu-demo.component').then(
            (m) => m.SetContextMenuDemoComponent,
          ),
      },
      {
        path: 'set-tree',
        loadComponent: () =>
          import('./demos/set-tree/set-tree-demo.component').then((m) => m.SetTreeDemoComponent),
      },
      {
        path: 'set-tabs',
        loadComponent: () =>
          import('./demos/set-tabs/set-tabs-demo.component').then((m) => m.SetTabsDemoComponent),
      },
      {
        path: 'set-resizable-panel',
        loadComponent: () =>
          import('./demos/set-resizable-panel/set-resizable-panel-demo.component').then(
            (m) => m.SetResizablePanelDemoComponent,
          ),
      },
      {
        path: 'set-splitter',
        loadComponent: () =>
          import('./demos/set-splitter/set-splitter-demo.component').then(
            (m) => m.SetSplitterDemoComponent,
          ),
      },
      {
        path: 'set-scroll-top',
        loadComponent: () =>
          import('./demos/set-scroll-top/set-scroll-top-demo.component').then(
            (m) => m.SetScrollTopDemoComponent,
          ),
      },
      {
        path: 'set-modern-sidebar',
        loadComponent: () =>
          import('./demos/set-modern-sidebar/set-modern-sidebar-demo.component').then(
            (m) => m.SetModernSidebarDemoComponent,
          ),
      },
      {
        path: 'set-anchor',
        loadComponent: () =>
          import('./demos/set-anchor/set-anchor-demo.component').then(
            (m) => m.SetAnchorDemoComponent,
          ),
      },
      {
        path: 'set-tooltip',
        loadComponent: () =>
          import('./demos/set-tooltip/set-tooltip-demo.component').then(
            (m) => m.SetTooltipDemoComponent,
          ),
      },
      {
        path: 'set-timeline',
        loadComponent: () =>
          import('./demos/set-timeline/set-timeline-demo.component').then(
            (m) => m.SetTimelineDemoComponent,
          ),
      },
      {
        path: 'set-progress',
        loadComponent: () =>
          import('./demos/set-progress/set-progress-demo.component').then(
            (m) => m.SetProgressDemoComponent,
          ),
      },
      {
        path: 'set-toggle',
        loadComponent: () =>
          import('./demos/set-toggle/set-toggle-demo.component').then(
            (m) => m.SetToggleDemoComponent,
          ),
      },

      {
        path: 'set-list',
        loadComponent: () =>
          import('./demos/set-list/set-list-demo.component').then((m) => m.SetListDemoComponent),
      },
      {
        path: 'set-empty-state',
        loadComponent: () =>
          import('./demos/set-empty-state/set-empty-state-demo.component').then(
            (m) => m.SetEmptyStateDemoComponent,
          ),
      },
      {
        path: 'set-avatar',
        loadComponent: () =>
          import('./demos/set-avatar/set-avatar-demo.component').then(
            (m) => m.SetAvatarDemoComponent,
          ),
      },
      {
        path: 'set-carousel',
        loadComponent: () =>
          import('./demos/set-carousel/set-carousel-demo.component').then(
            (m) => m.SetCarouselDemoComponent,
          ),
      },
      {
        path: 'set-stepper',
        loadComponent: () =>
          import('./demos/set-stepper/set-stepper-demo.component').then(
            (m) => m.SetStepperDemoComponent,
          ),
      },
      {
        path: 'set-otp-input',
        loadComponent: () =>
          import('./demos/set-otp-input/set-otp-input-demo.component').then(
            (m) => m.SetOtpInputDemoComponent,
          ),
      },

      {
        path: 'set-dashboard',
        loadComponent: () =>
          import('./demos/set-dashboard/set-dashboard-demo.component').then(
            (m) => m.SetDashboardDemoComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
