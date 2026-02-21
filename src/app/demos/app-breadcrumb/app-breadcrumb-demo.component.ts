import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbPlaygroundComponent } from './components/breadcrumb-playground/breadcrumb-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-breadcrumb-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    BreadcrumbPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-breadcrumb-demo.component.html',
  styleUrl: './app-breadcrumb-demo.component.scss',
})
export class AppBreadcrumbDemoComponent extends BaseDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'separators', title: 'Separators', icon: '➖' },
    { id: 'collapsing', title: 'Collapsing', icon: '📉' },
    { id: 'visuals', title: 'Visual Variants', icon: '🎨' },
  ];

  anchorLinks = JSON.stringify(
    this.exampleVariants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  items = [
    { label: 'Home', icon: '🏠', href: '/' },
    { label: 'Settings', href: '/settings' },
    { label: 'Profile', active: true },
  ];

  collapsibleItems = [
    { label: 'Cloud Console', href: '#' },
    { label: 'Compute Engine', href: '#' },
    { label: 'Instances', href: '#' },
    { label: 'Production Clusters', href: '#' },
    { label: 'East-Region-Node-01', active: true },
  ];

  ngOnInit() {}

  playgroundCode = `<ui-breadcrumb [items]="breadcrumbItems" show-home></ui-breadcrumb>`;

  separatorsCode = `<ui-breadcrumb separator=">"></ui-breadcrumb>
<ui-breadcrumb separator-icon="→"></ui-breadcrumb>`;

  collapsingCode = `<ui-breadcrumb [items]="longList" [max-items]="4"></ui-breadcrumb>`;

  visualsCode = `<ui-breadcrumb variant="pills"></ui-breadcrumb>
<ui-breadcrumb variant="glass"></ui-breadcrumb>`;
}
