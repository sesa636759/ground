import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-radio-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-docs.component.html',
  styleUrls: ['./radio-docs.component.scss'],
})
export class RadioDocsComponent {
  radioConfig = COMPONENT_CONFIGS['radio'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-radio-group
  label="Basic Selection"
  [attr.options]="standardOptions"
  value="1">
</app-radio-group>`,
    horizontal: `<app-radio-group
  label="Horizontal Layout"
  layout="horizontal"
  [attr.options]="standardOptions"
  value="2">
</app-radio-group>`,
    bordered: `<app-radio-group
  label="Bordered Variant"
  variant="bordered"
  color="success"
  [attr.options]="standardOptions">
</app-radio-group>`,
    buttons: `<app-radio-group
  label="Button Styles"
  button-group="true"
  color="info"
  [attr.options]="standardOptions">
</app-radio-group>`,
    cards: `<app-radio-group
  label="Selection Cards"
  variant="card"
  layout="grid"
  [attr.columns]="3"
  [attr.options]="planOptions">
</app-radio-group>`,
    validation: `<app-radio-group
  label="Required Field"
  required="true"
  invalid="true"
  error-message="Please select an option to continue"
  [attr.options]="paymentOptions">
</app-radio-group>`,
    skeleton: `<app-radio-group
  label="Loading state"
  [skeleton]="true"
  [attr.options]="standardOptions">
</app-radio-group>`,
    card_rich: `<app-radio-group
  label="Rich Selection Cards"
  variant="card"
  layout="grid"
  [attr.columns]="2"
  [attr.options]="planOptions"
  value="pro">
</app-radio-group>`,
    segmented: `<app-radio-group
  label="Segmented Control"
  button-group="true"
  layout="horizontal"
  color="primary"
  [attr.options]="standardOptions"
  value="1">
</app-radio-group>`,
    chip_selection: `<app-radio-group
  label="Chip Selection"
  variant="bordered"
  layout="horizontal"
  color="info"
  [attr.options]="standardOptions">
</app-radio-group>`,
  };

  standardOptions = JSON.stringify([
    { value: '1', label: 'Email Notifications' },
    { value: '2', label: 'Push Notifications' },
    { value: '3', label: 'SMS Alerts' },
  ]);

  planOptions = JSON.stringify([
    { value: 'basic', label: 'Basic', description: '$9/month - Essential features' },
    { value: 'pro', label: 'Pro', description: '$29/month - Advanced features' },
    { value: 'premium', label: 'Premium', description: '$99/month - All features' },
  ]);

  paymentOptions = JSON.stringify([
    { value: 'card', label: 'Credit Card', description: 'Visa, Mastercard, Amex' },
    { value: 'paypal', label: 'PayPal', description: 'Faster and safer way to pay' },
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
