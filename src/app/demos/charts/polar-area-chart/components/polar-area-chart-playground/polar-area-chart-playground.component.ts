import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../../shared/components/app-playground/playground.constants';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-polar-area-chart-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    ...PLAYGROUND_IMPORTS,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './polar-area-chart-playground.component.html',

  styleUrl: './polar-area-chart-playground.component.scss',
})
export class PolarAreaChartPlaygroundComponent {
  generatedCode = signal<string>('');
  cfg = { dataset: 'skills', legendPos: 'right', opacity: 0.7, showLegend: true, animate: true };

  datasetOpts = [
    { label: 'Developer Skills', value: 'skills' },
    { label: 'Market Share', value: 'market' },
    { label: 'Project Budget', value: 'budget' },
  ];

  legendOpts = [
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
  ];

  skillsData = {
    labels: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'CSS'],
    datasets: [
      {
        data: [90, 85, 92, 78, 82, 88],
        backgroundColor: [
          'rgba(99,102,241,0.7)',
          'rgba(139,92,246,0.7)',
          'rgba(14,165,233,0.7)',
          'rgba(16,185,129,0.7)',
          'rgba(245,158,11,0.7)',
          'rgba(244,63,94,0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  marketData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [
      {
        data: [38, 22, 18, 12, 10],
        backgroundColor: [
          'rgba(99,102,241,0.7)',
          'rgba(16,185,129,0.7)',
          'rgba(245,158,11,0.7)',
          'rgba(14,165,233,0.7)',
          'rgba(244,63,94,0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  budgetData = {
    labels: ['Engineering', 'Marketing', 'Operations', 'HR', 'R&D', 'Sales'],
    datasets: [
      {
        data: [40, 15, 20, 10, 10, 5],
        backgroundColor: [
          'rgba(99,102,241,0.7)',
          'rgba(245,158,11,0.7)',
          'rgba(16,185,129,0.7)',
          'rgba(14,165,233,0.7)',
          'rgba(244,63,94,0.7)',
          'rgba(139,92,246,0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  activeData: any = this.skillsData;
  showCode = true;
  code = signal('');

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  onDataset() {
    if (this.cfg.dataset === 'market') this.activeData = { ...this.marketData };
    else if (this.cfg.dataset === 'budget') this.activeData = { ...this.budgetData };
    else this.activeData = { ...this.skillsData };
    this.update();
  }

  update() {
    const c = `<!-- Polar Area Chart -->
<app-chart
  chartType="polarArea"
  [showLegend]="${this.cfg.showLegend}"
  legendPosition="${this.cfg.legendPos}"
  [responsive]="true"
  [data]="polarData"
  style="width: 480px; height: 360px;"
></app-chart>

// TypeScript
polarData = ${JSON.stringify(this.activeData, null, 2)};`;
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
      dataset: 'skills',
      legendPos: 'right',
      opacity: 0.7,
      showLegend: true,
      animate: true,
    };
    this.activeData = { ...this.skillsData };
    this.update();
  }
}
