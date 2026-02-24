import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-breadcrumb-playground',
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
    <ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">
      <div slot="content-config">
        <div class="control-grid">
          <div class="control-section">
            <h3>Configuration</h3>
            <div class="control-group">
              <label>Separator</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.separator"
                (ngModelChange)="updateConfig()"
              />
            </div>
            <div class="control-group">
              <label>Max Items (Collapse)</label>
              <input
                type="number"
                [(ngModel)]="pgConfig.maxItems"
                (ngModelChange)="updateConfig()"
              />
            </div>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (ngModelChange)="updateConfig()"
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
                (ngModelChange)="updateConfig()"
                label="Show Home"
              ></app-checkbox>
            </div>
            <div class="control-group">
              <label>Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (ngModelChange)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <ui-button variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
        </div>
            </div>
    </ui-accordion>
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
