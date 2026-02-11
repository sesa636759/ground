import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CodeViewerComponent } from '../../shared/code-viewer.component';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-splitter-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, CodeViewerComponent, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './splitter-docs.component.html',
  styleUrls: ['./splitter-docs.component.scss'],
})
export class SplitterDocsComponent {
  splitterConfig = COMPONENT_CONFIGS['splitter'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'horizontal';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    horizontal: `<ui-splitter orientation="horizontal" initial-split="50" min-size="20">
  <div slot="start" class="pane-content start-pane">
    <h4>Start Pane</h4>
    <p>This is the first pane.</p>
  </div>
  <div slot="end" class="pane-content end-pane">
    <h4>End Pane</h4>
    <p>This is the second pane.</p>
  </div>
</ui-splitter>`,
    vertical: `<ui-splitter orientation="vertical" initial-split="70" style="height: 400px;">
  <div slot="start" class="pane-content dark-pane">
    <div class="code-header">app.tsx</div>
    <pre><code>import { Component } from '@stencil/core';</code></pre>
  </div>
  <div slot="end" class="pane-content terminal-pane">
    <div class="term-header">Terminal</div>
    <pre><code>> npm run build
> Build finished in 200ms</code></pre>
  </div>
</ui-splitter>`,
    nested: `<ui-splitter initial-split="30" style="height: 400px;">
  <!-- Sidebar -->
  <div slot="start" class="pane-content sidebar-pane">
    <ul>
      <li>Dashboard</li>
      <li>Projects</li>
      <li>Settings</li>
    </ul>
  </div>

  <!-- Main Content Area -->
  <div slot="end" style="height: 100%;">
     <ui-splitter orientation="vertical" initial-split="60">
        <div slot="start" class="pane-content main-pane">
           <h3>Workspace</h3>
        </div>
        <div slot="end" class="pane-content logs-pane">
           <small>System Logs...</small>
        </div>
     </ui-splitter>
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
