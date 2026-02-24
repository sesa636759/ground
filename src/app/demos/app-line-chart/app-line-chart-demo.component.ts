import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LineChartPlaygroundComponent } from './components/line-chart-playground/line-chart-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-line-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
    { id: 'filled-area', name: 'Filled Area', icon: '🎨', color: '#f59e0b' },
    { id: 'stepped', name: 'Stepped Line', icon: '🪜', color: '#0ea5e9' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  /* ── Basic single-line ── */
  basicData = JSON.stringify({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Monthly Revenue ($k)',
        data: [42, 58, 53, 70, 89, 95, 112, 104],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.08)',
        tension: 0.4,
      },
    ],
  });

  /* ── Multi series ── */
  multiSeriesData = JSON.stringify({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Revenue',
        data: [42, 58, 53, 70, 89, 95, 112, 104],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.08)',
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: [30, 40, 45, 55, 60, 65, 75, 80],
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245,158,11,0.08)',
        tension: 0.4,
      },
      {
        label: 'Profit',
        data: [12, 18, 8, 15, 29, 30, 37, 24],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16,185,129,0.08)',
        tension: 0.4,
      },
    ],
  });

  /* ── Filled area ── */
  filledAreaData = JSON.stringify({
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Active Users',
        data: [3200, 4100, 3800, 5200, 4900, 6100],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139,92,246,0.25)',
        fill: true,
        tension: 0.4,
      },
    ],
  });

  /* ── Stepped ── */
  steppedData = JSON.stringify({
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    datasets: [
      {
        label: 'Server Load (%)',
        data: [15, 12, 45, 72, 68, 55, 20],
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14,165,233,0.12)',
        stepped: true,
        fill: true,
      },
    ],
  });

  /* ── Code examples ── */
  basicCode = `<!-- Basic Line Chart -->
<ui-chart
  type="line"
  show-legend
  show-grid
  responsive
  enable-animation
  tension="0.4"
  [data]="chartData"
></ui-chart>

// TypeScript
chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [{
    label: 'Monthly Revenue ($k)',
    data: [42, 58, 53, 70, 89, 95, 112, 104],
    borderColor: '#6366f1',
    backgroundColor: 'rgba(99,102,241,0.08)',
    tension: 0.4
  }]
};`;

  multiSeriesCode = `<!-- Multi-Series Line Chart -->
<ui-chart
  type="line"
  show-legend
  show-grid
  responsive
  enable-animation
  [data]="chartData"
></ui-chart>

// TypeScript — multiple datasets
chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    { label: 'Revenue', data: [...], borderColor: '#6366f1' },
    { label: 'Expenses', data: [...], borderColor: '#f59e0b' },
    { label: 'Profit',   data: [...], borderColor: '#10b981' }
  ]
};`;

  filledAreaCode = `<!-- Filled Area Chart -->
<ui-chart
  type="line"
  fill="true"
  show-legend
  show-grid
  responsive
  tension="0.4"
  [data]="chartData"
></ui-chart>

// TypeScript — set fill: true on dataset
chartData = {
  datasets: [{
    label: 'Active Users',
    data: [3200, 4100, 3800, 5200, 4900, 6100],
    borderColor: '#8b5cf6',
    backgroundColor: 'rgba(139,92,246,0.25)',
    fill: true
  }]
};`;

  steppedCode = `<!-- Stepped Line Chart -->
<ui-chart
  type="line"
  show-legend
  show-grid
  responsive
  [data]="chartData"
></ui-chart>

// TypeScript — set stepped: true on dataset
chartData = {
  datasets: [{
    label: 'Server Load (%)',
    data: [15, 12, 45, 72, 68, 55, 20],
    borderColor: '#0ea5e9',
    stepped: true,
    fill: true
  }]
};`;
}
