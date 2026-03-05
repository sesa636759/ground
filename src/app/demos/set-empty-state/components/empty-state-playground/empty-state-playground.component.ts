import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-empty-state-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './empty-state-playground.component.html',
  styleUrl: './empty-state-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EmptyStatePlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('emptyStateElement') emptyStateElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'general', title: 'General Configuration', icon: '⚙️' },
    { id: 'content', title: 'Content & Texts', icon: '📝' },
    { id: 'actions', title: 'Action Buttons', icon: '🔘' },
    { id: 'visuals', title: 'Visual Enhancements', icon: '✨' },
  ]);

  defaultOpen = JSON.stringify(['general']);

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
    this.updateConfigFromDom(this.emptyStateElement, 'app-empty-state');
  }

  onActionClick(event: any) {
    this.logEvent(`Action clicked: ${event.detail.action}`);
  }

  onBackClick(_event: any) {
    this.logEvent('Back button clicked');
  }
}
