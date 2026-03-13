import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-card-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-playground.component.html',
  styleUrl: './card-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmCardPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('cardSet') cardSet!: ElementRef;

  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavioral States', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'style', title: 'Style & Presentation', icon: 'palette', iconLibrary: 'lucide' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      title: 'Dynamic Set Card',
      extra: 'v1.0',
      cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      coverAlt: 'Mountain view',
      actions: 'View,Next,Archive',
      hoverable: true,
      size: 'default',
      bordered: true,
      border: '',
      borderRadius: '12px',
      importance: 'standard',
      pattern: 'default',
      type: 'default',
      loading: false,
      flippable: false,
      flipTrigger: 'click',
      closable: false,
      menuActions: 'Refresh,Download,Settings',
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
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Card',
      avatarIcon: '',
      description: 'A dedicated playground for the card set components.',
      tag: 'Set Component',
      buttonText: 'Action',
      width: '100%',
      height: 'auto',
      aspectRatio: '16/9',
      clickable: false,
      href: '',
      target: '_blank'
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.cardSet, 'ui-card');
  }

  onCardAction(event: any) {
    this.logEvent(`Action clicked: "${event.detail.action}"`);
  }

  onCardClose() {
    this.logEvent(`Card closed`);
  }

  onCardCollapse(event: any) {
    const isCollapsed = event.detail.collapsed;
    this.logEvent(`Card ${isCollapsed ? 'collapsed' : 'expanded'}`);
    this.pgConfig.collapsed = isCollapsed;
    this.updateConfig();
  }

  onCardSelect(event: any) {
    const isSelected = event.detail.selected;
    this.logEvent(`Card ${isSelected ? 'Selected' : 'Deselected'}`);
    this.pgConfig.selected = isSelected;
    this.updateConfig();
  }

  onCardFlip(event: any) {
    this.logEvent(`Card flipped: ${event.detail.flipped}`);
  }
}
