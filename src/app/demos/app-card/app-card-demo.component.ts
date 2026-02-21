import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardPlaygroundComponent } from './components/card-playground/card-playground.component';

import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { CardExamplesComponent } from './components/card-examples/card-examples.component';

@Component({
  selector: 'app-app-card-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    CardExamplesComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-card-demo.component.html',
  styleUrl: './app-card-demo.component.scss',
})
export class AppCardDemoComponent {
  playgroundCode = `<ui-card variant="elevated" hoverable width="340px">
  <div slot="cover">...</div>
  <div slot="header"><h3>Card Title</h3></div>
  <div slot="content">...</div>
  <div slot="footer">...</div>
</ui-card>`;
}
