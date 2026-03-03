import { AppCheckboxValueAccessorDirective } from 'src/app/directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from 'src/app/directives/ui-dropdown-value-accessor.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-tabs-playground',
  standalone: true,
  imports: [
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,CommonModule, FormsModule, AppPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tabs-playground.component.html',

  styleUrl: './tabs-playground.component.scss',
})
export class TabsPlaygroundComponent {
  pgConfig = {
    orientation: 'horizontal',
    align: 'start',
    variant: 'default',
    scrollable: false,
    closeable: false,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  alignOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Justify', value: 'justify' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Pills', value: 'pills' },
    { label: 'Underline', value: 'underline' },
    { label: 'Enclosed', value: 'enclosed' },
  ];

  currentTab = 'overview';
  generatedCodeSignal = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-tabs\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.scrollable) code += `  scrollable\n`;
    code += '>\n';
    code += '  <ui-tab label="Overview" value="overview"> Content 1 </ui-tab>\n';
    code += '  <ui-tab label="Settings" value="settings"> Content 2 </ui-tab>\n';
    code += '</ui-tabs>';

    this.generatedCodeSignal.set(code);
  }

  onTabChange(event: any) {
    this.currentTab = event.detail.value;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      align: 'start',
      variant: 'default',
      scrollable: false,
      closeable: false,
    };
    this.updateConfig();
  }
}

