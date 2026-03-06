import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';
import { ChipPlaygroundComponent } from './components/chip-playground/chip-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-chip-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    ChipPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-chip-demo.component.html',
  styleUrl: './app-chip-demo.component.scss',
})
export class AppChipDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'variants', title: 'Variants', icon: '🎨', color: '#8b5cf6' },
    { id: 'shapes-sizes', title: 'Shapes & Sizes', icon: '📏', color: '#3b82f6' },
    { id: 'avatars-icons', title: 'Avatars & Icons', icon: '👤', color: '#10b981' },
    { id: 'actions', title: 'Actions', icon: '⚡', color: '#f59e0b' },
  ];

  playgroundCode = `<ui-chip label="Web Development" color="primary" removable></ui-chip>`;

  variantsCode = `<ui-chip label="Filled" variant="filled"></ui-chip>
<ui-chip label="Outlined" variant="outlined"></ui-chip>
<ui-chip label="Soft" variant="soft" color="success"></ui-chip>
<ui-chip label="Gradient" variant="gradient"></ui-chip>
<ui-chip label="Text Only" variant="text"></ui-chip>`;

  shapesSizesCode = `<ui-chip label="Pill" shape="pill"></ui-chip>
<ui-chip label="Rounded" shape="rounded"></ui-chip>
<ui-chip label="Square" shape="square"></ui-chip>
<ui-chip label="Circle" shape="circle" icon="🚀"></ui-chip>`;

  sizeCode = `<ui-chip label="Small" size="sm"></ui-chip>
<ui-chip label="Medium" size="md"></ui-chip>
<ui-chip label="Large" size="lg"></ui-chip>`;

  avatarsIconsCode = `<ui-chip label="React" icon="⚛️"></ui-chip>
<ui-chip label="John Doe" user-avatar="https://i.pravatar.cc/150?u=john"></ui-chip>
<ui-chip label="Status" badge="99" color="danger"></ui-chip>
<ui-chip label="In Progress" counter="5" color="warning"></ui-chip>`;

  actionsCode = `<ui-chip label="Clickable" clickable color="info"></ui-chip>
<ui-chip label="Removable" removable variant="soft"></ui-chip>
<ui-chip label="Selected" selected color="primary"></ui-chip>
<ui-chip label="Loading" loading></ui-chip>
<ui-chip label="Disabled" disabled></ui-chip>`;
}
