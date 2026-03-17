import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmButtonTogglePlaygroundComponent } from '../../../playground/sets/button-toggle-playground/button-toggle-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-button-toggle-demo',
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
  templateUrl: './button-toggle-demo.component.html',
  styleUrl: './button-toggle-demo.component.scss',
})
export class DmButtonToggleDemoComponent extends BaseDemoComponent {
  variants = [
    { id: 'segmented', title: 'Segmented Controls', icon: 'layout-grid', iconLibrary: 'lucide' },
    {
      id: 'gliding',
      title: 'Gliding Pill Animation',
      icon: 'mouse-pointer-2',
      iconLibrary: 'lucide',
    },
    { id: 'colors', title: 'Color Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'styles', title: 'Style Variants', icon: 'swatch-book', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizes', icon: 'scaling', iconLibrary: 'lucide' },
    { id: 'shapes', title: 'Button Shapes', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'avatars', title: 'Avatars & Status', icon: 'circle-user', iconLibrary: 'lucide' },
    { id: 'badges-tooltips', title: 'Badges & Tooltips', icon: 'tag', iconLibrary: 'lucide' },
    { id: 'icons', title: 'With Icons', icon: 'star', iconLibrary: 'lucide' },
    { id: 'display-modes', title: 'Display Modes', icon: 'monitor', iconLibrary: 'lucide' },
    { id: 'dropdown', title: 'Dropdown Mode', icon: 'chevron-down', iconLibrary: 'lucide' },
    {
      id: 'multi-select',
      title: 'Multi-Select & Search',
      icon: 'list-checks',
      iconLibrary: 'lucide',
    },
    { id: 'orientations', title: 'Orientations', icon: 'move-vertical', iconLibrary: 'lucide' },
    { id: 'custom-slots', title: 'Custom Content Slots', icon: 'box', iconLibrary: 'lucide' },
    { id: 'loading', title: 'Loading States', icon: 'refresh-cw', iconLibrary: 'lucide' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  // Code snippets
  segmentedCode = `<dui-button-toggle-group
  mode="segmented"
  label="Select View Mode"
  value="list"
  color="primary"
  [options]="viewOptions"
></dui-button-toggle-group>`;

  glidingCode = `<dui-button-toggle-group
  mode="segmented"
  value="day"
  color="info"
  variant="soft"
  [options]="timeOptions"
></dui-button-toggle-group>`;

  colorCode = `@for (color of ['primary', 'secondary', 'success', 'danger', 'warning', 'info']; track color) {
  <dui-button-toggle-group
    value="option2"
    [color]="color"
    [options]="basicOptions"
  ></dui-button-toggle-group>
}`;

  styleCode = `@for (style of ['filled', 'outlined', 'text', 'soft', 'classic', 'solid', 'surface']; track style) {
  <dui-button-toggle-group
    value="option2"
    color="primary"
    [variant]="style"
    [options]="basicOptions"
  ></dui-button-toggle-group>
}`;

  sizeCode = `@for (size of ['small', 'medium', 'large']; track size) {
  <dui-button-toggle-group
    [size]="size"
    value="option2"
    [options]="basicOptions"
  ></dui-button-toggle-group>
}`;

  shapesCode = `<!-- Rectangle (Default) -->
<dui-button-toggle-group shape="rectangle" value="opt1" [options]="basicOptions"></dui-button-toggle-group>

<!-- Pill Shape -->
<dui-button-toggle-group shape="pill" value="opt1" [options]="basicOptions"></dui-button-toggle-group>

<!-- Circle Shape (best with icon-only) -->
<dui-button-toggle-group shape="circle" display-mode="icon-only" value="left" [options]="alignOptions"></dui-button-toggle-group>

<!-- Square Shape -->
<dui-button-toggle-group shape="square" value="opt1" [options]="basicOptions"></dui-button-toggle-group>`;

  avatarsCode = `<dui-button-toggle-group value="user1">
  <dui-button-toggle value="user1" label="Alex" avatar-src="https://i.pravatar.cc/150?u=a" status="online"></dui-button-toggle>
  <dui-button-toggle value="user2" label="Jordan" avatar-src="https://i.pravatar.cc/150?u=j" status="busy"></dui-button-toggle>
  <dui-button-toggle value="user3" label="Taylor" avatar-src="https://i.pravatar.cc/150?u=t" status="offline"></dui-button-toggle>
</dui-button-toggle-group>`;

  badgesCode = `<dui-button-toggle-group value="inbox">
  <dui-button-toggle value="inbox" label="Inbox" icon="fas fa-inbox" badge="12" tooltip="12 New Messages"></dui-button-toggle>
  <dui-button-toggle value="sent" label="Sent" icon="fas fa-paper-plane" tooltip="View sent items"></dui-button-toggle>
  <dui-button-toggle value="drafts" label="Drafts" icon="fas fa-file-alt" badge="3" tooltip="3 Drafts waiting"></dui-button-toggle>
</dui-button-toggle-group>`;

  iconCode = `<dui-button-toggle-group
  label="Alignment"
  value="center"
  color="secondary"
  [options]="alignOptions"
></dui-button-toggle-group>`;

  iconOnlyCode = `<dui-button-toggle-group
  label="View"
  value="grid"
  color="primary"
  display-mode="icon-only"
  [options]="iconOnlyOptions"
></dui-button-toggle-group>`;

  dropdownCode = `<dui-button-toggle-group
  mode="dropdown"
  label="Export Options"
  value="pdf"
  [options]="exportOptions"
></dui-button-toggle-group>`;

  splitButtonCode = `<dui-button-toggle-group
  mode="dropdown"
  keep-button-label="true"
  label="File Operations"
  value="file"
  [options]="actionsMenuOptions"
></dui-button-toggle-group>`;

  displayCode = `<dui-button-toggle-group
  display-mode="icon-only"
  value="grid"
  [options]="iconOnlyOptions"
></dui-button-toggle-group>`;

  multiSelectCode = `<dui-button-toggle-group
  multi-select="true"
  search-enabled="true"
  batch-actions="true"
  label="Select Categories"
  [options]="categoryOptions"
></dui-button-toggle-group>

<dui-button-toggle-group
  mode="dropdown"
  multi-select="true"
  search-enabled="true"
  export-enabled="true"
  label="Multi-Select Dropdown"
  [options]="userListOptions"
></dui-button-toggle-group>`;

  orientationCode = `<dui-button-toggle-group
  orientation="vertical"
  value="option2"
  [options]="basicOptions"
></dui-button-toggle-group>`;

  customSlotCode = `<dui-button-toggle-group
  mode="dropdown"
  label="Advanced Filters"
  custom-content="true"
>
  <div slot="dropdown-content">
    <div class="custom-panel">
      <!-- Your custom HTML here -->
    </div>
  </div>
</dui-button-toggle-group>`;

  loadingCode = `<dui-button-toggle-group
  mode="dropdown"
  label="Save Document"
  value="cloud"
  [loading]="true"
  [options]="saveOptions"
></dui-button-toggle-group>`;

  stateCode = `<dui-button-toggle-group
  value="option2"
  [disabled]="true"
  [options]="basicOptions"
></dui-button-toggle-group>`;

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

  categoryOptions = [
    { value: 'tech', label: 'Technology', icon: 'fas fa-laptop' },
    { value: 'design', label: 'Design', icon: 'fas fa-paint-brush' },
    { value: 'business', label: 'Business', icon: 'fas fa-briefcase' },
    { value: 'health', label: 'Health', icon: 'fas fa-heartbeat' },
    { value: 'science', label: 'Science', icon: 'fas fa-atom' },
  ];

  userListOptions = [
    { value: '1', label: 'Alice Cooper', avatarSrc: 'https://i.pravatar.cc/150?u=1' },
    { value: '2', label: 'Bob Martin', avatarSrc: 'https://i.pravatar.cc/150?u=2' },
    { value: '3', label: 'Charlie Brown', avatarSrc: 'https://i.pravatar.cc/150?u=3' },
    { value: '4', label: 'Diana Prince', avatarSrc: 'https://i.pravatar.cc/150?u=4' },
  ];
}
