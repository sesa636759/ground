import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmSplitButtonPlaygroundComponent } from '../../../playground/common/split-button-playground/split-button-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-split-button-demo',

  imports: [
    ...PLAYGROUND_IMPORTS,
    DmSplitButtonPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './split-button-demo.component.html',
  styleUrl: './split-button-demo.component.scss',
})
export class DmSplitButtonDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'colors', title: 'Color Themes', icon: '🎨', color: '#3b82f6' },
    { id: 'states', title: 'Visual States', icon: '⚡', color: '#10b981' },
  ];

  menuItems = [
    { label: 'Update', icon: '🔄' },
    { label: 'Delete', icon: '🗑️' },
    { separator: true },
    { label: 'Home', icon: '🏠' },
  ];

  playgroundCode = `<ui-split-button label="Save" [model]="items"></ui-split-button>`;

  colorsCode = `<!-- Danger Variant -->
<ui-split-button label="Delete" variant="danger" [model]="items"></ui-split-button>

<!-- Success Variant -->
<ui-split-button label="Approve" variant="success" [model]="items"></ui-split-button>

<!-- Outline Variant -->
<ui-split-button label="More" variant="outline" [model]="items"></ui-split-button>`;

  statesCode = `<!-- Loading State -->
<ui-split-button loading label="Proceed"></ui-split-button>

<!-- Disabled State -->
<ui-split-button disabled label="Actions"></ui-split-button>`;
}
