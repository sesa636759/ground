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
        path: 'app-library',
        loadComponent: () =>
          import('./docs/app-library/app-library-docs.component').then(
            (m) => m.AppLibraryDocsComponent,
          ),
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
        path: 'aside',
        loadComponent: () =>
          import('./docs/aside/aside-docs.component').then((m) => m.AsideDocsComponent),
      },
      {
        path: 'divider',
        loadComponent: () =>
          import('./docs/divider/divider-docs.component').then((m) => m.DividerDocsComponent),
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
