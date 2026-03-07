import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DmAreaChartPlaygroundComponent } from '../../../playground/charts/area-chart-playground/area-chart-playground.component';

@Component({
  selector: 'dm-area-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    DmAreaChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './area-chart-demo.component.html',
  styleUrl: './area-chart-demo.component.scss',
})
export class DmAreaChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'basic', title: 'Basic Area', icon: 'ðŸ”ï¸', color: '#6366f1' },
    { id: 'stacked', title: 'Stacked', icon: 'ðŸ“š', color: '#10b981' },
    { id: 'gradient', title: 'Gradient', icon: 'ðŸŒˆ', color: '#f59e0b' },
  ];

  basicData = [
    {
      name: 'Revenue',
      color: '#6366f1',
      points: [
        { x: 1, y: 42 },
        { x: 2, y: 58 },
        { x: 3, y: 53 },
        { x: 4, y: 70 },
        { x: 5, y: 89 },
        { x: 6, y: 95 },
      ],
    },
  ];

  stackedData = [
    {
      name: 'Direct',
      color: '#6366f1',
      points: [
        { x: 1, y: 30 },
        { x: 2, y: 40 },
        { x: 3, y: 35 },
        { x: 4, y: 50 },
        { x: 5, y: 60 },
        { x: 6, y: 70 },
      ],
    },
    {
      name: 'Organic',
      color: '#10b981',
      points: [
        { x: 1, y: 20 },
        { x: 2, y: 25 },
        { x: 3, y: 28 },
        { x: 4, y: 32 },
        { x: 5, y: 38 },
        { x: 6, y: 45 },
      ],
    },
    {
      name: 'Referral',
      color: '#f59e0b',
      points: [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 15 },
        { x: 4, y: 18 },
        { x: 5, y: 20 },
        { x: 6, y: 25 },
      ],
    },
  ];

  basicCode = `<!-- Basic Area Chart using chart-line -->
<chart-line
  [data]="areaData"
  chart-title="Monthly Revenue"
  x-axis-label="Month"
  y-axis-label="Revenue ($k)"
  show-legend
  show-grid
  enable-animation
  width="580"
  height="300"
></chart-line>

// TypeScript
areaData = [
  { name: 'Revenue', color: '#6366f1',
    points: [{ x: 1, y: 42 }, { x: 2, y: 58 }, ...] }
];`;

  stackedCode = `<!-- Stacked Area Chart -->
<chart-line
  [data]="stackedData"
  show-legend
  show-grid
  enable-animation
  width="580"
  height="300"
></chart-line>`;
}
