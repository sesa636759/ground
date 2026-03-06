import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';

import { DmHorizontalNavPlaygroundComponent } from '../../playground/common/horizontal-nav-playground/horizontal-nav-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'dm-horizontal-nav-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmHorizontalNavPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './horizontal-nav-demo.component.html',
  styleUrl: './horizontal-nav-demo.component.scss',
})
export class DmHorizontalNavDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'themes', title: 'Themes', icon: 'ðŸŽ¨', color: '#3b82f6' },
  ];

  navItems = [
    { label: 'Dashboard', icon: 'ðŸ“Š' },
    { label: 'Analytics', icon: 'ðŸ“ˆ' },
    { label: 'Reports', icon: 'ðŸ“„' },
    { label: 'Settings', icon: 'âš™ï¸' },
  ];

  playgroundCode = `<ui-horizontal-nav [model]="items" sticky></ui-horizontal-nav>`;

  themesCode = `<!-- Dark Theme -->
<ui-horizontal-nav theme="dark" [model]="items"></ui-horizontal-nav>

<!-- Light Theme with Sticky -->
<ui-horizontal-nav theme="light" sticky [model]="items"></ui-horizontal-nav>`;
}
