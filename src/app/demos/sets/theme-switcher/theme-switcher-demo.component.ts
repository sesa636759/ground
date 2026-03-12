import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmThemeSwitcherPlaygroundComponent } from '../../../playground/sets/theme-switcher-playground/theme-switcher-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-theme-switcher-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmThemeSwitcherPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './theme-switcher-demo.component.html',
  styleUrl: './theme-switcher-demo.component.scss',
})
export class DmThemeSwitcherDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Size Variants', icon: 'scaling', iconLibrary: 'lucide' },
    { id: 'icons', title: 'Icon Options', icon: 'smile', iconLibrary: 'lucide' },
    { id: 'premium', title: 'Premium Features', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  themes = [
    { value: 'light', label: 'Light', icon: 'fas fa-sun' },
    { value: 'dark', label: 'Dark', icon: 'fas fa-moon' },
    { value: 'auto', label: 'Auto', icon: 'fas fa-circle-half-stroke' },
  ];

  playgroundCode = `<app-theme-switcher
  [themes]="themes"
  [(ngModel)]="currentTheme"
></app-theme-switcher>`;
}
