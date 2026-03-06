import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { ContextMenuPlaygroundComponent } from './components/context-menu-playground/context-menu-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'dm-context-menu-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    ContextMenuPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './context-menu-demo.component.html',
  styleUrl: './context-menu-demo.component.scss',
})
export class DmContextMenuDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®' },
    { id: 'targets', title: 'Multiple Targets', icon: 'ðŸŽ¯' },
  ];

  fileItems = [
    { label: 'Open', icon: 'ðŸ“‚' },
    { label: 'Download', icon: 'â¬‡ï¸' },
    { separator: true },
    { label: 'Rename', icon: 'ðŸ“' },
    { label: 'Delete', icon: 'ðŸ—‘ï¸' },
  ];

  playgroundCode = `<div #trigger> Right Click Me </div>
<ui-context-menu [model]="items" [target]="trigger"></ui-context-menu>`;

  targetsCode = `<!-- Global Menu -->
<ui-context-menu [model]="items" global></ui-context-menu>

<!-- Specific Target -->
<img #img src="..." />
<ui-context-menu [model]="imgItems" [target]="img"></ui-context-menu>`;
}

