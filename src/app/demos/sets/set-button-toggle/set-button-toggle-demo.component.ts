import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmButtonTogglePlaygroundComponent } from '../../../playground/sets/set-button-toggle-playground/button-toggle-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-set-button-toggle-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmButtonTogglePlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-button-toggle-demo.component.html',
  styleUrl: './set-button-toggle-demo.component.scss',
})
export class DmSetButtonToggleDemoComponent extends BaseDemoComponent {
  variants = [
    { id: 'segmented', title: 'Segmented Controls', icon: 'ðŸ”˜' },
    { id: 'gliding', title: 'Gliding Pill Animation', icon: 'ðŸ„' },
    { id: 'colors', title: 'Color Variants', icon: 'ðŸŽ¨' },
    { id: 'styles', title: 'Style Variants', icon: 'ðŸŽ­' },
    { id: 'sizes', title: 'Sizes', icon: 'ðŸ“' },
    { id: 'icons', title: 'With Icons', icon: 'ðŸŽ¯' },
    { id: 'icon-only', title: 'Icon Only', icon: 'ðŸ”²' },
    { id: 'dropdown', title: 'Dropdown Mode', icon: 'ðŸ“‹' },
    { id: 'split-button', title: 'Split Button', icon: 'ðŸ”€' },
    { id: 'display-modes', title: 'Display Modes', icon: 'ðŸŽ­' },
    { id: 'orientations', title: 'Orientations', icon: 'ðŸ“' },
    { id: 'custom-slots', title: 'Custom Content Slots', icon: 'âš¡' },
    { id: 'loading', title: 'Loading States', icon: 'âŒ›' },
    { id: 'states', title: 'States', icon: 'ðŸ”„' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  // Code snippets
  segmentedCode = `<app-button-toggle-group
  mode="segmented"
  label="Select View Mode"
  value="list"
  color="primary"
  [options]="viewOptions"
></app-button-toggle-group>`;

  glidingCode = `<app-button-toggle-group
  mode="segmented"
  value="day"
  color="info"
  variant="soft"
  [options]="timeOptions"
></app-button-toggle-group>`;

  colorCode = `@for (color of ['primary', 'secondary', 'success', 'danger', 'warning', 'info']; track color) {
  <app-button-toggle-group
    value="option2"
    [color]="color"
    [options]="basicOptions"
  ></app-button-toggle-group>
}`;

  styleCode = `@for (style of ['filled', 'outlined', 'text', 'soft', 'classic', 'solid', 'surface']; track style) {
  <app-button-toggle-group
    value="option2"
    color="primary"
    [variant]="style"
    [options]="basicOptions"
  ></app-button-toggle-group>
}`;

  sizeCode = `@for (size of ['small', 'medium', 'large']; track size) {
  <app-button-toggle-group
    [size]="size"
    value="option2"
    [options]="basicOptions"
  ></app-button-toggle-group>
}`;

  iconCode = `<app-button-toggle-group
  label="Alignment"
  value="center"
  color="secondary"
  [options]="alignOptions"
></app-button-toggle-group>`;

  iconOnlyCode = `<app-button-toggle-group
  label="View"
  value="grid"
  color="primary"
  display-mode="icon-only"
  [options]="iconOnlyOptions"
></app-button-toggle-group>`;

  dropdownCode = `<app-button-toggle-group
  mode="dropdown"
  label="Export Options"
  value="pdf"
  [options]="exportOptions"
></app-button-toggle-group>`;

  splitButtonCode = `<app-button-toggle-group
  mode="dropdown"
  keep-button-label="true"
  label="File Operations"
  value="file"
  [options]="actionsMenuOptions"
></app-button-toggle-group>`;

  displayCode = `<app-button-toggle-group
  display-mode="icon-only"
  value="grid"
  [options]="iconOnlyOptions"
></app-button-toggle-group>`;

  orientationCode = `<app-button-toggle-group
  orientation="vertical"
  value="option2"
  [options]="basicOptions"
></app-button-toggle-group>`;

  customSlotCode = `<app-button-toggle-group
  mode="dropdown"
  label="Advanced Filters"
  custom-content="true"
>
  <div slot="dropdown-content">
    <div class="custom-panel">
      <!-- Your custom HTML here -->
    </div>
  </div>
</app-button-toggle-group>`;

  loadingCode = `<app-button-toggle-group
  mode="dropdown"
  label="Save Document"
  value="cloud"
  [loading]="true"
  [options]="saveOptions"
></app-button-toggle-group>`;

  stateCode = `<app-button-toggle-group
  value="option2"
  [disabled]="true"
  [options]="basicOptions"
></app-button-toggle-group>`;

  // Options Data
  basicOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  viewOptions = [
    { value: 'list', label: 'List', icon: 'fas fa-list' },
    { value: 'grid', label: 'Grid', icon: 'fas fa-th' },
    { value: 'table', label: 'Table', icon: 'fas fa-table' },
  ];

  timeOptions = [
    { value: 'day', label: 'Day', icon: 'fas fa-sun' },
    { value: 'week', label: 'Week', icon: 'fas fa-calendar-week' },
    { value: 'month', label: 'Month', icon: 'fas fa-calendar-alt' },
  ];

  alignOptions = [
    { value: 'left', label: 'Left', icon: 'fas fa-align-left' },
    { value: 'center', label: 'Center', icon: 'fas fa-align-center' },
    { value: 'right', label: 'Right', icon: 'fas fa-align-right' },
  ];

  exportOptions = [
    { value: 'pdf', label: 'Export as PDF', icon: 'fas fa-file-pdf' },
    { value: 'excel', label: 'Export as Excel', icon: 'fas fa-file-excel' },
    { value: 'csv', label: 'Export as CSV', icon: 'fas fa-file-csv' },
  ];

  actionsMenuOptions = [
    { value: 'new', label: 'New File', icon: 'fas fa-file' },
    { value: 'open', label: 'Open File', icon: 'fas fa-folder-open' },
    { value: 'save', label: 'Save', icon: 'fas fa-save' },
  ];

  iconOnlyOptions = [
    { value: 'list', icon: 'fas fa-list' },
    { value: 'grid', icon: 'fas fa-th' },
    { value: 'table', icon: 'fas fa-table' },
  ];

  iconOnlyAlignOptions = [
    { value: 'left', icon: 'fas fa-align-left' },
    { value: 'center', icon: 'fas fa-align-center' },
    { value: 'right', icon: 'fas fa-align-right' },
    { value: 'justify', icon: 'fas fa-align-justify' },
  ];

  labelOnlyOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  saveOptions = [
    { value: 'cloud', label: 'Save to Cloud', icon: 'fas fa-cloud' },
    { value: 'local', label: 'Save Locally', icon: 'fas fa-hard-drive' },
  ];
}
