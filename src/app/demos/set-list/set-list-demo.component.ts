import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { ListPlaygroundComponent } from './components/list-playground/list-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-list-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ListPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-list-demo.component.html',
  styleUrl: './set-list-demo.component.scss',
})
export class SetListDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'variants', title: 'Variants', icon: '🎭' },
    { id: 'nested', title: 'Nested Lists', icon: '🌳' },
    { id: 'premium', title: 'Premium Features', icon: '💎' },
  ];

  playgroundCode = `<app-list
  [items]="listItems"
  [selectable]="true"
  [hoverable]="true"
></app-list>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
