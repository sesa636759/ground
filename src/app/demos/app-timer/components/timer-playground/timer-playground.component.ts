import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-timer-playground',
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
              <label>Initial Duration (s)</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.duration"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Mode</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.mode"
                (change)="updateConfig()"
                [options]="modeOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Format</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.format"
                (change)="updateConfig()"
                [options]="formatOptions"
              ></ui-dropdown>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="autoStart"
                [(ngModel)]="pgConfig.autoStart"
                (change)="updateConfig()"
                label="Auto Start"
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
        <ui-timer
          #timer
          [attr.duration]="pgConfig.duration"
          [attr.mode]="pgConfig.mode"
          [attr.format]="pgConfig.format"
          [attr.auto-start]="pgConfig.autoStart ? '' : null"
        ></ui-timer>

        <div style="display: flex; gap: 12px; margin-top: 24px;">
          <ui-button class="variant-btn" (click)="timer['start']()" label="Start"></ui-button>
          <ui-button
            class="variant-btn btn-secondary"
            variant="secondary"
            (click)="timer['pause']()"
            label="Pause"
          ></ui-button>
          <ui-button
            class="variant-btn btn-secondary"
            variant="secondary"
            (click)="timer['reset']()"
            label="Reset"
          ></ui-button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './timer-playground.component.scss',
})
export class TimerPlaygroundComponent {
  pgConfig = {
    duration: 60,
    mode: 'countdown',
    format: 'mm:ss',
    autoStart: false,
  };

  modeOptions = [
    { label: 'Countdown', value: 'countdown' },
    { label: 'Stopwatch', value: 'stopwatch' },
  ];

  formatOptions = [
    { label: 'HH:mm:ss', value: 'HH:mm:ss' },
    { label: 'mm:ss', value: 'mm:ss' },
    { label: 'ss', value: 'ss' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-timer\n';
    code += `  [duration]="${this.pgConfig.duration}"\n`;
    code += `  mode="${this.pgConfig.mode}"\n`;
    code += `  format="${this.pgConfig.format}"\n`;
    code += '></ui-timer>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      duration: 60,
      mode: 'countdown',
      format: 'mm:ss',
      autoStart: false,
    };
    this.updateConfig();
  }
}
