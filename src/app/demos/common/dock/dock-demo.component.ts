import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmDockPlaygroundComponent } from '../../../playground/common/dock-playground/dock-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-dock-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmDockPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dock-demo.component.html',
  styleUrl: './dock-demo.component.scss',
})
export class DmDockDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Layout', icon: '📦', iconLibrary: 'emoji' },
    { id: 'positions', title: 'Dock Positions', icon: '🌍', iconLibrary: 'emoji' },
    { id: 'sizes', title: 'Size Variants', icon: '📏', iconLibrary: 'emoji' },
    { id: 'magnify', title: 'Magnification Effect', icon: '🔍', iconLibrary: 'emoji' },
    { id: 'blur', title: 'Glassmorphism (Blur)', icon: '✨', iconLibrary: 'emoji' },
    { id: 'badges', title: 'Badges & Indicators', icon: '🔔', iconLibrary: 'emoji' },
    { id: 'os', title: 'Desktop Experience', icon: '💻', iconLibrary: 'emoji' },
    { id: 'interactive', title: 'Events & Reorder', icon: '👈', iconLibrary: 'emoji' },
  ];

  basicItems = [
    { id: 'finder', label: 'Finder', icon: '🔍', iconLibrary: 'emoji' },
    { id: 'mail', label: 'Mail', icon: '✉️', iconLibrary: 'emoji' },
    { id: 'browser', label: 'Browser', icon: '🌐', iconLibrary: 'emoji' },
    { id: 'music', label: 'Music', icon: '🎵', iconLibrary: 'emoji' },
    { id: 'photos', label: 'Photos', icon: '🖼️', iconLibrary: 'emoji' },
  ];

  badgeItems = [
    { id: 'mail', label: 'Mail', icon: '✉️', badge: 12, iconLibrary: 'emoji' },
    { id: 'messages', label: 'Messages', icon: '💬', badge: 5, iconLibrary: 'emoji' },
    { id: 'notifications', label: 'Notifications', icon: '🔔', badge: 99, iconLibrary: 'emoji' },
    { id: 'tasks', label: 'Tasks', icon: '✅', badge: 3, iconLibrary: 'emoji' },
  ];

  osItems = [
    { id: 'finder', label: 'Finder', icon: '🔍', active: true, iconLibrary: 'emoji' },
    { id: 'safari', label: 'Safari', icon: '🧭', active: true, iconLibrary: 'emoji' },
    { id: 'mail', label: 'Mail', icon: '✉️', badge: 3, bounce: true, iconLibrary: 'emoji' },
    { separator: true },
    { id: 'music', label: 'Music', icon: '🎵', active: true, iconLibrary: 'emoji' },
    { id: 'trash', label: 'Trash', icon: '🗑️', iconLibrary: 'emoji' },
  ];

  basicCode = `<ui-dock [items]="items"></ui-dock>`;
  positionsCode = `<ui-dock position="left" [items]="items"></ui-dock>`;
  magnifyCode = `<ui-dock magnify [items]="items"></ui-dock>`;
  blurCode = `<ui-dock blur-effect [items]="items"></ui-dock>`;
  osCode = `<ui-dock [items]="osItems" magnify blur-effect></ui-dock>`;

  handleItemClick(ev: any) {
    console.log(`Dock Item Clicked: ${ev.detail.itemId}`);
  }
}
