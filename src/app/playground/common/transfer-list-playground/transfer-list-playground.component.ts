import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-transfer-list-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './transfer-list-playground.component.html',
  styleUrl: './transfer-list-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTransferListPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'layout', title: 'Layout & Mode', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavioral States', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'data', title: 'Data & Columns', icon: 'database', iconLibrary: 'lucide' },
  ];

  modeOptions = [
    { label: 'List', value: 'list' },
    { label: 'Table', value: 'table' },
    { label: 'Tree', value: 'tree' },
  ];

  sourceItems = [
    {
      key: '1',
      label: 'Admin Panel',
      description: 'Full access to system features',
      icon: 'shield',
    },
    {
      key: '2',
      label: 'User Dashboard',
      description: 'Personal overview and stats',
      icon: 'layout',
    },
    {
      key: '3',
      label: 'Settings',
      description: 'Configure application preferences',
      icon: 'settings',
    },
    { key: '4', label: 'Reports', description: 'Generate and export data', icon: 'file-text' },
    { key: '5', label: 'Messages', description: 'Internal communication hub', icon: 'mail' },
    {
      key: '6',
      label: 'Billing',
      description: 'Manage subscriptions and invoices',
      icon: 'credit-card',
    },
  ];

  targetItems = [
    { key: '7', label: 'Support', description: 'Customer help desk', icon: 'help-circle' },
  ];

  // For Table Mode
  columns = [
    { title: 'Feature', dataIndex: 'label' },
    { title: 'Module', dataIndex: 'description' },
  ];

  // For Tree Mode
  treeSource = [
    {
      key: 'root-1',
      label: 'Management',
      children: [
        { key: '1-1', label: 'HR Portal' },
        { key: '1-2', label: 'Finance' },
      ],
    },
    {
      key: 'root-2',
      label: 'Tools',
      children: [
        { key: '2-1', label: 'Slack' },
        { key: '2-2', label: 'Jira' },
      ],
    },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      titles: '["Available Features", "Selected Features"]',
      searchable: true,
      sortable: false,
      allowReorder: false,
      max: 10,
      searchPlaceholder: 'Search features...',
      showSelectAll: true,
      disabled: false,
      height: '350px',
      mode: 'list',
      enableDrag: true,
      oneWay: false,
      pagination: false,
      pageSize: 5,
      loading: false,
      iconLibrary: 'lucide',
    };
  }

  get sourceJson() {
    if (this.pgConfig.mode === 'tree') return JSON.stringify(this.treeSource);
    return JSON.stringify(this.sourceItems);
  }

  get targetJson() {
    if (this.pgConfig.mode === 'tree') return JSON.stringify([]);
    return JSON.stringify(this.targetItems);
  }

  get columnsJson() {
    return JSON.stringify(this.columns);
  }

  updateConfig() {
    let code = `<dui-transfer-list\n`;
    code += `  [source]="${this.pgConfig.mode === 'tree' ? 'treeData' : 'sourceData'}"\n`;
    code += `  [target]="targetData"\n`;
    code += `  [titles]='${this.pgConfig.titles}'\n`;
    code += `  mode="${this.pgConfig.mode}"\n`;
    if (!this.pgConfig.searchable) code += `  [searchable]="false"\n`;
    if (this.pgConfig.sortable) code += `  sortable\n`;
    if (this.pgConfig.allowReorder) code += `  allow-reorder\n`;
    if (this.pgConfig.max !== 10) code += `  max="${this.pgConfig.max}"\n`;
    if (this.pgConfig.searchPlaceholder !== 'Search features...')
      code += `  search-placeholder="${this.pgConfig.searchPlaceholder}"\n`;
    if (!this.pgConfig.showSelectAll) code += `  [show-select-all]="false"\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.height !== '300px') code += `  height="${this.pgConfig.height}"\n`;
    if (this.pgConfig.enableDrag) code += `  enable-drag\n`;
    if (this.pgConfig.oneWay) code += `  one-way\n`;
    if (this.pgConfig.pagination) {
      code += `  pagination\n`;
      code += `  page-size="${this.pgConfig.pageSize}"\n`;
    }
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.mode === 'table') code += `  [columns]='${this.columnsJson}'\n`;

    code += `></dui-transfer-list>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onTransferChange(event: any) {
    this.logEvent(
      `Transfer: ${event.detail.source.length} available, ${event.detail.target.length} selected`,
    );
  }

  onSelectionChanged(event: any) {
    this.logEvent(
      `Selection: ${event.detail.sourceSelected.length} left, ${event.detail.targetSelected.length} right`,
    );
  }
}
