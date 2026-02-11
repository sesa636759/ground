import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-meter-group-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './meter-group-docs.component.html',
  styleUrls: ['./meter-group-docs.component.scss'],
})
export class MeterGroupDocsComponent {
  componentConfig = COMPONENT_CONFIGS['meter-group'] || {
    id: 'meter-group',
    tagName: 'ui-meter-group',
    label: 'Meter Group',
    description: 'A component to display multiple values as a group of meters.',
    props: [
      { name: 'values', type: 'json', defaultValue: [] },
      { name: 'min', type: 'number', defaultValue: 0 },
      { name: 'max', type: 'number', defaultValue: 100 },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  meterValues = JSON.stringify([
    { label: 'Space Used', value: 45, color: '#3b82f6' },
    { label: 'System', value: 20, color: '#10b981' },
    { label: 'Shared', value: 15, color: '#f59e0b' },
  ]);

  exampleCodes: Record<string, string> = {
    basic: `<ui-meter-group [values]="meterValues" min="0" max="100"></ui-meter-group>`,
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
