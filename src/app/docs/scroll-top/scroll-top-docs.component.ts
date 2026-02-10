import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-scroll-top-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scroll-top-docs.component.html',
  styleUrls: ['./scroll-top-docs.component.scss'],
})
export class ScrollTopDocsComponent {
  scrollTopConfig = COMPONENT_CONFIGS['scroll-top'] || {
    id: 'scroll-top',
    tagName: 'ui-scroll-top',
    label: 'Scroll Top',
    description: 'A button to smoothly scroll the page back to the top.',
    props: [
      { name: 'threshold', type: 'number', defaultValue: 300 },
      { name: 'icon', type: 'string', defaultValue: 'arrow-up' },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-scroll-top></ui-scroll-top>`,
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
