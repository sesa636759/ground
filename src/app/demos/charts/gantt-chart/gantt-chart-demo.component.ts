import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmGanttChartPlaygroundComponent } from '../../../playground/charts/gantt-chart-playground/gantt-chart-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-gantt-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    DmGanttChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gantt-chart-demo.component.html',
  styleUrl: './gantt-chart-demo.component.scss',
})
export class DmGanttChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'project', title: 'Project Plan', icon: 'ðŸ“‹', color: '#6366f1' },
  ];

  tasks = [
    { id: '1', name: 'Requirements', start: 0, end: 10, color: '#6366f1' },
    { id: '2', name: 'UI Design', start: 8, end: 22, color: '#8b5cf6' },
    { id: '3', name: 'Backend API', start: 15, end: 38, color: '#0ea5e9' },
    { id: '4', name: 'Frontend Dev', start: 20, end: 45, color: '#10b981' },
    { id: '5', name: 'Integration', start: 42, end: 52, color: '#f59e0b' },
    { id: '6', name: 'Testing', start: 48, end: 55, color: '#f43f5e' },
    { id: '7', name: 'Deployment', start: 54, end: 60, color: '#64748b' },
  ];

  svgH() {
    return 32 + this.tasks.length * 44 + 8;
  }
  yScale(d: number) {
    return (d / 60) * 600;
  }

  projectCode = `<!-- Gantt Chart (SVG horizontal bars) -->
<svg width="720" height="${this.svgH()}">
  <g *ngFor="let task of tasks; let i = index">
    <text x="4" y="..." font-size="12" fill="#374151">{{ task.name }}</text>
    <rect x="${'{{'}xScale(task.start){{'}}'}}" y="..."
      width="${'{{'}xScale(task.end) - xScale(task.start){{'}}'}}"
      height="28" rx="4" fill="{{ task.color }}"/>
  </g>
</svg>`;

  sprintCode = `<!-- Sprint Gantt (2-week iterations) -->
<svg width="720" height="200">
  <rect x="120" y="36" width="140" height="28" rx="4" fill="#6366f1"/><!-- Sprint 1 -->
  <rect x="270" y="76" width="140" height="28" rx="4" fill="#10b981"/><!-- Sprint 2 -->
  <rect x="420" y="116"width="140" height="28" rx="4" fill="#f59e0b"/><!-- Sprint 3 -->
</svg>`;
}



