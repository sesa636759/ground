import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Header -->
          <div class="control-section">
            <h3>Header</h3>
            <div class="control-group">
              <label>Title</label>
              <input type="text" [(ngModel)]="pgConfig.panelTitle" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Subtitle</label>
              <input type="text" [(ngModel)]="pgConfig.panelSubtitle" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Badge</label>
              <input type="text" [(ngModel)]="pgConfig.badge" (change)="updateConfig()" />
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showClose"
                [(ngModel)]="pgConfig.showClose"
                (change)="updateConfig()"
                label="Show Close"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showSettings"
                [(ngModel)]="pgConfig.showSettings"
                (change)="updateConfig()"
                label="Show Settings"
              ></app-checkbox>
            </div>
          </div>

          <!-- Style -->
          <div class="control-section">
            <h3>Style</h3>
            <div class="control-group">
              <label>Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (change)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Theme</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.theme"
                (change)="updateConfig()"
                [options]="themeOptions"
              ></ui-dropdown>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="glass"
                [(ngModel)]="pgConfig.glass"
                (change)="updateConfig()"
                label="Glassmorphism"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="noPadding"
                [(ngModel)]="pgConfig.noPadding"
                (change)="updateConfig()"
                label="No Padding"
              ></app-checkbox>
            </div>
          </div>

          <!-- Interactivity -->
          <div class="control-section">
            <h3>Interactivity</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="toggleable"
                [(ngModel)]="pgConfig.toggleable"
                (change)="updateConfig()"
                label="Toggleable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="minimizable"
                [(ngModel)]="pgConfig.minimizable"
                (change)="updateConfig()"
                label="Minimizable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="maximizable"
                [(ngModel)]="pgConfig.maximizable"
                (change)="updateConfig()"
                label="Maximizable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="isDraggable"
                [(ngModel)]="pgConfig.isDraggable"
                (change)="updateConfig()"
                label="Draggable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="resizable"
                [(ngModel)]="pgConfig.resizable"
                (change)="updateConfig()"
                label="Resizable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="loading"
                [(ngModel)]="pgConfig.loading"
                (change)="updateConfig()"
                label="Loading State"
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
        <ui-panel
          [attr.panel-title]="pgConfig.panelTitle"
          [attr.panel-subtitle]="pgConfig.panelSubtitle"
          [attr.badge]="pgConfig.badge"
          [attr.variant]="pgConfig.variant"
          [attr.theme]="pgConfig.theme"
          [attr.show-close]="pgConfig.showClose ? '' : null"
          [attr.show-settings]="pgConfig.showSettings ? '' : null"
          [attr.toggleable]="pgConfig.toggleable ? '' : null"
          [attr.minimizable]="pgConfig.minimizable ? '' : null"
          [attr.maximizable]="pgConfig.maximizable ? '' : null"
          [attr.is-draggable]="pgConfig.isDraggable ? '' : null"
          [attr.resizable]="pgConfig.resizable ? '' : null"
          [attr.loading]="pgConfig.loading ? '' : null"
          [attr.no-padding]="pgConfig.noPadding ? '' : null"
          [attr.glass]="pgConfig.glass ? '' : null"
          width="400px"
          (panelClose)="onEvent('Close')"
          (panelSettings)="onEvent('Settings')"
          (toggle)="onEvent('Toggle')"
        >
          <div slot="content" class="panel-content-demo">
            This is the main content area of the panel. You can toggle behaviors like draggability
            and resizing from the controls on the left.
          </div>
          <div slot="footer" class="panel-footer-demo">
            <ui-button class="btn-secondary" variant="secondary" label="Cancel"></ui-button>
            <ui-button class="btn-primary" variant="primary" label="Save Changes"></ui-button>
          </div>
        </ui-panel>
      </div>

      <div class="event-log">
        <div *ngFor="let log of eventLog" class="log-entry">
          <span class="timestamp">[{{ log.time }}]</span>
          <span class="message">{{ log.msg }}</span>
        </div>
        <div *ngIf="eventLog.length === 0" style="color: #666; font-style: italic;">
          Panel events will appear here...
        </div>
      </div>
    </div>
  `,
  styleUrl: './panel-playground.component.scss',
})
export class PanelPlaygroundComponent {
  pgConfig = {
    panelTitle: 'Interactive Panel',
    panelSubtitle: 'Customizable layout component',
    badge: 'New',
    variant: 'elevated',
    theme: 'default',
    showClose: true,
    showSettings: true,
    toggleable: true,
    minimizable: true,
    maximizable: true,
    isDraggable: false,
    resizable: true,
    loading: false,
    noPadding: false,
    glass: false,
  };

  variantOptions = [
    { label: 'Elevated', value: 'elevated' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
    { label: 'Flat', value: 'flat' },
  ];

  themeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
    { label: 'Info', value: 'info' },
  ];

  generatedCode = signal('');
  eventLog: { time: string; msg: string }[] = [];

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-panel\n';
    code += `  panel-title="${this.pgConfig.panelTitle}"\n`;
    code += `  panel-subtitle="${this.pgConfig.panelSubtitle}"\n`;
    if (this.pgConfig.badge) code += `  badge="${this.pgConfig.badge}"\n`;
    if (this.pgConfig.variant !== 'elevated') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.theme !== 'default') code += `  theme="${this.pgConfig.theme}"\n`;
    if (!this.pgConfig.showClose) code += `  [show-close]="false"\n`;
    if (!this.pgConfig.showSettings) code += `  [show-settings]="false"\n`;
    if (this.pgConfig.toggleable) code += `  toggleable\n`;
    if (this.pgConfig.minimizable) code += `  minimizable\n`;
    if (this.pgConfig.maximizable) code += `  maximizable\n`;
    if (this.pgConfig.isDraggable) code += `  is-draggable\n`;
    if (this.pgConfig.resizable) code += `  resizable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.noPadding) code += `  no-padding\n`;
    if (this.pgConfig.glass) code += `  glass\n`;
    code += '>\n';
    code += '  <div slot="content">Panel content here...</div>\n';
    code += '  <div slot="footer">Panel footer here...</div>\n';
    code += '</ui-panel>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      panelTitle: 'Interactive Panel',
      panelSubtitle: 'Customizable layout component',
      badge: 'New',
      variant: 'elevated',
      theme: 'default',
      showClose: true,
      showSettings: true,
      toggleable: true,
      minimizable: true,
      maximizable: true,
      isDraggable: false,
      resizable: true,
      loading: false,
      noPadding: false,
      glass: false,
    };
    this.updateConfig();
    this.eventLog = [];
  }

  onEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.unshift({ time, msg: `Event: ${msg}` });
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}
