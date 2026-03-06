import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { TogglePlaygroundComponent } from './components/toggle-playground/toggle-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-set-toggle-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    TogglePlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-toggle-demo.component.html',
  styleUrl: './set-toggle-demo.component.scss',
})
export class DmSetToggleDemoComponent extends BaseDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'layouts', title: 'Layouts', icon: 'ðŸ“' },
    { id: 'visual-variants', title: 'Visual Variants', icon: 'ðŸŽ¨' },
    { id: 'sizes', title: 'Sizes', icon: 'ðŸ“' },
    { id: 'colors', title: 'Colors', icon: 'ðŸŒˆ' },
    { id: 'icons', title: 'Icons Support', icon: 'âœ¨' },
    { id: 'states', title: 'States', icon: 'ðŸ”„' },
    { id: 'advanced', title: 'Advanced UX', icon: 'âš™ï¸' },
  ];

  notificationOptions = [
    { value: 'email', label: 'Email' },
    { value: 'sms', label: 'SMS' },
    { value: 'push', label: 'Push' },
  ];

  featureOptions = [
    { value: 'auto-update', label: 'Auto Update' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'cloud-sync', label: 'Cloud Sync' },
  ];

  privacyOptions = [
    { value: 'profile-public', label: 'Public Profile' },
    { value: 'show-email', label: 'Show Email' },
    { value: 'show-activity', label: 'Show Activity' },
    { value: 'allow-messages', label: 'Allow Messages' },
    { value: 'search-indexing', label: 'Search Indexing' },
    { value: 'data-sharing', label: 'Data Sharing' },
  ];

  ngOnInit() {}

  layoutCode = `<app-toggle-group layout="horizontal" ...></app-toggle-group>
<app-toggle-group layout="vertical" ...></app-toggle-group>
<app-toggle-group layout="grid" [grid-columns]="3" ...></app-toggle-group>`;

  variantCode = `<app-toggle variant="default" ...></app-toggle>
<app-toggle variant="rounded" ...></app-toggle>
<app-toggle variant="outlined" ...></app-toggle>
<app-toggle variant="glass" ...></app-toggle>`;

  sizeCode = `<app-toggle size="small" ...></app-toggle>
<app-toggle size="medium" ...></app-toggle>
<app-toggle size="large" ...></app-toggle>`;

  colorCode = `<app-toggle color="primary" ...></app-toggle>
<app-toggle color="success" ...></app-toggle>
<app-toggle color="warning" ...></app-toggle>
<app-toggle color="danger" ...></app-toggle>`;

  iconCode = `<app-toggle icon="check" ...></app-toggle>
<app-toggle icon="moon" ...></app-toggle>
<app-toggle-group icon-only ...></app-toggle-group>`;

  stateCode = `<app-toggle disabled ...></app-toggle>
<app-toggle readonly ...></app-toggle>
<app-toggle checked ...></app-toggle>`;

  advancedCode = `<app-toggle elevation="3" ...></app-toggle>
<app-toggle thumb-shape="square" ...></app-toggle>
<app-toggle label-position="left" ...></app-toggle>
<app-toggle-group selection-mode="multiple" ...></app-toggle-group>`;
}


