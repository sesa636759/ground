import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-toggle-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-toggle-docs.component.html',
  styleUrls: ['./set-toggle-docs.component.scss'],
})
export class SetToggleDocsComponent {
  toggleConfig = COMPONENT_CONFIGS['set-toggle'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-toggle
  label="Enable notifications"
  [(value)]="isEnabled">
</app-toggle>`,
    colored: `<app-toggle
  label="Success toggle"
  color="success"
  [(value)]="isEnabled">
</app-toggle>`,
    sizes: `<app-toggle label="Small" size="small"></app-toggle>
<app-toggle label="Medium" size="medium"></app-toggle>
<app-toggle label="Large" size="large"></app-toggle>`,
    disabled: `<app-toggle
  label="Disabled toggle"
  [disabled]="true"
  [(value)]="isEnabled">
</app-toggle>`,
    labelPosition: `<app-toggle
  label="Toggle on right"
  labelPosition="left"
  [(value)]="isEnabled">
</app-toggle>`,
    withIcon: `<app-toggle
  label="With icons"
  iconOn="✓"
  iconOff="✗"
  [(value)]="isEnabled">
</app-toggle>`,
    description: `<app-toggle
  label="Marketing emails"
  description="Receive emails about new products and features"
  [(value)]="isEnabled">
</app-toggle>`,
    loading: `<app-toggle
  label="Loading state"
  [loading]="true"
  [(value)]="isEnabled">
</app-toggle>`,
  };

  getActiveExampleLabel() {
    return this.activeExample.replace(/([A-Z])/g, ' $1').trim();
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
