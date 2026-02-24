import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-dock-playground',
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
        <div class="control-grid">
          <div class="control-section">
            <h3>Layout</h3>
            <div class="control-group">
              <label>Position</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.position"
                (ngModelChange)="updateConfig()"
                [options]="positionOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Breakpoint</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.breakpoint"
                (ngModelChange)="updateConfig()"
              />
            </div>
          </div>

          <div class="control-section">
            <h3>Behavior</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="autoZIndex"
                [(ngModel)]="pgConfig.autoZIndex"
                (ngModelChange)="updateConfig()"
                label="Auto Z-Index"
              ></app-checkbox>
              <app-checkbox
                id="magnify"
                [(ngModel)]="pgConfig.magnify"
                (ngModelChange)="updateConfig()"
                label="Magnify"
              ></app-checkbox>
              <app-checkbox
                id="blurEffect"
                [(ngModel)]="pgConfig.blurEffect"
                (ngModelChange)="updateConfig()"
                label="Blur Effect"
              ></app-checkbox>
              <app-checkbox
                id="showLabels"
                [(ngModel)]="pgConfig.showLabels"
                (ngModelChange)="updateConfig()"
                label="Show Labels"
              ></app-checkbox>
            </div>
          </div>
        </div>

        <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
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
          [attr.magnify]="pgConfig.magnify ? true : false"
          [attr.blur-effect]="pgConfig.blurEffect ? true : false"
          [attr.show-labels]="pgConfig.showLabels ? true : false"
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
    magnify: true,
    blurEffect: false,
    showLabels: true,
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
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  updateConfig() {
    let code = '<ui-dock\n';
    code += `  position="${this.pgConfig.position}"\n`;
    if (this.pgConfig.breakpoint) {
      code += `  breakpoint="${this.pgConfig.breakpoint}"\n`;
    }
    if (!this.pgConfig.autoZIndex) {
      code += `  auto-z-index="false"\n`;
    }
    if (!this.pgConfig.magnify) {
      code += `  magnify="false"\n`;
    }
    if (this.pgConfig.blurEffect) {
      code += `  blur-effect="true"\n`;
    }
    if (!this.pgConfig.showLabels) {
      code += `  show-labels="false"\n`;
    }
    code += `  [model]="items"\n`;
    code += '></ui-dock>';

    this.generatedCode.set(code);
    this.refreshCode();
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
      magnify: true,
      blurEffect: false,
      showLabels: true,
    };
    this.updateConfig();
  }
}
