import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-button-toggle-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-button-toggle-docs.component.html',
  styleUrls: ['./set-button-toggle-docs.component.scss'],
})
export class SetButtonToggleDocsComponent {
  toggleConfig = COMPONENT_CONFIGS['set-button-toggle'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-button-toggle-group>
  <button value="left">Left</button>
  <button value="center">Center</button>
  <button value="right">Right</button>
</app-button-toggle-group>`,
    multiple: `<app-button-toggle-group [multiSelect]="true">
  <button value="bold">Bold</button>
  <button value="italic">Italic</button>
  <button value="underline">Underline</button>
</app-button-toggle-group>`,
    vertical: `<app-button-toggle-group orientation="vertical">
  <button value="top">Top</button>
  <button value="middle">Middle</button>
  <button value="bottom">Bottom</button>
</app-button-toggle-group>`,
    colored: `<app-button-toggle-group variant="filled" color="primary">
  <button value="option1">Option 1</button>
  <button value="option2">Option 2</button>
  <button value="option3">Option 3</button>
</app-button-toggle-group>`,
    icons: `<app-button-toggle-group>
  <button value="list">📋 List</button>
  <button value="grid">🔲 Grid</button>
  <button value="card">🃏 Card</button>
</app-button-toggle-group>`,
    disabled: `<app-button-toggle-group>
  <button value="enabled">Enabled</button>
  <button value="disabled" disabled>Disabled</button>
  <button value="active">Active</button>
</app-button-toggle-group>`,
    sizes: `<app-button-toggle-group size="large">
  <button value="small">Small</button>
  <button value="medium">Medium</button>
  <button value="large">Large</button>
</app-button-toggle-group>`,
    exclusive: `<app-button-toggle-group [multiSelect]="false">
  <button value="yes">Yes</button>
  <button value="no">No</button>
</app-button-toggle-group>`,
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
