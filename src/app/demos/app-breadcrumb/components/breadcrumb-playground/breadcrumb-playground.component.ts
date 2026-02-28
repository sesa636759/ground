import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
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
  templateUrl: './breadcrumb-playground.component.html',

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
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
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
    this.refreshCode();
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
