import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-speedometer-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speedometer-playground.component.html',
  styleUrl: './speedometer-playground.component.scss',
})
export class DmSpeedometerPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('speedometerElement') speedometerElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'metric', title: 'Metric Controls', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['metric'];

  colorModeOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Gradient', value: 'gradient' },
    { label: 'Segments', value: 'segments' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      value: 65,
      min: 0,
      max: 100,
      label: 'km/h',
      size: 250,
      arcWidth: 20,
      colorMode: 'gradient',
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.speedometerElement, 'ui-speedometer');
  }
}



