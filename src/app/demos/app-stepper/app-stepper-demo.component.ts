import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StepperPlaygroundComponent } from './components/stepper-playground/stepper-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-stepper-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StepperPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-stepper-demo.component.html',
  styleUrl: './app-stepper-demo.component.scss',
})
export class AppStepperDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'orientation', title: 'Orientation', icon: '📐', color: '#3b82f6' },
    { id: 'visuals', title: 'Visual Types', icon: '🎨', color: '#10b981' },
    { id: 'validation', title: 'Logic & Flow', icon: '⚡', color: '#f59e0b' },
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
}
