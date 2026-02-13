import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-button-group-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Configuration</h3>
            <div class="control-group">
              <label>Orientation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.orientation"
                (change)="updateConfig()"
                [options]="orientationOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Selection Mode</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.selectionMode"
                (change)="updateConfig()"
                [options]="selectionModeOptions"
              ></ui-dropdown>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="attached"
                [(ngModel)]="pgConfig.attached"
                (change)="updateConfig()"
                label="Attached"
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
        <ui-button-group
          [attr.orientation]="pgConfig.orientation"
          [attr.selection-mode]="pgConfig.selectionMode"
          [attr.attached]="pgConfig.attached ? '' : null"
          (valueChange)="onValueChange($event)"
        >
          <ui-button label="Left" variant="outline"></ui-button>
          <ui-button label="Center" variant="outline"></ui-button>
          <ui-button label="Right" variant="outline"></ui-button>
        </ui-button-group>

        <div
          *ngIf="pgConfig.selectionMode !== 'none'"
          style="margin-top: 16px; font-size: 0.85rem; color: var(--text-secondary);"
        >
          Selected: {{ currentValue | json }}
        </div>
      </div>
    </div>
  `,
  styleUrl: './button-group-playground.component.scss',
})
export class ButtonGroupPlaygroundComponent {
  pgConfig = {
    orientation: 'horizontal',
    selectionMode: 'single',
    attached: true,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  selectionModeOptions = [
    { label: 'None', value: 'none' },
    { label: 'Single', value: 'single' },
    { label: 'Multiple', value: 'multiple' },
  ];

  generatedCode = signal('');
  currentValue: any = null;

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-button-group\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  selection-mode="${this.pgConfig.selectionMode}"\n`;
    if (!this.pgConfig.attached) code += `  [attached]="false"\n`;
    code += '>\n';
    code += '  <ui-button label="Left" variant="outline"></ui-button>\n';
    code += '  <ui-button label="Center" variant="outline"></ui-button>\n';
    code += '  <ui-button label="Right" variant="outline"></ui-button>\n';
    code += '</ui-button-group>';

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
      orientation: 'horizontal',
      selectionMode: 'single',
      attached: true,
    };
    this.updateConfig();
  }
}
