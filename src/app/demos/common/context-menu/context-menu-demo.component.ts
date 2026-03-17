import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmContextMenuPlaygroundComponent } from '../../../playground/common/context-menu-playground/context-menu-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-context-menu-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmContextMenuPlaygroundComponent,
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
  exampleVariants = [{ id: 'targets', title: 'Multiple Targets', icon: '🎯' }];

  fileItems = [
    { label: 'Open', icon: '📁' },
    { label: 'Download', icon: '⬇️' },
    { separator: true },
    { label: 'Rename', icon: '📝' },
    { label: 'Delete', icon: '🗑️' },
  ];

  playgroundCode = `<div #trigger> Right Click Me </div>
<dui-context-menu [model]="items" [target]="trigger"></dui-context-menu>`;

  targetsCode = `<!-- Global Menu -->
<dui-context-menu [model]="items" global></dui-context-menu>

<!-- Specific Target -->
<img #img src="..." />
<dui-context-menu [model]="imgItems" [target]="img"></dui-context-menu>`;
}
