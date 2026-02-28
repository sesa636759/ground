import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-aside-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aside-playground.component.html',

  styleUrl: './aside-playground.component.scss',
})
export class AsidePlaygroundComponent {
  pgConfig = {
    open: false,
    direction: 'right',
    size: '400px',
    variant: 'default',
    closeable: true,
    closeOnOverlayClick: true,
    resizable: true,
    backdropBlur: '0',
    loading: false,
  };

  directionOptions = [
    { label: 'Right', value: 'right' },
    { label: 'Left', value: 'left' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Glass', value: 'glass' },
  ];

  generatedCodeSignal = signal('');
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
    let code = '<aside-panel\n';
    code += `  [open]="isOpen"\n`;
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (!this.pgConfig.closeable) code += `  [closeable]="false"\n`;
    if (!this.pgConfig.closeOnOverlayClick) code += `  [close-on-overlay-click]="false"\n`;
    if (this.pgConfig.resizable) code += `  resizable\n`;
    if (this.pgConfig.backdropBlur !== '0')
      code += `  backdrop-blur="${this.pgConfig.backdropBlur}"\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    code += '>\n';
    code += '  <div slot="header"><h3>Header Content</h3></div>\n';
    code += '  <div slot="content">Main body content goes here...</div>\n';
    code += '  <div slot="footer">Footer actions</div>\n';
    code += '</aside-panel>';

    this.generatedCodeSignal.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      open: false,
      direction: 'right',
      size: '400px',
      variant: 'default',
      closeable: true,
      closeOnOverlayClick: true,
      resizable: true,
      backdropBlur: '0',
      loading: false,
    };
    this.updateConfig();
  }
}
