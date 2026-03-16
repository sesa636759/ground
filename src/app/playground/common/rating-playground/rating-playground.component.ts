import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-rating-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './rating-playground.component.html',
  styleUrl: './rating-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmRatingPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('ratingElement') ratingElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Rating Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visual Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'zap', iconLibrary: 'lucide' },
  ];

  typeOptions = [
    { label: 'Star', value: 'star' },
    { label: 'Smiley', value: 'smiley' },
    { label: 'Thumb', value: 'thumb' },
  ];

  ratingColorOptions = [
    { label: 'Warning', value: 'warning' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
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
      labels: '', // JSON string for labels
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
