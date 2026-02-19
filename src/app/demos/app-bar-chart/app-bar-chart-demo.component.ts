import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { BarChartPlaygroundComponent } from './components/bar-chart-playground/bar-chart-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-bar-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BarChartPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-bar-chart-demo.component.html',
  styleUrl: './app-bar-chart-demo.component.scss',
})
export class AppBarChartDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'orientations', name: 'Orientations', icon: '↔️', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  chartData = JSON.stringify({
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{ label: 'Revenue', data: [120, 150, 180, 200] }],
  });

  playgroundCode = `<ui-bar-chart [data]="data" show-legend animated></ui-bar-chart>`;

  orientationsCode = `<!-- Vertical Bars -->
<ui-bar-chart orientation="vertical" [data]="data"></ui-bar-chart>

<!-- Horizontal Bars -->
<ui-bar-chart orientation="horizontal" [data]="data"></ui-bar-chart>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
