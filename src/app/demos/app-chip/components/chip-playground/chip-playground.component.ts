import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chip-playground',
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
                placeholder="e.g. ⭐"
              />
            </div>
            <div class="control-group">
              <label>Avatar URL</label>
              <input type="text" [(ngModel)]="pgConfig.userAvatar" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Counter</label>
              <input type="text" [(ngModel)]="pgConfig.counter" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Badge</label>
              <input type="text" [(ngModel)]="pgConfig.badge" (change)="updateConfig()" />
            </div>
          </div>

          <!-- Style -->
          <div class="control-section">
            <h3>Style</h3>
            <div class="control-group">
              <label>Variant</label>
              <select [(ngModel)]="pgConfig.variant" (change)="updateConfig()">
                <option value="filled">Filled</option>
                <option value="outlined">Outlined</option>
                <option value="soft">Soft</option>
                <option value="text">Text</option>
                <option value="gradient">Gradient</option>
              </select>
            </div>
            <div class="control-group">
              <label>Color</label>
              <select [(ngModel)]="pgConfig.color" (change)="updateConfig()">
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="danger">Danger</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
              </select>
            </div>
            <div class="control-group">
              <label>Size</label>
              <select [(ngModel)]="pgConfig.size" (change)="updateConfig()">
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
            <div class="control-group">
              <label>Shape</label>
              <select [(ngModel)]="pgConfig.shape" (change)="updateConfig()">
                <option value="pill">Pill</option>
                <option value="rounded">Rounded</option>
                <option value="square">Square</option>
                <option value="circle">Circle</option>
              </select>
            </div>
          </div>

          <!-- Configuration -->
          <div class="control-section">
            <h3>Behavior</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="removable"
                [(ngModel)]="pgConfig.removable"
                (change)="updateConfig()"
              />
              <label for="removable">Removable</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="clickable"
                [(ngModel)]="pgConfig.clickable"
                (change)="updateConfig()"
              />
              <label for="clickable">Clickable</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="selected"
                [(ngModel)]="pgConfig.selected"
                (change)="updateConfig()"
              />
              <label for="selected">Selected</label>
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
        <ui-chip
          [attr.label]="pgConfig.label"
          [attr.icon]="pgConfig.icon"
          [attr.user-avatar]="pgConfig.userAvatar"
          [attr.counter]="pgConfig.counter"
          [attr.badge]="pgConfig.badge"
          [attr.variant]="pgConfig.variant"
          [attr.color]="pgConfig.color"
          [attr.size]="pgConfig.size"
          [attr.shape]="pgConfig.shape"
          [attr.removable]="pgConfig.removable ? '' : null"
          [attr.clickable]="pgConfig.clickable ? '' : null"
          [attr.selected]="pgConfig.selected ? '' : null"
          [attr.loading]="pgConfig.loading ? '' : null"
          (chipClick)="onEvent('Chip Clicked')"
          (chipRemove)="onEvent('Chip Removed')"
        ></ui-chip>
      </div>

      <div class="event-log">
        <div *ngFor="let log of eventLog" class="log-entry">
          <span class="timestamp">[{{ log.time }}]</span>
          <span class="message">{{ log.msg }}</span>
        </div>
        <div *ngIf="eventLog.length === 0" style="color: #666; font-style: italic;">
          Interact with the chip to see events...
        </div>
      </div>
    </div>
  `,
  styleUrl: './chip-playground.component.scss',
})
export class ChipPlaygroundComponent {
  pgConfig = {
    label: 'Angular Developer',
    icon: '🔥',
    userAvatar: '',
    counter: '',
    badge: '',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    shape: 'pill',
    removable: true,
    clickable: true,
    selected: false,
    loading: false,
  };

  generatedCode = signal('');
  eventLog: { time: string; msg: string }[] = [];

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-chip\n';
    code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    if (this.pgConfig.userAvatar) code += `  user-avatar="${this.pgConfig.userAvatar}"\n`;
    if (this.pgConfig.variant !== 'filled') code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.size !== 'md') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.shape !== 'pill') code += `  shape="${this.pgConfig.shape}"\n`;
    if (this.pgConfig.removable) code += `  removable\n`;
    if (this.pgConfig.clickable) code += `  clickable\n`;
    if (this.pgConfig.selected) code += `  selected\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    code += '></ui-chip>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Angular Developer',
      icon: '🔥',
      userAvatar: '',
      counter: '',
      badge: '',
      variant: 'filled',
      color: 'primary',
      size: 'md',
      shape: 'pill',
      removable: true,
      clickable: true,
      selected: false,
      loading: false,
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
