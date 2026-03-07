import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmPolarAreaChartPlaygroundComponent } from '../../../playground/charts/polar-area-chart-playground/polar-area-chart-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-polar-area-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    DmPolarAreaChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './polar-area-chart-demo.component.html',
  styleUrl: './polar-area-chart-demo.component.scss',
})
export class DmPolarAreaChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'skills', title: 'Skills Radar', icon: '🌐', color: '#6366f1' },
    { id: 'sales', title: 'Sales Regions', icon: '🗺️', color: '#10b981' },
    { id: 'multi', title: 'Multi-Dataset', icon: '📊', color: '#0ea5e9' },
  ];

  // Sample items for different layouts
  skillsData = {
    labels: ['Frontend', 'Backend', 'DevOps', 'Design', 'Security', 'Analytics'],
    datasets: [
      {
        data: [85, 78, 65, 90, 72, 80],
        backgroundColor: [
          '#6366f1cc',
          '#0ea5e9cc',
          '#10b981cc',
          '#f43f5ecc',
          '#f59e0bcc',
          '#8b5cf6cc',
        ],
        borderWidth: 1,
      },
    ],
  };

  salesData = {
    labels: ['North', 'South', 'East', 'West', 'Central'],
    datasets: [
      {
        data: [42, 55, 30, 70, 48],
        backgroundColor: ['#6366f1cc', '#0ea5e9cc', '#10b981cc', '#f43f5ecc', '#f59e0bcc'],
        borderWidth: 1,
      },
    ],
  };

  skillsCode = `<!-- Polar Area Chart using Chart.js -->
<app-chart
  chartType="polarArea"
  [showLegend]="true"
  legendPosition="right"
  [responsive]="true"
  [data]="skillsData"
  style="width: 500px; height: 380px;"
></app-chart>

// TypeScript
skillsData = {
  labels: ['Frontend', 'Backend', 'DevOps', 'Design', 'Security', 'Analytics'],
  datasets: [{
    data: [85, 78, 65, 90, 72, 80],
    backgroundColor: ['#6366f1cc', '#0ea5e9cc', ...]
  }]
};`;

  salesCode = `<!-- Sales Regions Polar Area -->
<app-chart
  chartType="polarArea"
  [showLegend]="true"
  legendPosition="bottom"
  [responsive]="true"
  [data]="salesData"
  style="width: 500px; height: 380px;"
></app-chart>`;
}
