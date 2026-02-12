import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown-playground',
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
              <label>Placeholder</label>
              <input type="text" [(ngModel)]="pgConfig.placeholder" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Size</label>
              <select [(ngModel)]="pgConfig.size" (change)="updateConfig()">
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
            <div class="control-group">
              <label>Appearance</label>
              <select [(ngModel)]="pgConfig.appearance" (change)="updateConfig()">
                <option value="dropdown">Dropdown</option>
                <option value="button">Button-like</option>
              </select>
            </div>
          </div>

          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="multi"
                [(ngModel)]="pgConfig.multiSelect"
                (change)="updateConfig()"
              />
              <label for="multi">Multi-Select</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="search"
                [(ngModel)]="pgConfig.searchable"
                (change)="updateConfig()"
              />
              <label for="search">Searchable</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="clear"
                [(ngModel)]="pgConfig.clearable"
                (change)="updateConfig()"
              />
              <label for="clear">Clearable</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="cascade"
                [(ngModel)]="pgConfig.cascading"
                (change)="updateConfig()"
              />
              <label for="cascade">Cascading (Hierarchical)</label>
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
        <div>
          <label class="preview-label">Pick your favorite tech stack:</label>
          <ui-dropdown
            [attr.placeholder]="pgConfig.placeholder"
            [attr.size]="pgConfig.size"
            [attr.appearance]="pgConfig.appearance"
            [attr.multi-select]="pgConfig.multiSelect ? '' : null"
            [attr.searchable]="pgConfig.searchable ? '' : null"
            [attr.clearable]="pgConfig.clearable ? '' : null"
            [attr.cascading]="pgConfig.cascading ? '' : null"
            [options]="pgConfig.cascading ? cascadingOptionsJson : optionsJson"
            (valueChange)="onValueChange($event)"
          ></ui-dropdown>

          <div
            *ngIf="currentValue"
            style="margin-top: 24px; padding: 12px; background: #f1f5f9; border-radius: 8px; font-size: 0.85rem;"
          >
            <strong>Selected Value:</strong> {{ currentValue }}
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './dropdown-playground.component.scss',
})
export class DropdownPlaygroundComponent {
  pgConfig = {
    placeholder: 'Select technology...',
    size: 'md',
    appearance: 'dropdown',
    multiSelect: false,
    searchable: true,
    clearable: true,
    cascading: false,
  };

  options = [
    { label: 'Angular', value: 'ng', icon: '🅰️' },
    { label: 'React', value: 'react', icon: '⚛️' },
    { label: 'Vue.js', value: 'vue', icon: '🖖' },
    { label: 'Svelte', value: 'svelte', icon: '🔥' },
    { label: 'Stencil', value: 'stencil', icon: '⚡' },
    { label: 'Solid', value: 'solid', icon: '🧊' },
  ];

  cascadingOptions = [
    {
      label: 'Frontend',
      value: 'fe',
      children: [
        { label: 'Angular', value: 'ng' },
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
      ],
    },
    {
      label: 'Backend',
      value: 'be',
      children: [
        { label: 'Node.js', value: 'node' },
        { label: 'NestJS', value: 'nest' },
        { label: 'Go', value: 'go' },
      ],
    },
  ];

  optionsJson = JSON.stringify(this.options);
  cascadingOptionsJson = JSON.stringify(this.cascadingOptions);

  currentValue = '';
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-dropdown\n';
    code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.appearance !== 'dropdown')
      code += `  appearance="${this.pgConfig.appearance}"\n`;
    if (this.pgConfig.multiSelect) code += `  multi-select\n`;
    if (this.pgConfig.searchable) code += `  searchable\n`;
    if (this.pgConfig.cascading) code += `  cascading\n`;
    code += `  [options]="dropdownOptions"\n`;
    code += '></ui-dropdown>';

    this.generatedCode.set(code);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail.value;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      placeholder: 'Select technology...',
      size: 'md',
      appearance: 'dropdown',
      multiSelect: false,
      searchable: true,
      clearable: true,
      cascading: false,
    };
    this.updateConfig();
  }
}
