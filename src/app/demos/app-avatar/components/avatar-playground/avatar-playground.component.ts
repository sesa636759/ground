import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-avatar-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Identity -->
          <div class="control-section">
            <h3>Identity</h3>
            <div class="control-group">
              <label>Name (Initials)</label>
              <app-input type="text" [(ngModel)]="pgConfig.name" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Image Source</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.src"
                (change)="updateConfig()"
                placeholder="URL"
              />
            </div>
            <div class="control-group">
              <label>Icon</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.icon"
                (change)="updateConfig()"
                placeholder="emoji or icon"
              />
            </div>
          </div>

          <!-- Appearance -->
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Shape</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.shape"
                (change)="updateConfig()"
                [options]="shapeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Size (e.g. 64px)</label>
              <app-input type="text" [(ngModel)]="pgConfig.size" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Status</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.status"
                (change)="updateConfig()"
                [options]="statusOptions"
              ></ui-dropdown>
            </div>
          </div>

          <!-- Decorations -->
          <div class="control-section">
            <h3>Decorations</h3>
            <div class="control-group">
              <label>Badge</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.badge"
                (change)="updateConfig()"
                placeholder="'dot' or text"
              />
            </div>
            <div class="control-group">
              <label>Badge Color</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.badgeColor"
                (change)="updateConfig()"
                placeholder="hex or color name"
              />
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
        <ui-avatar
          [attr.name]="pgConfig.name"
          [attr.src]="pgConfig.src"
          [attr.icon]="pgConfig.icon"
          [attr.shape]="pgConfig.shape"
          [attr.size]="pgConfig.size"
          [attr.status]="pgConfig.status"
          [attr.badge]="pgConfig.badge"
          [attr.badge-color]="pgConfig.badgeColor"
        ></ui-avatar>
      </div>
    </div>
  `,
  styleUrl: './avatar-playground.component.scss',
})
export class AvatarPlaygroundComponent {
  pgConfig = {
    name: 'John Doe',
    src: 'https://i.pravatar.cc/150?u=playground',
    icon: '',
    shape: 'circle',
    size: '80px',
    status: 'online',
    badge: '',
    badgeColor: '',
  };

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
    { label: 'Hexagon', value: 'hexagon' },
    { label: 'Squircle', value: 'squircle' },
  ];

  statusOptions = [
    { label: 'None', value: null },
    { label: 'Online', value: 'online' },
    { label: 'Away', value: 'away' },
    { label: 'Busy', value: 'busy' },
    { label: 'Offline', value: 'offline' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-avatar\n';
    if (this.pgConfig.name) code += `  name="${this.pgConfig.name}"\n`;
    if (this.pgConfig.src) code += `  src="${this.pgConfig.src}"\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.status) code += `  status="${this.pgConfig.status}"\n`;
    if (this.pgConfig.badge) code += `  badge="${this.pgConfig.badge}"\n`;
    if (this.pgConfig.badgeColor) code += `  badge-color="${this.pgConfig.badgeColor}"\n`;
    code += '></ui-avatar>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      name: 'John Doe',
      src: 'https://i.pravatar.cc/150?u=playground',
      icon: '',
      shape: 'circle',
      size: '80px',
      status: 'online',
      badge: '',
      badgeColor: '',
    };
    this.updateConfig();
  }
}
