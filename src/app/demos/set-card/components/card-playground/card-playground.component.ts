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
  selector: 'app-card-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-playground.component.html',
  styleUrl: './card-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CardPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('cardSet') cardSet!: ElementRef;

  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      title: 'Card Title',
      extra: 'More',
      cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
      actions: 'Settings,Edit,More',
      hoverable: true,
      size: 'default',
      bordered: true,
      type: 'default',
      loading: false,
      flippable: false,
      flipTrigger: 'click',
      closable: false,
      menuActions: '',
      layout: 'vertical',
      glass: false,
      variant: 'default',
      ribbon: '',
      ribbonPosition: 'top-right',
      ribbonColor: '#1890ff',
      collapsible: false,
      collapsed: false,
      selectable: false,
      selected: false,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
      avatarIcon: '',
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.cardSet, 'app-card');
  }

  onCardAction(event: any) {
    this.logEvent(`Action clicked: "${event.detail.action}"`);
  }

  onCardClose() {
    this.logEvent(`Card closed`);
  }

  onCardCollapse(event: any) {
    this.logEvent(`Card ${event.detail.collapsed ? 'collapsed' : 'expanded'}`);
    this.pgConfig.collapsed = event.detail.collapsed;
    this.updateConfig();
  }

  onCardSelect(event: any) {
    this.logEvent(`Card ${event.detail.selected ? 'selected' : 'deselected'}`);
    this.pgConfig.selected = event.detail.selected;
    this.updateConfig();
  }
}
