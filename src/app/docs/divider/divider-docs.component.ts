import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-divider-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './divider-docs.component.html',
  styleUrls: ['./divider-docs.component.scss'],
})
export class DividerDocsComponent {
  dividerConfig = COMPONENT_CONFIGS['divider'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<p>Content Above</p>
<ui-divider></ui-divider>
<p>Content Below</p>`,
    text: `<ui-divider text="Section Title" text-align="center"></ui-divider>`,
    icons: `<ui-divider icon="⭐" text="Featured" color="warning"></ui-divider>`,
    vertical: `<div style="height: 50px; display: flex; align-items: center;">
  <span>Edit</span>
  <ui-divider orientation="vertical"></ui-divider>
  <span>Copy</span>
  <ui-divider orientation="vertical"></ui-divider>
  <span>Delete</span>
</div>`,
    variants: `<ui-divider variant="dashed" text="Dashed"></ui-divider>
<ui-divider variant="dotted" text="Dotted"></ui-divider>
<ui-divider variant="gradient" text="Gradient"></ui-divider>`,
    shapes: `<ui-divider shape="wave" color="primary"></ui-divider>
<ui-divider shape="triangle" color="success"></ui-divider>
<ui-divider shape="arrow" color="danger"></ui-divider>`,
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
