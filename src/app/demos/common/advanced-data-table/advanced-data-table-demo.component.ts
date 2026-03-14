import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmAdvancedDataTablePlaygroundComponent } from '../../../playground/common/advanced-data-table-playground/advanced-data-table-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-advanced-data-table-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmAdvancedDataTablePlaygroundComponent,
    DemoTabsComponent,
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
    { id: 'basic', title: 'Basic Usage', icon: '📝', iconLibrary: 'emoji' },
    { id: 'selection', title: 'Selection', icon: '✅', iconLibrary: 'emoji' },
    { id: 'actions', title: 'Row Actions', icon: '⚡', iconLibrary: 'emoji' },
    { id: 'editable', title: 'Editable Mode', icon: '✏️', iconLibrary: 'emoji' },
    { id: 'skeleton', title: 'Skeleton Loading', icon: '⏳', iconLibrary: 'emoji' },
    { id: 'col-grouping', title: 'Column Grouping', icon: '📁', iconLibrary: 'emoji' },
    { id: 'row-grouping', title: 'Row Grouping', icon: '📂', iconLibrary: 'emoji' },
    { id: 'input-types', title: 'Input Types', icon: '⌨️', iconLibrary: 'emoji' },
    { id: 'pinning', title: 'Column/Row Pinning', icon: '📌', iconLibrary: 'emoji' },
    { id: 'reorder', title: 'Row Reorder', icon: '↕️', iconLibrary: 'emoji' },
    { id: 'filters', title: 'Advanced Filters', icon: '🔍', iconLibrary: 'emoji' },
    { id: 'tree', title: 'Tree Data', icon: '🌲', iconLibrary: 'emoji' },
    { id: 'sparklines', title: 'Sparklines', icon: '📈', iconLibrary: 'emoji' },
    { id: 'export', title: 'PDF Export', icon: '📄', iconLibrary: 'emoji' },
    { id: 'aggregation', title: 'Aggregation', icon: '∑', iconLibrary: 'emoji' },
  ];

  sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'Engineering', role: 'Senior Developer', salary: 95000, status: 'Active', rating: 4, active: true, verified: true, startDate: '2022-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Marketing', role: 'Marketing Manager', salary: 85000, status: 'Active', rating: 5, active: true, verified: false, startDate: '2021-06-10' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', department: 'Engineering', role: 'Team Lead', salary: 105000, status: 'Active', rating: 3, active: false, verified: true, startDate: '2020-03-22' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', department: 'Sales', role: 'Sales Representative', salary: 70000, status: 'On Leave', rating: 4, active: true, verified: true, startDate: '2021-09-05' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', department: 'Engineering', role: 'Junior Developer', salary: 65000, status: 'Active', rating: 5, active: true, verified: false, startDate: '2023-02-14' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', department: 'HR', role: 'HR Manager', salary: 80000, status: 'Inactive', rating: 4, active: false, verified: true, startDate: '2019-11-20' },
    { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', department: 'Marketing', role: 'Content Strategist', salary: 72000, status: 'Active', rating: 3, active: true, verified: true, startDate: '2022-07-08' },
    { id: 8, name: 'Fiona Apple', email: 'fiona@example.com', department: 'Sales', role: 'Account Executive', salary: 78000, status: 'Active', rating: 5, active: true, verified: false, startDate: '2021-12-01' },
  ];

  columns = [
    { id: 'id', field: 'id', label: 'ID', sortable: true, width: '60px' },
    { id: 'name', field: 'name', label: 'Name', sortable: true, width: '150px' },
    { id: 'email', field: 'email', label: 'Email', sortable: true, width: '200px' },
    { id: 'department', field: 'department', label: 'Department', sortable: true, filterable: true, width: '120px' },
    { id: 'role', field: 'role', label: 'Role', sortable: true, width: '180px' },
    { id: 'salary', field: 'salary', label: 'Salary', sortable: true, width: '110px', format: (v: any) => '$' + v.toLocaleString() },
    { id: 'status', field: 'status', label: 'Status', sortable: true, filterable: true, width: '100px' },
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
        { id: 1, name: 'John Doe', role: 'Senior Developer', status: 'Active' },
        { id: 2, name: 'Jane Smith', role: 'Junior Developer', status: 'Active' }
      ]
    },
    {
      id: 'd2', name: 'Marketing', role: 'Department', status: 'Active', children: [
        { id: 4, name: 'Alice Williams', role: 'Sales Rep', status: 'On Leave' }
      ]
    }
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
}
