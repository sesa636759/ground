import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

import { AppPlaygroundComponent } from '../../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-area-chart-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './area-chart-playground.component.html',

  styleUrl: './area-chart-playground.component.scss',
})
export class AreaChartPlaygroundComponent {
  generatedCode = signal<string>('');
  cfg = {
    dataset: 'revenue',
    strokeWidth: 2,
    fillOpacity: 0.25,
    smooth: true,
    showGrid: true,
    showDots: true,
    stacked: false,
  };

  datasetOpts = [
    { label: 'Revenue & Expenses', value: 'revenue' },
    { label: 'Web Traffic', value: 'traffic' },
    { label: 'Temperature', value: 'temp' },
  ];

  revenueData = [
    {
      name: 'Revenue',
      color: '#6366f1',
      points: [
        { x: 1, y: 42 },
        { x: 2, y: 58 },
        { x: 3, y: 53 },
        { x: 4, y: 70 },
        { x: 5, y: 89 },
        { x: 6, y: 95 },
      ],
    },
    {
      name: 'Expenses',
      color: '#f59e0b',
      points: [
        { x: 1, y: 30 },
        { x: 2, y: 35 },
        { x: 3, y: 40 },
        { x: 4, y: 45 },
        { x: 5, y: 52 },
        { x: 6, y: 58 },
      ],
    },
  ];

  trafficData = [
    {
      name: 'Organic',
      color: '#10b981',
      points: [
        { x: 1, y: 3200 },
        { x: 2, y: 4100 },
        { x: 3, y: 3800 },
        { x: 4, y: 5200 },
        { x: 5, y: 6100 },
        { x: 6, y: 7200 },
      ],
    },
    {
      name: 'Referral',
      color: '#0ea5e9',
      points: [
        { x: 1, y: 1100 },
        { x: 2, y: 1400 },
        { x: 3, y: 1200 },
        { x: 4, y: 1800 },
        { x: 5, y: 2100 },
        { x: 6, y: 2400 },
      ],
    },
  ];

  tempData = [
    {
      name: 'Max °C',
      color: '#f43f5e',
      points: [
        { x: 1, y: 18 },
        { x: 2, y: 22 },
        { x: 3, y: 28 },
        { x: 4, y: 32 },
        { x: 5, y: 35 },
        { x: 6, y: 30 },
      ],
    },
    {
      name: 'Min °C',
      color: '#6366f1',
      points: [
        { x: 1, y: 8 },
        { x: 2, y: 10 },
        { x: 3, y: 15 },
        { x: 4, y: 20 },
        { x: 5, y: 22 },
        { x: 6, y: 18 },
      ],
    },
  ];

  activeData: any = this.revenueData;
  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  onDataset() {
    if (this.cfg.dataset === 'traffic') this.activeData = [...this.trafficData];
    else if (this.cfg.dataset === 'temp') this.activeData = [...this.tempData];
    else this.activeData = [...this.revenueData];
    this.update();
  }

  update() {
    const c = `<!-- Area Chart -->
<chart-line
  [data]="areaData"
  show-legend
  show-grid
  enable-animation
  stroke-width="${this.cfg.strokeWidth}"
  width="580"
  height="300"
></chart-line>

// TypeScript
areaData = ${JSON.stringify(this.activeData, null, 2)};`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  copyCode() {
    navigator.clipboard.writeText(this.code());
  }

  reset() {
    this.cfg = {
      dataset: 'revenue',
      strokeWidth: 2,
      fillOpacity: 0.25,
      smooth: true,
      showGrid: true,
      showDots: true,
      stacked: false,
    };
    this.activeData = [...this.revenueData];
    this.update();
  }
}
