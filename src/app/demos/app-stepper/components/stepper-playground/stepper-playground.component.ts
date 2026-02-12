import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stepper-playground',
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
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (change)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (change)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Options</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="showNumbers"
                [(ngModel)]="pgConfig.showNumbers"
                (change)="updateConfig()"
                label="Show Numbers"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showDesc"
                [(ngModel)]="pgConfig.showDescriptions"
                (change)="updateConfig()"
                label="Show Descriptions"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="dot"
                [(ngModel)]="pgConfig.progressDot"
                (change)="updateConfig()"
                label="Progress Dot"
              ></app-checkbox>
            </div>
            <div class="control-group">
              <label>Active Step</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.activeStep"
                [min]="0"
                [max]="3"
                (ngModelChange)="updateConfig()"
              ></app-input>
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
        <ui-stepper
          [attr.orientation]="pgConfig.orientation"
          [attr.size]="pgConfig.size"
          [attr.variant]="pgConfig.variant"
          [attr.active-step]="pgConfig.activeStep"
          [attr.show-numbers]="pgConfig.showNumbers ? '' : null"
          [attr.show-descriptions]="pgConfig.showDescriptions ? '' : null"
          [attr.progress-dot]="pgConfig.progressDot ? '' : null"
          [steps]="stepsJson"
          (stepperChange)="onStepChange($event)"
        ></ui-stepper>

        <div class="step-content-preview">
          <h3>{{ steps[pgConfig.activeStep].label }}</h3>
          <p>{{ steps[pgConfig.activeStep].description }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './stepper-playground.component.scss',
})
export class StepperPlaygroundComponent {
  pgConfig = {
    orientation: 'horizontal',
    size: 'md',
    variant: 'default',
    activeStep: 1,
    showNumbers: true,
    showDescriptions: true,
    progressDot: false,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Modern', value: 'modern' },
  ];

  steps = [
    { id: '1', label: 'Identity', description: 'Verify your personal details' },
    { id: '2', label: 'Security', description: 'Setup 2FA and passwords' },
    { id: '3', label: 'Preferences', description: 'Choose your theme and language' },
    { id: '4', label: 'Finish', description: 'You are all set to go!' },
  ];

  stepsJson = JSON.stringify(this.steps);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-stepper\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  [active-step]="${this.pgConfig.activeStep}"\n`;
    if (!this.pgConfig.showNumbers) code += `  [show-numbers]="false"\n`;
    if (this.pgConfig.showDescriptions) code += `  show-descriptions\n`;
    if (this.pgConfig.progressDot) code += `  progress-dot\n`;
    code += `  [steps]="steps"\n`;
    code += '></ui-stepper>';

    this.generatedCode.set(code);
  }

  onStepChange(event: any) {
    this.pgConfig.activeStep = event.detail.index;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      size: 'md',
      variant: 'default',
      activeStep: 1,
      showNumbers: true,
      showDescriptions: true,
      progressDot: false,
    };
    this.updateConfig();
  }
}
