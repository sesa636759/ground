import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-timeline-range-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timeline-range-playground.component.html',

  styleUrl: './timeline-range-playground.component.scss',
})
export class TimelineRangePlaygroundComponent {
  cfg = { dataset: 'project', rowHeight: 36, radius: 6, showTooltip: true, showLabels: true };

  datasetOpts = [
    { label: 'Project Phases', value: 'project' },
    { label: 'Team Schedule', value: 'team' },
    { label: 'Sprint Planning', value: 'sprint' },
  ];

  labelW = 110;
  headerH = 30;
  gap = 8;
  svgWidth = 700;
  svgHeight = 200;
  showCode = true;
  code = signal('');

  projectRows = [
    { label: 'Planning', bars: [{ x1: 0, x2: 100, color: '#6366f1', label: 'Planning' }] },
    { label: 'Design', bars: [{ x1: 80, x2: 220, color: '#8b5cf6', label: 'Design' }] },
    { label: 'Development', bars: [{ x1: 180, x2: 450, color: '#0ea5e9', label: 'Development' }] },
    { label: 'Testing', bars: [{ x1: 380, x2: 510, color: '#f59e0b', label: 'Testing' }] },
    { label: 'Deployment', bars: [{ x1: 490, x2: 575, color: '#10b981', label: 'Deploy' }] },
  ];
  teamRows = [
    {
      label: 'Alice',
      bars: [
        { x1: 0, x2: 200, color: '#6366f1', label: 'Task A' },
        { x1: 230, x2: 420, color: '#10b981', label: 'Task B' },
      ],
    },
    {
      label: 'Bob',
      bars: [
        { x1: 50, x2: 280, color: '#f59e0b', label: 'Task C' },
        { x1: 310, x2: 575, color: '#0ea5e9', label: 'Task D' },
      ],
    },
    { label: 'Carol', bars: [{ x1: 100, x2: 330, color: '#f43f5e', label: 'Task E' }] },
    { label: 'Dave', bars: [{ x1: 200, x2: 490, color: '#8b5cf6', label: 'Task F' }] },
  ];
  sprintRows = [
    { label: 'Sprint 1', bars: [{ x1: 0, x2: 140, color: '#6366f1', label: 'S1' }] },
    { label: 'Sprint 2', bars: [{ x1: 140, x2: 285, color: '#0ea5e9', label: 'S2' }] },
    { label: 'Sprint 3', bars: [{ x1: 285, x2: 420, color: '#10b981', label: 'S3' }] },
    { label: 'Sprint 4', bars: [{ x1: 420, x2: 575, color: '#f59e0b', label: 'S4' }] },
  ];

  gridCols = [
    { x: 0, label: 'Jan' },
    { x: 96, label: 'Feb' },
    { x: 192, label: 'Mar' },
    { x: 287, label: 'Apr' },
    { x: 383, label: 'May' },
    { x: 479, label: 'Jun' },
    { x: 575, label: '' },
  ];

  get activeRows() {
    if (this.cfg.dataset === 'team') return this.teamRows;
    if (this.cfg.dataset === 'sprint') return this.sprintRows;
    return this.projectRows;
  }

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  update() {
    this.svgHeight = this.headerH + this.activeRows.length * (this.cfg.rowHeight + this.gap) + 8;
    const c = `<!-- Timeline Range Chart -->
<div class="timeline-range-chart">
  <svg width="700" height="${this.svgHeight}">
    <!-- rows with bars for dataset: ${this.cfg.dataset} -->
    <!-- rowHeight: ${this.cfg.rowHeight}px | radius: ${this.cfg.radius}px -->
  </svg>
</div>`;
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
      dataset: 'project',
      rowHeight: 36,
      radius: 6,
      showTooltip: true,
      showLabels: true,
    };
    this.update();
  }
}
