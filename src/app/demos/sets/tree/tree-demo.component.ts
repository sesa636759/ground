import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DmTreePlaygroundComponent } from '../../../playground/sets/tree-playground/tree-playground.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'ds-tree-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTreePlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tree-demo.component.html',
  styleUrl: './tree-demo.component.scss',
})
export class DmTreeDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic-tree', title: 'Basic Tree', icon: 'tree-pine', iconLibrary: 'lucide' },
    { id: 'icons-colors', title: 'Icons & Colors', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'badges-counters', title: 'Badges & Counters', icon: 'info', iconLibrary: 'lucide' },
    { id: 'selectable', title: 'Selectable Tree', icon: 'check-square', iconLibrary: 'lucide' },
    { id: 'checkboxes', title: 'With Checkboxes', icon: 'list-checks', iconLibrary: 'lucide' },
    { id: 'searchable', title: 'Searchable Tree', icon: 'search', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizes', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Variants', icon: 'layers', iconLibrary: 'lucide' },
    { id: 'org-chart', title: 'Org Chart', icon: 'users', iconLibrary: 'lucide' },
    { id: 'premium', title: 'Premium Aesthetics', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'drag-drop', title: 'Drag & Drop', icon: 'move', iconLibrary: 'lucide' },
    { id: 'dark-theme', title: 'Dark Theme', icon: 'moon', iconLibrary: 'lucide' },
  ];

  // Basic simple tree
  simpleTreeData = [
    {
      id: '1',
      label: 'Root Folder',
      icon: 'circle',
      iconLibrary: 'lucide',
      expanded: true,
      children: [
        { id: '2', label: 'Documents', icon: 'fas fa-folder' },
        { id: '3', label: 'Pictures', icon: 'circle',
      iconLibrary: 'lucide' },
        { id: '4', label: 'Music', icon: 'circle',
      iconLibrary: 'lucide' },
      ],
    },
  ];

  // Project structure with colors
  projectTreeData = [
    {
      id: 'proj',
      label: 'My Project',
      icon: 'circle',
      iconLibrary: 'lucide',
      color: '#3b82f6',
      expanded: true,
      children: [
        {
          id: 'src',
          label: 'src',
          icon: 'fas fa-folder',
          color: '#8b5cf6',
          children: [
            { id: 'index', label: 'index.ts', icon: 'fab fa-js', color: '#f59e0b' },
            { id: 'styles', label: 'styles.css', icon: 'palette',
      iconLibrary: 'lucide', color: '#06b6d4' },
            { id: 'app', label: 'App.tsx', icon: 'circle',
      iconLibrary: 'lucide', color: '#61dafb' },
          ],
        },
        { id: 'public', label: 'public', icon: 'circle',
      iconLibrary: 'lucide', color: '#10b981' },
        { id: 'package', label: 'package.json', icon: 'circle',
      iconLibrary: 'lucide', color: '#ef4444' },
        { id: 'readme', label: 'README.md', icon: 'circle',
      iconLibrary: 'lucide', color: '#6b7280' },
      ],
    },
  ];

  // Tree with badges and counters
  taskTreeData = [
    {
      id: 'projects',
      label: 'Projects',
      icon: 'circle',
      iconLibrary: 'lucide',
      badge: 'Active',
      badgeColor: 'success',
      counter: 3,
      expanded: true,
      children: [
        {
          id: 'web',
          label: 'Website Redesign',
          icon: 'fas fa-globe',
          badge: 'High',
          badgeColor: 'danger',
          counter: 5,
        },
        {
          id: 'mobile',
          label: 'Mobile App',
          icon: 'circle',
      iconLibrary: 'lucide',
          badge: 'Medium',
          badgeColor: 'warning',
          counter: 8,
        },
      ],
    },
  ];

  // Org chart data
  orgChartData = [
    {
      id: 'board',
      label: 'Board of Directors',
      icon: 'circle',
      iconLibrary: 'lucide',
      extra: 'Top Level',
      expanded: true,
      children: [
        {
          id: 'ceo',
          label: 'Chief Executive Officer',
          icon: 'fas fa-user-tie',
          extra: 'CEO',
          expanded: true,
          children: [
            {
              id: 'cto',
              label: 'Chief Technology Officer',
              icon: 'fas fa-laptop-code',
              extra: 'Tech',
              children: [
                {
                  id: 'vp-eng',
                  label: 'VP of Engineering',
                  icon: 'fas fa-code',
                  extra: 'Management',
                },
                { id: 'eng-mgr', label: 'Engineering Manager', icon: 'circle',
      iconLibrary: 'lucide' },
                { id: 'platform', label: 'Platform Architect', icon: 'circle',
      iconLibrary: 'lucide' },
                {
                  id: 'data',
                  label: 'Head of Data Science',
                  icon: 'circle',
      iconLibrary: 'lucide',
                  extra: 'AI/ML',
                },
              ],
            },
            {
              id: 'cpo',
              label: 'Chief Product Officer',
              icon: 'circle',
      iconLibrary: 'lucide',
              extra: 'Product',
            },
          ],
        },
      ],
    },
  ];

  playgroundCode = `<app-tree
  [data]="treeData"
  [selectable]="true"
  [checkboxes]="false"
></app-tree>`;

  basicTreeCode = `<app-tree
  [data]="basicTreeData"
  [selectable]="true"
  [icons]="true"
></app-tree>`;

  orgChartCode = `<app-tree
  [data]="orgChartData"
  [selectable]="false"
  [icons]="true"
  layout="horizontal"
></app-tree>`;
}
