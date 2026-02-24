import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';

@Component({
  selector: 'app-pagination-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
    <ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">
      <div slot="content-config">
        <div class="control-grid">
          <!-- Basic Settings -->
          <div class="control-section">
            <h3>Basic Settings</h3>
            <div class="control-group">
              <label>Total Items</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.totalItems"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Items Per Page</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.itemsPerPage"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Max Visible Pages</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.maxVisiblePages"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
          </div>

          <!-- Appearance -->
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Type</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.type"
                (ngModelChange)="updateConfig()"
                [options]="typeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (ngModelChange)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (ngModelChange)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Theme</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.theme"
                (ngModelChange)="updateConfig()"
                [options]="themeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Shape</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.shape"
                (ngModelChange)="updateConfig()"
                [options]="shapeOptions"
              ></ui-dropdown>
            </div>
          </div>

          <!-- Features -->
          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.keyboardNav"
                (ngModelChange)="updateConfig()"
                label="Keyboard Nav"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.responsiveMode"
                (ngModelChange)="updateConfig()"
                label="Responsive"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.rtl"
                (ngModelChange)="updateConfig()"
                label="RTL Mode"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.showFirstLast"
                (ngModelChange)="updateConfig()"
                label="Show First/Last"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.showPageSize"
                (ngModelChange)="updateConfig()"
                label="Show Page Size"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.showTotal"
                (ngModelChange)="updateConfig()"
                label="Show Total"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.showJumpTo"
                (ngModelChange)="updateConfig()"
                label="Show Jump To"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.iconOnly"
                (ngModelChange)="updateConfig()"
                label="Icon Only"
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
    </ui-accordion>
  </div>

  <div class="playground-preview">
        <ui-pagination
          [attr.total-items]="pgConfig.totalItems"
          [attr.items-per-page]="pgConfig.itemsPerPage"
          [attr.max-visible-pages]="pgConfig.maxVisiblePages"
          [attr.type]="pgConfig.type"
          [attr.size]="pgConfig.size"
          [attr.variant]="pgConfig.variant"
          [attr.theme]="pgConfig.theme"
          [attr.shape]="pgConfig.shape"
          [attr.keyboard-nav]="pgConfig.keyboardNav ? 'true' : 'false'"
          [attr.responsive-mode]="pgConfig.responsiveMode ? 'true' : 'false'"
          [attr.rtl]="pgConfig.rtl ? 'true' : null"
          [attr.show-first-last]="pgConfig.showFirstLast ? 'true' : 'false'"
          [attr.show-page-size]="pgConfig.showPageSize ? 'true' : null"
          [attr.show-total]="pgConfig.showTotal ? 'true' : null"
          [attr.show-jump-to]="pgConfig.showJumpTo ? 'true' : null"
          [attr.icon-only]="pgConfig.iconOnly ? 'true' : null"
          current-page="1"
        ></ui-pagination>
      </div>
    </div>
  `,
  styleUrl: './pagination-playground.component.scss',
})
export class PaginationPlaygroundComponent {
  pgConfig = this.getDefaultConfig();

  generatedCode = signal('');

  typeOptions = [
    { label: 'Basic', value: 'basic' },
    { label: 'Compact', value: 'compact' },
    { label: 'Detailed', value: 'detailed' },
    { label: 'Minimal', value: 'minimal' },
    { label: 'Dropdown', value: 'dropdown' },
    { label: 'Input', value: 'input' },
    { label: 'Indicator', value: 'indicator' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
  ];

  themeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  shapeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Pill', value: 'pill' },
  ];

  constructor() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      totalItems: 100,
      itemsPerPage: 10,
      maxVisiblePages: 5,
      type: 'basic',
      size: 'md',
      variant: 'default',
      theme: 'default',
      shape: 'default',
      keyboardNav: true,
      responsiveMode: true,
      rtl: false,
      showFirstLast: true,
      showPageSize: false,
      showTotal: false,
      showJumpTo: false,
      iconOnly: false,
    };
  }

  updateConfig() {
    let code = '<ui-pagination\n';

    if (this.pgConfig.totalItems !== 100) code += `  total-items="${this.pgConfig.totalItems}"\n`;
    if (this.pgConfig.itemsPerPage !== 10)
      code += `  items-per-page="${this.pgConfig.itemsPerPage}"\n`;
    if (this.pgConfig.maxVisiblePages !== 5)
      code += `  max-visible-pages="${this.pgConfig.maxVisiblePages}"\n`;
    if (this.pgConfig.type !== 'basic') code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.size !== 'md') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.theme !== 'default') code += `  theme="${this.pgConfig.theme}"\n`;
    if (this.pgConfig.shape !== 'default') code += `  shape="${this.pgConfig.shape}"\n`;

    if (!this.pgConfig.keyboardNav) code += `  keyboard-nav="false"\n`;
    if (!this.pgConfig.responsiveMode) code += `  responsive-mode="false"\n`;
    if (this.pgConfig.rtl) code += `  rtl="true"\n`;
    if (!this.pgConfig.showFirstLast) code += `  show-first-last="false"\n`;
    if (this.pgConfig.showPageSize) code += `  show-page-size="true"\n`;
    if (this.pgConfig.showTotal) code += `  show-total="true"\n`;
    if (this.pgConfig.showJumpTo) code += `  show-jump-to="true"\n`;
    if (this.pgConfig.iconOnly) code += `  icon-only="true"\n`;

    code += '  current-page="1"\n></ui-pagination>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
  }
}
