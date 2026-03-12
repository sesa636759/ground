import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmRadialBarPlaygroundComponent } from '../../../playground/charts/radial-bar-playground/radial-bar-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-radial-bar-demo',
  standalone: true,
  imports: [
    CommonModule,
    DmRadialBarPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radial-bar-demo.component.html',
  styleUrl: './radial-bar-demo.component.scss',
})
export class DmRadialBarDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'kpi', title: 'KPI Rings', icon: '🎯', color: '#6366f1' },
    { id: 'skills', title: 'Skills Radar', icon: '💼', color: '#10b981' },
  ];

  kpiBars = [
    { label: 'Revenue', value: 88, color: '#6366f1' },
    { label: 'Users', value: 72, color: '#10b981' },
    { label: 'Conversion', value: 61, color: '#f59e0b' },
    { label: 'Retention', value: 45, color: '#0ea5e9' },
    { label: 'NPS', value: 93, color: '#f43f5e' },
  ];

  getR(i: number, size = 280, tw = 18, gap = 8): number {
    return size / 2 - tw / 2 - 4 - i * (tw + gap);
  }

  getDash(v: number, r: number): string {
    const c = 2 * Math.PI * r;
    return `${(v / 100) * c} ${c - (v / 100) * c}`;
  }

  kpiCode = `<!-- Radial KPI Bars (SVG) -->
<svg width="280" height="280">
  <!-- Bar 1: r=122, value=88% -->
  <circle r="122" fill="none" stroke="#f3f4f6" stroke-width="18"/>
  <circle r="122" fill="none" stroke="#6366f1" stroke-width="18"
    stroke-dasharray="675 89" stroke-linecap="round" transform="rotate(-90)"/>
  <!-- Additional bars at r=96, 70, 44, 18 -->
</svg>`;

  singleCode = `<!-- Single Radial Bar (SVG) -->
<svg width="200" height="200">
  <circle r="88" cx="100" cy="100" fill="none" stroke="#f3f4f6" stroke-width="20"/>
  <circle r="88" cx="100" cy="100" fill="none" stroke="#6366f1" stroke-width="20"
    stroke-dasharray="493 60" stroke-linecap="round" transform="rotate(-90 100 100)"/>
  <text x="100" y="108" text-anchor="middle" font-size="28" font-weight="700" fill="#374151">88%</text>
</svg>`;
}
