import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmStepLineChartPlaygroundComponent } from '../../../playground/charts/step-line-chart-playground/step-line-chart-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-step-line-chart-demo',
  standalone: true,
  imports: [
    ExampleSectionComponent,
    CommonModule,
    DmStepLineChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './step-line-chart-demo.component.html',
  styleUrl: './step-line-chart-demo.component.scss',
})
export class DmStepLineChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'price', title: 'Price Steps', icon: 'dollar-sign',
      iconLibrary: 'lucide', color: '#6366f1' },
    { id: 'status', title: 'System Status', icon: 'circle-check',
      iconLibrary: 'lucide', color: '#10b981' },
  ];

  basicData = [
    {
      name: 'Server Load',
      color: '#6366f1',
      points: [
        { x: 1, y: 20 },
        { x: 2, y: 45 },
        { x: 3, y: 45 },
        { x: 4, y: 72 },
        { x: 5, y: 60 },
        { x: 6, y: 60 },
        { x: 7, y: 88 },
      ],
    },
  ];

  multiData = [
    {
      name: 'CPU %',
      color: '#6366f1',
      points: [
        { x: 1, y: 20 },
        { x: 2, y: 45 },
        { x: 3, y: 72 },
        { x: 4, y: 60 },
        { x: 5, y: 88 },
      ],
    },
    {
      name: 'RAM %',
      color: '#10b981',
      points: [
        { x: 1, y: 35 },
        { x: 2, y: 35 },
        { x: 3, y: 58 },
        { x: 4, y: 58 },
        { x: 5, y: 74 },
      ],
    },
  ];

  basicCode = `<!-- Step Line Chart (SVG polyline with stepped path) -->
<svg width="600" height="300">
  <polyline
    points="40,250 100,250 100,178 175,178 175,178 250,178 250,118 ..."
    fill="none"
    stroke="#6366f1"
    stroke-width="2.5"
    stroke-linejoin="miter"
  />
</svg>`;

  filledCode = `<!-- Filled Step Area -->
<svg width="600" height="300">
  <path d="M40,260 L40,250 L100,250 L100,178 ..." fill="url(#gradient)"/>
  <polyline points="40,250 100,250 100,178 ..." fill="none" stroke="#10b981" stroke-width="2.5"/>
</svg>`;
}
