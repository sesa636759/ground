import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-splitter-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-splitter-docs.component.html',
  styleUrls: ['./set-splitter-docs.component.scss'],
})
export class SetSplitterDocsComponent {
  splitterConfig = COMPONENT_CONFIGS['set-splitter'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-splitter-host>
  <div panel-1>Left Panel</div>
  <div panel-2>Right Panel</div>
</app-splitter-host>`,
    vertical: `<app-splitter-host orientation="vertical">
  <div panel-1>Top Panel</div>
  <div panel-2>Bottom Panel</div>
</app-splitter-host>`,
    three_panels: `<app-splitter-host>
  <div panel-1>Left</div>
  <div panel-2>Center</div>
  <div panel-3>Right</div>
</app-splitter-host>`,
    with_sizes: `<app-splitter-host panel-sizes="30,70">
  <div panel-1>30% width</div>
  <div panel-2>70% width</div>
</app-splitter-host>`,
    min_sizes: `<app-splitter-host min-sizes="200,300">
  <div panel-1>Min 200px</div>
  <div panel-2>Min 300px</div>
</app-splitter-host>`,
    nested: `<app-splitter-host>
  <div panel-1>Left</div>
  <app-splitter-host orientation="vertical">
    <div panel-1>Top Right</div>
    <div panel-2>Bottom Right</div>
  </app-splitter-host>
</app-splitter-host>`,
    gutters: `<app-splitter-host [gutter-size]="10">
  <div panel-1>Panel 1</div>
  <div panel-2>Panel 2</div>
</app-splitter-host>`,
    collapsible: `<app-splitter-host [collapsible]="true">
  <div panel-1>Collapsible Panel</div>
  <div panel-2>Main Panel</div>
</app-splitter-host>`,
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
