import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-badge-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './badge-playground.component.html',

  styleUrl: './badge-playground.component.scss',
})
export class BadgePlaygroundComponent {
  pgConfig = {
    value: '5',
    max: 99,
    color: 'danger',
    size: 'md',
    variant: 'standard',
    position: 'top-right',
    animation: 'none',
    dot: false,
    glow: false,
    icon: '',
  };

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  variantOptions = [
    { label: 'Standard', value: 'standard' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Soft', value: 'soft' },
  ];

  positionOptions = [
    { label: 'Top Right', value: 'top-right' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
    { label: 'Bottom Left', value: 'bottom-left' },
  ];

  animationOptions = [
    { label: 'None', value: 'none' },
    { label: 'Pulse', value: 'pulse' },
    { label: 'Bounce', value: 'bounce' },
    { label: 'Shake', value: 'shake' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-badge\n';
    if (!this.pgConfig.dot) code += `  value="${this.pgConfig.value}"\n`;
    if (this.pgConfig.max !== 99) code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  position="${this.pgConfig.position}"\n`;
    if (this.pgConfig.animation !== 'none') code += `  animation="${this.pgConfig.animation}"\n`;
    if (this.pgConfig.dot) code += `  dot\n`;
    if (this.pgConfig.glow) code += `  glow\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    code += '>\n';
    code += '  <icon>✉️</icon>\n';
    code += '</ui-badge>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      value: '5',
      max: 99,
      color: 'danger',
      size: 'md',
      variant: 'standard',
      position: 'top-right',
      animation: 'none',
      dot: false,
      glow: false,
      icon: '',
    };
    this.updateConfig();
  }
}
