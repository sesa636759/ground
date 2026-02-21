import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnchorPlaygroundComponent } from './components/anchor-playground/anchor-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-app-anchor-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnchorPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-anchor-demo.component.html',
  styleUrl: './app-anchor-demo.component.scss',
})
export class AppAnchorDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'types', title: 'Marker Styles', icon: '📝', color: '#3b82f6' },
    { id: 'orientation', title: 'Orientation', icon: '↔️', color: '#10b981' },
    { id: 'auto-gen', title: 'Headings Auto-Detection', icon: '⚙️', color: '#f59e0b' },
  ];

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

  links = JSON.stringify([
    { id: 'intro', label: 'Introduction', target: 'intro-section' },
    { id: 'usage', label: 'Quick Usage', target: 'usage-section' },
    { id: 'props', label: 'Properties', target: 'props-section' },
  ]);

  playgroundCode = `<ui-anchor
  orientation="vertical"
  type="line"
  [links]="linksJson"
  scroll-container="#my-scroll-area"
></ui-anchor>`;

  typesCode = `<ui-anchor type="line" [links]="links"></ui-anchor>
<ui-anchor type="dot" [links]="links"></ui-anchor>`;

  orientationCode = `<ui-anchor orientation="horizontal" [links]="links"></ui-anchor>
<ui-anchor orientation="vertical" [links]="links"></ui-anchor>`;

  autoGenCode = `<ui-anchor auto-gen-container="#auto-gen-box" show-progress></ui-anchor>`;

  ngOnInit() {}
}
