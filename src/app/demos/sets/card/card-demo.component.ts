import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { CardExamplesComponent } from './components/card-examples/card-examples.component';
import { DsCardPlaygroundComponent } from '../../../playground/sets/card-playground/card-playground.component';

@Component({
  selector: 'dm-card-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    CardExamplesComponent,
    DemoHeaderComponent,
    DsCardPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-demo.component.html',
  styleUrl: './card-demo.component.scss',
})
export class DmCardDemoComponent implements OnInit {
  playgroundCode = `<dui-card
  variant="elevated"
  [hoverable]="true"
>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</dui-card>`;

  ngOnInit() {}
}
