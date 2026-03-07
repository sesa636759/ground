import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmScrollTopPlaygroundComponent } from '../../../playground/sets/set-scroll-top-playground/scroll-top-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'dm-set-scroll-top-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmScrollTopPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-scroll-top-demo.component.html',
  styleUrl: './set-scroll-top-demo.component.scss',
})
export class DmSetScrollTopDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'variants', title: 'Style Variants', icon: '🎭' },
    { id: 'features', title: 'Premium Features', icon: '💎' },
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
