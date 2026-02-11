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
    basic: `<ui-splitter orientation="vertical" initial-split="30" style="height: 200px;">
  <div slot="start" style="padding: 20px">
    <h3>Resizable Panel</h3>
    <p>Drag the divider to resize</p>
  </div>
  <div slot="end" style="padding: 20px">
    <p>Bottom panel content</p>
  </div>
</ui-splitter>`,
    horizontal: `<ui-splitter orientation="horizontal" initial-split="40" style="height: 200px;">
  <div slot="start" style="padding: 20px">
    <h3>Left Panel</h3>
    <p>Drag the divider to resize</p>
  </div>
  <div slot="end" style="padding: 20px">
    <p>Right panel content</p>
  </div>
</ui-splitter>`,
    with_handle: `<ui-splitter orientation="vertical" initial-split="50" handle-size="8" style="height: 200px;">
  <div slot="start" style="padding: 20px">
    <h3>Panel with Handle</h3>
    <p>The resize handle is visible</p>
  </div>
  <div slot="end" style="padding: 20px">
    <p>Bottom panel content</p>
  </div>
</ui-splitter>`,
    min_max: `<ui-splitter orientation="horizontal" initial-split="50" min-size="20" max-size="80" style="height: 200px;">
  <div slot="start" style="padding: 20px">
    <h3>Constrained Panel</h3>
    <p>Min: 20%, Max: 80%</p>
  </div>
  <div slot="end" style="padding: 20px">
    <p>Right panel content</p>
  </div>
</ui-splitter>`,
    collapsible: `<ui-splitter orientation="vertical" initial-split="40" collapsible="true" style="height: 200px;">
  <div slot="start" style="padding: 20px">
    <h3>Collapsible Panel</h3>
    <p>Can be collapsed using the button</p>
  </div>
  <div slot="end" style="padding: 20px">
    <p>Bottom panel content</p>
  </div>
</ui-splitter>`,
    nested: `<ui-splitter orientation="horizontal" initial-split="30" style="height: 400px;">
  <div slot="start" style="padding: 10px">
    <h4>Sidebar</h4>
  </div>
  <div slot="end" style="height: 100%; padding: 0;">
    <ui-splitter orientation="vertical" initial-split="60" style="height: 100%;">
      <div slot="start" style="padding: 20px">
        <h4>Main Content</h4>
      </div>
      <div slot="end" style="padding: 20px">
        <h4>Footer Panel</h4>
      </div>
    </ui-splitter>
  </div>
</ui-splitter>`,
    styled: `<ui-splitter orientation="vertical" initial-split="50" theme="dark" style="height: 200px;">
  <div slot="start" style="padding: 20px">
    <h3>Styled Panel</h3>
    <p>Dark theme variant</p>
  </div>
  <div slot="end" style="padding: 20px">
    <p>Bottom panel content</p>
  </div>
</ui-splitter>`,
    persistent: `<ui-splitter orientation="horizontal" initial-split="50" persist-state="true" style="height: 200px;">
  <div slot="start" style="padding: 20px">
    <h3>Persistent Size</h3>
    <p>Size is remembered across sessions</p>
  </div>
  <div slot="end" style="padding: 20px">
    <p>Right panel content</p>
  </div>
</ui-splitter>`,
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
