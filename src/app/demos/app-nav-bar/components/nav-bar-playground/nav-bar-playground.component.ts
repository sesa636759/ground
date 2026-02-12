import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Visuals</h3>
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
                id="collapsed"
                [(ngModel)]="pgConfig.collapsed"
                (change)="updateConfig()"
              />
              <label for="collapsed">Collapsed</label>
            </div>
          </div>

          <div class="control-section">
            <h3>Structure</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="showFooter"
                [(ngModel)]="pgConfig.showFooter"
                (change)="updateConfig()"
              />
              <label for="showFooter">Show Footer</label>
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
