import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-cascade-select-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './cascade-select-docs.component.html',
  styleUrls: ['./cascade-select-docs.component.scss'],
})
export class CascadeSelectDocsComponent {
  componentConfig = COMPONENT_CONFIGS['cascade-select'] || {
    id: 'cascade-select',
    tagName: 'ui-cascade-select',
    label: 'Cascade Select',
    description: 'A hierarchical selection component for nested data.',
    props: [
      { name: 'options', type: 'json', defaultValue: [] },
      { name: 'placeholder', type: 'string', defaultValue: 'Select...' },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  options = JSON.stringify([
    { label: 'USA', children: [{ label: 'New York' }, { label: 'California' }] },
    { label: 'Canada', children: [{ label: 'Toronto' }, { label: 'Vancouver' }] },
  ]);

  exampleCodes: Record<string, string> = {
    basic: `<ui-cascade-select [options]="options" placeholder="Select City"></ui-cascade-select>`,
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
