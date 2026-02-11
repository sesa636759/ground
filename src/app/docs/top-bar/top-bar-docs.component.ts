import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-top-bar-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './top-bar-docs.component.html',
  styleUrls: ['./top-bar-docs.component.scss'],
})
export class TopBarDocsComponent {
  componentConfig = COMPONENT_CONFIGS['top-bar'] || {
    id: 'top-bar',
    tagName: 'ui-top-bar',
    label: 'Top Bar',
    description: 'A dedicated header area for global actions and identity.',
    props: [{ name: 'title', type: 'string', defaultValue: 'Application' }],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-top-bar title="Dashboard">
  <div slot="actions">
    <ui-button icon="bell" variant="ghost"></ui-button>
    <ui-button icon="user" variant="ghost"></ui-button>
  </div>
</ui-top-bar>`,
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
