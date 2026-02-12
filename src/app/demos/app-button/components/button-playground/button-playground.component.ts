import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Content -->
          <div class="control-section">
            <h3>Content</h3>
            <div class="control-group">
              <label>Label</label>
              <input type="text" [(ngModel)]="pgConfig.label" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Icon</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.icon"
                (change)="updateConfig()"
                placeholder="e.g. ⭐, fa-user"
              />
            </div>
            <div class="control-group">
              <label>Badge</label>
              <input type="text" [(ngModel)]="pgConfig.badge" (change)="updateConfig()" />
            </div>
          </div>

          <!-- Appearance -->
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Variant</label>
              <select [(ngModel)]="pgConfig.variant" (change)="updateConfig()">
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="danger">Danger</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
              </select>
            </div>
            <div class="control-group">
              <label>Size</label>
              <select [(ngModel)]="pgConfig.size" (change)="updateConfig()">
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>
            <div class="control-group">
              <label>Elevation (0-5)</label>
              <input
                type="number"
                min="0"
                max="5"
                [(ngModel)]="pgConfig.elevation"
                (change)="updateConfig()"
              />
            </div>
          </div>

          <!-- Configuration -->
          <div class="control-section">
            <h3>Behavior</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="iconOnly"
                [(ngModel)]="pgConfig.iconOnly"
                (change)="updateConfig()"
              />
              <label for="iconOnly">Icon Only</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="loading"
                [(ngModel)]="pgConfig.loading"
                (change)="updateConfig()"
              />
              <label for="loading">Loading</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="disabled"
                [(ngModel)]="pgConfig.disabled"
                (change)="updateConfig()"
              />
              <label for="disabled">Disabled</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="pill"
                [(ngModel)]="pgConfig.pill"
                (change)="updateConfig()"
              />
              <label for="pill">Pill</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="fullWidth"
                [(ngModel)]="pgConfig.fullWidth"
                (change)="updateConfig()"
              />
              <label for="fullWidth">Full Width</label>
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
        <ui-button
          [attr.label]="pgConfig.label"
          [attr.icon]="pgConfig.icon"
          [attr.badge]="pgConfig.badge"
          [attr.variant]="pgConfig.variant"
          [attr.size]="pgConfig.size"
          [attr.elevation]="pgConfig.elevation"
          [attr.icon-only]="pgConfig.iconOnly ? '' : null"
          [attr.loading]="pgConfig.loading ? '' : null"
          [attr.disabled]="pgConfig.disabled ? '' : null"
          [attr.pill]="pgConfig.pill ? '' : null"
          [attr.full-width]="pgConfig.fullWidth ? '' : null"
          (buttonClick)="onEvent('Button Clicked')"
        ></ui-button>
      </div>

      <div class="event-log">
        <div *ngFor="let log of eventLog" class="log-entry">
          <span class="timestamp">[{{ log.time }}]</span>
          <span class="message">{{ log.msg }}</span>
        </div>
        <div *ngIf="eventLog.length === 0" style="color: #666; font-style: italic;">
          Interact with the button to see events...
        </div>
      </div>
    </div>
  `,
  styleUrl: './button-playground.component.scss',
})
export class ButtonPlaygroundComponent {
  pgConfig = {
    label: 'Explore Components',
    icon: '🚀',
    badge: '',
    variant: 'primary',
    size: 'md',
    elevation: 2,
    iconOnly: false,
    loading: false,
    disabled: false,
    pill: false,
    fullWidth: false,
  };

  generatedCode = signal('');
  eventLog: { time: string; msg: string }[] = [];

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-button\n';
    if (!this.pgConfig.iconOnly) code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    if (this.pgConfig.badge) code += `  badge="${this.pgConfig.badge}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.elevation) code += `  elevation="${this.pgConfig.elevation}"\n`;
    if (this.pgConfig.iconOnly) code += `  icon-only\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.pill) code += `  pill\n`;
    if (this.pgConfig.fullWidth) code += `  full-width\n`;
    code += '></ui-button>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Explore Components',
      icon: '🚀',
      badge: '',
      variant: 'primary',
      size: 'md',
      elevation: 2,
      iconOnly: false,
      loading: false,
      disabled: false,
      pill: false,
      fullWidth: false,
    };
    this.updateConfig();
    this.eventLog = [];
  }

  onEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.unshift({ time, msg });
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}
