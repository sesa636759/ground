import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmSidebarPlaygroundComponent } from '../../../playground/sets/sidebar-playground/sidebar-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'ds-sidebar-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmSidebarPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar-demo.component.html',
  styleUrl: './sidebar-demo.component.scss',
})
export class DmSidebarDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'positions', title: 'Position Variants', icon: '??' },
    { id: 'variants', title: 'Visual Variants', icon: '??' },
    { id: 'collapsible', title: 'Collapsible States', icon: '??' },
    { id: 'premium', title: 'Premium Features', icon: '??' },
  ];

  menuItems = [
    { id: '1', label: 'Dashboard', icon: 'fas fa-home', href: '#dashboard' },
    { id: '2', label: 'Analytics', icon: 'fas fa-chart-line', href: '#analytics' },
    { id: '3', label: 'Settings', icon: 'fas fa-cog', href: '#settings' },
    { id: '4', label: 'Profile', icon: 'fas fa-user', href: '#profile' },
  ];

  playgroundCode = `<app-sidebar
  [position]="left"
  [collapsible]="true"
  [items]="menuItems"
></app-sidebar>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
