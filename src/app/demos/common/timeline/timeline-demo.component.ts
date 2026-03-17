import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmTimelinePlaygroundComponent } from '../../../playground/common/timeline-playground/timeline-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-timeline-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTimelinePlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timeline-demo.component.html',
  styleUrl: './timeline-demo.component.scss',
})
export class DmTimelineDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'alignments', title: 'Alignments', icon: '📏', color: '#3b82f6' },
    { id: 'orientations', title: 'Orientations', icon: '📐', color: '#10b981' },
  ];

  events = [
    { status: 'Draft', date: 'Oct 1st', color: '#94a3b8' },
    { status: 'Submitted', date: 'Oct 3rd', color: '#3b82f6' },
    { status: 'Approved', date: 'Oct 5th', color: '#10b981' },
  ];

  playgroundCode = `<dui-timeline [value]="events" align="left">
  <ng-template let-item>
    <strong>{{ item.status }}</strong>
    <span>{{ item.date }}</span>
  </ng-template>
</dui-timeline>`;

  alignmentsCode = `<!-- Alternating Sides -->
<dui-timeline align="alternate" [value]="events"></dui-timeline>

<!-- Right Aligned -->
<dui-timeline align="right" [value]="events"></dui-timeline>`;

  orientationsCode = `<!-- Horizontal Flow -->
<dui-timeline orientation="horizontal" [value]="events"></dui-timeline>`;
}
