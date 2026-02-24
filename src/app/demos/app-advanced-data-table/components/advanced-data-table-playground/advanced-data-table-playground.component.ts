import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-advanced-data-table-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
    <ui-accordion items='[{"id":"config","title":"Configuration","icon":"⚙️"}]' defaultOpen='["config"]' multiple>
      <div slot="content-config">
        <div class="control-grid">
          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="paginator"
                [(ngModel)]="pgConfig.paginator"
                (ngModelChange)="updateConfig()"
                label="Enable Paginator"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="sorting"
                [(ngModel)]="pgConfig.sorting"
                (ngModelChange)="updateConfig()"
                label="Enable Sorting"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="filtering"
                [(ngModel)]="pgConfig.filtering"
                (ngModelChange)="updateConfig()"
                label="Global Filtering"
              ></app-checkbox>
            </div>
          </div>

          <div class="control-section">
            <h3>Layout</h3>
            <div class="control-group">
              <label>Rows per page</label>
              <input type="number" [(ngModel)]="pgConfig.rows" (ngModelChange)="updateConfig()" />
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="responsive"
                [(ngModel)]="pgConfig.responsive"
                (ngModelChange)="updateConfig()"
                label="Responsive Layout"
              ></app-checkbox>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <ui-button variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
        </div>
            </div>
    </ui-accordion>
  </div>

  <div class="playground-preview">
        <div class="table-container">
          <ui-advanced-data-table
            [attr.paginator]="pgConfig.paginator ? '' : null"
            [attr.rows]="pgConfig.rows"
            [attr.responsive]="pgConfig.responsive ? '' : null"
            [value]="dataJson"
            [columns]="columnsJson"
          >
          </ui-advanced-data-table>
        </div>

        
      
      <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
    </div>
    </div>
  `,
  styleUrl: './advanced-data-table-playground.component.scss',
})
export class AdvancedDataTablePlaygroundComponent {
  pgConfig = {
    paginator: true,
    sorting: true,
    filtering: true,
    rows: 5,
    responsive: true,
  };

  data = [
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Editor', status: 'Pending' },
    { id: 3, name: 'Bob Johnson', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', role: 'Manager', status: 'Active' },
    { id: 5, name: 'Charlie Brown', role: 'Guest', status: 'Active' },
    { id: 6, name: 'David Wilson', role: 'Editor', status: 'Active' },
  ];

  columns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Full Name', sortable: true, filter: true },
    { field: 'role', header: 'User Role' },
    { field: 'status', header: 'Current Status' },
  ];

  dataJson = JSON.stringify(this.data);
  columnsJson = JSON.stringify(this.columns);
  generatedCode = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  updateConfig() {
    let code = '<ui-advanced-data-table\n';
    code += `  [value]="records"\n`;
    code += `  [columns]="cols"\n`;
    if (this.pgConfig.paginator) code += `  paginator\n`;
    if (this.pgConfig.rows) code += `  [rows]="${this.pgConfig.rows}"\n`;
    code += '></ui-advanced-data-table>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      paginator: true,
      sorting: true,
      filtering: true,
      rows: 5,
      responsive: true,
    };
    this.updateConfig();
  }
}
