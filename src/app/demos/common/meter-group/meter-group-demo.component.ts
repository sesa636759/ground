import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmMeterGroupPlaygroundComponent } from '../../../playground/common/meter-group-playground/meter-group-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-meter-group-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmMeterGroupPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './meter-group-demo.component.html',
  styleUrl: './meter-group-demo.component.scss',
})
export class DmMeterGroupDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'displays', title: 'Display Types', icon: 'ðŸ“Š', color: '#3b82f6' },
    { id: 'layouts', title: 'Advanced Layouts', icon: 'ðŸ“', color: '#10b981' },
  ];

  storageValues = [
    { label: 'Apps', value: 35, color: '#3b82f6' },
    { label: 'Photos', value: 20, color: '#ec4899' },
    { label: 'System', value: 15, color: '#94a3b8' },
  ];

  playgroundCode = `<ui-meter-group [values]="values"></ui-meter-group>`;

  displaysCode = `<!-- Simple Markers -->
<ui-meter-group [values]="values" show-markers></ui-meter-group>

<!-- Custom Meter Height -->
<ui-meter-group [values]="values" meter-height="24px"></ui-meter-group>`;

  layoutsCode = `<!-- Vertical Alignment -->
<ui-meter-group orientation="vertical" [values]="values"></ui-meter-group>

<!-- Legend at Start -->
<ui-meter-group label-position="start" [values]="values"></ui-meter-group>`;
}
