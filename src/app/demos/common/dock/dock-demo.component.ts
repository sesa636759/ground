import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmDockPlaygroundComponent } from '../../../playground/common/dock-playground/dock-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-dock-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    ExampleSectionComponent,
    
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
    { id: 'basic', title: 'Basic Layout', icon: 'ðŸ“¦', iconLibrary: 'emoji' },
    { id: 'positions', title: 'Dock Positions', icon: 'ðŸŒ', iconLibrary: 'emoji' },
    { id: 'sizes', title: 'Size Variants', icon: 'ðŸ“', iconLibrary: 'emoji' },
    { id: 'magnify', title: 'Magnification Effect', icon: 'ðŸ”', iconLibrary: 'emoji' },
    { id: 'blur', title: 'Glassmorphism (Blur)', icon: 'âœ¨', iconLibrary: 'emoji' },
    { id: 'badges', title: 'Badges & Indicators', icon: 'ðŸ””', iconLibrary: 'emoji' },
    { id: 'os', title: 'Desktop Experience', icon: 'ðŸ’»', iconLibrary: 'emoji' },
    { id: 'interactive', title: 'Events & Reorder', icon: 'ðŸ‘ˆ', iconLibrary: 'emoji' },
  ];

  basicItems = [
    { id: 'finder', label: 'Finder', icon: 'ðŸ”', iconLibrary: 'emoji' },
    { id: 'mail', label: 'Mail', icon: 'âœ‰ï¸', iconLibrary: 'emoji' },
    { id: 'browser', label: 'Browser', icon: 'ðŸŒ', iconLibrary: 'emoji' },
    { id: 'music', label: 'Music', icon: 'ðŸŽµ', iconLibrary: 'emoji' },
    { id: 'photos', label: 'Photos', icon: 'ðŸ–¼ï¸', iconLibrary: 'emoji' },
  ];

  badgeItems = [
    { id: 'mail', label: 'Mail', icon: 'âœ‰ï¸', badge: 12, iconLibrary: 'emoji' },
    { id: 'messages', label: 'Messages', icon: 'ðŸ’¬', badge: 5, iconLibrary: 'emoji' },
    { id: 'notifications', label: 'Notifications', icon: 'ðŸ””', badge: 99, iconLibrary: 'emoji' },
    { id: 'tasks', label: 'Tasks', icon: 'âœ…', badge: 3, iconLibrary: 'emoji' },
  ];

  osItems = [
    { id: 'finder', label: 'Finder', icon: 'ðŸ”', active: true, iconLibrary: 'emoji' },
    { id: 'safari', label: 'Safari', icon: 'ðŸ§­', active: true, iconLibrary: 'emoji' },
    { id: 'mail', label: 'Mail', icon: 'âœ‰ï¸', badge: 3, bounce: true, iconLibrary: 'emoji' },
    { separator: true },
    { id: 'music', label: 'Music', icon: 'ðŸŽµ', active: true, iconLibrary: 'emoji' },
    { id: 'trash', label: 'Trash', icon: 'ðŸ—‘ï¸', iconLibrary: 'emoji' },
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
