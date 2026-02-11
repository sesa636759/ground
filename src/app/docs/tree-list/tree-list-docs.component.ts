import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-tree-list-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tree-list-docs.component.html',
  styleUrls: ['./tree-list-docs.component.scss'],
})
export class TreeListDocsComponent {
  componentConfig = COMPONENT_CONFIGS['tree-list'] || {
    id: 'tree-list',
    tagName: 'ui-tree-list',
    label: 'Tree List',
    description: 'A component to display hierarchical data in a tree structure.',
    props: [
      { name: 'items', type: 'json', defaultValue: [] },
      { name: 'selectable', type: 'boolean', defaultValue: true },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  treeData = JSON.stringify([
    {
      label: 'Documents',
      children: [
        { label: 'Work', children: [{ label: 'Project A' }, { label: 'Project B' }] },
        { label: 'Personal', children: [{ label: 'Photos' }, { label: 'Resumes' }] },
      ],
    },
    {
      label: 'Downloads',
      children: [{ label: 'Installer.exe' }, { label: 'Archive.zip' }],
    },
  ]);

  exampleCodes: Record<string, string> = {
    basic: `<ui-tree-list [items]="treeData"></ui-tree-list>`,
  };

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
