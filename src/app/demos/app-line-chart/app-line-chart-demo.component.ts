import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartPlaygroundComponent } from './components/line-chart-playground/line-chart-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-line-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    LineChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-line-chart-demo.component.html',
  styleUrl: './app-line-chart-demo.component.scss',
})
export class AppLineChartDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'basic', name: 'Basic', icon: '💹', color: '#6366f1' },
    { id: 'multi-series', name: 'Multi Series', icon: '📈', color: '#10b981' },
    { id: 'stepped', name: 'Stepped Line', icon: '🪜', color: '#0ea5e9' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  // chart-line data format: LineSeries[] = { name, color, points: {x, y}[] }
  // x = month index (1–8), y = value

  basicData = [
    {
      name: 'Revenue ($k)',
      color: '#6366f1',
      points: [
        { x: 1, y: 42 }, { x: 2, y: 58 }, { x: 3, y: 53 }, { x: 4, y: 70 },
        { x: 5, y: 89 }, { x: 6, y: 95 }, { x: 7, y: 112 }, { x: 8, y: 104 },
      ],
    },
  ];

  multiSeriesData = [
    {
      name: 'Revenue',
      color: '#6366f1',
      points: [
        { x: 1, y: 42 }, { x: 2, y: 58 }, { x: 3, y: 53 }, { x: 4, y: 70 },
        { x: 5, y: 89 }, { x: 6, y: 95 }, { x: 7, y: 112 }, { x: 8, y: 104 },
      ],
    },
    {
      name: 'Expenses',
      color: '#f59e0b',
      points: [
        { x: 1, y: 30 }, { x: 2, y: 40 }, { x: 3, y: 45 }, { x: 4, y: 55 },
        { x: 5, y: 60 }, { x: 6, y: 65 }, { x: 7, y: 75 }, { x: 8, y: 80 },
      ],
    },
    {
      name: 'Profit',
      color: '#10b981',
      points: [
        { x: 1, y: 12 }, { x: 2, y: 18 }, { x: 3, y: 8 }, { x: 4, y: 15 },
        { x: 5, y: 29 }, { x: 6, y: 30 }, { x: 7, y: 37 }, { x: 8, y: 24 },
      ],
    },
  ];

  steppedData = [
    {
      name: 'Server Load (%)',
      color: '#0ea5e9',
      points: [
        { x: 0, y: 15 }, { x: 4, y: 12 }, { x: 8, y: 45 },
        { x: 12, y: 72 }, { x: 16, y: 68 }, { x: 20, y: 55 }, { x: 24, y: 20 },
      ],
    },
  ];

  basicCode = `<chart-line
  chart-title="Revenue ($k)"
  x-axis-label="Month"
  y-axis-label="Revenue ($k)"
  show-legend
  show-grid
  enable-animation
  stroke-width="2"
  [data]="seriesData"
></chart-line>

// TypeScript — LineSeries[] format
seriesData = [
  {
    name: 'Revenue ($k)',
    color: '#6366f1',
    points: [
      { x: 1, y: 42 }, { x: 2, y: 58 }, { x: 3, y: 53 }, { x: 4, y: 70 },
      { x: 5, y: 89 }, { x: 6, y: 95 }, { x: 7, y: 112 }, { x: 8, y: 104 },
    ],
  },
];`;

  multiSeriesCode = `<chart-line
  chart-title="Financial Overview"
  x-axis-label="Month"
  y-axis-label="Amount ($k)"
  show-legend
  show-grid
  [data]="seriesData"
></chart-line>

// Multiple series
seriesData = [
  { name: 'Revenue',  color: '#6366f1', points: [...] },
  { name: 'Expenses', color: '#f59e0b', points: [...] },
  { name: 'Profit',   color: '#10b981', points: [...] },
];`;

  steppedCode = `<!-- Stepped appearance via closely-spaced points -->
<chart-line
  chart-title="Server Load (%)"
  x-axis-label="Hour"
  y-axis-label="Load (%)"
  show-grid
  show-markers
  stroke-width="2"
  [data]="seriesData"
></chart-line>`;
}
