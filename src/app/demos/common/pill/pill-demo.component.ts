import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmPillPlaygroundComponent } from '../../../playground/common/pill-playground/pill-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-pill-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmPillPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pill-demo.component.html',
  styleUrl: './pill-demo.component.scss',
})
export class DmPillDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'styling', title: 'Styling Variants', icon: '🎨', color: '#3b82f6' },
    { id: 'features', title: 'Special Features', icon: '🚀', color: '#10b981' },
  ];

  playgroundCode = `<ui-pill label="New Tag" variant="soft" color="primary"></ui-pill>`;

  stylingCode = `<!-- Filled (Default) -->
<ui-pill label="Success" color="success" variant="filled"></ui-pill>

<!-- Soft Style -->
<ui-pill label="Info" color="info" variant="soft"></ui-pill>

<!-- Bordered Style -->
<ui-pill label="Warning" color="warning" variant="bordered"></ui-pill>`;

  featuresCode = `<!-- With Counters -->
<ui-pill label="Messages" counter="5" color="primary"></ui-pill>

<!-- Removable -->
<ui-pill label="Removable Item" removable (pillRemove)="handleRemove()"></ui-pill>

<!-- Loading State -->
<ui-pill loading label="Saving..."></ui-pill>`;
}
