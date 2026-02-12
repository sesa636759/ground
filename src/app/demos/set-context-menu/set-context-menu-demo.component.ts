import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextMenuPlaygroundComponent } from './components/context-menu-playground/context-menu-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-context-menu-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ContextMenuPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-context-menu-demo.component.html',
  styleUrl: './set-context-menu-demo.component.scss',
})
export class SetContextMenuDemoComponent implements OnInit {
  basicItems = [
    { id: 'view', label: 'View Details', icon: 'fas fa-eye' },
    { id: 'edit', label: 'Quick Edit', icon: 'fas fa-pen' },
    { divider: true },
    { id: 'delete', label: 'Remove Item', icon: 'fas fa-trash', color: 'danger' },
  ];

  multilevelItems = [
    {
      id: 'sort',
      label: 'Sort By',
      icon: 'fas fa-sort',
      children: [
        { id: 'name', label: 'Name (A-Z)' },
        { id: 'date', label: 'Date Modified' },
        { id: 'size', label: 'File Size' },
      ],
    },
    {
      id: 'export',
      label: 'Export As',
      icon: 'fas fa-file-export',
      children: [
        { id: 'pdf', label: 'PDF Document (.pdf)' },
        { id: 'csv', label: 'Comma Separated (.csv)' },
        {
          id: 'image',
          label: 'Images',
          children: [
            { id: 'png', label: 'PNG Image' },
            { id: 'jpg', label: 'JPEG Image' },
            { id: 'webp', label: 'WebP Format' },
          ],
        },
      ],
    },
  ];

  playgroundCode = `<app-context-menu
  [items]="menuItems"
  (itemClick)="onMenuClick($event)"
></app-context-menu>`;

  ngOnInit() {}
}
