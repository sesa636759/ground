import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anchor-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Configuration</h3>
            <div class="control-group">
              <label>Orientation</label>
              <select [(ngModel)]="pgConfig.orientation" (change)="updateConfig()">
                <option value="vertical">Vertical</option>
                <option value="horizontal">Horizontal</option>
              </select>
            </div>
            <div class="control-group">
              <label>Style Type</label>
              <select [(ngModel)]="pgConfig.type" (change)="updateConfig()">
                <option value="line">Line</option>
                <option value="dot">Dot</option>
              </select>
            </div>
            <div class="control-group">
              <label>Scroll Offset (px)</label>
              <input type="number" [(ngModel)]="pgConfig.scrollOffset" (change)="updateConfig()" />
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="indicator"
                [(ngModel)]="pgConfig.showIndicator"
                (change)="updateConfig()"
              />
              <label for="indicator">Show Indicator</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="progress"
                [(ngModel)]="pgConfig.showProgress"
                (change)="updateConfig()"
              />
              <label for="progress">Show Progress</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="affix"
                [(ngModel)]="pgConfig.affix"
                (change)="updateConfig()"
              />
              <label for="affix">Enable Affix (Sticky)</label>
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
        <div class="scroll-content" id="pg-anchor-container">
          <section id="basics-pg">
            <h2>Basics Section</h2>
            <p>
              Scroll down to see the anchor update automatically. This section demonstrates the core
              scrolling behavior of the anchor component.
            </p>
            <div style="height: 100px; background: #f1f5f9; border-radius: 8px;"></div>
          </section>

          <section id="api-pg">
            <h2>API Reference</h2>
            <p>
              The anchor component can be configured via a JSON array of links or can auto-detect
              headers within a container.
            </p>
            <div style="height: 100px; background: #f1f5f9; border-radius: 8px;"></div>
          </section>

          <section id="theming-pg">
            <h2>Theming Guide</h2>
            <p>
              Easily customize colors, spacing, and transition effects to match your application's
              design system.
            </p>
            <div style="height: 100px; background: #f1f5f9; border-radius: 8px;"></div>
          </section>
        </div>

        <div class="anchor-nav">
          <ui-anchor
            [attr.orientation]="pgConfig.orientation"
            [attr.type]="pgConfig.type"
            [attr.scroll-offset]="pgConfig.scrollOffset"
            [attr.show-indicator]="pgConfig.showIndicator ? '' : null"
            [attr.show-progress]="pgConfig.showProgress ? '' : null"
            [attr.affix]="pgConfig.affix ? '' : null"
            scroll-container="#pg-anchor-container"
            [links]="linksJson"
          ></ui-anchor>
        </div>
      </div>
    </div>
  `,
  styleUrl: './anchor-playground.component.scss',
})
export class AnchorPlaygroundComponent {
  pgConfig = {
    orientation: 'vertical',
    type: 'line',
    scrollOffset: 40,
    showIndicator: true,
    showProgress: true,
    affix: false,
  };

  links = [
    { id: 'basics', label: 'Basics', target: 'basics-pg' },
    { id: 'api', label: 'API Reference', target: 'api-pg' },
    { id: 'theming', label: 'Theming', target: 'theming-pg' },
  ];

  linksJson = JSON.stringify(this.links);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-anchor\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  type="${this.pgConfig.type}"\n`;
    code += `  [scroll-offset]="${this.pgConfig.scrollOffset}"\n`;
    if (this.pgConfig.showIndicator) code += `  show-indicator\n`;
    if (this.pgConfig.showProgress) code += `  show-progress\n`;
    if (this.pgConfig.affix) code += `  affix\n`;
    code += `  scroll-container="#content-area"\n`;
    code += `  [links]="linksArray"\n`;
    code += '></ui-anchor>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'vertical',
      type: 'line',
      scrollOffset: 40,
      showIndicator: true,
      showProgress: true,
      affix: false,
    };
    this.updateConfig();
  }
}
