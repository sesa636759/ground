import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { DmPicklistPlaygroundComponent } from '../../../playground/common/picklist-playground/picklist-playground.component';

@Component({
  selector: 'ds-picklist-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmPicklistPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './picklist-demo.component.html',
  styleUrl: './picklist-demo.component.scss',
})
export class DmPicklistDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Picklist', icon: 'list', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizes', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'multi', title: 'Multi-Select', icon: 'check-square', iconLibrary: 'lucide' },
    { id: 'search', title: 'Searchable', icon: 'search', iconLibrary: 'lucide' },
    { id: 'grouped', title: 'Grouped Options', icon: 'layers', iconLibrary: 'lucide' },
    { id: 'icons', title: 'Icons & Libraries', icon: 'image', iconLibrary: 'lucide' },
    { id: 'trigger', title: 'Custom Trigger', icon: 'mouse-pointer-click', iconLibrary: 'lucide' },
    { id: 'clearable', title: 'Clearable', icon: 'x-circle', iconLibrary: 'lucide' },
    { id: 'loading', title: 'States', icon: 'loader', iconLibrary: 'lucide' },
    { id: 'premium', title: 'Premium Suite', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'reorder', title: 'Reorderable Tags', icon: 'reorder-three', iconLibrary: 'ionicons' },
    { id: 'creatable', title: 'Creatable Options', icon: 'plus-circle', iconLibrary: 'lucide' },
  ];

  fruitOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'grape', label: 'Grape' },
    { value: 'mango', label: 'Mango' },
  ];

  richOptions = [
    {
      value: 'chrome',
      label: 'Google Chrome',
      icon: 'logo-chrome',
      iconLibrary: 'ionicons',
      description: 'Fastest browser',
    },
    {
      value: 'firefox',
      label: 'Mozilla Firefox',
      icon: 'logo-firefox',
      iconLibrary: 'ionicons',
      description: 'Privacy first',
    },
    {
      value: 'safari',
      label: 'Apple Safari',
      icon: 'logo-safari',
      iconLibrary: 'ionicons',
      description: 'Best for Mac',
    },
    {
      value: 'edge',
      label: 'Microsoft Edge',
      icon: 'logo-edge',
      iconLibrary: 'ionicons',
      description: 'Modern Windows browser',
    },
  ];

  groupedData = [
    {
      group: 'Operating Systems',
      items: [
        { value: 'windows', label: 'Windows' },
        { value: 'macos', label: 'macOS' },
        { value: 'linux', label: 'Linux' },
      ],
    },
    {
      group: 'Mobile Platforms',
      items: [
        { value: 'ios', label: 'iOS' },
        { value: 'android', label: 'Android' },
      ],
    },
  ];

  basicCode = signal(
    `<ui-picklist [options]="fruitOptions" placeholder="Pick a fruit"></ui-picklist>`,
  );

  variantsCode = signal(`<ui-picklist variant="default" placeholder="Default"></ui-picklist>
<ui-picklist variant="bordered" placeholder="Bordered"></ui-picklist>
<ui-picklist variant="ghost" placeholder="Ghost"></ui-picklist>`);

  sizesCode = signal(`<ui-picklist size="sm" placeholder="Small"></ui-picklist>
<ui-picklist size="md" placeholder="Medium"></ui-picklist>
<ui-picklist size="lg" placeholder="Large"></ui-picklist>`);

  multiCode =
    signal(`<ui-picklist mode="multi" [options]="fruitOptions" placeholder="Select multiple"></ui-picklist>
<ui-picklist mode="multi" show-select-all [options]="fruitOptions" label="Select All Example"></ui-picklist>`);

  searchCode = signal(
    `<ui-picklist searchable search-placeholder="Filter fruits..." [options]="fruitOptions"></ui-picklist>`,
  );

  groupedCode = signal(
    `<ui-picklist grouped [options]="groupedData" placeholder="Select OS"></ui-picklist>`,
  );

  iconsCode = signal(`<ui-picklist [options]="richOptions" icon-library="ionicons"></ui-picklist>
<ui-picklist [options]="fruitOptions" icon-library="lucide"></ui-picklist>`);

  triggerCode = signal(`<ui-picklist custom-trigger [options]="fruitOptions">
  <ui-button slot="trigger" variant="outline" size="sm">
    <ui-icon name="filter" library="lucide"></ui-icon>
    Custom Launch Button
  </ui-button>
</ui-picklist>`);

  clearableCode = signal(
    `<ui-picklist clearable [options]="fruitOptions" value="apple"></ui-picklist>`,
  );

  loadingCode = signal(`<ui-picklist loading placeholder="Loading data..."></ui-picklist>
<ui-picklist disabled value="banana" [options]="fruitOptions"></ui-picklist>`);

  premiumCode = signal(`<ui-picklist 
  mode="multi" 
  reorderable 
  creatable 
  show-select-all 
  [options]="fruitOptions"
></ui-picklist>`);

  creatableCode = signal(
    `<ui-picklist creatable searchable placeholder="Type to create..."></ui-picklist>`,
  );

  reorderCode = signal(
    `<ui-picklist mode="multi" reorderable [options]="fruitOptions" [value]="['apple', 'banana']"></ui-picklist>`,
  );

  onChange(event: any) {
    console.log('Picklist Selection:', event.detail);
  }
}
