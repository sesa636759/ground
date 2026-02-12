import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Chart Type</h3>
            <div class="control-group">
              <label>Type</label>
              <select [(ngModel)]="pgConfig.type" (change)="updateConfig()">
                <option value="line">Line</option>
                <option value="bar">Bar</option>
                <option value="pie">Pie</option>
                <option value="doughnut">Doughnut</option>
              </select>
            </div>
          </div>

          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="showLegend"
                [(ngModel)]="pgConfig.showLegend"
                (change)="updateConfig()"
              />
              <label for="showLegend">Show Legend</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="responsive"
                [(ngModel)]="pgConfig.responsive"
                (change)="updateConfig()"
              />
              <label for="responsive">Responsive</label>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
          <ui-button class="btn-secondary" variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
        </div>
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

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-chart\n';
    code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.showLegend) code += `  show-legend\n`;
    if (this.pgConfig.responsive) code += `  responsive\n`;
    code += `  [data]="chartData"\n`;
    code += '></ui-chart>';

    this.generatedCode.set(code);
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
