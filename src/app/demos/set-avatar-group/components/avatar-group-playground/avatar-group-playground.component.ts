import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avatar-group-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-group">
            <label>Size</label>
            <select [(ngModel)]="pgConfig.size" (change)="updateConfig()">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div class="control-group">
            <label>Max Display</label>
            <input
              type="number"
              min="1"
              max="10"
              [(ngModel)]="pgConfig.max"
              (input)="updateConfig()"
            />
          </div>
          <div class="control-group">
            <label>Layout</label>
            <select [(ngModel)]="pgConfig.layout" (change)="updateConfig()">
              <option value="stacked">Stacked</option>
              <option value="spaced">Spaced</option>
            </select>
          </div>
          <div class="control-group">
            <label>Shape</label>
            <select [(ngModel)]="pgConfig.shape" (change)="updateConfig()">
              <option value="circle">Circle</option>
              <option value="rounded">Rounded</option>
              <option value="square">Square</option>
            </select>
          </div>
        </div>
        <div class="checkbox-grid">
          <label class="checkbox-item">
            <input type="checkbox" [(ngModel)]="pgConfig.showTooltips" (change)="updateConfig()" />
            Show Tooltips
          </label>
          <label class="checkbox-item">
            <input type="checkbox" [(ngModel)]="pgConfig.clickable" (change)="updateConfig()" />
            Clickable
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
          <app-avatar-group
            [attr.size]="pgConfig.size"
            [attr.max]="pgConfig.max"
            [attr.layout]="pgConfig.layout"
            [attr.shape]="pgConfig.shape"
            [attr.show-tooltips]="pgConfig.showTooltips"
            [attr.clickable]="pgConfig.clickable"
            [users]="users"
          ></app-avatar-group>
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
export class AvatarGroupPlaygroundComponent implements OnInit {
  pgConfig = {
    size: 'medium',
    max: 4,
    layout: 'stacked',
    shape: 'circle',
    showTooltips: true,
    clickable: false,
  };
  users = [
    { name: 'John Doe', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Bob Johnson', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Alice Williams', image: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Charlie Brown', image: 'https://i.pravatar.cc/150?img=5' },
  ];
  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-avatar-group size="${this.pgConfig.size}" max="${this.pgConfig.max}" layout="${this.pgConfig.layout}"`;
    if (this.pgConfig.showTooltips) code += ` show-tooltips="true"`;
    if (this.pgConfig.clickable) code += ` clickable="true"`;
    code += ` [users]="users"></app-avatar-group>`;
    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
