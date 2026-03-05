import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoseChartPlaygroundComponent } from './components/rose-chart-playground/rose-chart-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'app-rose-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    RoseChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './rose-chart-demo.component.html',
  styleUrl: './rose-chart-demo.component.scss',
})
export class RoseChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'monthly', title: 'Monthly Revenue', icon: '🌹', color: '#6366f1' },
    { id: 'performance', title: 'Performance', icon: '📊', color: '#10b981' },
    { id: 'wind', title: 'Wind Direction', icon: '💨', color: '#0ea5e9' },
  ];

  // Sample items for different layouts
  monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [42, 55, 48, 70, 65, 90, 88, 95, 78, 68, 52, 60],
        backgroundColor: [
          '#6366f1',
          '#7c3aed',
          '#0ea5e9',
          '#10b981',
          '#f59e0b',
          '#f43f5e',
          '#8b5cf6',
          '#06b6d4',
          '#84cc16',
          '#fb923c',
          '#a855f7',
          '#ec4899',
        ],
        borderWidth: 1,
      },
    ],
  };

  perfData = {
    labels: ['Speed', 'Reliability', 'Security', 'UX', 'Scalability', 'Accessibility'],
    datasets: [
      {
        data: [85, 92, 78, 95, 88, 76],
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#0ea5e9', '#f43f5e', '#8b5cf6'],
        borderWidth: 1,
      },
    ],
  };

  windData = {
    labels: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
    datasets: [
      {
        data: [22, 14, 18, 30, 25, 10, 16, 20],
        backgroundColor: [
          '#6366f1',
          '#8b5cf6',
          '#0ea5e9',
          '#10b981',
          '#f59e0b',
          '#f43f5e',
          '#06b6d4',
          '#fb923c',
        ],
        borderWidth: 1,
      },
    ],
  };

  monthlyCode = `<!-- Rose / Nightingale Chart using Chart.js polarArea -->
<app-chart
  chartType="polarArea"
  [showLegend]="true"
  legendPosition="right"
  [responsive]="true"
  [data]="roseData"
  style="width: 480px; height: 360px;"
></app-chart>

// TypeScript
roseData = {
  labels: ['Jan', 'Feb', 'Mar', ...],
  datasets: [{ data: [42, 55, 48, ...], backgroundColor: ['#6366f1', ...] }]
};`;
}
