import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabStackPlaygroundComponent } from './components/tab-stack-playground/tab-stack-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-set-tab-stack-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
export class SetTabStackDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'orientations', title: 'Orientation Options', icon: '📏' },
    { id: 'variants', title: 'Visual Variants', icon: '🎭' },
    { id: 'features', title: 'Advanced Features', icon: '⚙️' },
    { id: 'sizes', title: 'Size Variants', icon: '📏' },
    { id: 'premium', title: 'Premium Features', icon: '💎' },
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
