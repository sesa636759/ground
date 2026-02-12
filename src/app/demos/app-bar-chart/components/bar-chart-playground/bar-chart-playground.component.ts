import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bar-chart-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Orientation</label>
              <select [(ngModel)]="pgConfig.orientation" (change)="updateConfig()">
                <option value="vertical">Vertical</option>
                <option value="horizontal">Horizontal</option>
              </select>
            </div>
            <div class="control-group">
              <label>Color Scheme</label>
              <select [(ngModel)]="pgConfig.colorScheme" (change)="updateConfig()">
                <option value="default">Default</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
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
                id="animated"
                [(ngModel)]="pgConfig.animated"
                (change)="updateConfig()"
              />
              <label for="animated">Animated</label>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <button (click)="copyCode()">Copy Code</button>
          <button class="btn-secondary" (click)="resetConfig()">Reset</button>
        </div>
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

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-bar-chart\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.showLegend) code += `  show-legend\n`;
    if (this.pgConfig.animated) code += `  animated\n`;
    code += `  [data]="chartData"\n`;
    code += '></ui-bar-chart>';

    this.generatedCode.set(code);
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
