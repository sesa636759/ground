import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';

@Component({
  selector: 'app-range-slider-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './range-slider-playground.component.html',

  styleUrl: './range-slider-playground.component.scss',
})
export class RangeSliderPlaygroundComponent implements OnInit {
  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

  pgConfig = {
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    range: true,
    showValue: true,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  currentValue: any = [20, 80];
  generatedCode = signal('');

  constructor() {}

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-range-slider\n';
    code += `  [min]="${this.pgConfig.min}"\n`;
    code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  [step]="${this.pgConfig.step}"\n`;
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.range) code += `  range\n`;
    code += `  [value]="${JSON.stringify(this.currentValue)}"\n`;
    code += '></ui-range-slider>';

    this.generatedCode.set(code);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail.value;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      min: 0,
      max: 100,
      step: 1,
      orientation: 'horizontal',
      range: true,
      showValue: true,
    };
    this.currentValue = [20, 80];
    this.updateConfig();
  }
}
