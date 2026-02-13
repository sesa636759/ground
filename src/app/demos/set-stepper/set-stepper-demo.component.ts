import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StepperPlaygroundComponent } from './components/stepper-playground/stepper-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-stepper-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StepperPlaygroundComponent,
    CodeBlockComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-stepper-demo.component.html',
  styleUrl: './set-stepper-demo.component.scss',
})
export class SetStepperDemoComponent {
  variants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'horizontal', title: 'Horizontal Stepper', icon: '➡️' },
    { id: 'vertical', title: 'Vertical Stepper', icon: '⬇️' },
    { id: 'label-position', title: 'Label Position', icon: '🏷️' },
    { id: 'content-navigation', title: 'Content & Navigation', icon: '📦' },
    { id: '5-step-horizontal', title: '5-Step Horizontal', icon: '🔢' },
    { id: '5-step-vertical', title: '5-Step Vertical', icon: '📝' },
    { id: 'connector-sizing', title: 'Connector Sizing', icon: '🔗' },
    { id: 'snack-variant', title: 'Snack Variant', icon: '🍿' },
    { id: 'compact-scrollable', title: 'Compact + Scrollable', icon: '📜' },
    { id: 'premium-themes', title: 'Premium Themes', icon: '🎨' },
    { id: 'interactive-25', title: 'Interactive 25-Step', icon: '🎯' },
  ];

  get exampleVariants() {
    return this.variants.filter(v => v.id !== 'playground');
  }

  currentStep25 = 12;

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

  fiveStepSteps = `[
    {"label": "Setup", "description": "Initial setup", "status": "success"},
    {"label": "Configure", "description": "Settings", "status": "success"},
    {"label": "Process", "description": "Processing", "status": "info"},
    {"label": "Verify", "description": "Verification", "status": "waiting"},
    {"label": "Complete", "description": "Finished", "status": "waiting"}
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

  playgroundCode = `<app-stepper-container
  mode="horizontal"
  active-step="2"
  label-position="bottom"
  steps='[...]'
></app-stepper-container>`;

  horizontalCode = `<app-stepper-container
  mode="horizontal"
  active-step="1"
  steps='[
    {"label": "Account", "description": "Create account", "status": "success"},
    {"label": "Profile", "description": "Personal info", "status": "success"},
    {"label": "Verify", "description": "Confirm email", "status": "waiting"},
    {"label": "Done", "description": "All set", "status": "waiting"}
  ]'
></app-stepper-container>`;

  verticalCode = `<app-stepper-container
  mode="vertical"
  active-step="2"
  description-position="alternate"
  steps='[...]
></app-stepper-container>`;

  labelPositionCode = `<!-- Labels at Bottom (Default) -->
<app-stepper-container
  mode="horizontal"
  label-position="bottom"
  steps='[...]'
></app-stepper-container>

<!-- Labels at Top -->
<app-stepper-container
  mode="horizontal"
  label-position="top"
  steps='[...]'
></app-stepper-container>

<!-- Labels Alternating -->
<app-stepper-container
  mode="horizontal"
  label-position="alternate"
  steps='[...]'
></app-stepper-container>`;

  contentNavigationCode = `<app-stepper-container
  mode="horizontal"
  show-content-area="true"
  show-navigation="true"
  active-step="0"
  steps='[...]'
>
  <div slot="step-0">Step 1 Content</div>
  <div slot="step-1">Step 2 Content</div>
  <div slot="step-2">Step 3 Content</div>
</app-stepper-container>`;

  connectorSizingCode = `<!-- Wide Connectors -->
<app-step-connector mode="horizontal" flex="2"></app-step-connector>

<!-- Fixed Width -->
<app-step-connector mode="horizontal" width="150px"></app-step-connector>

<!-- Thick Connector -->
<app-step-connector mode="horizontal" height="6px" min-width="100px"></app-step-connector>`;

  snackVariantCode = `<app-stepper-container
  variant="snack"
  show-progress="true"
  clickable="true"
  active-step="4"
  steps='[...]'
></app-stepper-container>`;

  compactScrollableCode = `<app-stepper-container
  variant="compact"
  scrollable="true"
  active-step="8"
  steps='[...]'
></app-stepper-container>`;

  premiumThemesCode = `<!-- Outlined Variant -->
<app-stepper-container variant="outlined" steps='[...]'></app-stepper-container>

<!-- Filled Variant -->
<app-stepper-container variant="filled" steps='[...]'></app-stepper-container>

<!-- Success Color Scheme -->
<app-stepper-container color-scheme="success" steps='[...]'></app-stepper-container>

<!-- Dark Theme -->
<app-stepper-container theme="dark" steps='[...]'></app-stepper-container>`;

  interactive25Code = `<app-stepper-container
  variant="snack"
  clickable="true"
  [attr.active-step]="currentStep"
  steps='[/* 25 steps */]'
></app-stepper-container>`;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
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
}
