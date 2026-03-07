import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmOhlcChartPlaygroundComponent } from '../../../playground/charts/ohlc-chart-playground/ohlc-chart-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-ohlc-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    DmOhlcChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ohlc-chart-demo.component.html',
  styleUrl: './ohlc-chart-demo.component.scss',
})
export class DmOhlcChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'basic', title: 'Basic OHLC', icon: 'ðŸ“Š', color: '#6366f1' },
    { id: 'withma', title: 'With MA', icon: 'ðŸ“‰', color: '#0ea5e9' },
    { id: 'weekly', title: 'Weekly', icon: 'ðŸ“…', color: '#10b981' },
  ];

  basicCode = `<!-- OHLC Chart (SVG) â€” Open/High/Low/Close bars -->
<svg width="620" height="340">
  <!-- Vertical range line (high to low) -->
  <line x1="72" y1="60" x2="72" y2="200" stroke="#374151" stroke-width="1.5"/>
  <!-- Open tick (horizontal line to left) -->
  <line x1="60" y1="120" x2="72" y2="120" stroke="#374151" stroke-width="2"/>
  <!-- Close tick (horizontal line to right, green if up) -->
  <line x1="72" y1="100" x2="84" y2="100" stroke="#10b981" stroke-width="2"/>
  <!-- Date label -->
  <text x="72" y="318" text-anchor="middle" font-size="10" fill="#6b7280">Jan 2</text>
</svg>`;

  withMaCode = `<!-- OHLC with Moving Average overlay -->
<svg width="620" height="340">
  <!-- OHLC bars as above -->
  <!-- 10-period MA polyline -->
  <polyline
    points="..."
    fill="none"
    stroke="#f59e0b"
    stroke-width="2"
    stroke-dasharray="4,2"/>
  <text x="580" y="150" fill="#f59e0b" font-size="10">MA(10)</text>
</svg>`;
}
