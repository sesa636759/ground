import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-anchor-playground',
  imports: [...PLAYGROUND_IMPORTS],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './anchor-playground.component.html',
  styleUrl: './anchor-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmAnchorPlaygroundComponent extends BasePlaygroundComponent implements AfterViewInit {
  @ViewChild('anchor') anchor!: ElementRef;

  // Playground State
  pgConfig = this.getDefaultConfig();

  numberStyleOptions = [
    { label: 'Numeric (1, 2)', value: 'numeric' },
    { label: 'Decimal (01, 02)', value: 'decimal' },
    { label: 'Alpha (a, b)', value: 'alpha' },
    { label: 'Roman (i, ii)', value: 'roman' },
  ];

  anchorItems = [
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
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
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
  }

  ngAfterViewInit() {
    this.updateConfig();
  }

  updateConfig() {
    this.updateConfigFromDom(this.anchor, 'ui-anchor');
  }

  onAnchorSelect(event: any) {
    this.logEvent(`Selected: ${event.detail.id}`);
  }
}



