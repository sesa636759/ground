import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-input-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Structure</h3>
            <div class="control-group">
              <label>Length (Digits)</label>
              <input type="number" [(ngModel)]="pgConfig.length" (change)="updateConfig()" />
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="mask"
                [(ngModel)]="pgConfig.mask"
                (change)="updateConfig()"
              />
              <label for="mask">Mask (Password Style)</label>
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
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
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
                <option value="default">Default</option>
                <option value="filled">Filled</option>
                <option value="outlined">Outlined</option>
              </select>
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
        <ui-otp-input
          [attr.length]="pgConfig.length"
          [attr.mask]="pgConfig.mask ? '' : null"
          [attr.disabled]="pgConfig.disabled ? '' : null"
          [attr.size]="pgConfig.size"
          [attr.variant]="pgConfig.variant"
          (otpChange)="onValueChange($event)"
        ></ui-otp-input>

        <div
          style="margin-top: 24px; font-weight: 600; font-family: monospace; letter-spacing: 2px;"
        >
          Current Value: {{ currentValue }}
        </div>
      </div>
    </div>
  `,
  styleUrl: './otp-input-playground.component.scss',
})
export class OtpInputPlaygroundComponent {
  pgConfig = {
    length: 6,
    mask: false,
    disabled: false,
    size: 'md',
    variant: 'default',
  };

  currentValue = '';
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-otp-input\n';
    code += `  [length]="${this.pgConfig.length}"\n`;
    if (this.pgConfig.mask) code += `  mask\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += '></ui-otp-input>';

    this.generatedCode.set(code);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail.value;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      length: 6,
      mask: false,
      disabled: false,
      size: 'md',
      variant: 'default',
    };
    this.currentValue = '';
    this.updateConfig();
  }
}
