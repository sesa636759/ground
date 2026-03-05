import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SpeedDialPlaygroundComponent } from './components/speed-dial-playground/speed-dial-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-speed-dial-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SpeedDialPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-speed-dial-demo.component.html',
  styleUrl: './app-speed-dial-demo.component.scss',
})
export class AppSpeedDialDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'directions', title: 'Opening Directions', icon: '↔️', color: '#3b82f6' },
    { id: 'types', title: 'Motion Patterns', icon: '🌀', color: '#10b981' },
  ];

  items = [
    { label: 'Add', icon: '➕' },
    { label: 'Update', icon: '🔄' },
    { label: 'Delete', icon: '🗑️' },
    { label: 'Home', icon: '🏠' },
  ];

  playgroundCode = `<ui-speed-dial [model]="items" direction="up"></ui-speed-dial>`;

  directionsCode = `<!-- Vertical Up -->
<ui-speed-dial direction="up" [model]="items"></ui-speed-dial>

<!-- Horizontal Right -->
<ui-speed-dial direction="right" [model]="items"></ui-speed-dial>`;

  typesCode = `<!-- Circular Expansion -->
<ui-speed-dial type="circle" [radius]="100" [model]="items"></ui-speed-dial>

<!-- Half Circle -->
<ui-speed-dial type="half-circle" direction="up" [model]="items"></ui-speed-dial>`;
}
