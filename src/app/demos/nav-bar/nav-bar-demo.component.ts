import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';

import { NavBarPlaygroundComponent } from './components/nav-bar-playground/nav-bar-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'dm-nav-bar-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    NavBarPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nav-bar-demo.component.html',
  styleUrl: './nav-bar-demo.component.scss',
})
export class DmNavBarDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'themes', title: 'Themes', icon: 'ðŸŒ—', color: '#3b82f6' },
  ];

  navItems = [
    { label: 'Overview', icon: 'ðŸ ' },
    { label: 'Admin', icon: 'ðŸ”‘' },
    { label: 'Logs', icon: 'ðŸ“œ' },
  ];

  playgroundCode = `<ui-nav-bar [model]="items">
  <div slot="header">MyApp</div>
</ui-nav-bar>`;

  themesCode = `<!-- Dark Sidebar -->
<ui-nav-bar theme="dark" [model]="items"></ui-nav-bar>

<!-- Collapsed mode -->
<ui-nav-bar collapsed [model]="items"></ui-nav-bar>`;
}

