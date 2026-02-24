import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-horizontal-nav-playground',
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
              <label>Theme</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.theme"
                (ngModelChange)="updateConfig()"
                [options]="themeOptions"
              ></ui-dropdown>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="sticky"
                [(ngModel)]="pgConfig.sticky"
                (ngModelChange)="updateConfig()"
                label="Sticky Position"
              ></app-checkbox>
            </div>
          </div>

          <div class="control-section">
            <h3>Layout</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="showIcons"
                [(ngModel)]="pgConfig.showIcons"
                (ngModelChange)="updateConfig()"
                label="Show Icons"
              ></app-checkbox>
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
    </ui-accordion>
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

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

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
