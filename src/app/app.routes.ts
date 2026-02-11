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
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
