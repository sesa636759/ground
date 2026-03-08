import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmBreadcrumbPlaygroundComponent } from '../../../playground/common/breadcrumb-playground/breadcrumb-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-breadcrumb-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmBreadcrumbPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './breadcrumb-demo.component.html',
  styleUrl: './breadcrumb-demo.component.scss',
})
export class DmBreadcrumbDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'separators', title: 'Separators', icon: '➖' },
    { id: 'collapsing', title: 'Collapsing', icon: '📉' },
    { id: 'visuals', title: 'Visual Variants', icon: '🎨' },
  ];

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
}
