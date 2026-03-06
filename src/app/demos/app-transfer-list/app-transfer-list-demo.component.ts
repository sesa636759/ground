import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { TransferListPlaygroundComponent } from './components/transfer-list-playground/transfer-list-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-transfer-list-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    TransferListPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-transfer-list-demo.component.html',
  styleUrl: './app-transfer-list-demo.component.scss',
})
export class AppTransferListDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'features', title: 'UI Controls', icon: '⚙️', color: '#3b82f6' },
  ];

  sourceItems = [
    { label: 'Standard User', value: 'std' },
    { label: 'Admin User', value: 'adm' },
    { label: 'Power User', value: 'pwr' },
  ];

  targetItems = [{ label: 'Guest User', value: 'gst' }];

  playgroundCode = `<ui-transfer-list [source]="available" [target]="assigned"></ui-transfer-list>`;

  featuresCode = `<!-- With Search Enabled -->
<ui-transfer-list show-search [source]="available"></ui-transfer-list>

<!-- Disabled State -->
<ui-transfer-list disabled [source]="available"></ui-transfer-list>`;
}
