import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiSwitchValueAccessorDirective } from '../../../../directives/ui-switch-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-switch-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    UiSwitchValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Content -->
          <div class="control-section">
            <h3>Content</h3>
            <div class="control-group">
              <label>Label</label>
              <app-input type="text" [(ngModel)]="pgConfig.label" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Icon On</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.iconOn"
                (change)="updateConfig()"
                placeholder="e.g. 🌙"
              />
            </div>
            <div class="control-group">
              <label>Icon Off</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.iconOff"
                (change)="updateConfig()"
                placeholder="e.g. ☀️"
              />
            </div>
          </div>

          <!-- Appearance -->
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (change)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (change)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Shape</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.shape"
                (change)="updateConfig()"
                [options]="shapeOptions"
              ></ui-dropdown>
            </div>

            <!-- Configuration -->
            <div class="control-section">
              <h3>Configuration</h3>
              <div class="control-group">
                <label>Label Position</label>
                <ui-dropdown
                  [(ngModel)]="pgConfig.labelPosition"
                  (change)="updateConfig()"
                  [options]="labelPositionOptions"
                ></ui-dropdown>
              </div>
              <div class="checkbox-group">
                <app-checkbox
                  id="checked"
                  [(ngModel)]="pgConfig.checked"
                  (change)="updateConfig()"
                  label="Checked"
                ></app-checkbox>
              </div>
              <div class="checkbox-group">
                <app-checkbox
                  id="disabled"
                  [(ngModel)]="pgConfig.disabled"
                  (change)="updateConfig()"
                  label="Disabled"
                ></app-checkbox>
              </div>
              <div class="checkbox-group">
                <app-checkbox
                  id="loading"
                  [(ngModel)]="pgConfig.loading"
                  (change)="updateConfig()"
                  label="Loading"
                ></app-checkbox>
              </div>
              <div class="checkbox-group">
                <app-checkbox
                  id="showIcons"
                  [(ngModel)]="pgConfig.showDefaultIcons"
                  (change)="updateConfig()"
                  label="Show Default Icons"
                ></app-checkbox>
              </div>
            </div>
          </div>

          <div class="code-output">
            <pre>{{ generatedCode() }}</pre>
          </div>

          <div class="action-buttons">
            <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
            <ui-button
              class="btn-secondary"
              variant="secondary"
              (click)="resetConfig()"
              label="Reset"
            ></ui-button>
          </div>
        </div>

        <div class="playground-preview">
          <ui-switch
            [attr.label]="pgConfig.label"
            [attr.checked]="pgConfig.checked ? '' : null"
            [attr.disabled]="pgConfig.disabled ? '' : null"
            [attr.loading]="pgConfig.loading ? '' : null"
            [attr.size]="pgConfig.size"
            [attr.variant]="pgConfig.variant"
            [attr.shape]="pgConfig.shape"
            [attr.label-position]="pgConfig.labelPosition"
            [attr.icon-on]="pgConfig.iconOn"
            [attr.icon-off]="pgConfig.iconOff"
            [attr.show-default-icons]="pgConfig.showDefaultIcons ? '' : null"
            (switchChange)="onSwitchChange($event)"
          ></ui-switch>
        </div>

        <div class="event-log">
          <div *ngFor="let log of eventLog" class="log-entry">
            <span class="timestamp">[{{ log.time }}]</span>
            <span class="message">{{ log.msg }}</span>
          </div>
          <div *ngIf="eventLog.length === 0" style="color: #666; font-style: italic;">
            Toggle switch to see events...
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './switch-playground.component.scss',
})
export class SwitchPlaygroundComponent {
  pgConfig = {
    label: 'Enable Notifications',
    checked: false,
    disabled: false,
    loading: false,
    size: 'md',
    variant: 'primary',
    shape: 'default',
    labelPosition: 'right',
    iconOn: '🔔',
    iconOff: '🔕',
    showDefaultIcons: false,
  };

  variantOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  sizeOptions = [
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra Large', value: 'xl' },
  ];

  shapeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Pill', value: 'pill' },
    { label: 'Square', value: 'square' },
  ];

  labelPositionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  generatedCode = signal('');
  eventLog: { time: string; msg: string }[] = [];

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-switch\n';
    code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.checked) code += `  checked\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.labelPosition !== 'right')
      code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    if (this.pgConfig.iconOn) code += `  icon-on="${this.pgConfig.iconOn}"\n`;
    if (this.pgConfig.iconOff) code += `  icon-off="${this.pgConfig.iconOff}"\n`;
    code += '></ui-switch>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Enable Notifications',
      checked: false,
      disabled: false,
      loading: false,
      size: 'md',
      variant: 'primary',
      shape: 'default',
      labelPosition: 'right',
      iconOn: '🔔',
      iconOff: '🔕',
      showDefaultIcons: false,
    };
    this.updateConfig();
    this.eventLog = [];
  }

  onSwitchChange(event: any) {
    const isChecked = event.detail.checked;
    this.pgConfig.checked = isChecked;
    this.updateConfig();

    const time = new Date().toLocaleTimeString();
    this.eventLog.unshift({ time, msg: `Switch value: ${isChecked}` });
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}
