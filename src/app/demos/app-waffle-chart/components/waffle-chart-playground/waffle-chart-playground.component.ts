import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-waffle-chart-playground',
  standalone: true,
  imports: [FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion
          items='[{"id":"config","title":"Configuration","icon":"⚙️"}]'
          defaultOpen='["config"]'
          multiple
        >
          <div slot="content-config">
            <div class="control-grid">

              <div class="control-section">
                <h3>📊 Data</h3>
                <div class="control-group">
                  <label>Value</label>
                  <input type="number" [(ngModel)]="pgConfig.value" min="0" [max]="pgConfig.total" (ngModelChange)="updateConfig()" />
                </div>
                <div class="control-group">
                  <label>Total</label>
                  <input type="number" [(ngModel)]="pgConfig.total" min="1" max="1000" (ngModelChange)="updateConfig()" />
                </div>
                <div class="control-group">
                  <label>Title</label>
                  <input type="text" [(ngModel)]="pgConfig.chartTitle" (ngModelChange)="updateConfig()" />
                </div>
              </div>

              <div class="control-section">
                <h3>🎨 Colours</h3>
                <div class="control-group">
                  <label>Fill colour</label>
                  <input type="color" [(ngModel)]="pgConfig.fillColor" (ngModelChange)="updateConfig()" />
                </div>
                <div class="control-group">
                  <label>Empty colour</label>
                  <input type="color" [(ngModel)]="pgConfig.emptyColor" (ngModelChange)="updateConfig()" />
                </div>
              </div>

              <div class="control-section">
                <h3>📐 Grid</h3>
                <div class="control-group">
                  <label>Rows</label>
                  <input type="number" [(ngModel)]="pgConfig.rows" min="1" max="20" (ngModelChange)="updateConfig()" />
                </div>
                <div class="control-group">
                  <label>Columns</label>
                  <input type="number" [(ngModel)]="pgConfig.columns" min="1" max="20" (ngModelChange)="updateConfig()" />
                </div>
                <div class="control-group">
                  <label>Cell size <span class="range-val">{{ pgConfig.cellSize }}px</span></label>
                  <input type="range" [(ngModel)]="pgConfig.cellSize" min="8" max="48" step="2" (ngModelChange)="updateConfig()" />
                </div>
                <div class="control-group">
                  <label>Gap <span class="range-val">{{ pgConfig.gap }}px</span></label>
                  <input type="range" [(ngModel)]="pgConfig.gap" min="1" max="8" step="1" (ngModelChange)="updateConfig()" />
                </div>
              </div>

              <div class="control-section">
                <h3>⚙️ Options</h3>
                <div class="control-group">
                  <label>Show percentage</label>
                  <input type="checkbox" [(ngModel)]="pgConfig.showPercentage" (ngModelChange)="updateConfig()" />
                </div>
              </div>

            </div>

            <div class="action-buttons">
              <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
              <ui-button variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
            </div>
          </div>
        </ui-accordion>
      </div>

      <div class="playground-preview">
        <chart-waffle
          [attr.value]="pgConfig.value"
          [attr.total]="pgConfig.total"
          [attr.chart-title]="pgConfig.chartTitle"
          [attr.fill-color]="pgConfig.fillColor"
          [attr.empty-color]="pgConfig.emptyColor"
          [attr.rows]="pgConfig.rows"
          [attr.columns]="pgConfig.columns"
          [attr.cell-size]="pgConfig.cellSize"
          [attr.gap]="pgConfig.gap"
          [attr.show-percentage]="pgConfig.showPercentage ? 'true' : 'false'"
        ></chart-waffle>

        <div class="code-output">
          <ui-code-preview
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './waffle-chart-playground.component.scss',
})
export class WaffleChartPlaygroundComponent {
  pgConfig = {
    value: 72,
    total: 100,
    chartTitle: 'Task Completion',
    fillColor: '#6366f1',
    emptyColor: '#e5e7eb',
    rows: 10,
    columns: 10,
    cellSize: 20,
    gap: 2,
    showPercentage: true,
  };

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    const d = this.pgConfig;
    const attrs: string[] = [`value="${d.value}"`, `total="${d.total}"`];
    if (d.chartTitle !== 'Task Completion') attrs.push(`chart-title="${d.chartTitle}"`);
    if (d.fillColor !== '#6366f1') attrs.push(`fill-color="${d.fillColor}"`);
    if (d.emptyColor !== '#e5e7eb') attrs.push(`empty-color="${d.emptyColor}"`);
    if (d.rows !== 10) attrs.push(`rows="${d.rows}"`);
    if (d.columns !== 10) attrs.push(`columns="${d.columns}"`);
    if (d.cellSize !== 20) attrs.push(`cell-size="${d.cellSize}"`);
    if (d.gap !== 2) attrs.push(`gap="${d.gap}"`);
    if (!d.showPercentage) attrs.push(`show-percentage="false"`);

    const nl = attrs.length > 2 ? '\n  ' : ' ';
    const end = attrs.length > 2 ? '\n' : '';
    this.generatedCode.set(`<chart-waffle${nl}${attrs.join(nl)}${end}></chart-waffle>`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      value: 72,
      total: 100,
      chartTitle: 'Task Completion',
      fillColor: '#6366f1',
      emptyColor: '#e5e7eb',
      rows: 10,
      columns: 10,
      cellSize: 20,
      gap: 2,
      showPercentage: true,
    };
    this.updateConfig();
  }
}
