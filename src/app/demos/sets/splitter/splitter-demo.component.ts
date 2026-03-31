import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmSplitterPlaygroundComponent } from '../../../playground/sets/splitter-playground/splitter-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-splitter-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmSplitterPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './splitter-demo.component.html',
  styleUrl: './splitter-demo.component.scss',
})
export class DmSplitterDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    // Basic Layouts
    { id: 'horizontal-basic', title: 'Horizontal Basic', icon: 'columns', iconLibrary: 'lucide' },
    { id: 'vertical-basic', title: 'Vertical Basic', icon: 'rows', iconLibrary: 'lucide' },
    { id: 'two-panels', title: 'Two Panels', icon: 'layout-columns', iconLibrary: 'lucide' },
    { id: 'three-panels', title: 'Three Panels', icon: 'layout-grid', iconLibrary: 'lucide' },
    { id: 'four-panels', title: 'Four Panels', icon: 'grid', iconLibrary: 'lucide' },

    // Panel Sizing
    { id: 'custom-sizes', title: 'Custom Panel Sizes', icon: 'scaling', iconLibrary: 'lucide' },
    { id: 'equal-sizes', title: 'Equal Panel Sizes', icon: 'divide', iconLibrary: 'lucide' },
    {
      id: 'min-max-constraints',
      title: 'Min/Max Constraints',
      icon: 'arrow-left-right',
      iconLibrary: 'lucide',
    },

    // Interaction
    {
      id: 'collapsible-panels',
      title: 'Collapsible Panels',
      icon: 'chevrons-left',
      iconLibrary: 'lucide',
    },
    {
      id: 'double-click-collapse',
      title: 'Double-Click Collapse',
      icon: 'mouse-pointer-click',
      iconLibrary: 'lucide',
    },
    { id: 'snap-threshold', title: 'Snap to Threshold', icon: 'magnet', iconLibrary: 'lucide' },
    { id: 'persist-state', title: 'Persistent State', icon: 'save', iconLibrary: 'lucide' },

    // Gutter Styling
    { id: 'gutter-small', title: 'Small Gutter (4px)', icon: 'minus', iconLibrary: 'lucide' },
    {
      id: 'gutter-medium',
      title: 'Medium Gutter (8px)',
      icon: 'grip-vertical',
      iconLibrary: 'lucide',
    },
    {
      id: 'gutter-large',
      title: 'Large Gutter (12px)',
      icon: 'grip-vertical',
      iconLibrary: 'lucide',
    },
    {
      id: 'custom-gutter-color',
      title: 'Custom Gutter Color',
      icon: 'palette',
      iconLibrary: 'lucide',
    },
    { id: 'no-gutter-icon', title: 'No Gutter Icon', icon: 'ban', iconLibrary: 'lucide' },

    // Animation & Style
    { id: 'animated', title: 'Animated Transitions', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'not-animated', title: 'No Animation', icon: 'zap-off', iconLibrary: 'lucide' },
    { id: 'rounded', title: 'Rounded Style', icon: 'box', iconLibrary: 'lucide' },
    { id: 'elevated', title: 'Elevated Style', icon: 'layers', iconLibrary: 'lucide' },

    // Themes
    { id: 'theme-light', title: 'Light Theme', icon: 'sun', iconLibrary: 'lucide' },
    { id: 'theme-dark', title: 'Dark Theme', icon: 'moon', iconLibrary: 'lucide' },

    // Nested & Real World
    {
      id: 'nested-horizontal-vertical',
      title: 'Nested H+V',
      icon: 'layout-template',
      iconLibrary: 'lucide',
    },
    { id: 'nested-ide-layout', title: 'IDE-Style Layout', icon: 'code-2', iconLibrary: 'lucide' },
    {
      id: 'responsive-vertical',
      title: 'Responsive Vertical',
      icon: 'smartphone',
      iconLibrary: 'lucide',
    },
    {
      id: 'sidebar-content',
      title: 'Sidebar + Content',
      icon: 'panel-left',
      iconLibrary: 'lucide',
    },
    {
      id: 'header-body-footer',
      title: 'Header-Body-Footer',
      icon: 'panel-top',
      iconLibrary: 'lucide',
    },
  ];

  // Helper arrays for different configs
  basicPanels = [{ size: 50 }, { size: 50 }];
  threePanels = [{ size: 33 }, { size: 34 }, { size: 33 }];
  fourPanels = [{ size: 25 }, { size: 25 }, { size: 25 }, { size: 25 }];
  customSizes = [{ size: 30 }, { size: 70 }];
  constraintPanels = [{ minSize: 20, maxSize: 40 }, { minSize: 20 }];
  collapsiblePanels = [{ collapsible: true, size: 25 }, { size: 75 }];

  // Code snippets (summarized for clarity in demos)
  horizontalBasicCode = `<ui-splitter direction="horizontal">...</ui-splitter>`;
  verticalBasicCode = `<ui-splitter direction="vertical">...</ui-splitter>`;
  panelsCode = `<ui-splitter [panels]="panelsConfig">...</ui-splitter>`;
  constraintsCode = `<ui-splitter [panels]='[{"minSize":20, "maxSize":40}, {}]'></ui-splitter>`;
  styleCode = `<ui-splitter rounded elevated gutter-size="12" gutter-color="#22c55e"></ui-splitter>`;
  persistCode = `<ui-splitter persist-state storage-key="my-key"></ui-splitter>`;
}
