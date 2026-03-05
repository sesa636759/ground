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

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  typeOptions = [
    { label: 'Star', value: 'star' },
    { label: 'Smiley', value: 'smiley' },
    { label: 'Thumb', value: 'thumb' },
  ];

  constructor() {
    super();
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
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
  }

  updateConfig() {
    this.updateConfigFromDom(this.ratingElement, 'ui-rating');
  }

  onRatingChange(event: any) {
    this.pgConfig.value = event.detail?.value ?? event.detail;
    this.logEvent(`Rating changed to: ${this.pgConfig.value}`);
    this.updateConfig();
  }
}
