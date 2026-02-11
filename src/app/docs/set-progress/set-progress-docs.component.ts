import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-progress-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-progress-docs.component.html',
  styleUrls: ['./set-progress-docs.component.scss'],
})
export class SetProgressDocsComponent {
  progressConfig = COMPONENT_CONFIGS['set-progress'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'linear';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    linear: `<app-progress
  value="65"
  max="100"
  variant="linear">
</app-progress>`,
    circular: `<app-progress
  value="75"
  max="100"
  variant="circular"
  size="120">
</app-progress>`,
    colored: `<app-progress
  value="80"
  max="100"
  color="success"
  variant="linear">
</app-progress>`,
    labeled: `<app-progress
  value="45"
  max="100"
  showLabel="true"
  label="Uploading...">
</app-progress>`,
    striped: `<app-progress
  value="60"
  max="100"
  striped="true"
  animated="true">
</app-progress>`,
    gradient: `<app-progress
  value="70"
  max="100"
  gradient="true"
  color="primary">
</app-progress>`,
    multiple: `<app-progress max="100">
  <app-progress-segment value="30" color="success"></app-progress-segment>
  <app-progress-segment value="25" color="warning"></app-progress-segment>
  <app-progress-segment value="20" color="danger"></app-progress-segment>
</app-progress>`,
    indeterminate: `<app-progress
  indeterminate="true"
  color="info">
</app-progress>`,
  };

  getActiveExampleLabel() {
    return this.activeExample;
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
