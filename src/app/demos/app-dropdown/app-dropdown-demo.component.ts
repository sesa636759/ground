import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownPlaygroundComponent } from './components/dropdown-playground/dropdown-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-dropdown-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-dropdown-demo.component.html',
  styleUrl: './app-dropdown-demo.component.scss',
})
export class AppDropdownDemoComponent extends BaseDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'basic', title: 'Basic Dropdown', icon: '📝' },
    { id: 'multi-select', title: 'Multi Selection', icon: '✅' },
    { id: 'cascading', title: 'Hierarchical', icon: '🌳' },
    { id: 'sizes', title: 'Size Scaling', icon: '📏' },
  ];

  anchorLinks = JSON.stringify(
    this.exampleVariants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  basicOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3', disabled: true },
  ];

  cascadingOptions = [
    {
      label: 'Cars',
      value: 'cars',
      children: [
        { label: 'Tesla', value: 'tesla' },
        { label: 'BMW', value: 'bmw' },
      ],
    },
    {
      label: 'Bikes',
      value: 'bikes',
      children: [
        { label: 'Ducati', value: 'ducati' },
        { label: 'Honda', value: 'honda' },
      ],
    },
  ];

  basicCode = `<ui-dropdown [options]="options" placeholder="Select one..."></ui-dropdown>`;

  multiSelectCode = `<!-- Enable multiple selection -->
<ui-dropdown multi-select [options]="options"></ui-dropdown>`;

  cascadingCode = `<!-- Hierarchical structure with expandable groups -->
<ui-dropdown cascading [options]="hierarchicalOptions"></ui-dropdown>`;

  sizesCode = `<ui-dropdown size="sm"></ui-dropdown>
<ui-dropdown size="md"></ui-dropdown>
<ui-dropdown size="lg"></ui-dropdown>`;

  ngOnInit() {}
}
