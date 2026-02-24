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
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
    <ui-accordion items='[{"id":"config","title":"Configuration","icon":"⚙️"}]' defaultOpen='["config"]' multiple>
      <div slot="content-config">
        <div class="control-grid">
          <!-- Appearance Settings -->
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (ngModelChange)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (ngModelChange)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Status</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.status"
                (ngModelChange)="updateConfig()"
                [options]="statusOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>OK Button Text</label>
              <app-input
                [(ngModel)]="pgConfig.okText"
                (ngModelChange)="updateConfig()"
                placeholder="e.g. Save"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Cancel Button Text</label>
              <app-input
                [(ngModel)]="pgConfig.cancelText"
                (ngModelChange)="updateConfig()"
                placeholder="e.g. Cancel"
              ></app-input>
            </div>
          </div>

          <!-- Behavior & Position -->
          <div class="control-section">
            <h3>Behavior</h3>
            <div class="control-group">
              <label>Backdrop</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.backdrop"
                (ngModelChange)="updateConfig()"
                [options]="backdropOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Position</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.position"
                (ngModelChange)="updateConfig()"
                [options]="positionOptions"
              ></ui-dropdown>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.draggable"
                (ngModelChange)="updateConfig()"
                label="Draggable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.resizable"
                (ngModelChange)="updateConfig()"
                label="Resizable"
              ></app-checkbox>
            </div>
          </div>

          <!-- Toggles -->
          <div class="control-section">
            <h3>Toggles</h3>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.showHeader"
                (ngModelChange)="updateConfig()"
                label="Show Header"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.showFooter"
                (ngModelChange)="updateConfig()"
                label="Show Footer"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.showMenu"
                (ngModelChange)="updateConfig()"
                label="Show Menu"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.showMin"
                (ngModelChange)="updateConfig()"
                label="Show Minimize"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.showMax"
                (ngModelChange)="updateConfig()"
                label="Show Maximize"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                [(ngModel)]="pgConfig.showClose"
                (ngModelChange)="updateConfig()"
                label="Show Close"
              ></app-checkbox>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <ui-button variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
        </div>
            </div>
    </ui-accordion>
  </div>

  <div class="playground-preview">
        <ui-button (click)="openDialog()" label="Test Dialog"></ui-button>

        <ui-dialog-box
          dialog-title="Playground Dialog"
          icon-library="lucide"
          [size]="pgConfig.size !== 'custom' ? pgConfig.size : 'custom'"
          [variant]="pgConfig.variant"
          [status]="pgConfig.status"
          [backdrop]="pgConfig.backdrop"
          [position]="pgConfig.position"
          [okText]="pgConfig.okText || null"
          [cancelText]="pgConfig.cancelText || null"
          [is-draggable]="pgConfig.draggable"
          [resizable]="pgConfig.resizable"
          [showHeader]="pgConfig.showHeader"
          [showFooter]="pgConfig.showFooter"
          [showMenu]="pgConfig.showMenu"
          [showMinimize]="pgConfig.showMin"
          [showMaximize]="pgConfig.showMax"
          [showClose]="pgConfig.showClose"
          [menuItems]="pgConfig.showMenu ? menuItems : []"
          [open]="visible"
          (dialogClosed)="visible = false"
        >
          <div style="padding: 20px;">
            <p>
              This is the content of the dialog. Interact with the controls on the left to see
              changes in real-time.
            </p>
            <p *ngIf="pgConfig.size !== 'custom'">
              Current size limit: <strong>{{ pgConfig.size | uppercase }}</strong>
            </p>
          </div>
          <div slot="footer" *ngIf="!pgConfig.okText && !pgConfig.cancelText">
            <ui-button
              label="Close (Slot Fallback)"
              variant="secondary"
              (click)="visible = false"
            ></ui-button>
          </div>
        </ui-dialog-box>

        
      
      <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
    </div>
    </div>
  `,
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
