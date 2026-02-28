import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';


@Component({
  selector: 'app-knob-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './knob-playground.component.html',

  styleUrl: './knob-playground.component.scss',
})
export class KnobPlaygroundComponent {
  pgConfig = {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    size: 150,
    strokeWidth: 10,
    valueColor: '#3b82f6',
    readonly: false,
    showValue: true,
  };

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
    let code = '<ui-knob\n';
    code += `  [value]="${this.pgConfig.value}"\n`;
    code += `  [min]="${this.pgConfig.min}"\n`;
    code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  [size]="${this.pgConfig.size}"\n`;
    code += `  value-color="${this.pgConfig.valueColor}"\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (!this.pgConfig.showValue) code += `  [show-value]="false"\n`;
    code += '></ui-knob>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onValueChange(event: any) {
    this.pgConfig.value = event.detail.value;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 150,
      strokeWidth: 10,
      valueColor: '#3b82f6',
      readonly: false,
      showValue: true,
    };
    this.updateConfig();
  }
}
