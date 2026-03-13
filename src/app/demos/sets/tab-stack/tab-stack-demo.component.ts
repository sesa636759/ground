import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DmTabStackPlaygroundComponent } from '../../../playground/sets/tab-stack-playground/tab-stack-playground.component';

@Component({
  selector: 'ds-tab-stack-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTabStackPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tab-stack-demo.component.html',
  styleUrl: './tab-stack-demo.component.scss',
})
export class DmTabStackDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'orientations', title: 'Orientation Options', icon: 'move', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'features', title: 'Advanced Features', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Size Variants', icon: 'scaling', iconLibrary: 'lucide' },
    { id: 'premium', title: 'Premium Features', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  tabs = [
    { id: 'tab1', label: 'Dashboard', icon: 'fas fa-home', content: 'Dashboard content' },
    { id: 'tab2', label: 'Analytics', icon: 'fas fa-chart-line', content: 'Analytics content' },
    { id: 'tab3', label: 'Settings', icon: 'fas fa-cog', content: 'Settings content' },
    { id: 'tab4', label: 'Profile', icon: 'fas fa-user', content: 'Profile content' },
  ];

  playgroundCode = `<app-tab-stack
  [tabs]="tabs"
  [closable]="true"
></app-tab-stack>`;
}
