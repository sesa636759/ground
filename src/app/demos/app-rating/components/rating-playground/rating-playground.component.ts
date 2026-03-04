import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-rating-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './rating-playground.component.html',
  styleUrl: './rating-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RatingPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('ratingElement') ratingElement!: ElementRef;

  pgConfig = {
    type: 'star',
    value: 3,
    max: 5,
    size: 'md',
    color: 'warning',
    readonly: false,
    disabled: false,
    allowHalf: false,
    showValue: true,
  };

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  accordionDefaultOpen = JSON.stringify(['global']);

  typeOptions = [
    { label: 'Star', value: 'star' },
    { label: 'Smiley', value: 'smiley' },
    { label: 'Thumb', value: 'thumb' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Warning', value: 'warning' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
  ];

  constructor() {
    super();
    this.updateConfig();
  }

  updateConfig() {
    this.updateConfigFromDom(this.ratingElement, 'ui-rating');
  }

  onRatingChange(event: any) {
    this.pgConfig.value = event.detail?.value ?? event.detail;
    this.logEvent(`Rating changed to: ${this.pgConfig.value}`);
    this.updateConfig();
  }

  override resetConfig() {
    this.pgConfig = {
      type: 'star',
      value: 3,
      max: 5,
      size: 'md',
      color: 'warning',
      readonly: false,
      disabled: false,
      allowHalf: false,
      showValue: true,
    };
    this.updateConfig();
    this.eventLog.set([]);
  }
}
