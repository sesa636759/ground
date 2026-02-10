import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-dock-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dock-docs.component.html',
  styleUrls: ['./dock-docs.component.scss'],
})
export class DockDocsComponent {
  dockConfig = COMPONENT_CONFIGS['dock'] || {
    id: 'dock',
    tagName: 'ui-dock',
    label: 'Dock',
    description: 'A macOS-inspired dock for application navigation and quick actions.',
    props: [
      {
        name: 'position',
        type: 'select',
        options: ['bottom', 'top', 'left', 'right'],
        defaultValue: 'bottom',
      },
      { name: 'magnification', type: 'boolean', defaultValue: true },
      { name: 'magnificationScale', type: 'number', defaultValue: 1.5 },
      { name: 'distance', type: 'number', defaultValue: 100 },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-dock position="bottom">
  <ui-dock-item icon="🏠" label="Home"></ui-dock-item>
  <ui-dock-item icon="🔍" label="Search"></ui-dock-item>
  <ui-dock-item icon="⚙️" label="Settings"></ui-dock-item>
</ui-dock>`,
    magnified: `<ui-dock position="bottom" magnification="true" magnification-scale="1.5">
  <ui-dock-item icon="📁" label="Files"></ui-dock-item>
  <ui-dock-item icon="🎵" label="Music"></ui-dock-item>
  <ui-dock-item icon="📸" label="Photos"></ui-dock-item>
</ui-dock>`,
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
