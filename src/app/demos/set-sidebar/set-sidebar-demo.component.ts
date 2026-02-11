import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarPlaygroundComponent } from './components/sidebar-playground/sidebar-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-sidebar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarPlaygroundComponent, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-sidebar-demo.component.html',
  styleUrl: './set-sidebar-demo.component.scss',
})
export class SetSidebarDemoComponent implements OnInit {
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
}
