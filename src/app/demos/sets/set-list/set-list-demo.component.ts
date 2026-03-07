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
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'basic', title: 'Basic Lists', icon: '📝' },
    { id: 'colors', title: 'Color Variants', icon: '🎨' },
    { id: 'sizes', title: 'Size Variants', icon: '📏' },
    { id: 'nested', title: 'Nested Lists', icon: '🌳' },
    { id: 'features', title: 'Special Features', icon: '✨' },
    { id: 'context-menu', title: 'Context Menu', icon: '📋' },
    { id: 'advanced-menu', title: 'Advanced Menu', icon: '🎯' },
    { id: 'grouping', title: 'Grouping & Multiselect', icon: '📁' },
    { id: 'selection', title: 'Interactive Selection', icon: '🎮' },
    { id: 'checkboxes', title: 'Checkboxes & Badges', icon: '☑️' },
    { id: 'tags', title: 'Tags & Pills', icon: '🏷️' },
    { id: 'config', title: 'Configuration Demo', icon: '⚙️' },
  ];

  // Code examples for each section
  basicCode = signal(`<ui-list>
  <ui-list-item label="Home" icon="fas fa-home"></ui-list-item>
  <ui-list-item label="Dashboard" icon="fas fa-chart-bar"></ui-list-item>
  <ui-list-item label="Settings" icon="fas fa-cog"></ui-list-item>
</ui-list>`);

  colorCode = signal(`<ui-list color="primary">
  <ui-list-item label="Item 1"></ui-list-item>
  <ui-list-item label="Item 2"></ui-list-item>
</ui-list>

<ui-list color="success">
  <ui-list-item label="Completed"></ui-list-item>
</ui-list>

<ui-list color="danger">
  <ui-list-item label="Critical"></ui-list-item>
</ui-list>`);

  sizeCode = signal(`<ui-list size="small">
  <ui-list-item label="Small Item"></ui-list-item>
</ui-list>

<ui-list size="medium">
  <ui-list-item label="Medium Item"></ui-list-item>
</ui-list>

<ui-list size="large">
  <ui-list-item label="Large Item"></ui-list-item>
</ui-list>`);

  variantCode = signal(`<ui-list variant="filled">
  <ui-list-item label="Text"></ui-list-item>
</ui-list>

<ui-list variant="outlined">
  <ui-list-item label="Outlined"></ui-list-item>
</ui-list>

<ui-list variant="soft">
  <ui-list-item label="Soft"></ui-list-item>
</ui-list>`);

  nestedCode = signal(`<ui-list>
  <ui-list-item label="Documents" collapsible expanded>
    <div slot="children">
      <ui-list-item label="Work" level="1"></ui-list-item>
      <ui-list-item label="Personal" level="1" collapsible>
        <div slot="children">
          <ui-list-item label="Photos" level="2"></ui-list-item>
          <ui-list-item label="Documents" level="2"></ui-list-item>
        </div>
      </ui-list-item>
    </div>
  </ui-list-item>
</ui-list>`);

  featureCode = signal(`<ui-list>
  <ui-list-item label="Item 1" divider></ui-list-item>
  <ui-list-item label="Item 2"></ui-list-item>
</ui-list>

<ui-list dense>
  <ui-list-item label="Compact 1"></ui-list-item>
  <ui-list-item label="Compact 2"></ui-list-item>
</ui-list>

<ui-list rounded elevated>
  <ui-list-item label="Styled Item"></ui-list-item>
</ui-list>`);

  contextMenuCode = signal(`<ui-list>
  <ui-list-item label="File" context-menu>
    <app-context-menu slot="context">
      <app-context-menu-item label="New"></app-context-menu-item>
      <app-context-menu-item label="Open"></app-context-menu-item>
      <app-context-menu-item label="Close"></app-context-menu-item>
    </app-context-menu>
  </ui-list-item>
</ui-list>`);

  advancedMenuCode = signal(`<ui-list>
  <ui-list-item label="Documents">
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
  </ui-list-item>
</ui-list>`);

  groupingCode = signal(`<ui-list grouped>
  <ui-list-group label="RECENT FILES">
    <ui-list-item label="Document.pdf"></ui-list-item>
    <ui-list-item label="Presentation.pptx"></ui-list-item>
  </ui-list-group>
  <ui-list-group label="ARCHIVED">
    <ui-list-item label="Report.xlsx"></ui-list-item>
  </ui-list-group>
</ui-list>

<ui-list multiselectable>
  <ui-list-item label="Item 1"></ui-list-item>
  <ui-list-item label="Item 2"></ui-list-item>
</ui-list>`);

  selectionCode = signal(`<ui-list selectable>
  <ui-list-item label="Option 1"></ui-list-item>
  <ui-list-item label="Option 2"></ui-list-item>
  <ui-list-item label="Option 3"></ui-list-item>
</ui-list>

<ui-list selectable multiselectable>
  <ui-list-item label="Task 1"></ui-list-item>
  <ui-list-item label="Task 2"></ui-list-item>
</ui-list>`);

  checkboxCode = signal(`<ui-list selectable>
  <ui-list-item label="Task 1" show-checkbox></ui-list-item>
  <ui-list-item label="Task 2" show-checkbox></ui-list-item>
</ui-list>

<ui-list>
  <ui-list-item label="Inbox" badge="24" badge-color="danger"></ui-list-item>
  <ui-list-item label="Important" badge="5" badge-color="warning"></ui-list-item>
</ui-list>`);

  tagsCode = signal(`<ui-list>
  <ui-list-item label="Frontend Project">
    <div slot="tags">
      <app-tag>React</app-tag>
      <app-tag>TypeScript</app-tag>
    </div>
  </ui-list-item>
</ui-list>

<ui-list>
  <ui-list-item label="Item with Pills">
    <div slot="pills">
      <app-pill>Pending</app-pill>
      <app-pill>Review</app-pill>
    </div>
  </ui-list-item>
</ui-list>`);

  configCode = signal(`<ui-list-item
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
></ui-list-item>`);
}
