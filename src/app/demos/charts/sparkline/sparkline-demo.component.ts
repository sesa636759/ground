import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmSparklinePlaygroundComponent } from '../../../playground/charts/sparkline-playground/sparkline-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-sparkline-demo',
  standalone: true,
  imports: [
    CommonModule,
    DmSparklinePlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sparkline-demo.component.html',
  styleUrl: './sparkline-demo.component.scss',
})
export class DmSparklineDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'inline', title: 'Inline Metrics', icon: 'ðŸ“ˆ', color: '#6366f1' },
  ];

  inlineKpiSparklines = [
    { label: 'Revenue', trend: 12.4, color: '#6366f1', points: [42, 55, 48, 70, 65, 80, 75, 95] },
    { label: 'Users', trend: 8.1, color: '#10b981', points: [20, 30, 25, 40, 38, 55, 60, 65] },
    { label: 'Sessions', trend: -3.2, color: '#f43f5e', points: [90, 85, 78, 70, 65, 60, 58, 55] },
    { label: 'Orders', trend: 5.6, color: '#f59e0b', points: [30, 28, 35, 42, 38, 50, 48, 58] },
  ];

  kpiCode = `<!-- Inline KPI Sparkline -->
<svg width="140" height="55">
  <defs>
    <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <path d="M..." fill="url(#sg)"/>
  <polyline points="4,47 24,31 ..." fill="none" stroke="#6366f1" stroke-width="2"/>
  <circle cx="136" cy="8" r="4" fill="#6366f1"/>
</svg>`;

  tableCode = `<!-- Table Row Sparkline (tiny, 80x30) -->
<svg width="80" height="30">
  <polyline points="..." fill="none" stroke="#10b981" stroke-width="1.5"/>
</svg>`;
}
