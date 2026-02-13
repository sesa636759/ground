import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { ModernSidebarPlaygroundComponent } from './components/modern-sidebar-playground/modern-sidebar-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-modern-sidebar-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModernSidebarPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-modern-sidebar-demo.component.html',
  styleUrl: './set-modern-sidebar-demo.component.scss',
})
export class SetModernSidebarDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'features', title: 'Key Features', icon: '✨' },
    { id: 'basic', title: 'Basic Usage', icon: '📋' },
  ];

  // Demo Data for static examples
  demoItems = JSON.stringify([
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'profile', label: 'Profile', icon: 'fas fa-user' },
    { id: 'settings', label: 'Settings', icon: 'fas fa-cog' },
  ]);

  playgroundCode = `<app-modern-sidebar
  [items]="menuItems"
  [collapsible]="true"
></app-modern-sidebar>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
