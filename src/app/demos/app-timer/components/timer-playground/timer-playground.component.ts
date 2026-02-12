import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
              <input type="number" [(ngModel)]="pgConfig.duration" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Mode</label>
              <select [(ngModel)]="pgConfig.mode" (change)="updateConfig()">
                <option value="countdown">Countdown</option>
                <option value="stopwatch">Stopwatch</option>
              </select>
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Format</label>
              <select [(ngModel)]="pgConfig.format" (change)="updateConfig()">
                <option value="HH:mm:ss">HH:mm:ss</option>
                <option value="mm:ss">mm:ss</option>
                <option value="ss">ss</option>
              </select>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="autoStart"
                [(ngModel)]="pgConfig.autoStart"
                (change)="updateConfig()"
              />
              <label for="autoStart">Auto Start</label>
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
        <ui-timer
          #timer
          [attr.duration]="pgConfig.duration"
          [attr.mode]="pgConfig.mode"
          [attr.format]="pgConfig.format"
          [attr.auto-start]="pgConfig.autoStart ? '' : null"
        ></ui-timer>

        <div style="display: flex; gap: 12px; margin-top: 24px;">
          <button class="variant-btn" (click)="timer.start()">Start</button>
          <button class="variant-btn btn-secondary" (click)="timer.pause()">Pause</button>
          <button class="variant-btn btn-secondary" (click)="timer.reset()">Reset</button>
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
