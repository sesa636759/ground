import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-avatar-group-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
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
          <div class="control-group">
            <label>Max Display</label>
            <app-input
              type="number"
              min="1"
              max="10"
              [(ngModel)]="pgConfig.max"
              (input)="updateConfig()"
            />
          </div>
          <div class="control-group">
            <label>Layout</label>
            <ui-dropdown
              [(ngModel)]="pgConfig.layout"
              (change)="updateConfig()"
              [options]="[
                { label: 'Stacked', value: 'stacked' },
                { label: 'Spaced', value: 'spaced' },
                { label: 'Grid', value: 'grid' },
              ]"
            ></ui-dropdown>
          </div>
          <div class="control-group">
            <label>Shape</label>
            <ui-dropdown
              [(ngModel)]="pgConfig.shape"
              (change)="updateConfig()"
              [options]="[
                { label: 'Circle', value: 'circle' },
                { label: 'Rounded', value: 'rounded' },
                { label: 'Square', value: 'square' },
              ]"
            ></ui-dropdown>
          </div>
          <div class="control-group">
            <label>Direction</label>
            <ui-dropdown
              [(ngModel)]="pgConfig.direction"
              (change)="updateConfig()"
              [options]="[
                { label: 'Horizontal', value: 'horizontal' },
                { label: 'Vertical', value: 'vertical' },
              ]"
            ></ui-dropdown>
          </div>
          <div class="control-group">
            <label>Spacing</label>
            <app-input
              type="number"
              min="0"
              max="20"
              [(ngModel)]="pgConfig.spacing"
              (input)="updateConfig()"
            />
          </div>
          <div class="control-group">
            <label>Border Width</label>
            <app-input
              type="number"
              min="0"
              max="10"
              [(ngModel)]="pgConfig.borderWidth"
              (input)="updateConfig()"
            />
          </div>
          <div class="control-group">
            <label>Border Color</label>
            <app-input
              type="color"
              [(ngModel)]="pgConfig.borderColor"
              (input)="updateConfig()"
            />
          </div>
          <div class="control-group" *ngIf="pgConfig.layout === 'grid'">
            <label>Grid Columns</label>
            <app-input
              type="number"
              min="1"
              max="6"
              [(ngModel)]="pgConfig.columns"
              (input)="updateConfig()"
            />
          </div>
          <div class="control-group">
            <label>Hover Effect</label>
            <ui-dropdown
              [(ngModel)]="pgConfig.hoverEffect"
              (change)="updateConfig()"
              [options]="[
                { label: 'None', value: 'none' },
                { label: 'Zoom', value: 'zoom' },
                { label: 'Lift', value: 'lift' },
                { label: 'Glow', value: 'glow' },
              ]"
            ></ui-dropdown>
          </div>
        </div>
        <div class="checkbox-grid">
          <label class="checkbox-item">
            <app-checkbox [(ngModel)]="pgConfig.showTooltips" (change)="updateConfig()" />
            Show Tooltips
          </label>
          <label class="checkbox-item">
            <app-checkbox [(ngModel)]="pgConfig.clickable" (change)="updateConfig()" />
            Clickable
          </label>
          <label class="checkbox-item">
            <app-checkbox [(ngModel)]="pgConfig.showPopover" (change)="updateConfig()" />
            Show Popover
          </label>
          <label class="checkbox-item">
            <app-checkbox [(ngModel)]="pgConfig.animated" (change)="updateConfig()" />
            Animated
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
            [attr.direction]="pgConfig.direction"
            [attr.spacing]="pgConfig.spacing"
            [attr.border-width]="pgConfig.borderWidth"
            [attr.border-color]="pgConfig.borderColor"
            [attr.show-tooltips]="pgConfig.showTooltips"
            [attr.clickable]="pgConfig.clickable"
            [attr.show-popover]="pgConfig.showPopover"
            [attr.animated]="pgConfig.animated"
            [attr.hover-effect]="pgConfig.hoverEffect"
            [attr.columns]="pgConfig.columns"
            [users]="users"
          ></app-avatar-group>
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
    spacing: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
    direction: 'horizontal',
    showPopover: false,
    animated: false,
    hoverEffect: 'none',
    columns: 3,
  };
  users = [
    { name: 'John Doe', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Bob Johnson', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Alice Williams', image: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Charlie Brown', image: 'https://i.pravatar.cc/150?img=5' },
    { name: 'David Miller', image: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Emma Davis', image: 'https://i.pravatar.cc/150?img=7' },
    { name: 'Frank Wilson', image: 'https://i.pravatar.cc/150?img=8' },
  ];
  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-avatar-group\n  size="${this.pgConfig.size}"\n  max="${this.pgConfig.max}"\n  layout="${this.pgConfig.layout}"\n  shape="${this.pgConfig.shape}"\n  direction="${this.pgConfig.direction}"`;
    if (this.pgConfig.spacing !== 8) code += `\n  spacing="${this.pgConfig.spacing}"`;
    if (this.pgConfig.borderWidth !== 2) code += `\n  border-width="${this.pgConfig.borderWidth}"`;
    if (this.pgConfig.borderColor !== '#ffffff') code += `\n  border-color="${this.pgConfig.borderColor}"`;
    if (this.pgConfig.showTooltips) code += `\n  show-tooltips="true"`;
    if (this.pgConfig.clickable) code += `\n  clickable="true"`;
    if (this.pgConfig.showPopover) code += `\n  show-popover="true"`;
    if (this.pgConfig.animated) code += `\n  animated="true"`;
    if (this.pgConfig.hoverEffect !== 'none') code += `\n  hover-effect="${this.pgConfig.hoverEffect}"`;
    if (this.pgConfig.layout === 'grid') code += `\n  columns="${this.pgConfig.columns}"`;
    code += `\n>\n  <!-- Child avatars -->\n</app-avatar-group>`;
    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
