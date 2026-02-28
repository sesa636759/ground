import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';

@Component({
  selector: 'app-dialog-box-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dialog-box-playground.component.html',

  styleUrl: './dialog-box-playground.component.scss',
})
export class DialogBoxPlaygroundComponent {
  pgConfig = this.getDefaultConfig();

  visible = false;
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

  sizeOptions = [
    { label: 'Custom', value: 'custom' },
    { label: 'XS (320px)', value: 'xs' },
    { label: 'SM (480px)', value: 'sm' },
    { label: 'MD (768px)', value: 'md' },
    { label: 'LG (1024px)', value: 'lg' },
    { label: 'XL (1280px)', value: 'xl' },
    { label: 'Fill (90%)', value: 'fill' },
  ];

  variantOptions = [
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
  ];

  statusOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Info', value: 'info' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Error', value: 'error' },
  ];

  backdropOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Static', value: 'static' },
    { label: 'None', value: 'none' },
  ];

  positionOptions = [
    { label: 'Center', value: 'center' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top Right', value: 'top-right' },
  ];

  menuItems = JSON.stringify([
    { label: 'Action 1', id: 'act1', icon: 'zap' },
    { label: 'Action 2', id: 'act2', icon: 'flag' },
    { type: 'separator' },
    { label: 'Close', id: 'close', icon: 'x', variant: 'danger' },
  ]);

  getDefaultConfig() {
    return {
      size: 'sm',
      variant: 'outlined',
      status: 'default',
      backdrop: 'default',
      position: 'center',
      okText: '',
      cancelText: '',
      draggable: false,
      resizable: false,
      showHeader: true,
      showFooter: true,
      showMenu: false,
      showMin: true,
      showMax: true,
      showClose: true,
    };
  }

  openDialog() {
    this.visible = true;
  }

  updateConfig() {
    let code = '<ui-dialog-box dialog-title="Dialog Title"\n';

    if (this.pgConfig.size !== 'custom') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.variant !== 'outlined') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.status !== 'default') code += `  status="${this.pgConfig.status}"\n`;
    if (this.pgConfig.backdrop !== 'default') code += `  backdrop="${this.pgConfig.backdrop}"\n`;
    if (this.pgConfig.position !== 'center') code += `  position="${this.pgConfig.position}"\n`;
    if (this.pgConfig.okText) code += `  ok-text="${this.pgConfig.okText}"\n`;
    if (this.pgConfig.cancelText) code += `  cancel-text="${this.pgConfig.cancelText}"\n`;
    if (this.pgConfig.draggable) code += `  is-draggable\n`;
    if (this.pgConfig.resizable) code += `  resizable\n`;
    if (!this.pgConfig.showHeader) code += `  show-header="false"\n`;
    if (!this.pgConfig.showFooter) code += `  show-footer="false"\n`;
    if (this.pgConfig.showMenu) code += `  show-menu="true"\n`;
    if (!this.pgConfig.showMin) code += `  show-minimize="false"\n`;
    if (!this.pgConfig.showMax) code += `  show-maximize="false"\n`;
    if (!this.pgConfig.showClose) code += `  show-close="false"\n`;

    code += '>\n';
    code += '  <div>Dialog content goes here</div>\n';

    if (!this.pgConfig.okText && !this.pgConfig.cancelText && this.pgConfig.showFooter) {
      code += '  <div slot="footer">\n    <ui-button label="Close"></ui-button>\n  </div>\n';
    }

    code += '</ui-dialog-box>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
  }
}
