import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { TabStackPlaygroundComponent } from './components/tab-stack-playground/tab-stack-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'dm-set-tab-stack-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    TabStackPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tab-stack-demo.component.html',
  styleUrl: './set-tab-stack-demo.component.scss',
})
export class DmSetTabStackDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®' },
    { id: 'orientations', title: 'Orientation Options', icon: 'ðŸ“' },
    { id: 'variants', title: 'Visual Variants', icon: 'ðŸŽ­' },
    { id: 'features', title: 'Advanced Features', icon: 'âš™ï¸' },
    { id: 'sizes', title: 'Size Variants', icon: 'ðŸ“' },
    { id: 'premium', title: 'Premium Features', icon: 'ðŸ’Ž' },
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


