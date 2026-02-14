import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPlaygroundComponent } from './components/tabs-playground/tabs-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-tabs-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TabsPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tabs-demo.component.html',
  styleUrl: './set-tabs-demo.component.scss',
})
export class SetTabsDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'horizontal-basic', title: 'Horizontal Basic', icon: '↔️' },
    { id: 'vertical-basic', title: 'Vertical Basic', icon: '↕️' },
    { id: 'variant-default', title: 'Default Variant', icon: '📋' },
    { id: 'variant-underline', title: 'Underline Variant', icon: '▁' },
    { id: 'variant-pills', title: 'Pills Variant', icon: '💊' },
    { id: 'variant-enclosed', title: 'Enclosed Variant', icon: '▢' },
    { id: 'variant-buttons', title: 'Buttons Variant', icon: '🔘' },
    { id: 'size-small', title: 'Small Size', icon: '🔹' },
    { id: 'size-medium', title: 'Medium Size', icon: '🔸' },
    { id: 'size-large', title: 'Large Size', icon: '🔶' },
    { id: 'color-primary', title: 'Primary Color', icon: '🔵' },
    { id: 'color-success', title: 'Success Color', icon: '🟢' },
    { id: 'color-warning', title: 'Warning Color', icon: '🟡' },
    { id: 'color-danger', title: 'Danger Color', icon: '🔴' },
    { id: 'align-start', title: 'Align Start', icon: '◀️' },
    { id: 'align-center', title: 'Align Center', icon: '⬛' },
    { id: 'align-end', title: 'Align End', icon: '▶️' },
    { id: 'indicator-bottom', title: 'Indicator Bottom', icon: '🔽' },
    { id: 'indicator-top', title: 'Indicator Top', icon: '🔼' },
    { id: 'indicator-left', title: 'Indicator Left', icon: '◀️' },
    { id: 'indicator-right', title: 'Indicator Right', icon: '▶️' },
    { id: 'full-width', title: 'Full Width', icon: '↔️' },
    { id: 'scrollable', title: 'Scrollable Tabs', icon: '📜' },
    { id: 'with-icons', title: 'With Icons', icon: '🎨' },
    { id: 'with-badges', title: 'With Badges', icon: '🔢' },
    { id: 'closable', title: 'Closable Tabs', icon: '❌' },
    { id: 'with-add-button', title: 'With Add Button', icon: '➕' },
    { id: 'animated', title: 'Animated Tabs', icon: '✨' },
    { id: 'drag-enabled', title: 'Drag to Reorder', icon: '🔄' },
    { id: 'editable-labels', title: 'Editable Labels', icon: '✏️' },
    { id: 'overflow-menu', title: 'Overflow Menu', icon: '⋯' },
    { id: 'lazy-loading', title: 'Lazy Loading', icon: '⏱️' },
    { id: 'disabled-tabs', title: 'Disabled Tabs', icon: '🚫' },
    { id: 'dynamic-tabs', title: 'Dynamic Tabs', icon: '⚡' },
  ];

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  horizontalBasicCode = signal(`<app-tab-stack orientation="horizontal" active-tab="t1">
  <app-tab label="Overview" value="t1">Overview Content</app-tab>
  <app-tab label="Documents" value="t2">Documents Content</app-tab>
  <app-tab label="Team" value="t3">Team Content</app-tab>
</app-tab-stack>`);

  verticalBasicCode = signal(`<app-tab-stack orientation="vertical" active-tab="t1">
  <app-tab label="Configuration" value="t1">Config Content</app-tab>
  <app-tab label="Security" value="t2">Security Content</app-tab>
  <app-tab label="Notifications" value="t3">Notification Content</app-tab>
</app-tab-stack>`);

  variantDefaultCode = signal(`<app-tab-stack variant="default" active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  <app-tab label="Tab 3" value="t3">Content 3</app-tab>
</app-tab-stack>`);

  variantUnderlineCode = signal(`<app-tab-stack variant="underline" active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  <app-tab label="Tab 3" value="t3">Content 3</app-tab>
</app-tab-stack>`);

  variantPillsCode = signal(`<app-tab-stack variant="pills" active-tab="t1" color="success">
  <app-tab label="Active" value="t1">Active Content</app-tab>
  <app-tab label="Completed" value="t2">Completed Content</app-tab>
  <app-tab label="Archived" value="t3">Archived Content</app-tab>
</app-tab-stack>`);

  variantEnclosedCode = signal(`<app-tab-stack variant="enclosed" active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  <app-tab label="Tab 3" value="t3">Content 3</app-tab>
</app-tab-stack>`);

  variantButtonsCode = signal(`<app-tab-stack variant="buttons" active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  <app-tab label="Tab 3" value="t3">Content 3</app-tab>
</app-tab-stack>`);

  sizeSmallCode = signal(`<app-tab-stack size="small" active-tab="t1">
  <app-tab label="Small 1" value="t1">Content 1</app-tab>
  <app-tab label="Small 2" value="t2">Content 2</app-tab>
  <app-tab label="Small 3" value="t3">Content 3</app-tab>
</app-tab-stack>`);

  sizeMediumCode = signal(`<app-tab-stack size="medium" active-tab="t1">
  <app-tab label="Medium 1" value="t1">Content 1</app-tab>
  <app-tab label="Medium 2" value="t2">Content 2</app-tab>
  <app-tab label="Medium 3" value="t3">Content 3</app-tab>
</app-tab-stack>`);

  sizeLargeCode = signal(`<app-tab-stack size="large" active-tab="t1">
  <app-tab label="Large 1" value="t1">Content 1</app-tab>
  <app-tab label="Large 2" value="t2">Content 2</app-tab>
  <app-tab label="Large 3" value="t3">Content 3</app-tab>
</app-tab-stack>`);

  colorPrimaryCode = signal(`<app-tab-stack color="primary" active-tab="t1">
  <app-tab label="Primary 1" value="t1">Content 1</app-tab>
  <app-tab label="Primary 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  colorSuccessCode = signal(`<app-tab-stack color="success" active-tab="t1">
  <app-tab label="Success 1" value="t1">Content 1</app-tab>
  <app-tab label="Success 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  colorWarningCode = signal(`<app-tab-stack color="warning" active-tab="t1">
  <app-tab label="Warning 1" value="t1">Content 1</app-tab>
  <app-tab label="Warning 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  colorDangerCode = signal(`<app-tab-stack color="danger" active-tab="t1">
  <app-tab label="Danger 1" value="t1">Content 1</app-tab>
  <app-tab label="Danger 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  alignStartCode = signal(`<app-tab-stack align="start" active-tab="t1">
  <app-tab label="Start 1" value="t1">Content 1</app-tab>
  <app-tab label="Start 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  alignCenterCode = signal(`<app-tab-stack align="center" active-tab="t1">
  <app-tab label="Center 1" value="t1">Content 1</app-tab>
  <app-tab label="Center 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  alignEndCode = signal(`<app-tab-stack align="end" active-tab="t1">
  <app-tab label="End 1" value="t1">Content 1</app-tab>
  <app-tab label="End 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  indicatorBottomCode = signal(`<app-tab-stack indicator-position="bottom" active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  indicatorTopCode = signal(`<app-tab-stack indicator-position="top" active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  indicatorLeftCode = signal(`<app-tab-stack orientation="vertical" indicator-position="left" active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  indicatorRightCode = signal(`<app-tab-stack orientation="vertical" indicator-position="right" active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  fullWidthCode = signal(`<app-tab-stack full-width active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  <app-tab label="Tab 3" value="t3">Content 3</app-tab>
</app-tab-stack>`);

  scrollableCode = signal(`<app-tab-stack scrollable active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  <app-tab label="Tab 3" value="t3">Content 3</app-tab>
  <app-tab label="Tab 4" value="t4">Content 4</app-tab>
  <app-tab label="Tab 5" value="t5">Content 5</app-tab>
  <app-tab label="Tab 6" value="t6">Content 6</app-tab>
  <app-tab label="Tab 7" value="t7">Content 7</app-tab>
  <app-tab label="Tab 8" value="t8">Content 8</app-tab>
</app-tab-stack>`);

  withIconsCode = signal(`<app-tab-stack active-tab="t1">
  <app-tab label="Home" value="t1" icon="fas fa-home">Home Content</app-tab>
  <app-tab label="Settings" value="t2" icon="fas fa-cog">Settings Content</app-tab>
  <app-tab label="Profile" value="t3" icon="fas fa-user">Profile Content</app-tab>
</app-tab-stack>`);

  withBadgesCode = signal(`<app-tab-stack active-tab="t1">
  <app-tab label="Messages" value="t1" badge="5" badge-color="danger">Messages</app-tab>
  <app-tab label="Tasks" value="t2" badge="New" badge-color="success">Tasks</app-tab>
  <app-tab label="Alerts" value="t3" badge="!" badge-color="warning">Alerts</app-tab>
</app-tab-stack>`);

  closableCode = signal(`<app-tab-stack closable active-tab="t1">
  <app-tab label="README.md" value="t1">Markdown content</app-tab>
  <app-tab label="index.ts" value="t2">TypeScript content</app-tab>
  <app-tab label="styles.css" value="t3">CSS content</app-tab>
</app-tab-stack>`);

  withAddButtonCode = signal(`<app-tab-stack show-add-button active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  animatedCode = signal(`<app-tab-stack animated active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  <app-tab label="Tab 3" value="t3">Content 3</app-tab>
</app-tab-stack>`);

  dragEnabledCode = signal(`<app-tab-stack drag-enabled active-tab="t1">
  <app-tab label="Drag Me 1" value="t1">Content 1</app-tab>
  <app-tab label="Drag Me 2" value="t2">Content 2</app-tab>
  <app-tab label="Drag Me 3" value="t3">Content 3</app-tab>
</app-tab-stack>`);

  editableLabelsCode = signal(`<app-tab-stack editable-labels active-tab="t1">
  <app-tab label="Edit Me 1" value="t1">Content 1</app-tab>
  <app-tab label="Edit Me 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);

  overflowMenuCode = signal(`<app-tab-stack show-overflow-button scrollable active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  <app-tab label="Tab 3" value="t3">Content 3</app-tab>
  <app-tab label="Tab 4" value="t4">Content 4</app-tab>
  <app-tab label="Tab 5" value="t5">Content 5</app-tab>
</app-tab-stack>`);

  lazyLoadingCode = signal(`<app-tab-stack lazy-loading active-tab="t1">
  <app-tab label="Lazy Tab 1" value="t1">Content loads on demand</app-tab>
  <app-tab label="Lazy Tab 2" value="t2">Content loads on demand</app-tab>
</app-tab-stack>`);

  disabledTabsCode = signal(`<app-tab-stack active-tab="t1">
  <app-tab label="Active" value="t1">Active Content</app-tab>
  <app-tab label="Disabled" value="t2" disabled>Disabled Content</app-tab>
  <app-tab label="Also Active" value="t3">Also Active Content</app-tab>
</app-tab-stack>`);

  dynamicTabsCode = signal(`<app-tab-stack
  closable
  show-add-button
  show-close-all-button
  active-tab="t1">
  <app-tab label="Dynamic 1" value="t1">Content 1</app-tab>
  <app-tab label="Dynamic 2" value="t2">Content 2</app-tab>
</app-tab-stack>`);
}
