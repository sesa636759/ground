import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from 'src/app/shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-horizontal-nav-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './horizontal-nav-playground.component.html',

  styleUrl: './horizontal-nav-playground.component.scss',
})
export class HorizontalNavPlaygroundComponent {
  pgConfig = {
    theme: 'light',
    sticky: true,
    showIcons: true,
  };

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  model = [
    { label: 'Home', icon: '🏠', command: () => {} },
    { label: 'Products', icon: '📦', command: () => {} },
    { label: 'Services', icon: '⚙️', command: () => {} },
    { label: 'About', icon: 'ℹ️', command: () => {} },
    { label: 'Contact', icon: '📧', command: () => {} },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-horizontal-nav\n';
    code += `  theme="${this.pgConfig.theme}"\n`;
    if (this.pgConfig.sticky) code += `  sticky\n`;
    code += `  [model]="navItems"\n`;
    code += '></ui-horizontal-nav>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      theme: 'light',
      sticky: true,
      showIcons: true,
    };
    this.updateConfig();
  }
}
