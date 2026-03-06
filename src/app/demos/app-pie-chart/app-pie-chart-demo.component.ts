import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PieChartPlaygroundComponent } from './components/pie-chart-playground/pie-chart-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-pie-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PieChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-pie-chart-demo.component.html',
  styleUrl: './app-pie-chart-demo.component.scss',
})
export class AppPieChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'pie', title: 'Pie Chart', icon: '🥧', color: '#6366f1' },
    { id: 'doughnut', title: 'Doughnut', icon: '🍩', color: '#f59e0b' },
    { id: 'polar-area', title: 'Polar Area', icon: '🌐', color: '#10b981' },
    { id: 'multi-ring', title: 'Multi Ring', icon: '🎯', color: '#0ea5e9' },
  ];

  // ── Pie: Sales by region ──
  pieData = {
    labels: ['North', 'South', 'East', 'West', 'Central'],
    datasets: [
      {
        data: [35, 20, 18, 15, 12],
        backgroundColor: ['#6366f1', '#f59e0b', '#10b981', '#0ea5e9', '#f43f5e'],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  };

  // ── Doughnut: Budget allocation ──
  doughnutData = {
    labels: ['Engineering', 'Marketing', 'Operations', 'HR', 'R&D'],
    datasets: [
      {
        data: [40, 15, 20, 10, 15],
        backgroundColor: ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  };

  doughnutOptions = { cutout: '60%' };

  // ── Polar Area: Performance scores ──
  polarData = {
    labels: ['Speed', 'Reliability', 'Security', 'UX', 'Scalability'],
    datasets: [
      {
        data: [85, 92, 78, 95, 88],
        backgroundColor: [
          'rgba(99,102,241,0.7)',
          'rgba(245,158,11,0.7)',
          'rgba(16,185,129,0.7)',
          'rgba(14,165,233,0.7)',
          'rgba(244,63,94,0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // ── Multi-ring / Doughnut ──
  multiRingData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Online',
        data: [30, 25, 20, 25],
        backgroundColor: ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe'],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };
  multiRingOptions = { cutout: '55%' };

  // ── Code examples ──
  pieCode = `<!-- Basic Pie Chart -->
<app-chart
  chartType="pie"
  [showLegend]="true"
  legendPosition="right"
  [responsive]="true"
  [data]="chartData"
></app-chart>

// TypeScript
chartData = {
  labels: ['North', 'South', 'East', 'West', 'Central'],
  datasets: [{
    data: [35, 20, 18, 15, 12],
    backgroundColor: ['#6366f1', '#f59e0b', '#10b981', '#0ea5e9', '#f43f5e'],
    borderWidth: 2,
    borderColor: '#ffffff'
  }]
};`;

  doughnutCode = `<!-- Doughnut Chart -->
<app-chart
  chartType="doughnut"
  [showLegend]="true"
  legendPosition="right"
  [responsive]="true"
  [data]="chartData"
  [options]="doughnutOptions"
></app-chart>

// TypeScript
doughnutOptions = { cutout: '60%' };
chartData = {
  labels: ['Engineering', 'Marketing', 'Operations', 'HR', 'R&D'],
  datasets: [{
    data: [40, 15, 20, 10, 15],
    backgroundColor: ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'],
    borderWidth: 2,
    borderColor: '#ffffff'
  }]
};`;

  polarCode = `<!-- Polar Area Chart -->
<app-chart
  chartType="polarArea"
  [showLegend]="true"
  legendPosition="right"
  [responsive]="true"
  [data]="chartData"
></app-chart>

// TypeScript
chartData = {
  labels: ['Speed', 'Reliability', 'Security', 'UX', 'Scalability'],
  datasets: [{
    data: [85, 92, 78, 95, 88],
    backgroundColor: [
      'rgba(99,102,241,0.7)',
      'rgba(245,158,11,0.7)',
      'rgba(16,185,129,0.7)',
      'rgba(14,165,233,0.7)',
      'rgba(244,63,94,0.7)'
    ],
    borderWidth: 1
  }]
};`;

  multiRingCode = `<!-- Multi-ring Doughnut -->
<app-chart
  chartType="doughnut"
  [showLegend]="true"
  legendPosition="bottom"
  [responsive]="true"
  [data]="chartData"
  [options]="multiRingOptions"
></app-chart>

// TypeScript
multiRingOptions = { cutout: '55%' };
chartData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Online',
    data: [30, 25, 20, 25],
    backgroundColor: ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe'],
    borderWidth: 2,
    borderColor: '#fff'
  }]
};`;
}
