import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-cascade-select-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './cascade-select-playground.component.html',
  styleUrl: './cascade-select-playground.component.scss',
})
export class CascadeSelectPlaygroundComponent {
  pgConfig = {
    placeholder: 'Select Location...',
    size: 'md',
    expandTrigger: 'hover',
    showFullPath: true,
    separator: ' > ',
    changeOnSelect: false,
  };

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  triggerOptions = [
    { label: 'Hover', value: 'hover' },
    { label: 'Click', value: 'click' },
  ];

  options = [
    {
      label: 'USA',
      value: 'us',
      children: [
        {
          label: 'California',
          value: 'ca',
          children: [
            { label: 'Los Angeles', value: 'la' },
            { label: 'San Francisco', value: 'sf' },
          ],
        },
        { label: 'New York', value: 'ny' },
      ],
    },
    {
      label: 'Europe',
      value: 'eu',
      children: [
        { label: 'France', value: 'fr' },
        { label: 'Germany', value: 'de' },
      ],
    },
  ];

  optionsJson = JSON.stringify(this.options);
  generatedCode = signal('');
  currentValue: any = null;

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-cascade-select\n';
    code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  expand-trigger="${this.pgConfig.expandTrigger}"\n`;
    if (!this.pgConfig.showFullPath) code += `  [show-full-path]="false"\n`;
    code += `  separator="${this.pgConfig.separator}"\n`;
    if (this.pgConfig.changeOnSelect) code += `  change-on-select\n`;
    code += `  [options]="locations"\n`;
    code += '></ui-cascade-select>';

    this.generatedCode.set(code);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      placeholder: 'Select Location...',
      size: 'md',
      expandTrigger: 'hover',
      showFullPath: true,
      separator: ' > ',
      changeOnSelect: false,
    };
    this.updateConfig();
  }
}
