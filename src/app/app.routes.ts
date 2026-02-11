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
        path: 'set-masonry',
        loadComponent: () =>
          import('./demos/set-masonry/set-masonry-demo.component').then(
            (m) => m.SetMasonryDemoComponent,
          ),
      },
    ],
  },
  {
    path: 'docs',
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
        path: 'set-masonry',
        loadComponent: () =>
          import('./demos/set-masonry/set-masonry-demo.component').then(
            (m) => m.SetMasonryDemoComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
