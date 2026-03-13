import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmSpeedDialPlaygroundComponent } from '../../../playground/common/speed-dial-playground/speed-dial-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-speed-dial-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmSpeedDialPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speed-dial-demo.component.html',
  styleUrl: './speed-dial-demo.component.scss',
})
export class DmSpeedDialDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'directions', title: 'Opening Directions', icon: 'move', iconLibrary: 'lucide' },
    { id: 'types', title: 'Motion Patterns', icon: 'swatch-book', iconLibrary: 'lucide' },
  ];

  items = [
    { label: 'Add', icon: '➕' },
    { label: 'Update', icon: '🔄' },
    { label: 'Delete', icon: '🗑️' },
    { label: 'Home', icon: '🏠' },
  ];

  playgroundCode = `<ui-speed-dial [model]="items" direction="up"></ui-speed-dial>`;

  directionsCode = `<!-- Vertical Up -->
<ui-speed-dial direction="up" [model]="items"></ui-speed-dial>

<!-- Horizontal Right -->
<ui-speed-dial direction="right" [model]="items"></ui-speed-dial>`;

  typesCode = `<!-- Circular Expansion -->
<ui-speed-dial type="circle" [radius]="100" [model]="items"></ui-speed-dial>

<!-- Half Circle -->
<ui-speed-dial type="half-circle" direction="up" [model]="items"></ui-speed-dial>`;
}
