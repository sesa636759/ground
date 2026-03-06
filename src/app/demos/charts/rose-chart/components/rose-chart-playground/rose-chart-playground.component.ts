import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-rose-chart-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './rose-chart-playground.component.html',

  styleUrl: './rose-chart-playground.component.scss',
})
export class RoseChartPlaygroundComponent {
  generatedCode = signal<string>('');
  cfg = {
    size: 320,
    innerR: 0,
    dataset: 'monthly',
    showLabels: true,
    showValues: false,
    showLegend: true,
  };

  datasetOpts = [
    { label: 'Monthly Revenue', value: 'monthly' },
    { label: 'Performance Score', value: 'perf' },
    { label: 'Wind Direction', value: 'wind' },
  ];

  monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [42, 55, 48, 70, 65, 90, 88, 95, 78, 68, 52, 60],
        backgroundColor: [
          '#6366f1',
          '#7c3aed',
          '#0ea5e9',
          '#10b981',
          '#f59e0b',
          '#f43f5e',
          '#8b5cf6',
          '#06b6d4',
          '#84cc16',
          '#fb923c',
          '#a855f7',
          '#ec4899',
        ],
        borderWidth: 1,
      },
    ],
  };

  perfData = {
    labels: [
      'Speed',
      'Reliability',
      'Security',
      'UX',
      'Scalability',
      'Accessibility',
      'Performance',
      'Coverage',
    ],
    datasets: [
      {
        data: [85, 92, 78, 95, 88, 76, 91, 83],
        backgroundColor: [
          '#6366f1',
          '#10b981',
          '#f59e0b',
          '#0ea5e9',
          '#f43f5e',
          '#8b5cf6',
          '#06b6d4',
          '#fb923c',
        ],
        borderWidth: 1,
      },
    ],
  };

  windData = {
    labels: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
    datasets: [
      {
        data: [22, 14, 18, 30, 25, 10, 16, 20],
        backgroundColor: [
          '#6366f1',
          '#8b5cf6',
          '#0ea5e9',
          '#10b981',
          '#f59e0b',
          '#f43f5e',
          '#06b6d4',
          '#fb923c',
        ],
        borderWidth: 1,
      },
    ],
  };

  activeData: any = this.monthlyData;
  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  onDataset() {
    if (this.cfg.dataset === 'perf') this.activeData = { ...this.perfData };
    else if (this.cfg.dataset === 'wind') this.activeData = { ...this.windData };
    else this.activeData = { ...this.monthlyData };
    this.update();
  }

  update() {
    const c = `<!-- Rose / Nightingale Chart -->
<app-chart
  chartType="polarArea"
  [showLegend]="${this.cfg.showLegend}"
  legendPosition="right"
  [responsive]="true"
  [data]="roseData"
  style="width: 480px; height: 360px;"
></app-chart>

// TypeScript
roseData = ${JSON.stringify(this.activeData, null, 2)};`;
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
      size: 320,
      innerR: 0,
      dataset: 'monthly',
      showLabels: true,
      showValues: false,
      showLegend: true,
    };
    this.activeData = { ...this.monthlyData };
    this.update();
  }
}
