import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-stepper-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-stepper-docs.component.html',
  styleUrls: ['./set-stepper-docs.component.scss'],
})
export class SetStepperDocsComponent {
  stepperConfig = COMPONENT_CONFIGS['set-stepper'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'horizontal';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    horizontal: `<app-stepper-container orientation="horizontal" [activeStep]="0">
  <app-step label="Account" description="Create your account">
    <p>Account details content</p>
  </app-step>
  <app-step label="Profile" description="Set up profile">
    <p>Profile content</p>
  </app-step>
  <app-step label="Verify" description="Verify email">
    <p>Verification content</p>
  </app-step>
</app-stepper-container>`,
    vertical: `<app-stepper-container orientation="vertical" [activeStep]="1">
  <app-step label="Contact" status="completed">
    <p>Contact information</p>
  </app-step>
  <app-step label="Shipping" status="active">
    <p>Shipping details</p>
  </app-step>
  <app-step label="Payment">
    <p>Payment method</p>
  </app-step>
</app-stepper-container>`,
    numbered: `<app-stepper-container numbered="true" [activeStep]="2">
  <app-step label="Choose Plan" status="completed"></app-step>
  <app-step label="Add Details" status="completed"></app-step>
  <app-step label="Payment" status="active"></app-step>
  <app-step label="Confirm"></app-step>
</app-stepper-container>`,
    icons: `<app-stepper-container [activeStep]="0">
  <app-step label="Login" icon="🔐" status="completed"></app-step>
  <app-step label="Preferences" icon="⚙️" status="active"></app-step>
  <app-step label="Complete" icon="✓"></app-step>
</app-stepper-container>`,
    colored: `<app-stepper-container color="success" [activeStep]="1">
  <app-step label="Start" status="completed"></app-step>
  <app-step label="Progress" status="active"></app-step>
  <app-step label="Finish"></app-step>
</app-stepper-container>`,
    clickable: `<app-stepper-container clickable="true" [activeStep]="1">
  <app-step label="Step 1"></app-step>
  <app-step label="Step 2"></app-step>
  <app-step label="Step 3"></app-step>
</app-stepper-container>`,
    error: `<app-stepper-container [activeStep]="1">
  <app-step label="Details" status="completed"></app-step>
  <app-step label="Validation" status="error" 
            errorMessage="Please fix errors">
  </app-step>
  <app-step label="Submit"></app-step>
</app-stepper-container>`,
    alternative: `<app-stepper-container variant="alternative" [activeStep]="1">
  <app-step label="Basic Info"></app-step>
  <app-step label="Advanced"></app-step>
  <app-step label="Review"></app-step>
</app-stepper-container>`,
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
