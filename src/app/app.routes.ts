import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component').then((m) => m.ProfileComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./pages/overview/overview.component').then((m) => m.OverviewComponent),
  },
  {
    path: 'showroom',
    loadComponent: () =>
      import('./pages/showroom/showroom.component').then((m) => m.ShowroomComponent),
  },
  {
    path: 'installation',
    loadComponent: () =>
      import('./pages/installation/installation.component').then((m) => m.InstallationComponent),
  },

  {
    path: 'documentation',
    loadComponent: () =>
      import('./pages/documentation/documentation.component').then((m) => m.DocumentationComponent),
  },
  {
    path: 'components-guide',
    loadComponent: () =>
      import('./pages/components-guide/components-guide.component').then(
        (m) => m.ComponentsGuideComponent,
      ),
  },
  {
    path: 'documentation/:section',
    loadComponent: () =>
      import('./pages/documentation/documentation.component').then((m) => m.DocumentationComponent),
  },

  {
    path: 'component-documentation',
    loadComponent: () =>
      import('./pages/component-documentation/component-documentation.component').then(
        (m) => m.ComponentDocumentationComponent,
      ),
  },

  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then((m) => m.SettingsComponent),
  },
  {
    path: 'user-management',
    loadComponent: () =>
      import('./features/user-management/components/user-list.component').then(
        (m) => m.UserListComponent,
      ),
  },
  {
    path: 'demos',
    children: [
      {
        path: 'button-toggle-set',
        loadComponent: () =>
          import('./demos/sets/set-button-toggle/set-button-toggle-demo.component').then(
            (m) => m.DmSetButtonToggleDemoComponent,
          ),
      },
      {
        path: 'checkbox-set',
        loadComponent: () =>
          import('./demos/sets/set-checkbox/set-checkbox-demo.component').then(
            (m) => m.DmSetCheckboxDemoComponent,
          ),
      },
      {
        path: 'input-set',
        loadComponent: () =>
          import('./demos/sets/set-input/set-input-demo.component').then(
            (m) => m.DmSetInputDemoComponent,
          ),
      },
      {
        path: 'radio-set',
        loadComponent: () =>
          import('./demos/sets/set-radio/set-radio-demo.component').then(
            (m) => m.DmSetRadioDemoComponent,
          ),
      },
      {
        path: 'card-set',
        loadComponent: () =>
          import('./demos/sets/set-card/set-card-demo.component').then(
            (m) => m.DmSetCardDemoComponent,
          ),
      },
      {
        path: 'context-menu-set',
        loadComponent: () =>
          import('./demos/sets/set-context-menu/set-context-menu-demo.component').then(
            (m) => m.DmSetContextMenuDemoComponent,
          ),
      },
      {
        path: 'tree-set',
        loadComponent: () =>
          import('./demos/sets/set-tree/set-tree-demo.component').then(
            (m) => m.DmSetTreeDemoComponent,
          ),
      },
      {
        path: 'tabs-set',
        loadComponent: () =>
          import('./demos/sets/set-tabs/set-tabs-demo.component').then(
            (m) => m.DmSetTabsDemoComponent,
          ),
      },
      {
        path: 'resizable-panel-set',
        loadComponent: () =>
          import('./demos/sets/set-resizable-panel/set-resizable-panel-demo.component').then(
            (m) => m.DmSetResizablePanelDemoComponent,
          ),
      },
      {
        path: 'splitter-set',
        loadComponent: () =>
          import('./demos/sets/set-splitter/set-splitter-demo.component').then(
            (m) => m.DmSetSplitterDemoComponent,
          ),
      },
      {
        path: 'scroll-top-set',
        loadComponent: () =>
          import('./demos/sets/set-scroll-top/set-scroll-top-demo.component').then(
            (m) => m.DmSetScrollTopDemoComponent,
          ),
      },
      {
        path: 'modern-sidebar-set',
        loadComponent: () =>
          import('./demos/sets/set-modern-sidebar/set-modern-sidebar-demo.component').then(
            (m) => m.DmSetModernSidebarDemoComponent,
          ),
      },
      {
        path: 'accordian',
        loadComponent: () =>
          import('./demos/common/accordian/accordian-demo.component').then(
            (m) => m.DmAccordianDemoComponent,
          ),
      },
      {
        path: 'anchor-set',
        loadComponent: () =>
          import('./demos/sets/set-anchor/set-anchor-demo.component').then(
            (m) => m.DmSetAnchorDemoComponent,
          ),
      },
      {
        path: 'tooltip-set',
        loadComponent: () =>
          import('./demos/sets/set-tooltip/set-tooltip-demo.component').then(
            (m) => m.DmSetTooltipDemoComponent,
          ),
      },
      {
        path: 'tree-set',
        loadComponent: () =>
          import('./demos/sets/set-tree/set-tree-demo.component').then(
            (m) => m.DmSetTreeDemoComponent,
          ),
      },
      {
        path: 'timeline-set',
        loadComponent: () =>
          import('./demos/sets/set-timeline/set-timeline-demo.component').then(
            (m) => m.DmSetTimelineDemoComponent,
          ),
      },
      {
        path: 'progress-set',
        loadComponent: () =>
          import('./demos/sets/set-progress/set-progress-demo.component').then(
            (m) => m.DmSetProgressDemoComponent,
          ),
      },
      {
        path: 'toggle-set',
        loadComponent: () =>
          import('./demos/sets/set-toggle/set-toggle-demo.component').then(
            (m) => m.DmSetToggleDemoComponent,
          ),
      },

      {
        path: 'list-set',
        loadComponent: () =>
          import('./demos/sets/set-list/set-list-demo.component').then(
            (m) => m.DmSetListDemoComponent,
          ),
      },
      {
        path: 'masonry-set',
        loadComponent: () =>
          import('./demos/sets/set-masonry/set-masonry-demo.component').then(
            (m) => m.DmSetMasonryDemoComponent,
          ),
      },
      {
        path: 'empty-state-set',
        loadComponent: () =>
          import('./demos/sets/set-empty-state/set-empty-state-demo.component').then(
            (m) => m.DmSetEmptyStateDemoComponent,
          ),
      },
      {
        path: 'avatar-set',
        loadComponent: () =>
          import('./demos/sets/set-avatar/set-avatar-demo.component').then(
            (m) => m.DmSetAvatarDemoComponent,
          ),
      },
      {
        path: 'carousel-set',
        loadComponent: () =>
          import('./demos/sets/set-carousel/set-carousel-demo.component').then(
            (m) => m.DmSetCarouselDemoComponent,
          ),
      },
      {
        path: 'stepper-set',
        loadComponent: () =>
          import('./demos/sets/set-stepper/set-stepper-demo.component').then(
            (m) => m.DmSetStepperDemoComponent,
          ),
      },
      {
        path: 'otp-input-set',
        loadComponent: () =>
          import('./demos/sets/set-otp-input/set-otp-input-demo.component').then(
            (m) => m.DmSetOtpInputDemoComponent,
          ),
      },
      {
        path: 'code-editor-set',
        loadComponent: () =>
          import('./demos/sets/set-code-editor/set-code-editor-demo.component').then(
            (m) => m.DmSetCodeEditorDemoComponent,
          ),
      },
      {
        path: 'dashboard-set',
        loadComponent: () =>
          import('./demos/sets/set-dashboard/set-dashboard-demo.component').then(
            (m) => m.DmSetDashboardDemoComponent,
          ),
      },
      {
        path: 'tags-input-set',
        loadComponent: () =>
          import('./demos/sets/set-tags-input/set-tags-input-demo.component').then(
            (m) => m.DmSetTagsInputDemoComponent,
          ),
      },
      {
        path: 'theme-switcher-set',
        loadComponent: () =>
          import('./demos/sets/set-theme-switcher/set-theme-switcher-demo.component').then(
            (m) => m.DmSetThemeSwitcherDemoComponent,
          ),
      },
      {
        path: 'sidebar-set',
        loadComponent: () =>
          import('./demos/sets/set-sidebar/set-sidebar-demo.component').then(
            (m) => m.DmSetSidebarDemoComponent,
          ),
      },
      {
        path: 'animate-on-scroll-set',
        loadComponent: () =>
          import('./demos/sets/set-animate-on-scroll/set-animate-on-scroll-demo.component').then(
            (m) => m.DmSetAnimateOnScrollDemoComponent,
          ),
      },
      {
        path: 'dock-overlay-set',
        loadComponent: () =>
          import('./demos/sets/set-dock-overlay/set-dock-overlay-demo.component').then(
            (m) => m.DmSetDockOverlayDemoComponent,
          ),
      },
      {
        path: 'label-set',
        loadComponent: () =>
          import('./demos/sets/set-label/set-label-demo.component').then(
            (m) => m.DmSetLabelDemoComponent,
          ),
      },
      {
        path: 'avatar-group-set',
        loadComponent: () =>
          import('./demos/sets/set-avatar-group/set-avatar-group-demo.component').then(
            (m) => m.DmSetAvatarGroupDemoComponent,
          ),
      },
      {
        path: 'tab-stack-set',
        loadComponent: () =>
          import('./demos/sets/set-tab-stack/set-tab-stack-demo.component').then(
            (m) => m.DmSetTabStackDemoComponent,
          ),
      },
      {
        path: 'layout-manager-set',
        loadComponent: () =>
          import('./demos/sets/set-layout-manager/set-layout-manager-demo.component').then(
            (m) => m.DmSetLayoutManagerDemoComponent,
          ),
      },

      {
        path: 'tabs',
        loadComponent: () =>
          import('./demos/common/tabs/tabs-demo.component').then((m) => m.DmTabsDemoComponent),
      },
      {
        path: 'panel',
        loadComponent: () =>
          import('./demos/common/panel/panel-demo.component').then((m) => m.DmPanelDemoComponent),
      },
      {
        path: 'divider',
        loadComponent: () =>
          import('./demos/common/divider/divider-demo.component').then(
            (m) => m.DmDividerDemoComponent,
          ),
      },
      {
        path: 'stack',
        loadComponent: () =>
          import('./demos/common/stack/stack-demo.component').then((m) => m.DmStackDemoComponent),
      },
      {
        path: 'button',
        loadComponent: () =>
          import('./demos/common/button/button-demo.component').then(
            (m) => m.DmButtonDemoComponent,
          ),
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./demos/common/badge/badge-demo.component').then((m) => m.DmBadgeDemoComponent),
      },
      {
        path: 'chip',
        loadComponent: () =>
          import('./demos/common/chip/chip-demo.component').then((m) => m.DmChipDemoComponent),
      },
      {
        path: 'switch',
        loadComponent: () =>
          import('./demos/common/switch/switch-demo.component').then(
            (m) => m.DmSwitchDemoComponent,
          ),
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import('./demos/common/avatar/avatar-demo.component').then(
            (m) => m.DmAvatarDemoComponent,
          ),
      },
      {
        path: 'popover',
        loadComponent: () =>
          import('./demos/common/popover/popover-demo.component').then(
            (m) => m.DmPopoverDemoComponent,
          ),
      },
      {
        path: 'snackbar',
        loadComponent: () =>
          import('./demos/common/snackbar/snackbar-demo.component').then(
            (m) => m.DmSnackbarDemoComponent,
          ),
      },
      {
        path: 'rating',
        loadComponent: () =>
          import('./demos/common/rating/rating-demo.component').then(
            (m) => m.DmRatingDemoComponent,
          ),
      },
      {
        path: 'aside',
        loadComponent: () =>
          import('./demos/common/aside/aside-demo.component').then((m) => m.DmAsideDemoComponent),
      },
      {
        path: 'anchor',
        loadComponent: () =>
          import('./demos/common/anchor/anchor-demo.component').then(
            (m) => m.DmAnchorDemoComponent,
          ),
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('./demos/common/breadcrumb/breadcrumb-demo.component').then(
            (m) => m.DmBreadcrumbDemoComponent,
          ),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./demos/common/card/card-demo.component').then((m) => m.DmCardDemoComponent),
      },
      {
        path: 'dropdown',
        loadComponent: () =>
          import('./demos/common/dropdown/dropdown-demo.component').then(
            (m) => m.DmDropdownDemoComponent,
          ),
      },
      // {
      //   path: 'stepper',
      //   loadComponent: () =>
      //     import('./demos/common/stepper/stepper-demo.component').then(
      //       (m) => m.DmStepperDemoComponent,
      //     ),
      // },

      {
        path: 'pill',
        loadComponent: () =>
          import('./demos/common/pill/pill-demo.component').then((m) => m.DmPillDemoComponent),
      },
      {
        path: 'cascade-select',
        loadComponent: () =>
          import('./demos/common/cascade-select/cascade-select-demo.component').then(
            (m) => m.DmCascadeSelectDemoComponent,
          ),
      },
      {
        path: 'skeleton',
        loadComponent: () =>
          import('./demos/common/skeleton/skeleton-demo.component').then(
            (m) => m.DmSkeletonDemoComponent,
          ),
      },
      {
        path: 'knob',
        loadComponent: () =>
          import('./demos/common/knob/knob-demo.component').then((m) => m.DmKnobDemoComponent),
      },
      {
        path: 'meter-group',
        loadComponent: () =>
          import('./demos/common/meter-group/meter-group-demo.component').then(
            (m) => m.DmMeterGroupDemoComponent,
          ),
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./demos/common/pagination/pagination-demo.component').then(
            (m) => m.DmPaginationDemoComponent,
          ),
      },
      {
        path: 'speed-dial',
        loadComponent: () =>
          import('./demos/common/speed-dial/speed-dial-demo.component').then(
            (m) => m.DmSpeedDialDemoComponent,
          ),
      },
      {
        path: 'speedometer',
        loadComponent: () =>
          import('./demos/common/speedometer/speedometer-demo.component').then(
            (m) => m.DmSpeedometerDemoComponent,
          ),
      },
      {
        path: 'range-slider',
        loadComponent: () =>
          import('./demos/common/range-slider/range-slider-demo.component').then(
            (m) => m.DmRangeSliderDemoComponent,
          ),
      },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./demos/common/timeline/timeline-demo.component').then(
            (m) => m.DmTimelineDemoComponent,
          ),
      },

      {
        path: 'tabs',
        loadComponent: () =>
          import('./demos/common/tabs/tabs-demo.component').then((m) => m.DmTabsDemoComponent),
      },
      {
        path: 'split-button',
        loadComponent: () =>
          import('./demos/common/split-button/split-button-demo.component').then(
            (m) => m.DmSplitButtonDemoComponent,
          ),
      },
      {
        path: 'tag',
        loadComponent: () =>
          import('./demos/common/tag/tag-demo.component').then((m) => m.DmTagDemoComponent),
      },
      {
        path: 'context-menu',
        loadComponent: () =>
          import('./demos/common/context-menu/context-menu-demo.component').then(
            (m) => m.DmContextMenuDemoComponent,
          ),
      },
      {
        path: 'dialog',
        loadComponent: () =>
          import('./demos/common/dialog-box/dialog-box-demo.component').then(
            (m) => m.DmDialogBoxDemoComponent,
          ),
      },
      {
        path: 'dock',
        loadComponent: () =>
          import('./demos/common/dock/dock-demo.component').then((m) => m.DmDockDemoComponent),
      },
      {
        path: 'picklist',
        loadComponent: () =>
          import('./demos/common/picklist/picklist-demo.component').then(
            (m) => m.DmPicklistDemoComponent,
          ),
      },
      {
        path: 'transfer-list',
        loadComponent: () =>
          import('./demos/common/transfer-list/transfer-list-demo.component').then(
            (m) => m.DmTransferListDemoComponent,
          ),
      },
      {
        path: 'timer',
        loadComponent: () =>
          import('./demos/common/timer/timer-demo.component').then((m) => m.DmTimerDemoComponent),
      },

      // {
      //   path: 'smart-stepper',
      //   loadComponent: () =>
      //     import('./demos/common/smart-stepper/smart-stepper-demo.component').then(
      //       (m) => m.DmSmartStepperDemoComponent,
      //     ),
      // },
      {
        path: 'scroll-top',
        loadComponent: () =>
          import('./demos/common/scroll-top/scroll-top-demo.component').then(
            (m) => m.DmScrollTopDemoComponent,
          ),
      },
      {
        path: 'advanced-data-table',
        loadComponent: () =>
          import('./demos/common/advanced-data-table/advanced-data-table-demo.component').then(
            (m) => m.DmAdvancedDataTableDemoComponent,
          ),
      },
      {
        path: 'nav-bar',
        loadComponent: () =>
          import('./demos/common/nav-bar/nav-bar-demo.component').then(
            (m) => m.DmNavBarDemoComponent,
          ),
      },
      {
        path: 'top-bar',
        loadComponent: () =>
          import('./demos/common/top-bar/top-bar-demo.component').then(
            (m) => m.DmTopBarDemoComponent,
          ),
      },
      {
        path: 'pattern-input',
        loadComponent: () =>
          import('./demos/common/pattern-input/pattern-input-demo.component').then(
            (m) => m.DmPatternInputDemoComponent,
          ),
      },
      {
        path: 'avatar-group',
        loadComponent: () =>
          import('./demos/common/avatar-group/avatar-group-demo.component').then(
            (m) => m.DmAvatarGroupDemoComponent,
          ),
      },
      {
        path: 'horizontal-nav',
        loadComponent: () =>
          import('./demos/common/horizontal-nav/horizontal-nav-demo.component').then(
            (m) => m.DmHorizontalNavDemoComponent,
          ),
      },
      {
        path: 'smart-menu',
        loadComponent: () =>
          import('./demos/common/smart-menu/smart-menu-demo.component').then(
            (m) => m.DmSmartMenuDemoComponent,
          ),
      },
      {
        path: 'tree-list',
        loadComponent: () =>
          import('./demos/common/tree-list/tree-list-demo.component').then(
            (m) => m.DmTreeListDemoComponent,
          ),
      },
      {
        path: 'bar-chart',
        loadComponent: () =>
          import('./demos/charts/bar-chart/bar-chart-demo.component').then(
            (m) => m.DmBarChartDemoComponent,
          ),
      },
      {
        path: 'line-chart',
        loadComponent: () =>
          import('./demos/charts/line-chart/line-chart-demo.component').then(
            (m) => m.DmLineChartDemoComponent,
          ),
      },
      {
        path: 'pie-chart',
        loadComponent: () =>
          import('./demos/charts/pie-chart/pie-chart-demo.component').then(
            (m) => m.DmPieChartDemoComponent,
          ),
      },
      {
        path: 'waffle-chart',
        loadComponent: () =>
          import('./demos/charts/waffle-chart/waffle-chart-demo.component').then(
            (m) => m.DmWaffleChartDemoComponent,
          ),
      },
      {
        path: 'charts/timeline-range',
        loadComponent: () =>
          import('./demos/charts/timeline-range/timeline-range-demo.component').then(
            (m) => m.DmTimelineRangeDemoComponent,
          ),
      },
      {
        path: 'charts/sparkline',
        loadComponent: () =>
          import('./demos/charts/sparkline/sparkline-demo.component').then(
            (m) => m.DmSparklineDemoComponent,
          ),
      },
      {
        path: 'charts/radial-bar',
        loadComponent: () =>
          import('./demos/charts/radial-bar/radial-bar-demo.component').then(
            (m) => m.DmRadialBarDemoComponent,
          ),
      },
      {
        path: 'charts/gantt-chart',
        loadComponent: () =>
          import('./demos/charts/gantt-chart/gantt-chart-demo.component').then(
            (m) => m.DmGanttChartDemoComponent,
          ),
      },
      {
        path: 'charts/step-line-chart',
        loadComponent: () =>
          import('./demos/charts/step-line-chart/step-line-chart-demo.component').then(
            (m) => m.DmStepLineChartDemoComponent,
          ),
      },
      {
        path: 'charts/waterfall-chart',
        loadComponent: () =>
          import('./demos/charts/waterfall-chart/waterfall-chart-demo.component').then(
            (m) => m.DmWaterfallChartDemoComponent,
          ),
      },
      {
        path: 'charts/funnel-chart',
        loadComponent: () =>
          import('./demos/charts/funnel-chart/funnel-chart-demo.component').then(
            (m) => m.DmFunnelChartDemoComponent,
          ),
      },
      {
        path: 'charts/area-chart',
        loadComponent: () =>
          import('./demos/charts/area-chart/area-chart-demo.component').then(
            (m) => m.DmAreaChartDemoComponent,
          ),
      },
      {
        path: 'charts/rose-chart',
        loadComponent: () =>
          import('./demos/charts/rose-chart/rose-chart-demo.component').then(
            (m) => m.DmRoseChartDemoComponent,
          ),
      },
      {
        path: 'charts/lollipop-chart',
        loadComponent: () =>
          import('./demos/charts/lollipop-chart/lollipop-chart-demo.component').then(
            (m) => m.DmLollipopChartDemoComponent,
          ),
      },
      {
        path: 'charts/polar-area-chart',
        loadComponent: () =>
          import('./demos/charts/polar-area-chart/polar-area-chart-demo.component').then(
            (m) => m.DmPolarAreaChartDemoComponent,
          ),
      },
      {
        path: 'charts/candlestick-chart',
        loadComponent: () =>
          import('./demos/charts/candlestick-chart/candlestick-chart-demo.component').then(
            (m) => m.DmCandlestickChartDemoComponent,
          ),
      },
      {
        path: 'charts/ohlc-chart',
        loadComponent: () =>
          import('./demos/charts/ohlc-chart/ohlc-chart-demo.component').then(
            (m) => m.DmOhlcChartDemoComponent,
          ),
      },
      {
        path: 'charts/tree-diagram',
        loadComponent: () =>
          import('./demos/charts/tree-diagram/tree-diagram-demo.component').then(
            (m) => m.DmTreeDiagramDemoComponent,
          ),
      },
      {
        path: 'chart',
        loadComponent: () =>
          import('./demos/charts/chart/chart-demo.component').then((m) => m.DmChartDemoComponent),
      },
      {
        path: 'layout-manager',
        loadComponent: () =>
          import('./demos/common/layout-manager/layout-manager-demo.component').then(
            (m) => m.DmLayoutManagerDemoComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
