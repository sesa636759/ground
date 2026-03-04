import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-advanced-data-table-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './advanced-data-table-playground.component.html',
  styleUrl: './advanced-data-table-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdvancedDataTablePlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'features', title: 'Features', icon: '✨' },
    { id: 'layout', title: 'Layout', icon: '📏' },
  ]);

  accordionDefaultOpen = JSON.stringify(['features']);

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

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      paginator: true,
      sorting: true,
      filtering: true,
      rows: 5,
      responsive: true,
    };
  }

  updateConfig() {
    let code = '<ui-advanced-data-table\n';
    code += `  [value]="records"\n`;
    code += `  [columns]="cols"\n`;
    if (this.pgConfig.paginator) code += `  paginator\n`;
    if (this.pgConfig.rows) code += `  [rows]="${this.pgConfig.rows}"\n`;
    if (this.pgConfig.responsive) code += `  responsive\n`;
    code += '></ui-advanced-data-table>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  override resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
    this.eventLog.set([]);
  }
}
