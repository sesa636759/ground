import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResizablePanelPlaygroundComponent } from './components/resizable-panel-playground/resizable-panel-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-resizable-panel-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ResizablePanelPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-resizable-panel-demo.component.html',
  styleUrl: './set-resizable-panel-demo.component.scss',
})
export class SetResizablePanelDemoComponent {
  exampleVariants = [
    { id: 'horizontal', title: 'Basic Horizontal Split', icon: '📋' },
    { id: 'vertical', title: 'Basic Vertical Split', icon: '↕️' },
    { id: 'triple', title: 'Triple Split Panel', icon: '🥈' },
    { id: 'nested', title: 'Nested Resizable Panels', icon: '🔲' },
    { id: 'collapsible', title: 'Collapsible Panels', icon: '📂' },
    { id: 'themes', title: 'Dark Theme', icon: '🌙' },
    { id: 'snap', title: 'Snap to Edge', icon: '📌' },
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
    { id: 'left', size: 30, minSize: 15, maxSize: 50, collapsible: true, collapseDirection: 'left' },
    { id: 'main', size: 70 },
  ];

  // Code examples
  horizontalCode = signal(`<app-resizable-panel [panels]="[
  { id: 'p1', size: 30, minSize: 15 },
  { id: 'p2', size: 70 }
]" direction="horizontal">
  <div slot="p1">Left Panel</div>
  <div slot="p2">Right Panel</div>
</app-resizable-panel>`);

  verticalCode = signal(`<app-resizable-panel [panels]="[
  { id: 't1', size: 50 },
  { id: 't2', size: 50 }
]" direction="vertical">
  <div slot="t1">Top Panel</div>
  <div slot="t2">Bottom Panel</div>
</app-resizable-panel>`);

  tripleCode = signal(`<app-resizable-panel [panels]="[
  { id: 'p1', size: 30, minSize: 20 },
  { id: 'p2', size: 40, minSize: 20 },
  { id: 'p3', size: 30, minSize: 20 }
]" direction="horizontal">
  <div slot="p1">Panel 1 (30%)</div>
  <div slot="p2">Panel 2 (40%)</div>
  <div slot="p3">Panel 3 (30%)</div>
</app-resizable-panel>`);

  nestedCode = signal(`<app-resizable-panel [panels]="nestedOuter" direction="horizontal">
  <div slot="sidebar">Sidebar / Explorer</div>
  <div slot="main" style="height: 100%">
    <app-resizable-panel [panels]="nestedInner" direction="vertical">
      <div slot="editor">Main Code Editor</div>
      <div slot="terminal">Build Output / Terminal</div>
    </app-resizable-panel>
  </div>
</app-resizable-panel>`);

  collapsibleCode = signal(`<app-resizable-panel [panels]="[
  { id: 'left', size: 30, collapsible: true, collapseDirection: 'left' },
  { id: 'main', size: 70 }
]" direction="horizontal">
  <div slot="left">Collapsible Panel</div>
  <div slot="main">Main Content</div>
</app-resizable-panel>`);

  darkThemeCode = signal(`<app-resizable-panel [panels]="panels" direction="horizontal" theme="dark">
  <div slot="p1">Dark Sidebar</div>
  <div slot="p2">Dark Main</div>
</app-resizable-panel>`);

  snapToEdgeCode = signal(`<app-resizable-panel 
  [panels]="panels" 
  direction="horizontal"
  snap-to-edge="true"
  [snapThreshold]="50">
  <div slot="p1">Snap Left/Right</div>
  <div slot="p2">Main Area</div>
</app-resizable-panel>`);

  playgroundCode = signal(`<app-resizable-panel
  [panels]="panels"
  [direction]="direction"
  [theme]="theme"
  [animated]="animated"
  [snapToEdge]="snapToEdge"
  [snapThreshold]="snapThreshold"
></app-resizable-panel>`);

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
