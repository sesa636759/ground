import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-speedometer-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speedometer-playground.component.html',
  styleUrl: './speedometer-playground.component.scss',
})
export class SpeedometerPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('speedometerElement') speedometerElement!: ElementRef;

  pgConfig = {
    value: 65,
    min: 0,
    max: 100,
    label: 'km/h',
    size: 250,
    arcWidth: 20,
    colorMode: 'gradient',
  };

  pgAccordionItems = JSON.stringify([
    { id: 'metric', title: 'Metric Controls', icon: '仪表' },
    { id: 'appearance', title: 'Appearance', icon: '✨' },
  ]);

  accordionDefaultOpen = JSON.stringify(['metric']);

  colorModeOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Gradient', value: 'gradient' },
    { label: 'Segments', value: 'segments' },
  ];

  updateConfig() {
    this.updateConfigFromDom(this.speedometerElement, 'ui-speedometer');
  }

  override resetConfig() {
    this.pgConfig = {
      value: 65,
      min: 0,
      max: 100,
      label: 'km/h',
      size: 250,
      arcWidth: 20,
      colorMode: 'gradient',
    };
    this.updateConfig();
  }
}
