import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-layout-manager-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './layout-manager-playground.component.html',

  styleUrl: './layout-manager-playground.component.scss',
})
export class LayoutManagerPlaygroundComponent {
  pgConfig = {
    mode: 'docking',
    resizable: true,
    closable: true,
  };

  modeOptions = [
    { label: 'Docking', value: 'docking' },
    { label: 'Grid', value: 'grid' },
    { label: 'Flex', value: 'flex' },
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
    let code = '<ui-layout-manager\n';
    code += `  mode="${this.pgConfig.mode}"\n`;
    if (this.pgConfig.resizable) code += `  resizable\n`;
    if (this.pgConfig.closable) code += `  closable\n`;
    code += '>\n';
    code += '  <div slot="panel-1">Content 1</div>\n';
    code += '  <div slot="panel-2">Content 2</div>\n';
    code += '</ui-layout-manager>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      mode: 'docking',
      resizable: true,
      closable: true,
    };
    this.updateConfig();
  }
}
