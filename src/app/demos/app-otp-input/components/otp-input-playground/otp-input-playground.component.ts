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
              <app-input
                type="number"
                [(ngModel)]="pgConfig.length"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="mask"
                [(ngModel)]="pgConfig.mask"
                (change)="updateConfig()"
                label="Mask (Password Style)"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="disabled"
                [(ngModel)]="pgConfig.disabled"
                (change)="updateConfig()"
                label="Disabled"
              ></app-checkbox>
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
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

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Filled', value: 'filled' },
    { label: 'Outlined', value: 'outlined' },
  ];

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
