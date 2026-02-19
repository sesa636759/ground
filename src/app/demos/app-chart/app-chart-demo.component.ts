import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { ChartPlaygroundComponent } from './components/chart-playground/chart-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ChartPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-chart-demo.component.html',
  styleUrl: './app-chart-demo.component.scss',
})
export class AppChartDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'types', name: 'Chart Types', icon: '📈', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  chartData = JSON.stringify({
    labels: ['A', 'B', 'C', 'D'],
    datasets: [{ label: 'Data', data: [10, 20, 30, 40] }],
  });

  playgroundCode = `<ui-chart type="line" [data]="data" responsive></ui-chart>`;

  typesCode = `<!-- Line Chart -->
<ui-chart type="line" [data]="data"></ui-chart>

<!-- Bar Chart -->
<ui-chart type="bar" [data]="data"></ui-chart>

<!-- Pie Chart -->
<ui-chart type="pie" [data]="data"></ui-chart>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
