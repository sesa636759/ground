import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-advanced-data-table-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './advanced-data-table-docs.component.html',
  styleUrls: ['./advanced-data-table-docs.component.scss'],
})
export class AdvancedDataTableDocsComponent {
  componentConfig = COMPONENT_CONFIGS['advanced-data-table'] || {
    id: 'advanced-data-table',
    tagName: 'ui-advanced-data-table',
    label: 'Advanced Data Table',
    description: 'A powerful table component with sorting, filtering, and pagination.',
    props: [
      { name: 'data', type: 'json', defaultValue: [] },
      { name: 'columns', type: 'json', defaultValue: [] },
      { name: 'pagination', type: 'boolean', defaultValue: true },
      { name: 'rowsPerPage', type: 'number', defaultValue: 10 },
      { name: 'sortable', type: 'boolean', defaultValue: true },
      { name: 'filterable', type: 'boolean', defaultValue: true },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  tableData = JSON.stringify([
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', role: 'User', status: 'Active' },
    { id: 4, name: 'Alice Williams', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Brown', role: 'User', status: 'Pending' },
  ]);

  tableColumns = JSON.stringify([
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name', sortable: true },
    { field: 'role', header: 'Role', sortable: true },
    { field: 'status', header: 'Status' },
  ]);

  exampleCodes: Record<string, string> = {
    basic: `<ui-advanced-data-table
  [data]="tableData"
  [columns]="tableColumns"
  [pagination]="true"
  [sortable]="true"
  [filterable]="true">
</ui-advanced-data-table>`,
  };

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }
}
