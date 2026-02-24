import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-nav-bar-playground',
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
        <ui-accordion
          items='[{"id":"config","title":"Configuration","icon":"⚙️"}]'
          defaultOpen='["config"]'
          multiple
        >
          <div slot="content-config">
            <div class="control-grid">
              <div class="control-section">
                <h3>Visuals</h3>
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
                    id="collapsed"
                    [(ngModel)]="pgConfig.collapsed"
                    (ngModelChange)="updateConfig()"
                    label="Collapsed"
                  ></app-checkbox>
                </div>
              </div>

              <div class="control-section">
                <h3>Structure</h3>
                <div class="checkbox-group">
                  <app-checkbox
                    id="showFooter"
                    [(ngModel)]="pgConfig.showFooter"
                    (ngModelChange)="updateConfig()"
                    label="Show Footer"
                  ></app-checkbox>
                </div>
              </div>
            </div>

            <div class="code-output">
              <pre>{{ generatedCode() }}</pre>
            </div>

            <div class="action-buttons">
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
        <div class="nav-container" [style.width]="pgConfig.collapsed ? '80px' : '280px'">
          <ui-nav-bar
            [attr.theme]="pgConfig.theme"
            [attr.collapsed]="pgConfig.collapsed ? '' : null"
            [model]="modelJson"
          >
            <div slot="header" style="padding: 20px; font-weight: 800; font-size: 1.2rem;">
              {{ pgConfig.collapsed ? 'A' : 'APPLOGO' }}
            </div>

            <div
              *ngIf="pgConfig.showFooter"
              slot="footer"
              style="padding: 20px; border-top: 1px solid rgba(0,0,0,0.1);"
            >
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 32px; height: 32px; border-radius: 50%; background: #ddd;"></div>
                <div *ngIf="!pgConfig.collapsed">User Name</div>
              </div>
            </div>
          </ui-nav-bar>
        </div>
        <div class="content-area">
          <h1>Page Content</h1>
          <p>The navigation bar is pinned to the side.</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './nav-bar-playground.component.scss',
})
export class NavBarPlaygroundComponent {
  pgConfig = {
    theme: 'light',
    collapsed: false,
    showFooter: true,
  };

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  model = [
    { label: 'Dashboard', icon: '📊', items: [] },
    {
      label: 'Users',
      icon: '👥',
      items: [
        { label: 'List', icon: '📝' },
        { label: 'Groups', icon: '📁' },
      ],
    },
    { label: 'Settings', icon: '⚙️', items: [] },
    { label: 'Help', icon: '❓', items: [] },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-nav-bar\n';
    code += `  theme="${this.pgConfig.theme}"\n`;
    if (this.pgConfig.collapsed) code += `  collapsed\n`;
    code += `  [model]="navItems"\n`;
    code += '>\n';
    code += '  <div slot="header"> Logo </div>\n';
    code += '</ui-nav-bar>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      theme: 'light',
      collapsed: false,
      showFooter: true,
    };
    this.updateConfig();
  }
}
