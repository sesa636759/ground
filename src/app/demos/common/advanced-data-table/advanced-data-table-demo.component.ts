import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmAdvancedDataTablePlaygroundComponent } from '../../../playground/common/advanced-data-table-playground/advanced-data-table-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ADVANCED_TABLE_DATA, ADVANCED_TABLE_COLUMNS } from '../../../data/advanced-table.data';

import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-advanced-data-table-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmAdvancedDataTablePlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './advanced-data-table-demo.component.html',
  styleUrl: './advanced-data-table-demo.component.scss',
})
export class DmAdvancedDataTableDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', iconLibrary: 'emoji' },
    { id: 'basic', title: 'Basic Usage', icon: '📝', iconLibrary: 'emoji' },
    { id: 'selection', title: 'Selection', icon: '✅', iconLibrary: 'emoji' },
    { id: 'actions', title: 'Row Actions', icon: '⚡', iconLibrary: 'emoji' },
    { id: 'editable', title: 'Editable Mode', icon: '✏️', iconLibrary: 'emoji' },
    { id: 'skeleton', title: 'Skeleton Loading', icon: '⏳', iconLibrary: 'emoji' },
    { id: 'input-types', title: 'Input Types', icon: '⌨️', iconLibrary: 'emoji' },
    { id: 'col-grouping', title: 'Column Grouping', icon: '📁', iconLibrary: 'emoji' },
    { id: 'row-grouping', title: 'Row Grouping', icon: '📂', iconLibrary: 'emoji' },
    { id: 'pinning', title: 'Column/Row Pinning', icon: '📌', iconLibrary: 'emoji' },
    { id: 'reorder', title: 'Row Reorder', icon: '↕️', iconLibrary: 'emoji' },
    { id: 'filters', title: 'Advanced Filters', icon: '🔍', iconLibrary: 'emoji' },
    { id: 'panels', title: 'Column Panels', icon: '🎛️', iconLibrary: 'emoji' },
    { id: 'search', title: 'External Search', icon: '🔎', iconLibrary: 'emoji' },
    { id: 'tree', title: 'Tree Data', icon: '🌲', iconLibrary: 'emoji' },
    { id: 'sparklines', title: 'Sparklines', icon: '📈', iconLibrary: 'emoji' },
    { id: 'lazy-load', title: 'Lazy Loading', icon: '⏳', iconLibrary: 'emoji' },
    { id: 'export', title: 'PDF Export', icon: '📄', iconLibrary: 'emoji' },
    { id: 'mobile', title: 'Mobile & Context', icon: '📱', iconLibrary: 'emoji' },
    { id: 'undo-redo', title: 'Undo / Redo', icon: '↩️', iconLibrary: 'emoji' },
    { id: 'range', title: 'Range Selection', icon: '🟦', iconLibrary: 'emoji' },
    { id: 'conditional', title: 'Conditional Format', icon: '🎨', iconLibrary: 'emoji' },
    { id: 'aggregation', title: 'Aggregation', icon: '∑', iconLibrary: 'emoji' },
  ];

  sampleData = ADVANCED_TABLE_DATA;
  columns = ADVANCED_TABLE_COLUMNS;

  inputTypesColumns = [
    {
      id: 'avatar', field: 'avatar', label: 'Avatar', type: 'image', align: 'center', width: '80px',
      imageStyle: { width: '40px', height: '40px', borderRadius: '50%' }
    },
    { id: 'name', field: 'name', label: 'Name (Text)', type: 'text', editable: true },
    { id: 'rating', field: 'rating', label: 'Rating', type: 'rating', editable: true, maxRating: 5, align: 'center' },
    { id: 'active', field: 'active', label: 'Active', type: 'switch', editable: true, align: 'center' },
    { id: 'verified', field: 'verified', label: 'Verified', type: 'checkbox', editable: true, align: 'center' },
    { id: 'startDate', field: 'startDate', label: 'Start Date', type: 'date', editable: true },
    {
      id: 'department', field: 'department', label: 'Dept (Select)', type: 'select', editable: true,
      selectOptions: [
        { label: 'Engineering', value: 'Engineering' },
        { label: 'Marketing', value: 'Marketing' },
        { label: 'Sales', value: 'Sales' },
        { label: 'HR', value: 'HR' }
      ]
    }
  ];

  editableColumns = [
    { id: 'name', field: 'name', label: 'Name', type: 'text', editable: true },
    { id: 'email', field: 'email', label: 'Email', type: 'email', editable: true },
    { id: 'salary', field: 'salary', label: 'Salary', type: 'number', editable: true },
    { id: 'rating', field: 'rating', label: 'Rating', type: 'rating', maxRating: 5, editable: true },
    { id: 'active', field: 'active', label: 'Active', type: 'switch', editable: true },
    { id: 'verified', field: 'verified', label: 'Verified', type: 'checkbox', editable: true }
  ];

  groupedColumns = [
    { id: 'id', field: 'id', label: 'ID', width: '70px' },
    {
      id: 'personal',
      label: 'Personal Information',
      children: [
        { id: 'name', field: 'name', label: 'Name', sortable: true },
        { id: 'email', field: 'email', label: 'Email', type: 'email' }
      ]
    },
    {
      id: 'employment',
      label: 'Employment Details',
      children: [
        { id: 'department', field: 'department', label: 'Department', sortable: true },
        { id: 'role', field: 'role', label: 'Role' },
        { id: 'salary', field: 'salary', label: 'Salary', format: (v: any) => '$' + v.toLocaleString() }
      ]
    }
  ];

  treeData = [
    {
      id: 'd1', name: 'Engineering', role: 'Department', status: 'Active', children: [
        {
          id: 't1', name: 'Frontend Team', role: 'Team', status: 'Active', children: [
            { id: 1, name: 'John Doe', role: 'Senior Developer', status: 'Active', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', role: 'Junior Developer', status: 'Active', email: 'jane@example.com' }
          ]
        },
        {
          id: 't2', name: 'Backend Team', role: 'Team', status: 'Active', children: [
            { id: 3, name: 'Bob Johnson', role: 'Team Lead', status: 'Active', email: 'bob@example.com' }
          ]
        }
      ]
    },
    {
      id: 'd2', name: 'Marketing', role: 'Department', status: 'Active', children: [
        { id: 4, name: 'Alice Williams', role: 'Sales Rep', status: 'On Leave', email: 'alice@example.com' }
      ]
    }
  ];

  sparklineData = ADVANCED_TABLE_DATA.slice(0, 10).map(d => ({
    ...d,
    trend: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50) + 20)
  }));

  sparklineColumns = [
    { id: 'id', field: 'id', label: 'ID', width: '60px' },
    { id: 'name', field: 'name', label: 'Name', width: '150px' },
    { id: 'trend', field: 'trend', label: 'Trend (Last 12mo)', type: 'number', width: '150px' },
    { id: 'salary', field: 'salary', label: 'Salary', format: (v: any) => '$' + v.toLocaleString() }
  ];

  salesData = [
    { id: 101, region: 'North', product: 'MacBook Pro', quantity: 5, revenue: 12500, margin: 25 },
    { id: 102, region: 'South', product: 'iPhone 15', quantity: 12, revenue: 14400, margin: 35 },
    { id: 103, region: 'East', product: 'Ergo Chair', quantity: 8, revenue: 4800, margin: 45 },
    { id: 104, region: 'West', product: 'Monitor 4K', quantity: 15, revenue: 7500, margin: 18 }
  ];

  salesColumns = [
    { id: 'region', field: 'region', label: 'Region', sortable: true },
    { id: 'product', field: 'product', label: 'Product', sortable: true, aggregation: ['count'] },
    { id: 'quantity', field: 'quantity', label: 'Units Sold', aggregation: ['sum'], format: (v: any) => v + ' pcs' },
    { id: 'revenue', field: 'revenue', label: 'Revenue', aggregation: ['sum'], format: (v: any) => '$' + v.toLocaleString() },
    { id: 'margin', field: 'margin', label: 'Margin (%)', aggregation: ['avg'], format: (v: any) => v + '%' }
  ];

  formattingRules = {
    salary: [
      { operator: '>', value: 100000, style: { backgroundColor: '#dcfce7', color: '#166534', fontWeight: 'bold' } },
      { operator: '<', value: 70000, style: { color: '#dc2626' } }
    ],
    rating: [
      { operator: '>=', value: 5, style: { color: '#ca8a04', fontWeight: 'bold' } }
    ],
    status: [
      { operator: '=', value: 'Active', style: { color: '#2563eb', backgroundColor: '#dbeafe', padding: '2px 6px', borderRadius: '4px' } }
    ]
  };

  onRowAction(event: any) {
    alert(`Row Action: ${event.detail.action} for ${event.detail.row.name}`);
  }

  onCellEdit(event: any) {
    console.log('Cell edited:', event.detail);
  }
}
