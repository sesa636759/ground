import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-avatar-group-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, UiDropdownValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-group-playground.component.html',

  styleUrl: './avatar-group-playground.component.scss',
})
export class AvatarGroupPlaygroundComponent {
  pgConfig = {
    size: 'medium',
    max: 3,
    shape: 'circle',
  };

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code =
      '<ui-avatar-group size="' + this.pgConfig.size + '" [max]="' + this.pgConfig.max + '">\n';
    code += '  <ui-avatar label="JD"></ui-avatar>\n';
    code += '  <ui-avatar label="AB"></ui-avatar>\n';
    code += '  <ui-avatar label="CD"></ui-avatar>\n';
    code += '</ui-avatar-group>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      size: 'medium',
      max: 3,
      shape: 'circle',
    };
    this.updateConfig();
  }
}
