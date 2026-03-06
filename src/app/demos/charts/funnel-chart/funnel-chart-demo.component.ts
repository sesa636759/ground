import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunnelChartPlaygroundComponent } from './components/funnel-chart-playground/funnel-chart-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-funnel-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    FunnelChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './funnel-chart-demo.component.html',
  styleUrl: './funnel-chart-demo.component.scss',
})
export class DmFunnelChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'sales', title: 'Sales Funnel', icon: 'ðŸ”½', color: '#6366f1' },
    { id: 'marketing', title: 'Marketing', icon: 'ðŸ“£', color: '#10b981' },
  ];

  salesSegments = [
    { label: 'Visitors', value: 10000, pct: 100 },
    { label: 'Leads', value: 6500, pct: 65 },
    { label: 'Prospects', value: 3800, pct: 38 },
    { label: 'Qualified', value: 1900, pct: 19 },
    { label: 'Customers', value: 750, pct: 8 },
  ];

  salesCode = `<!-- Sales Funnel (SVG trapezoids) -->
<svg width="420" height="380">
  <!-- Visitors: 400px wide -->
  <polygon points="10,0 410,0 390,72 30,72" fill="#6366f1" opacity="0.85"/>
  <text x="210" y="42" text-anchor="middle" fill="white" font-size="13" font-weight="700">
    Visitors â€” 10,000 (100%)
  </text>
  <!-- Leads: narrower -->
  <polygon points="30,76 390,76 367,148 53,148" fill="#8b5cf6" opacity="0.8"/>
  <!-- ... continued for each stage -->
</svg>`;

  marketingCode = `<!-- Marketing Funnel -->
<svg width="420" height="380">
  <!-- Awareness â†’ Interest â†’ Consideration â†’ Intent â†’ Purchase -->
</svg>`;
}


