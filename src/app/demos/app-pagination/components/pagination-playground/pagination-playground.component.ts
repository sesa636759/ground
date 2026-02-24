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
  templateUrl: './pagination-playground.component.html',
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
