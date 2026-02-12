import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dock-overlay-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-group">
            <label>Position</label>
            <select [(ngModel)]="pgConfig.position" (change)="updateConfig()">
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div class="control-group">
            <label>Mode</label>
            <select [(ngModel)]="pgConfig.mode" (change)="updateConfig()">
              <option value="docked">Docked</option>
              <option value="floating">Floating</option>
              <option value="modal">Modal</option>
            </select>
          </div>
          <div class="control-group">
            <label>Variant</label>
            <select [(ngModel)]="pgConfig.variant" (change)="updateConfig()">
              <option value="default">Default</option>
              <option value="glass">Glass</option>
            </select>
          </div>
        </div>
        <div class="checkbox-grid">
          <label class="checkbox-item">
            <input type="checkbox" [(ngModel)]="pgConfig.resizable" (change)="updateConfig()" />
            Resizable
          </label>
          <label class="checkbox-item">
            <input type="checkbox" [(ngModel)]="pgConfig.draggable" (change)="updateConfig()" />
            Draggable
          </label>
          <label class="checkbox-item">
            <input type="checkbox" [(ngModel)]="pgConfig.collapsible" (change)="updateConfig()" />
            Collapsible
          </label>
        </div>
      </div>
      <div class="playground-preview">
        <div class="event-log-container">
          <strong>Event Log</strong>
          <div class="log-items">
            <div *ngFor="let log of eventLog()" class="log-item">{{ log }}</div>
          </div>
        </div>
        <div class="preview-stage">
          <app-dock-overlay
            [attr.position]="pgConfig.position"
            [attr.mode]="pgConfig.mode"
            [attr.variant]="pgConfig.variant"
            [attr.resizable]="pgConfig.resizable"
            [attr.draggable]="pgConfig.draggable"
            [attr.collapsible]="pgConfig.collapsible"
            title="Dock Panel"
          >
            <div style="padding: 20px;">Panel Content</div>
          </app-dock-overlay>
        </div>
        <div class="code-block">
          <div class="code-header">
            <span>Generated Code</span>
            <ui-button class="copy-btn" variant="secondary" size="sm" (click)="copyCode()" label="Copy"></ui-button>
          </div>
          <pre><code>{{ generatedCode() }}</code></pre>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @use '../../../../../styles/playground-base.scss';
    `,
  ],
})
export class DockOverlayPlaygroundComponent implements OnInit {
  pgConfig = {
    position: 'left',
    mode: 'docked',
    variant: 'default',
    resizable: true,
    draggable: false,
    collapsible: true,
  };
  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-dock-overlay position="${this.pgConfig.position}" mode="${this.pgConfig.mode}"`;
    if (this.pgConfig.resizable) code += ` resizable="true"`;
    if (this.pgConfig.draggable) code += ` draggable="true"`;
    if (this.pgConfig.collapsible) code += ` collapsible="true"`;
    code += `></app-dock-overlay>`;
    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
