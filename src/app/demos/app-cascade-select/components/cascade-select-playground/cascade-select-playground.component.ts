import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-cascade-select-playground',
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
            <h3>Basic Config</h3>
            <div class="control-group">
              <label>Placeholder</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.placeholder"
                (ngModelChange)="updateConfig()"
              />
            </div>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (ngModelChange)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Expand Trigger</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.expandTrigger"
                (ngModelChange)="updateConfig()"
                [options]="triggerOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Path Settings</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="fullpath"
                [(ngModel)]="pgConfig.showFullPath"
                (ngModelChange)="updateConfig()"
                label="Show Full Path"
              ></app-checkbox>
            </div>
            <div class="control-group">
              <label>Separator</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.separator"
                (ngModelChange)="updateConfig()"
              />
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="changeonselect"
                [(ngModel)]="pgConfig.changeOnSelect"
                (ngModelChange)="updateConfig()"
                label="Change On Select (Any Level)"
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
        <ui-cascade-select
          [attr.placeholder]="pgConfig.placeholder"
          [attr.size]="pgConfig.size"
          [attr.expand-trigger]="pgConfig.expandTrigger"
          [attr.show-full-path]="pgConfig.showFullPath ? '' : null"
          [attr.separator]="pgConfig.separator"
          [attr.change-on-select]="pgConfig.changeOnSelect ? '' : null"
          [options]="optionsJson"
          (cascadeChange)="onValueChange($event)"
        ></ui-cascade-select>

        <div
          *ngIf="currentValue"
          style="margin-top: 40px; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-family: monospace; font-size: 0.8rem;"
        >
          Selection Value: {{ currentValue | json }}
        </div>

        
      
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
  styleUrl: './cascade-select-playground.component.scss',
})
export class CascadeSelectPlaygroundComponent {
  pgConfig = {
    placeholder: 'Select Location...',
    size: 'md',
    expandTrigger: 'hover',
    showFullPath: true,
    separator: ' > ',
    changeOnSelect: false,
  };

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  triggerOptions = [
    { label: 'Hover', value: 'hover' },
    { label: 'Click', value: 'click' },
  ];

  options = [
    {
      label: 'USA',
      value: 'us',
      children: [
        {
          label: 'California',
          value: 'ca',
          children: [
            { label: 'Los Angeles', value: 'la' },
            { label: 'San Francisco', value: 'sf' },
          ],
        },
        { label: 'New York', value: 'ny' },
      ],
    },
    {
      label: 'Europe',
      value: 'eu',
      children: [
        { label: 'France', value: 'fr' },
        { label: 'Germany', value: 'de' },
      ],
    },
  ];

  optionsJson = JSON.stringify(this.options);
  generatedCode = signal('');
  currentValue: any = null;

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-cascade-select\n';
    code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  expand-trigger="${this.pgConfig.expandTrigger}"\n`;
    if (!this.pgConfig.showFullPath) code += `  [show-full-path]="false"\n`;
    code += `  separator="${this.pgConfig.separator}"\n`;
    if (this.pgConfig.changeOnSelect) code += `  change-on-select\n`;
    code += `  [options]="locations"\n`;
    code += '></ui-cascade-select>';

    this.generatedCode.set(code);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      placeholder: 'Select Location...',
      size: 'md',
      expandTrigger: 'hover',
      showFullPath: true,
      separator: ' > ',
      changeOnSelect: false,
    };
    this.updateConfig();
  }
}
