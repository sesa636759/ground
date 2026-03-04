import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-anchor-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './anchor-playground.component.html',
  styleUrl: './anchor-playground.component.scss',
})
export class AnchorPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('anchor') anchor!: ElementRef;
  pgConfig = {
    orientation: 'vertical',
    type: 'line',
    scrollOffset: 40,
    showIndicator: true,
    showProgress: true,
    affix: false,
  };

  orientationOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  typeOptions = [
    { label: 'Line', value: 'line' },
    { label: 'Dot', value: 'dot' },
  ];

  pgAccordionItems = JSON.stringify([{ id: 'config', title: 'Configuration', icon: '⚙️' }]);
  defaultOpen = JSON.stringify(['config']);

  links = [
    { id: 'basics', label: 'Basics', target: 'basics-pg' },
    { id: 'api', label: 'API Reference', target: 'api-pg' },
    { id: 'theming', label: 'Theming', target: 'theming-pg' },
  ];

  linksJson = JSON.stringify(this.links);

  updateConfig() {
    this.updateConfigFromDom(this.anchor, 'ui-anchor');
  }

  override resetConfig() {
    this.pgConfig = {
      orientation: 'vertical',
      type: 'line',
      scrollOffset: 40,
      showIndicator: true,
      showProgress: true,
      affix: false,
    };
    this.updateConfig();
  }
}
