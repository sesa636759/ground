import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-bar-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Structure</h3>
            <div class="control-group">
              <label>Logo Text</label>
              <input type="text" [(ngModel)]="pgConfig.logoText" (change)="updateConfig()" />
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="sticky"
                [(ngModel)]="pgConfig.sticky"
                (change)="updateConfig()"
                label="Sticky Position"
              ></app-checkbox>
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Height (px)</label>
              <input type="number" [(ngModel)]="pgConfig.height" (change)="updateConfig()" />
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
        <div class="top-bar-container">
          <ui-top-bar
            [attr.sticky]="pgConfig.sticky ? '' : null"
            [style.height.px]="pgConfig.height"
          >
            <div slot="start" style="padding: 0 20px; font-weight: 700;">
              {{ pgConfig.logoText }}
            </div>
            <div slot="end" style="padding: 0 20px; display: flex; gap: 16px; align-items: center;">
              <span>🔔</span>
              <span>👤</span>
            </div>
          </ui-top-bar>
        </div>
        <div class="content-placeholder">
          <p>
            Body content goes here. If sticky is enabled, the bar will stay at the top on scroll.
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './top-bar-playground.component.scss',
})
export class TopBarPlaygroundComponent {
  pgConfig = {
    logoText: 'MYPLATFORM',
    sticky: true,
    height: 64,
  };

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-top-bar\n';
    if (this.pgConfig.sticky) code += `  sticky\n`;
    code += '>\n';
    code += '  <div slot="start"> Logo </div>\n';
    code += '  <div slot="end"> Actions </div>\n';
    code += '</ui-top-bar>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      logoText: 'MYPLATFORM',
      sticky: true,
      height: 64,
    };
    this.updateConfig();
  }
}
