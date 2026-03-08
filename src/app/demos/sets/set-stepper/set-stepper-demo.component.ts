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
    { id: 'connectors', title: 'Custom Connectors', icon: '🔗', color: '#06b6d4' },
    { id: 'variants', title: 'Visual Variants', icon: '🎨', color: '#64748b' },
    { id: 'validation', title: 'Validation & Controls', icon: '🛡️', color: '#ef4444' },
    { id: 'colors', title: 'Color Schemes', icon: '🌈', color: '#3b82f6' },
    { id: 'scrolling', title: 'Large Scale', icon: '📜', color: '#10b981' },
    { id: 'interactive', title: 'Interactive Demo', icon: '🎯', color: '#f59e0b' },
  ];

  horizontalSteps = [
    { label: 'Login', description: 'Step 1' },
    { label: 'Profile', description: 'Step 2' },
    { label: 'Review', description: 'Step 3' },
    { label: 'Success', description: 'Step 4' },
  ];

  verticalSteps = [
    { label: 'Start Order', description: 'Customer details' },
    { label: 'Configure', description: 'Select options' },
    { label: 'Payment', description: 'Billing info' },
    { label: 'Finalize', description: 'Review & submit' },
  ];

  threeSteps = [
    { label: 'Account', description: 'Set up details' },
    { label: 'Plan', description: 'Choose your plan' },
    { label: 'Payment', description: 'Enter billing info' },
  ];

  fiveSteps = [
    { id: '1', label: 'Step 1', status: 'completed' },
    { id: '2', label: 'Step 2', status: 'completed' },
    { id: '3', label: 'Step 3', status: 'active' },
    { id: '4', label: 'Step 4', status: 'waiting' },
    { id: '5', label: 'Step 5', status: 'waiting' },
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

  twentySteps = Array.from({ length: 20 }, (_, i) => ({
    label: `Step ${i + 1}`,
    description: `Description for step ${i + 1}`,
  }));

  currentStep25 = 0;
  generate25Steps() {
    return Array.from({ length: 25 }, (_, i) => ({
      label: `Phase ${i + 1}`,
      description: `Task details for phase ${i + 1}`,
    }));
  }

  nextStep25() {
    if (this.currentStep25 < 24) this.currentStep25++;
  }

  previousStep25() {
    if (this.currentStep25 > 0) this.currentStep25--;
  }

  jumpToEnd25() {
    this.currentStep25 = 24;
  }

  // Code snippets
  horizontalBasicCode = `<app-stepper-container [steps]="steps" orientation="horizontal"></app-stepper-container>`;
  verticalBasicCode = `<app-stepper-container [steps]="steps" orientation="vertical" label-position="right"></app-stepper-container>`;
  indicatorTypeCode = `<app-stepper-container orientation="horizontal"></app-stepper-container>\n<app-stepper-container orientation="horizontal" progress-dot></app-stepper-container>`;
  labelPlacementCode = `<app-stepper-container label-position="bottom" ...></app-stepper-container>`;
  flowLogicCode = `<app-stepper-container flow="linear"></app-stepper-container>\n<app-stepper-container flow="non-linear"></app-stepper-container>`;
  contentNavigationCode = `<app-stepper-container show-content-area="true" show-controls="true" ...>\n  <div slot="step-0">...</div>\n</app-stepper-container>`;
  stepsCountCode = `<app-stepper-container size="sm" ...></app-stepper-container>`;
  connectorCode = `<app-step-connector slot="connector-0-1" mode="horizontal" flex="2"></app-step-connector>`;
  variantCode = `<app-stepper-container variant="snack" ...></app-stepper-container>`;
  validationCode = `<app-stepper-container show-controls label-fail="Report Error" ...></app-stepper-container>`;
  colorSchemeCode = `<app-stepper-container color-scheme="success" ...></app-stepper-container>`;
  scrollableCode = `<app-stepper-container scrollable ...></app-stepper-container>`;
  interactiveCode = `<!-- Complex 25-step interactive demo -->`;
}
