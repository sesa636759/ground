import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';

import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { ADVANCED_TABLE_DATA, ADVANCED_TABLE_COLUMNS } from '../../../data/advanced-table.data';

@Component({
  selector: 'dm-advanced-data-table-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './advanced-data-table-playground.component.html',
  styleUrl: './advanced-data-table-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmAdvancedDataTablePlaygroundComponent
  extends BasePlaygroundComponent
  implements OnInit
{
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'core', title: 'Core & Data', icon: '🗄️', iconLibrary: 'emoji' },
    { id: 'selection', title: 'Selection & Editing', icon: '✔️', iconLibrary: 'emoji' },
    { id: 'pagination', title: 'Pagination Settings', icon: '📄', iconLibrary: 'emoji' },
    { id: 'layout', title: 'Layout & Styling', icon: '🎨', iconLibrary: 'emoji' },
    { id: 'advanced', title: 'Advanced Features', icon: '✨', iconLibrary: 'emoji' },
    { id: 'grouping', title: 'Grouping & Tree', icon: '🌳', iconLibrary: 'emoji' },
    { id: 'json', title: 'JSON Data Editor', icon: '⚙️', iconLibrary: 'emoji' },
  ];

  accordionDefaultOpen = ['core'];

  data = ADVANCED_TABLE_DATA;
  columns = ADVANCED_TABLE_COLUMNS;

  dataJson = JSON.stringify(this.data, null, 2);
  columnsJson = JSON.stringify(this.columns, null, 2);

  themeOptions = [
    { label: 'Auto', value: 'auto' },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  paginationThemeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  paginationShapeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Pill', value: 'pill' },
  ];

  rowHeightOptions = [
    { label: 'Compact', value: 'compact' },
    { label: 'Normal', value: 'normal' },
    { label: 'Comfortable', value: 'comfortable' },
  ];

  iconLibraryOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Lucide', value: 'lucide' },
    { label: 'FontAwesome', value: 'fontawesome' },
    { label: 'Bootstrap', value: 'bootstrap' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      selectable: false,
      multiSelect: true,
      editable: false,
      stickyHeader: true,
      pagination: true,
      pageSize: 5,
      paginationTheme: 'default',
      paginationShape: 'default',
      paginationKeyboardNav: true,
      paginationQuickJump: false,
      paginationQuickJumpStep: 5,
      paginationShowProgress: false,
      paginationSticky: false,
      paginationStickyPosition: 'bottom',
      paginationTransitions: true,
      paginationSwipeGestures: true,
      paginationAutoHide: true,
      paginationResponsive: true,
      virtualScroll: false,
      virtualRowHeight: 48,
      advancedFilters: false,
      columnAggregation: false,
      persistState: false,
      multiSort: false,
      maxSortColumns: 3,
      autoSizeColumns: false,
      rowDetails: false,
      keyboardShortcuts: true,
      excelExport: false,
      inlineValidation: false,
      advancedCellEditors: true,
      columnFormatting: true,
      rangeSelection: false,
      copyPaste: false,
      conditionalFormatting: false,
      mobileCardView: true,
      pdfExport: false,
      undoRedo: false,
      searchable: true,
      sortable: true,
      filterable: true,
      columnReorder: true,
      columnVisibility: true,
      rowHeight: 'normal',
      striped: true,
      hoverable: true,
      bordered: true,
      loading: false,
      showSkeleton: true,
      skeletonRows: 5,
      emptyMessage: 'No data available',
      exportable: true,
      theme: 'auto',
      grouping: false,
      showGroupingControls: true,
      treeData: false,
      columnGrouping: false,
      showActions: false,
      iconLibrary: 'default',
      columnPinning: true,
      rowPinning: true,
      rowSpanning: false,
      rowReorder: false,
      multiFilter: true,
      headerBackground: '',
    };
  }

  updateConfig() {
    this.dataJson = JSON.stringify(this.data, null, 2);
    this.columnsJson = JSON.stringify(this.columns, null, 2);
    this.generateSnippet();
  }

  generateSnippet() {
    let code = '<ui-advanced-data-table\n';
    code += `  [data]="tableData"\n`;
    code += `  [columns]="tableCols"\n`;

    // Categorized properties
    if (this.pgConfig.selectable) code += `  selectable\n`;
    if (!this.pgConfig.multiSelect) code += `  [multiSelect]="false"\n`;
    if (this.pgConfig.editable) code += `  editable\n`;
    if (!this.pgConfig.stickyHeader) code += `  [stickyHeader]="false"\n`;

    // Pagination
    if (!this.pgConfig.pagination) {
      code += `  [pagination]="false"\n`;
    } else {
      if (this.pgConfig.pageSize !== 10) code += `  [pageSize]="${this.pgConfig.pageSize}"\n`;
      if (this.pgConfig.paginationTheme !== 'default')
        code += `  pagination-theme="${this.pgConfig.paginationTheme}"\n`;
      if (this.pgConfig.paginationShape !== 'default')
        code += `  pagination-shape="${this.pgConfig.paginationShape}"\n`;
      if (this.pgConfig.paginationSticky) code += `  pagination-sticky\n`;
    }

    // Design
    if (this.pgConfig.rowHeight !== 'normal') code += `  row-height="${this.pgConfig.rowHeight}"\n`;
    if (!this.pgConfig.striped) code += `  [striped]="false"\n`;
    if (!this.pgConfig.bordered) code += `  [bordered]="false"\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.theme !== 'auto') code += `  theme="${this.pgConfig.theme}"\n`;

    // Advanced
    if (this.pgConfig.treeData) code += `  tree-data\n`;
    if (this.pgConfig.virtualScroll) code += `  virtual-scroll\n`;
    if (this.pgConfig.grouping) code += `  grouping\n`;
    if (this.pgConfig.columnPinning) code += `  column-pinning\n`;
    if (this.pgConfig.rowPinning) code += `  row-pinning\n`;
    if (this.pgConfig.multiFilter) code += `  multi-filter\n`;
    if (this.pgConfig.columnAggregation) code += `  column-aggregation\n`;
    if (this.pgConfig.undoRedo) code += `  undo-redo\n`;
    if (this.pgConfig.rangeSelection) code += `  range-selection\n`;
    if (this.pgConfig.showActions) code += `  show-actions\n`;
    if (this.pgConfig.columnGrouping) code += `  column-grouping\n`;

    code += '></ui--advanced-data-table>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onDataJsonChange() {
    try {
      this.data = JSON.parse(this.dataJson);
      this.generateSnippet();
      this.logEvent('Data updated via JSON editor');
    } catch (e) {
      // Keep existing data on parse error
    }
  }

  onColumnsJsonChange() {
    try {
      this.columns = JSON.parse(this.columnsJson);
      this.generateSnippet();
      this.logEvent('Columns updated via JSON editor');
    } catch (e) {
      // Keep existing columns on parse error
    }
  }

  onRowSelect(event: any) {
    this.logEvent(`Row Selected: ${JSON.stringify(event.detail.selectedRows)}`);
  }

  onCellEdit(event: any) {
    this.logEvent(
      `Cell Edited: Row ${event.detail.rowId}, Field ${event.detail.field}, Value: ${event.detail.value}`,
    );
  }

  onSortChange(event: any) {
    this.logEvent(`Sort Changed: ${event.detail.field} ${event.detail.direction}`);
  }

  onPageChange(event: any) {
    this.logEvent(`Page Changed: Page ${event.detail.page}, Size ${event.detail.pageSize}`);
  }

  onSearchChange(event: any) {
    this.logEvent(`Search Query: ${event.detail.query}`);
  }
}
