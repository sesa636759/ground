import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pattern-input-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Pattern</h3>
            <div class="control-group">
              <label>Mask Pattern</label>
              <select [(ngModel)]="pgConfig.pattern" (change)="updateConfig()">
                <option value="(999) 999-9999">Phone: (999) 999-9999</option>
                <option value="99/99/9999">Date: 99/99/9999</option>
                <option value="****-****-****-****">Card: ****-****-****-****</option>
                <option value="AAA-999">Custom: AAA-999</option>
              </select>
            </div>
            <div class="control-group">
              <label>Placeholder</label>
              <input type="text" [(ngModel)]="pgConfig.placeholder" (change)="updateConfig()" />
            </div>
          </div>

          <div class="control-section">
            <h3>States</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="disabled"
                [(ngModel)]="pgConfig.disabled"
                (change)="updateConfig()"
              />
              <label for="disabled">Disabled</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="readonly"
                [(ngModel)]="pgConfig.readonly"
                (change)="updateConfig()"
              />
              <label for="readonly">Readonly</label>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <button (click)="copyCode()">Copy Code</button>
          <button class="btn-secondary" (click)="resetConfig()">Reset</button>
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
