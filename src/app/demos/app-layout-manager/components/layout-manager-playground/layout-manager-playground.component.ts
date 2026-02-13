import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-layout-manager-playground',
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
              <label>Mode</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.mode"
                (change)="updateConfig()"
                [options]="modeOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="resizable"
                [(ngModel)]="pgConfig.resizable"
                (change)="updateConfig()"
                label="Resizable Panels"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="closable"
                [(ngModel)]="pgConfig.closable"
                (change)="updateConfig()"
                label="Closable Panels"
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
        <div class="layout-wrapper">
          <ui-layout-manager
            [attr.mode]="pgConfig.mode"
            [attr.resizable]="pgConfig.resizable ? '' : null"
            [attr.closable]="pgConfig.closable ? '' : null"
          >
            <div slot="panel-1" style="padding: 20px; background: #f0f9ff;">
              <h3>Panel 1</h3>
              <p>Main content area</p>
            </div>
            <div slot="panel-2" style="padding: 20px; background: #fef3c7;">
              <h3>Panel 2</h3>
              <p>Secondary content</p>
            </div>
            <div slot="panel-3" style="padding: 20px; background: #fce7f3;">
              <h3>Panel 3</h3>
              <p>Sidebar content</p>
            </div>
          </ui-layout-manager>
        </div>
      </div>
    </div>
  `,
  styleUrl: './layout-manager-playground.component.scss',
})
export class LayoutManagerPlaygroundComponent {
  pgConfig = {
    mode: 'docking',
    resizable: true,
    closable: true,
  };

  modeOptions = [
    { label: 'Docking', value: 'docking' },
    { label: 'Grid', value: 'grid' },
    { label: 'Flex', value: 'flex' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-layout-manager\n';
    code += `  mode="${this.pgConfig.mode}"\n`;
    if (this.pgConfig.resizable) code += `  resizable\n`;
    if (this.pgConfig.closable) code += `  closable\n`;
    code += '>\n';
    code += '  <div slot="panel-1">Content 1</div>\n';
    code += '  <div slot="panel-2">Content 2</div>\n';
    code += '</ui-layout-manager>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      mode: 'docking',
      resizable: true,
      closable: true,
    };
    this.updateConfig();
  }
}
