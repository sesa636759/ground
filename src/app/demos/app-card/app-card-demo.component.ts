import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';

import { CardPlaygroundComponent } from './components/card-playground/card-playground.component';

import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { CardExamplesComponent } from './components/card-examples/card-examples.component';

@Component({
  selector: 'app-app-card-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    CardPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    CardExamplesComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-card-demo.component.html',
  styleUrl: './app-card-demo.component.scss',
})
export class AppCardDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'playground-hero', title: 'Premium Showcase', icon: '✨' },
    { id: 'basic', title: 'Core Structure', icon: '📋' },
    { id: 'media', title: 'Media Enhancements', icon: '🖼️' },
    { id: 'interactions', title: 'Rich Interactions', icon: '⚡' },
    { id: 'variants-showcase', title: 'Design Variants', icon: '🎨' },
    { id: 'responsive', title: 'Adaptive Layouts', icon: '📱' },
    { id: 'states', title: 'Functional States', icon: '⏳' },
    { id: 'advanced', title: 'Advanced Patterns', icon: '🚀' },
  ];

  playgroundCode = `<ui-card variant="elevated" hoverable width="340px">
  <div slot="cover">...</div>
  <div slot="header"><h3>Card Title</h3></div>
  <div slot="content">...</div>
  <div slot="footer">...</div>
</ui-card>`;
}
