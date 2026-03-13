import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmTabsPlaygroundComponent } from '../../../playground/sets/tabs-playground/tabs-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'ds-tabs-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTabsPlaygroundComponent,
    DemoTabsComponent,

    ExampleSectionComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tabs-demo.component.html',
  styleUrl: './tabs-demo.component.scss',
})
export class DmTabsDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '??' },
    { id: 'orientation', title: 'Orientation', icon: '??' },
    { id: 'variants', title: 'Visual Variants', icon: '??' },
    { id: 'sizes', title: 'Sizes', icon: '??' },
    { id: 'colors', title: 'Color Schemes', icon: '??' },
    { id: 'alignment', title: 'Alignment', icon: '?' },
    { id: 'indicator', title: 'Indicator Position', icon: '??' },
    { id: 'layout-features', title: 'Layout & Features', icon: '??' },
    { id: 'advanced-features', title: 'Advanced UX', icon: '???' },
  ];

  horizontalBasicCode = `<app-tab-stack orientation="horizontal" active-tab="t1">
    <app-tab label="Overview" value="t1">Overview Content</app-tab>
    <app-tab label="Documents" value="t2">Documents Content</app-tab>
  </app-tab-stack>`;

  verticalBasicCode = `<app-tab-stack orientation="vertical" active-tab="t1">
    <app-tab label="Configuration" value="t1">Config Content</app-tab>
    <app-tab label="Security" value="t2">Security Content</app-tab>
  </app-tab-stack>`;

  variantCode = `<app-tab-stack variant="default" active-tab="t1">
    <app-tab label="Tab 1" value="t1">Content 1</app-tab>
    <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  </app-tab-stack>

  <app-tab-stack variant="underline" active-tab="t1">
    <app-tab label="Tab 1" value="t1">Content 1</app-tab>
    <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  </app-tab-stack>

  <app-tab-stack variant="pills" active-tab="t1" color="success">
    <app-tab label="Active" value="t1">Active Content</app-tab>
    <app-tab label="Completed" value="t2">Completed Content</app-tab>
  </app-tab-stack>`;

  sizeCode = `<app-tab-stack size="small" active-tab="t1">
    <app-tab label="Small 1" value="t1">Content 1</app-tab>
    <app-tab label="Small 2" value="t2">Content 2</app-tab>
  </app-tab-stack>`;

  colorCode = `<app-tab-stack color="danger" active-tab="t1">
    <app-tab label="Tab 1" value="t1">Content 1</app-tab>
    <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  </app-tab-stack>`;

  alignCode = `<app-tab-stack align="center" active-tab="t1">
    <app-tab label="Tab 1" value="t1">Content 1</app-tab>
    <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  </app-tab-stack>`;

  indicatorCode = `<app-tab-stack indicator-position="top" active-tab="t1">
    <app-tab label="Tab 1" value="t1">Content 1</app-tab>
    <app-tab label="Tab 2" value="t2">Content 2</app-tab>
  </app-tab-stack>`;

  layoutCode = `<app-tab-stack active-tab="t1">
    <app-tab label="Home" value="t1" icon="fas fa-home">Home</app-tab>
    <app-tab label="Messages" value="t3" badge="5" badge-color="danger">Msgs</app-tab>
  </app-tab-stack>

  <app-tab-stack full-width scrollable active-tab="t1">
    <app-tab label="Tab 1" value="t1">C1</app-tab>
    <app-tab label="Tab 2" value="t2">C2</app-tab>
    <app-tab label="Tab 3" value="t3">C3</app-tab>
    <app-tab label="Tab 4" value="t4">C4</app-tab>
  </app-tab-stack>`;

  advancedCode = `<app-tab-stack closable animated show-add-button active-tab="t1">
    <app-tab label="Tab 1" value="t1">C1</app-tab>
    <app-tab label="Tab 2" value="t2">C2</app-tab>
  </app-tab-stack>`;
}
