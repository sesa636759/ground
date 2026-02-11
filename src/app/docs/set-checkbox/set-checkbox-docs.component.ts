import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-checkbox-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-checkbox-docs.component.html',
  styleUrls: ['./set-checkbox-docs.component.scss'],
})
export class SetCheckboxDocsComponent {
  checkboxConfig = COMPONENT_CONFIGS['set-checkbox'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-checkbox label="Accept terms and conditions">
</app-checkbox>`,
    checked: `<app-checkbox label="Subscribe to newsletter" [checked]="true">
</app-checkbox>`,
    disabled: `<app-checkbox label="Disabled option" [disabled]="true">
</app-checkbox>`,
    indeterminate: `<app-checkbox label="Select all" [indeterminate]="true">
</app-checkbox>`,
    colored: `<app-checkbox label="Primary color" color="primary">
</app-checkbox>`,
    sizes: `<app-checkbox label="Large checkbox" size="large">
</app-checkbox>`,
    custom_icon: `<app-checkbox label="Custom icon" icon="✓">
</app-checkbox>`,
    group: `<app-checkbox-group label="Select preferences">
  <app-checkbox value="email">Email notifications</app-checkbox>
  <app-checkbox value="sms">SMS alerts</app-checkbox>
  <app-checkbox value="push">Push notifications</app-checkbox>
</app-checkbox-group>`,
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
