import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-group-playground',
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
              <label>Orientation</label>
              <select [(ngModel)]="pgConfig.orientation" (change)="updateConfig()">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>
            <div class="control-group">
              <label>Selection Mode</label>
              <select [(ngModel)]="pgConfig.selectionMode" (change)="updateConfig()">
                <option value="none">None</option>
                <option value="single">Single</option>
                <option value="multiple">Multiple</option>
              </select>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="attached"
                [(ngModel)]="pgConfig.attached"
                (change)="updateConfig()"
              />
              <label for="attached">Attached</label>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
          <ui-button class="btn-secondary" variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
        </div>
      </div>

      <div class="playground-preview">
        <ui-button-group
          [attr.orientation]="pgConfig.orientation"
          [attr.selection-mode]="pgConfig.selectionMode"
          [attr.attached]="pgConfig.attached ? '' : null"
          (valueChange)="onValueChange($event)"
        >
          <ui-button label="Left" variant="outline"></ui-button>
          <ui-button label="Center" variant="outline"></ui-button>
          <ui-button label="Right" variant="outline"></ui-button>
        </ui-button-group>

        <div
          *ngIf="pgConfig.selectionMode !== 'none'"
          style="margin-top: 16px; font-size: 0.85rem; color: var(--text-secondary);"
        >
          Selected: {{ currentValue | json }}
        </div>
      </div>
    </div>
  `,
  styleUrl: './button-group-playground.component.scss',
})
export class ButtonGroupPlaygroundComponent {
  pgConfig = {
    orientation: 'horizontal',
    selectionMode: 'single',
    attached: true,
  };

  generatedCode = signal('');
  currentValue: any = null;

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-button-group\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  selection-mode="${this.pgConfig.selectionMode}"\n`;
    if (!this.pgConfig.attached) code += `  [attached]="false"\n`;
    code += '>\n';
    code += '  <ui-button label="Left" variant="outline"></ui-button>\n';
    code += '  <ui-button label="Center" variant="outline"></ui-button>\n';
    code += '  <ui-button label="Right" variant="outline"></ui-button>\n';
    code += '</ui-button-group>';

    this.generatedCode.set(code);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      selectionMode: 'single',
      attached: true,
    };
    this.updateConfig();
  }
}
