import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimelineRangePlaygroundComponent } from './components/timeline-range-playground/timeline-range-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-timeline-range-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TimelineRangePlaygroundComponent, DemoTabsComponent, DemoSidebarComponent, ComponentDocumentationComponent, DemoHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timeline-range-demo.component.html',
  styleUrl: './timeline-range-demo.component.scss',
})
export class TimelineRangeDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'project',    name: 'Project',    icon: '📋', color: '#6366f1' },
    { id: 'team',       name: 'Team',       icon: '👥', color: '#10b981' },
    { id: 'events',     name: 'Events',     icon: '📅', color: '#f59e0b' },
  ];

  get exampleVariants() { return this.variants.filter(v => v.id !== 'playground'); }

  projectCode = `<!-- Timeline Range – Project Phases (SVG) -->
<svg width="700" height="210">
  <g><!-- Planning bar: x1=0 x2=100 --></g>
  <g><!-- Design bar: x1=80 x2=220 --></g>
  <g><!-- Development bar: x1=180 x2=450 --></g>
  <g><!-- Testing bar: x1=380 x2=510 --></g>
  <g><!-- Deployment bar: x1=490 x2=575 --></g>
</svg>`;

  teamCode = `<!-- Timeline Range – Team Schedule (SVG) -->
<svg width="700" height="170">
  <!-- Alice: Task A (0-200), Task B (230-420) -->
  <!-- Bob:  Task C (50-280), Task D (310-575) -->
  <!-- Carol: Task E (100-330) -->
  <!-- Dave: Task F (200-490) -->
</svg>`;

  eventCode = `<!-- Timeline Range – Events (SVG) -->
<svg width="700" height="130">
  <!-- Sprint 1: 0–140 | Sprint 2: 140–285 -->
  <!-- Sprint 3: 285–420 | Sprint 4: 420–575 -->
</svg>`;
}
