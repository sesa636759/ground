import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreePlaygroundComponent } from './components/tree-playground/tree-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-tree-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TreePlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tree-demo.component.html',
  styleUrl: './set-tree-demo.component.scss',
})
export class SetTreeDemoComponent {
  variants = [
    { id: 'playground', name: 'Interactive Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'basic-tree', name: 'Basic Tree', icon: '🌲', color: '#3b82f6' },
    { id: 'icons-colors', name: 'Icons & Colors', icon: '🎨', color: '#10b981' },
    { id: 'badges-counters', name: 'Badges & Counters', icon: '🔢', color: '#f59e0b' },
    { id: 'selectable', name: 'Selectable Tree', icon: '✅', color: '#ef4444' },
    { id: 'checkboxes', name: 'With Checkboxes', icon: '☑️', color: '#6366f1' },
    { id: 'searchable', name: 'Searchable Tree', icon: '🔍', color: '#ec4899' },
    { id: 'sizes', name: 'Sizes', icon: '📏', color: '#14b8a6' },
    { id: 'variants', name: 'Variants', icon: '🎭', color: '#a855f7' },
    { id: 'org-chart', name: 'Org Chart', icon: '📊', color: '#06b6d4' },
    { id: 'premium', name: 'Premium Aesthetics', icon: '💎', color: '#84cc16' },
    { id: 'drag-drop', name: 'Drag & Drop', icon: '🔄', color: '#f97316' },
    { id: 'dark-theme', name: 'Dark Theme', icon: '🌙', color: '#2563eb' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Basic simple tree
  simpleTreeData = JSON.stringify([
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
  ]);

  // Project structure with colors
  projectTreeData = JSON.stringify([
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
  ]);

  // Tree with badges and counters
  taskTreeData = JSON.stringify([
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
  ]);

  // Org chart data
  orgChartData = JSON.stringify([
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
                { id: 'vp-eng', label: 'VP of Engineering', icon: 'fas fa-code', extra: 'Management' },
                { id: 'eng-mgr', label: 'Engineering Manager', icon: 'fas fa-users-cog' },
                { id: 'platform', label: 'Platform Architect', icon: 'fas fa-server' },
                { id: 'data', label: 'Head of Data Science', icon: 'fas fa-chart-line', extra: 'AI/ML' },
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
  ]);

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
