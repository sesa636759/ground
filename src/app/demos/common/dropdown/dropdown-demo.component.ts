import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmDropdownPlaygroundComponent } from '../../../playground/common/dropdown-playground/dropdown-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-dropdown-demo',
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
    { id: 'basic', title: 'Basic Dropdown', icon: 'list', iconLibrary: 'lucide' },
    { id: 'premium-options', title: 'Premium Options', icon: 'sparkles', iconLibrary: 'lucide' },
    {
      id: 'selection-modes',
      title: 'Selection Modes',
      icon: 'check-square',
      iconLibrary: 'lucide',
    },
    { id: 'search-filter', title: 'Search & Filtering', icon: 'search', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance Styles', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Size Variants', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'states', title: 'Component States', icon: 'activity', iconLibrary: 'lucide' },
  ];

  basicOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3', disabled: true },
  ];

  premiumOptions = [
    {
      label: 'Cloud Storage',
      value: 'cloud',
      icon: 'cloud',
      subtitle: 'AWS / GCP / Azure',
      rightTag: 'Premium',
      rightTagColor: 'info',
    },
    {
      label: 'On-Premise',
      value: 'local',
      icon: 'home',
      subtitle: 'Private Server',
      rightIcon: 'lock',
    },
    {
      label: 'Hybrid Solution',
      value: 'hybrid',
      icon: 'git-branch',
      description: 'Mixed infrastructure',
    },
  ];

  cascadingOptions = [
    {
      label: 'Cars',
      value: 'cars',
      children: [
        { label: 'Tesla', value: 'tesla' },
        {
          label: 'BMW',
          value: 'bmw',
          children: [
            { label: 'Series 3', value: '3' },
            { label: 'Series 5', value: '5' },
          ],
        },
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

  basicCode = `<dui-dropdown [options]="options" placeholder="Select one..."></dui-dropdown>`;

  premiumCode = `<!-- Options with icons, subtitles, tags and right-side icons -->
<dui-dropdown [options]="premiumOptions" placeholder="Select infrastructure"></dui-dropdown>

<!-- Options shape:
{ 
  label: 'Cloud Storage', 
  value: 'cloud', 
  icon: 'cloud', 
  subtitle: 'AWS / GCP / Azure', 
  rightTag: 'Premium', 
  rightTagColor: 'info' 
} -->`;

  selectionCode = `<!-- Multi-select with checkmarks -->
<dui-dropdown multi-select [options]="options" placeholder="Choose multiple"></dui-dropdown>

<!-- Hierarchical/Cascading mode -->
<dui-dropdown cascading [options]="hierarchalOptions" placeholder="Select category"></dui-dropdown>`;

  searchCode = `<!-- Built-in fuzzy search filtering -->
<dui-dropdown searchable [options]="options" placeholder="Search technology..."></dui-dropdown>`;

  appearanceCode = `<!-- Standard select look -->
<dui-dropdown appearance="dropdown" [options]="options"></dui-dropdown>

<!-- Button-like interaction (no arrow) -->
<dui-dropdown appearance="button" [options]="options" placeholder="More Actions"></dui-dropdown>`;

  sizesCode = `<dui-dropdown size="sm" [options]="options"></dui-dropdown>
<dui-dropdown size="md" [options]="options"></dui-dropdown>
<dui-dropdown size="lg" [options]="options"></dui-dropdown>`;

  statesCode = `<!-- Disabled state -->
<dui-dropdown disabled placeholder="System offline"></dui-dropdown>

<!-- Pre-selected value -->
<dui-dropdown value="2" [options]="options"></dui-dropdown>

<!-- Full width container -->
<dui-dropdown full-width [options]="options"></dui-dropdown>`;

  jsonOptions(opts: any) {
    return JSON.stringify(opts);
  }
}
