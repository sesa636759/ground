import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StepperPlaygroundComponent } from './components/stepper-playground/stepper-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-stepper-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StepperPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-stepper-demo.component.html',
  styleUrl: './set-stepper-demo.component.scss',
})
export class SetStepperDemoComponent {
  exampleVariants = [
    { id: 'horizontal-basic', title: 'Horizontal Basic', icon: '➡️' },
    { id: 'vertical-basic', title: 'Vertical Basic', icon: '⬇️' },
    { id: 'label-bottom', title: 'Labels Bottom', icon: '🔽' },
    { id: 'label-top', title: 'Labels Top', icon: '🔼' },
    { id: 'label-alternate', title: 'Labels Alternate', icon: '🔀' },
    { id: 'description-right', title: 'Description Right', icon: '▶️' },
    { id: 'description-left', title: 'Description Left', icon: '◀️' },
    { id: 'description-alternate', title: 'Description Alternate', icon: '↔️' },
    { id: 'content-navigation', title: 'Content & Navigation', icon: '📦' },
    { id: 'steps-3', title: '3 Steps Process', icon: '3️⃣' },
    { id: 'steps-5', title: '5 Steps Process', icon: '5️⃣' },
    { id: 'steps-7', title: '7 Steps Process', icon: '7️⃣' },
    { id: 'connector-wide', title: 'Wide Connector', icon: '━' },
    { id: 'connector-fixed', title: 'Fixed Width Connector', icon: '─' },
    { id: 'connector-thick', title: 'Thick Connector', icon: '═' },
    { id: 'connector-vertical', title: 'Vertical Connector', icon: '║' },
    { id: 'variant-snack', title: 'Snack Variant', icon: '🍿' },
    { id: 'variant-compact', title: 'Compact Variant', icon: '📏' },
    { id: 'variant-outlined', title: 'Outlined Variant', icon: '⭕' },
    { id: 'variant-filled', title: 'Filled Variant', icon: '⬤' },
    { id: 'variant-minimal', title: 'Minimal Variant', icon: '○' },
    { id: 'color-success', title: 'Success Color', icon: '✅' },
    { id: 'color-warning', title: 'Warning Color', icon: '⚠️' },
    { id: 'color-danger', title: 'Danger Color', icon: '❌' },
    { id: 'theme-dark', title: 'Dark Theme', icon: '🌙' },
    { id: 'theme-light', title: 'Light Theme', icon: '☀️' },
    { id: 'scrollable-20', title: '20 Steps Scrollable', icon: '📜' },
    { id: 'clickable-navigation', title: 'Clickable Steps', icon: '🖱️' },
    { id: 'with-progress', title: 'With Progress Bar', icon: '📊' },
    { id: 'interactive-25', title: '25 Steps Interactive', icon: '🎯' },
  ];

  currentStep25 = 12;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  previousStep25() {
    this.currentStep25 = Math.max(0, this.currentStep25 - 1);
  }

  nextStep25() {
    this.currentStep25 = Math.min(24, this.currentStep25 + 1);
  }

  jumpToEnd25() {
    this.currentStep25 = 24;
  }

  generate25Steps() {
    return Array.from({ length: 25 }, (_, i) => ({
      label: `${i + 1}`,
      status: i < this.currentStep25 ? 'success' : i === this.currentStep25 ? 'info' : 'waiting'
    }));
  }

  stringifySteps(steps: any[]) {
    return JSON.stringify(steps);
  }

  horizontalSteps = `[
    {"label": "Account", "description": "Create account", "status": "success"},
    {"label": "Profile", "description": "Personal info", "status": "success"},
    {"label": "Verify", "description": "Confirm email", "status": "waiting"},
    {"label": "Done", "description": "All set", "status": "waiting"}
  ]`;

  verticalSteps = `[
    {"label": "Order Placed", "description": "Received", "status": "success"},
    {"label": "Processing", "description": "Preparing", "status": "success"},
    {"label": "Shipped", "description": "In transit", "status": "info"},
    {"label": "Delivered", "description": "At doorstep", "status": "waiting"}
  ]`;

  threeSteps = `[
    {"label": "Start", "description": "Begin process", "status": "success"},
    {"label": "Process", "description": "In progress", "status": "info"},
    {"label": "Complete", "description": "Finished", "status": "waiting"}
  ]`;

  fiveSteps = `[
    {"label": "Setup", "description": "Initial setup", "status": "success"},
    {"label": "Configure", "description": "Settings", "status": "success"},
    {"label": "Process", "description": "Processing", "status": "info"},
    {"label": "Verify", "description": "Verification", "status": "waiting"},
    {"label": "Complete", "description": "Finished", "status": "waiting"}
  ]`;

  sevenSteps = `[
    {"label": "Step 1", "description": "First", "status": "success"},
    {"label": "Step 2", "description": "Second", "status": "success"},
    {"label": "Step 3", "description": "Third", "status": "success"},
    {"label": "Step 4", "description": "Fourth", "status": "info"},
    {"label": "Step 5", "description": "Fifth", "status": "waiting"},
    {"label": "Step 6", "description": "Sixth", "status": "waiting"},
    {"label": "Step 7", "description": "Seventh", "status": "waiting"}
  ]`;

  twentySteps = `[
    {"label": "Step 1", "description": "First step"},
    {"label": "Step 2", "description": "Second step"},
    {"label": "Step 3", "description": "Third step"},
    {"label": "Step 4", "description": "Fourth step"},
    {"label": "Step 5", "description": "Fifth step"},
    {"label": "Step 6", "description": "Sixth step"},
    {"label": "Step 7", "description": "Seventh step"},
    {"label": "Step 8", "description": "Eighth step"},
    {"label": "Step 9", "description": "Ninth step"},
    {"label": "Step 10", "description": "Tenth step"},
    {"label": "Step 11", "description": "Eleventh step"},
    {"label": "Step 12", "description": "Twelfth step"},
    {"label": "Step 13", "description": "Thirteenth step"},
    {"label": "Step 14", "description": "Fourteenth step"},
    {"label": "Step 15", "description": "Fifteenth step"},
    {"label": "Step 16", "description": "Sixteenth step"},
    {"label": "Step 17", "description": "Seventeenth step"},
    {"label": "Step 18", "description": "Eighteenth step"},
    {"label": "Step 19", "description": "Nineteenth step"},
    {"label": "Step 20", "description": "Twentieth step"}
  ]`;

  horizontalBasicCode = signal(`<app-stepper-container
  mode="horizontal"
  active-step="1"
  steps='[
    {"label": "Account", "description": "Create account", "status": "success"},
    {"label": "Profile", "description": "Personal info", "status": "success"},
    {"label": "Verify", "description": "Confirm email", "status": "waiting"},
    {"label": "Done", "description": "All set", "status": "waiting"}
  ]'
></app-stepper-container>`);

  verticalBasicCode = signal(`<app-stepper-container
  mode="vertical"
  active-step="2"
  description-position="right"
  steps='[
    {"label": "Order Placed", "description": "Received", "status": "success"},
    {"label": "Processing", "description": "Preparing", "status": "success"},
    {"label": "Shipped", "description": "In transit", "status": "info"},
    {"label": "Delivered", "description": "At doorstep", "status": "waiting"}
  ]'
></app-stepper-container>`);

  labelBottomCode = signal(`<app-stepper-container
  mode="horizontal"
  label-position="bottom"
  active-step="1"
  steps='[...]'
></app-stepper-container>`);

  labelTopCode = signal(`<app-stepper-container
  mode="horizontal"
  label-position="top"
  active-step="1"
  steps='[...]'
></app-stepper-container>`);

  labelAlternateCode = signal(`<app-stepper-container
  mode="horizontal"
  label-position="alternate"
  active-step="1"
  steps='[...]'
></app-stepper-container>`);

  descriptionRightCode = signal(`<app-stepper-container
  mode="vertical"
  description-position="right"
  active-step="2"
  steps='[...]'
></app-stepper-container>`);

  descriptionLeftCode = signal(`<app-stepper-container
  mode="vertical"
  description-position="left"
  active-step="2"
  steps='[...]'
></app-stepper-container>`);

  descriptionAlternateCode = signal(`<app-stepper-container
  mode="vertical"
  description-position="alternate"
  active-step="2"
  steps='[...]'
></app-stepper-container>`);

  contentNavigationCode = signal(`<app-stepper-container
  mode="horizontal"
  show-content-area="true"
  show-navigation="true"
  active-step="0"
  steps='[...]'
>
  <div slot="step-0">Step 1 Content Here</div>
  <div slot="step-1">Step 2 Content Here</div>
  <div slot="step-2">Step 3 Content Here</div>
</app-stepper-container>`);

  steps3Code = signal(`<app-stepper-container
  mode="horizontal"
  active-step="1"
  steps='[
    {"label": "Start", "description": "Begin process", "status": "success"},
    {"label": "Process", "description": "In progress", "status": "info"},
    {"label": "Complete", "description": "Finished", "status": "waiting"}
  ]'
></app-stepper-container>`);

  steps5Code = signal(`<app-stepper-container
  mode="horizontal"
  active-step="2"
  steps='[
    {"label": "Setup", "description": "Initial setup", "status": "success"},
    {"label": "Configure", "description": "Settings", "status": "success"},
    {"label": "Process", "description": "Processing", "status": "info"},
    {"label": "Verify", "description": "Verification", "status": "waiting"},
    {"label": "Complete", "description": "Finished", "status": "waiting"}
  ]'
></app-stepper-container>`);

  steps7Code = signal(`<app-stepper-container
  mode="horizontal"
  active-step="3"
  steps='[...]'
></app-stepper-container>`);

  connectorWideCode = signal(`<app-stepper-container mode="horizontal" active-step="1" steps='[...]'>
  <app-step-connector slot="connector-0-1" mode="horizontal" flex="2"></app-step-connector>
</app-stepper-container>`);

  connectorFixedCode = signal(`<app-stepper-container mode="horizontal" active-step="1" steps='[...]'>
  <app-step-connector slot="connector-0-1" mode="horizontal" width="150px"></app-step-connector>
</app-stepper-container>`);

  connectorThickCode = signal(`<app-stepper-container mode="horizontal" active-step="1" steps='[...]'>
  <app-step-connector slot="connector-0-1" mode="horizontal" height="6px" min-width="100px"></app-step-connector>
</app-stepper-container>`);

  connectorVerticalCode = signal(`<app-stepper-container mode="vertical" active-step="2" steps='[...]'>
  <app-step-connector slot="connector-1-2" mode="vertical" height="120px"></app-step-connector>
</app-stepper-container>`);

  variantSnackCode = signal(`<app-stepper-container
  variant="snack"
  show-progress="true"
  clickable="true"
  active-step="4"
  steps='[...]'
></app-stepper-container>`);

  variantCompactCode = signal(`<app-stepper-container
  variant="compact"
  active-step="2"
  steps='[...]'
></app-stepper-container>`);

  variantOutlinedCode = signal(`<app-stepper-container
  variant="outlined"
  active-step="1"
  steps='[...]'
></app-stepper-container>`);

  variantFilledCode = signal(`<app-stepper-container
  variant="filled"
  active-step="1"
  steps='[...]'
></app-stepper-container>`);

  variantMinimalCode = signal(`<app-stepper-container
  variant="minimal"
  active-step="1"
  steps='[...]'
></app-stepper-container>`);

  colorSuccessCode = signal(`<app-stepper-container
  color-scheme="success"
  active-step="2"
  steps='[...]'
></app-stepper-container>`);

  colorWarningCode = signal(`<app-stepper-container
  color-scheme="warning"
  active-step="2"
  steps='[...]'
></app-stepper-container>`);

  colorDangerCode = signal(`<app-stepper-container
  color-scheme="danger"
  active-step="2"
  steps='[...]'
></app-stepper-container>`);

  themeDarkCode = signal(`<app-stepper-container
  theme="dark"
  active-step="1"
  steps='[...]'
></app-stepper-container>`);

  themeLightCode = signal(`<app-stepper-container
  theme="light"
  active-step="1"
  steps='[...]'
></app-stepper-container>`);

  scrollable20Code = signal(`<app-stepper-container
  variant="compact"
  scrollable="true"
  active-step="8"
  steps='[/* 20 steps array */]'
></app-stepper-container>`);

  clickableNavigationCode = signal(`<app-stepper-container
  clickable="true"
  active-step="2"
  steps='[...]'
></app-stepper-container>`);

  withProgressCode = signal(`<app-stepper-container
  show-progress="true"
  active-step="2"
  steps='[...]'
></app-stepper-container>`);

  interactive25Code = signal(`<app-stepper-container
  variant="snack"
  clickable="true"
  show-progress="true"
  [attr.active-step]="currentStep"
  steps='[/* 25 steps */]'
></app-stepper-container>`);
}
