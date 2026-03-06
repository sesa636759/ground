import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';

import { PicklistPlaygroundComponent } from './components/picklist-playground/picklist-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-picklist-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    PicklistPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-picklist-demo.component.html',
  styleUrl: './app-picklist-demo.component.scss',
})
export class AppPicklistDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'features', title: 'UI Controls', icon: '⚙️', color: '#3b82f6' },
  ];

  sourceItems = [
    { name: 'Red', code: 'rd' },
    { name: 'Blue', code: 'bl' },
    { name: 'Green', code: 'gr' },
  ];

  targetItems = [{ name: 'Yellow', code: 'yl' }];

  playgroundCode = `<ui-picklist [source]="available" [target]="selected" source-header="Source" target-header="Target">
  <ng-template let-item>{{ item.name }}</ng-template>
</ui-picklist>`;

  featuresCode = `<!-- Hide Reorder Controls -->
<ui-picklist [show-source-controls]="false" [show-target-controls]="false" ...></ui-picklist>

<!-- Custom Header Text -->
<ui-picklist source-header="Backlog" target-header="Sprint Items" ...></ui-picklist>`;
}
