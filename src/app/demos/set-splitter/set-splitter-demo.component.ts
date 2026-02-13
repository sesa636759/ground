import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitterPlaygroundComponent } from './components/splitter-playground/splitter-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-splitter-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SplitterPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-splitter-demo.component.html',
  styleUrl: './set-splitter-demo.component.scss',
})
export class SetSplitterDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Layouts', icon: '📐' },
    { id: 'premium', title: 'Premium Features', icon: '💎' },
    { id: 'nested', title: 'Nested Layouts', icon: '🎯' },
    { id: 'styling', title: 'Styling Options', icon: '🎨' },
  ];

  basicPanels = [
    { minSize: 20, maxSize: 80 },
    { minSize: 20, maxSize: 80 },
  ];

  threePanels = [{}, {}, {}];
  customSizePanels = [{ size: 30 }, { size: 70 }];
  collapsiblePanels = [{ collapsible: true, minSize: 10 }, { minSize: 20 }];
  constraintsPanels = [
    { minSize: 20, maxSize: 40 },
    { minSize: 20, maxSize: 80 },
  ];
  snapPanels = [{ minSize: 20, maxSize: 80 }, { minSize: 20, maxSize: 80 }];

  // Code examples
  horizontalCode = signal(`<app-splitter direction="horizontal" [panels]="panels">
  <div slot="panel-0">Left Panel</div>
  <div slot="panel-1">Right Panel</div>
</app-splitter>`);

  verticalCode = signal(`<app-splitter direction="vertical" [panels]="panels">
  <div slot="panel-0">Top Panel</div>
  <div slot="panel-1">Bottom Panel</div>
</app-splitter>`);

  threePanelCode = signal(`<app-splitter direction="horizontal" [panels]="threePanels">
  <div slot="panel-0">Panel 1</div>
  <div slot="panel-1">Panel 2</div>
  <div slot="panel-2">Panel 3</div>
</app-splitter>`);

  customSizeCode = signal(`<app-splitter direction="horizontal" [panels]="customPanels">
  <div slot="panel-0">30% Panel</div>
  <div slot="panel-1">70% Panel</div>
</app-splitter>`);

  collapsibleCode = signal(`<app-splitter
  direction="horizontal"
  [panels]="collapsiblePanels"
  double-click-collapse
>
  <div slot="panel-0">Sidebar</div>
  <div slot="panel-1">Main Content</div>
</app-splitter>`);

  constraintsCode = signal(`<app-splitter direction="horizontal" [panels]="constraintsPanels">
  <div slot="panel-0">Min: 20%, Max: 40%</div>
  <div slot="panel-1">Flexible Panel</div>
</app-splitter>`);

  snapCode = signal(`<app-splitter
  direction="horizontal"
  [panels]="snapPanels"
  snap-threshold="20"
>
  <div slot="panel-0">Snap Enabled</div>
  <div slot="panel-1">Content Panel</div>
</app-splitter>`);

  persistenceCode = signal(`<app-splitter
  direction="horizontal"
  [panels]="panels"
  persist-state="true"
>
  <div slot="panel-0">Persistent Layout</div>
  <div slot="panel-1">Content Area</div>
</app-splitter>`);

  nestedCode = signal(`<app-splitter direction="horizontal">
  <div slot="panel-0">
    <app-splitter direction="vertical" style="height: 100%">
      <div slot="panel-0">File Explorer</div>
      <div slot="panel-1">Outline</div>
    </app-splitter>
  </div>
  <div slot="panel-1">
    <app-splitter direction="vertical" style="height: 100%">
      <div slot="panel-0">Editor</div>
      <div slot="panel-1">Terminal</div>
    </app-splitter>
  </div>
</app-splitter>`);

  darkThemeCode = signal(`<app-splitter direction="horizontal" theme="dark">
  <div slot="panel-0">Dark Panel 1</div>
  <div slot="panel-1">Dark Panel 2</div>
</app-splitter>`);

  roundedCode = signal(`<app-splitter direction="horizontal" rounded elevated>
  <div slot="panel-0">Rounded Panel</div>
  <div slot="panel-1">Elevated Panel</div>
</app-splitter>`);

  customGutterCode = signal(`<app-splitter
  direction="horizontal"
  gutter-size="12"
  gutter-color="#22c55e"
>
  <div slot="panel-0">Custom Gutter</div>
  <div slot="panel-1">Panel 2</div>
</app-splitter>`);

  noIconCode = signal(`<app-splitter direction="horizontal" show-gutter-icon="false">
  <div slot="panel-0">Clean Look</div>
  <div slot="panel-1">Minimalist</div>
</app-splitter>`);

  playgroundCode = signal(`<app-splitter
  [direction]="direction"
  [gutter-size]="gutterSize"
  [snap-threshold]="snapThreshold"
  [theme]="theme"
  [animated]="animated"
  [rounded]="rounded"
  [elevated]="elevated"
  [show-gutter-icon]="showIcon"
>
  <div slot="panel-0">Playground Panel 1</div>
  <div slot="panel-1">Playground Panel 2</div>
</app-splitter>`);



  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Helper for JSON strings
  jsonOptions = (opts: any) => JSON.stringify(opts);
}
