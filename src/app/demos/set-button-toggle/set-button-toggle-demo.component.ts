import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonTogglePlaygroundComponent } from './components/button-toggle-playground/button-toggle-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-button-toggle-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonTogglePlaygroundComponent, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-button-toggle-demo.component.html',
  styleUrl: './set-button-toggle-demo.component.scss',
})
export class SetButtonToggleDemoComponent implements OnInit {
  playgroundCode = `<app-button-toggle
  [options]="options"
  [(ngModel)]="selected"
></app-button-toggle>`;

  // Options Data (Core sets)
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

  alignOptions = [
    { value: 'left', label: 'Left', icon: 'fas fa-align-left' },
    { value: 'center', label: 'Center', icon: 'fas fa-align-center' },
    { value: 'right', label: 'Right', icon: 'fas fa-align-right' },
  ];

  toolOptions = [
    { value: 'pencil', label: 'Pencil', icon: 'fas fa-pencil-alt' },
    { value: 'brush', label: 'Brush', icon: 'fas fa-paint-brush' },
    { value: 'eraser', label: 'Eraser', icon: 'fas fa-eraser' },
  ];

  planOptions = [
    { value: 'basic', label: 'Basic - $9/mo' },
    { value: 'pro', label: 'Pro - $29/mo' },
    { value: 'premium', label: 'Premium - $99/mo' },
  ];

  filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
    { value: 'archived', label: 'Archived' },
  ];

  dateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'year', label: 'This Year' },
  ];

  paymentOptions = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly (Save 5%)' },
    { value: 'yearly', label: 'Yearly (Save 15%)' },
  ];

  labelOnlyOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  iconOnlyOptions = [
    { value: 'list', icon: 'fas fa-list' },
    { value: 'grid', icon: 'fas fa-th' },
    { value: 'table', icon: 'fas fa-table' },
  ];

  iconLabelOptions = [
    { value: 'home', label: 'Home', icon: 'fas fa-home' },
    { value: 'search', label: 'Search', icon: 'fas fa-search' },
    { value: 'settings', label: 'Settings', icon: 'fas fa-cog' },
  ];

  bothSidesOptions = [
    { value: 'save', label: 'Save', iconLeft: 'fas fa-save', iconRight: 'fas fa-check' },
    {
      value: 'download',
      label: 'Download',
      iconLeft: 'fas fa-download',
      iconRight: 'fas fa-arrow-down',
    },
    { value: 'upload', label: 'Upload', iconLeft: 'fas fa-upload', iconRight: 'fas fa-arrow-up' },
  ];

  avatarOptions = [
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
      status: 'away',
    },
  ];

  timeOptions = [
    { value: 'day', label: 'Day', icon: 'fas fa-sun' },
    { value: 'week', label: 'Week', icon: 'fas fa-calendar-week' },
    { value: 'month', label: 'Month', icon: 'fas fa-calendar-alt' },
  ];

  priorityOptions = [
    { value: 'low', label: 'Low', icon: 'fas fa-arrow-down' },
    { value: 'medium', label: 'Med', icon: 'fas fa-minus' },
    { value: 'high', label: 'High', icon: 'fas fa-arrow-up' },
  ];

  exportOptions = [
    { value: 'pdf', label: 'Export as PDF', icon: 'fas fa-file-pdf' },
    { value: 'excel', label: 'Export as Excel', icon: 'fas fa-file-excel' },
    { value: 'csv', label: 'Export as CSV', icon: 'fas fa-file-csv' },
    { value: 'json', label: 'Export as JSON', icon: 'fas fa-file-code' },
  ];

  saveOptions = [
    { value: 'cloud', label: 'Save to Cloud', icon: 'fas fa-cloud' },
    { value: 'local', label: 'Save Locally', icon: 'fas fa-hard-drive' },
    { value: 'usb', label: 'Save to USB', icon: 'fas fa-usb' },
  ];

  quickActions = [
    { value: 'edit', label: 'Edit', icon: 'fas fa-edit' },
    { value: 'copy', label: 'Copy', icon: 'fas fa-copy' },
    { value: 'delete', label: 'Delete', icon: 'fas fa-trash' },
  ];

  shareOptions = [
    { value: 'email', label: 'Email', icon: 'fas fa-envelope' },
    { value: 'link', label: 'Copy Link', icon: 'fas fa-link' },
    { value: 'social', label: 'Social Media', icon: 'fas fa-share-alt' },
  ];

  actionsMenuOptions = [
    { value: 'new', label: 'New File', icon: 'fas fa-file' },
    { value: 'open', label: 'Open File', icon: 'fas fa-folder-open' },
    { value: 'save', label: 'Save', icon: 'fas fa-save' },
    { value: 'print', label: 'Print', icon: 'fas fa-print' },
    { value: 'settings', label: 'Settings', icon: 'fas fa-cog' },
  ];

  fileMenuOptions = [
    { value: 'new', label: 'New', icon: 'fas fa-file' },
    { value: 'open', label: 'Open', icon: 'fas fa-folder-open' },
    { value: 'save', label: 'Save', icon: 'fas fa-save' },
    { value: 'saveAs', label: 'Save As...', icon: 'fas fa-save' },
    { value: 'close', label: 'Close', icon: 'fas fa-times' },
  ];

  editMenuOptions = [
    { value: 'cut', label: 'Cut', icon: 'fas fa-cut' },
    { value: 'copy', label: 'Copy', icon: 'fas fa-copy' },
    { value: 'paste', label: 'Paste', icon: 'fas fa-paste' },
    { value: 'undo', label: 'Undo', icon: 'fas fa-undo' },
    { value: 'redo', label: 'Redo', icon: 'fas fa-redo' },
  ];

  moreOptions = [
    { value: 'refresh', label: 'Refresh', icon: 'fas fa-sync' },
    { value: 'help', label: 'Help', icon: 'fas fa-question-circle' },
    { value: 'about', label: 'About', icon: 'fas fa-info-circle' },
    { value: 'feedback', label: 'Send Feedback', icon: 'fas fa-comment' },
  ];

  dangerOptions = [
    { value: 'clear', label: 'Clear All', icon: 'fas fa-eraser' },
    { value: 'reset', label: 'Reset Settings', icon: 'fas fa-undo-alt' },
    { value: 'delete', label: 'Delete Account', icon: 'fas fa-trash' },
  ];

  darkOptions = [
    { value: 'list', label: 'List View', icon: 'fas fa-list' },
    { value: 'grid', label: 'Grid View', icon: 'fas fa-th' },
    { value: 'compact', label: 'Compact', icon: 'fas fa-align-justify' },
  ];

  darkDropdownOptions = [
    { value: 'pdf', label: 'PDF Document', icon: 'fas fa-file-pdf' },
    { value: 'excel', label: 'Excel Sheet', icon: 'fas fa-file-excel' },
    { value: 'word', label: 'Word Doc', icon: 'fas fa-file-word' },
  ];

  dateRangeOptions = [
    { label: 'Last 7 days', value: 'Last 7 days' },
    { label: 'Last 30 days', value: 'Last 30 days' },
    { label: 'Last 90 days', value: 'Last 90 days' },
    { label: 'Custom range', value: 'Custom range' },
  ];

  statusOptions = [
    { label: 'All', value: 'All' },
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
    { label: 'Pending', value: 'Pending' },
  ];

  themeOptions = [
    { label: 'Light', value: 'Light' },
    { label: 'Dark', value: 'Dark' },
    { label: 'Auto', value: 'Auto' },
  ];

  // Logs for examples
  dropdownBasicLog = signal('Button label changes to selected option');
  dropdownFixedLog = signal('Button label stays "Actions" always');
  dropdownIconsLog = signal('Dropdown with icon options');

  splitFileLog = signal('Select actions from dropdown');
  splitEditLog = signal('Choose edit action');
  splitMoreLog = signal('Access more options');
  splitDangerLog = signal('Destructive actions menu');

  // Custom Content State
  filterDate = 'Last 7 days';
  filterStatus = 'All';
  filterFlagged = false;
  customFilterLog = signal('Configure filters and click Apply');

  selectedColor = '#3DCD58';
  customColorHex = signal('#3DCD58');
  customColorLog = signal('Pick a color from palette');

  settingsNotif = false;
  settingsAutosave = true;
  settingsTheme = 'Light';
  customSettingsLog = signal('Configure quick settings');

  searchQuery = '';
  customSearchLog = signal('Configure search options');

  simulateLog = signal('Click Export to simulate loading');

  // Helper for JSON strings
  jsonOptions = (opts: any) => JSON.stringify(opts);

  ngOnInit() {}

  onDropdownFixedAction(event: any) {
    const option = this.actionsMenuOptions.find((opt) => opt.value === event.detail.value);
    this.dropdownFixedLog.set(`Action: ${option?.label || event.detail.value} executed!`);
  }

  onDropdownFixedChange(event: any) {
    const option = this.actionsMenuOptions.find((opt) => opt.value === event.detail.value);
    this.dropdownFixedLog.set(`Selected: ${option?.label} (label unchanged)`);
  }

  onDropdownIconsAction(event: any) {
    this.dropdownIconsLog.set(`Saving to ${event.detail.value}...`);
  }

  onDropdownIconsChange(event: any) {
    this.dropdownIconsLog.set(`Location changed to: ${event.detail.value}`);
  }

  // Example Handlers
  onDropdownAction(val: any, log: any, prefix: string) {
    log.set(`${prefix}: ${val} executed!`);
  }

  onDropdownChange(val: any, log: any) {
    log.set(`Selection changed to: ${val}`);
  }

  applyFilters(group: any) {
    this.customFilterLog.set(`Applied: ${this.filterDate}, Flagged=${this.filterFlagged}`);
    group.removeAttribute('open');
  }

  pickColor(color: string) {
    this.selectedColor = color;
    this.customColorHex.set(color);
    this.customColorLog.set(`Selected: ${color}`);
  }

  onSimulateAction(event: any, group: any) {
    group.loading = true;
    this.simulateLog.set(`Processing ${event.detail.value}...`);
    setTimeout(() => {
      group.loading = false;
      this.simulateLog.set(`Success: ${event.detail.value} exported.`);
      setTimeout(() => this.simulateLog.set('Click Export to simulate loading'), 2000);
    }, 2000);
  }

  onSearchAction() {
    this.customSearchLog.set(
      this.searchQuery ? `Searching for: "${this.searchQuery}"` : 'Enter a search term',
    );
  }
}
