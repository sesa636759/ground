import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-smart-stepper-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './smart-stepper-playground.component.html',
  styleUrl: './smart-stepper-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SmartStepperPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'layout', title: 'Layout Configuration', icon: '📏' },
    { id: 'features', title: 'Behavior & Features', icon: '⚙️' },
  ]);

  defaultOpen = JSON.stringify(['layout']);

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  themeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Compact', value: 'compact' },
  ];

  currentStep = '1';

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      orientation: 'horizontal',
      theme: 'default',
      showIcons: true,
      allowBranching: false,
    };
  }

  updateConfig() {
    setTimeout(() => {
      this.updateConfigFromDom(this.demoElement, 'ui-smart-stepper');
    }, 50);
  }

  onStepChange(event: any) {
    this.currentStep = event.detail.value;
    this.updateConfig();
    this.logEvent(`Step changed to: ${this.currentStep}`);
  }

  override resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.currentStep = '1';
    this.updateConfig();
    this.eventLog.set([]);
  }
}
