import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmCascadeSelectPlaygroundComponent } from '../../../playground/common/cascade-select-playground/cascade-select-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-cascade-select-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmCascadeSelectPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './cascade-select-demo.component.html',
  styleUrl: './cascade-select-demo.component.scss',
})
export class DmCascadeSelectDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'triggers', title: 'Triggers & Display', icon: '⚡', color: '#3b82f6' },
    { id: 'selection', title: 'Selection Logic', icon: '🎯', color: '#10b981' },
  ];

  fileSystemOptions = [
    {
      label: 'Documents',
      value: 'docs',
      children: [
        { label: 'Work', value: 'work', children: [{ label: 'Resume.pdf', value: 'resume' }] },
        { label: 'Personal', value: 'personal' },
      ],
    },
    { label: 'Images', value: 'img', children: [{ label: 'Nature.jpg', value: 'nature' }] },
  ];

  playgroundCode = `<ui-cascade-select [options]="options" placeholder="Select item"></ui-cascade-select>`;

  triggersCode = `<!-- Expand on Click -->
<ui-cascade-select expand-trigger="click" [options]="options"></ui-cascade-select>

<!-- Show only leaf label (No path) -->
<ui-cascade-select [show-full-path]="false" [options]="options"></ui-cascade-select>`;

  selectionCode = `<!-- Select path at any level -->
<ui-cascade-select change-on-select [options]="options"></ui-cascade-select>`;
}
