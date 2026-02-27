import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-scroll-top-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scroll-top-playground.component.html',

  styleUrl: './scroll-top-playground.component.scss',
})
export class ScrollTopPlaygroundComponent {
  pgConfig = {
    threshold: 200,
    icon: '⬆️',
    shape: 'circle',
    speed: 400,
  };

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
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
    let code = '<ui-scroll-top\n';
    code += `  target="#scroll-container"\n`;
    code += `  threshold="${this.pgConfig.threshold}"\n`;
    code += `  icon="${this.pgConfig.icon}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;
    code += '></ui-scroll-top>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      threshold: 200,
      icon: '⬆️',
      shape: 'circle',
      speed: 400,
    };
    this.updateConfig();
  }
}
