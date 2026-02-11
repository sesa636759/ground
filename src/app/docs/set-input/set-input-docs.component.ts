import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-input-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-input-docs.component.html',
  styleUrls: ['./set-input-docs.component.scss'],
})
export class SetInputDocsComponent {
  inputConfig = COMPONENT_CONFIGS['set-input'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-input placeholder="Enter your name">
</app-input>`,
    labeled: `<app-input label="Email Address" placeholder="you@example.com">
</app-input>`,
    with_icon: `<app-input label="Search" icon="🔍" placeholder="Search...">
</app-input>`,
    password: `<app-input type="password" label="Password" placeholder="Enter password">
</app-input>`,
    validation: `<app-input label="Username" [required]="true" error="Username is required">
</app-input>`,
    disabled: `<app-input label="Disabled Field" [disabled]="true" value="Cannot edit">
</app-input>`,
    multiline: `<app-input type="textarea" label="Comments" [rows]="4" placeholder="Enter comments...">
</app-input>`,
    with_helper: `<app-input label="Phone" helper-text="Format: (123) 456-7890" placeholder="(___) ___-____">
</app-input>`,
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
