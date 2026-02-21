import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-context-menu-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Breakpoint</label>
              <input
                type="number"
                [(ngModel)]="pgConfig.breakpoint"
                (ngModelChange)="updateConfig()"
              />
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="autoZIndex"
                [(ngModel)]="pgConfig.autoZIndex"
                (change)="updateConfig()"
                label="Auto Z-Index"
              ></app-checkbox>
            </div>
          </div>

          <div class="control-section">
            <h3>Behavior</h3>
            <div class="control-group">
              <label>Base Z-Index</label>
              <input
                type="number"
                [(ngModel)]="pgConfig.baseZIndex"
                (ngModelChange)="updateConfig()"
              />
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <ui-button variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
        </div>
      </div>

      <div class="playground-preview">
        <div class="context-target" #target>Right click me to see the menu</div>
        <ui-context-menu
          [attr.breakpoint]="pgConfig.breakpoint"
          [attr.auto-z-index]="pgConfig.autoZIndex ? '' : null"
          [attr.base-z-index]="pgConfig.baseZIndex"
          [model]="modelJson"
          [target]="target"
        ></ui-context-menu>

        <div
          *ngIf="lastAction"
          style="margin-top: 20px; color: var(--text-secondary); font-size: 0.9rem;"
        >
          Last Action: <strong>{{ lastAction }}</strong>
        </div>

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
  styleUrl: './context-menu-playground.component.scss',
})
export class ContextMenuPlaygroundComponent {
  pgConfig = {
    breakpoint: 960,
    autoZIndex: true,
    baseZIndex: 0,
  };

  model = [
    { label: 'View Details', icon: '👁️', command: () => this.logAction('View') },
    { label: 'Edit Entry', icon: '✏️', command: () => this.logAction('Edit') },
    { separator: true },
    { label: 'Delete', icon: '🗑️', command: () => this.logAction('Delete') },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');
  lastAction = '';

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-context-menu\n';
    code += `  [model]="items"\n`;
    code += `  [target]="elementRef"\n`;
    code += '></ui-context-menu>';

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
      breakpoint: 960,
      autoZIndex: true,
      baseZIndex: 0,
    };
    this.updateConfig();
  }
}
