import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';

import type { GroundUiTabsChangeEvent, GroundUiTabsProps, TabChangeEvent, TabItem } from '../types';
import { GroundUiDirectiveBase } from './ground-ui-directive-base';

const UI_TABS_PROPS = [
  'animationDuration',
  'defaultActive',
  'iconLibrary',
  'iconOnly',
  'iconPosition',
  'indicatorPosition',
  'items',
  'maxTabWidth',
  'maxTitleLength',
  'orientation',
  'position',
  'scrollButtonPlacement',
  'scrollMode',
  'selectionAnimation',
  'showCloseAll',
  'showTabList',
  'size',
  'variant',
  'wrapText',
] as const;

@Directive({ selector: 'ui-tabs', standalone: true })
export class UiTabs extends GroundUiDirectiveBase<HTMLElement> {
  protected override readonly propNames = UI_TABS_PROPS;

  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
  }

  @Input({ transform: numberAttribute }) animationDuration: GroundUiTabsProps['animationDuration'] = 300;
  @Input() defaultActive: GroundUiTabsProps['defaultActive'] = '';
  @Input() iconLibrary: GroundUiTabsProps['iconLibrary'] = 'default';
  @Input({ transform: booleanAttribute }) iconOnly: GroundUiTabsProps['iconOnly'] = false;
  @Input() iconPosition: GroundUiTabsProps['iconPosition'] = 'start';
  @Input() indicatorPosition: GroundUiTabsProps['indicatorPosition'] = 'bottom';
  @Input() items: TabItem[] | string = [];
  @Input({ transform: numberAttribute }) maxTabWidth: GroundUiTabsProps['maxTabWidth'] = 300;
  @Input({ transform: numberAttribute }) maxTitleLength: GroundUiTabsProps['maxTitleLength'] = 24;
  @Input() orientation: GroundUiTabsProps['orientation'] = 'horizontal';
  @Input() position: GroundUiTabsProps['position'] = 'left';
  @Input() scrollButtonPlacement: GroundUiTabsProps['scrollButtonPlacement'] = 'split';
  @Input() scrollMode: GroundUiTabsProps['scrollMode'] = 'manual';
  @Input() selectionAnimation: GroundUiTabsProps['selectionAnimation'] = 'slide';
  @Input({ transform: booleanAttribute }) showCloseAll: GroundUiTabsProps['showCloseAll'] = false;
  @Input({ transform: booleanAttribute }) showTabList: GroundUiTabsProps['showTabList'] = false;
  @Input() size: GroundUiTabsProps['size'] = 'md';
  @Input() variant: GroundUiTabsProps['variant'] = 'line';
  @Input({ transform: booleanAttribute }) wrapText: GroundUiTabsProps['wrapText'] = false;

  @Output() readonly tabChange = new EventEmitter<TabChangeEvent>();

  @HostListener('tabChange', ['$event'])
  protected handleTabChange(event: GroundUiTabsChangeEvent): void {
    this.tabChange.emit(event.detail);
  }
}