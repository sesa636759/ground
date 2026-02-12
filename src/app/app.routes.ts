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
        path: 'accordian',
        loadComponent: () =>
          import('./demos/app-accordian/app-accordian-demo.component').then(
            (m) => m.SetAccordianDemoComponent,
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
      {
        path: 'splitter',
        loadComponent: () =>
          import('./demos/app-splitter/app-splitter-demo.component').then(
            (m) => m.AppSplitterDemoComponent,
          ),
      },
      {
        path: 'tabs',
        loadComponent: () =>
          import('./demos/app-tabs/app-tabs-demo.component').then((m) => m.AppTabsDemoComponent),
      },
      {
        path: 'panel',
        loadComponent: () =>
          import('./demos/app-panel/app-panel-demo.component').then((m) => m.AppPanelDemoComponent),
      },
      {
        path: 'divider',
        loadComponent: () =>
          import('./demos/app-divider/app-divider-demo.component').then(
            (m) => m.AppDividerDemoComponent,
          ),
      },
      {
        path: 'stack',
        loadComponent: () =>
          import('./demos/app-stack/app-stack-demo.component').then((m) => m.AppStackDemoComponent),
      },
      {
        path: 'button',
        loadComponent: () =>
          import('./demos/app-button/app-button-demo.component').then(
            (m) => m.AppButtonDemoComponent,
          ),
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./demos/app-badge/app-badge-demo.component').then((m) => m.AppBadgeDemoComponent),
      },
      {
        path: 'chip',
        loadComponent: () =>
          import('./demos/app-chip/app-chip-demo.component').then((m) => m.AppChipDemoComponent),
      },
      {
        path: 'switch',
        loadComponent: () =>
          import('./demos/app-switch/app-switch-demo.component').then(
            (m) => m.AppSwitchDemoComponent,
          ),
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import('./demos/app-avatar/app-avatar-demo.component').then(
            (m) => m.AppAvatarDemoComponent,
          ),
      },
      {
        path: 'popover',
        loadComponent: () =>
          import('./demos/app-popover/app-popover-demo.component').then(
            (m) => m.AppPopoverDemoComponent,
          ),
      },
      {
        path: 'snackbar',
        loadComponent: () =>
          import('./demos/app-snackbar/app-snackbar-demo.component').then(
            (m) => m.AppSnackbarDemoComponent,
          ),
      },
      {
        path: 'rating',
        loadComponent: () =>
          import('./demos/app-rating/app-rating-demo.component').then(
            (m) => m.AppRatingDemoComponent,
          ),
      },
      {
        path: 'aside',
        loadComponent: () =>
          import('./demos/app-aside/app-aside-demo.component').then((m) => m.AppAsideDemoComponent),
      },
      {
        path: 'anchor',
        loadComponent: () =>
          import('./demos/app-anchor/app-anchor-demo.component').then(
            (m) => m.AppAnchorDemoComponent,
          ),
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('./demos/app-breadcrumb/app-breadcrumb-demo.component').then(
            (m) => m.AppBreadcrumbDemoComponent,
          ),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./demos/app-card/app-card-demo.component').then((m) => m.AppCardDemoComponent),
      },
      {
        path: 'dropdown',
        loadComponent: () =>
          import('./demos/app-dropdown/app-dropdown-demo.component').then(
            (m) => m.AppDropdownDemoComponent,
          ),
      },
      {
        path: 'stepper',
        loadComponent: () =>
          import('./demos/app-stepper/app-stepper-demo.component').then(
            (m) => m.AppStepperDemoComponent,
          ),
      },
      {
        path: 'button-group',
        loadComponent: () =>
          import('./demos/app-button-group/app-button-group-demo.component').then(
            (m) => m.AppButtonGroupDemoComponent,
          ),
      },
      {
        path: 'pill',
        loadComponent: () =>
          import('./demos/app-pill/app-pill-demo.component').then((m) => m.AppPillDemoComponent),
      },
      {
        path: 'cascade-select',
        loadComponent: () =>
          import('./demos/app-cascade-select/app-cascade-select-demo.component').then(
            (m) => m.AppCascadeSelectDemoComponent,
          ),
      },
      {
        path: 'skeleton',
        loadComponent: () =>
          import('./demos/app-skeleton/app-skeleton-demo.component').then(
            (m) => m.AppSkeletonDemoComponent,
          ),
      },
      {
        path: 'knob',
        loadComponent: () =>
          import('./demos/app-knob/app-knob-demo.component').then((m) => m.AppKnobDemoComponent),
      },
      {
        path: 'meter-group',
        loadComponent: () =>
          import('./demos/app-meter-group/app-meter-group-demo.component').then(
            (m) => m.AppMeterGroupDemoComponent,
          ),
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./demos/app-pagination/app-pagination-demo.component').then(
            (m) => m.AppPaginationDemoComponent,
          ),
      },
      {
        path: 'speed-dial',
        loadComponent: () =>
          import('./demos/app-speed-dial/app-speed-dial-demo.component').then(
            (m) => m.AppSpeedDialDemoComponent,
          ),
      },
      {
        path: 'speedometer',
        loadComponent: () =>
          import('./demos/app-speedometer/app-speedometer-demo.component').then(
            (m) => m.AppSpeedometerDemoComponent,
          ),
      },
      {
        path: 'range-slider',
        loadComponent: () =>
          import('./demos/app-range-slider/app-range-slider-demo.component').then(
            (m) => m.AppRangeSliderDemoComponent,
          ),
      },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./demos/app-timeline/app-timeline-demo.component').then(
            (m) => m.AppTimelineDemoComponent,
          ),
      },
      {
        path: 'otp-input',
        loadComponent: () =>
          import('./demos/app-otp-input/app-otp-input-demo.component').then(
            (m) => m.AppOtpInputDemoComponent,
          ),
      },
      {
        path: 'tabs',
        loadComponent: () =>
          import('./demos/app-tabs/app-tabs-demo.component').then((m) => m.AppTabsDemoComponent),
      },
      {
        path: 'split-button',
        loadComponent: () =>
          import('./demos/app-split-button/app-split-button-demo.component').then(
            (m) => m.AppSplitButtonDemoComponent,
          ),
      },
      {
        path: 'tag',
        loadComponent: () =>
          import('./demos/app-tag/app-tag-demo.component').then((m) => m.AppTagDemoComponent),
      },
      {
        path: 'context-menu',
        loadComponent: () =>
          import('./demos/app-context-menu/app-context-menu-demo.component').then(
            (m) => m.AppContextMenuDemoComponent,
          ),
      },
      {
        path: 'dialog-box',
        loadComponent: () =>
          import('./demos/app-dialog-box/app-dialog-box-demo.component').then(
            (m) => m.AppDialogBoxDemoComponent,
          ),
      },
      {
        path: 'dock',
        loadComponent: () =>
          import('./demos/app-dock/app-dock-demo.component').then((m) => m.AppDockDemoComponent),
      },
      {
        path: 'picklist',
        loadComponent: () =>
          import('./demos/app-picklist/app-picklist-demo.component').then(
            (m) => m.AppPicklistDemoComponent,
          ),
      },
      {
        path: 'transfer-list',
        loadComponent: () =>
          import('./demos/app-transfer-list/app-transfer-list-demo.component').then(
            (m) => m.AppTransferListDemoComponent,
          ),
      },
      {
        path: 'timer',
        loadComponent: () =>
          import('./demos/app-timer/app-timer-demo.component').then((m) => m.AppTimerDemoComponent),
      },
      {
        path: 'splitter',
        loadComponent: () =>
          import('./demos/app-splitter/app-splitter-demo.component').then(
            (m) => m.AppSplitterDemoComponent,
          ),
      },
      {
        path: 'smart-stepper',
        loadComponent: () =>
          import('./demos/app-smart-stepper/app-smart-stepper-demo.component').then(
            (m) => m.AppSmartStepperDemoComponent,
          ),
      },
      {
        path: 'scroll-top',
        loadComponent: () =>
          import('./demos/app-scroll-top/app-scroll-top-demo.component').then(
            (m) => m.AppScrollTopDemoComponent,
          ),
      },
      {
        path: 'advanced-data-table',
        loadComponent: () =>
          import('./demos/app-advanced-data-table/app-advanced-data-table-demo.component').then(
            (m) => m.AppAdvancedDataTableDemoComponent,
          ),
      },
      {
        path: 'nav-bar',
        loadComponent: () =>
          import('./demos/app-nav-bar/app-nav-bar-demo.component').then(
            (m) => m.AppNavBarDemoComponent,
          ),
      },
      {
        path: 'top-bar',
        loadComponent: () =>
          import('./demos/app-top-bar/app-top-bar-demo.component').then(
            (m) => m.AppTopBarDemoComponent,
          ),
      },
      {
        path: 'pattern-input',
        loadComponent: () =>
          import('./demos/app-pattern-input/app-pattern-input-demo.component').then(
            (m) => m.AppPatternInputDemoComponent,
          ),
      },
      {
        path: 'avatar-group',
        loadComponent: () =>
          import('./demos/app-avatar-group/app-avatar-group-demo.component').then(
            (m) => m.AppAvatarGroupDemoComponent,
          ),
      },
      {
        path: 'horizontal-nav',
        loadComponent: () =>
          import('./demos/app-horizontal-nav/app-horizontal-nav-demo.component').then(
            (m) => m.AppHorizontalNavDemoComponent,
          ),
      },
      {
        path: 'smart-menu',
        loadComponent: () =>
          import('./demos/app-smart-menu/app-smart-menu-demo.component').then(
            (m) => m.AppSmartMenuDemoComponent,
          ),
      },
      {
        path: 'tree-list',
        loadComponent: () =>
          import('./demos/app-tree-list/app-tree-list-demo.component').then(
            (m) => m.AppTreeListDemoComponent,
          ),
      },
      {
        path: 'bar-chart',
        loadComponent: () =>
          import('./demos/app-bar-chart/app-bar-chart-demo.component').then(
            (m) => m.AppBarChartDemoComponent,
          ),
      },
      {
        path: 'chart',
        loadComponent: () =>
          import('./demos/app-chart/app-chart-demo.component').then((m) => m.AppChartDemoComponent),
      },
      {
        path: 'layout-manager',
        loadComponent: () =>
          import('./demos/app-layout-manager/app-layout-manager-demo.component').then(
            (m) => m.AppLayoutManagerDemoComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
