import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-badge-playground',
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
              <label>Value</label>
              <input type="text" [(ngModel)]="pgConfig.value" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Max Value</label>
              <input type="number" [(ngModel)]="pgConfig.max" (change)="updateConfig()" />
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
          </div>

          <!-- Appearance -->
          <div class="control-section">
            <h3>Appearance</h3>
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
              <label>Variant</label>
              <select [(ngModel)]="pgConfig.variant" (change)="updateConfig()">
                <option value="standard">Standard</option>
                <option value="outlined">Outlined</option>
                <option value="bordered">Bordered</option>
                <option value="soft">Soft</option>
              </select>
            </div>
          </div>

          <!-- Position & Style -->
          <div class="control-section">
            <h3>Position & Style</h3>
            <div class="control-group">
              <label>Position</label>
              <select [(ngModel)]="pgConfig.position" (change)="updateConfig()">
                <option value="top-right">Top Right</option>
                <option value="top-left">Top Left</option>
                <option value="bottom-right">Bottom Right</option>
                <option value="bottom-left">Bottom Left</option>
              </select>
            </div>
            <div class="control-group">
              <label>Animation</label>
              <select [(ngModel)]="pgConfig.animation" (change)="updateConfig()">
                <option value="none">None</option>
                <option value="pulse">Pulse</option>
                <option value="bounce">Bounce</option>
                <option value="shake">Shake</option>
              </select>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="dot"
                [(ngModel)]="pgConfig.dot"
                (change)="updateConfig()"
              />
              <label for="dot">Dot Mode</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="glow"
                [(ngModel)]="pgConfig.glow"
                (change)="updateConfig()"
              />
              <label for="glow">Glow Effect</label>
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
        <ui-badge
          [attr.value]="pgConfig.value"
          [attr.max]="pgConfig.max"
          [attr.color]="pgConfig.color"
          [attr.size]="pgConfig.size"
          [attr.variant]="pgConfig.variant"
          [attr.position]="pgConfig.position"
          [attr.animation]="pgConfig.animation"
          [attr.dot]="pgConfig.dot ? '' : null"
          [attr.glow]="pgConfig.glow ? '' : null"
          [attr.icon]="pgConfig.icon"
        >
          <div class="badge-target">
            <span *ngIf="!pgConfig.icon">✉️</span>
            <span *ngIf="pgConfig.icon">{{ pgConfig.icon }}</span>
          </div>
        </ui-badge>
      </div>
    </div>
  `,
  styleUrl: './badge-playground.component.scss',
})
export class BadgePlaygroundComponent {
  pgConfig = {
    value: '5',
    max: 99,
    color: 'danger',
    size: 'md',
    variant: 'standard',
    position: 'top-right',
    animation: 'none',
    dot: false,
    glow: false,
    icon: '',
  };

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-badge\n';
    if (!this.pgConfig.dot) code += `  value="${this.pgConfig.value}"\n`;
    if (this.pgConfig.max !== 99) code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  position="${this.pgConfig.position}"\n`;
    if (this.pgConfig.animation !== 'none') code += `  animation="${this.pgConfig.animation}"\n`;
    if (this.pgConfig.dot) code += `  dot\n`;
    if (this.pgConfig.glow) code += `  glow\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    code += '>\n';
    code += '  <icon>✉️</icon>\n';
    code += '</ui-badge>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      value: '5',
      max: 99,
      color: 'danger',
      size: 'md',
      variant: 'standard',
      position: 'top-right',
      animation: 'none',
      dot: false,
      glow: false,
      icon: '',
    };
    this.updateConfig();
  }
}
