import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-horizontal-nav-playground',
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
              <label>Theme</label>
              <select [(ngModel)]="pgConfig.theme" (change)="updateConfig()">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="sticky"
                [(ngModel)]="pgConfig.sticky"
                (change)="updateConfig()"
              />
              <label for="sticky">Sticky Position</label>
            </div>
          </div>

          <div class="control-section">
            <h3>Layout</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="showIcons"
                [(ngModel)]="pgConfig.showIcons"
                (change)="updateConfig()"
              />
              <label for="showIcons">Show Icons</label>
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
        <div class="nav-wrapper">
          <ui-horizontal-nav
            [attr.theme]="pgConfig.theme"
            [attr.sticky]="pgConfig.sticky ? '' : null"
            [model]="modelJson"
          >
          </ui-horizontal-nav>
        </div>
        <div class="content-area">
          <h2>Main Content Area</h2>
          <p>The horizontal navigation bar is positioned at the top.</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './horizontal-nav-playground.component.scss',
})
export class HorizontalNavPlaygroundComponent {
  pgConfig = {
    theme: 'light',
    sticky: true,
    showIcons: true,
  };

  model = [
    { label: 'Home', icon: '🏠', command: () => {} },
    { label: 'Products', icon: '📦', command: () => {} },
    { label: 'Services', icon: '⚙️', command: () => {} },
    { label: 'About', icon: 'ℹ️', command: () => {} },
    { label: 'Contact', icon: '📧', command: () => {} },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-horizontal-nav\n';
    code += `  theme="${this.pgConfig.theme}"\n`;
    if (this.pgConfig.sticky) code += `  sticky\n`;
    code += `  [model]="navItems"\n`;
    code += '></ui-horizontal-nav>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      theme: 'light',
      sticky: true,
      showIcons: true,
    };
    this.updateConfig();
  }
}
