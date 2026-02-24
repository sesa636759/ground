import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-pill-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
    <ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">
      <div slot="content-config">
        <div class="control-grid">
          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Label</label>
              <input type="text" [(ngModel)]="pgConfig.label" (ngModelChange)="updateConfig()" />
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
              <label>Color</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.color"
                (ngModelChange)="updateConfig()"
                [options]="colorOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (ngModelChange)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="removable"
                [(ngModel)]="pgConfig.removable"
                (ngModelChange)="updateConfig()"
                label="Removable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="clickable"
                [(ngModel)]="pgConfig.clickable"
                (ngModelChange)="updateConfig()"
                label="Clickable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="loading"
                [(ngModel)]="pgConfig.loading"
                (ngModelChange)="updateConfig()"
                label="Loading"
              ></app-checkbox>
            </div>
            <div class="control-group">
              <label>Counter</label>
              <app-input type="number" [(ngModel)]="pgConfig.counter" (ngModelChange)="updateConfig()" ></app-input>
            </div>
          </div>
        </div>

        

        <div class="action-buttons">
          <ui-button
            class="btn-secondary"
            variant="secondary"
            (click)="resetConfig()"
            label="Reset"
          ></ui-button>
        </div>
            </div>
    </ui-accordion>
  </div>

  <div class="playground-preview">
        <ui-pill
          [attr.label]="pgConfig.label"
          [attr.variant]="pgConfig.variant"
          [attr.color]="pgConfig.color"
          [attr.size]="pgConfig.size"
          [attr.removable]="pgConfig.removable ? '' : null"
          [attr.clickable]="pgConfig.clickable ? '' : null"
          [attr.loading]="pgConfig.loading ? '' : null"
          [attr.counter]="pgConfig.counter"
          icon="🏷️"
        ></ui-pill>
      
      <div class="code-output">
          <ui-code-preview
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
    </div>
    </div>
  `,
  styleUrl: './pill-playground.component.scss',
})
export class PillPlaygroundComponent {
  pgConfig = {
    label: 'Status Active',
    variant: 'soft',
    color: 'primary',
    size: 'md',
    removable: true,
    clickable: true,
    loading: false,
    counter: null,
  };

  variantOptions = [
    { label: 'Filled', value: 'filled' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Soft', value: 'soft' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Gradient', value: 'gradient' },
  ];

  colorOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-pill\n';
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.removable) code += `  removable\n`;
    if (this.pgConfig.clickable) code += `  clickable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.counter !== null) code += `  counter="${this.pgConfig.counter}"\n`;
    code += '></ui-pill>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Status Active',
      variant: 'soft',
      color: 'primary',
      size: 'md',
      removable: true,
      clickable: true,
      loading: false,
      counter: null,
    };
    this.updateConfig();
  }
}
