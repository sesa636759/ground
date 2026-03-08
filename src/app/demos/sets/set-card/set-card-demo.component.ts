import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { SetCardExamplesComponent } from './components/card-examples/card-examples.component';

@Component({
  selector: 'dm-set-card-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    SetCardExamplesComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-card-demo.component.html',
  styleUrl: './set-card-demo.component.scss',
})
export class DmSetCardDemoComponent {
  playgroundCode = `<ui-card
  variant="elevated"
  [hoverable]="true"
>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</ui-card>`;

  ngOnInit() {}
}
