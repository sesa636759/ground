import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DmWaterfallChartPlaygroundComponent } from '../../../playground/charts/waterfall-chart-playground/waterfall-chart-playground.component';

@Component({
  selector: 'dm-waterfall-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    DmWaterfallChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './waterfall-chart-demo.component.html',
  styleUrl: './waterfall-chart-demo.component.scss',
})
export class DmWaterfallChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'revenue', title: 'Revenue', icon: '💰', color: '#10b981' },
    { id: 'pl', title: 'P&L Statement', icon: '📊', color: '#6366f1' },
  ];

  revenueCode = `<!-- Waterfall Chart (floating SVG bars) -->
<svg width="620" height="340">
  <!-- Total: Start=200 -->
  <rect x="44" y="..." width="64" height="..." fill="#6366f1"/>
  <!-- Positive: Sales=+120 -->
  <rect x="116" y="..." width="64" height="..." fill="#10b981"/>
  <!-- Negative: Returns=-30 -->
  <rect x="188" y="..." width="64" height="..." fill="#f43f5e"/>
  <!-- Connector lines between bars -->
  <line x1="108" y1="..." x2="116" y2="..." stroke="#9ca3af" stroke-dasharray="3,3"/>
</svg>`;

  plCode = `<!-- P&L Waterfall -->
<svg width="620" height="340">
  <!-- Gross Revenue → COGS → Gross Profit → OPEX → EBITDA → D&A → Net Profit -->
</svg>`;
}
