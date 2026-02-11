import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-context-menu-docs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './context-menu-docs.component.html',
  styleUrl: './context-menu-docs.component.scss',
})
export class ContextMenuDocsComponent {
  contextMenuConfig = {
    id: 'context-menu',
    tagName: 'ui-context-menu',
    label: 'Context Menu',
    description: 'A custom menu that appears on right-click interaction.',
    props: [
      {
        name: 'target',
        type: 'string',
        defaultValue: '',
        description: 'Selector for trigger element',
      },
      { name: 'model', type: 'json', defaultValue: [] },
    ],
  };

  activeTab: 'examples' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<div id="target-area" style="height: 200px; background: #f0f0f0;">
  Right click here!
</div>

<ui-context-menu target="#target-area" [model]="basicItems"></ui-context-menu>`,
    
    click: `<ui-button label="Click Me" (click)="openMenu($event)"></ui-button>

<ui-context-menu #clickMenu trigger="click" [model]="basicItems"></ui-context-menu>`,
    
    nested: `<div id="nested-area" style="height: 200px; background: #f0f0f0;">
  Right click for 5-level deep menu
</div>

<ui-context-menu target="#nested-area" [model]="nestedItems"></ui-context-menu>`,
    
    list: `<ul class="item-list">
  <li *ngFor="let item of listItems" (contextmenu)="showContextMenu($event, item)">
    {{ item.name }}
  </li>
</ul>

<ui-context-menu #listMenu [model]="contextMenuItems"></ui-context-menu>`,
    
    commandPalette: `<ui-button label="Open Command Palette (Ctrl+K)" (click)="openCommandPalette()"></ui-button>

<ui-context-menu 
  trigger="click" 
  mode="command-palette" 
  [model]="commandItems"
  [searchable]="true"
  [shortcuts]="true">
</ui-context-menu>`,
    
    checkbox: `<ui-button label="Open Settings Menu" (click)="openSettingsMenu($event)"></ui-button>

<ui-context-menu trigger="click" [model]="checkboxItems"></ui-context-menu>`,
    
    avatar: `<ui-button label="Select Team Member" (click)="openTeamMenu($event)"></ui-button>

<ui-context-menu trigger="click" [model]="avatarItems"></ui-context-menu>`,
    
    grouped: `<ui-button label="Open File Menu" (click)="openFileMenu($event)"></ui-button>

<ui-context-menu trigger="click" [model]="groupedItems"></ui-context-menu>`,
    
    multiSelect: `<ui-button label="Select Tags" (click)="openTagsMenu($event)"></ui-button>

<ui-context-menu 
  trigger="click" 
  [model]="tagItems"
  [multiSelect]="true"
  [showCounter]="true">
</ui-context-menu>`,
    
    dark: `<ui-button label="Open Dark Menu" (click)="openDarkMenu($event)"></ui-button>

<ui-context-menu 
  trigger="click" 
  [model]="basicItems"
  theme="dark">
</ui-context-menu>`,
    
    glass: `<ui-button label="Glass Menu" (click)="openGlassMenu($event)"></ui-button>

<ui-context-menu 
  trigger="click" 
  [model]="basicItems"
  effect="glassmorphism">
</ui-context-menu>`,
    
    staggered: `<ui-button label="Staggered Menu" (click)="openStaggeredMenu($event)"></ui-button>

<ui-context-menu 
  trigger="click" 
  [model]="basicItems"
  animation="staggered">
</ui-context-menu>`,
    
    zoom: `<ui-button label="Zoom Animation" (click)="openZoomMenu($event)"></ui-button>

<ui-context-menu 
  trigger="click" 
  [model]="basicItems"
  animation="zoom">
</ui-context-menu>`,
    
    highlight: `<ui-button label="Highlight Menu" (click)="openHighlightMenu($event)"></ui-button>

<ui-context-menu 
  trigger="click" 
  [model]="basicItems"
  [searchable]="true"
  [highlightMatches]="true">
</ui-context-menu>`,
    
    backdrop: `<ui-button label="Backdrop Menu" (click)="openBackdropMenu($event)"></ui-button>

<ui-context-menu 
  trigger="click" 
  [model]="basicItems"
  [backdrop]="true">
</ui-context-menu>`,
    
    pinned: `<ui-button label="Pinned Items" (click)="openPinnedMenu($event)"></ui-button>

<ui-context-menu 
  trigger="click" 
  [model]="pinnedItems"
  [allowPinning]="true">
</ui-context-menu>`,
    
    richContent: `<ui-button label="Rich Content" (click)="openRichMenu($event)"></ui-button>

<ui-context-menu 
  trigger="click" 
  [model]="richContentItems">
</ui-context-menu>`,
    
    breadcrumbs: `<ui-button label="Breadcrumbs" (click)="openBreadcrumbMenu($event)"></ui-button>

<ui-context-menu 
  trigger="click" 
  [model]="nestedItems"
  [showBreadcrumbs]="true">
</ui-context-menu>`,
    
    gestures: `<div id="gesture-area" style="height: 200px; background: #f0f0f0;">
  Long-press or swipe
</div>

<ui-context-menu 
  target="#gesture-area"
  [model]="basicItems"
  [touchGestures]="true">
</ui-context-menu>`,
  };

  // Menu item data
  basicItems = [
    { label: 'New File', icon: 'fas fa-file', value: 'new' },
    { label: 'Open', icon: 'fas fa-folder-open', value: 'open', shortcut: 'Ctrl+O' },
    { label: 'Save', icon: 'fas fa-save', value: 'save', shortcut: 'Ctrl+S' },
    { separator: true },
    { label: 'Cut', icon: 'fas fa-cut', value: 'cut', shortcut: 'Ctrl+X' },
    { label: 'Copy', icon: 'fas fa-copy', value: 'copy', shortcut: 'Ctrl+C' },
    { label: 'Paste', icon: 'fas fa-paste', value: 'paste', shortcut: 'Ctrl+V' },
  ];

  nestedItems = [
    {
      label: 'Sort Item 1',
      icon: 'fas fa-save',
      shortcut: 'Ctrl+A',
      children: [
        { label: 'Cut L2 Item 1', icon: 'fas fa-cut' },
        {
          label: 'Paste L2 Item 2',
          icon: 'fas fa-folder',
          children: [
            { label: 'Share L3 Item 1', icon: 'fas fa-bookmark' },
            {
              label: 'Copy L3 Item 2',
              icon: 'fas fa-copy',
              children: [
                { label: 'Delete L4 Item 1', icon: 'fas fa-trash' },
                {
                  label: 'Edit L4 Item 2',
                  icon: 'fas fa-edit',
                  children: [
                    { label: 'Print L5 Item 1', icon: 'fas fa-print' },
                    { label: 'Download L5 Item 2', icon: 'fas fa-download' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  listItems = [
    { name: 'Project Files', icon: 'fas fa-folder' },
    { name: 'Documents', icon: 'fas fa-file-alt' },
    { name: 'Images', icon: 'fas fa-image' },
    { name: 'Videos', icon: 'fas fa-video' },
  ];

  commandItems = [
    { label: 'Quick Open File...', icon: 'fas fa-search', shortcut: 'Ctrl+P', value: 'quick-open' },
    { label: 'Command Palette...', icon: 'fas fa-terminal', shortcut: 'Ctrl+Shift+P', value: 'cmd-palette' },
    { label: 'New File', icon: 'fas fa-file', shortcut: 'Ctrl+N', value: 'new-file' },
    { label: 'Save All', icon: 'fas fa-save', shortcut: 'Ctrl+K S', value: 'save-all' },
    { separator: true },
    { label: 'Find in Files', icon: 'fas fa-search', shortcut: 'Ctrl+Shift+F', value: 'find' },
    { label: 'Replace in Files', icon: 'fas fa-exchange-alt', shortcut: 'Ctrl+Shift+H', value: 'replace' },
  ];

  checkboxItems = [
    { label: 'Auto Save', type: 'checkbox', checked: true, value: 'auto-save' },
    { label: 'Word Wrap', type: 'checkbox', checked: false, value: 'word-wrap' },
    { label: 'Show Minimap', type: 'checkbox', checked: true, value: 'minimap' },
    { separator: true },
    { label: 'Editor Font Size', group: 'font-size' },
    { label: 'Small (12px)', type: 'radio', name: 'fontSize', value: '12' },
    { label: 'Medium (14px)', type: 'radio', name: 'fontSize', value: '14', checked: true },
    { label: 'Large (16px)', type: 'radio', name: 'fontSize', value: '16' },
  ];

  avatarItems = [
    {
      label: 'Sarah Johnson',
      description: 'Senior Developer',
      avatar: 'https://i.pravatar.cc/150?img=1',
      badge: 'Online',
      value: 'sarah',
    },
    {
      label: 'Mike Chen',
      description: 'Project Manager',
      avatar: 'https://i.pravatar.cc/150?img=2',
      badge: 'Busy',
      value: 'mike',
    },
    {
      label: 'Emily Davis',
      description: 'UX Designer',
      avatar: 'https://i.pravatar.cc/150?img=3',
      badge: 'Away',
      value: 'emily',
    },
  ];

  groupedItems = [
    { label: 'New File', icon: 'fas fa-file', group: 'File', value: 'new' },
    { label: 'Open File', icon: 'fas fa-folder-open', group: 'File', value: 'open' },
    { label: 'Save', icon: 'fas fa-save', group: 'File', value: 'save' },
    { label: 'Cut', icon: 'fas fa-cut', group: 'Edit', value: 'cut' },
    { label: 'Copy', icon: 'fas fa-copy', group: 'Edit', value: 'copy' },
    { label: 'Paste', icon: 'fas fa-paste', group: 'Edit', value: 'paste' },
    { label: 'Find', icon: 'fas fa-search', group: 'Search', value: 'find' },
    { label: 'Replace', icon: 'fas fa-exchange-alt', group: 'Search', value: 'replace' },
  ];

  tagItems = [
    { label: 'JavaScript', icon: 'fas fa-tag', value: 'js', selectable: true },
    { label: 'TypeScript', icon: 'fas fa-tag', value: 'ts', selectable: true },
    { label: 'React', icon: 'fas fa-tag', value: 'react', selectable: true },
    { label: 'Angular', icon: 'fas fa-tag', value: 'angular', selectable: true },
    { label: 'Vue', icon: 'fas fa-tag', value: 'vue', selectable: true },
    { label: 'Node.js', icon: 'fas fa-tag', value: 'node', selectable: true },
  ];

  pinnedItems = [
    { label: 'Dashboard', icon: 'fas fa-home', pinned: true, value: 'dashboard' },
    { label: 'Settings', icon: 'fas fa-cog', pinned: true, value: 'settings' },
    { separator: true },
    { label: 'Projects', icon: 'fas fa-folder', value: 'projects' },
    { label: 'Reports', icon: 'fas fa-chart-bar', value: 'reports' },
    { label: 'Analytics', icon: 'fas fa-analytics', value: 'analytics' },
  ];

  richContentItems = [
    {
      label: 'Primary Color',
      icon: 'fas fa-palette',
      color: '#3b82f6',
      value: 'color-primary',
    },
    {
      label: 'Success Color',
      icon: 'fas fa-palette',
      color: '#10b981',
      value: 'color-success',
    },
    {
      label: 'Upload Progress',
      icon: 'fas fa-upload',
      progress: 75,
      value: 'upload',
    },
    {
      label: 'Profile Picture',
      image: 'https://picsum.photos/200/100',
      value: 'profile-pic',
    },
  ];

  setTab(tab: 'examples' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }
}
