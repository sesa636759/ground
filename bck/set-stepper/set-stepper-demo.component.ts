import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmStepperPlaygroundComponent } from '../../../playground/sets/set-stepper-playground/stepper-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-set-stepper-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmStepperPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-stepper-demo.component.html',
  styleUrl: './set-stepper-demo.component.scss',
})
export class DmSetStepperDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'horizontal', title: 'Horizontal Modes', icon: '➡️', color: '#3b82f6' },
    { id: 'vertical', title: 'Vertical Modes', icon: '⬇️', color: '#10b981' },
    { id: 'indicators', title: 'Indicator Types', icon: '🔘', color: '#8b5cf6' },
    { id: 'labels', title: 'Label Placement', icon: '🏷️', color: '#f59e0b' },
    { id: 'flow', title: 'Workflow Logic', icon: '⚡', color: '#10b981' },
    { id: 'content', title: 'Content & Navigation', icon: '📦', color: '#8b5cf6' },
    { id: 'steps-count', title: 'Sizing & Counts', icon: '🔢', color: '#ec4899' },
    { id: 'connectors', title: 'Custom Connectors', icon: '🔗', color: '#06b6d4' },
    { id: 'variants', title: 'Visual Variants', icon: '🎨', color: '#64748b' },
    { id: 'validation', title: 'Validation & Controls', icon: '🛡️', color: '#ef4444' },
    { id: 'colors', title: 'Color Schemes', icon: '🌈', color: '#3b82f6' },
    { id: 'scrolling', title: 'Large Scale', icon: '📜', color: '#10b981' },
    { id: 'interactive', title: 'Interactive Demo', icon: '🎯', color: '#f59e0b' },
  ];

  currentStep25 = 12;

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
      status: i < this.currentStep25 ? 'success' : i === this.currentStep25 ? 'info' : 'waiting',
    }));
  }

  horizontalSteps = [
    { label: 'Account', description: 'Create account', status: 'success' },
    { label: 'Profile', description: 'Personal info', status: 'success' },
    { label: 'Verify', description: 'Confirm email', status: 'waiting' },
    { label: 'Done', description: 'All set', status: 'waiting' },
  ];

  verticalSteps = [
    { label: 'Order Placed', description: 'Received', status: 'success' },
    { label: 'Processing', description: 'Preparing', status: 'success' },
    { label: 'Shipped', description: 'In transit', status: 'info' },
    { label: 'Delivered', description: 'At doorstep', status: 'waiting' },
  ];

  threeSteps = [
    { label: 'Start', description: 'Begin process', status: 'success' },
    { label: 'Process', description: 'In progress', status: 'info' },
    { label: 'Complete', description: 'Finished', status: 'waiting' },
  ];

  fiveSteps = [
    { label: 'Setup', description: 'Initial setup', status: 'success' },
    { label: 'Configure', description: 'Settings', status: 'success' },
    { label: 'Process', description: 'Processing', status: 'info' },
    { label: 'Verify', description: 'Verification', status: 'waiting' },
    { label: 'Complete', description: 'Finished', status: 'waiting' },
  ];

  sevenSteps = [
    { label: 'Step 1', description: 'First', status: 'success' },
    { label: 'Step 2', description: 'Second', status: 'success' },
    { label: 'Step 3', description: 'Third', status: 'success' },
    { label: 'Step 4', description: 'Fourth', status: 'info' },
    { label: 'Step 5', description: 'Fifth', status: 'waiting' },
    { label: 'Step 6', description: 'Sixth', status: 'waiting' },
    { label: 'Step 7', description: 'Seventh', status: 'waiting' },
  ];

  customIconSteps = [
    { label: 'Payment', status: 'success', icon: '<i class="fas fa-credit-card"></i>' },
    { label: 'Security', status: 'info', icon: '<i class="fas fa-shield-alt"></i>' },
    { label: 'Support', status: 'waiting', icon: '<i class="fas fa-headset"></i>' },
  ];

  twentySteps = [
    { label: 'Step 1', description: 'First step' },
    { label: 'Step 2', description: 'Second step' },
    { label: 'Step 3', description: 'Third step' },
    { label: 'Step 4', description: 'Fourth step' },
    { label: 'Step 5', description: 'Fifth step' },
    { label: 'Step 6', description: 'Sixth step' },
    { label: 'Step 7', description: 'Seventh step' },
    { label: 'Step 8', description: 'Eighth step' },
    { label: 'Step 9', description: 'Ninth step' },
    { label: 'Step 10', description: 'Tenth step' },
    { label: 'Step 11', description: 'Eleventh step' },
    { label: 'Step 12', description: 'Twelfth step' },
    { label: 'Step 13', description: 'Thirteenth step' },
    { label: 'Step 14', description: 'Fourteenth step' },
    { label: 'Step 15', description: 'Fifteenth step' },
    { label: 'Step 16', description: 'Sixteenth step' },
    { label: 'Step 17', description: 'Seventeenth step' },
    { label: 'Step 18', description: 'Eighteenth step' },
    { label: 'Step 19', description: 'Nineteenth step' },
    { label: 'Step 20', description: 'Twentieth step' },
  ];

  horizontalBasicCode = `<app-stepper-container
  orientation="horizontal"
  active-step="0"
  [steps]="steps">
</app-stepper-container>`;

  verticalBasicCode = `<app-stepper-container
  orientation="vertical"
  active-step="2"
  label-position="right"
  [steps]="steps">
</app-stepper-container>`;

  indicatorTypeCode = `<app-stepper-container orientation="horizontal"></app-stepper-container>
<app-stepper-container orientation="horizontal" progress-dot></app-stepper-container>`;

  labelPlacementCode = `<app-stepper-container label-position="bottom" ...></app-stepper-container>
<app-stepper-container label-position="left" ...></app-stepper-container>
<app-stepper-container label-position="right" ...></app-stepper-container>`;

  flowLogicCode = `<app-stepper-container flow="linear"></app-stepper-container>
<app-stepper-container flow="non-linear"></app-stepper-container>`;

  contentNavigationCode = `<app-stepper-container
  orientation="horizontal"
  show-content-area="true"
  show-controls="true"
  active-step="0">
  <div slot="step-0">Step 1 Content</div>
  <div slot="step-1">Step 2 Content</div>
  ...
</app-stepper-container>`;

  connectorCode = `<app-stepper-container ...>
  <app-step-connector slot="connector-0-1" flex="2"></app-step-connector>
  <app-step-connector slot="connector-1-2" width="150px"></app-step-connector>
  <app-step-connector slot="connector-2-3" height="6px"></app-step-connector>
</app-stepper-container>`;

  variantCode = `<app-stepper-container variant="snack" ...></app-stepper-container>
<app-stepper-container compact ...></app-stepper-container>
<app-stepper-container variant="outlined" ...></app-stepper-container>
<app-stepper-container variant="filled" ...></app-stepper-container>
<app-stepper-container variant="minimal" ...></app-stepper-container>`;

  colorSchemeCode = `<app-stepper-container color-scheme="success" ...></app-stepper-container>
<app-stepper-container color-scheme="warning" ...></app-stepper-container>
<app-stepper-container color-scheme="danger" ...></app-stepper-container>`;

  validationCode = `<app-stepper-container
  show-controls
  label-fail="Report Error"
  label-finish="Submit Order"
  [active-step]="1">
</app-stepper-container>`;

  customIconCode = `<app-stepper-container [steps]="customIconSteps"></app-stepper-container>`;

  scrollableCode = `<app-stepper-container variant="compact" scrollable="true" ...></app-stepper-container>`;

  stepsCountCode = `<app-stepper-container [attr.steps]="threeSteps" ...></app-stepper-container>
<app-stepper-container [attr.steps]="fiveSteps" ...></app-stepper-container>
<app-stepper-container [attr.steps]="sevenSteps" ...></app-stepper-container>`;

  interactiveCode = `<app-stepper-container
  orientation="horizontal"
  variant="snack"
  clickable
  show-progress
  [active-step]="currentStep"
  [steps]="stepsArray">
</app-stepper-container>`;

  playgroundCode = `<app-stepper-container
  [orientation]="orientation"
  [variant]="variant"
  [color-scheme]="colorScheme"
  [active-step]="activeStep"
  [steps]="steps"
></app-stepper-container>`;
}
