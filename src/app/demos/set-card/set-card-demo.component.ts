import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardPlaygroundComponent } from './components/card-playground/card-playground.component';
import { SetCardExamplesComponent } from './components/card-examples/card-examples.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-set-card-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CardPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-card-demo.component.html',
  styleUrl: './set-card-demo.component.scss',
})
export class SetCardDemoComponent {
  playgroundCode = `<app-card
  variant="elevated"
  [hoverable]="true"
>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</app-card>`;

  ngOnInit() {}
}
