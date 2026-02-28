import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-rating-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './rating-playground.component.html',

  styleUrl: './rating-playground.component.scss',
})
export class RatingPlaygroundComponent implements OnInit {
  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

  pgConfig = {
    type: 'star',
    value: 3,
    max: 5,
    size: 'md',
    color: 'warning',
    readonly: false,
    disabled: false,
    allowHalf: false,
    showValue: true,
  };

  typeOptions = [
    { label: 'Star', value: 'star' },
    { label: 'Smiley', value: 'smiley' },
    { label: 'Thumb', value: 'thumb' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Warning', value: 'warning' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
  ];

  generatedCode = signal('');

  constructor() {}

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-rating\n';
    code += `  type="${this.pgConfig.type}"\n`;
    code += `  [value]="${this.pgConfig.value}"\n`;
    if (this.pgConfig.type !== 'thumb') code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.allowHalf && this.pgConfig.type === 'star') code += `  allow-half\n`;
    if (this.pgConfig.showValue) code += `  show-value\n`;
    code += '></ui-rating>';

    this.generatedCode.set(code);
  }

  onRatingChange(event: any) {
    this.pgConfig.value = event.detail;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      type: 'star',
      value: 3,
      max: 5,
      size: 'md',
      color: 'warning',
      readonly: false,
      disabled: false,
      allowHalf: false,
      showValue: true,
    };
    this.updateConfig();
  }
}
