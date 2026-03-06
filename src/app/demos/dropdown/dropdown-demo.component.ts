import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';
import { DmDropdownPlaygroundComponent } from '../../playground/common/dropdown-playground/dropdown-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-dropdown-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmDropdownPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dropdown-demo.component.html',
  styleUrl: './dropdown-demo.component.scss',
})
export class DmDropdownDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®' },
    { id: 'basic', title: 'Basic Dropdown', icon: 'ðŸ“' },
    { id: 'multi-select', title: 'Multi Selection', icon: 'âœ…' },
    { id: 'cascading', title: 'Hierarchical', icon: 'ðŸŒ³' },
    { id: 'sizes', title: 'Size Scaling', icon: 'ðŸ“' },
  ];

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
}
