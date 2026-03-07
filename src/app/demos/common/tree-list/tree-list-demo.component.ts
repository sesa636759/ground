import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DmTreeListPlaygroundComponent } from '../../../playground/common/tree-list-playground/tree-list-playground.component';

@Component({
  selector: 'dm-tree-list-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTreeListPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tree-list-demo.component.html',
  styleUrl: './tree-list-demo.component.scss',
})
export class DmTreeListDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'examples', title: 'Examples', icon: 'ðŸ“‚', color: '#3b82f6' },
  ];

  treeData = [
    {
      label: 'Root',
      children: [
        { label: 'Child 1', children: [] },
        { label: 'Child 2', children: [] },
      ],
    },
  ];

  playgroundCode = `<ui-tree-list [model]="data" selectable></ui-tree-list>`;

  examplesCode = `const fileSystem = [
  {
    label: 'src',
    icon: 'ðŸ“',
    children: [
      { label: 'app', icon: 'ðŸ“', children: [
        { label: 'app.component.ts', icon: 'ðŸ“„' }
      ]},
      { label: 'assets', icon: 'ðŸ“', children: [] }
    ]
  }
];`;
}
