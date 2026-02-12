import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-speed-dial-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Layout</h3>
            <div class="control-group">
              <label>Direction</label>
              <select [(ngModel)]="pgConfig.direction" (change)="updateConfig()">
                <option value="up">Up</option>
                <option value="down">Down</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
            <div class="control-group">
              <label>Type</label>
              <select [(ngModel)]="pgConfig.type" (change)="updateConfig()">
                <option value="linear">Linear</option>
                <option value="quarter-circle">Quarter Circle</option>
                <option value="half-circle">Half Circle</option>
                <option value="circle">Circle</option>
              </select>
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Radius (for circles)</label>
              <input type="number" [(ngModel)]="pgConfig.radius" (change)="updateConfig()" />
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="ripple"
                [(ngModel)]="pgConfig.ripple"
                (change)="updateConfig()"
              />
              <label for="ripple">Ripple Effect</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="mask"
                [(ngModel)]="pgConfig.mask"
                (change)="updateConfig()"
              />
              <label for="mask">Display Mask</label>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <button (click)="copyCode()">Copy Code</button>
          <button class="btn-secondary" (click)="resetConfig()">Reset</button>
        </div>
      </div>

      <div class="playground-preview">
        <ui-speed-dial
          [attr.direction]="pgConfig.direction"
          [attr.type]="pgConfig.type"
          [attr.radius]="pgConfig.radius"
          [attr.ripple]="pgConfig.ripple ? '' : null"
          [attr.mask]="pgConfig.mask ? '' : null"
          [model]="modelJson"
          button-class="ui-button-primary"
        ></ui-speed-dial>

        <p style="position: absolute; bottom: 20px; font-size: 0.8rem; color: #94a3b8;">
          Direction: {{ pgConfig.direction }} | Type: {{ pgConfig.type }}
        </p>
      </div>
    </div>
  `,
  styleUrl: './speed-dial-playground.component.scss',
})
export class SpeedDialPlaygroundComponent {
  pgConfig = {
    direction: 'up',
    type: 'linear',
    radius: 80,
    ripple: true,
    mask: false,
  };

  model = [
    { label: 'Add', icon: '➕' },
    { label: 'Edit', icon: '✏️' },
    { label: 'Delete', icon: '🗑️' },
    { label: 'Share', icon: '🔗' },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-speed-dial\n';
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.type !== 'linear') code += `  [radius]="${this.pgConfig.radius}"\n`;
    if (this.pgConfig.mask) code += `  mask\n`;
    code += `  [model]="items"\n`;
    code += '></ui-speed-dial>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      direction: 'up',
      type: 'linear',
      radius: 80,
      ripple: true,
      mask: false,
    };
    this.updateConfig();
  }
}
