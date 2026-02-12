import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transfer-list-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Search Placeholder</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.searchPlaceholder"
                (change)="updateConfig()"
              />
            </div>
          </div>

          <div class="control-section">
            <h3>States</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="disabled"
                [(ngModel)]="pgConfig.disabled"
                (change)="updateConfig()"
                label="Disabled State"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showSearch"
                [(ngModel)]="pgConfig.showSearch"
                (change)="updateConfig()"
                label="Show Search Bar"
              ></app-checkbox>
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
        <div class="transfer-container">
          <ui-transfer-list
            [attr.search-placeholder]="pgConfig.searchPlaceholder"
            [attr.disabled]="pgConfig.disabled ? '' : null"
            [attr.show-search]="pgConfig.showSearch ? '' : null"
            [source]="sourceJson"
            [target]="targetJson"
          >
          </ui-transfer-list>
        </div>
      </div>
    </div>
  `,
  styleUrl: './transfer-list-playground.component.scss',
})
export class TransferListPlaygroundComponent {
  pgConfig = {
    searchPlaceholder: 'Search items...',
    disabled: false,
    showSearch: true,
  };

  source = [
    { label: 'Role: Admin', value: 'admin' },
    { label: 'Role: Editor', value: 'editor' },
    { label: 'Role: Viewer', value: 'viewer' },
    { label: 'Role: Manager', value: 'manager' },
  ];

  target = [{ label: 'Role: Contributor', value: 'contributor' }];

  sourceJson = JSON.stringify(this.source);
  targetJson = JSON.stringify(this.target);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-transfer-list\n';
    code += `  [source]="availableRoles"\n`;
    code += `  [target]="assignedRoles"\n`;
    if (this.pgConfig.showSearch) code += `  show-search\n`;
    code += '></ui-transfer-list>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      searchPlaceholder: 'Search items...',
      disabled: false,
      showSearch: true,
    };
    this.updateConfig();
  }
}
