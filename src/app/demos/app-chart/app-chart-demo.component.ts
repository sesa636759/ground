import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { AppInputValueAccessorDirective } from '../../directives/ui-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/ui-checkbox-value-accessor.directive';
import { ChartPlaygroundComponent } from './components/chart-playground/chart-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-chart-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    ChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-chart-demo.component.html',
  styleUrl: './app-chart-demo.component.scss',
})
export class AppChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'types', title: 'Chart Types', icon: '📈', color: '#3b82f6' },
  ];

  chartData = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [{ label: 'Data', data: [10, 20, 30, 40] }],
  };

  playgroundCode = `<ui-chart-line [data]="data" responsive></ui-chart-line>`;

  typesCode = `<!-- Line Chart -->
<ui-chart-line [data]="data"></ui-chart-line>

<!-- Bar Chart -->
<ui-chart type="bar" [data]="data"></ui-chart>

<!-- Pie Chart -->
<ui-chart type="pie" [data]="data"></ui-chart>`;
}
