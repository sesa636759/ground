import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-snackbar-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Global Config -->
          <div class="control-section">
            <h3>Global Configuration</h3>
            <div class="control-group">
              <label>Position</label>
              <select [(ngModel)]="pgConfig.position" (change)="updateConfig()">
                <option value="top-right">Top Right</option>
                <option value="top-left">Top Left</option>
                <option value="top-center">Top Center</option>
                <option value="bottom-right">Bottom Right</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="bottom-center">Bottom Center</option>
              </select>
            </div>
            <div class="control-group">
              <label>Max Visible</label>
              <input type="number" [(ngModel)]="pgConfig.maxVisible" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Stack Mode</label>
              <select [(ngModel)]="pgConfig.stackMode" (change)="updateConfig()">
                <option value="stack">Stack</option>
                <option value="queue">Queue</option>
                <option value="lifo">LIFO</option>
              </select>
            </div>
            <div class="control-group">
              <label>Open Mode</label>
              <select [(ngModel)]="pgConfig.openMode" (change)="updateConfig()">
                <option value="slide-down">Slide Down</option>
                <option value="slide-up">Slide Up</option>
                <option value="slide-left">Slide Left</option>
                <option value="slide-right">Slide Right</option>
                <option value="fade">Fade</option>
                <option value="scale">Scale</option>
                <option value="bounce">Bounce</option>
              </select>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="cardStack"
                [(ngModel)]="pgConfig.cardStack"
                (change)="updateConfig()"
              />
              <label for="cardStack">Card Stacking</label>
            </div>
          </div>

          <!-- Notification settings -->
          <div class="control-section">
            <h3>Notification Settings</h3>
            <div class="control-group">
              <label>Type</label>
              <select [(ngModel)]="notiConfig.type">
                <option value="success">Success</option>
                <option value="info">Info</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
            <div class="control-group">
              <label>Title</label>
              <input type="text" [(ngModel)]="notiConfig.title" />
            </div>
            <div class="control-group">
              <label>Message</label>
              <input type="text" [(ngModel)]="notiConfig.message" />
            </div>
            <div class="control-group">
              <label>Duration (ms)</label>
              <input type="number" [(ngModel)]="notiConfig.duration" />
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
        <ui-snackbar
          #snackbar
          [attr.position]="pgConfig.position"
          [attr.max-visible]="pgConfig.maxVisible"
          [attr.stack-mode]="pgConfig.stackMode"
          [attr.open-mode]="pgConfig.openMode"
          [attr.card-stack]="pgConfig.cardStack ? '' : null"
        ></ui-snackbar>

        <button class="btn-primary" (click)="showSnackbar()">Show Snackbar</button>
        <button class="btn-secondary" (click)="clearAll()">Clear All</button>
      </div>
    </div>
  `,
  styleUrl: './snackbar-playground.component.scss',
})
export class SnackbarPlaygroundComponent {
  @ViewChild('snackbar') snackbarEl!: ElementRef;

  pgConfig = {
    position: 'top-right',
    maxVisible: 5,
    stackMode: 'stack',
    openMode: 'slide-down',
    cardStack: false,
  };

  notiConfig = {
    type: 'success',
    title: 'New Notification',
    message: 'This is a test notification message!',
    duration: 5000,
  };

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-snackbar\n';
    code += `  position="${this.pgConfig.position}"\n`;
    code += `  [max-visible]="${this.pgConfig.maxVisible}"\n`;
    code += `  stack-mode="${this.pgConfig.stackMode}"\n`;
    code += `  open-mode="${this.pgConfig.openMode}"\n`;
    if (this.pgConfig.cardStack) code += `  card-stack\n`;
    code += '></ui-snackbar>\n\n';
    code += '// Trigger from TS:\n';
    code += `snackbar.add({\n`;
    code += `  type: '${this.notiConfig.type}',\n`;
    code += `  title: '${this.notiConfig.title}',\n`;
    code += `  message: '${this.notiConfig.message}',\n`;
    code += `  duration: ${this.notiConfig.duration}\n`;
    code += `});`;

    this.generatedCode.set(code);
  }

  async showSnackbar() {
    const el = this.snackbarEl.nativeElement;
    if (el && typeof el.add === 'function') {
      await el.add({ ...this.notiConfig });
    }
  }

  async clearAll() {
    const el = this.snackbarEl.nativeElement;
    if (el && typeof el.closeAll === 'function') {
      await el.closeAll();
    }
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      position: 'top-right',
      maxVisible: 5,
      stackMode: 'stack',
      openMode: 'slide-down',
      cardStack: false,
    };
    this.notiConfig = {
      type: 'success',
      title: 'New Notification',
      message: 'This is a test notification message!',
      duration: 5000,
    };
    this.updateConfig();
  }
}
