import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StepperPlaygroundComponent } from './components/stepper-playground/stepper-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-stepper-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, StepperPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-stepper-demo.component.html',
  styleUrl: './set-stepper-demo.component.scss',
})
export class SetStepperDemoComponent implements OnInit {
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

  snackSteps = `[
    {"label": "1"}, {"label": "2"}, {"label": "3"}, {"label": "4"}, {"label": "5"},
    {"label": "6"}, {"label": "7"}, {"label": "8"}, {"label": "9"}, {"label": "10"}
  ]`;

  playgroundCode = `<app-stepper
  [steps]="steps"
  [currentStep]="0"
  orientation="horizontal"
></app-stepper>`;

  ngOnInit() {}
}
