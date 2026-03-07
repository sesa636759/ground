import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';

import { DmCardPlaygroundComponent } from 'src/app/playground/common/card-playground/card-playground.component';
import { CardExamplesComponent } from './components/card-examples/card-examples.component';

@Component({
  selector: 'dm-card-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmCardPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    CardExamplesComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-demo.component.html',
  styleUrl: './card-demo.component.scss',
})
export class DmCardDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®' },
    { id: 'playground-hero', title: 'Premium Showcase', icon: 'âœ¨' },
    { id: 'basic', title: 'Core Structure', icon: 'ðŸ“‹' },
    { id: 'media', title: 'Media Enhancements', icon: 'ðŸ–¼ï¸' },
    { id: 'interactions', title: 'Rich Interactions', icon: 'âš¡' },
    { id: 'variants-showcase', title: 'Design Variants', icon: 'ðŸŽ¨' },
    { id: 'responsive', title: 'Adaptive Layouts', icon: 'ðŸ“±' },
    { id: 'states', title: 'Functional States', icon: 'â³' },
    { id: 'advanced', title: 'Advanced Patterns', icon: 'ðŸš€' },
  ];

  playgroundCode = `<ui-card variant="elevated" hoverable width="340px">
  <div slot="cover">...</div>
  <div slot="header"><h3>Card Title</h3></div>
  <div slot="content">...</div>
  <div slot="footer">...</div>
</ui-card>`;
}
