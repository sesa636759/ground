import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-stepper-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stepper-docs.component.html',
  styleUrls: ['./stepper-docs.component.scss'],
})
export class StepperDocsComponent {
  stepperConfig = COMPONENT_CONFIGS['stepper'];

  basicSteps = JSON.stringify([
    { id: '1', label: 'Login', description: 'Account access' },
    { id: '2', label: 'Profile', description: 'Personal info', status: 'active' },
    { id: '3', label: 'Verification', description: 'Identity check' },
    { id: '4', label: 'Finalize', description: 'Complete setup' },
  ]);

  navigationSteps = JSON.stringify([
    { id: '1', label: 'Step 1: Info', status: 'completed' },
    { id: '2', label: 'Step 2: Config', status: 'active' },
    { id: '3', label: 'Step 3: Review', status: 'pending' },
  ]);

  verticalSteps = JSON.stringify([
    {
      id: '1',
      label: 'Package Picked',
      description: 'Courier has collected the item',
      status: 'completed',
    },
    { id: '2', label: 'In Transit', description: 'Traveling to sorting center', status: 'active' },
    { id: '3', label: 'Out for Delivery', description: 'Expected today', status: 'pending' },
    { id: '4', label: 'Delivered', description: 'Signed by recipient', status: 'pending' },
  ]);

  errorSteps = JSON.stringify([
    { id: '1', label: 'Draft', status: 'completed' },
    { id: '2', label: 'Review', status: 'failed', description: 'Critical feedback found' },
    { id: '3', label: 'Publish', status: 'pending' },
  ]);
}
