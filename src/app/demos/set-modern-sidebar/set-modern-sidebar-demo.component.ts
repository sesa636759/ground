import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModernSidebarPlaygroundComponent } from './components/modern-sidebar-playground/modern-sidebar-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-modern-sidebar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ModernSidebarPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-modern-sidebar-demo.component.html',
  styleUrl: './set-modern-sidebar-demo.component.scss',
})
export class SetModernSidebarDemoComponent implements OnInit {
  // Demo Data for static examples
  demoItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'profile', label: 'Profile', icon: 'fas fa-user' },
    { id: 'settings', label: 'Settings', icon: 'fas fa-cog' },
  ];

  playgroundCode = `<app-modern-sidebar
  [items]="menuItems"
  [collapsible]="true"
></app-modern-sidebar>`;

  ngOnInit() {}
}
