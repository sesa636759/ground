import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skeleton-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Shape</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.shape"
                (change)="updateConfig()"
                [options]="shapeOptions"
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
            <div class="control-group">
              <label>Theme</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.theme"
                (change)="updateConfig()"
                [options]="themeOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Sizing</h3>
            <div class="control-group">
              <label>Width</label>
              <input type="text" [(ngModel)]="pgConfig.width" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Height</label>
              <input type="text" [(ngModel)]="pgConfig.height" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Border Radius</label>
              <input type="text" [(ngModel)]="pgConfig.borderRadius" (change)="updateConfig()" />
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

      <div
        class="playground-preview"
        [style.background]="pgConfig.theme === 'dark' ? '#1e293b' : 'white'"
      >
        <ui-skeleton
          [attr.shape]="pgConfig.shape"
          [attr.animation]="pgConfig.animation"
          [attr.theme]="pgConfig.theme"
          [attr.width]="pgConfig.width"
          [attr.height]="pgConfig.height"
          [attr.border-radius]="pgConfig.borderRadius"
        ></ui-skeleton>
      </div>
    </div>
  `,
  styleUrl: './skeleton-playground.component.scss',
})
export class SkeletonPlaygroundComponent {
  pgConfig = {
    shape: 'rectangle',
    animation: 'wave',
    theme: 'light',
    width: '100%',
    height: '100px',
    borderRadius: '8px',
  };

  shapeOptions = [
    { label: 'Text', value: 'text' },
    { label: 'Circle', value: 'circle' },
    { label: 'Rectangle', value: 'rectangle' },
  ];

  animationOptions = [
    { label: 'Pulse', value: 'pulse' },
    { label: 'Wave', value: 'wave' },
    { label: 'None', value: 'none' },
  ];

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-skeleton\n';
    code += `  shape="${this.pgConfig.shape}"\n`;
    code += `  animation="${this.pgConfig.animation}"\n`;
    code += `  theme="${this.pgConfig.theme}"\n`;
    code += `  width="${this.pgConfig.width}"\n`;
    code += `  height="${this.pgConfig.height}"\n`;
    if (this.pgConfig.borderRadius) code += `  border-radius="${this.pgConfig.borderRadius}"\n`;
    code += '></ui-skeleton>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      shape: 'rectangle',
      animation: 'wave',
      theme: 'light',
      width: '100%',
      height: '100px',
      borderRadius: '8px',
    };
    this.updateConfig();
  }
}
