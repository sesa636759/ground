import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-chart-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chart-playground.component.html',
  styleUrl: './chart-playground.component.scss',
})
export class ChartPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('chart') chart!: ElementRef;
  pgConfig = {
    type: 'line',
    showLegend: true,
    responsive: true,
  };

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

  updateConfig() {
    this.updateConfigFromDom(this.chart, 'ui-chart');
  }

  override resetConfig() {
    this.pgConfig = {
      type: 'line',
      showLegend: true,
      responsive: true,
    };
    this.updateConfig();
  }
}
