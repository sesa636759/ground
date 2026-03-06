import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';

import { SplitButtonPlaygroundComponent } from './components/split-button-playground/split-button-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-split-button-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    SplitButtonPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-split-button-demo.component.html',
  styleUrl: './app-split-button-demo.component.scss',
})
export class AppSplitButtonDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
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
