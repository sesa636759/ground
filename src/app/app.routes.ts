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
    path: 'playground',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/playground/playground.component').then((m) => m.PlaygroundComponent),
      },
      {
        path: ':componentId',
        loadComponent: () =>
          import('./pages/playground/playground.component').then((m) => m.PlaygroundComponent),
      },
    ],
  },
  {
    path: 'documentation',
    loadComponent: () =>
      import('./pages/documentation/documentation.component').then((m) => m.DocumentationComponent),
  },
  {
    path: 'demos',
    children: [
      {
        path: 'card',
        loadComponent: () =>
          import('./demos/card/card-demo.component').then((m) => m.CardDemoComponent),
      },
      // Add more demo routes here
    ],
  },
  {
    path: 'docs',
    children: [
      {
        path: '',
        redirectTo: 'button',
        pathMatch: 'full',
      },
      {
        path: 'button',
        loadComponent: () =>
          import('./docs/button/button-docs.component').then((m) => m.ButtonDocsComponent),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./docs/card/card-docs.component').then((m) => m.CardDocsComponent),
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./docs/badge/badge-docs.component').then((m) => m.BadgeDocsComponent),
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import('./docs/avatar/avatar-docs.component').then((m) => m.AvatarDocsComponent),
      },
      {
        path: 'avatar-group',
        loadComponent: () =>
          import('./docs/avatar-group/avatar-group-docs.component').then(
            (m) => m.AvatarGroupDocsComponent,
          ),
      },
      {
        path: 'skeleton',
        loadComponent: () =>
          import('./docs/skeleton/skeleton-docs.component').then((m) => m.SkeletonDocsComponent),
      },
      {
        path: 'rating',
        loadComponent: () =>
          import('./docs/rating/rating-docs.component').then((m) => m.RatingDocsComponent),
      },
      {
        path: 'pill',
        loadComponent: () =>
          import('./docs/pill/pill-docs.component').then((m) => m.PillDocsComponent),
      },
      {
        path: 'divider',
        loadComponent: () =>
          import('./docs/divider/divider-docs.component').then((m) => m.DividerDocsComponent),
      },
      {
        path: 'accordion',
        loadComponent: () =>
          import('./docs/accordion/accordion-docs.component').then((m) => m.AccordionDocsComponent),
      },
      {
        path: 'aside',
        loadComponent: () =>
          import('./docs/aside/aside-docs.component').then((m) => m.AsideDocsComponent),
      },
      {
        path: 'switch',
        loadComponent: () =>
          import('./docs/switch/switch-docs.component').then((m) => m.SwitchDocsComponent),
      },
      {
        path: 'chip',
        loadComponent: () =>
          import('./docs/chip/chip-docs.component').then((m) => m.ChipDocsComponent),
      },
      {
        path: 'tag',
        loadComponent: () =>
          import('./docs/tag/tag-docs.component').then((m) => m.TagDocsComponent),
      },

      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('./docs/breadcrumb/breadcrumb-docs.component').then(
            (m) => m.BreadcrumbDocsComponent,
          ),
      },
      {
        path: 'tabs',
        loadComponent: () =>
          import('./docs/tabs/tabs-docs.component').then((m) => m.TabsDocsComponent),
      },
      {
        path: 'dropdown',
        loadComponent: () =>
          import('./docs/dropdown/dropdown-docs.component').then((m) => m.DropdownDocsComponent),
      },
      {
        path: 'stepper',
        loadComponent: () =>
          import('./docs/stepper/stepper-docs.component').then((m) => m.StepperDocsComponent),
      },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./docs/timeline/timeline-docs.component').then((m) => m.TimelineDocsComponent),
      },
      {
        path: 'dialog',
        loadComponent: () =>
          import('./docs/dialog/dialog-docs.component').then((m) => m.DialogDocsComponent),
      },
      {
        path: 'stack',
        loadComponent: () =>
          import('./docs/stack/stack-docs.component').then((m) => m.StackDocsComponent),
      },
      {
        path: 'splitter',
        loadComponent: () =>
          import('./docs/splitter/splitter-docs.component').then((m) => m.SplitterDocsComponent),
      },
      {
        path: 'panel',
        loadComponent: () =>
          import('./docs/panel/panel-docs.component').then((m) => m.PanelDocsComponent),
      },
      {
        path: 'dock',
        loadComponent: () =>
          import('./docs/dock/dock-docs.component').then((m) => m.DockDocsComponent),
      },
      {
        path: 'dock-host',
        loadComponent: () =>
          import('./docs/dock-host/dock-host-docs.component').then((m) => m.DockHostDocsComponent),
      },
      {
        path: 'layout-manager',
        loadComponent: () =>
          import('./docs/layout-manager/layout-manager-docs.component').then(
            (m) => m.LayoutManagerDocsComponent,
          ),
      },
      {
        path: 'anchor',
        loadComponent: () =>
          import('./docs/anchor/anchor-docs.component').then((m) => m.AnchorDocsComponent),
      },
      {
        path: 'context-menu',
        loadComponent: () =>
          import('./docs/context-menu/context-menu-docs.component').then(
            (m) => m.ContextMenuDocsComponent,
          ),
      },
      {
        path: 'horizontal-nav',
        loadComponent: () =>
          import('./docs/horizontal-nav/horizontal-nav-docs.component').then(
            (m) => m.HorizontalNavDocsComponent,
          ),
      },
      {
        path: 'nav-bar',
        loadComponent: () =>
          import('./docs/nav-bar/nav-bar-docs.component').then((m) => m.NavBarDocsComponent),
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./docs/pagination/pagination-docs.component').then(
            (m) => m.PaginationDocsComponent,
          ),
      },
      {
        path: 'scroll-top',
        loadComponent: () =>
          import('./docs/scroll-top/scroll-top-docs.component').then(
            (m) => m.ScrollTopDocsComponent,
          ),
      },
      {
        path: 'smart-menu',
        loadComponent: () =>
          import('./docs/smart-menu/smart-menu-docs.component').then(
            (m) => m.SmartMenuDocsComponent,
          ),
      },
      {
        path: 'smart-stepper',
        loadComponent: () =>
          import('./docs/smart-stepper/smart-stepper-docs.component').then(
            (m) => m.SmartStepperDocsComponent,
          ),
      },
      {
        path: 'speed-dial',
        loadComponent: () =>
          import('./docs/speed-dial/speed-dial-docs.component').then(
            (m) => m.SpeedDialDocsComponent,
          ),
      },
      {
        path: 'top-bar',
        loadComponent: () =>
          import('./docs/top-bar/top-bar-docs.component').then((m) => m.TopBarDocsComponent),
      },
      {
        path: 'button-group',
        loadComponent: () =>
          import('./docs/button-group/button-group-docs.component').then(
            (m) => m.ButtonGroupDocsComponent,
          ),
      },
      {
        path: 'cascade-select',
        loadComponent: () =>
          import('./docs/cascade-select/cascade-select-docs.component').then(
            (m) => m.CascadeSelectDocsComponent,
          ),
      },
      {
        path: 'knob',
        loadComponent: () =>
          import('./docs/knob/knob-docs.component').then((m) => m.KnobDocsComponent),
      },
      {
        path: 'otp-input',
        loadComponent: () =>
          import('./docs/otp-input/otp-input-docs.component').then((m) => m.OtpInputDocsComponent),
      },
      {
        path: 'pattern-input',
        loadComponent: () =>
          import('./docs/pattern-input/pattern-input-docs.component').then(
            (m) => m.PatternInputDocsComponent,
          ),
      },
      {
        path: 'picklist',
        loadComponent: () =>
          import('./docs/picklist/picklist-docs.component').then((m) => m.PicklistDocsComponent),
      },
      {
        path: 'range-slider',
        loadComponent: () =>
          import('./docs/range-slider/range-slider-docs.component').then(
            (m) => m.RangeSliderDocsComponent,
          ),
      },
      {
        path: 'transfer-list',
        loadComponent: () =>
          import('./docs/transfer-list/transfer-list-docs.component').then(
            (m) => m.TransferListDocsComponent,
          ),
      },
      {
        path: 'advanced-data-table',
        loadComponent: () =>
          import('./docs/advanced-data-table/advanced-data-table-docs.component').then(
            (m) => m.AdvancedDataTableDocsComponent,
          ),
      },
      {
        path: 'bar-chart',
        loadComponent: () =>
          import('./docs/bar-chart/bar-chart-docs.component').then((m) => m.BarChartDocsComponent),
      },
      {
        path: 'meter-group',
        loadComponent: () =>
          import('./docs/meter-group/meter-group-docs.component').then(
            (m) => m.MeterGroupDocsComponent,
          ),
      },
      {
        path: 'speedometer',
        loadComponent: () =>
          import('./docs/speedometer/speedometer-docs.component').then(
            (m) => m.SpeedometerDocsComponent,
          ),
      },
      {
        path: 'tree-list',
        loadComponent: () =>
          import('./docs/tree-list/tree-list-docs.component').then((m) => m.TreeListDocsComponent),
      },
      {
        path: 'popover',
        loadComponent: () =>
          import('./docs/popover/popover-docs.component').then((m) => m.PopoverDocsComponent),
      },
      {
        path: 'snackbar',
        loadComponent: () =>
          import('./docs/snackbar/snackbar-docs.component').then((m) => m.SnackbarDocsComponent),
      },
      {
        path: 'timer',
        loadComponent: () =>
          import('./docs/timer/timer-docs.component').then((m) => m.TimerDocsComponent),
      },
      {
        path: 'radio',
        loadComponent: () =>
          import('./docs/radio/radio-docs.component').then((m) => m.RadioDocsComponent),
      },
      {
        path: 'set-tabs',
        loadComponent: () =>
          import('./docs/set-tabs/set-tabs-docs.component').then((m) => m.SetTabsDocsComponent),
      },
      {
        path: 'set-resizable-panel',
        loadComponent: () =>
          import('./docs/set-resizable-panel/set-resizable-panel-docs.component').then(
            (m) => m.SetResizablePanelDocsComponent,
          ),
      },
      {
        path: 'set-modern-sidebar',
        loadComponent: () =>
          import('./docs/set-modern-sidebar/set-modern-sidebar-docs.component').then(
            (m) => m.SetModernSidebarDocsComponent,
          ),
      },
      {
        path: 'set-anchor',
        loadComponent: () =>
          import('./docs/set-anchor/set-anchor-docs.component').then(
            (m) => m.SetAnchorDocsComponent,
          ),
      },
      {
        path: 'set-button-toggle',
        loadComponent: () =>
          import('./docs/set-button-toggle/set-button-toggle-docs.component').then(
            (m) => m.SetButtonToggleDocsComponent,
          ),
      },
      {
        path: 'set-checkbox',
        loadComponent: () =>
          import('./docs/set-checkbox/set-checkbox-docs.component').then(
            (m) => m.SetCheckboxDocsComponent,
          ),
      },
      {
        path: 'set-input',
        loadComponent: () =>
          import('./docs/set-input/set-input-docs.component').then((m) => m.SetInputDocsComponent),
      },
      {
        path: 'set-layout-manager',
        loadComponent: () =>
          import('./docs/set-layout-manager/set-layout-manager-docs.component').then(
            (m) => m.SetLayoutManagerDocsComponent,
          ),
      },
      {
        path: 'set-context-menu',
        loadComponent: () =>
          import('./docs/set-context-menu/set-context-menu-docs.component').then(
            (m) => m.SetContextMenuDocsComponent,
          ),
      },
      {
        path: 'set-card',
        loadComponent: () =>
          import('./docs/set-card/set-card-docs.component').then((m) => m.SetCardDocsComponent),
      },
      {
        path: 'set-splitter',
        loadComponent: () =>
          import('./docs/set-splitter/set-splitter-docs.component').then(
            (m) => m.SetSplitterDocsComponent,
          ),
      },
      {
        path: 'set-scroll-top',
        loadComponent: () =>
          import('./docs/set-scroll-top/set-scroll-top-docs.component').then(
            (m) => m.SetScrollTopDocsComponent,
          ),
      },
      {
        path: 'set-sidebar',
        loadComponent: () =>
          import('./docs/set-sidebar/set-sidebar-docs.component').then(
            (m) => m.SetSidebarDocsComponent,
          ),
      },
      {
        path: 'set-theme-switcher',
        loadComponent: () =>
          import('./docs/set-theme-switcher/set-theme-switcher-docs.component').then(
            (m) => m.SetThemeSwitcherDocsComponent,
          ),
      },
      {
        path: 'carousel',
        loadComponent: () =>
          import('./docs/carousel/carousel-docs.component').then((m) => m.CarouselDocsComponent),
      },
      // Enterprise Modules
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./docs/dashboard/dashboard-docs.component').then((m) => m.DashboardDocsComponent),
      },
      {
        path: 'code-editor',
        loadComponent: () =>
          import('./docs/code-editor/code-editor-docs.component').then((m) => m.CodeEditorDocsComponent),
      },
      {
        path: 'masonry',
        loadComponent: () =>
          import('./docs/masonry/masonry-docs.component').then((m) => m.MasonryDocsComponent),
      },
      {
        path: 'set-avatar',
        loadComponent: () =>
          import('./docs/set-avatar/set-avatar-docs.component').then((m) => m.SetAvatarDocsComponent),
      },
      {
        path: 'set-avatar-group',
        loadComponent: () =>
          import('./docs/set-avatar-group/set-avatar-group-docs.component').then((m) => m.SetAvatarGroupDocsComponent),
      },
      {
        path: 'set-list',
        loadComponent: () =>
          import('./docs/set-list/set-list-docs.component').then((m) => m.SetListDocsComponent),
      },
      {
        path: 'set-timeline',
        loadComponent: () =>
          import('./docs/set-timeline/set-timeline-docs.component').then((m) => m.SetTimelineDocsComponent),
      },
      {
        path: 'set-tree',
        loadComponent: () =>
          import('./docs/set-tree/set-tree-docs.component').then((m) => m.SetTreeDocsComponent),
      },
      // Experience Design
      {
        path: 'empty-state',
        loadComponent: () =>
          import('./docs/empty-state/empty-state-docs.component').then((m) => m.EmptyStateDocsComponent),
      },
      {
        path: 'animate-on-scroll',
        loadComponent: () =>
          import('./docs/animate-on-scroll/animate-on-scroll-docs.component').then((m) => m.AnimateOnScrollDocsComponent),
      },
      {
        path: 'set-progress',
        loadComponent: () =>
          import('./docs/set-progress/set-progress-docs.component').then((m) => m.SetProgressDocsComponent),
      },
      {
        path: 'set-tooltip',
        loadComponent: () =>
          import('./docs/set-tooltip/set-tooltip-docs.component').then((m) => m.SetTooltipDocsComponent),
      },
      {
        path: 'set-tags-input',
        loadComponent: () =>
          import('./docs/set-tags-input/set-tags-input-docs.component').then((m) => m.SetTagsInputDocsComponent),
      },
      {
        path: 'set-toggle',
        loadComponent: () =>
          import('./docs/set-toggle/set-toggle-docs.component').then((m) => m.SetToggleDocsComponent),
      },
      {
        path: 'set-stepper',
        loadComponent: () =>
          import('./docs/set-stepper/set-stepper-docs.component').then((m) => m.SetStepperDocsComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./docs/generic/generic-docs.component').then((m) => m.GenericDocsComponent),
      },
    ],
  },
  {
    path: 'theme-selector',
    loadComponent: () =>
      import('./pages/settings/settings.component').then((m) => m.ThemeSettingsComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
