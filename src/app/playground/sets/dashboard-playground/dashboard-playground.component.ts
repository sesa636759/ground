import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

@Component({
  selector: 'dm-dashboard-set-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard-playground.component.html',
  styleUrl: './dashboard-playground.component.scss',
})
export class DmDashboardSetPlaygroundComponent
  extends BasePlaygroundComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('dashboard') dashboardRef!: ElementRef;

  getDefaultConfig() {
    return {
      theme: 'light',
      enableSearch: true,
      enableMultiSelect: true,
      enableKeyboard: true,
      enableFullscreen: true,
      showAddButton: true,
      showGrid: false,
      autoSave: false,
      batchActions: false, // showBatchActions
      loadingState: false, // loadingState

      // Grid
      columns: 12,
      rowHeight: 100,
      gap: 10,

      // Interaction
      enableDrag: true,
      enableResize: true,
      compact: false,

      // Widget
      widgetSelectionMode: 'single',
      showWidgetHeader: true,
      showWidgetFooter: false,
      widgetDrag: true,
      widgetResize: true,
      widgetDeleteAction: true,
      widgetRefreshAction: true,
      widgetFullscreenAction: true,

      // Breakpoints
      breakpoints: '{"0":1,"640":2,"768":3,"1024":4,"1280":12}',
      minWidth: 2,
      maxWidth: 6,
    };
  }

  pgConfig = this.getDefaultConfig();

  initialWidgets = [
    {
      id: 'widget-1',
      title: 'Sales Overview',
      x: 0,
      y: 0,
      width: 4,
      height: 2,
      minWidth: 2,
      minHeight: 2,
      content: '<div class="chart-widget"><i class="fas fa-chart-line"></i></div>',
    },
    {
      id: 'widget-2',
      title: 'Total Revenue',
      x: 4,
      y: 0,
      width: 2,
      height: 1,
      minWidth: 2,
      minHeight: 1,
      content:
        '<div class="stats-widget"><h3>Total Revenue</h3><div class="value">$45,231</div><div class="change"><i class="fas fa-arrow-up"></i> 12.5%</div></div>',
    },
    {
      id: 'widget-3',
      title: 'Active Users',
      x: 6,
      y: 0,
      width: 2,
      height: 1,
      minWidth: 2,
      minHeight: 1,
      content:
        '<div class="stats-widget"><h3>Active Users</h3><div class="value">8,542</div><div class="change"><i class="fas fa-arrow-up"></i> 8.3%</div></div>',
    },
    {
      id: 'widget-4',
      title: 'Performance',
      x: 0,
      y: 2,
      width: 4,
      height: 1,
      minWidth: 2,
      minHeight: 1,
      content:
        '<div class="chart-widget" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"><i class="fas fa-chart-bar"></i></div>',
    },
  ];

  widgetsJson = JSON.stringify(this.initialWidgets);

  override ngOnInit() {
    super.ngOnInit();
    this.updateCode();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    // Initial sync for properties that might not be attributes
    this.updateDashboardProps();
  }

  updateDashboardProps() {
    if (!this.dashboardRef?.nativeElement) return;
    const el = this.dashboardRef.nativeElement;

    el.widgets = this.initialWidgets; // Reset or set widgets

    el.showGrid = this.pgConfig.showGrid;
    el.autoSave = this.pgConfig.autoSave;
    el.showBatchActions = this.pgConfig.batchActions;
    el.loadingState = this.pgConfig.loadingState;

    el.columns = this.pgConfig.columns;
    el.rowHeight = this.pgConfig.rowHeight;
    el.gap = this.pgConfig.gap;

    el.enableDrag = this.pgConfig.enableDrag;
    el.enableResize = this.pgConfig.enableResize;
    el.compact = this.pgConfig.compact;

    el.widgetSelectionMode = this.pgConfig.widgetSelectionMode;
    el.showWidgetHeader = this.pgConfig.showWidgetHeader;
    el.showWidgetFooter = this.pgConfig.showWidgetFooter;
    el.widgetDrag = this.pgConfig.widgetDrag;
    el.widgetResize = this.pgConfig.widgetResize;
    el.widgetDeleteAction = this.pgConfig.widgetDeleteAction;
    el.widgetRefreshAction = this.pgConfig.widgetRefreshAction;
    el.widgetFullscreenAction = this.pgConfig.widgetFullscreenAction;

    el.breakpoints = JSON.parse(this.pgConfig.breakpoints);

    this.updateCode();
  }

  // Call this whenever a config changes
  onConfigChange(prop: string, value: any) {
    if (!this.dashboardRef?.nativeElement) return;
    const el = this.dashboardRef.nativeElement;

    // Map config prop to element prop if names differ or logic is needed
    switch (prop) {
      case 'columns':
        el.columns = value;
        break;
      case 'rowHeight':
        el.rowHeight = value;
        break;
      case 'gap':
        el.gap = value;
        break;
      case 'theme':
        el.theme = value;
        break; // Attribute binding handles this?
      // ... add others as needed if not handled by attribute binding
      case 'showGrid':
        el.showGrid = value;
        break;
      case 'autoSave':
        el.autoSave = value;
        break;
      case 'batchActions':
        el.showBatchActions = value;
        break;
      case 'loadingState':
        el.loadingState = value;
        break;

      case 'enableDrag':
        el.enableDrag = value;
        break;
      case 'enableResize':
        el.enableResize = value;
        break;
      case 'compact':
        el.compact = value;
        break;

      case 'widgetSelectionMode':
        el.widgetSelectionMode = value;
        break;
      case 'showWidgetHeader':
        el.showWidgetHeader = value;
        break;
      case 'showWidgetFooter':
        el.showWidgetFooter = value;
        break;
      case 'widgetDrag':
        el.widgetDrag = value;
        break;
      case 'widgetResize':
        el.widgetResize = value;
        break;
      case 'widgetDeleteAction':
        el.widgetDeleteAction = value;
        break;
      case 'widgetRefreshAction':
        el.widgetRefreshAction = value;
        break;
      case 'widgetFullscreenAction':
        el.widgetFullscreenAction = value;
        break;
      case 'breakpoints':
        try {
          el.breakpoints = JSON.parse(value);
        } catch (e) {
          // Ignore invalid JSON
        }
        break;
    }
    this.updateCode();
  }

  updateCode() {
    let code = `<ui-dashboard\n`;
    code += `  id="dashboard"\n`;
    if (this.pgConfig.theme !== 'light') code += `  theme="${this.pgConfig.theme}"\n`;

    if (this.pgConfig.enableSearch) code += `  enable-search="true"\n`;
    if (this.pgConfig.enableMultiSelect) code += `  enable-multi-select="true"\n`;
    if (this.pgConfig.enableKeyboard) code += `  enable-keyboard="true"\n`;
    if (this.pgConfig.enableFullscreen) code += `  enable-fullscreen="true"\n`;
    if (this.pgConfig.showAddButton) code += `  show-add-button="true"\n`;

    // Properties that are usually attributes
    code += `  breakpoints='${this.pgConfig.breakpoints}'\n`;

    code += `></ui-dashboard>\n\n`;

    code += `// JavaScript initialization\n`;
    code += `const dashboard = document.getElementById('dashboard');\n`;
    code += `dashboard.widgets = ${JSON.stringify(this.initialWidgets, null, 2)};\n`;

    // Add other property setters if they differ from defaults
    if (this.pgConfig.columns !== 12) code += `dashboard.columns = ${this.pgConfig.columns};\n`;
    if (this.pgConfig.rowHeight !== 100)
      code += `dashboard.rowHeight = ${this.pgConfig.rowHeight};\n`;
    if (this.pgConfig.gap !== 10) code += `dashboard.gap = ${this.pgConfig.gap};\n`;

    this.generatedCode.set(code);
  }

  updateConfig() {
    this.updateDashboardProps();
  }

  // Method meant to be called from template for actions
  triggerAction(action: string) {
    if (!this.dashboardRef?.nativeElement) return;
    const el = this.dashboardRef.nativeElement;

    switch (action) {
      case 'undo':
        el.undo();
        break;
      case 'redo':
        el.redo();
        break;
      case 'save':
        el.saveLayout();
        this.logEvent('Layout Saved');
        break;
      case 'load':
        el.loadLayout();
        this.logEvent('Layout Loaded');
        break;
      case 'reset':
        el.widgets = [...this.initialWidgets];
        this.logEvent('Dashboard Reset');
        break;
    }
  }
}
