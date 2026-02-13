import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { SidebarPlaygroundComponent } from './components/sidebar-playground/sidebar-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-sidebar-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
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
