import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitterPlaygroundComponent } from './components/splitter-playground/splitter-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-set-splitter-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, SplitterPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-splitter-demo.component.html',
  styleUrl: './set-splitter-demo.component.scss',
})
export class SetSplitterDemoComponent {
  exampleVariants = [
    { id: 'horizontal-basic', title: 'Horizontal Basic', icon: '↔️' },
    { id: 'vertical-basic', title: 'Vertical Basic', icon: '↕️' },
    { id: 'two-panels', title: 'Two Panels', icon: '▯' },
    { id: 'three-panels', title: 'Three Panels', icon: '▮' },
    { id: 'four-panels', title: 'Four Panels', icon: '▭' },
    { id: 'custom-sizes', title: 'Custom Panel Sizes', icon: '📏' },
    { id: 'equal-sizes', title: 'Equal Panel Sizes', icon: '⚖️' },
    { id: 'min-max-constraints', title: 'Min/Max Constraints', icon: '📐' },
    { id: 'collapsible-panels', title: 'Collapsible Panels', icon: '🔄' },
    { id: 'double-click-collapse', title: 'Double-Click Collapse', icon: '👆' },
    { id: 'snap-threshold', title: 'Snap to Threshold', icon: '🧲' },
    { id: 'persist-state', title: 'Persistent State', icon: '💾' },
    { id: 'gutter-small', title: 'Small Gutter (4px)', icon: '🔸' },
    { id: 'gutter-medium', title: 'Medium Gutter (8px)', icon: '🔹' },
    { id: 'gutter-large', title: 'Large Gutter (12px)', icon: '🔶' },
    { id: 'custom-gutter-color', title: 'Custom Gutter Color', icon: '🎨' },
    { id: 'no-gutter-icon', title: 'No Gutter Icon', icon: '⚪' },
    { id: 'animated', title: 'Animated Transitions', icon: '✨' },
    { id: 'not-animated', title: 'No Animation', icon: '⏸️' },
    { id: 'rounded', title: 'Rounded Corners', icon: '🔘' },
    { id: 'elevated', title: 'Elevated Style', icon: '⬆️' },
    { id: 'rounded-elevated', title: 'Rounded & Elevated', icon: '💎' },
    { id: 'theme-light', title: 'Light Theme', icon: '☀️' },
    { id: 'theme-dark', title: 'Dark Theme', icon: '🌙' },
    { id: 'nested-horizontal-vertical', title: 'Nested H+V', icon: '🎯' },
    { id: 'nested-ide-layout', title: 'IDE-Style Layout', icon: '💻' },
    { id: 'nested-triple', title: 'Triple Nested', icon: '🏗️' },
    { id: 'responsive-vertical', title: 'Responsive Vertical', icon: '📱' },
    { id: 'sidebar-content', title: 'Sidebar + Content', icon: '📂' },
    { id: 'header-body-footer', title: 'Header-Body-Footer', icon: '📄' },
  ];

  anchorLinks = JSON.stringify(
    this.exampleVariants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  basicPanels = [
    { minSize: 20, maxSize: 80 },
    { minSize: 20, maxSize: 80 },
  ];

  threePanels = [{}, {}, {}];
  fourPanels = [{}, {}, {}, {}];
  customSizePanels = [{ size: 30 }, { size: 70 }];
  equalSizePanels = [{ size: 33.33 }, { size: 33.33 }, { size: 33.34 }];
  collapsiblePanels = [{ collapsible: true, minSize: 10 }, { minSize: 20 }];
  constraintsPanels = [
    { minSize: 20, maxSize: 40 },
    { minSize: 20, maxSize: 80 },
  ];
  snapPanels = [
    { minSize: 20, maxSize: 80 },
    { minSize: 20, maxSize: 80 },
  ];

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  horizontalBasicCode = signal(`<app-splitter direction="horizontal">
  <div slot="panel-0">Left Panel Content</div>
  <div slot="panel-1">Right Panel Content</div>
</app-splitter>`);

  verticalBasicCode = signal(`<app-splitter direction="vertical">
  <div slot="panel-0">Top Panel Content</div>
  <div slot="panel-1">Bottom Panel Content</div>
</app-splitter>`);

  twoPanelsCode = signal(`<app-splitter direction="horizontal" [panels]="basicPanels">
  <div slot="panel-0">Panel 1</div>
  <div slot="panel-1">Panel 2</div>
</app-splitter>`);

  threePanelsCode = signal(`<app-splitter direction="horizontal" [panels]="threePanels">
  <div slot="panel-0">Panel 1</div>
  <div slot="panel-1">Panel 2</div>
  <div slot="panel-2">Panel 3</div>
</app-splitter>`);

  fourPanelsCode = signal(`<app-splitter direction="horizontal" [panels]="fourPanels">
  <div slot="panel-0">Panel 1</div>
  <div slot="panel-1">Panel 2</div>
  <div slot="panel-2">Panel 3</div>
  <div slot="panel-3">Panel 4</div>
</app-splitter>`);

  customSizesCode = signal(`<app-splitter direction="horizontal" [panels]="customSizePanels">
  <div slot="panel-0">30% Panel</div>
  <div slot="panel-1">70% Panel</div>
</app-splitter>

// Component: customSizePanels = [{ size: 30 }, { size: 70 }];`);

  equalSizeCode = signal(`<app-splitter direction="horizontal" [panels]="equalSizePanels">
  <div slot="panel-0">33.33%</div>
  <div slot="panel-1">33.33%</div>
  <div slot="panel-2">33.34%</div>
</app-splitter>

// Component: equalSizePanels = [{ size: 33.33 }, { size: 33.33 }, { size: 33.34 }];`);

  minMaxConstraintsCode = signal(`<app-splitter direction="horizontal" [panels]="constraintsPanels">
  <div slot="panel-0">Min: 20%, Max: 40%</div>
  <div slot="panel-1">Flexible Panel</div>
</app-splitter>

// Component: constraintsPanels = [{ minSize: 20, maxSize: 40 }, { minSize: 20, maxSize: 80 }];`);

  collapsiblePanelsCode = signal(`<app-splitter direction="horizontal" [panels]="collapsiblePanels">
  <div slot="panel-0">Collapsible Sidebar</div>
  <div slot="panel-1">Main Content</div>
</app-splitter>

// Component: collapsiblePanels = [{ collapsible: true, minSize: 10 }, { minSize: 20 }];`);

  doubleClickCollapseCode = signal(`<app-splitter
  direction="horizontal"
  [panels]="collapsiblePanels"
  double-click-collapse
>
  <div slot="panel-0">Double-click gutter to collapse</div>
  <div slot="panel-1">Main Content</div>
</app-splitter>`);

  snapThresholdCode = signal(`<app-splitter
  direction="horizontal"
  [panels]="snapPanels"
  snap-threshold="20"
>
  <div slot="panel-0">Snap Enabled Panel</div>
  <div slot="panel-1">Content Panel</div>
</app-splitter>`);

  persistStateCode = signal(`<app-splitter
  direction="horizontal"
  [panels]="basicPanels"
  persist-state="true"
>
  <div slot="panel-0">Persistent Layout</div>
  <div slot="panel-1">State saved to localStorage</div>
</app-splitter>`);

  gutterSmallCode = signal(`<app-splitter direction="horizontal" gutter-size="4">
  <div slot="panel-0">Panel 1</div>
  <div slot="panel-1">Panel 2</div>
</app-splitter>`);

  gutterMediumCode = signal(`<app-splitter direction="horizontal" gutter-size="8">
  <div slot="panel-0">Panel 1</div>
  <div slot="panel-1">Panel 2</div>
</app-splitter>`);

  gutterLargeCode = signal(`<app-splitter direction="horizontal" gutter-size="12">
  <div slot="panel-0">Panel 1</div>
  <div slot="panel-1">Panel 2</div>
</app-splitter>`);

  customGutterColorCode = signal(`<app-splitter
  direction="horizontal"
  gutter-size="12"
  gutter-color="#22c55e"
>
  <div slot="panel-0">Custom Green Gutter</div>
  <div slot="panel-1">Panel 2</div>
</app-splitter>`);

  noGutterIconCode = signal(`<app-splitter direction="horizontal" show-gutter-icon="false">
  <div slot="panel-0">Clean Look</div>
  <div slot="panel-1">Minimalist Panel</div>
</app-splitter>`);

  animatedCode = signal(`<app-splitter direction="horizontal" animated>
  <div slot="panel-0">Smooth transitions</div>
  <div slot="panel-1">Animated resize</div>
</app-splitter>`);

  notAnimatedCode = signal(`<app-splitter direction="horizontal" [animated]="false">
  <div slot="panel-0">Instant resize</div>
  <div slot="panel-1">No animation</div>
</app-splitter>`);

  roundedCode = signal(`<app-splitter direction="horizontal" rounded>
  <div slot="panel-0">Rounded corners</div>
  <div slot="panel-1">Modern style</div>
</app-splitter>`);

  elevatedCode = signal(`<app-splitter direction="horizontal" elevated>
  <div slot="panel-0">Elevated shadow</div>
  <div slot="panel-1">Material design</div>
</app-splitter>`);

  roundedElevatedCode = signal(`<app-splitter direction="horizontal" rounded elevated>
  <div slot="panel-0">Premium look</div>
  <div slot="panel-1">Beautiful design</div>
</app-splitter>`);

  themeLightCode = signal(`<app-splitter direction="horizontal" theme="light">
  <div slot="panel-0">Light theme</div>
  <div slot="panel-1">Default styling</div>
</app-splitter>`);

  themeDarkCode = signal(`<app-splitter direction="horizontal" theme="dark">
  <div slot="panel-0">Dark panel 1</div>
  <div slot="panel-1">Dark panel 2</div>
</app-splitter>`);

  nestedHorizontalVerticalCode = signal(`<app-splitter direction="horizontal">
  <div slot="panel-0">Left Sidebar</div>
  <div slot="panel-1" style="height: 100%">
    <app-splitter direction="vertical" style="height: 100%">
      <div slot="panel-0">Top Content</div>
      <div slot="panel-1">Bottom Content</div>
    </app-splitter>
  </div>
</app-splitter>`);

  nestedIdeLayoutCode = signal(`<app-splitter direction="horizontal">
  <div slot="panel-0" style="height: 100%">
    <app-splitter direction="vertical" style="height: 100%">
      <div slot="panel-0">File Explorer</div>
      <div slot="panel-1">Outline</div>
    </app-splitter>
  </div>
  <div slot="panel-1" style="height: 100%">
    <app-splitter direction="vertical" style="height: 100%">
      <div slot="panel-0">Editor</div>
      <div slot="panel-1">Terminal</div>
    </app-splitter>
  </div>
</app-splitter>`);

  nestedTripleCode = signal(`<app-splitter direction="horizontal">
  <div slot="panel-0">Sidebar</div>
  <div slot="panel-1" style="height: 100%">
    <app-splitter direction="vertical" style="height: 100%">
      <div slot="panel-0">Header</div>
      <div slot="panel-1" style="height: 100%">
        <app-splitter direction="horizontal" style="height: 100%">
          <div slot="panel-0">Content</div>
          <div slot="panel-1">Inspector</div>
        </app-splitter>
      </div>
    </app-splitter>
  </div>
</app-splitter>`);

  responsiveVerticalCode = signal(`<app-splitter direction="vertical">
  <div slot="panel-0">Mobile-friendly vertical split</div>
  <div slot="panel-1">Stacks well on small screens</div>
</app-splitter>`);

  sidebarContentCode =
    signal(`<app-splitter direction="horizontal" [panels]="[{ size: 25 }, { size: 75 }]">
  <div slot="panel-0">Navigation Sidebar (25%)</div>
  <div slot="panel-1">Main Content Area (75%)</div>
</app-splitter>`);

  headerBodyFooterCode =
    signal(`<app-splitter direction="vertical" [panels]="[{ size: 10 }, { size: 80 }, { size: 10 }]">
  <div slot="panel-0">Header (10%)</div>
  <div slot="panel-1">Body Content (80%)</div>
  <div slot="panel-2">Footer (10%)</div>
</app-splitter>`);
}
