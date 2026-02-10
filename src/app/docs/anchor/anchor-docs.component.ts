import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-anchor-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './anchor-docs.component.html',
  styleUrls: ['./anchor-docs.component.scss'],
})
export class AnchorDocsComponent {
  anchorConfig = COMPONENT_CONFIGS['anchor'] || {
    id: 'anchor',
    tagName: 'ui-anchor',
    label: 'Anchor',
    description: 'A navigation component for scrolling to content sections.',
    props: [
      { name: 'container', type: 'string', defaultValue: 'window' },
      { name: 'offset', type: 'number', defaultValue: 0 },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-anchor>
  <ui-anchor-link href="#section1" label="Section 1"></ui-anchor-link>
  <ui-anchor-link href="#section2" label="Section 2"></ui-anchor-link>
  <ui-anchor-link href="#section3" label="Section 3"></ui-anchor-link>
</ui-anchor>`,
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
