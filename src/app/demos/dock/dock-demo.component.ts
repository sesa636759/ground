import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';
import { DmDockPlaygroundComponent } from '../../playground/common/dock-playground/dock-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-dock-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmDockPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
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
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®' },
    { id: 'basic', title: 'Basic', icon: 'ðŸŸ¦', color: '#3b82f6' },
    { id: 'positions', title: 'Positions', icon: 'ðŸ“', color: '#10b981' },
    { id: 'sizes', title: 'Sizes', icon: 'ðŸ“', color: '#f59e0b' },
    { id: 'badges', title: 'With Badges', icon: 'ðŸ””', color: '#ef4444' },
    { id: 'os', title: 'OS Experience', icon: 'âœ¨', color: '#ec4899' },
  ];

  basicItems = [
    { id: 'finder', label: 'Finder', icon: 'smile' },
    { id: 'mail', label: 'Mail', icon: 'mail' },
    { id: 'browser', label: 'Browser', icon: 'globe' },
    { id: 'music', label: 'Music', icon: 'music' },
    { id: 'photos', label: 'Photos', icon: 'image' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  positionItems = [
    { id: '1', label: 'Home', icon: 'home' },
    { id: '2', label: 'Search', icon: 'search' },
    { id: '3', label: 'Heart', icon: 'heart' },
    { id: '4', label: 'Star', icon: 'star' },
    { id: '5', label: 'Settings', icon: 'settings' },
  ];

  sizeItems = [
    { id: '1', label: 'File', icon: 'file-text' },
    { id: '2', label: 'Folder', icon: 'folder' },
    { id: '3', label: 'Image', icon: 'image' },
    { id: '4', label: 'Video', icon: 'clapperboard' },
  ];

  badgeItems = [
    { id: 'mail', label: 'Mail', icon: 'mail', badge: 12 },
    { id: 'messages', label: 'Messages', icon: 'message-square', badge: 5 },
    { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 99 },
    { id: 'calendar', label: 'Calendar', icon: 'calendar' },
    { id: 'tasks', label: 'Tasks', icon: 'check-square', badge: 3 },
  ];

  osItems = [
    { id: 'finder', label: 'Finder', icon: 'smile', active: true },
    { id: 'launchpad', label: 'Launchpad', icon: 'rocket' },
    { id: 'browser', label: 'Safari', icon: 'compass', active: true },
    { id: 'mail', label: 'Mail', icon: 'mail', badge: 3, bounce: true },
    { id: 'maps', label: 'Maps', icon: 'map' },
    { id: 'separator1', separator: true },
    { id: 'music', label: 'Music', icon: 'music', active: true },
    { id: 'podcasts', label: 'Podcasts', icon: 'mic' },
    { id: 'tv', label: 'TV', icon: 'tv' },
    { id: 'separator2', separator: true },
    { id: 'settings', label: 'System Settings', icon: 'settings' },
    { id: 'trash', label: 'Trash', icon: 'trash-2' },
  ];

  basicCode = `<ui-dock [items]="basicItems" icon-library="lucide"></ui-dock>`;

  positionsCode = `<ui-dock [items]="positionItems" position="bottom" icon-library="lucide"></ui-dock>
<ui-dock [items]="positionItems" position="top" icon-library="lucide"></ui-dock>
<ui-dock [items]="positionItems" position="left" icon-library="lucide"></ui-dock>
<ui-dock [items]="positionItems" position="right" icon-library="lucide"></ui-dock>`;

  sizesCode = `<ui-dock [items]="sizeItems" size="sm" icon-library="lucide"></ui-dock>
<ui-dock [items]="sizeItems" size="md" icon-library="lucide"></ui-dock>
<ui-dock [items]="sizeItems" size="lg" icon-library="lucide"></ui-dock>`;

  badgesCode = `<ui-dock [items]="badgeItems" icon-library="lucide"></ui-dock>`;

  osCode = `<ui-dock 
  [items]="osItems" 
  position="bottom" 
  size="md" 
  magnify="true" 
  blur-effect="true"
  icon-library="lucide">
</ui-dock>`;
}
