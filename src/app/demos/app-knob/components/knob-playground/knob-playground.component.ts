import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-knob-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './knob-playground.component.html',
  styleUrl: './knob-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class KnobPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'value', title: 'Value Control', icon: '🔢' },
    { id: 'visuals', title: 'Visuals', icon: '🎨' },
  ]);

  defaultOpen = JSON.stringify(['value']);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 150,
      strokeWidth: 10,
      valueColor: '#3b82f6',
      readonly: false,
      showValue: true,
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      this.updateConfigFromDom(this.demoElement, 'ui-knob');
    }, 50);
  }

  onValueChange(event: any) {
    this.pgConfig.value = event.detail.value;
    this.updateConfig();
    this.logEvent(`Knob Value Changed: ${this.pgConfig.value}`);
  }

  override resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
    this.eventLog.set([]);
  }
}
