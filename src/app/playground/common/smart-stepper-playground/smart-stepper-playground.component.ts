import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-smart-stepper-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './smart-stepper-playground.component.html',
  styleUrl: './smart-stepper-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmSmartStepperPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout Configuration', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'features', title: 'Behavior & Features', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['layout'];

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
    super.resetConfig();
    this.currentStep = '1';
  }
}
