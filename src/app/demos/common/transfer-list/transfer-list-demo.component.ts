import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmTransferListPlaygroundComponent } from '../../../playground/common/transfer-list-playground/transfer-list-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-transfer-list-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTransferListPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './transfer-list-demo.component.html',
  styleUrl: './transfer-list-demo.component.scss',
})
export class DmTransferListDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Selection', icon: 'list', iconLibrary: 'lucide' },
    { id: 'modes', title: 'Display Modes', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'reorder', title: 'Drag & Reorder', icon: 'move', iconLibrary: 'lucide' },
    { id: 'oneway', title: 'One-Way Copy', icon: 'copy', iconLibrary: 'lucide' },
    { id: 'pagination', title: 'Pagination', icon: 'files', iconLibrary: 'lucide' },
    { id: 'custom', title: 'Custom Rendering', icon: 'paint-brush', iconLibrary: 'lucide' },
    { id: 'filter', title: 'Custom Filtering', icon: 'search-check', iconLibrary: 'lucide' },
    { id: 'i18n', title: 'Localization', icon: 'globe', iconLibrary: 'lucide' },
    { id: 'skeleton', title: 'Skeleton State', icon: 'loader', iconLibrary: 'lucide' },
  ];

  sourceData = [
    { key: '1', label: 'Dashboard', description: 'Main overview', icon: 'layout' },
    { key: '2', label: 'Analytics', description: 'Data insights', icon: 'bar-chart' },
    { key: '3', label: 'Users', description: 'User management', icon: 'users' },
    { key: '4', label: 'Inventory', description: 'Stock control', icon: 'package' },
    { key: '5', label: 'Settings', description: 'System config', icon: 'settings' },
  ];

  targetData = [{ key: '6', label: 'Reports', icon: 'file-text' }];

  tableColumns = [
    { title: 'Feature', dataIndex: 'label' },
    { title: 'Description', dataIndex: 'description' },
  ];

  treeData = [
    {
      key: 'hr',
      label: 'HR Dept',
      children: [
        { key: 'hr1', label: 'Payroll' },
        { key: 'hr2', label: 'Recruitment' },
      ],
    },
    {
      key: 'it',
      label: 'IT Dept',
      children: [
        { key: 'it1', label: 'Infrastructure' },
        { key: 'it2', label: 'Security' },
      ],
    },
  ];

  basicCode = signal(`<dui-transfer-list 
  [source]="sourceItems" 
  [target]="targetItems"
  [titles]="['Available', 'Assigned']"
  searchable
></dui-transfer-list>`);

  modesCode = signal(`<!-- Table Mode -->
<dui-transfer-list 
  mode="table" 
  [columns]="columns" 
  [source]="items"
></dui-transfer-list>

<!-- Tree Mode -->
<dui-transfer-list 
  mode="tree" 
  [source]="nestedItems"
></dui-transfer-list>`);

  reorderCode = signal(`<dui-transfer-list 
  enable-drag 
  allow-reorder 
  [source]="items"
></dui-transfer-list>`);

  onewayCode = signal(`<dui-transfer-list 
  one-way 
  [source]="items" 
  [titles]="['Options', 'Chosen']"
></dui-transfer-list>`);

  paginationCode = signal(`<dui-transfer-list 
  pagination 
  [page-size]="5" 
  [source]="manyItems"
></dui-transfer-list>`);

  customRenderCode = signal(`<dui-transfer-list 
  [source]="items" 
  [item-renderer]="myRenderer"
></dui-transfer-list>

// In Component:
myRenderer = (item) => \`
  <div class="custom-item">
    <strong>\${item.label}</strong>
    <span class="badge">\${item.category}</span>
  </div>
\`;`);

  filterCode = signal(`<dui-transfer-list 
  [source]="items" 
  [filter-option]="myFilter"
></dui-transfer-list>

// In Component:
myFilter = (input, item) => 
  item.label.includes(input) || item.tag.includes(input);`);

  localeCode = signal(`<dui-transfer-list 
  [source]="items" 
  [locale]="{
    itemUnit: 'member',
    itemsUnit: 'members',
    notFoundContent: 'No matches found',
    searchPlaceholder: 'Search team members...'
  }"
></dui-transfer-list>`);

  skeletonCode = signal(`<dui-transfer-list loading></dui-transfer-list>`);

  onTransferChange(event: any) {
    console.log('Transfer event:', event.detail);
  }
}
