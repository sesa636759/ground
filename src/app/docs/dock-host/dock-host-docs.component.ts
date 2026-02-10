import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-dock-host-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dock-host-docs.component.html',
  styleUrls: ['./dock-host-docs.component.scss'],
})
export class DockHostDocsComponent {
  dockHostConfig = COMPONENT_CONFIGS['dock-host'] || {
    id: 'dock-host',
    tagName: 'ui-dock-host',
    label: 'Dock Host',
    description:
      'A responsive container that manages dock position and content reflow automatically.',
    props: [
      {
        name: 'dockPosition',
        type: 'select',
        options: ['bottom', 'left', 'right'],
        defaultValue: 'bottom',
      },
      { name: 'pinned', type: 'boolean', defaultValue: true },
      { name: 'autoHide', type: 'boolean', defaultValue: false },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'layout';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    layout: `<ui-dock-host dock-position="bottom" pinned="true">
  <!-- Main Content -->
  <div slot="main" style="padding: 20px;">
    <h1>Application Content</h1>
    <p>This content adjusts automatically based on dock position.</p>
  </div>
  
  <!-- Dock -->
  <ui-dock slot="dock">
    <ui-dock-item icon="🏠" label="Home"></ui-dock-item>
  </ui-dock>
</ui-dock-host>`,
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
