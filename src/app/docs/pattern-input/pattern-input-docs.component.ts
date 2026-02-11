import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-pattern-input-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pattern-input-docs.component.html',
  styleUrls: ['./pattern-input-docs.component.scss'],
})
export class PatternInputDocsComponent {
  componentConfig = COMPONENT_CONFIGS['pattern-input'] || {
    id: 'pattern-input',
    tagName: 'ui-pattern-input',
    label: 'Pattern Input',
    description: 'Input field that enforces a specific format pattern.',
    props: [
      { name: 'pattern', type: 'string', defaultValue: '000-000-0000' },
      { name: 'placeholder', type: 'string', defaultValue: 'XXX-XXX-XXXX' },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-pattern-input pattern="000-000-0000" placeholder="123-456-7890"></ui-pattern-input>`,
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
