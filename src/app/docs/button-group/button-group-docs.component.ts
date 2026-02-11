import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-button-group-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button-group-docs.component.html',
  styleUrls: ['./button-group-docs.component.scss'],
})
export class ButtonGroupDocsComponent {
  componentConfig = COMPONENT_CONFIGS['button-group'] || {
    id: 'button-group',
    tagName: 'ui-button-group',
    label: 'Button Group',
    description: 'A container to group related buttons together.',
    props: [
      {
        name: 'variant',
        type: 'select',
        options: ['primary', 'secondary', 'ghost'],
        defaultValue: 'secondary',
      },
      {
        name: 'orientation',
        type: 'select',
        options: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
      },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-button-group>
  <ui-button label="Left"></ui-button>
  <ui-button label="Middle"></ui-button>
  <ui-button label="Right"></ui-button>
</ui-button-group>`,
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
