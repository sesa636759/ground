import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-switch-playground',
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
        <ui-accordion [items]="pgAccordionItems" [defaultOpen]="defaultOpen" multiple>
          <!-- Global Visuals -->
          <div slot="content-global" class="control-grid" style="padding: 16px;">
            <div class="control-group">
              <label>Label</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.label"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
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
            <div class="control-group">
              <label>Label Position</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.labelPosition"
                (change)="updateConfig()"
                [options]="labelPositionOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Icon On</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.iconOn"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Icon Off</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.iconOff"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
          </div>

          <!-- Behavioral States -->
          <div slot="content-states" style="padding: 16px;">
            <div class="checkbox-grid">
              <label class="checkbox-item">
                <app-checkbox
                  id="checked"
                  [(ngModel)]="pgConfig.checked"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Checked
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  id="disabled"
                  [(ngModel)]="pgConfig.disabled"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Disabled
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  id="loading"
                  [(ngModel)]="pgConfig.loading"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Loading
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  id="showIcons"
                  [(ngModel)]="pgConfig.showDefaultIcons"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Default Icons
              </label>
            </div>
          </div>
        </ui-accordion>

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
        <div class="preview-stage">
          <ui-switch
            #demoElement
            [attr.label]="pgConfig.label"
            [attr.checked]="pgConfig.checked ? '' : null"
            [attr.disabled]="pgConfig.disabled ? '' : null"
            [attr.loading]="pgConfig.loading ? '' : null"
            [attr.size]="pgConfig.size"
            [attr.variant]="pgConfig.variant"
            [attr.shape]="pgConfig.shape"
            [attr.label-position]="pgConfig.labelPosition"
            [attr.icon-on]="pgConfig.iconOn || null"
            [attr.icon-off]="pgConfig.iconOff || null"
            [attr.show-default-icons]="pgConfig.showDefaultIcons ? '' : null"
            (switchChange)="onSwitchChange($event)"
          ></ui-switch>
        </div>

        <ui-code-preview
          [htmlCode]="generatedCode()"
          [label]="'Generated Code'"
          activeLang="html"
          expanded="true"
        ></ui-code-preview>

        <div class="event-log-container">
          <strong>Event Log</strong>
          <div class="log-items">
            <div *ngFor="let log of eventLog" class="log-item">[{{ log.time }}] {{ log.msg }}</div>
            <div *ngIf="eventLog.length === 0" style="color: #666; font-style: italic;">
              Toggle switch to see events...
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './switch-playground.component.scss',
})
export class SwitchPlaygroundComponent implements OnInit {
  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

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

  constructor() {}

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-switch\n';
    code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.checked) code += `  checked\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.labelPosition !== 'right')
      code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    if (this.pgConfig.iconOn) code += `  icon-on="${this.pgConfig.iconOn}"\n`;
    if (this.pgConfig.iconOff) code += `  icon-off="${this.pgConfig.iconOff}"\n`;
    if (this.pgConfig.showDefaultIcons) code += `  show-default-icons\n`;
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
