import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-anchor-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './anchor-playground.component.html',
  styleUrl: './anchor-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AnchorPlaygroundComponent extends BasePlaygroundComponent implements AfterViewInit {
  @ViewChild('anchor') anchor!: ElementRef;

  // Playground State
  pgConfig = {
    mode: 'vertical',
    position: 'left',
    alignment: 'left',
    size: 'medium',
    theme: 'light',
    scrollOffset: 80,
    showTooltip: true,
    showIndicator: true,
    showProgress: false,
    showNumbers: false,
    numberStyle: 'numeric',
    sticky: true,
    affix: false,
    affixOffset: 50,
    smoothScroll: true,
    targetType: 'container', // 'window' or 'container'
  };

  pgAccordionItems = JSON.stringify([{ id: 'global', title: 'Global Configuration', icon: '⚙️' }]);

  accordionDefaultOpen = JSON.stringify(['global']);

  modeOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  positionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  alignmentOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  numberStyleOptions = [
    { label: 'Numeric (1, 2)', value: 'numeric' },
    { label: 'Decimal (01, 02)', value: 'decimal' },
    { label: 'Alpha (a, b)', value: 'alpha' },
    { label: 'Roman (i, ii)', value: 'roman' },
  ];

  anchorItems = JSON.stringify([
    { id: 'section-1', label: 'Introduction', icon: 'fas fa-home', tooltip: 'Start here' },
    {
      id: 'section-2',
      label: 'Features',
      icon: 'fas fa-star',
      badge: 'New',
      tooltip: 'Key features',
    },
    { id: 'section-3', label: 'Configuration', icon: 'fas fa-cog', tooltip: 'Setup guide' },
    { id: 'section-4', label: 'API', icon: 'fas fa-code', tooltip: 'Reference' },
    { id: 'section-5', label: 'Examples', icon: 'fas fa-book', tooltip: 'See more' },
  ]);

  ngAfterViewInit() {
    this.updateConfig();
  }

  updateConfig() {
    this.updateConfigFromDom(this.anchor, 'ui-anchor');
  }

  onAnchorSelect(event: any) {
    this.logEvent(`Selected: ${event.detail.id}`);
  }

  override resetConfig() {
    this.pgConfig = {
      mode: 'vertical',
      position: 'left',
      alignment: 'left',
      size: 'medium',
      theme: 'light',
      scrollOffset: 80,
      showTooltip: true,
      showIndicator: true,
      showProgress: false,
      showNumbers: false,
      numberStyle: 'numeric',
      sticky: true,
      affix: false,
      affixOffset: 50,
      smoothScroll: true,
      targetType: 'container',
    };
    this.updateConfig();
    this.eventLog.set([]);
  }
}
