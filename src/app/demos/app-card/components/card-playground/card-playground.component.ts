import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (change)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Border Radius</label>
              <input type="text" [(ngModel)]="pgConfig.borderRadius" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Width</label>
              <input type="text" [(ngModel)]="pgConfig.width" (change)="updateConfig()" />
            </div>
          </div>

          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="hoverable"
                [(ngModel)]="pgConfig.hoverable"
                (change)="updateConfig()"
                label="Hoverable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="flippable"
                [(ngModel)]="pgConfig.flippable"
                (change)="updateConfig()"
                label="Flippable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="loading"
                [(ngModel)]="pgConfig.loading"
                (change)="updateConfig()"
                label="Skeleton Loading"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showMenu"
                [(ngModel)]="pgConfig.showMenu"
                (change)="updateConfig()"
                label="Show Context Menu"
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
        <ui-card
          [attr.variant]="pgConfig.variant"
          [attr.hoverable]="pgConfig.hoverable ? '' : null"
          [attr.flippable]="pgConfig.flippable ? '' : null"
          [attr.loading]="pgConfig.loading ? '' : null"
          [attr.show-menu]="pgConfig.showMenu ? '' : null"
          [attr.border-radius]="pgConfig.borderRadius"
          [attr.width]="pgConfig.width"
          [menuItems]="menuJson"
        >
          <div slot="cover" class="demo-cover-image">🌄</div>
          <div slot="header">
            <h3 style="margin: 0;">Exploring the Alps</h3>
          </div>
          <div slot="content" class="demo-card-content">
            <p>
              Experience the breathtaking views and serene landscapes of the highest mountain range
              in Europe. Perfect for adventure seekers!
            </p>
          </div>
          <div slot="footer" style="display: flex; gap: 8px;">
            <ui-button
              class="btn-primary"
              variant="primary"
              style="flex: 1;"
              label="Book Now"
            ></ui-button>
            <ui-button class="btn-secondary" variant="secondary" label="Details"></ui-button>
          </div>
          <div slot="back-content" style="padding: 20px;">
            <h3>Quick Stats</h3>
            <ul style="padding-left: 20px; color: var(--text-secondary);">
              <li>Elevation: 4,808m</li>
              <li>Length: 1,200km</li>
              <li>Area: 200,000 km²</li>
            </ul>
          </div>
        </ui-card>
      </div>
    </div>
  `,
  styleUrl: './card-playground.component.scss',
})
export class CardPlaygroundComponent {
  pgConfig = {
    variant: 'elevated',
    hoverable: true,
    flippable: false,
    loading: false,
    showMenu: true,
    borderRadius: '16px',
    width: '340px',
  };

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Elevated', value: 'elevated' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
  ];

  menuItems = [
    { id: 'save', label: 'Save trip', icon: '🔖' },
    { id: 'share', label: 'Share', icon: '📤' },
    { separator: true },
    { id: 'report', label: 'Report', icon: '🚩', disabled: true },
  ];

  menuJson = JSON.stringify(this.menuItems);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-card\n';
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.hoverable) code += `  hoverable\n`;
    if (this.pgConfig.flippable) code += `  flippable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.showMenu) code += `  show-menu [menuItems]="menu"\n`;
    code += `  border-radius="${this.pgConfig.borderRadius}"\n`;
    code += `  width="${this.pgConfig.width}"\n`;
    code += '>\n';
    code += '  <img slot="cover" src="..." />\n';
    code += '  <div slot="header"><h3>Card Title</h3></div>\n';
    code += '  <div slot="content">Card body here...</div>\n';
    code += '  <div slot="footer"><ui-button label="Action"></ui-button></div>\n';
    code += '</ui-card>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      variant: 'elevated',
      hoverable: true,
      flippable: false,
      loading: false,
      showMenu: true,
      borderRadius: '16px',
      width: '340px',
    };
    this.updateConfig();
  }
}
