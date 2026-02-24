import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-bar-chart-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
    <ui-accordion items='[{"id":"config","title":"Configuration","icon":"⚙️"}]' defaultOpen='["config"]' multiple>
      <div slot="content-config">
        <div class="control-grid">
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Orientation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.orientation"
                (ngModelChange)="updateConfig()"
                [options]="orientationOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Color Scheme</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.colorScheme"
                (ngModelChange)="updateConfig()"
                [options]="colorSchemeOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="showLegend"
                [(ngModel)]="pgConfig.showLegend"
                (ngModelChange)="updateConfig()"
                label="Show Legend"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="animated"
                [(ngModel)]="pgConfig.animated"
                (ngModelChange)="updateConfig()"
                label="Animated"
              ></app-checkbox>
            </div>
          </div>
        </div>

        

        <div class="action-buttons">
          <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
          <ui-button
            class="btn-secondary"
            variant="secondary"
            (click)="resetConfig()"
            label="Reset"
          ></ui-button>
        </div>
            </div>
    </ui-accordion>
  </div>

  <div class="playground-preview">
        <ui-bar-chart
          [attr.orientation]="pgConfig.orientation"
          [attr.color-scheme]="pgConfig.colorScheme"
          [attr.show-legend]="pgConfig.showLegend ? '' : null"
          [attr.animated]="pgConfig.animated ? '' : null"
          [data]="chartDataJson"
          style="width: 100%; height: 350px;"
        >
        </ui-bar-chart>
      
      <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
    </div>
    </div>
  `,
  styleUrl: './bar-chart-playground.component.scss',
})
export class BarChartPlaygroundComponent {
  pgConfig = {
    orientation: 'vertical',
    colorScheme: 'default',
    showLegend: true,
    animated: true,
  };

  orientationOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  colorSchemeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  chartDataJson = JSON.stringify(this.chartData);
  generatedCode = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
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
    if (this.pgConfig.showLegend) code += `  show-legend\n`;
    if (this.pgConfig.animated) code += `  animated\n`;
    code += `  [data]="chartData"\n`;
    code += '></ui-bar-chart>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'vertical',
      colorScheme: 'default',
      showLegend: true,
      animated: true,
    };
    this.updateConfig();
  }
}
