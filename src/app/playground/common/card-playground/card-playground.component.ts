import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-card-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './card-playground.component.html',
  styleUrl: './card-playground.component.scss',
})
export class DmCardPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'appearance', title: 'Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'features', title: 'Features', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'content', title: 'Content & Style', icon: 'text-quote', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['appearance', 'features', 'content'];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Elevated', value: 'elevated' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
    { label: 'Info', value: 'info' },
  ];

  importanceOptions = [
    { label: 'Standard', value: 'standard' },
    { label: 'Emphasized', value: 'emphasized' },
  ];

  patternOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Product', value: 'product' },
    { label: 'Shortcut', value: 'shortcut' },
  ];

  ribbonPositionOptions = [
    { label: 'Top Left', value: 'top-left' },
    { label: 'Top Right', value: 'top-right' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Default', value: 'default' },
    { label: 'Large', value: 'large' },
  ];

  flipTriggerOptions = [
    { label: 'Click', value: 'click' },
    { label: 'Hover', value: 'hover' },
  ];

  scrollBehaviorOptions = [
    { label: 'Smooth', value: 'smooth' },
    { label: 'Auto', value: 'auto' },
  ];

  menuItems = [
    { id: 'save', label: 'Save trip', icon: 'bookmark', iconLibrary: 'lucide' },
    { id: 'share', label: 'Share', icon: 'share-2', iconLibrary: 'lucide' },
    { separator: true },
    { id: 'report', label: 'Report', icon: 'flag', iconLibrary: 'lucide', disabled: true },
  ];

  menuJson = JSON.stringify(this.menuItems);

  onCardClick() {
    this.logEvent('Card Clicked');
  }

  onCardClose() {
    this.logEvent('Card Closed');
  }

  onCardCollapse(event: any) {
    this.logEvent(`Card ${event.detail.collapsed ? 'Collapsed' : 'Expanded'}`);
  }

  onCardSelect(event: any) {
    this.logEvent(`Card Selection: ${event.detail.selected}`);
  }

  onCardFlip(event: any) {
    this.logEvent(`Card Flipped: ${event.detail.flipped}`);
  }

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      cardId: 'playground-card',
      cardTitle: 'Modern Component Card',
      variant: 'elevated',
      size: 'default',
      layout: 'vertical',
      glass: false,
      bordered: true,
      border: '',
      borderRadius: '16px',
      importance: 'standard',
      pattern: 'default',
      type: 'default',
      width: '340px',
      height: 'auto',
      aspectRatio: '16/9',
      hoverable: true,
      flippable: false,
      flipTrigger: 'click',
      flipped: false,
      collapsible: false,
      collapsed: false,
      closable: false,
      selectable: false,
      selected: false,
      clickable: false,
      href: '',
      target: '',
      cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      coverAlt: 'Card cover',
      extra: 'More Info',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
      avatarIcon: '',
      ribbon: 'NEW',
      ribbonPosition: 'top-right',
      ribbonColor: '#3b82f6',
      description: 'Discover the possibilities of our premium card system with deep integration.',
      tag: 'Experimental',
      buttonText: 'Get Started',
      actions: 'Share,Like',
      showMenu: true,
      menuActions: 'Save,Refresh,Delete',
      iconLibrary: 'lucide',
      loading: false,
      autoScroll: false,
      scrollBehavior: 'smooth',
    };
  }

  updateConfig() {
    const config = this.pgConfig;
    let code = `<ui-card`;

    // Identity & Layout
    if (config.cardId) code += `\n  card-id="${config.cardId}"`;
    if (config.variant !== 'default') code += `\n  variant="${config.variant}"`;
    if (config.size !== 'default') code += `\n  size="${config.size}"`;
    if (config.layout !== 'vertical') code += `\n  layout="${config.layout}"`;
    if (config.type !== 'default') code += `\n  type="${config.type}"`;
    
    // Appearance
    if (config.importance !== 'standard') code += `\n  importance="${config.importance}"`;
    if (config.pattern !== 'default') code += `\n  pattern="${config.pattern}"`;
    if (config.glass) code += `\n  glass`;
    if (config.hoverable) code += `\n  hoverable`;
    if (!config.bordered) code += `\n  bordered="false"`;
    if (config.border) code += `\n  border="${config.border}"`;
    if (config.borderRadius !== '8px') code += `\n  border-radius="${config.borderRadius}"`;
    if (config.width !== '100%') code += `\n  width="${config.width}"`;
    if (config.height !== 'auto') code += `\n  height="${config.height}"`;
    if (config.aspectRatio !== '16/9') code += `\n  aspect-ratio="${config.aspectRatio}"`;
    
    // Interactions
    if (config.flippable) {
        code += `\n  flippable`;
        if (config.flipTrigger !== 'click') code += `\n  flip-trigger="${config.flipTrigger}"`;
    }
    if (config.loading) code += `\n  loading`;
    if (config.closable) code += `\n  closable`;
    if (config.selectable) code += `\n  selectable`;
    if (config.collapsible) code += `\n  collapsible`;
    if (config.clickable) code += `\n  clickable`;
    if (config.href) {
        code += `\n  href="${config.href}"`;
        if (config.target) code += `\n  target="${config.target}"`;
    }
    
    if (config.autoScroll) {
        code += `\n  auto-scroll`;
        if (config.scrollBehavior !== 'smooth') code += `\n  scroll-behavior="${config.scrollBehavior}"`;
    }

    // Ribbon
    if (config.ribbon) {
        code += `\n  ribbon="${config.ribbon}"`;
        code += `\n  ribbon-color="${config.ribbonColor}"`;
        code += `\n  ribbon-position="${config.ribbonPosition}"`;
    }

    // Content Props
    if (config.cardTitle) code += `\n  card-title="${config.cardTitle}"`;
    if (config.description) code += `\n  description="${config.description}"`;
    if (config.tag) code += `\n  tag="${config.tag}"`;
    if (config.buttonText) code += `\n  button-text="${config.buttonText}"`;
    if (config.actions) code += `\n  actions="${config.actions}"`;
    if (config.cover) {
        code += `\n  cover="${config.cover}"`;
        if (config.coverAlt) code += `\n  cover-alt="${config.coverAlt}"`;
    }
    if (config.avatar) code += `\n  avatar="${config.avatar}"`;
    if (config.avatarIcon) code += `\n  avatar-icon="${config.avatarIcon}"`;

    // Menus
    if (config.showMenu) {
        code += `\n  show-menu`;
        code += `\n  [menuItems]="menuItems"`;
    }
    if (config.menuActions) code += `\n  menu-actions="${config.menuActions}"`;
    if (config.iconLibrary !== 'default') code += `\n  icon-library="${config.iconLibrary}"`;

    code += `\n>`;

    // Potential Slots (only as placeholder comments if desired, or simplified)
    code += `\n  <!-- Custom content slots available: header, footer, tabs, grid, back... -->`;
    code += `\n</ui-card>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
