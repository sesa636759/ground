import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-breadcrumb-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Configuration</h3>
            <div class="control-group">
              <label>Separator</label>
              <app-input type="text" [(ngModel)]="pgConfig.separator" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Max Items (Collapse)</label>
              <app-input type="number" [(ngModel)]="pgConfig.maxItems" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (change)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Home & Variant</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="showHome"
                [(ngModel)]="pgConfig.showHome"
                (change)="updateConfig()"
                label="Show Home"
              ></app-checkbox>
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
        <ui-breadcrumb
          [attr.separator]="pgConfig.separator"
          [attr.max-items]="pgConfig.maxItems"
          [attr.size]="pgConfig.size"
          [attr.variant]="pgConfig.variant"
          [attr.show-home]="pgConfig.showHome ? '' : null"
          [items]="itemsJson"
        ></ui-breadcrumb>
      </div>
    </div>
  `,
  styleUrl: './breadcrumb-playground.component.scss',
})
export class BreadcrumbPlaygroundComponent {
  pgConfig = {
    separator: '/',
    maxItems: 0,
    size: 'md',
    variant: 'default',
    showHome: true,
  };

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Pills', value: 'pills' },
    { label: 'Glass', value: 'glass' },
  ];

  items = [
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Smartphones', href: '/products/electronics/smartphones' },
    { label: 'iPhone 15 Pro', active: true },
  ];

  itemsJson = JSON.stringify(this.items);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-breadcrumb\n';
    code += `  separator="${this.pgConfig.separator}"\n`;
    if (this.pgConfig.maxItems > 0) code += `  [max-items]="${this.pgConfig.maxItems}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.showHome) code += `  show-home\n`;
    code += `  [items]="breadcrumbItems"\n`;
    code += '></ui-breadcrumb>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      separator: '/',
      maxItems: 0,
      size: 'md',
      variant: 'default',
      showHome: true,
    };
    this.updateConfig();
  }
}
