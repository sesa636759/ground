import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Paging</h3>
            <div class="control-group">
              <label>Total Items</label>
              <input type="number" [(ngModel)]="pgConfig.total" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Items Per Page</label>
              <input type="number" [(ngModel)]="pgConfig.rows" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Current Page</label>
              <input type="number" [(ngModel)]="pgConfig.first" (change)="updateConfig()" />
            </div>
          </div>

          <div class="control-section">
            <h3>Visuals</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="showSummary"
                [(ngModel)]="pgConfig.showReport"
                (change)="updateConfig()"
              />
              <label for="showSummary">Show Report</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="showJump"
                [(ngModel)]="pgConfig.showJump"
                (change)="updateConfig()"
              />
              <label for="showJump">Show Jump Icons</label>
            </div>
            <div class="control-group">
              <label>Variant</label>
              <select [(ngModel)]="pgConfig.variant" (change)="updateConfig()">
                <option value="default">Default</option>
                <option value="modern">Modern</option>
                <option value="compact">Compact</option>
              </select>
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
        <ui-pagination
          [attr.total-records]="pgConfig.total"
          [attr.rows]="pgConfig.rows"
          [attr.first]="pgConfig.first"
          [attr.show-report]="pgConfig.showReport ? '' : null"
          [attr.show-jump-controls]="pgConfig.showJump ? '' : null"
          [attr.variant]="pgConfig.variant"
          (pageChange)="onPageChange($event)"
        ></ui-pagination>

        <div style="margin-top: 24px; font-size: 0.85rem; color: var(--text-secondary);">
          Displaying {{ pgConfig.rows }} items starting from index {{ pgConfig.first }}
        </div>
      </div>
    </div>
  `,
  styleUrl: './pagination-playground.component.scss',
})
export class PaginationPlaygroundComponent {
  pgConfig = {
    total: 100,
    rows: 10,
    first: 0,
    showReport: true,
    showJump: true,
    variant: 'default',
  };

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-pagination\n';
    code += `  [total-records]="${this.pgConfig.total}"\n`;
    code += `  [rows]="${this.pgConfig.rows}"\n`;
    code += `  [first]="${this.pgConfig.first}"\n`;
    if (this.pgConfig.showReport) code += `  show-report\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += '></ui-pagination>';

    this.generatedCode.set(code);
  }

  onPageChange(event: any) {
    this.pgConfig.first = event.detail.first;
    this.pgConfig.rows = event.detail.rows;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      total: 100,
      rows: 10,
      first: 0,
      showReport: true,
      showJump: true,
      variant: 'default',
    };
    this.updateConfig();
  }
}
