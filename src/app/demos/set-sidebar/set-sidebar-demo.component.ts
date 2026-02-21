import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { SidebarPlaygroundComponent } from './components/sidebar-playground/sidebar-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-set-sidebar-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-sidebar-demo.component.html',
  styleUrl: './set-sidebar-demo.component.scss',
})
export class SetSidebarDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'positions', title: 'Position Variants', icon: '📍' },
    { id: 'variants', title: 'Visual Variants', icon: '🎭' },
    { id: 'collapsible', title: 'Collapsible States', icon: '🔄' },
    { id: 'premium', title: 'Premium Features', icon: '💎' },
  ];

  anchorLinks = JSON.stringify(
    this.exampleVariants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  menuItems = JSON.stringify([
    { id: '1', label: 'Dashboard', icon: 'fas fa-home', href: '#dashboard' },
    { id: '2', label: 'Analytics', icon: 'fas fa-chart-line', href: '#analytics' },
    { id: '3', label: 'Settings', icon: 'fas fa-cog', href: '#settings' },
    { id: '4', label: 'Profile', icon: 'fas fa-user', href: '#profile' },
  ]);

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
