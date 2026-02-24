import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';

@Component({
  selector: 'app-range-slider-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
    
        <ui-accordion [items]="pgAccordionItems" [defaultOpen]="defaultOpen" multiple>
          <!-- Global Configuration -->
          <div slot="content-global" class="control-grid" style="padding: 16px;">
            <div class="control-group">
              <label>Min</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.min"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Max</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.max"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Step</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.step"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Orientation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.orientation"
                (ngModelChange)="updateConfig()"
                [options]="orientationOptions"
              ></ui-dropdown>
            </div>
          </div>

          <!-- Behavioral States -->
          <div slot="content-states" style="padding: 16px;">
            <div class="checkbox-grid">
              <label class="checkbox-item">
                <app-checkbox
                  [(ngModel)]="pgConfig.range"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Range Mode (Dual)
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  [(ngModel)]="pgConfig.showValue"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Show Tooltip
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
        <div class="preview-stage h-scrollable">
          <div
            class="slider-container"
            [style.height]="pgConfig.orientation === 'vertical' ? '250px' : 'auto'"
            [style.width]="'100%'"
          >
            <ui-range-slider
              [attr.min]="pgConfig.min"
              [attr.max]="pgConfig.max"
              [attr.step]="pgConfig.step"
              [attr.orientation]="pgConfig.orientation"
              [attr.range]="pgConfig.range ? '' : null"
              [attr.show-value]="pgConfig.showValue ? '' : null"
              [value]="currentValue"
              (rangeChange)="onValueChange($event)"
            ></ui-range-slider>
          </div>
          <div style="margin-top: 24px; font-weight: 600;">
            Current Value: {{ currentValue | json }}
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
  styleUrl: './range-slider-playground.component.scss',
})
export class RangeSliderPlaygroundComponent implements OnInit {
  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

  pgConfig = {
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    range: true,
    showValue: true,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  currentValue: any = [20, 80];
  generatedCode = signal('');

  constructor() {}

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-range-slider\n';
    code += `  [min]="${this.pgConfig.min}"\n`;
    code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  [step]="${this.pgConfig.step}"\n`;
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.range) code += `  range\n`;
    code += `  [value]="${JSON.stringify(this.currentValue)}"\n`;
    code += '></ui-range-slider>';

    this.generatedCode.set(code);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail.value;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      min: 0,
      max: 100,
      step: 1,
      orientation: 'horizontal',
      range: true,
      showValue: true,
    };
    this.currentValue = [20, 80];
    this.updateConfig();
  }
}
