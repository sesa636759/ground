import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { DockOverlayPlaygroundComponent } from './components/dock-overlay-playground/dock-overlay-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-dock-overlay-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DockOverlayPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-dock-overlay-demo.component.html',
  styleUrl: './set-dock-overlay-demo.component.scss',
})
export class SetDockOverlayDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'positions', title: 'Dock Positions', icon: '📍' },
    { id: 'sizes', title: 'Sizes', icon: '📏' },
    { id: 'variants', title: 'Variants', icon: '🎭' },
    { id: 'features', title: 'Features', icon: '✨' },
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
