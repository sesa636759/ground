import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-dashboard-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard-docs.component.html',
  styleUrls: ['./dashboard-docs.component.scss'],
})
export class DashboardDocsComponent {
  dashboardConfig = {
    id: 'dashboard',
    tagName: 'app-dashboard',
    label: 'Dashboard',
    props: [
      { name: 'layout', type: 'string' as const, defaultValue: 'default', description: 'Dashboard layout type' },
      { name: 'widgets', type: 'json' as const, defaultValue: '[]', description: 'Array of widget configurations' },
      { name: 'columns', type: 'number' as const, defaultValue: '3', description: 'Number of grid columns' },
      { name: 'theme', type: 'string' as const, defaultValue: 'light', description: 'Dashboard theme (light/dark)' },
      { name: 'draggable', type: 'boolean' as const, defaultValue: 'false', description: 'Enable widget drag and drop' },
      { name: 'resizable', type: 'boolean' as const, defaultValue: 'false', description: 'Enable widget resizing' },
      { name: 'refresh-interval', type: 'number' as const, defaultValue: '0', description: 'Auto-refresh interval in ms' },
      { name: 'breakpoints', type: 'json' as const, defaultValue: '{}', description: 'Responsive breakpoint configuration' },
    ]
  };
  
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-dashboard
  layout="default"
  [widgets]="basicWidgets">
</app-dashboard>`,
    analytics: `<app-dashboard
  layout="analytics"
  theme="light"
  [widgets]="analyticsWidgets">
</app-dashboard>`,
    grid: `<app-dashboard
  layout="grid"
  [columns]="4"
  [widgets]="gridWidgets">
</app-dashboard>`,
    cards: `<app-dashboard
  layout="card-grid"
  [columns]="3"
  [widgets]="cardWidgets">
</app-dashboard>`,
    widgets: `<app-dashboard
  layout="flexible"
  [draggable]="true"
  [resizable]="true"
  [widgets]="customWidgets">
</app-dashboard>`,
    realtime: `<app-dashboard
  layout="realtime"
  [refresh-interval]="5000"
  [widgets]="realtimeWidgets">
</app-dashboard>`,
    responsive: `<app-dashboard
  layout="responsive"
  [breakpoints]="breakpoints"
  [widgets]="responsiveWidgets">
</app-dashboard>`,
    dark: `<app-dashboard
  layout="grid"
  theme="dark"
  [columns]="3"
  [widgets]="darkWidgets">
</app-dashboard>`,
  };

  basicWidgets = [
    { id: '1', type: 'stats', title: 'Total Users', value: '1,234' },
    { id: '2', type: 'chart', title: 'Revenue', data: [] },
  ];

  analyticsWidgets = [
    { id: '1', type: 'kpi', title: 'Conversions', value: '23.5%' },
    { id: '2', type: 'graph', title: 'Traffic', data: [] },
  ];

  gridWidgets = [
    { id: '1', type: 'metric', span: 1 },
    { id: '2', type: 'metric', span: 1 },
  ];

  cardWidgets = [
    { id: '1', type: 'card', title: 'Sales' },
    { id: '2', type: 'card', title: 'Orders' },
  ];

  customWidgets = [
    { id: '1', type: 'custom', position: { x: 0, y: 0, w: 2, h: 2 } },
  ];

  realtimeWidgets = [
    { id: '1', type: 'live', title: 'Active Users', refresh: true },
  ];

  responsiveWidgets = [
    { id: '1', type: 'adaptive' },
  ];

  darkWidgets = [
    { id: '1', type: 'stats', theme: 'dark' },
  ];

  breakpoints = JSON.stringify({
    sm: 640,
    md: 768,
    lg: 1024,
  });

  getActiveExampleLabel() {
    return this.activeExample.replace(/_/g, ' ');
  }

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
