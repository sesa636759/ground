import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-tag-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tag-playground.component.html',

  styleUrl: './tag-playground.component.scss',
})
export class TagPlaygroundComponent {
  pgConfig = {
    value: 'New Update',
    icon: '⚡',
    severity: 'info',
    rounded: true,
    size: 'small',
  };

  severityOptions = [
    { label: 'Info', value: 'info' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Large', value: 'large' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-tag\n';
    code += `  value="${this.pgConfig.value}"\n`;
    code += `  severity="${this.pgConfig.severity}"\n`;
    if (this.pgConfig.rounded) code += `  rounded\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    code += '></ui-tag>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      value: 'New Update',
      icon: '⚡',
      severity: 'info',
      rounded: true,
      size: 'small',
    };
    this.updateConfig();
  }
}
