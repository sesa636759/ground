import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

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
              <ui-dropdown
                [(ngModel)]="pgConfig.position"
                (change)="updateConfig()"
                [options]="positionOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Breakpoint</label>
              <app-input type="text" [(ngModel)]="pgConfig.breakpoint" (change)="updateConfig()" />
            </div>
          </div>

          <div class="control-section">
            <h3>Behavior</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="autoZIndex"
                [(ngModel)]="pgConfig.autoZIndex"
                (change)="updateConfig()"
                label="Auto Z-Index"
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

  positionOptions = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

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
