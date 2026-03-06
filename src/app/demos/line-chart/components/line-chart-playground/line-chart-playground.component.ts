import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-line-chart-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './line-chart-playground.component.html',
  styleUrl: './line-chart-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LineChartPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'data', title: 'Data', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'features', title: 'Features', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['data'];

  datasetOptions = [
    { label: 'Monthly Revenue', value: 'monthly' },
    { label: 'Multi Series', value: 'multi' },
    { label: 'Weekly Visitors', value: 'weekly' },
  ];

  monthlyData = [
    {
      name: 'Revenue ($k)',
      color: '#6366f1',
      points: [
        { x: 1, y: 42 },
        { x: 2, y: 58 },
        { x: 3, y: 53 },
        { x: 4, y: 70 },
        { x: 5, y: 89 },
        { x: 6, y: 95 },
        { x: 7, y: 112 },
        { x: 8, y: 104 },
      ],
    },
  ];

  multiData = [
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
        { x: 7, y: 112 },
        { x: 8, y: 104 },
      ],
    },
    {
      name: 'Expenses',
      color: '#f59e0b',
      points: [
        { x: 1, y: 30 },
        { x: 2, y: 40 },
        { x: 3, y: 45 },
        { x: 4, y: 55 },
        { x: 5, y: 60 },
        { x: 6, y: 65 },
        { x: 7, y: 75 },
        { x: 8, y: 80 },
      ],
    },
    {
      name: 'Profit',
      color: '#10b981',
      points: [
        { x: 1, y: 12 },
        { x: 2, y: 18 },
        { x: 3, y: 8 },
        { x: 4, y: 15 },
        { x: 5, y: 29 },
        { x: 6, y: 30 },
        { x: 7, y: 37 },
        { x: 8, y: 24 },
      ],
    },
  ];

  weeklyData = [
    {
      name: 'Visitors',
      color: '#0ea5e9',
      points: [
        { x: 1, y: 1200 },
        { x: 2, y: 1900 },
        { x: 3, y: 1700 },
        { x: 4, y: 2100 },
        { x: 5, y: 2400 },
        { x: 6, y: 1800 },
        { x: 7, y: 1100 },
      ],
    },
  ];

  private datasets: Record<string, { data: any[]; title: string; x: string; y: string }> = {
    monthly: { data: this.monthlyData, title: 'Monthly Revenue', x: 'Month', y: 'Revenue ($k)' },
    multi: { data: this.multiData, title: 'Financial Overview', x: 'Month', y: 'Amount ($k)' },
    weekly: { data: this.weeklyData, title: 'Weekly Visitors', x: 'Day', y: 'Visitors' },
  };

  chartData: any[] = this.monthlyData;
  activeTitle = 'Monthly Revenue';
  activeXLabel = 'Month';
  activeYLabel = 'Revenue ($k)';

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      dataset: 'monthly',
      strokeWidth: 2,
      width: 600,
      height: 300,
      showLegend: true,
      showGrid: true,
      showMarkers: true,
      enableAnimation: true,
    };
  }

  onDatasetChange() {
    const ds = this.datasets[this.pgConfig.dataset];
    this.chartData = ds.data;
    this.activeTitle = ds.title;
    this.activeXLabel = ds.x;
    this.activeYLabel = ds.y;
    this.updateConfig();
  }

  updateConfig() {
    setTimeout(() => {
      const d = this.pgConfig;
      const attrs: string[] = [
        `chart-title="${this.activeTitle}"`,
        `x-axis-label="${this.activeXLabel}"`,
        `y-axis-label="${this.activeYLabel}"`,
      ];
      if (d.showLegend) attrs.push('show-legend');
      if (d.showGrid) attrs.push('show-grid');
      if (d.showMarkers) attrs.push('show-markers');
      if (d.enableAnimation) attrs.push('enable-animation');
      if (d.strokeWidth !== 2) attrs.push(`stroke-width="${d.strokeWidth}"`);
      if (d.width !== 600) attrs.push(`width="${d.width}"`);
      if (d.height !== 300) attrs.push(`height="${d.height}"`);
      attrs.push('[data]="chartData"');

      this.generatedCode.set('<chart-line\n  ' + attrs.join('\n  ') + '\n></chart-line>');
      this.refreshCode();
    }, 50);
  }

  override resetConfig() {
    super.resetConfig();
    this.chartData = this.monthlyData;
    this.activeTitle = 'Monthly Revenue';
    this.activeXLabel = 'Month';
    this.activeYLabel = 'Revenue ($k)';
  }
}
