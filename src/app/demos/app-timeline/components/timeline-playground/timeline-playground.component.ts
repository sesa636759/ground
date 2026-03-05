import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-timeline-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timeline-playground.component.html',
  styleUrl: './timeline-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TimelinePlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout Properties', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'content', title: 'Content Options', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = JSON.stringify(['layout', 'content']);

  alignOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Alternate', value: 'alternate' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  events = [
    {
      status: 'Ordered',
      date: '15/10/2023 10:30',
      icon: 'shopping_cart',
      color: '#9C27B0',
      description: 'Transaction processed',
    },
    {
      status: 'Processing',
      date: '15/10/2023 14:00',
      icon: 'cog',
      color: '#673AB7',
      description: 'Item picked for shipment',
    },
    {
      status: 'Shipped',
      date: '15/10/2023 16:15',
      icon: 'local_shipping',
      color: '#FF9800',
      description: 'En route to destination',
    },
    {
      status: 'Delivered',
      date: '16/10/2023 10:00',
      icon: 'check_circle',
      color: '#607D8B',
      description: 'Package handed over',
    },
  ];

  valueJson = JSON.stringify(this.events);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      orientation: 'vertical',
      align: 'left',
      showOpposite: true,
      customMarker: false,
    };
  }

  updateConfig() {
    let code = '<ui-timeline\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  align="${this.pgConfig.align}"\n`;
    code += `  [value]="events"\n`;
    code += '>\n';
    code += '  <ng-template let-item>\n';
    code += '    <div>{{ item.status }}</div>\n';
    if (this.pgConfig.showOpposite) code += '    <div slot="opposite">{{ item.date }}</div>\n';
    code += '  </ng-template>\n';
    code += '</ui-timeline>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
