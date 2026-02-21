import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DockPlaygroundComponent } from './components/dock-playground/dock-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-app-dock-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DockPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-dock-demo.component.html',
  styleUrl: './app-dock-demo.component.scss',
})
export class AppDockDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [{ id: 'positions', title: 'Positions', icon: '📍', color: '#3b82f6' }];

  get exampleVariants() {
    return this.variants;
  }

  anchorLinks = JSON.stringify(
    this.variants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  dockItems = JSON.stringify([
    { label: 'Finder', icon: '🔍' },
    { label: 'Messages', icon: '💬' },
    { label: 'Mail', icon: '📧' },
    { label: 'Terminal', icon: '💻' },
  ]);

  playgroundCode = `<ui-dock [model]="items" position="bottom"></ui-dock>`;

  positionsCode = `<ui-dock position="top" [model]="items"></ui-dock>
<ui-dock position="left" [model]="items"></ui-dock>`;

  ngOnInit() {}
}
