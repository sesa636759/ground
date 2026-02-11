import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-list-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-list-docs.component.html',
  styleUrls: ['./set-list-docs.component.scss'],
})
export class SetListDocsComponent {
  setListConfig = {
    id: 'set-list',
    tagName: 'app-list',
    label: 'List',
    props: [
      {
        name: 'items',
        type: 'json' as const,
        defaultValue: '[]',
        description: 'Array of list items',
      },
      {
        name: 'show-avatars',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Display avatars in list items',
      },
      {
        name: 'show-actions',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Show action buttons for each item',
      },
      {
        name: 'show-dividers',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Show dividers between items',
      },
      {
        name: 'selectable',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Allow item selection',
      },
      {
        name: 'virtual-scroll',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Enable virtual scrolling for large lists',
      },
      {
        name: 'item-height',
        type: 'number' as const,
        defaultValue: '48',
        description: 'Height of each item (for virtual scroll)',
      },
      {
        name: 'grouped',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Display items in groups',
      },
      {
        name: 'interactive',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Make items interactive/clickable',
      },
      {
        name: 'hoverable',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Add hover effects',
      },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-list
  [attr.items]="basicItems">
</app-list>`,
    avatars: `<app-list
  [attr.items]="avatarItems"
  [show-avatars]="true">
</app-list>`,
    actions: `<app-list
  [attr.items]="actionItems"
  [show-actions]="true">
</app-list>`,
    dividers: `<app-list
  [attr.items]="dividerItems"
  [show-dividers]="true">
</app-list>`,
    selectable: `<app-list
  [attr.items]="selectableItems"
  [selectable]="true">
</app-list>`,
    virtual: `<app-list
  [attr.items]="virtualItems"
  [virtual-scroll]="true"
  [item-height]="60">
</app-list>`,
    grouped: `<app-list
  [attr.items]="groupedItems"
  [grouped]="true">
</app-list>`,
    interactive: `<app-list
  [attr.items]="interactiveItems"
  [interactive]="true"
  [hoverable]="true">
</app-list>`,
  };

  basicItems = JSON.stringify([
    { id: 1, title: 'Item One', description: 'First item' },
    { id: 2, title: 'Item Two', description: 'Second item' },
    { id: 3, title: 'Item Three', description: 'Third item' },
  ]);

  avatarItems = JSON.stringify([
    { id: 1, title: 'John Doe', avatar: '/assets/avatar1.jpg', subtitle: 'Developer' },
    { id: 2, title: 'Jane Smith', avatar: '/assets/avatar2.jpg', subtitle: 'Designer' },
  ]);

  actionItems = JSON.stringify([
    { id: 1, title: 'Document', actions: ['edit', 'delete'] },
    { id: 2, title: 'Image', actions: ['view', 'download'] },
  ]);

  dividerItems = JSON.stringify([
    { id: 1, title: 'First Section Item' },
    { id: 2, title: 'Second Section Item' },
  ]);

  selectableItems = JSON.stringify([
    { id: 1, title: 'Selectable Item 1' },
    { id: 2, title: 'Selectable Item 2' },
  ]);

  virtualItems = JSON.stringify(
    Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` })),
  );

  groupedItems = JSON.stringify([
    { group: 'Group A', items: [{ id: 1, title: 'Item A1' }] },
    { group: 'Group B', items: [{ id: 2, title: 'Item B1' }] },
  ]);

  interactiveItems = JSON.stringify([
    { id: 1, title: 'Click me', onClick: 'handleClick' },
    { id: 2, title: 'Click me too', onClick: 'handleClick' },
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
