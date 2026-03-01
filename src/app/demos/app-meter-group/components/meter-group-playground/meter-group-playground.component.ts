import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-meter-group-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './meter-group-playground.component.html',

  styleUrl: './meter-group-playground.component.scss',
})
export class MeterGroupPlaygroundComponent {
  pgConfig = {
    orientation: 'horizontal',
    labelOrientation: 'horizontal',
    labelPosition: 'end',
    meterHeight: '12px',
    showLabels: true,
    showMarkers: true,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  labelOrientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  labelPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  values = [
    { label: 'Apps', value: 40, color: '#3b82f6', icon: '📱' },
    { label: 'System', value: 25, color: '#ef4444', icon: '⚙️' },
    { label: 'Media', value: 15, color: '#10b981', icon: '🎬' },
    { label: 'Free', value: 20, color: '#e2e8f0', icon: '☁️' },
  ];

  valuesJson = JSON.stringify(this.values);
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
    let code = '<ui-meter-group\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    if (!this.pgConfig.showLabels) code += `  [show-labels]="false"\n`;
    code += `  [values]="storageData"\n`;
    code += '></ui-meter-group>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      labelOrientation: 'horizontal',
      labelPosition: 'end',
      meterHeight: '12px',
      showLabels: true,
      showMarkers: true,
    };
    this.updateConfig();
  }
}
