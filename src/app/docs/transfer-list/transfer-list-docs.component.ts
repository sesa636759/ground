import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-transfer-list-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './transfer-list-docs.component.html',
  styleUrls: ['./transfer-list-docs.component.scss'],
})
export class TransferListDocsComponent {
  componentConfig = COMPONENT_CONFIGS['transfer-list'] || {
    id: 'transfer-list',
    tagName: 'ui-transfer-list',
    label: 'Transfer List',
    description: 'Advanced dual-list component for moving items between two states.',
    props: [
      { name: 'items', type: 'json', defaultValue: [] },
      { name: 'titles', type: 'json', defaultValue: ['Source', 'Target'] },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  transferItems = JSON.stringify([
    { label: 'Item 1', key: 1 },
    { label: 'Item 2', key: 2 },
    { label: 'Item 3', key: 3 },
    { label: 'Item 4', key: 4 },
  ]);

  exampleCodes: Record<string, string> = {
    basic: `<ui-transfer-list [items]="transferItems" [titles]="['Available', 'Selected']"></ui-transfer-list>`,
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
