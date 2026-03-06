import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { DmTreePlaygroundComponent } from '../../playground/sets/set-tree-tree-playground/set-tree-tree-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';

@Component({
  selector: 'dm-set-tree-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTreePlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tree-demo.component.html',
  styleUrl: './set-tree-demo.component.scss',
})
export class DmSetTreeDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic-tree', title: 'Basic Tree', icon: 'ðŸŒ²' },
    { id: 'icons-colors', title: 'Icons & Colors', icon: 'ðŸŽ¨' },
    { id: 'badges-counters', title: 'Badges & Counters', icon: 'ðŸ”¢' },
    { id: 'selectable', title: 'Selectable Tree', icon: 'âœ…' },
    { id: 'checkboxes', title: 'With Checkboxes', icon: 'â˜‘ï¸' },
    { id: 'searchable', title: 'Searchable Tree', icon: 'ðŸ”' },
    { id: 'sizes', title: 'Sizes', icon: 'ðŸ“' },
    { id: 'variants', title: 'Variants', icon: 'ðŸŽ­' },
    { id: 'org-chart', title: 'Org Chart', icon: 'ðŸ“Š' },
    { id: 'premium', title: 'Premium Aesthetics', icon: 'ðŸ’Ž' },
    { id: 'drag-drop', title: 'Drag & Drop', icon: 'ðŸ”„' },
    { id: 'dark-theme', title: 'Dark Theme', icon: 'ðŸŒ™' },
  ];

  // Basic simple tree
  simpleTreeData = [
    {
      id: '1',
      label: 'Root Folder',
      icon: 'fas fa-folder',
      expanded: true,
      children: [
        { id: '2', label: 'Documents', icon: 'fas fa-folder' },
        { id: '3', label: 'Pictures', icon: 'fas fa-folder' },
        { id: '4', label: 'Music', icon: 'fas fa-folder' },
      ],
    },
  ];

  // Project structure with colors
  projectTreeData = [
    {
      id: 'proj',
      label: 'My Project',
      icon: 'fas fa-folder-open',
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
            { id: 'styles', label: 'styles.css', icon: 'fab fa-css3', color: '#06b6d4' },
            { id: 'app', label: 'App.tsx', icon: 'fab fa-react', color: '#61dafb' },
          ],
        },
        { id: 'public', label: 'public', icon: 'fas fa-folder', color: '#10b981' },
        { id: 'package', label: 'package.json', icon: 'fas fa-file-code', color: '#ef4444' },
        { id: 'readme', label: 'README.md', icon: 'fas fa-file-alt', color: '#6b7280' },
      ],
    },
  ];

  // Tree with badges and counters
  taskTreeData = [
    {
      id: 'projects',
      label: 'Projects',
      icon: 'fas fa-briefcase',
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
          icon: 'fas fa-mobile',
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
      icon: 'fas fa-users',
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
                { id: 'eng-mgr', label: 'Engineering Manager', icon: 'fas fa-users-cog' },
                { id: 'platform', label: 'Platform Architect', icon: 'fas fa-server' },
                {
                  id: 'data',
                  label: 'Head of Data Science',
                  icon: 'fas fa-chart-line',
                  extra: 'AI/ML',
                },
              ],
            },
            {
              id: 'cpo',
              label: 'Chief Product Officer',
              icon: 'fas fa-lightbulb',
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
