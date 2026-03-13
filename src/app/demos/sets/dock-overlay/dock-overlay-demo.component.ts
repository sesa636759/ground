import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmDockOverlayPlaygroundComponent } from '../../../playground/sets/dock-overlay-playground/dock-overlay-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'dm-dock-overlay-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmDockOverlayPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dock-overlay-demo.component.html',
  styleUrl: './dock-overlay-demo.component.scss',
})
export class DmDockOverlayDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'positions', title: 'Dock Positions', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizes', icon: 'scaling', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'features', title: 'Features', icon: 'zap', iconLibrary: 'lucide' },
  ];

  playgroundCode = `<app-dock-overlay
  [position]="bottom"
  [height]="300"
></app-dock-overlay>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
