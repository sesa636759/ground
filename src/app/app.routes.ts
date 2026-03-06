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
    path: 'documentation',
    loadComponent: () =>
      import('./pages/documentation/documentation.component').then((m) => m.DocumentationComponent),
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
          import('./demos/set-button-toggle/set-button-toggle-demo.component').then(
            (m) => m.DmSetButtonToggleDemoComponent,
          ),
      },
      {
        path: 'checkbox-set',
        loadComponent: () =>
          import('./demos/set-checkbox/set-checkbox-demo.component').then(
            (m) => m.DmSetCheckboxDemoComponent,
          ),
      },
      {
        path: 'input-set',
        loadComponent: () =>
          import('./demos/set-input/set-input-demo.component').then((m) => m.DmSetInputDemoComponent),
      },
      {
        path: 'radio-set',
        loadComponent: () =>
          import('./demos/set-radio/set-radio-demo.component').then((m) => m.DmSetRadioDemoComponent),
      },
      {
        path: 'card-set',
        loadComponent: () =>
          import('./demos/set-card/set-card-demo.component').then((m) => m.DmSetCardDemoComponent),
      },
      {
        path: 'context-menu-set',
        loadComponent: () =>
          import('./demos/set-context-menu/set-context-menu-demo.component').then(
            (m) => m.DmSetContextMenuDemoComponent,
          ),
      },
      {
        path: 'tree-set',
        loadComponent: () =>
          import('./demos/set-tree/set-tree-demo.component').then((m) => m.DmSetTreeDemoComponent),
      },
      {
        path: 'tabs-set',
        loadComponent: () =>
          import('./demos/set-tabs/set-tabs-demo.component').then((m) => m.DmSetTabsDemoComponent),
      },
      {
        path: 'resizable-panel-set',
        loadComponent: () =>
          import('./demos/set-resizable-panel/set-resizable-panel-demo.component').then(
            (m) => m.DmSetResizablePanelDemoComponent,
          ),
      },
      {
        path: 'splitter-set',
        loadComponent: () =>
          import('./demos/set-splitter/set-splitter-demo.component').then(
            (m) => m.DmSetSplitterDemoComponent,
          ),
      },
      {
        path: 'scroll-top-set',
        loadComponent: () =>
          import('./demos/set-scroll-top/set-scroll-top-demo.component').then(
            (m) => m.DmSetScrollTopDemoComponent,
          ),
      },
      {
        path: 'modern-sidebar-set',
        loadComponent: () =>
          import('./demos/set-modern-sidebar/set-modern-sidebar-demo.component').then(
            (m) => m.DmSetModernSidebarDemoComponent,
          ),
      },
      {
        path: 'accordian',
        loadComponent: () =>
          import('./demos/accordian/accordian-demo.component').then(
            (m) => m.DmAccordianDemoComponent,
          ),
      },
      {
        path: 'anchor-set',
        loadComponent: () =>
          import('./demos/set-anchor/set-anchor-demo.component').then(
            (m) => m.DmSetAnchorDemoComponent,
          ),
      },
      {
        path: 'tooltip-set',
        loadComponent: () =>
          import('./demos/set-tooltip/set-tooltip-demo.component').then(
            (m) => m.DmSetTooltipDemoComponent,
          ),
      },
      {
        path: 'tree-set',
        loadComponent: () =>
          import('./demos/set-tree/set-tree-demo.component').then((m) => m.DmSetTreeDemoComponent),
      },
      {
        path: 'timeline-set',
        loadComponent: () =>
          import('./demos/set-timeline/set-timeline-demo.component').then(
            (m) => m.DmSetTimelineDemoComponent,
          ),
      },
      {
        path: 'progress-set',
        loadComponent: () =>
          import('./demos/set-progress/set-progress-demo.component').then(
            (m) => m.DmSetProgressDemoComponent,
          ),
      },
      {
        path: 'toggle-set',
        loadComponent: () =>
          import('./demos/set-toggle/set-toggle-demo.component').then(
            (m) => m.DmSetToggleDemoComponent,
          ),
      },

      {
        path: 'list-set',
        loadComponent: () =>
          import('./demos/set-list/set-list-demo.component').then((m) => m.DmSetListDemoComponent),
      },
      {
        path: 'masonry-set',
        loadComponent: () =>
          import('./demos/set-masonry/set-masonry-demo.component').then(
            (m) => m.DmSetMasonryDemoComponent,
          ),
      },
      {
        path: 'empty-state-set',
        loadComponent: () =>
          import('./demos/set-empty-state/set-empty-state-demo.component').then(
            (m) => m.DmSetEmptyStateDemoComponent,
          ),
      },
      {
        path: 'avatar-set',
        loadComponent: () =>
          import('./demos/set-avatar/set-avatar-demo.component').then(
            (m) => m.DmSetAvatarDemoComponent,
          ),
      },
      {
        path: 'carousel-set',
        loadComponent: () =>
          import('./demos/set-carousel/set-carousel-demo.component').then(
            (m) => m.DmSetCarouselDemoComponent,
          ),
      },
      {
        path: 'stepper-set',
        loadComponent: () =>
          import('./demos/set-stepper/set-stepper-demo.component').then(
            (m) => m.DmSetStepperDemoComponent,
          ),
      },
      {
        path: 'otp-input-set',
        loadComponent: () =>
          import('./demos/set-otp-input/set-otp-input-demo.component').then(
            (m) => m.DmSetOtpInputDemoComponent,
          ),
      },
      {
        path: 'code-editor-set',
        loadComponent: () =>
          import('./demos/set-code-editor/set-code-editor-demo.component').then(
            (m) => m.DmSetCodeEditorDemoComponent,
          ),
      },
      {
        path: 'dashboard-set',
        loadComponent: () =>
          import('./demos/set-dashboard/set-dashboard-demo.component').then(
            (m) => m.DmSetDashboardDemoComponent,
          ),
      },
      {
        path: 'tags-input-set',
        loadComponent: () =>
          import('./demos/set-tags-input/set-tags-input-demo.component').then(
            (m) => m.DmSetTagsInputDemoComponent,
          ),
      },
      {
        path: 'theme-switcher-set',
        loadComponent: () =>
          import('./demos/set-theme-switcher/set-theme-switcher-demo.component').then(
            (m) => m.DmSetThemeSwitcherDemoComponent,
          ),
      },
      {
        path: 'sidebar-set',
        loadComponent: () =>
          import('./demos/set-sidebar/set-sidebar-demo.component').then(
            (m) => m.DmSetSidebarDemoComponent,
          ),
      },
      {
        path: 'animate-on-scroll-set',
        loadComponent: () =>
          import('./demos/set-animate-on-scroll/set-animate-on-scroll-demo.component').then(
            (m) => m.DmSetAnimateOnScrollDemoComponent,
          ),
      },
      {
        path: 'dock-overlay-set',
        loadComponent: () =>
          import('./demos/set-dock-overlay/set-dock-overlay-demo.component').then(
            (m) => m.DmSetDockOverlayDemoComponent,
          ),
      },
      {
        path: 'label-set',
        loadComponent: () =>
          import('./demos/set-label/set-label-demo.component').then((m) => m.DmSetLabelDemoComponent),
      },
      {
        path: 'avatar-group-set',
        loadComponent: () =>
          import('./demos/set-avatar-group/set-avatar-group-demo.component').then(
            (m) => m.DmSetAvatarGroupDemoComponent,
          ),
      },
      {
        path: 'tab-stack-set',
        loadComponent: () =>
          import('./demos/set-tab-stack/set-tab-stack-demo.component').then(
            (m) => m.DmSetTabStackDemoComponent,
          ),
      },
      {
        path: 'layout-manager-set',
        loadComponent: () =>
          import('./demos/set-layout-manager/set-layout-manager-demo.component').then(
            (m) => m.DmSetLayoutManagerDemoComponent,
          ),
      },

      {
        path: 'button-toggle-set',
        loadComponent: () =>
          import('./demos/set-button-toggle/set-button-toggle-demo.component').then(
            (m) => m.DmSetButtonToggleDemoComponent,
          ),
      },
      {
        path: 'checkbox-set',
        loadComponent: () =>
          import('./demos/set-checkbox/set-checkbox-demo.component').then(
            (m) => m.DmSetCheckboxDemoComponent,
          ),
      },
      {
        path: 'input-set',
        loadComponent: () =>
          import('./demos/set-input/set-input-demo.component').then((m) => m.DmSetInputDemoComponent),
      },
      {
        path: 'radio',
        loadComponent: () =>
          import('./demos/set-radio/set-radio-demo.component').then((m) => m.DmSetRadioDemoComponent),
      },
      {
        path: 'card-set',
        loadComponent: () =>
          import('./demos/set-card/set-card-demo.component').then((m) => m.DmSetCardDemoComponent),
      },
      {
        path: 'context-menu-set',
        loadComponent: () =>
          import('./demos/set-context-menu/set-context-menu-demo.component').then(
            (m) => m.DmSetContextMenuDemoComponent,
          ),
      },
      {
        path: 'tree-set',
        loadComponent: () =>
          import('./demos/set-tree/set-tree-demo.component').then((m) => m.DmSetTreeDemoComponent),
      },
      {
        path: 'tabs-set',
        loadComponent: () =>
          import('./demos/set-tabs/set-tabs-demo.component').then((m) => m.DmSetTabsDemoComponent),
      },
      {
        path: 'resizable-panel-set',
        loadComponent: () =>
          import('./demos/set-resizable-panel/set-resizable-panel-demo.component').then(
            (m) => m.DmSetResizablePanelDemoComponent,
          ),
      },
      {
        path: 'splitter-set',
        loadComponent: () =>
          import('./demos/set-splitter/set-splitter-demo.component').then(
            (m) => m.DmSetSplitterDemoComponent,
          ),
      },
      {
        path: 'scroll-top-set',
        loadComponent: () =>
          import('./demos/set-scroll-top/set-scroll-top-demo.component').then(
            (m) => m.DmSetScrollTopDemoComponent,
          ),
      },
      {
        path: 'modern-sidebar-set',
        loadComponent: () =>
          import('./demos/set-modern-sidebar/set-modern-sidebar-demo.component').then(
            (m) => m.DmSetModernSidebarDemoComponent,
          ),
      },
      {
        path: 'anchor-set',
        loadComponent: () =>
          import('./demos/set-anchor/set-anchor-demo.component').then(
            (m) => m.DmSetAnchorDemoComponent,
          ),
      },
      {
        path: 'tooltip-set',
        loadComponent: () =>
          import('./demos/set-tooltip/set-tooltip-demo.component').then(
            (m) => m.DmSetTooltipDemoComponent,
          ),
      },
      {
        path: 'timeline-set',
        loadComponent: () =>
          import('./demos/set-timeline/set-timeline-demo.component').then(
            (m) => m.DmSetTimelineDemoComponent,
          ),
      },
      {
        path: 'progress-set',
        loadComponent: () =>
          import('./demos/set-progress/set-progress-demo.component').then(
            (m) => m.DmSetProgressDemoComponent,
          ),
      },
      {
        path: 'toggle-set',
        loadComponent: () =>
          import('./demos/set-toggle/set-toggle-demo.component').then(
            (m) => m.DmSetToggleDemoComponent,
          ),
      },

      {
        path: 'list-set',
        loadComponent: () =>
          import('./demos/set-list/set-list-demo.component').then((m) => m.DmSetListDemoComponent),
      },
      {
        path: 'empty-state-set',
        loadComponent: () =>
          import('./demos/set-empty-state/set-empty-state-demo.component').then(
            (m) => m.DmSetEmptyStateDemoComponent,
          ),
      },
      {
        path: 'avatar-set',
        loadComponent: () =>
          import('./demos/set-avatar/set-avatar-demo.component').then(
            (m) => m.DmSetAvatarDemoComponent,
          ),
      },
      {
        path: 'carousel-set',
        loadComponent: () =>
          import('./demos/set-carousel/set-carousel-demo.component').then(
            (m) => m.DmSetCarouselDemoComponent,
          ),
      },
      {
        path: 'stepper-set',
        loadComponent: () =>
          import('./demos/set-stepper/set-stepper-demo.component').then(
            (m) => m.DmSetStepperDemoComponent,
          ),
      },
      {
        path: 'otp-input-set',
        loadComponent: () =>
          import('./demos/set-otp-input/set-otp-input-demo.component').then(
            (m) => m.DmSetOtpInputDemoComponent,
          ),
      },

      {
        path: 'dashboard-set',
        loadComponent: () =>
          import('./demos/set-dashboard/set-dashboard-demo.component').then(
            (m) => m.DmSetDashboardDemoComponent,
          ),
      },

      {
        path: 'tabs',
        loadComponent: () =>
          import('./demos/tabs/tabs-demo.component').then((m) => m.DmTabsDemoComponent),
      },
      {
        path: 'panel',
        loadComponent: () =>
          import('./demos/panel/panel-demo.component').then((m) => m.DmPanelDemoComponent),
      },
      {
        path: 'divider',
        loadComponent: () =>
          import('./demos/divider/divider-demo.component').then(
            (m) => m.DmDividerDemoComponent,
          ),
      },
      {
        path: 'stack',
        loadComponent: () =>
          import('./demos/stack/stack-demo.component').then((m) => m.DmStackDemoComponent),
      },
      {
        path: 'button',
        loadComponent: () =>
          import('./demos/button/button-demo.component').then(
            (m) => m.DmButtonDemoComponent,
          ),
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./demos/badge/badge-demo.component').then((m) => m.DmBadgeDemoComponent),
      },
      {
        path: 'chip',
        loadComponent: () =>
          import('./demos/chip/chip-demo.component').then((m) => m.DmChipDemoComponent),
      },
      {
        path: 'switch',
        loadComponent: () =>
          import('./demos/switch/switch-demo.component').then(
            (m) => m.DmSwitchDemoComponent,
          ),
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import('./demos/avatar/avatar-demo.component').then(
            (m) => m.DmAvatarDemoComponent,
          ),
      },
      {
        path: 'popover',
        loadComponent: () =>
          import('./demos/popover/popover-demo.component').then(
            (m) => m.DmPopoverDemoComponent,
          ),
      },
      {
        path: 'snackbar',
        loadComponent: () =>
          import('./demos/snackbar/snackbar-demo.component').then(
            (m) => m.DmSnackbarDemoComponent,
          ),
      },
      {
        path: 'rating',
        loadComponent: () =>
          import('./demos/rating/rating-demo.component').then(
            (m) => m.DmRatingDemoComponent,
          ),
      },
      {
        path: 'aside',
        loadComponent: () =>
          import('./demos/aside/aside-demo.component').then((m) => m.DmAsideDemoComponent),
      },
      {
        path: 'anchor',
        loadComponent: () =>
          import('./demos/anchor/anchor-demo.component').then(
            (m) => m.DmAnchorDemoComponent,
          ),
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('./demos/breadcrumb/breadcrumb-demo.component').then(
            (m) => m.DmBreadcrumbDemoComponent,
          ),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./demos/card/card-demo.component').then((m) => m.DmCardDemoComponent),
      },
      {
        path: 'dropdown',
        loadComponent: () =>
          import('./demos/dropdown/dropdown-demo.component').then(
            (m) => m.DmDropdownDemoComponent,
          ),
      },
      {
        path: 'stepper',
        loadComponent: () =>
          import('./demos/stepper/stepper-demo.component').then(
            (m) => m.DmStepperDemoComponent,
          ),
      },

      {
        path: 'pill',
        loadComponent: () =>
          import('./demos/pill/pill-demo.component').then((m) => m.DmPillDemoComponent),
      },
      {
        path: 'cascade-select',
        loadComponent: () =>
          import('./demos/cascade-select/cascade-select-demo.component').then(
            (m) => m.DmCascadeSelectDemoComponent,
          ),
      },
      {
        path: 'skeleton',
        loadComponent: () =>
          import('./demos/skeleton/skeleton-demo.component').then(
            (m) => m.DmSkeletonDemoComponent,
          ),
      },
      {
        path: 'knob',
        loadComponent: () =>
          import('./demos/knob/knob-demo.component').then((m) => m.DmKnobDemoComponent),
      },
      {
        path: 'meter-group',
        loadComponent: () =>
          import('./demos/meter-group/meter-group-demo.component').then(
            (m) => m.DmMeterGroupDemoComponent,
          ),
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./demos/pagination/pagination-demo.component').then(
            (m) => m.DmPaginationDemoComponent,
          ),
      },
      {
        path: 'speed-dial',
        loadComponent: () =>
          import('./demos/speed-dial/speed-dial-demo.component').then(
            (m) => m.DmSpeedDialDemoComponent,
          ),
      },
      {
        path: 'speedometer',
        loadComponent: () =>
          import('./demos/speedometer/speedometer-demo.component').then(
            (m) => m.DmSpeedometerDemoComponent,
          ),
      },
      {
        path: 'range-slider',
        loadComponent: () =>
          import('./demos/range-slider/range-slider-demo.component').then(
            (m) => m.DmRangeSliderDemoComponent,
          ),
      },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./demos/timeline/timeline-demo.component').then(
            (m) => m.DmTimelineDemoComponent,
          ),
      },

      {
        path: 'tabs',
        loadComponent: () =>
          import('./demos/tabs/tabs-demo.component').then((m) => m.DmTabsDemoComponent),
      },
      {
        path: 'split-button',
        loadComponent: () =>
          import('./demos/split-button/split-button-demo.component').then(
            (m) => m.DmSplitButtonDemoComponent,
          ),
      },
      {
        path: 'tag',
        loadComponent: () =>
          import('./demos/tag/tag-demo.component').then((m) => m.DmTagDemoComponent),
      },
      {
        path: 'context-menu',
        loadComponent: () =>
          import('./demos/context-menu/context-menu-demo.component').then(
            (m) => m.DmContextMenuDemoComponent,
          ),
      },
      {
        path: 'dialog',
        loadComponent: () =>
          import('./demos/dialog-box/dialog-box-demo.component').then(
            (m) => m.DmDialogBoxDemoComponent,
          ),
      },
      {
        path: 'dock',
        loadComponent: () =>
          import('./demos/dock/dock-demo.component').then((m) => m.DmDockDemoComponent),
      },
      {
        path: 'picklist',
        loadComponent: () =>
          import('./demos/picklist/picklist-demo.component').then(
            (m) => m.DmPicklistDemoComponent,
          ),
      },
      {
        path: 'transfer-list',
        loadComponent: () =>
          import('./demos/transfer-list/transfer-list-demo.component').then(
            (m) => m.DmTransferListDemoComponent,
          ),
      },
      {
        path: 'timer',
        loadComponent: () =>
          import('./demos/timer/timer-demo.component').then((m) => m.DmTimerDemoComponent),
      },

      {
        path: 'smart-stepper',
        loadComponent: () =>
          import('./demos/smart-stepper/smart-stepper-demo.component').then(
            (m) => m.DmSmartStepperDemoComponent,
          ),
      },
      {
        path: 'scroll-top',
        loadComponent: () =>
          import('./demos/scroll-top/scroll-top-demo.component').then(
            (m) => m.DmScrollTopDemoComponent,
          ),
      },
      {
        path: 'advanced-data-table',
        loadComponent: () =>
          import('./demos/advanced-data-table/advanced-data-table-demo.component').then(
            (m) => m.DmAdvancedDataTableDemoComponent,
          ),
      },
      {
        path: 'nav-bar',
        loadComponent: () =>
          import('./demos/nav-bar/nav-bar-demo.component').then(
            (m) => m.DmNavBarDemoComponent,
          ),
      },
      {
        path: 'top-bar',
        loadComponent: () =>
          import('./demos/top-bar/top-bar-demo.component').then(
            (m) => m.DmTopBarDemoComponent,
          ),
      },
      {
        path: 'pattern-input',
        loadComponent: () =>
          import('./demos/pattern-input/pattern-input-demo.component').then(
            (m) => m.DmPatternInputDemoComponent,
          ),
      },
      {
        path: 'avatar-group',
        loadComponent: () =>
          import('./demos/avatar-group/avatar-group-demo.component').then(
            (m) => m.DmAvatarGroupDemoComponent,
          ),
      },
      {
        path: 'horizontal-nav',
        loadComponent: () =>
          import('./demos/horizontal-nav/horizontal-nav-demo.component').then(
            (m) => m.DmHorizontalNavDemoComponent,
          ),
      },
      {
        path: 'smart-menu',
        loadComponent: () =>
          import('./demos/smart-menu/smart-menu-demo.component').then(
            (m) => m.DmSmartMenuDemoComponent,
          ),
      },
      {
        path: 'tree-list',
        loadComponent: () =>
          import('./demos/tree-list/tree-list-demo.component').then(
            (m) => m.DmTreeListDemoComponent,
          ),
      },
      {
        path: 'bar-chart',
        loadComponent: () =>
          import('./demos/bar-chart/bar-chart-demo.component').then(
            (m) => m.DmBarChartDemoComponent,
          ),
      },
      {
        path: 'line-chart',
        loadComponent: () =>
          import('./demos/line-chart/line-chart-demo.component').then(
            (m) => m.DmLineChartDemoComponent,
          ),
      },
      {
        path: 'pie-chart',
        loadComponent: () =>
          import('./demos/pie-chart/pie-chart-demo.component').then(
            (m) => m.DmPieChartDemoComponent,
          ),
      },
      {
        path: 'waffle-chart',
        loadComponent: () =>
          import('./demos/waffle-chart/waffle-chart-demo.component').then(
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
          import('./demos/chart/chart-demo.component').then((m) => m.DmChartDemoComponent),
      },
      {
        path: 'layout-manager',
        loadComponent: () =>
          import('./demos/layout-manager/layout-manager-demo.component').then(
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




