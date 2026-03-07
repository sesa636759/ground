import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmSpeedometerPlaygroundComponent } from '../../../playground/common/speedometer-playground/speedometer-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-speedometer-demo',

  imports: [
    ...PLAYGROUND_IMPORTS,
    DmSpeedometerPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speedometer-demo.component.html',
  styleUrl: './speedometer-demo.component.scss',
})
export class DmSpeedometerDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'modes', name: 'Color Modes', icon: '🌈', color: '#3b82f6' },
    { id: 'sizes', name: 'Scaling', icon: '📐', color: '#10b981' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-speedometer [value]="65" label="MPH" color-mode="gradient"></ui-speedometer>`;

  modesCode = `<!-- Solid Arc -->
<ui-speedometer color-mode="solid" [value]="40"></ui-speedometer>

<!-- Segmented Arc -->
<ui-speedometer color-mode="segments" [value]="80"></ui-speedometer>`;

  sizesCode = `<!-- Small Gauge -->
<ui-speedometer [size]="150" [arc-width]="10"></ui-speedometer>

<!-- Large Hero Gauge -->
<ui-speedometer [size]="400" [arc-width]="40"></ui-speedometer>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
