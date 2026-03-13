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
    { id: 'basic', title: 'Basic Layout', icon: 'square', iconLibrary: 'lucide' },
    { id: 'positions', title: 'Dock Positions', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Size Variants', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'magnify', title: 'Magnification Effect', icon: 'zoom-in', iconLibrary: 'lucide' },
    { id: 'blur', title: 'Glassmorphism (Blur)', icon: 'droplets', iconLibrary: 'lucide' },
    { id: 'badges', title: 'Badges & Indicators', icon: 'bell', iconLibrary: 'lucide' },
    { id: 'os', title: 'Desktop Experience', icon: 'monitor', iconLibrary: 'lucide' },
    { id: 'interactive', title: 'Events & Reorder', icon: 'hand-metal', iconLibrary: 'lucide' },
  ];

  basicItems = [
    { id: 'finder', label: 'Finder', icon: 'search' },
    { id: 'mail', label: 'Mail', icon: 'mail' },
    { id: 'browser', label: 'Browser', icon: 'globe' },
    { id: 'music', label: 'Music', icon: 'music' },
    { id: 'photos', label: 'Photos', icon: 'image' },
  ];

  badgeItems = [
    { id: 'mail', label: 'Mail', icon: 'mail', badge: 12 },
    { id: 'messages', label: 'Messages', icon: 'message-square', badge: 5 },
    { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 99 },
    { id: 'tasks', label: 'Tasks', icon: 'check-square', badge: 3 },
  ];

  osItems = [
    { id: 'finder', label: 'Finder', icon: 'search', active: true },
    { id: 'safari', label: 'Safari', icon: 'compass', active: true },
    { id: 'mail', label: 'Mail', icon: 'mail', badge: 3, bounce: true },
    { separator: true },
    { id: 'music', label: 'Music', icon: 'music', active: true },
    { id: 'trash', label: 'Trash', icon: 'trash-2' },
  ];

  basicCode = `<ui-dock [items]="items" icon-library="lucide"></ui-dock>`;
  positionsCode = `<ui-dock position="left" [items]="items" icon-library="lucide"></ui-dock>`;
  magnifyCode = `<ui-dock magnify [items]="items" icon-library="lucide"></ui-dock>`;
  blurCode = `<ui-dock blur-effect [items]="items" icon-library="lucide"></ui-dock>`;
  osCode = `<ui-dock [items]="osItems" magnify blur-effect icon-library="lucide"></ui-dock>`;

  handleItemClick(ev: any) {
    this.logEvent(`Dock Item Clicked: ${ev.detail.itemId}`);
  }
}
