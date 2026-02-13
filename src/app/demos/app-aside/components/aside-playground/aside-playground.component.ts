import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-aside-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Configuration -->
          <div class="control-section">
            <h3>Configuration</h3>
            <div class="control-group">
              <label>Direction</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.direction"
                (change)="updateConfig()"
                [options]="directionOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Size (px/%/rem)</label>
              <input type="text" [(ngModel)]="pgConfig.size" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (change)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Backdrop Blur</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.backdropBlur"
                (change)="updateConfig()"
                placeholder="e.g. 8px"
              />
            </div>
          </div>

          <!-- Behavior -->
          <div class="control-section">
            <h3>Behavior</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="closeable"
                [(ngModel)]="pgConfig.closeable"
                (change)="updateConfig()"
                label="Closeable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="overlayClick"
                [(ngModel)]="pgConfig.closeOnOverlayClick"
                (change)="updateConfig()"
                label="Close on Overlay Click"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="resizable"
                [(ngModel)]="pgConfig.resizable"
                (change)="updateConfig()"
                label="Resizable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="loading"
                [(ngModel)]="pgConfig.loading"
                (change)="updateConfig()"
                label="Loading State"
              ></app-checkbox>
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
        <div class="preview-content">
          <p>Click the button below to trigger the Aside Panel.</p>
          <ui-button
            class="btn-primary"
            variant="primary"
            (click)="pgConfig.open = true"
            label="Open Panel"
          ></ui-button>
        </div>

        <aside-panel
          [attr.open]="pgConfig.open ? '' : null"
          [attr.direction]="pgConfig.direction"
          [attr.size]="pgConfig.size"
          [attr.variant]="pgConfig.variant"
          [attr.closeable]="pgConfig.closeable ? '' : null"
          [attr.close-on-overlay-click]="pgConfig.closeOnOverlayClick ? '' : null"
          [attr.resizable]="pgConfig.resizable ? '' : null"
          [attr.backdrop-blur]="pgConfig.backdropBlur"
          [attr.loading]="pgConfig.loading ? '' : null"
          (asideClosed)="pgConfig.open = false"
        >
          <div slot="header">
            <h3 style="margin: 0;">Panel Settings</h3>
          </div>
          <div slot="content" class="aside-content-demo">
            <h2>Welcome Home</h2>
            <p>
              This is a highly customizable aside panel. You can change its direction, size, and
              even enable resizing dynamically from the controls!
            </p>

            <div style="margin: 20px 0; padding: 16px; background: #f1f5f9; border-radius: 8px;">
              <h4 style="margin-top: 0;">Did you know?</h4>
              <p style="font-size: 0.9rem;">
                You can use slots for header, content, and footer to maintain a consistent layout.
              </p>
            </div>

            <ui-divider></ui-divider>

            <div style="margin-top: 20px;">
              <label>Quick Note</label>
              <textarea
                style="width: 100%; margin-top: 8px; border: 1px solid #ddd; border-radius: 4px; padding: 8px;"
                rows="4"
                placeholder="Type something..."
              ></textarea>
            </div>
          </div>
          <div slot="footer" class="aside-footer-demo">
            <ui-button
              class="btn-secondary"
              variant="secondary"
              (click)="pgConfig.open = false"
              label="Cancel"
            ></ui-button>
            <ui-button
              class="btn-primary"
              variant="primary"
              (click)="pgConfig.open = false"
              label="Save Changes"
            ></ui-button>
          </div>
        </aside-panel>
      </div>
    </div>
  `,
  styleUrl: './aside-playground.component.scss',
})
export class AsidePlaygroundComponent {
  pgConfig = {
    open: false,
    direction: 'right',
    size: '400px',
    variant: 'default',
    closeable: true,
    closeOnOverlayClick: true,
    resizable: true,
    backdropBlur: '0',
    loading: false,
  };

  directionOptions = [
    { label: 'Right', value: 'right' },
    { label: 'Left', value: 'left' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Glass', value: 'glass' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<aside-panel\n';
    code += `  [open]="isOpen"\n`;
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (!this.pgConfig.closeable) code += `  [closeable]="false"\n`;
    if (!this.pgConfig.closeOnOverlayClick) code += `  [close-on-overlay-click]="false"\n`;
    if (this.pgConfig.resizable) code += `  resizable\n`;
    if (this.pgConfig.backdropBlur !== '0')
      code += `  backdrop-blur="${this.pgConfig.backdropBlur}"\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    code += '>\n';
    code += '  <div slot="header"><h3>Header Content</h3></div>\n';
    code += '  <div slot="content">Main body content goes here...</div>\n';
    code += '  <div slot="footer">Footer actions</div>\n';
    code += '</aside-panel>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      open: false,
      direction: 'right',
      size: '400px',
      variant: 'default',
      closeable: true,
      closeOnOverlayClick: true,
      resizable: true,
      backdropBlur: '0',
      loading: false,
    };
    this.updateConfig();
  }
}
