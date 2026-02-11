import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-scroll-top-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-scroll-top-docs.component.html',
  styleUrls: ['./set-scroll-top-docs.component.scss'],
})
export class SetScrollTopDocsComponent {
  scrollTopConfig = COMPONENT_CONFIGS['set-scroll-top'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-scroll-top>
</app-scroll-top>`,
    with_icon: `<app-scroll-top icon="⬆️">
</app-scroll-top>`,
    custom_threshold: `<app-scroll-top threshold="500">
</app-scroll-top>`,
    smooth: `<app-scroll-top behavior="smooth">
</app-scroll-top>`,
    positioned: `<app-scroll-top position="left">
</app-scroll-top>`,
    styled: `<app-scroll-top color="primary" size="large">
</app-scroll-top>`,
    with_text: `<app-scroll-top>
  <span>Back to Top</span>
</app-scroll-top>`,
    animated: `<app-scroll-top animation="bounce">
</app-scroll-top>`,
  };

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
