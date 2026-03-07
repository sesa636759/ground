import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmListPlaygroundComponent } from '../../../playground/sets/set-list-playground/list-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-set-list-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmListPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-list-demo.component.html',
  styleUrl: './set-list-demo.component.scss',
})
export class DmSetListDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: 'ðŸŽ®' },
    { id: 'basic', title: 'Basic Lists', icon: 'ðŸ“' },
    { id: 'colors', title: 'Color Variants', icon: 'ðŸŽ¨' },
    { id: 'sizes', title: 'Size Variants', icon: 'ðŸ“' },
    { id: 'nested', title: 'Nested Lists', icon: 'ðŸŒ³' },
    { id: 'features', title: 'Special Features', icon: 'âœ¨' },
    { id: 'context-menu', title: 'Context Menu', icon: 'ðŸ“‹' },
    { id: 'advanced-menu', title: 'Advanced Menu', icon: 'ðŸŽ¯' },
    { id: 'grouping', title: 'Grouping & Multiselect', icon: 'ðŸ“‚' },
    { id: 'selection', title: 'Interactive Selection', icon: 'ðŸŽ®' },
    { id: 'checkboxes', title: 'Checkboxes & Badges', icon: 'â˜‘ï¸' },
    { id: 'tags', title: 'Tags & Pills', icon: 'ðŸ·ï¸' },
    { id: 'config', title: 'Configuration Demo', icon: 'âš™ï¸' },
  ];

  // Code examples for each section
  basicCode = signal(`<app-list>
  <app-list-item label="Home" icon="fas fa-home"></app-list-item>
  <app-list-item label="Dashboard" icon="fas fa-chart-bar"></app-list-item>
  <app-list-item label="Settings" icon="fas fa-cog"></app-list-item>
</app-list>`);

  colorCode = signal(`<app-list color="primary">
  <app-list-item label="Item 1"></app-list-item>
  <app-list-item label="Item 2"></app-list-item>
</app-list>

<app-list color="success">
  <app-list-item label="Completed"></app-list-item>
</app-list>

<app-list color="danger">
  <app-list-item label="Critical"></app-list-item>
</app-list>`);

  sizeCode = signal(`<app-list size="small">
  <app-list-item label="Small Item"></app-list-item>
</app-list>

<app-list size="medium">
  <app-list-item label="Medium Item"></app-list-item>
</app-list>

<app-list size="large">
  <app-list-item label="Large Item"></app-list-item>
</app-list>`);

  variantCode = signal(`<app-list variant="filled">
  <app-list-item label="Text"></app-list-item>
</app-list>

<app-list variant="outlined">
  <app-list-item label="Outlined"></app-list-item>
</app-list>

<app-list variant="soft">
  <app-list-item label="Soft"></app-list-item>
</app-list>`);

  nestedCode = signal(`<app-list>
  <app-list-item label="Documents" collapsible expanded>
    <div slot="children">
      <app-list-item label="Work" level="1"></app-list-item>
      <app-list-item label="Personal" level="1" collapsible>
        <div slot="children">
          <app-list-item label="Photos" level="2"></app-list-item>
          <app-list-item label="Documents" level="2"></app-list-item>
        </div>
      </app-list-item>
    </div>
  </app-list-item>
</app-list>`);

  featureCode = signal(`<app-list>
  <app-list-item label="Item 1" divider></app-list-item>
  <app-list-item label="Item 2"></app-list-item>
</app-list>

<app-list dense>
  <app-list-item label="Compact 1"></app-list-item>
  <app-list-item label="Compact 2"></app-list-item>
</app-list>

<app-list rounded elevated>
  <app-list-item label="Styled Item"></app-list-item>
</app-list>`);

  contextMenuCode = signal(`<app-list>
  <app-list-item label="File" context-menu>
    <app-context-menu slot="context">
      <app-context-menu-item label="New"></app-context-menu-item>
      <app-context-menu-item label="Open"></app-context-menu-item>
      <app-context-menu-item label="Close"></app-context-menu-item>
    </app-context-menu>
  </app-list-item>
</app-list>`);

  advancedMenuCode = signal(`<app-list>
  <app-list-item label="Documents">
    <app-context-menu slot="context">
      <app-context-menu-item label="View">
        <app-context-menu-item label="As List"></app-context-menu-item>
        <app-context-menu-item label="As Grid"></app-context-menu-item>
      </app-context-menu-item>
      <app-context-menu-item label="Share">
        <app-context-menu-item label="Email"></app-context-menu-item>
        <app-context-menu-item label="Link"></app-context-menu-item>
      </app-context-menu-item>
    </app-context-menu>
  </app-list-item>
</app-list>`);

  groupingCode = signal(`<app-list grouped>
  <app-list-group label="RECENT FILES">
    <app-list-item label="Document.pdf"></app-list-item>
    <app-list-item label="Presentation.pptx"></app-list-item>
  </app-list-group>
  <app-list-group label="ARCHIVED">
    <app-list-item label="Report.xlsx"></app-list-item>
  </app-list-group>
</app-list>

<app-list multiselectable>
  <app-list-item label="Item 1"></app-list-item>
  <app-list-item label="Item 2"></app-list-item>
</app-list>`);

  selectionCode = signal(`<app-list selectable>
  <app-list-item label="Option 1"></app-list-item>
  <app-list-item label="Option 2"></app-list-item>
  <app-list-item label="Option 3"></app-list-item>
</app-list>

<app-list selectable multiselectable>
  <app-list-item label="Task 1"></app-list-item>
  <app-list-item label="Task 2"></app-list-item>
</app-list>`);

  checkboxCode = signal(`<app-list selectable>
  <app-list-item label="Task 1" show-checkbox></app-list-item>
  <app-list-item label="Task 2" show-checkbox></app-list-item>
</app-list>

<app-list>
  <app-list-item label="Inbox" badge="24" badge-color="danger"></app-list-item>
  <app-list-item label="Important" badge="5" badge-color="warning"></app-list-item>
</app-list>`);

  tagsCode = signal(`<app-list>
  <app-list-item label="Frontend Project">
    <div slot="tags">
      <app-tag>React</app-tag>
      <app-tag>TypeScript</app-tag>
    </div>
  </app-list-item>
</app-list>

<app-list>
  <app-list-item label="Item with Pills">
    <div slot="pills">
      <app-pill>Pending</app-pill>
      <app-pill>Review</app-pill>
    </div>
  </app-list-item>
</app-list>`);

  configCode = signal(`<app-list-item
  label="Project Alpha"
  sublabel="Due in 3 days"
  icon="fas fa-folder"
  action-icon="fas fa-chevron-right"
  badge="Active"
  badge-color="success"
  counter="7"
  size="medium"
  variant="filled"
  color="primary"
  multiline
  value="item-1"
></app-list-item>`);
}
