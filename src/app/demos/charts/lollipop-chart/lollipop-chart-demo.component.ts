import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmLollipopChartPlaygroundComponent } from '../../../playground/charts/lollipop-chart-playground/lollipop-chart-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-lollipop-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    DmLollipopChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './lollipop-chart-demo.component.html',
  styleUrl: './lollipop-chart-demo.component.scss',
})
export class DmLollipopChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'vertical', title: 'Vertical', icon: 'ðŸ­', color: '#6366f1' },
    { id: 'horizontal', title: 'Horizontal', icon: 'â†”ï¸', color: '#10b981' },
    { id: 'gradient', title: 'Multi-color', icon: 'ðŸŒˆ', color: '#f59e0b' },
  ];

  verticalCode = `<!-- Vertical Lollipop Chart (SVG) -->
<svg width="560" height="300">
  <!-- Lollipop stem (line) -->
  <line x1="80" y1="240" x2="80" y2="100" stroke="#6366f1" stroke-width="2.5"/>
  <!-- Lollipop head (circle) -->
  <circle cx="80" cy="100" r="7" fill="#6366f1"/>
  <!-- Value label -->
  <text x="80" y="90" text-anchor="middle" font-size="11" fill="#374151">42</text>
  <!-- X-axis label -->
  <text x="80" y="258" text-anchor="middle" font-size="11" fill="#6b7280">Jan</text>
  <!-- ... repeat for each data point -->
</svg>`;

  horizontalCode = `<!-- Horizontal Lollipop Chart (SVG) -->
<svg width="500" height="320">
  <!-- Horizontal stem -->
  <line x1="120" y1="40" x2="280" y2="40" stroke="#10b981" stroke-width="2.5"/>
  <!-- Head -->
  <circle cx="280" cy="40" r="7" fill="#10b981"/>
  <!-- Category label -->
  <text x="110" y="44" text-anchor="end" font-size="11" fill="#6b7280">Category A</text>
</svg>`;
}
