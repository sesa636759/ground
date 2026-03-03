import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/ui-input-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-pie-chart-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pie-chart-playground.component.html',

  styleUrl: './pie-chart-playground.component.scss',
})
export class PieChartPlaygroundComponent {
  pgConfig = {
    chartType: 'pie',
    dataset: 'sales',
    cutout: 60,
    legendPosition: 'right',
    borderWidth: 2,
    showLegend: true,
    responsive: true,
    enableAnimation: true,
    showTooltip: true,
  };

  typeOptions = [
    { label: 'Pie', value: 'pie' },
    { label: 'Doughnut', value: 'doughnut' },
    { label: 'Polar Area', value: 'polarArea' },
  ];

  datasetOptions = [
    { label: 'Sales by Region', value: 'sales' },
    { label: 'Budget Allocation', value: 'budget' },
    { label: 'Market Share', value: 'market' },
  ];

  legendPositionOptions = [
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
  ];

  salesData = {
    labels: ['North', 'South', 'East', 'West', 'Central'],
    datasets: [
      {
        data: [35, 20, 18, 15, 12],
        backgroundColor: ['#6366f1', '#f59e0b', '#10b981', '#0ea5e9', '#f43f5e'],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  };

  budgetData = {
    labels: ['Engineering', 'Marketing', 'Operations', 'HR', 'R&D'],
    datasets: [
      {
        data: [40, 15, 20, 10, 15],
        backgroundColor: ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  };

  marketData = {
    labels: ['Product A', 'Product B', 'Product C', 'Others'],
    datasets: [
      {
        data: [42, 28, 18, 12],
        backgroundColor: ['#0ea5e9', '#22d3ee', '#67e8f9', '#bae6fd'],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  };

  activeChartData: any = this.salesData;
  activeOptions: any = {};
  generatedCode = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  onDatasetChange() {
    if (this.pgConfig.dataset === 'budget') {
      this.activeChartData = { ...this.budgetData };
    } else if (this.pgConfig.dataset === 'market') {
      this.activeChartData = { ...this.marketData };
    } else {
      this.activeChartData = { ...this.salesData };
    }
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  updateConfig() {
    if (this.pgConfig.chartType === 'doughnut') {
      this.activeOptions = { cutout: `${this.pgConfig.cutout}%` };
    } else {
      this.activeOptions = {};
    }
    let code = '<app-chart\n';
    code += `  chartType="${this.pgConfig.chartType}"\n`;
    code += `  [showLegend]="${this.pgConfig.showLegend}"\n`;
    code += `  legendPosition="${this.pgConfig.legendPosition}"\n`;
    code += `  [responsive]="${this.pgConfig.responsive}"\n`;
    if (this.pgConfig.chartType === 'doughnut') {
      code += `  [options]="{ cutout: '${this.pgConfig.cutout}%' }"\n`;
    }
    code += `  [data]="chartData"\n`;
    code += '></app-chart>';
    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      chartType: 'pie',
      dataset: 'sales',
      cutout: 60,
      legendPosition: 'right',
      borderWidth: 2,
      showLegend: true,
      responsive: true,
      enableAnimation: true,
      showTooltip: true,
    };
    this.activeChartData = { ...this.salesData };
    this.activeOptions = {};
    this.updateConfig();
  }
}
