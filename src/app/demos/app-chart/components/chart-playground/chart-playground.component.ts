import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-chart-playground',
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
            <h3>Chart Type</h3>
            <div class="control-group">
              <label>Type</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.type"
                (ngModelChange)="updateConfig()"
                [options]="typeOptions"
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
                id="responsive"
                [(ngModel)]="pgConfig.responsive"
                (ngModelChange)="updateConfig()"
                label="Responsive"
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
        <ui-chart
          [attr.type]="pgConfig.type"
          [attr.show-legend]="pgConfig.showLegend ? '' : null"
          [attr.responsive]="pgConfig.responsive ? '' : null"
          [data]="chartDataJson"
          style="width: 100%; height: 350px;"
        >
        </ui-chart>
      
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
  styleUrl: './chart-playground.component.scss',
})
export class ChartPlaygroundComponent {
  pgConfig = {
    type: 'line',
    showLegend: true,
    responsive: true,
  };

  typeOptions = [
    { label: 'Line', value: 'line' },
    { label: 'Bar', value: 'bar' },
    { label: 'Pie', value: 'pie' },
    { label: 'Doughnut', value: 'doughnut' },
  ];

  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
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
    let code = '<ui-chart\n';
    code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.showLegend) code += `  show-legend\n`;
    if (this.pgConfig.responsive) code += `  responsive\n`;
    code += `  [data]="chartData"\n`;
    code += '></ui-chart>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      type: 'line',
      showLegend: true,
      responsive: true,
    };
    this.updateConfig();
  }
}
