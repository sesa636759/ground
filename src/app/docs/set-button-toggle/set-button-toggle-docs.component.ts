import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-button-toggle-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-button-toggle-docs.component.html',
  styleUrls: ['./set-button-toggle-docs.component.scss'],
})
export class SetButtonToggleDocsComponent {
  toggleConfig = COMPONENT_CONFIGS['set-button-toggle'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'avatars';
  isCodeVisible: boolean = false;

  avatarsOptions = JSON.stringify([
    {
      value: 'user1',
      label: 'Alex',
      avatarSrc: 'https://i.pravatar.cc/150?u=user1',
      status: 'online',
    },
    {
      value: 'user2',
      label: 'Jordan',
      avatarSrc: 'https://i.pravatar.cc/150?u=user2',
      status: 'busy',
    },
    {
      value: 'user3',
      label: 'Taylor',
      avatarSrc: 'https://i.pravatar.cc/150?u=user3',
      status: 'offline',
    },
  ]);

  timeOptions = JSON.stringify([
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
  ]);

  priorityOptions = JSON.stringify([
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ]);

  basicOptions = JSON.stringify([
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]);

  viewModesOptions = JSON.stringify([
    { value: 'list', label: 'List', icon: 'fas fa-list' },
    { value: 'grid', label: 'Grid', icon: 'fas fa-th' },
    { value: 'table', label: 'Table', icon: 'fas fa-table' },
  ]);

  alignmentOptions = JSON.stringify([
    { value: 'left', label: 'Left', icon: 'fas fa-align-left' },
    { value: 'center', label: 'Center', icon: 'fas fa-align-center' },
    { value: 'right', label: 'Right', icon: 'fas fa-align-right' },
  ]);

  toolsOptions = JSON.stringify([
    { value: 'pencil', label: 'Pencil', icon: 'fas fa-pencil-alt' },
    { value: 'brush', label: 'Brush', icon: 'fas fa-paint-brush' },
    { value: 'eraser', label: 'Eraser', icon: 'fas fa-eraser' },
  ]);

  exportOptions = JSON.stringify([
    { value: 'pdf', label: 'Export as PDF', icon: 'fas fa-file-pdf' },
    { value: 'excel', label: 'Export as Excel', icon: 'fas fa-file-excel' },
    { value: 'csv', label: 'Export as CSV', icon: 'fas fa-file-csv' },
  ]);

  actionsOptions = JSON.stringify([
    { value: 'edit', label: 'Edit', icon: 'fas fa-edit' },
    { value: 'copy', label: 'Copy', icon: 'fas fa-copy' },
    { value: 'delete', label: 'Delete', icon: 'fas fa-trash' },
  ]);

  fileOptions = JSON.stringify([
    { value: 'new', label: 'New', icon: 'fas fa-file' },
    { value: 'open', label: 'Open', icon: 'fas fa-folder-open' },
    { value: 'save', label: 'Save', icon: 'fas fa-save' },
  ]);

  dangerOptions = JSON.stringify([
    { value: 'clear', label: 'Clear All', icon: 'fas fa-eraser' },
    { value: 'reset', label: 'Reset Settings', icon: 'fas fa-undo' },
    { value: 'delete', label: 'Delete Account', icon: 'fas fa-user-slash' },
  ]);

  displayOptions = JSON.stringify([
    { value: '1', label: 'Small', icon: 'fas fa-compress' },
    { value: '2', label: 'Medium', icon: 'fas fa-expand' },
    { value: '3', label: 'Large', icon: 'fas fa-expand-arrows-alt' },
  ]);

  bothSidesOptions = JSON.stringify([
    { value: 'save', label: 'Save', iconLeft: 'fas fa-save', iconRight: 'fas fa-check' },
    {
      value: 'dl',
      label: 'Download',
      iconLeft: 'fas fa-download',
      iconRight: 'fas fa-arrow-down',
    },
  ]);

  billingOptions = JSON.stringify([
    { value: 'monthly', label: 'Monthly', helperText: '$9.99/mo' },
    { value: 'yearly', label: 'Yearly', helperText: '$99.99/yr' },
  ]);

  exampleCodes: Record<string, string> = {
    avatars: `<!-- Options with Avatars and Status -->
<app-button-toggle-group 
  variant="outlined" 
  color="primary" 
  [attr.options]="avatarsOptions">
</app-button-toggle-group>`,
    gliding: `<!-- Gliding Pill Indicators -->
<app-button-toggle-group 
  gliding 
  variant="soft" 
  color="info" 
  [attr.options]="timeOptions">
</app-button-toggle-group>`,
    colors: `<!-- Multiple color variations -->
<app-button-toggle-group color="primary" [attr.options]="basicOptions"></app-button-toggle-group>
<app-button-toggle-group color="success" [attr.options]="basicOptions"></app-button-toggle-group>`,
    variants: `<!-- Different style variants -->
<app-button-toggle-group variant="soft" [attr.options]="basicOptions"></app-button-toggle-group>
<app-button-toggle-group variant="surface" [attr.options]="basicOptions"></app-button-toggle-group>`,
    sizes: `<!-- Size variations -->
<app-button-toggle-group size="small" [attr.options]="basicOptions"></app-button-toggle-group>
<app-button-toggle-group size="large" [attr.options]="basicOptions"></app-button-toggle-group>`,
    icons: `<!-- Icons and Positions -->
<app-button-toggle-group icon-position="top" [attr.options]="toolsOptions"></app-button-toggle-group>`,
    dropdown: `<!-- Dropdown Mode -->
<app-button-toggle-group 
  mode="dropdown" 
  label="Export" 
  button-action-label="Export"
  [attr.options]="exportOptions">
</app-button-toggle-group>`,
    split: `<!-- Split Button Mode -->
<app-button-toggle-group 
  mode="dropdown" 
  keep-button-label 
  button-action-label="File"
  [attr.options]="fileOptions">
</app-button-toggle-group>`,
    display: `<!-- Display Modes -->
<app-button-toggle-group display-mode="icon-only" [attr.options]="viewModesOptions"></app-button-toggle-group>`,
    orientation: `<!-- Vertical Orientation -->
<app-button-toggle-group orientation="vertical" [attr.options]="priorityOptions"></app-button-toggle-group>`,
    custom: `<!-- Custom Dropdown Content -->
<app-button-toggle-group mode="dropdown" custom-content button-action-label="Filters">
  <div slot="dropdown-content">
    <!-- Custom HTML here -->
  </div>
</app-button-toggle-group>`,
    loading: `<!-- Loading State -->
<app-button-toggle-group loading [attr.options]="basicOptions"></app-button-toggle-group>`,
    states: `<!-- Various States -->
<app-button-toggle-group disabled [attr.options]="basicOptions"></app-button-toggle-group>
<app-button-toggle-group invalid error-message="Selection required" [attr.options]="basicOptions"></app-button-toggle-group>`,
    realworld: `<!-- Billing Cycle Example -->
<app-button-toggle-group full-width color="primary" [attr.options]="billingOptions"></app-button-toggle-group>`,
    dark: `<!-- Dark Theme Support -->
<div class="dark-theme" style="background: #0f172a; padding: 2rem; border-radius: 12px;">
  <app-button-toggle-group color="primary" variant="soft" [attr.options]="basicOptions"></app-button-toggle-group>
</div>`,
  };

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
