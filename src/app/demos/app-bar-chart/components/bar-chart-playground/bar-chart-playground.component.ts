import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-bar-chart-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './bar-chart-playground.component.html',
  styleUrl: './bar-chart-playground.component.scss',
})
export class BarChartPlaygroundComponent {
  pgConfig = {
    orientation: 'vertical',
    mode: 'single',
    barWidth: 60,
    borderRadius: 6,
    showLegend: true,
    showGrid: true,
    showValues: false,
    stacked: false,
    enableAnimation: true,
    showTooltip: true,
  };

  orientationOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  modeOptions = [
    { label: 'Single Dataset', value: 'single' },
    { label: 'Multi Dataset', value: 'multi' },
  ];

  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  singleDatasets = [{ label: 'Revenue ($k)', data: [42, 58, 75, 63, 89, 104], color: '#6366f1' }];

  multiDatasets = [
    { label: 'Revenue ($k)', data: [42, 58, 75, 63, 89, 104], color: '#6366f1' },
    { label: 'Expenses ($k)', data: [30, 45, 52, 48, 61, 78], color: '#f59e0b' },
    { label: 'Profit ($k)', data: [12, 13, 23, 15, 28, 26], color: '#10b981' },
  ];

  labelsJson = JSON.stringify(this.labels);
  datasetsJson = JSON.stringify(this.singleDatasets);
  generatedCodeSignal = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  onModeChange() {
    this.datasetsJson =
      this.pgConfig.mode === 'multi'
        ? JSON.stringify(this.multiDatasets)
        : JSON.stringify(this.singleDatasets);
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
    let code = '<ui-bar-chart\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  bar-width="${this.pgConfig.barWidth}"\n`;
    code += `  border-radius="${this.pgConfig.borderRadius}"\n`;
    if (this.pgConfig.showLegend) code += `  show-legend\n`;
    if (this.pgConfig.showGrid) code += `  show-grid\n`;
    if (this.pgConfig.showValues) code += `  show-values\n`;
    if (this.pgConfig.stacked) code += `  stacked\n`;
    if (this.pgConfig.enableAnimation) code += `  enable-animation\n`;
    if (this.pgConfig.showTooltip) code += `  show-tooltip\n`;
    code += `  [labels]="labels"\n`;
    code += `  [datasets]="datasets"\n`;
    code += '></ui-bar-chart>';
    this.generatedCodeSignal.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'vertical',
      mode: 'single',
      barWidth: 60,
      borderRadius: 6,
      showLegend: true,
      showGrid: true,
      showValues: false,
      stacked: false,
      enableAnimation: true,
      showTooltip: true,
    };
    this.datasetsJson = JSON.stringify(this.singleDatasets);
    this.updateConfig();
  }
}
