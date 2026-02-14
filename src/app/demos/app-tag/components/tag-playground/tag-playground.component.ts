import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { CodeBlockComponent } from '../../../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-tag-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Value / Text</label>
              <app-input type="text" [(ngModel)]="pgConfig.value" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Icon</label>
              <app-input type="text" [(ngModel)]="pgConfig.icon" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Severity</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.severity"
                (change)="updateConfig()"
                [options]="severityOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Styling</h3>
            <div class="checkpoint-group">
              <app-checkbox
                id="rounded"
                [(ngModel)]="pgConfig.rounded"
                (change)="updateConfig()"
                label="Rounded Corners"
              ></app-checkbox>
            </div>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (change)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
          </div>
        </div>

        <div class="code-output">
          <app-code-block
            [code]="generatedCode()"
            title="Generated Code"
            language="html"
          ></app-code-block>
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

      <div class="playground-preview">
        <ui-tag
          [attr.value]="pgConfig.value"
          [attr.icon]="pgConfig.icon"
          [attr.severity]="pgConfig.severity"
          [attr.rounded]="pgConfig.rounded ? '' : null"
          [attr.size]="pgConfig.size"
        ></ui-tag>
      </div>
    </div>
  `,
  styleUrl: './tag-playground.component.scss',
})
export class TagPlaygroundComponent {
  pgConfig = {
    value: 'New Update',
    icon: '⚡',
    severity: 'info',
    rounded: true,
    size: 'small',
  };

  severityOptions = [
    { label: 'Info', value: 'info' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Large', value: 'large' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-tag\n';
    code += `  value="${this.pgConfig.value}"\n`;
    code += `  severity="${this.pgConfig.severity}"\n`;
    if (this.pgConfig.rounded) code += `  rounded\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    code += '></ui-tag>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      value: 'New Update',
      icon: '⚡',
      severity: 'info',
      rounded: true,
      size: 'small',
    };
    this.updateConfig();
  }
}
