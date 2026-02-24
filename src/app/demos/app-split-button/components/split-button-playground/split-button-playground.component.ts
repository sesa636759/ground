import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-split-button-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion
          items='[{"id":"config","title":"Configuration","icon":"⚙️"}]'
          defaultOpen='["config"]'
          multiple
        >
          <div slot="content-config">
            <div class="control-grid">
              <div class="control-section">
                <h3>Basic Config</h3>
                <div class="control-group">
                  <label>Label</label>
                  <app-input
                    type="text"
                    [(ngModel)]="pgConfig.label"
                    (ngModelChange)="updateConfig()"
                  ></app-input>
                </div>
                <div class="control-group">
                  <label>Icon (Home/Save/etc)</label>
                  <app-input
                    type="text"
                    [(ngModel)]="pgConfig.icon"
                    (ngModelChange)="updateConfig()"
                  ></app-input>
                </div>
                <div class="control-group">
                  <label>Variant</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.variant"
                    (ngModelChange)="updateConfig()"
                    [options]="variantOptions"
                  ></ui-dropdown>
                </div>
              </div>

              <div class="control-section">
                <h3>Behavior</h3>
                <div class="control-group">
                  <label>Size</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.size"
                    (ngModelChange)="updateConfig()"
                    [options]="sizeOptions"
                  ></ui-dropdown>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="disabled"
                    [(ngModel)]="pgConfig.disabled"
                    (ngModelChange)="updateConfig()"
                    label="Disabled"
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
              </div>
            </div>

            <div class="code-output">
              <pre>{{ generatedCode() }}</pre>
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
        <ui-split-button
          [attr.label]="pgConfig.label"
          [attr.icon]="pgConfig.icon"
          [attr.variant]="pgConfig.variant"
          [attr.size]="pgConfig.size"
          [attr.disabled]="pgConfig.disabled ? '' : null"
          [attr.loading]="pgConfig.loading ? '' : null"
          [model]="modelJson"
          (uiClick)="onPrimaryClick()"
        ></ui-split-button>

        <div
          *ngIf="lastAction"
          style="margin-top: 20px; color: var(--text-secondary); font-size: 0.9rem;"
        >
          Last Action: <strong>{{ lastAction }}</strong>
        </div>
      </div>
    </div>
  `,
  styleUrl: './split-button-playground.component.scss',
})
export class SplitButtonPlaygroundComponent {
  pgConfig = {
    label: 'Save Changes',
    icon: '💾',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  };

  variantOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Outline', value: 'outline' },
    { label: 'Ghost', value: 'ghost' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  model = [
    { label: 'Save and Exit', icon: '🚪', command: () => this.logAction('Save and Exit') },
    { label: 'Save as Draft', icon: '📝', command: () => this.logAction('Save as Draft') },
    { separator: true },
    { label: 'Discard', icon: '🗑️', command: () => this.logAction('Discard') },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');
  lastAction = '';

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-split-button\n';
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  [model]="menuItems"\n`;
    code += '></ui-split-button>';

    this.generatedCode.set(code);
  }

  onPrimaryClick() {
    this.logAction('Primary: ' + this.pgConfig.label);
  }

  logAction(action: string) {
    this.lastAction = action;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Save Changes',
      icon: '💾',
      variant: 'primary',
      size: 'md',
      disabled: false,
      loading: false,
    };
    this.updateConfig();
  }
}
