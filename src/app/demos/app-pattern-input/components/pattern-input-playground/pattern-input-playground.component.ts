import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-pattern-input-playground',
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
        <div class="control-grid">
          <div class="control-section">
            <h3>Pattern</h3>
            <div class="control-group">
              <label>Mask Pattern</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.pattern"
                (change)="updateConfig()"
                [options]="patternOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Placeholder</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.placeholder"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
          </div>

          <div class="control-section">
            <h3>States</h3>
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
                id="readonly"
                [(ngModel)]="pgConfig.readonly"
                (change)="updateConfig()"
                label="Readonly"
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
        <ui-pattern-input
          [attr.mask]="pgConfig.pattern"
          [attr.placeholder]="pgConfig.placeholder"
          [attr.disabled]="pgConfig.disabled ? '' : null"
          [attr.readonly]="pgConfig.readonly ? '' : null"
        ></ui-pattern-input>
      </div>
    </div>
  `,
  styleUrl: './pattern-input-playground.component.scss',
})
export class PatternInputPlaygroundComponent {
  pgConfig = {
    pattern: '(999) 999-9999',
    placeholder: 'Enter phone number',
    disabled: false,
    readonly: false,
  };

  patternOptions = [
    { label: 'Phone: (999) 999-9999', value: '(999) 999-9999' },
    { label: 'Date: 99/99/9999', value: '99/99/9999' },
    { label: 'Card: ****-****-****-****', value: '****-****-****-****' },
    { label: 'Custom: AAA-999', value: 'AAA-999' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-pattern-input\n';
    code += `  mask="${this.pgConfig.pattern}"\n`;
    code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    code += '></ui-pattern-input>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      pattern: '(999) 999-9999',
      placeholder: 'Enter phone number',
      disabled: false,
      readonly: false,
    };
    this.updateConfig();
  }
}
