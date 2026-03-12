import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmBarChartPlaygroundComponent } from '../../../playground/charts/bar-chart-playground/bar-chart-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-bar-chart-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmBarChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './bar-chart-demo.component.html',
  styleUrl: './bar-chart-demo.component.scss',
})
export class DmBarChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic', icon: '📊', color: '#3b82f6' },
    { id: 'multi-dataset', title: 'Multi Dataset', icon: '🗂️', color: '#10b981' },
    { id: 'stacked', title: 'Stacked', icon: '📦', color: '#f59e0b' },
    { id: 'horizontal', title: 'Horizontal', icon: '↔️', color: '#8b5cf6' },
  ];

  /* ── Basic single-series ── */
  basicLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  basicDatasets = [{ label: 'Revenue ($k)', data: [42, 58, 75, 63, 89, 104], color: '#6366f1' }];

  /* ── Multi-series ── */
  multiLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  multiDatasets = [
    { label: 'Revenue', data: [120, 150, 180, 210], color: '#6366f1' },
    { label: 'Expenses', data: [80, 95, 110, 130], color: '#f59e0b' },
    { label: 'Profit', data: [40, 55, 70, 80], color: '#10b981' },
  ];

  /* ── Stacked ── */
  stackedLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  stackedDatasets = [
    { label: 'Direct Sales', data: [30, 45, 55, 40, 65], color: '#6366f1' },
    { label: 'Online', data: [20, 30, 25, 35, 45], color: '#8b5cf6' },
    { label: 'Referral', data: [10, 15, 20, 12, 18], color: '#a78bfa' },
  ];

  /* ── Horizontal ── */
  hLabels = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
  hDatasets = [{ label: 'Units Sold', data: [320, 240, 180, 490, 155], color: '#0ea5e9' }];

  /* ── Code examples ── */
  basicCode = `<!-- Basic Bar Chart -->
<ui-bar-chart
  show-legend
  enable-animation
  show-tooltip
  [labels]="labels"
  [datasets]="datasets"
></ui-bar-chart>

// TypeScript
labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
datasets = [
  { label: 'Revenue ($k)', data: [42, 58, 75, 63, 89, 104], color: '#6366f1' }
];`;

  multiCode = `<!-- Multi-Dataset Bar Chart -->
<ui-bar-chart
  show-legend
  enable-animation
  show-tooltip
  [labels]="labels"
  [datasets]="datasets"
></ui-bar-chart>

// TypeScript
labels = ['Q1', 'Q2', 'Q3', 'Q4'];
datasets = [
  { label: 'Revenue', data: [120, 150, 180, 210], color: '#6366f1' },
  { label: 'Expenses', data: [80, 95, 110, 130], color: '#f59e0b' },
  { label: 'Profit', data: [40, 55, 70, 80], color: '#10b981' }
];`;

  stackedCode = `<!-- Stacked Bar Chart -->
<ui-bar-chart
  stacked
  show-legend
  enable-animation
  show-tooltip
  [labels]="labels"
  [datasets]="datasets"
></ui-bar-chart>`;

  horizontalCode = `<!-- Horizontal Bar Chart -->
<ui-bar-chart
  orientation="horizontal"
  show-legend
  enable-animation
  show-tooltip
  [labels]="labels"
  [datasets]="datasets"
></ui-bar-chart>`;
}
