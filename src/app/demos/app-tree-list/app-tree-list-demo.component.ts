import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { TreeListPlaygroundComponent } from './components/tree-list-playground/tree-list-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-tree-list-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    TreeListPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-tree-list-demo.component.html',
  styleUrl: './app-tree-list-demo.component.scss',
})
export class AppTreeListDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'examples', title: 'Examples', icon: '📂', color: '#3b82f6' },
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
    icon: '📁',
    children: [
      { label: 'app', icon: '📁', children: [
        { label: 'app.component.ts', icon: '📄' }
      ]},
      { label: 'assets', icon: '📁', children: [] }
    ]
  }
];`;
}
