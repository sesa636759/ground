import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-pie-chart-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pie-chart-playground.component.html',
  styleUrl: './pie-chart-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmPieChartPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'type', title: 'Chart Type', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'features', title: 'Features', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['type'];

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

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
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

  override resetConfig() {
    super.resetConfig();
    this.activeChartData = { ...this.salesData };
    this.activeOptions = {};
  }
}



