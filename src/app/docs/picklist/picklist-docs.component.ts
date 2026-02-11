import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-picklist-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './picklist-docs.component.html',
  styleUrls: ['./picklist-docs.component.scss'],
})
export class PicklistDocsComponent {
  componentConfig = COMPONENT_CONFIGS['picklist'] || {
    id: 'picklist',
    tagName: 'ui-picklist',
    label: 'Picklist',
    description: 'Component to select multiple items from a list.',
    props: [
      { name: 'items', type: 'json', defaultValue: [] },
      { name: 'filterable', type: 'boolean', defaultValue: true },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  listItems = JSON.stringify([
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 },
  ]);

  exampleCodes: Record<string, string> = {
    basic: `<ui-picklist [items]="listItems" filterable="true"></ui-picklist>`,
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
