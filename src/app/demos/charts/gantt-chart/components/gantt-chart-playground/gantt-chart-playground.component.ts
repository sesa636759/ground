import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../../shared/components/app-playground/app-playground.component';

interface GanttTask {
  id: string;
  name: string;
  start: number;
  end: number;
  color: string;
  group: string;
}

@Component({
  selector: 'app-gantt-chart-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective, AppPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gantt-chart-playground.component.html',

  styleUrl: './gantt-chart-playground.component.scss',
})
export class GanttChartPlaygroundComponent {
  cfg = { rowH: 36, radius: 4, showDeps: true, showGrid: true, showLabels: true, zebra: true };

  labelW = 120;
  headerH = 32;
  gap = 4;
  svgW = 720;
  totalDays = 60;
  colW = 0;

  cols = [
    { x: 0, label: 'Week 1' },
    { x: 100, label: 'Week 2' },
    { x: 200, label: 'Week 3' },
    { x: 300, label: 'Week 4' },
    { x: 400, label: 'Week 5' },
    { x: 500, label: 'Week 6' },
  ];

  tasks: GanttTask[] = [
    { id: '1', name: 'Requirements', start: 0, end: 10, color: '#6366f1', group: 'Phase 1' },
    { id: '2', name: 'UI Design', start: 8, end: 22, color: '#8b5cf6', group: 'Phase 1' },
    { id: '3', name: 'Backend API', start: 15, end: 38, color: '#0ea5e9', group: 'Phase 2' },
    { id: '4', name: 'Frontend Dev', start: 20, end: 45, color: '#10b981', group: 'Phase 2' },
    { id: '5', name: 'Integration', start: 42, end: 52, color: '#f59e0b', group: 'Phase 3' },
    { id: '6', name: 'Testing', start: 48, end: 55, color: '#f43f5e', group: 'Phase 3' },
    { id: '7', name: 'Deployment', start: 54, end: 60, color: '#64748b', group: 'Phase 4' },
  ];

  showCode = true;
  code = signal('');

  get svgH() {
    return this.headerH + this.tasks.length * (this.cfg.rowH + this.gap) + 8;
  }

  rowY(i: number) {
    return this.headerH + i * (this.cfg.rowH + this.gap);
  }

  xScale(day: number): number {
    return (day / this.totalDays) * (this.svgW - this.labelW);
  }

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  update() {
    const c = `<!-- Gantt Chart (SVG) -->
<svg width="${this.svgW}" height="${this.svgH}">
  <!-- Tasks rendered as horizontal bars -->
  <!-- rowHeight: ${this.cfg.rowH}px | radius: ${this.cfg.radius}px -->
  <!-- showGrid: ${this.cfg.showGrid} | zebra: ${this.cfg.zebra} -->
</svg>`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  copyCode() {
    navigator.clipboard.writeText(this.code());
  }

  reset() {
    this.cfg = {
      rowH: 36,
      radius: 4,
      showDeps: true,
      showGrid: true,
      showLabels: true,
      zebra: true,
    };
    this.update();
  }
}
