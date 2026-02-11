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
    colors: `<app-checkbox label="Primary" color="primary" checked></app-checkbox>
<app-checkbox label="Secondary" color="secondary" checked></app-checkbox>
<app-checkbox label="Success" color="success" checked></app-checkbox>
<app-checkbox label="Danger" color="danger" checked></app-checkbox>
<app-checkbox label="Warning" color="warning" checked></app-checkbox>
<app-checkbox label="Info" color="info" checked></app-checkbox>`,
    sizes: `<app-checkbox label="Small" size="small" checked></app-checkbox>
<app-checkbox label="Medium" size="medium" checked></app-checkbox>
<app-checkbox label="Large" size="large" checked></app-checkbox>`,
    premium_button: `<app-checkbox label="Frontend" variant="button" color="primary" checked></app-checkbox>
<app-checkbox label="Backend" variant="button" color="primary"></app-checkbox>`,
    premium_chip: `<app-checkbox label="React" variant="chip" color="info" checked></app-checkbox>
<app-checkbox label="Vue" variant="chip" color="success"></app-checkbox>`,
    skeleton: `<app-checkbox skeleton size="medium"></app-checkbox>`,
    readonly: `<app-checkbox label="Readonly Checked" readonly checked></app-checkbox>`,
    helper_text: `<app-checkbox label="Newsletter" helper-text="Receive weekly updates"></app-checkbox>`,
    invalid: `<app-checkbox label="Agree to terms" invalid error-message="Required field"></app-checkbox>`,
    label_position: `<app-checkbox label="Right Position" label-position="right"></app-checkbox>
<app-checkbox label="Left Position" label-position="left"></app-checkbox>`,
    shapes: `<app-checkbox label="Default (Rounded-ish)" variant="default" checked></app-checkbox>
<app-checkbox label="Fully Rounded" variant="rounded" checked></app-checkbox>
<app-checkbox label="Sharp Square" variant="square" checked></app-checkbox>`,
    group: `<app-checkbox-group
  label="Select preferences"
  [attr.options]="checkboxOptions">
</app-checkbox-group>`,
  };

  checkboxOptions = JSON.stringify([
    { value: 'email', label: 'Email notifications' },
    { value: 'sms', label: 'SMS alerts' },
    { value: 'push', label: 'Push notifications' },
  ]);

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
