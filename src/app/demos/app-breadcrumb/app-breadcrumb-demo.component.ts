import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
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
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-breadcrumb-demo.component.html',
  styleUrl: './app-breadcrumb-demo.component.scss',
})
export class AppBreadcrumbDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'separators', title: 'Separators', icon: '➖' },
    { id: 'collapsing', title: 'Collapsing', icon: '📉' },
    { id: 'visuals', title: 'Visual Variants', icon: '🎨' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  

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

  playgroundCode = `<ui-breadcrumb [items]="breadcrumbItems" show-home></ui-breadcrumb>`;
  separatorsCode = `<ui-breadcrumb [items]="items" separator=">" show-home></ui-breadcrumb>
<ui-breadcrumb [items]="items" separator-icon="→" show-home></ui-breadcrumb>`;
  collapsingCode = `<ui-breadcrumb [items]="collapsibleItems" [max-items]="4" show-home></ui-breadcrumb>`;
  visualsCode = `<ui-breadcrumb [items]="items" variant="pills" show-home></ui-breadcrumb>
<ui-breadcrumb [items]="items" variant="glass" show-home></ui-breadcrumb>`;

  ngOnInit() {}
}
