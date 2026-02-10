import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-context-menu-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './context-menu-docs.component.html',
  styleUrls: ['./context-menu-docs.component.scss'],
})
export class ContextMenuDocsComponent {
  contextMenuConfig = COMPONENT_CONFIGS['context-menu'] || {
    id: 'context-menu',
    tagName: 'ui-context-menu',
    label: 'Context Menu',
    description: 'A custom menu that appears on right-click interaction.',
    props: [
      {
        name: 'target',
        type: 'string',
        defaultValue: '',
        description: 'Selector for trigger element',
      },
      { name: 'model', type: 'json', defaultValue: [] },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<div id="target-area" style="height: 200px; background: #f0f0f0;">
  Right click here!
</div>

<ui-context-menu target="#target-area" [model]="items"></ui-context-menu>`,
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
