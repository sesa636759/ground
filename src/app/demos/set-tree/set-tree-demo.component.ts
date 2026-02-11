import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreePlaygroundComponent } from './components/tree-playground/tree-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-tree-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TreePlaygroundComponent, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tree-demo.component.html',
  styleUrl: './set-tree-demo.component.scss',
})
export class SetTreeDemoComponent implements OnInit {
  basicTreeData = [
    {
      id: 'root',
      label: 'Documentation',
      icon: 'fas fa-book',
      expanded: true,
      children: [
        { id: 'intro', label: 'Introduction', icon: 'fas fa-info-circle' },
        {
          id: 'guide',
          label: 'User Guide',
          icon: 'fas fa-map',
          children: [
            { id: 'install', label: 'Installation', icon: 'fas fa-download' },
            { id: 'setup', label: 'Setup', icon: 'fas fa-wrench' },
          ],
        },
      ],
    },
  ];

  orgChartData = [
    {
      id: 'ceo',
      label: 'Sarah Wilson',
      icon: 'fas fa-user-tie',
      extra: 'CEO & Founder',
      expanded: true,
      children: [
        {
          id: 'cto',
          label: 'James Chen',
          icon: 'fas fa-user-cog',
          extra: 'CTO',
          children: [
            { id: 'dev1', label: 'Tech Lead', icon: 'fas fa-user' },
            { id: 'dev2', label: 'Senior Dev', icon: 'fas fa-user' },
          ],
        },
        {
          id: 'cmo',
          label: 'Emma Davis',
          icon: 'fas fa-user-tag',
          extra: 'CMO',
          children: [{ id: 'mkt1', label: 'Marketing Spc.', icon: 'fas fa-user' }],
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

  ngOnInit() {}
}
