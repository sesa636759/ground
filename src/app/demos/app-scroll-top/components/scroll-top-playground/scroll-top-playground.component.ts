import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scroll-top-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Behavior</h3>
            <div class="control-group">
              <label>Threshold (px)</label>
              <app-input type="number" [(ngModel)]="pgConfig.threshold" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Scroll Speed (ms)</label>
              <app-input type="number" [(ngModel)]="pgConfig.speed" (change)="updateConfig()" />
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Icon</label>
              <app-input type="text" [(ngModel)]="pgConfig.icon" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Shape</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.shape"
                (change)="updateConfig()"
                [options]="shapeOptions"
              ></ui-dropdown>
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
        <div class="scroll-content" #container>
          <h3>Scroll down to see the button!</h3>
          <p *ngFor="let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">More content segment {{ i }}...</p>

          <ui-scroll-top
            [attr.target]="container"
            [attr.threshold]="pgConfig.threshold"
            [attr.icon]="pgConfig.icon"
            [attr.shape]="pgConfig.shape"
            [attr.speed]="pgConfig.speed"
          ></ui-scroll-top>
        </div>
      </div>
    </div>
  `,
  styleUrl: './scroll-top-playground.component.scss',
})
export class ScrollTopPlaygroundComponent {
  pgConfig = {
    threshold: 200,
    icon: '⬆️',
    shape: 'circle',
    speed: 400,
  };

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-scroll-top\n';
    code += `  [threshold]="${this.pgConfig.threshold}"\n`;
    code += `  icon="${this.pgConfig.icon}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;
    code += '></ui-scroll-top>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      threshold: 200,
      icon: '⬆️',
      shape: 'circle',
      speed: 400,
    };
    this.updateConfig();
  }
}
