import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonTogglePlaygroundComponent } from './components/button-toggle-playground/button-toggle-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';

@Component({
  selector: 'app-set-button-toggle-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonTogglePlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-button-toggle-demo.component.html',
  styleUrl: './set-button-toggle-demo.component.scss',
})
export class SetButtonToggleDemoComponent extends BaseDemoComponent {
  variants = [
    { id: 'segmented', title: 'Segmented Controls', icon: '🔘' },
    { id: 'gliding', title: 'Gliding Pill Animation', icon: '🏄' },
    { id: 'colors', title: 'Color Variants', icon: '🎨' },
    { id: 'styles', title: 'Style Variants', icon: '🎭' },
    { id: 'sizes', title: 'Sizes', icon: '📏' },
    { id: 'icons', title: 'With Icons', icon: '🎯' },
    { id: 'dropdown', title: 'Dropdown Mode', icon: '📋' },
    { id: 'split-button', title: 'Split Button', icon: '🔀' },
    { id: 'display-modes', title: 'Display Modes', icon: '🎭' },
    { id: 'orientations', title: 'Orientations', icon: '📐' },
    { id: 'custom-slots', title: 'Custom Content Slots', icon: '⚡' },
    { id: 'loading', title: 'Loading States', icon: '⌛' },
    { id: 'states', title: 'States', icon: '🔄' },
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
