import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-splitter-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Layout</h3>
            <div class="control-group">
              <label>Orientation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.layout"
                (change)="updateConfig()"
                [options]="layoutOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Gutter Size (px)</label>
              <app-input type="number" [(ngModel)]="pgConfig.gutterSize" (change)="updateConfig()" />
            </div>
          </div>

          <div class="control-section">
            <h3>Behavior</h3>
            <div class="control-group">
              <label>Min Size (%)</label>
              <app-input type="number" [(ngModel)]="pgConfig.minSize" (change)="updateConfig()" />
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
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

      <div class="playground-preview">
        <div class="splitter-wrapper">
          <ui-splitter
            style="height: 100%"
            [attr.layout]="pgConfig.layout"
            [attr.gutter-size]="pgConfig.gutterSize"
          >
            <ui-panel [attr.size]="50" [attr.min-size]="pgConfig.minSize">
              <div class="panel-content">Panel 1 (50%)</div>
            </ui-panel>
            <ui-panel [attr.size]="50" [attr.min-size]="pgConfig.minSize">
              <div class="panel-content">Panel 2 (50%)</div>
            </ui-panel>
          </ui-splitter>
        </div>
      </div>
    </div>
  `,
  styleUrl: './splitter-playground.component.scss',
})
export class SplitterPlaygroundComponent {
  pgConfig = {
    layout: 'horizontal',
    gutterSize: 4,
    minSize: 10,
  };

  layoutOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code =
      '<ui-splitter layout="' +
      this.pgConfig.layout +
      '" [gutter-size]="' +
      this.pgConfig.gutterSize +
      '">\n';
    code += '  <ui-panel [size]="50">\n';
    code += '    Panel 1\n';
    code += '  </ui-panel>\n';
    code += '  <ui-panel [size]="50">\n';
    code += '    Panel 2\n';
    code += '  </ui-panel>\n';
    code += '</ui-splitter>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      layout: 'horizontal',
      gutterSize: 4,
      minSize: 10,
    };
    this.updateConfig();
  }
}
