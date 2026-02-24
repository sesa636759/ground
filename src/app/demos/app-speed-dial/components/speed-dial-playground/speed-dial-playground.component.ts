import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-speed-dial-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
    <ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">
      <div slot="content-config">
        <div class="control-grid">
          <div class="control-section">
            <h3>Layout</h3>
            <div class="control-group">
              <label>Direction</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.direction"
                (ngModelChange)="updateConfig()"
                [options]="directionOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Type</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.type"
                (ngModelChange)="updateConfig()"
                [options]="typeOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Radius (for circles)</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.radius"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="ripple"
                [(ngModel)]="pgConfig.ripple"
                (ngModelChange)="updateConfig()"
                label="Ripple Effect"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="mask"
                [(ngModel)]="pgConfig.mask"
                (ngModelChange)="updateConfig()"
                label="Display Mask"
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
    </ui-accordion>
  </div>

  <div class="playground-preview">
        <ui-speed-dial
          [attr.direction]="pgConfig.direction"
          [attr.type]="pgConfig.type"
          [attr.radius]="pgConfig.radius"
          [attr.ripple]="pgConfig.ripple ? '' : null"
          [attr.mask]="pgConfig.mask ? '' : null"
          [model]="modelJson"
          button-class="ui-button-primary"
        ></ui-speed-dial>

        <p style="position: absolute; bottom: 20px; font-size: 0.8rem; color: #94a3b8;">
          Direction: {{ pgConfig.direction }} | Type: {{ pgConfig.type }}
        </p>
      </div>
    </div>
  `,
  styleUrl: './speed-dial-playground.component.scss',
})
export class SpeedDialPlaygroundComponent {
  pgConfig = {
    direction: 'up',
    type: 'linear',
    radius: 80,
    ripple: true,
    mask: false,
  };

  directionOptions = [
    { label: 'Up', value: 'up' },
    { label: 'Down', value: 'down' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  typeOptions = [
    { label: 'Linear', value: 'linear' },
    { label: 'Quarter Circle', value: 'quarter-circle' },
    { label: 'Half Circle', value: 'half-circle' },
    { label: 'Circle', value: 'circle' },
  ];

  model = [
    { label: 'Add', icon: '➕' },
    { label: 'Edit', icon: '✏️' },
    { label: 'Delete', icon: '🗑️' },
    { label: 'Share', icon: '🔗' },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-speed-dial\n';
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.type !== 'linear') code += `  [radius]="${this.pgConfig.radius}"\n`;
    if (this.pgConfig.mask) code += `  mask\n`;
    code += `  [model]="items"\n`;
    code += '></ui-speed-dial>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      direction: 'up',
      type: 'linear',
      radius: 80,
      ripple: true,
      mask: false,
    };
    this.updateConfig();
  }
}
