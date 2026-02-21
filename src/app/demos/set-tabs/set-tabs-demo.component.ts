import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPlaygroundComponent } from './components/tabs-playground/tabs-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-set-tabs-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TabsPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tabs-demo.component.html',
  styleUrl: './set-tabs-demo.component.scss',
})
export class SetTabsDemoComponent extends BaseDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'orientation', title: 'Orientation', icon: '↔️' },
    { id: 'variants', title: 'Visual Variants', icon: '🎨' },
    { id: 'sizes', title: 'Sizes', icon: '📐' },
    { id: 'colors', title: 'Color Schemes', icon: '🌈' },
    { id: 'settings-menu', title: 'Settings Menu', icon: '🔧' },
    { id: 'indicator', title: 'Indicator Position', icon: '📍' },
    { id: 'layout-features', title: 'Layout & Features', icon: '📦' },
    { id: 'advanced-ux', title: 'Advanced UX', icon: '✨' },
  ];

  anchorLinks = JSON.stringify(
    this.exampleVariants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  ngOnInit() {}

  horizontalBasicCode = `<app-tab-stack orientation="horizontal" active-tab="t1"> ... </app-tab-stack>`;
  verticalBasicCode = `<app-tab-stack orientation="vertical" active-tab="t1"> ... </app-tab-stack>`;

  variantCode = `<app-tab-stack variant="default" ...></app-tab-stack>
<app-tab-stack variant="underline" ...></app-tab-stack>
<app-tab-stack variant="pills" ...></app-tab-stack>
<app-tab-stack variant="enclosed" ...></app-tab-stack>
<app-tab-stack variant="buttons" ...></app-tab-stack>`;

  sizeCode = `<app-tab-stack size="small" ...></app-tab-stack>
<app-tab-stack size="medium" ...></app-tab-stack>
<app-tab-stack size="large" ...></app-tab-stack>`;

  colorCode = `<app-tab-stack color="primary" ...></app-tab-stack>
<app-tab-stack color="success" ...></app-tab-stack>
<app-tab-stack color="warning" ...></app-tab-stack>
<app-tab-stack color="danger" ...></app-tab-stack>`;

  alignCode = `<app-tab-stack align="start" ...></app-tab-stack>
<app-tab-stack align="center" ...></app-tab-stack>
<app-tab-stack align="end" ...></app-tab-stack>`;

  indicatorCode = `<app-tab-stack indicator-position="bottom" ...></app-tab-stack>
<app-tab-stack indicator-position="top" ...></app-tab-stack>
<app-tab-stack orientation="vertical" indicator-position="left" ...></app-tab-stack>
<app-tab-stack orientation="vertical" indicator-position="right" ...></app-tab-stack>`;

  layoutCode = `<app-tab-stack full-width ...></app-tab-stack>
<app-tab-stack scrollable ...></app-tab-stack>
<app-tab icon="fas fa-home" ...></app-tab>
<app-tab badge="5" ...></app-tab>
<app-tab-stack closable ...></app-tab-stack>`;

  advancedCode = `<app-tab-stack show-add-button ...></app-tab-stack>
<app-tab-stack animated ...></app-tab-stack>
<app-tab-stack drag-enabled ...></app-tab-stack>
<app-tab-stack lazy-loading ...></app-tab-stack>`;
}
