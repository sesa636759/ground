import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';

import type {
  CardFlipEvent,
  GroundUiCardClickEvent,
  GroundUiCardFlipEvent,
  GroundUiCardProps,
  GroundUiCardSelectEvent,
} from '../types';
import { GroundUiDirectiveBase } from './ground-ui-directive-base';

const UI_CARD_PROPS = [
  'border',
  'borderRadius',
  'cardId',
  'clickable',
  'expandable',
  'flippable',
  'height',
  'hoverable',
  'href',
  'iconLibrary',
  'loading',
  'menuItems',
  'selectable',
  'selected',
  'showMenu',
  'variant',
  'width',
] as const;

@Directive({ selector: 'ui-card', standalone: true })
export class UiCard extends GroundUiDirectiveBase<HTMLElement> {
  protected override readonly propNames = UI_CARD_PROPS;

  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
  }

  @Input() border: GroundUiCardProps['border'] = '1px solid #e5e7eb';
  @Input() borderRadius: GroundUiCardProps['borderRadius'] = '8px';
  @Input() cardId: GroundUiCardProps['cardId'] = '';
  @Input({ transform: booleanAttribute }) clickable: GroundUiCardProps['clickable'] = false;
  @Input({ transform: booleanAttribute }) expandable: GroundUiCardProps['expandable'] = false;
  @Input({ transform: booleanAttribute }) flippable: GroundUiCardProps['flippable'] = false;
  @Input() height: GroundUiCardProps['height'] = 'auto';
  @Input({ transform: booleanAttribute }) hoverable: GroundUiCardProps['hoverable'] = false;
  @Input() href: GroundUiCardProps['href'] = '';
  @Input() iconLibrary: GroundUiCardProps['iconLibrary'] = 'default';
  @Input({ transform: booleanAttribute }) loading: GroundUiCardProps['loading'] = false;
  @Input() menuItems: GroundUiCardProps['menuItems'] = '[]';
  @Input({ transform: booleanAttribute }) selectable: GroundUiCardProps['selectable'] = false;
  @Input({ transform: booleanAttribute }) selected: GroundUiCardProps['selected'] = false;
  @Input({ transform: booleanAttribute }) showMenu: GroundUiCardProps['showMenu'] = false;
  @Input() variant: GroundUiCardProps['variant'] = 'default';
  @Input() width: GroundUiCardProps['width'] = '100%';

  @Output() readonly cardClick = new EventEmitter<void>();
  @Output() readonly cardFlip = new EventEmitter<CardFlipEvent>();
  @Output() readonly cardSelect = new EventEmitter<{ selected: boolean }>();

  @HostListener('cardClick', ['$event'])
  protected handleCardClick(event: GroundUiCardClickEvent): void {
    this.cardClick.emit(event.detail);
  }

  @HostListener('cardFlip', ['$event'])
  protected handleCardFlip(event: GroundUiCardFlipEvent): void {
    this.cardFlip.emit(event.detail);
  }

  @HostListener('cardSelect', ['$event'])
  protected handleCardSelect(event: GroundUiCardSelectEvent): void {
    this.cardSelect.emit(event.detail);
  }
}