import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

@Component({
  selector: 'dm-empty-state-set-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './empty-state-playground.component.html',
  styleUrl: './empty-state-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmEmptyStateSetPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('emptyStateElement') emptyStateElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'general', title: 'General Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'content', title: 'Content & Texts', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'actions', title: 'Action Buttons', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visual Enhancements', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['general'];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      type: 'no-data',
      variant: 'default',
      size: 'medium',
      align: 'center',
      heading: 'No Data Available',
      message: 'There is no data to display at the moment.',
      illustration: '',
      rounded: false,
      elevated: false,
      compact: false,
      animated: false,
      showBackButton: false,
      primaryAction: 'Get Started',
      primaryActionIcon: 'fas fa-plus',
      secondaryAction: 'Learn More',
      secondaryActionIcon: 'fas fa-book',
      loadingAction: false,
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.emptyStateElement, 'ui-empty-state');
  }

  onActionClick(event: any) {
    this.logEvent(`Action clicked: ${event.detail.action}`);
  }

  onBackClick(_event: any) {
    this.logEvent('Back button clicked');
  }
}
