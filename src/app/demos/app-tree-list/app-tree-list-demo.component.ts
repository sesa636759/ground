import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeListPlaygroundComponent } from './components/tree-list-playground/tree-list-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-tree-list-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
export class AppTreeListDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'examples', name: 'Examples', icon: '📂', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  treeData = JSON.stringify([
    {
      label: 'Root',
      children: [
        { label: 'Child 1', children: [] },
        { label: 'Child 2', children: [] },
      ],
    },
  ]);

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

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
