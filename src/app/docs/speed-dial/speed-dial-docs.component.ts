import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-speed-dial-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speed-dial-docs.component.html',
  styleUrls: ['./speed-dial-docs.component.scss'],
})
export class SpeedDialDocsComponent {
  componentConfig = COMPONENT_CONFIGS['speed-dial'] || {
    id: 'speed-dial',
    tagName: 'ui-speed-dial',
    label: 'Speed Dial',
    description: 'A floating action button that expands to reveal related actions.',
    props: [
      {
        name: 'direction',
        type: 'select',
        options: ['up', 'down', 'left', 'right'],
        defaultValue: 'up',
      },
      { name: 'icon', type: 'string', defaultValue: 'plus' },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-speed-dial direction="up">
  <ui-speed-dial-action icon="✏️" label="Edit"></ui-speed-dial-action>
  <ui-speed-dial-action icon="🗑️" label="Delete"></ui-speed-dial-action>
  <ui-speed-dial-action icon="share" label="Share"></ui-speed-dial-action>
</ui-speed-dial>`,
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
