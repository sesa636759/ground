import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmStepperPlaygroundComponent } from '../../../playground/common/stepper-playground/stepper-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-stepper-demo',

  imports: [
    ...PLAYGROUND_IMPORTS,
    DmStepperPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stepper-demo.component.html',
  styleUrl: './stepper-demo.component.scss',
})
export class DmStepperDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'orientation', title: 'Orientation', icon: '📐', color: '#3b82f6' },
    { id: 'visuals', title: 'Visual Types', icon: '🎨', color: '#10b981' },
    { id: 'validation', title: 'Logic & Flow', icon: '⚡', color: '#f59e0b' },
    { id: 'api', title: 'Programmatic API', icon: '🔧', color: '#3b82f6' },
    { id: 'sizes', title: 'Size Variations', icon: '📏', color: '#10b981' },
  ];

  steps = [
    { id: '1', label: 'Start', status: 'completed' },
    { id: '2', label: 'Processing', status: 'active' },
    { id: '3', label: 'Verification' },
    { id: '4', label: 'Done' },
  ];

  playgroundCode = `<ui-stepper 
  [steps]="steps" 
  orientation="horizontal" 
  active-step="1"
></ui-stepper>`;

  orientationCode = `<!-- Horizontal Stepper -->
<ui-stepper orientation="horizontal"></ui-stepper>

<!-- Vertical Stepper -->
<ui-stepper orientation="vertical"></ui-stepper>`;

  visualsCode = `<!-- Minimal Dot Style -->
<ui-stepper progress-dot></ui-stepper>

<!-- Modern Variant -->
<ui-stepper variant="modern"></ui-stepper>`;

  flowCode = `<!-- Non-linear: users can jump to any step -->
<ui-stepper flow="non-linear"></ui-stepper>

<!-- Linear: strict sequential completion -->
<ui-stepper flow="linear"></ui-stepper>`;

  apiCode = `<!-- Programmatic controls using refs or bindings -->
<div class="controls">
  <button (click)="stepper.prev()">Prev</button>
  <button (click)="stepper.next()">Next</button>
</div>
<ui-stepper #stepper [steps]="steps" [activeStep]="currentStep"></ui-stepper>`;

  sizesCode = `<ui-stepper size="sm"></ui-stepper>
<ui-stepper size="md"></ui-stepper>
<ui-stepper size="lg"></ui-stepper>`;

  visualOptionsCode = `<ui-stepper [show-numbers]="true" [show-descriptions]="true"></ui-stepper>
<ui-stepper [show-numbers]="false" [show-descriptions]="true"></ui-stepper>`;

  responsiveCode = `<ui-stepper [max-visible-steps]="3"></ui-stepper>`;

  dynamicStepsCode = `<ui-stepper [steps]="steps"></ui-stepper>
<button (click)="changeSteps()">Change Steps</button>`;

  changeSteps() {
    this.steps = [
      { id: 'a', label: 'Step A', status: 'completed' },
      { id: 'b', label: 'Step B', status: 'active' },
    ];
  }

  showStatus() {
    alert(`Current Step Index: ${this.currentStep}`);
  }

  currentStep = 1;

  onPrevious() {
    this.currentStep = Math.max(0, this.currentStep - 1);
  }

  onNext() {
    this.currentStep = Math.min(this.steps.length - 1, this.currentStep + 1);
  }

  onGoTo(index: number) {
    this.currentStep = index;
  }
}
