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
    `<dui-picklist [options]="fruitOptions" placeholder="Pick a fruit"></dui-picklist>`,
  );

  variantsCode = signal(`<dui-picklist variant="default" placeholder="Default"></dui-picklist>
<dui-picklist variant="bordered" placeholder="Bordered"></dui-picklist>
<dui-picklist variant="ghost" placeholder="Ghost"></dui-picklist>`);

  sizesCode = signal(`<dui-picklist size="sm" placeholder="Small"></dui-picklist>
<dui-picklist size="md" placeholder="Medium"></dui-picklist>
<dui-picklist size="lg" placeholder="Large"></dui-picklist>`);

  multiCode =
    signal(`<dui-picklist mode="multi" [options]="fruitOptions" placeholder="Select multiple"></dui-picklist>
<dui-picklist mode="multi" show-select-all [options]="fruitOptions" label="Select All Example"></dui-picklist>`);

  searchCode = signal(
    `<dui-picklist searchable search-placeholder="Filter fruits..." [options]="fruitOptions"></dui-picklist>`,
  );

  groupedCode = signal(
    `<dui-picklist grouped [options]="groupedData" placeholder="Select OS"></dui-picklist>`,
  );

  iconsCode = signal(`<dui-picklist [options]="richOptions" icon-library="ionicons"></dui-picklist>
<dui-picklist [options]="fruitOptions" icon-library="lucide"></dui-picklist>`);

  triggerCode = signal(`<dui-picklist custom-trigger [options]="fruitOptions">
  <dui-button slot="trigger" variant="outline" size="sm">
    <dui-icon name="filter" library="lucide"></dui-icon>
    Custom Launch Button
  </dui-button>
</dui-picklist>`);

  clearableCode = signal(
    `<dui-picklist clearable [options]="fruitOptions" value="apple"></dui-picklist>`,
  );

  loadingCode = signal(`<dui-picklist loading placeholder="Loading data..."></dui-picklist>
<dui-picklist disabled value="banana" [options]="fruitOptions"></dui-picklist>`);

  premiumCode = signal(`<dui-picklist 
  mode="multi" 
  reorderable 
  creatable 
  show-select-all 
  [options]="fruitOptions"
></dui-picklist>`);

  creatableCode = signal(
    `<dui-picklist creatable searchable placeholder="Type to create..."></dui-picklist>`,
  );

  reorderCode = signal(
    `<dui-picklist mode="multi" reorderable [options]="fruitOptions" [value]="['apple', 'banana']"></dui-picklist>`,
  );

  onChange(event: any) {
    console.log('Picklist Selection:', event.detail);
  }
}
