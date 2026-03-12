import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmScrollTopPlaygroundComponent } from '../../../playground/sets/scroll-top-playground/scroll-top-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'dm-scroll-top-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmScrollTopPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scroll-top-demo.component.html',
  styleUrl: './scroll-top-demo.component.scss',
})
export class DmScrollTopDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'variants', title: 'Style Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'features', title: 'Premium Features', icon: 'zap', iconLibrary: 'lucide' },
  ];

  playgroundCode = `<app-scroll-top
  [threshold]="300"
  position="bottom-right"
></app-scroll-top>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
