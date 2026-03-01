import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-top-bar-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppPlaygroundComponent, AppCheckboxValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './top-bar-playground.component.html',
  styleUrl: './top-bar-playground.component.scss',
})
export class TopBarPlaygroundComponent {
  pgConfig = {
    logoText: 'MYPLATFORM',
    sticky: true,
    height: 64,
  };

  generatedCodeSignal = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-top-bar\n';
    if (this.pgConfig.sticky) code += `  sticky\n`;
    code += '>\n';
    code += '  <div slot="start"> Logo </div>\n';
    code += '  <div slot="end"> Actions </div>\n';
    code += '</ui-top-bar>';

    this.generatedCodeSignal.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      logoText: 'MYPLATFORM',
      sticky: true,
      height: 64,
    };
    this.updateConfig();
  }
}
