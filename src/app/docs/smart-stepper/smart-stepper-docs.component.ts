import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-smart-stepper-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './smart-stepper-docs.component.html',
  styleUrls: ['./smart-stepper-docs.component.scss'],
})
export class SmartStepperDocsComponent {
  componentConfig = COMPONENT_CONFIGS['smart-stepper'] || {
    id: 'smart-stepper',
    tagName: 'ui-smart-stepper',
    label: 'Smart Stepper',
    description: 'A step-by-step navigation component with built-in validation capability.',
    props: [
      { name: 'steps', type: 'json', defaultValue: [] },
      { name: 'activeStep', type: 'number', defaultValue: 0 },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  steps = JSON.stringify([
    { label: 'Step 1', completed: true },
    { label: 'Step 2', active: true },
    { label: 'Step 3' },
  ]);

  exampleCodes: Record<string, string> = {
    basic: `<ui-smart-stepper [steps]="steps" [activeStep]="1"></ui-smart-stepper>`,
  };

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
