import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-anchor-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-anchor-docs.component.html',
  styleUrls: ['./set-anchor-docs.component.scss'],
})
export class SetAnchorDocsComponent {
  anchorConfig = COMPONENT_CONFIGS['set-anchor'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-anchor href="#section1">
  Go to Section 1
</app-anchor>`,
    smooth: `<app-anchor href="#section2" behavior="smooth">
  Smooth scroll to Section 2
</app-anchor>`,
    offset: `<app-anchor href="#section3" [offset]="100">
  Scroll with offset
</app-anchor>`,
    highlighted: `<app-anchor href="#section4" [highlight]="true">
  Highlighted anchor
</app-anchor>`,
    icon: `<app-anchor href="#top" icon="⬆️">
  Back to top
</app-anchor>`,
    styled: `<app-anchor href="#section5" variant="button">
  Button style anchor
</app-anchor>`,
    external: `<app-anchor href="https://example.com" [external]="true">
  External link
</app-anchor>`,
    disabled: `<app-anchor href="#section6" [disabled]="true">
  Disabled anchor
</app-anchor>`,
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
