import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmStepperPlaygroundComponent } from '../../../playground/sets/set-stepper-playground/stepper-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-set-stepper-demo',
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmStepperPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-stepper-demo.component.html',
  // styleUrl: './set-stepper-demo.component.scss',
})
export class DmSetStepperDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'horizontal', title: 'Horizontal Modes', icon: '➡️', color: '#3b82f6' },
    { id: 'vertical', title: 'Vertical Modes', icon: '⬇️', color: '#10b981' },
    { id: 'indicators', title: 'Indicator Types', icon: '🔘', color: '#8b5cf6' },
    { id: 'labels', title: 'Label Placement', icon: '🏷️', color: '#f59e0b' },
    { id: 'flow', title: 'Workflow Logic', icon: '⚡', color: '#10b981' },
    { id: 'content', title: 'Content & Navigation', icon: '📦', color: '#8b5cf6' },
    { id: 'steps-count', title: 'Sizing & Counts', icon: '🔢', color: '#ec4899' },
<<<<<<<< HEAD:bck/set-stepper/set-stepper-demo.component.ts
    { id: 'connectors', title: 'Custom Connectors', icon: '🔗', color: '#06b6d4' },
========
    { id: 'nested', title: 'Nested Steps', icon: '🌿', color: '#10b981' },
    { id: 'shapes', title: 'Step Shapes', icon: '💠', color: '#8b5cf6' },
    { id: 'percent', title: 'Progress Percent', icon: '📈', color: '#f59e0b' },
>>>>>>>> main:src/app/demos/sets/set-stepper/set-stepper-demo.component.ts
    { id: 'variants', title: 'Visual Variants', icon: '🎨', color: '#64748b' },
    { id: 'validation', title: 'Validation & Controls', icon: '🛡️', color: '#ef4444' },
    { id: 'colors', title: 'Color Schemes', icon: '🌈', color: '#3b82f6' },
    { id: 'scrolling', title: 'Large Scale', icon: '📜', color: '#10b981' },
    { id: 'interactive', title: 'Interactive Demo', icon: '🎯', color: '#f59e0b' },
  ];

  horizontalSteps = [
    { id: '1', label: 'Login', description: 'Step 1' },
    { id: '2', label: 'Profile', description: 'Step 2' },
    { id: '3', label: 'Review', description: 'Step 3' },
    { id: '4', label: 'Success', description: 'Step 4' },
  ];

  verticalSteps = [
    { id: 'v1', label: 'Start Order', description: 'Customer details' },
    { id: 'v2', label: 'Configure', description: 'Select options' },
    { id: 'v3', label: 'Payment', description: 'Billing info' },
    { id: 'v4', label: 'Finalize', description: 'Review & submit' },
  ];

  threeSteps = [
    { id: '1', label: 'Account', description: 'Set up details' },
    { id: '2', label: 'Plan', description: 'Choose your plan' },
    { id: '3', label: 'Payment', description: 'Enter billing info' },
  ];

  fiveSteps = [
    { id: '1', label: 'Step 1', status: 'completed' },
    { id: '2', label: 'Step 2', status: 'completed' },
    { id: '3', label: 'Step 3', status: 'active' },
    { id: '4', label: 'Step 4', status: 'waiting' },
    { id: '5', label: 'Step 5', status: 'waiting' },
  ];

  sevenSteps = [
    { label: 'Step 1', description: 'First', status: 'completed' },
    { label: 'Step 2', description: 'Second', status: 'completed' },
    { label: 'Step 3', description: 'Third', status: 'completed' },
    { label: 'Step 4', description: 'Fourth', status: 'info' },
    { label: 'Step 5', description: 'Fifth', status: 'waiting' },
    { label: 'Step 6', description: 'Sixth', status: 'waiting' },
    { label: 'Step 7', description: 'Seventh', status: 'waiting' },
  ];

<<<<<<<< HEAD:bck/set-stepper/set-stepper-demo.component.ts
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
========
  extraStatusSteps = [
    { label: 'Verified', status: 'completed', description: 'Done' },
    { label: 'Processing', status: 'waiting', description: 'Please wait...' },
    { label: 'Review', status: 'info', description: 'Read only' },
    { label: 'Warning', status: 'warning', description: 'Check details' },
    { label: 'Blocked', status: 'disabled', description: 'Not available' },
    { label: 'Failed', status: 'failed', description: 'Critical error' },
  ];

  percentSteps = [
    { id: '1', label: 'Uploaded', status: 'completed' },
    { id: '2', label: 'Processing', status: 'active', percent: 75, icon: 'refresh' },
    { id: '3', label: 'Finished', status: 'pending' },
  ];

  nestedSteps = [
    { id: '1', label: 'Design Phase', status: 'completed' },
    {
      id: '2',
      label: 'Implementation',
      status: 'active',
      description: 'Building the core modules',
      children: [
        { id: '2-1', label: 'Setup Environment', status: 'completed' },
        { id: '2-2', label: 'Develop UI', status: 'active' },
        { id: '2-3', label: 'Connect Backend', status: 'pending' },
      ],
    },
    { id: '3', label: 'Launch', status: 'pending' },
  ];

  twentySteps = Array.from({ length: 20 }, (_, i) => ({
    label: `Step ${i + 1}`,
    description: `Description for step ${i + 1}`,
  }));

  customIconSteps = [
    {
      id: '1',
      label: 'User Info',
      description: 'Profile setup',
      icon: 'user',
      status: 'completed',
    },
    {
      id: '2',
      label: 'Verification',
      description: 'Email confirmed',
      svgIcon:
        '<svg viewBox="0 0 24 24" fill="currentColor" width="20"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
      status: 'active',
    },
    {
      id: '3',
      label: 'Settings',
      description: 'Preferences',
      icon: 'settings',
      status: 'pending',
    },
  ];

  currentStep25 = 0;
  stressTestSteps = Array.from({ length: 25 }, (_, i) => ({
    id: `x${i + 1}`,
    label:
      i === 0
        ? 'Account'
        : i === 1
          ? 'Profile'
          : i === 2
            ? 'Verify'
            : i === 24
              ? 'Done'
              : `Step ${i + 1}`,
    description: `Info for step ${i + 1}`,
  }));
>>>>>>>> main:src/app/demos/sets/set-stepper/set-stepper-demo.component.ts

  nextStep25() {
    if (this.currentStep25 < 24) this.currentStep25++;
  }

<<<<<<<< HEAD:bck/set-stepper/set-stepper-demo.component.ts
  variantCode = `<app-stepper-container variant="snack" ...></app-stepper-container>
<app-stepper-container compact ...></app-stepper-container>
<app-stepper-container variant="outlined" ...></app-stepper-container>
<app-stepper-container variant="filled" ...></app-stepper-container>
<app-stepper-container variant="minimal" ...></app-stepper-container>`;
========
  previousStep25() {
    if (this.currentStep25 > 0) this.currentStep25--;
  }
>>>>>>>> main:src/app/demos/sets/set-stepper/set-stepper-demo.component.ts

  jumpToEnd25() {
    this.currentStep25 = 24;
  }

<<<<<<<< HEAD:bck/set-stepper/set-stepper-demo.component.ts
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
========
  // Code snippets
  horizontalBasicCode = `<ui-stepper [steps]="steps" orientation="horizontal"></ui-stepper>`;
  verticalBasicCode = `<ui-stepper [steps]="steps" orientation="vertical" label-position="right"></ui-stepper>`;
  indicatorTypeCode = `<ui-stepper orientation="horizontal"></ui-stepper>\n<ui-stepper orientation="horizontal" progress-dot></ui-stepper>`;
  labelPlacementCode = `<ui-stepper label-position="bottom" ...></ui-stepper>`;
  flowLogicCode = `<ui-stepper flow="linear"></ui-stepper>\n<ui-stepper flow="non-linear"></ui-stepper>`;
  contentNavigationCode = `<ui-stepper [steps]="steps" orientation="vertical" active-step="0">
  <div slot="content-1">...</div>
  <div slot="content-2">...</div>
</ui-stepper>`;
  stepsCountCode = `<ui-stepper size="sm" [steps]="threeSteps"></ui-stepper>`;
  nestedStepsCode = `<ui-stepper [steps]="nestedSteps" orientation="vertical"></ui-stepper>`;
  shapesCode = `<ui-stepper step-shape="square-active" ...></ui-stepper>`;
  percentCode = `<ui-stepper [steps]="percentSteps" ...></ui-stepper>`;
  variantCode = `<ui-stepper variant="snack" steps-per-page="5" show-progress="true" ...></ui-stepper>`;
  validationCode = `<ui-stepper show-controls label-fail="Report Error" ...></ui-stepper>`;
  colorSchemeCode = `<ui-stepper color-scheme="success" ...></ui-stepper>`;
  scrollableCode = `<ui-stepper scrollable compact="true" ...></ui-stepper>`;
  interactiveCode = `<!-- Complex 25-step interactive demo -->`;
>>>>>>>> main:src/app/demos/sets/set-stepper/set-stepper-demo.component.ts
}
