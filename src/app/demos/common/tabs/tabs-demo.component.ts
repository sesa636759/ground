import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmTabsPlaygroundComponent } from '../../../playground/common/tabs-playground/tabs-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-tabs-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTabsPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tabs-demo.component.html',
  styleUrl: './tabs-demo.component.scss',
})
export class DmTabsDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'styles', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'layouts', title: 'Orientations', icon: 'move-vertical', iconLibrary: 'lucide' },
    { id: 'badges', title: 'Badges & Counters', icon: 'tag', iconLibrary: 'lucide' },
    { id: 'closeable', title: 'Closeable Tabs', icon: 'x-circle', iconLibrary: 'lucide' },
    { id: 'icons', title: 'Icon Tabs', icon: 'star', iconLibrary: 'lucide' },
  ];

  stylesCode = `<!-- Default Style -->
<ui-tabs variant="default">
  <ui-tab label="Home"></ui-tab>
  <ui-tab label="About"></ui-tab>
  <ui-tab label="Contact"></ui-tab>
</ui-tabs>

<!-- Pills Style -->
<ui-tabs variant="pills">
  <ui-tab label="Analytics"></ui-tab>
  <ui-tab label="Reports"></ui-tab>
  <ui-tab label="Logs"></ui-tab>
</ui-tabs>

<!-- Underline Style -->
<ui-tabs variant="underline">
  <ui-tab label="Overview"></ui-tab>
  <ui-tab label="Advanced"></ui-tab>
  <ui-tab label="Dev Tools"></ui-tab>
</ui-tabs>

<!-- Enclosed Style -->
<ui-tabs variant="enclosed">
  <ui-tab label="Code"></ui-tab>
  <ui-tab label="Preview"></ui-tab>
</ui-tabs>`;

  layoutsCode = `<!-- Vertical Orientation -->
<ui-tabs orientation="vertical">
  <ui-tab label="Inbox"></ui-tab>
  <ui-tab label="Sent"></ui-tab>
  <ui-tab label="Spam"></ui-tab>
</ui-tabs>

<!-- Center Alignment -->
<ui-tabs align="center">
  <ui-tab label="Feed"></ui-tab>
  <ui-tab label="Groups"></ui-tab>
  <ui-tab label="Events"></ui-tab>
</ui-tabs>

<!-- Right Alignment -->
<ui-tabs align="right">
  <ui-tab label="Profile"></ui-tab>
  <ui-tab label="Settings"></ui-tab>
</ui-tabs>`;

  badgesCode = `<!-- Tabs with badge counters -->
<ui-tabs variant="pills">
  <ui-tab label="Inbox" badge="12" badge-variant="danger"></ui-tab>
  <ui-tab label="Drafts" badge="3" badge-variant="warning"></ui-tab>
  <ui-tab label="Sent" badge="0"></ui-tab>
</ui-tabs>

<!-- Info and primary badges -->
<ui-tabs variant="underline">
  <ui-tab label="Tasks" badge="5" badge-variant="primary"></ui-tab>
  <ui-tab label="Done" badge="42" badge-variant="success"></ui-tab>
</ui-tabs>`;

  closeableCode = `<!-- Closeable tabs -->
<ui-tabs closeable>
  <ui-tab label="Dashboard"></ui-tab>
  <ui-tab label="Analytics"></ui-tab>
  <ui-tab label="Reports"></ui-tab>
</ui-tabs>

<!-- Closeable with pills variant -->
<ui-tabs variant="pills" closeable>
  <ui-tab label="Editor"></ui-tab>
  <ui-tab label="Terminal"></ui-tab>
  <ui-tab label="Output"></ui-tab>
</ui-tabs>`;

  iconsCode = `<!-- Icon tabs with Lucide icon library -->
<ui-tabs icon-library="lucide" variant="pills">
  <ui-tab label="Home" icon="home"></ui-tab>
  <ui-tab label="Search" icon="search"></ui-tab>
  <ui-tab label="Settings" icon="settings"></ui-tab>
</ui-tabs>

<!-- Icon-only tabs -->
<ui-tabs icon-library="lucide" variant="underline">
  <ui-tab icon="user"></ui-tab>
  <ui-tab icon="bell"></ui-tab>
  <ui-tab icon="mail"></ui-tab>
</ui-tabs>`;
}