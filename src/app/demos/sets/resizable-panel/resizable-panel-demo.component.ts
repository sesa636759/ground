import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmResizablePanelSetPlaygroundComponent } from '../../../playground/sets/resizable-panel-playground/resizable-panel-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-resizable-panel-set-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmResizablePanelSetPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './resizable-panel-demo.component.html',
  styleUrl: './resizable-panel-demo.component.scss',
})
export class DmResizablePanelDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '??' },
    { id: 'horizontal', title: 'Basic Horizontal Split', icon: '??' },
    { id: 'vertical', title: 'Basic Vertical Split', icon: '??' },
    { id: 'triple', title: 'Triple Split Panel', icon: '??' },
    { id: 'nested', title: 'Nested Resizable Panels', icon: '??' },
    { id: 'collapsible', title: 'Collapsible Panels', icon: '??' },
    { id: 'themes', title: 'Dark Theme', icon: '??' },
    { id: 'snap', title: 'Snap to Edge', icon: '??' },
  ];

  basicHPanels = [
    { id: 'p1', size: 30, minSize: 15 },
    { id: 'p2', size: 70 },
  ];

  basicVPanels = [
    { id: 't1', size: 50 },
    { id: 't2', size: 50 },
  ];

  triplePanels = [
    { id: 'p1', size: 30, minSize: 20 },
    { id: 'p2', size: 40, minSize: 20 },
    { id: 'p3', size: 30, minSize: 20 },
  ];

  nestedOuter = [
    { id: 'sidebar', size: 25, minSize: 15, maxSize: 50, collapsible: true },
    { id: 'main', size: 75 },
  ];

  nestedInner = [
    { id: 'editor', size: 70, minSize: 30 },
    { id: 'terminal', size: 30, minSize: 10 },
  ];

  collapsiblePanels = [
    {
      id: 'left',
      size: 30,
      minSize: 15,
      maxSize: 50,
      collapsible: true,
      collapseDirection: 'left',
    },
    { id: 'main', size: 70 },
  ];

  // Code examples
  horizontalCode = signal(`<ui-resizable-panel [panels]="[
  { id: 'p1', size: 30, minSize: 15 },
  { id: 'p2', size: 70 }
]" direction="horizontal">
  <div slot="p1">Left Panel</div>
  <div slot="p2">Right Panel</div>
</ui-resizable-panel>`);

  verticalCode = signal(`<ui-resizable-panel [panels]="[
  { id: 't1', size: 50 },
  { id: 't2', size: 50 }
]" direction="vertical">
  <div slot="t1">Top Panel</div>
  <div slot="t2">Bottom Panel</div>
</ui-resizable-panel>`);

  tripleCode = signal(`<ui-resizable-panel [panels]="[
  { id: 'p1', size: 30, minSize: 20 },
  { id: 'p2', size: 40, minSize: 20 },
  { id: 'p3', size: 30, minSize: 20 }
]" direction="horizontal">
  <div slot="p1">Panel 1 (30%)</div>
  <div slot="p2">Panel 2 (40%)</div>
  <div slot="p3">Panel 3 (30%)</div>
</ui-resizable-panel>`);

  nestedCode = signal(`<ui-resizable-panel [panels]="nestedOuter" direction="horizontal">
  <div slot="sidebar">Sidebar / Explorer</div>
  <div slot="main" style="height: 100%">
    <ui-resizable-panel [panels]="nestedInner" direction="vertical">
      <div slot="editor">Main Code Editor</div>
      <div slot="terminal">Build Output / Terminal</div>
    </ui-resizable-panel>
  </div>
</ui-resizable-panel>`);

  collapsibleCode = signal(`<ui-resizable-panel [panels]="[
  { id: 'left', size: 30, collapsible: true, collapseDirection: 'left' },
  { id: 'main', size: 70 }
]" direction="horizontal">
  <div slot="left">Collapsible Panel</div>
  <div slot="main">Main Content</div>
</ui-resizable-panel>`);

  darkThemeCode = signal(`<ui-resizable-panel [panels]="panels" direction="horizontal" theme="dark">
  <div slot="p1">Dark Sidebar</div>
  <div slot="p2">Dark Main</div>
</ui-resizable-panel>`);

  snapToEdgeCode = signal(`<ui-resizable-panel 
  [panels]="panels" 
  direction="horizontal"
  snap-to-edge="true"
  [snapThreshold]="50">
  <div slot="p1">Snap Left/Right</div>
  <div slot="p2">Main Area</div>
</ui-resizable-panel>`);

  playgroundCode = signal(`<ui-resizable-panel
  [panels]="panels"
  [direction]="direction"
  [theme]="theme"
  [animated]="animated"
  [snapToEdge]="snapToEdge"
  [snapThreshold]="snapThreshold"
></ui-resizable-panel>`);
}
