import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-tree-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tree-docs.component.html',
  styleUrls: ['./set-tree-docs.component.scss'],
})
export class SetTreeDocsComponent {
  setTreeConfig = COMPONENT_CONFIGS['set-tree'] || {};

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-tree [nodes]="basicNodes">
</app-tree>`,
    icons: `<app-tree [nodes]="iconNodes" [show-icons]="true">
</app-tree>`,
    checkboxes: `<app-tree [nodes]="checkboxNodes" [checkboxes]="true">
</app-tree>`,
    selectable: `<app-tree [nodes]="selectableNodes" [selectable]="true">
</app-tree>`,
    lazy: `<app-tree [nodes]="lazyNodes" [lazy]="true">
</app-tree>`,
    drag: `<app-tree [nodes]="dragNodes" [draggable]="true" [droppable]="true">
</app-tree>`,
    virtual: `<app-tree [nodes]="virtualNodes" [virtual-scroll]="true">
</app-tree>`,
    filter: `<app-tree [nodes]="filterNodes" [filterable]="true" filter-placeholder="Search nodes...">
</app-tree>`,
  };

  basicNodes = JSON.stringify([
    {
      label: 'Documents',
      children: [
        { label: 'Work', children: [{ label: 'Project.pdf' }] },
        { label: 'Personal', children: [{ label: 'Resume.doc' }] },
      ],
    },
    {
      label: 'Pictures',
      children: [{ label: 'Vacation.jpg' }, { label: 'Family.png' }],
    },
  ]);

  iconNodes = JSON.stringify([
    {
      label: 'Root',
      icon: 'folder',
      children: [
        { label: 'File 1', icon: 'file' },
        { label: 'File 2', icon: 'file' },
      ],
    },
  ]);

  checkboxNodes = JSON.stringify([
    {
      label: 'Select All',
      children: [{ label: 'Option 1' }, { label: 'Option 2' }],
    },
  ]);

  selectableNodes = JSON.stringify([
    {
      label: 'Parent',
      children: [{ label: 'Child 1' }, { label: 'Child 2' }],
    },
  ]);

  lazyNodes = JSON.stringify([
    { label: 'Lazy Node 1', leaf: false },
    { label: 'Lazy Node 2', leaf: false },
  ]);

  dragNodes = JSON.stringify([
    {
      label: 'Draggable 1',
      children: [{ label: 'Child' }],
    },
    { label: 'Draggable 2' },
  ]);

  virtualNodes = JSON.stringify(
    Array.from({ length: 1000 }, (_, i) => ({
      label: `Node ${i}`,
      children: i % 10 === 0 ? [{ label: `Child ${i}` }] : undefined,
    })),
  );

  filterNodes = JSON.stringify([
    {
      label: 'Development',
      children: [{ label: 'Frontend' }, { label: 'Backend' }, { label: 'Database' }],
    },
    {
      label: 'Design',
      children: [{ label: 'UI' }, { label: 'UX' }],
    },
  ]);

  getActiveExampleLabel() {
    return this.activeExample.replace(/_/g, ' ');
  }

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }
}
