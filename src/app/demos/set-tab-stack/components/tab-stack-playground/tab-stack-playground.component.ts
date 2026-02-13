import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-tab-stack-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-group">
            <label>Orientation</label>
            <ui-dropdown
              [(ngModel)]="pgConfig.orientation"
              (change)="updateConfig()"
              [options]="[
                { label: 'Horizontal', value: 'horizontal' },
                { label: 'Vertical', value: 'vertical' },
              ]"
            ></ui-dropdown>
          </div>
          <div class="control-group">
            <label>Variant</label>
            <ui-dropdown
              [(ngModel)]="pgConfig.variant"
              (change)="updateConfig()"
              [options]="[
                { label: 'Default', value: 'default' },
                { label: 'Pills', value: 'pills' },
                { label: 'Underline', value: 'underline' },
                { label: 'Glass', value: 'glass' },
              ]"
            ></ui-dropdown>
          </div>
          <div class="control-group">
            <label>Size</label>
            <ui-dropdown
              [(ngModel)]="pgConfig.size"
              (change)="updateConfig()"
              [options]="[
                { label: 'Small', value: 'small' },
                { label: 'Medium', value: 'medium' },
                { label: 'Large', value: 'large' },
              ]"
            ></ui-dropdown>
          </div>
        </div>
        <div class="checkbox-grid">
          <label class="checkbox-item">
            <app-checkbox [(ngModel)]="pgConfig.closable" (change)="updateConfig()" />
            Closable
          </label>
          <label class="checkbox-item">
            <app-checkbox [(ngModel)]="pgConfig.draggable" (change)="updateConfig()" />
            Draggable
          </label>
          <label class="checkbox-item">
            <app-checkbox [(ngModel)]="pgConfig.scrollable" (change)="updateConfig()" />
            Scrollable
          </label>
          <label class="checkbox-item">
            <app-checkbox [(ngModel)]="pgConfig.grouped" (change)="updateConfig()" />
            Grouped
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
          <app-tab-stack
            [attr.orientation]="pgConfig.orientation"
            [attr.variant]="pgConfig.variant"
            [attr.size]="pgConfig.size"
            [attr.closable]="pgConfig.closable"
            [attr.draggable]="pgConfig.draggable"
            [attr.scrollable]="pgConfig.scrollable"
            [attr.grouped]="pgConfig.grouped"
            [tabs]="tabs"
          ></app-tab-stack>
        </div>
        <div class="code-block">
          <div class="code-header">
            <span>Generated Code</span>
            <ui-button
              class="copy-btn"
              variant="secondary"
              size="sm"
              (click)="copyCode()"
              label="Copy"
            ></ui-button>
          </div>
          <pre><code>{{ generatedCode() }}</code></pre>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @use '../../../../styles/playground-base.scss';
    `,
  ],
})
export class TabStackPlaygroundComponent implements OnInit {
  pgConfig = {
    orientation: 'horizontal',
    variant: 'default',
    size: 'medium',
    closable: false,
    draggable: false,
    scrollable: false,
    grouped: false,
  };
  tabs = [
    { id: 'tab1', label: 'Dashboard', icon: 'fas fa-home' },
    { id: 'tab2', label: 'Analytics', icon: 'fas fa-chart-line' },
    { id: 'tab3', label: 'Settings', icon: 'fas fa-cog' },
  ];
  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-tab-stack orientation="${this.pgConfig.orientation}" variant="${this.pgConfig.variant}" size="${this.pgConfig.size}"`;
    if (this.pgConfig.closable) code += ` closable="true"`;
    if (this.pgConfig.draggable) code += ` draggable="true"`;
    if (this.pgConfig.scrollable) code += ` scrollable="true"`;
    if (this.pgConfig.grouped) code += ` grouped="true"`;
    code += ` [tabs]="tabs"></app-tab-stack>`;
    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
