import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-speedometer-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speedometer-playground.component.html',

  styleUrl: './speedometer-playground.component.scss',
})
export class SpeedometerPlaygroundComponent {
  pgConfig = {
    value: 65,
    min: 0,
    max: 100,
    label: 'km/h',
    size: 250,
    arcWidth: 20,
    colorMode: 'gradient',
  };

  colorModeOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Gradient', value: 'gradient' },
    { label: 'Segments', value: 'segments' },
  ];

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
    let code = '<ui-speedometer\n';
    code += `  [value]="${this.pgConfig.value}"\n`;
    code += `  [min]="${this.pgConfig.min}"\n`;
    code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  [size]="${this.pgConfig.size}"\n`;
    code += `  color-mode="${this.pgConfig.colorMode}"\n`;
    code += '></ui-speedometer>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      value: 65,
      min: 0,
      max: 100,
      label: 'km/h',
      size: 250,
      arcWidth: 20,
      colorMode: 'gradient',
    };
    this.updateConfig();
  }
}
