import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-nav-bar-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nav-bar-playground.component.html',

  styleUrl: './nav-bar-playground.component.scss',
})
export class NavBarPlaygroundComponent {
  pgConfig = {
    theme: 'light',
    collapsed: false,
    showFooter: true,
  };

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  model = [
    { label: 'Dashboard', icon: '📊', items: [] },
    {
      label: 'Users',
      icon: '👥',
      items: [
        { label: 'List', icon: '📝' },
        { label: 'Groups', icon: '📁' },
      ],
    },
    { label: 'Settings', icon: '⚙️', items: [] },
    { label: 'Help', icon: '❓', items: [] },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-nav-bar\n';
    code += `  theme="${this.pgConfig.theme}"\n`;
    if (this.pgConfig.collapsed) code += `  collapsed\n`;
    code += `  [model]="navItems"\n`;
    code += '>\n';
    code += '  <div slot="header"> Logo </div>\n';
    code += '</ui-nav-bar>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      theme: 'light',
      collapsed: false,
      showFooter: true,
    };
    this.updateConfig();
  }
}
