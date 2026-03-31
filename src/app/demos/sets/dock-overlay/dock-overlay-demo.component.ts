import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmDockOverlayPlaygroundComponent } from '../../../playground/sets/dock-overlay-playground/dock-overlay-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-dock-overlay-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmDockOverlayPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dock-overlay-demo.component.html',
  styleUrl: './dock-overlay-demo.component.scss',
})
export class DmDockOverlayDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'positions', title: 'Dock Positions', icon: 'layout-bottom', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizes', icon: 'scaling', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Variants', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'features', title: 'Features', icon: 'zap', iconLibrary: 'lucide' },
  ];

  playgroundCode = `<app-dock-overlay
  [position]="bottom"
  [height]="300"
></app-dock-overlay>`;
}