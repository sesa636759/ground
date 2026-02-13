import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-smart-stepper-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Layout</h3>
            <div class="control-group">
              <label>Orientation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.orientation"
                (change)="updateConfig()"
                [options]="orientationOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Theme</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.theme"
                (change)="updateConfig()"
                [options]="themeOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="showIcons"
                [(ngModel)]="pgConfig.showIcons"
                (change)="updateConfig()"
                label="Show Icons"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="allowBranching"
                [(ngModel)]="pgConfig.allowBranching"
                (change)="updateConfig()"
                label="Allow Branching"
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
        <div class="stepper-container">
          <ui-smart-stepper
            [attr.orientation]="pgConfig.orientation"
            [attr.theme]="pgConfig.theme"
            [attr.show-icons]="pgConfig.showIcons ? '' : null"
            [value]="currentStep"
            (valueChange)="onStepChange($event)"
          >
            <ui-smart-step label="Profile" icon="👤" value="1">
              <div style="padding: 24px;">
                <h4>Profile Setup</h4>
                <p>Enter your basic account information.</p>
                <ui-button
                  class="variant-btn"
                  (click)="currentStep = '2'"
                  label="Next Step"
                ></ui-button>
              </div>
            </ui-smart-step>
            <ui-smart-step label="Verify" icon="🛡️" value="2">
              <div style="padding: 24px;">
                <h4>Identity Verification</h4>
                <p>Protect your account with multi-factor authentication.</p>
                <ui-button
                  class="variant-btn btn-secondary"
                  variant="secondary"
                  (click)="currentStep = '1'"
                  label="Back"
                ></ui-button>
                <ui-button
                  class="variant-btn"
                  style="margin-left: 12px;"
                  (click)="currentStep = '3'"
                  label="Next Step"
                ></ui-button>
              </div>
            </ui-smart-step>
            <ui-smart-step label="Finish" icon="✅" value="3">
              <div style="padding: 24px;">
                <h4>All Done!</h4>
                <p>Your account is ready to use.</p>
                <ui-button
                  class="variant-btn btn-secondary"
                  variant="secondary"
                  (click)="currentStep = '2'"
                  label="Back"
                ></ui-button>
              </div>
            </ui-smart-step>
          </ui-smart-stepper>
        </div>
      </div>
    </div>
  `,
  styleUrl: './smart-stepper-playground.component.scss',
})
export class SmartStepperPlaygroundComponent {
  pgConfig = {
    orientation: 'horizontal',
    theme: 'default',
    showIcons: true,
    allowBranching: false,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  themeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Compact', value: 'compact' },
  ];

  currentStep = '1';
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-smart-stepper\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  theme="${this.pgConfig.theme}"\n`;
    code += '>\n';
    code += '  <ui-smart-step label="Step 1" value="1"> Content </ui-smart-step>\n';
    code += '  <ui-smart-step label="Step 2" value="2"> Content </ui-smart-step>\n';
    code += '</ui-smart-stepper>';

    this.generatedCode.set(code);
  }

  onStepChange(event: any) {
    this.currentStep = event.detail.value;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      theme: 'default',
      showIcons: true,
      allowBranching: false,
    };
    this.updateConfig();
  }
}
