import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextMenuPlaygroundComponent } from './components/context-menu-playground/context-menu-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-set-context-menu-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ContextMenuPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-context-menu-demo.component.html',
  styleUrl: './set-context-menu-demo.component.scss',
})
export class SetContextMenuDemoComponent {
  exampleVariants = [
    { id: 'right-click', title: 'Right Click Trigger', icon: '🖱️' },
    { id: 'click-trigger', title: 'Click Trigger', icon: '👆' },
    { id: 'nested-menus', title: 'Nested Menus', icon: '🌳' },
    { id: 'list-context', title: 'List Item Context', icon: '📝' },
    { id: 'command-palette', title: 'Command Palette', icon: '⚡' },
    { id: 'menu-items', title: 'Menu Item Types', icon: '✅' },
    { id: 'themes', title: 'Themes & Effects', icon: '🌙' },
    { id: 'advanced', title: 'Advanced Features', icon: '💎' },
  ];

  // Basic menu items
  basicItems = [
    { id: 'view', label: 'View Details', icon: 'fas fa-eye' },
    { id: 'edit', label: 'Quick Edit', icon: 'fas fa-pen' },
    { divider: true },
    { id: 'delete', label: 'Remove Item', icon: 'fas fa-trash', color: 'danger' },
  ];

  // Multi-level nested items
  nestedItems = [
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

  // List items for context menu demo
  listItems = [
    { name: 'Project Files', icon: 'fas fa-folder-open', color: '#4f46e5' },
    { name: 'Documents', icon: 'fas fa-file-alt', color: '#f59e0b' },
    { name: 'Images', icon: 'fas fa-images', color: '#ec4899' },
    { name: 'Videos', icon: 'fas fa-video', color: '#06b6d4' },
  ];

  // Checkbox/Radio items
  settingsItems = [
    { id: 'dark', label: 'Dark Mode', type: 'checkbox', checked: false },
    { id: 'notify', label: 'Notifications', type: 'checkbox', checked: true },
    { id: 'sound', label: 'Sound Effects', type: 'checkbox', checked: true },
    { divider: true },
    { id: 'view-list', label: 'List View', type: 'radio', name: 'view', checked: true },
    { id: 'view-grid', label: 'Grid View', type: 'radio', name: 'view' },
    { id: 'view-card', label: 'Card View', type: 'radio', name: 'view' },
  ];

  // Avatar items
  teamItems = [
    { id: 'alice', label: 'Alice Johnson', avatar: '👩', description: 'Product Lead', badge: '🟢' },
    { id: 'bob', label: 'Bob Smith', avatar: '👨', description: 'Developer', badge: '🟢' },
    { id: 'charlie', label: 'Charlie Brown', avatar: '👨', description: 'Designer', badge: '🔴' },
  ];

  // Grouped items
  fileMenuItems = [
    { id: 'new', label: 'New File', icon: 'fas fa-plus', group: 'Create', shortcut: 'Ctrl+N' },
    { id: 'open', label: 'Open', icon: 'fas fa-folder-open', group: 'Create', shortcut: 'Ctrl+O' },
    { divider: true },
    { id: 'save', label: 'Save', icon: 'fas fa-save', group: 'File', shortcut: 'Ctrl+S' },
    {
      id: 'save-as',
      label: 'Save As...',
      icon: 'fas fa-save',
      group: 'File',
      shortcut: 'Ctrl+Shift+S',
    },
    { divider: true },
    { id: 'close', label: 'Close', icon: 'fas fa-times', group: 'File', shortcut: 'Ctrl+W' },
    { id: 'exit', label: 'Exit', icon: 'fas fa-sign-out-alt', group: 'File', shortcut: 'Ctrl+Q' },
  ];

  // Deep nested (5 levels)
  deepNestedItems = [
    {
      id: 'level1',
      label: 'Level 1',
      children: [
        {
          id: 'level2-a',
          label: 'Level 2A',
          children: [
            {
              id: 'level3-a',
              label: 'Level 3A',
              children: [
                {
                  id: 'level4-a',
                  label: 'Level 4A',
                  children: [
                    { id: 'level5-a', label: 'Level 5A - Item' },
                    { id: 'level5-b', label: 'Level 5B - Item' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  // Code examples
  rightClickCode = signal(`<app-context-menu
  [triggerElement]="element"
  trigger="rightClick"
  [items]="items"
  minWidth="200px"
  closeOnSelect="true"
  (itemClick)="onMenuClick($event)"
></app-context-menu>`);

  clickTriggerCode = signal(`<ui-button #menuBtn label="More Actions"></ui-button>

<app-context-menu
  [triggerElement]="menuBtn"
  trigger="click"
  [items]="items"
  (itemClick)="onMenuClick($event)"
></app-context-menu>`);

  nestedCode = signal(`<app-context-menu
  [items]="[
    {{ '{' }}
      label: 'Sort By',
      icon: 'fas fa-sort',
      children: [
        {{ '{' }} label: 'Name (A-Z)' {{ '}' }},
        {{ '{' }} label: 'Date Modified' {{ '}' }},
        {{ '{' }} label: 'File Size' {{ '}' }}
      ]
    {{ '}' }},
    {{ '{' }}
      label: 'Export As',
      children: [
        {{ '{' }} label: 'PDF (.pdf)' {{ '}' }},
        {{ '{' }} label: 'CSV (.csv)' {{ '}' }}
      ]
    {{ '}' }}
  ]"
  [edgeDetection]="true"
  (itemClick)="onMenuClick($event)"
></app-context-menu>`);

  listContextCode = signal(`<div *ngFor="let item of listItems"
  #contextItem
  class="list-item">
  <span>{{ '{{' }} item.name {{ '}}' }}</span>
</div>

<app-context-menu
  *ngFor="let item of listItems"
  [triggerElement]="contextItem"
  [items]="getContextMenuForItem(item)"
  (itemClick)="onItemAction($event, item)"
></app-context-menu>`);

  commandPaletteCode = signal(`<app-context-menu
  [triggerElement]="launcherBtn"
  trigger="click"
  mode="commandPalette"
  [items]="actionItems"
  searchable="true"
  searchPlaceholder="Search actions..."
  keyboard-shortcut="Ctrl+K"
  (itemClick)="executeCommand($event)"
></app-context-menu>`);

  checkboxRadioCode = signal(`<app-context-menu
  [items]="[
    {{ '{' }} label: 'Dark Mode', type: 'checkbox', checked: false {{ '}' }},
    {{ '{' }} label: 'Notifications', type: 'checkbox', checked: true {{ '}' }},
    {{ '{' }} divider: true {{ '}' }},
    {{ '{' }} label: 'List View', type: 'radio', group: 'view', checked: true {{ '}' }},
    {{ '{' }} label: 'Grid View', type: 'radio', group: 'view' {{ '}' }}
  ]"
  (itemClick)="updateSettings($event)"
></app-context-menu>`);

  darkThemeCode = signal(`<app-context-menu
  [items]="items"
  theme="dark"
  [animated]="true"
  [staggered]="true"
  (itemClick)="onMenuClick($event)"
></app-context-menu>`);

  advancedCode = signal(`<app-context-menu
  [items]="items"
  variant="glass"
  [backdropBlur]="'12px'"
  [animated]="true"
  [staggered]="true"
  maxHeight="400px"
  [edgeDetection]="true"
  [pinnable]="true"
  keyboard-navigation="true"
  (itemClick)="onMenuClick($event)"
></app-context-menu>`);

  playgroundCode = signal(`<app-context-menu
  [items]="menuItems"
  [trigger]="triggerMode"
  [theme]="theme"
  [variant]="variant"
  [animated]="animated"
  [staggered]="staggered"
  [closeOnSelect]="closeOnSelect"
  (itemClick)="onMenuClick($event)"
></app-context-menu>`);

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
