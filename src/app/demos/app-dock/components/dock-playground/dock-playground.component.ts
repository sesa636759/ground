import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dock-playground',
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
              <label>Position</label>
              <select [(ngModel)]="pgConfig.position" (change)="updateConfig()">
                <option value="bottom">Bottom</option>
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
            <div class="control-group">
              <label>Breakpoint</label>
              <input type="text" [(ngModel)]="pgConfig.breakpoint" (change)="updateConfig()" />
            </div>
          </div>

          <div class="control-section">
            <h3>Behavior</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="autoZIndex"
                [(ngModel)]="pgConfig.autoZIndex"
                (change)="updateConfig()"
              />
              <label for="autoZIndex">Auto Z-Index</label>
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
        <ui-dock
          [attr.position]="pgConfig.position"
          [attr.breakpoint]="pgConfig.breakpoint"
          [attr.auto-z-index]="pgConfig.autoZIndex ? '' : null"
          [model]="modelJson"
        ></ui-dock>

        <div
          *ngIf="lastAction"
          style="position: absolute; top: 20px; font-size: 0.85rem; color: var(--text-secondary);"
        >
          Last Action: <strong>{{ lastAction }}</strong>
        </div>
      </div>
    </div>
  `,
  styleUrl: './dock-playground.component.scss',
})
export class DockPlaygroundComponent {
  pgConfig = {
    position: 'bottom',
    breakpoint: '960px',
    autoZIndex: true,
  };

  model = [
    { label: 'Finder', icon: '🔍', command: () => this.logAction('Finder') },
    { label: 'App Store', icon: '🎒', command: () => this.logAction('App Store') },
    { label: 'Photos', icon: '🖼️', command: () => this.logAction('Photos') },
    { label: 'Settings', icon: '⚙️', command: () => this.logAction('Settings') },
    { label: 'Trash', icon: '🗑️', command: () => this.logAction('Trash') },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');
  lastAction = '';

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-dock\n';
    code += `  position="${this.pgConfig.position}"\n`;
    code += `  [model]="items"\n`;
    code += '></ui-dock>';

    this.generatedCode.set(code);
  }

  logAction(action: string) {
    this.lastAction = action;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      position: 'bottom',
      breakpoint: '960px',
      autoZIndex: true,
    };
    this.updateConfig();
  }
}
