import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-pill-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pill-playground.component.html',

  styleUrl: './pill-playground.component.scss',
})
export class PillPlaygroundComponent {
  pgConfig = {
    label: 'Status Active',
    variant: 'soft',
    color: 'primary',
    size: 'md',
    removable: true,
    clickable: true,
    loading: false,
    counter: null,
  };

  variantOptions = [
    { label: 'Filled', value: 'filled' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Soft', value: 'soft' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Gradient', value: 'gradient' },
  ];

  colorOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-pill\n';
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.removable) code += `  removable\n`;
    if (this.pgConfig.clickable) code += `  clickable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.counter !== null) code += `  counter="${this.pgConfig.counter}"\n`;
    code += '></ui-pill>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Status Active',
      variant: 'soft',
      color: 'primary',
      size: 'md',
      removable: true,
      clickable: true,
      loading: false,
      counter: null,
    };
    this.updateConfig();
  }
}
