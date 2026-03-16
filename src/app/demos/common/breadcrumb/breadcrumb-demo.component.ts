import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmBreadcrumbPlaygroundComponent } from '../../../playground/common/breadcrumb-playground/breadcrumb-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-breadcrumb-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmBreadcrumbPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './breadcrumb-demo.component.html',
  styleUrl: './breadcrumb-demo.component.scss',
})
export class DmBreadcrumbDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Usage', icon: 'chevron-right', iconLibrary: 'lucide' },
    { id: 'separators', title: 'Custom Separators', icon: 'divide', iconLibrary: 'lucide' },
    { id: 'icons', title: 'Icons & Badges', icon: 'star', iconLibrary: 'lucide' },
    { id: 'collapsing', title: 'Smart Collapsing', icon: 'more-horizontal', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizes', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
  ];

  basicItems = JSON.stringify([
    { label: 'Admin', href: '/admin' },
    { label: 'Users', href: '/admin/users' },
    { label: 'Profile', active: true },
  ]);

  iconItems = JSON.stringify([
    { label: 'Store', icon: 'store', iconLibrary: 'lucide', href: '/store' },
    { label: 'Orders', icon: 'shopping-cart', iconLibrary: 'lucide', badge: '12', badgeVariant: 'danger', href: '/orders' },
    { label: 'Tracking', icon: 'map-pin', iconLibrary: 'lucide', active: true },
  ]);

  collapsibleItems = JSON.stringify([
    { label: 'Dashboard', href: '#' },
    { label: 'Reports', href: '#' },
    { label: 'Financials', href: '#' },
    { label: '2025', href: '#' },
    { label: 'Q1 Results', active: true },
  ]);

  basicCode = `<ui-breadcrumb [items]="basicItems"></ui-breadcrumb>`;
  
  separatorsCode = `<ui-breadcrumb [items]="basicItems" separator=">"></ui-breadcrumb>
<ui-breadcrumb [items]="basicItems" separator-icon="chevron-right" separator-icon-library="lucide"></ui-breadcrumb>`;

  iconsCode = `<ui-breadcrumb [items]="iconItems" show-home home-icon="home" home-icon-library="lucide"></ui-breadcrumb>`;

  collapsingCode = `<ui-breadcrumb [items]="collapsibleItems" max-items="3" show-home home-icon="layout-dashboard" home-icon-library="lucide"></ui-breadcrumb>`;

  sizesCode = `<ui-breadcrumb [items]="basicItems" size="sm"></ui-breadcrumb>
<ui-breadcrumb [items]="basicItems" size="md"></ui-breadcrumb>
<ui-breadcrumb [items]="basicItems" size="lg"></ui-breadcrumb>`;

  variantsCode = `<ui-breadcrumb [items]="basicItems" variant="default"></ui-breadcrumb>
<ui-breadcrumb [items]="basicItems" variant="pills"></ui-breadcrumb>
<div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 1.5rem; border-radius: 8px;">
  <ui-breadcrumb [items]="basicItems" variant="glass"></ui-breadcrumb>
</div>`;

  handleBreadcrumbClick(ev: any) {
    console.log(`Breadcrumb Clicked: ${ev.detail.label}`);
  }
}
