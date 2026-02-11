import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-resizable-panel-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-resizable-panel-docs.component.html',
  styleUrls: ['./set-resizable-panel-docs.component.scss'],
})
export class SetResizablePanelDocsComponent {
  panelConfig = COMPONENT_CONFIGS['set-resizable-panel'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-resizable-container>
  <div panel-content>
    <p>Resizable panel content</p>
  </div>
</app-resizable-container>`,
    horizontal: `<app-resizable-container direction="horizontal">
  <div panel-content>
    <p>Horizontal resizable panel</p>
  </div>
</app-resizable-container>`,
    with_handle: `<app-resizable-container [show-handle]="true">
  <div panel-content>
    <p>Panel with visible handle</p>
  </div>
</app-resizable-container>`,
    min_max: `<app-resizable-container min-width="200" max-width="600">
  <div panel-content>
    <p>Panel with constraints</p>
  </div>
</app-resizable-container>`,
    collapsible: `<app-resizable-container [collapsible]="true">
  <div panel-content>
    <p>Collapsible panel</p>
  </div>
</app-resizable-container>`,
    nested: `<app-resizable-container>
  <app-resizable-container direction="horizontal">
    <div panel-content>
      <p>Nested panels</p>
    </div>
  </app-resizable-container>
</app-resizable-container>`,
    styled: `<app-resizable-container theme="dark">
  <div panel-content>
    <p>Styled panel</p>
  </div>
</app-resizable-container>`,
    persistent: `<app-resizable-container [persist-size]="true">
  <div panel-content>
    <p>Size persisted across sessions</p>
  </div>
</app-resizable-container>`,
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
