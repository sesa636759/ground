import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-tags-input-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tags-input-docs.component.html',
  styleUrls: ['./set-tags-input-docs.component.scss'],
})
export class SetTagsInputDocsComponent {
  tagsConfig = COMPONENT_CONFIGS['set-tags-input'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-tags-input
  placeholder="Add tags..."
  [tags]="tags">
</app-tags-input>`,
    colored: `<app-tags-input
  placeholder="Add colored tags..."
  color="primary"
  [tags]="tags">
</app-tags-input>`,
    validation: `<app-tags-input
  placeholder="Email addresses..."
  validation="email"
  [tags]="emailTags">
</app-tags-input>`,
    maxTags: `<app-tags-input
  placeholder="Max 5 tags..."
  [maxTags]="5"
  [tags]="tags">
</app-tags-input>`,
    suggestions: `<app-tags-input
  placeholder="Type to see suggestions..."
  [suggestions]="suggestions"
  [tags]="tags">
</app-tags-input>`,
    separator: `<app-tags-input
  placeholder="Use comma or enter..."
  separators=",;|"
  [tags]="tags">
</app-tags-input>`,
    removable: `<app-tags-input
  placeholder="Non-removable tags..."
  [removable]="false"
  [tags]="tags">
</app-tags-input>`,
    styled: `<app-tags-input
  placeholder="Styled tags..."
  variant="bordered"
  size="large"
  [tags]="tags">
</app-tags-input>`,
  };

  getActiveExampleLabel() {
    return this.activeExample.replace(/-/g, ' ');
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
