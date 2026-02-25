import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLineChartPlaygroundComponent } from './components/step-line-chart-playground/step-line-chart-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-step-line-chart-demo',
  standalone: true,
  imports: [CommonModule, StepLineChartPlaygroundComponent, DemoTabsComponent, DemoSidebarComponent, ComponentDocumentationComponent, DemoHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './step-line-chart-demo.component.html',
  styleUrl: './step-line-chart-demo.component.scss',
})
export class StepLineChartDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground',  icon: '🎮', color: '#8b5cf6' },
    { id: 'basic',      name: 'Basic Step',  icon: '🪜', color: '#6366f1' },
    { id: 'filled',     name: 'Filled Area', icon: '🏔️', color: '#10b981' },
    { id: 'multi',      name: 'Multi-Series', icon: '📈', color: '#f59e0b' },
  ];

  get exampleVariants() { return this.variants.filter(v => v.id !== 'playground'); }

  basicData = [
    { name: 'Server Load', color: '#6366f1', points: [
      { x: 1, y: 20 }, { x: 2, y: 45 }, { x: 3, y: 45 },
      { x: 4, y: 72 }, { x: 5, y: 60 }, { x: 6, y: 60 }, { x: 7, y: 88 },
    ]},
  ];

  multiData = [
    { name: 'CPU %',  color: '#6366f1', points: [{ x: 1, y: 20 }, { x: 2, y: 45 }, { x: 3, y: 72 }, { x: 4, y: 60 }, { x: 5, y: 88 }] },
    { name: 'RAM %',  color: '#10b981', points: [{ x: 1, y: 35 }, { x: 2, y: 35 }, { x: 3, y: 58 }, { x: 4, y: 58 }, { x: 5, y: 74 }] },
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
