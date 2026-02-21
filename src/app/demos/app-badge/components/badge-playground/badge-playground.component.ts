import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-badge-playground',
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
          <!-- Content -->
          <div class="control-section">
            <h3>Content</h3>
            <div class="control-group">
              <label>Value</label>
              <input type="text" [(ngModel)]="pgConfig.value" (ngModelChange)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Max Value</label>
              <input type="number" [(ngModel)]="pgConfig.max" (ngModelChange)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Icon</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.icon"
                (ngModelChange)="updateConfig()"
                placeholder="e.g. ⭐"
              />
            </div>
          </div>

          <!-- Appearance -->
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Color</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.color"
                (change)="updateConfig()"
                [options]="colorOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (change)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (change)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
          </div>

          <!-- Position & Style -->
          <div class="control-section">
            <h3>Position & Style</h3>
            <div class="control-group">
              <label>Position</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.position"
                (change)="updateConfig()"
                [options]="positionOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Animation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.animation"
                (change)="updateConfig()"
                [options]="animationOptions"
              ></ui-dropdown>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="dot"
                [(ngModel)]="pgConfig.dot"
                (change)="updateConfig()"
                label="Dot Mode"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="glow"
                [(ngModel)]="pgConfig.glow"
                (change)="updateConfig()"
                label="Glow Effect"
              ></app-checkbox>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <ui-button
            class="btn-secondary"
            variant="secondary"
            (click)="resetConfig()"
            label="Reset"
          ></ui-button>
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

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  variantOptions = [
    { label: 'Standard', value: 'standard' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Soft', value: 'soft' },
  ];

  positionOptions = [
    { label: 'Top Right', value: 'top-right' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
    { label: 'Bottom Left', value: 'bottom-left' },
  ];

  animationOptions = [
    { label: 'None', value: 'none' },
    { label: 'Pulse', value: 'pulse' },
    { label: 'Bounce', value: 'bounce' },
    { label: 'Shake', value: 'shake' },
  ];

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
