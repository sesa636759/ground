import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-chart-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chart-playground.component.html',
  styleUrl: './chart-playground.component.scss',
})
export class DmChartPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('chart') chart!: ElementRef;
  pgConfig = this.getDefaultConfig();

  typeOptions = [
    { label: 'Line', value: 'line' },
    { label: 'Bar', value: 'bar' },
    { label: 'Pie', value: 'pie' },
    { label: 'Doughnut', value: 'doughnut' },
  ];

  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
      },
    ],
  };

  chartDataJson = JSON.stringify(this.chartData);

  getDefaultConfig() {
    return {
      type: 'line',
      showLegend: true,
      responsive: true,
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.chart, 'ui-chart');
  }
}



