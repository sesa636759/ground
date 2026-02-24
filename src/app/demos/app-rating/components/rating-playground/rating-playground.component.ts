import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-rating-playground',
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
    <ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">
      <div slot="content-config">
        <ui-accordion [items]="pgAccordionItems" [defaultOpen]="defaultOpen" multiple>
          <!-- Global Configuration -->
          <div slot="content-global" class="control-grid" style="padding: 16px;">
            <div class="control-group">
              <label>Type</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.type"
                (ngModelChange)="updateConfig()"
                [options]="typeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Value</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.value"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Max (Stars/Smiley)</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.max"
                (ngModelChange)="updateConfig()"
              ></app-input>
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
              <label>Color</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.color"
                (ngModelChange)="updateConfig()"
                [options]="colorOptions"
              ></ui-dropdown>
            </div>
          </div>

          <!-- Behavioral States -->
          <div slot="content-states" style="padding: 16px;">
            <div class="checkbox-grid">
              <label class="checkbox-item">
                <app-checkbox
                  [(ngModel)]="pgConfig.allowHalf"
                  (ngModelChange)="updateConfig()"
                  [disabled]="pgConfig.type !== 'star'"
                ></app-checkbox>
                Allow Half
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  [(ngModel)]="pgConfig.showValue"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Show Text
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  [(ngModel)]="pgConfig.readonly"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Read-Only
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  [(ngModel)]="pgConfig.disabled"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Disabled
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
    </ui-accordion>
  </div>

  <div class="playground-preview">
        <div class="preview-stage h-scrollable">
          <ui-rating
            [attr.type]="pgConfig.type"
            [attr.value]="pgConfig.value"
            [attr.max]="pgConfig.max"
            [attr.size]="pgConfig.size"
            [attr.color]="pgConfig.color"
            [attr.readonly]="pgConfig.readonly ? '' : null"
            [attr.disabled]="pgConfig.disabled ? '' : null"
            [attr.allow-half]="pgConfig.allowHalf ? '' : null"
            [attr.show-value]="pgConfig.showValue ? '' : null"
            (ratingChange)="onRatingChange($event)"
          ></ui-rating>
          <div class="rating-display" style="margin-top: 24px; font-weight: 600;">
            Current Value: {{ pgConfig.value }}
          </div>
        </div>

        
      
      <ui-code-preview
          [htmlCode]="generatedCode()"
          [label]="'Generated Code'"
          activeLang="html"
          expanded="true"
        ></ui-code-preview>
    </div>
    </div>
  `,
  styleUrl: './rating-playground.component.scss',
})
export class RatingPlaygroundComponent implements OnInit {
  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

  pgConfig = {
    type: 'star',
    value: 3,
    max: 5,
    size: 'md',
    color: 'warning',
    readonly: false,
    disabled: false,
    allowHalf: false,
    showValue: true,
  };

  typeOptions = [
    { label: 'Star', value: 'star' },
    { label: 'Smiley', value: 'smiley' },
    { label: 'Thumb', value: 'thumb' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Warning', value: 'warning' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
  ];

  generatedCode = signal('');

  constructor() {}

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-rating\n';
    code += `  type="${this.pgConfig.type}"\n`;
    code += `  [value]="${this.pgConfig.value}"\n`;
    if (this.pgConfig.type !== 'thumb') code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.allowHalf && this.pgConfig.type === 'star') code += `  allow-half\n`;
    if (this.pgConfig.showValue) code += `  show-value\n`;
    code += '></ui-rating>';

    this.generatedCode.set(code);
  }

  onRatingChange(event: any) {
    this.pgConfig.value = event.detail;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      type: 'star',
      value: 3,
      max: 5,
      size: 'md',
      color: 'warning',
      readonly: false,
      disabled: false,
      allowHalf: false,
      showValue: true,
    };
    this.updateConfig();
  }
}
