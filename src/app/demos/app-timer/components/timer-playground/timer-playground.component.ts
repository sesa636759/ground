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
            <h3 class="section-title">
              <ui-icon name="cog" library="fontawesome"></ui-icon>
              Configuration
            </h3>
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
            <h3 class="section-title">
              <ui-icon name="palette" library="fontawesome"></ui-icon>
              Visuals
            </h3>
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
          <ui-code-preview
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>

        <div class="action-buttons">
          <ui-button (click)="copyCode()" variant="primary" label="Copy Implementation"></ui-button>
          <ui-button
            variant="ghost"
            (click)="resetConfig()"
            label="Reset Configuration"
          ></ui-button>
        </div>
      </div>

      <div class="playground-preview">
        <div class="timer-preview-card">
          <ui-timer
            #timer
            [duration]="pgConfig.duration"
            [mode]="pgConfig.mode"
            [format]="pgConfig.format"
            [autoStart]="pgConfig.autoStart"
          ></ui-timer>

          <div class="timer-actions">
            <ui-button
              class="action-btn"
              variant="primary"
              (click)="timer.start()"
              label="Start"
            ></ui-button>
            <ui-button
              class="action-btn"
              variant="secondary"
              (click)="timer.pause()"
              label="Pause"
            ></ui-button>
            <ui-button
              class="action-btn"
              variant="ghost"
              (click)="timer.reset()"
              label="Reset Timer"
            ></ui-button>
          </div>
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
    if (this.pgConfig.autoStart) {
      code += '  [autoStart]="true"\n';
    }
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
