import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DividerPlaygroundComponent } from './components/divider-playground/divider-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-divider-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DividerPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-divider-demo.component.html',
  styleUrl: './app-divider-demo.component.scss',
})
export class AppDividerDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'variants', title: 'Line Variants', icon: '🎨', color: '#3b82f6' },
    { id: 'text-content', title: 'Text & Content', icon: '📝', color: '#10b981' },
    { id: 'vertical', title: 'Vertical Orientation', icon: '↕️', color: '#f59e0b' },
    { id: 'shapes', title: 'Decorative Shapes', icon: '📐', color: '#ef4444' },
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

  playgroundCode = `<ui-divider text="SECTION 1" variant="dashed" size="lg"></ui-divider>`;

  variantsCode = `<ui-divider variant="solid"></ui-divider>
<ui-divider variant="dashed"></ui-divider>
<ui-divider variant="dotted"></ui-divider>
<ui-divider variant="gradient" color="linear-gradient(to right, #8b5cf6, #ec4899)"></ui-divider>`;

  textContentCode = `<ui-divider text="Centered Text"></ui-divider>
<ui-divider text="Left Text" text-align="left"></ui-divider>
<ui-divider icon="⭐" variant="dashed" size="lg"></ui-divider>
<ui-divider badge="NEW" color="primary"></ui-divider>`;

  verticalCode = `<div style="display: flex; height: 100px; align-items: center; justify-content: center;">
  <span>Left Panel</span>
  <ui-divider orientation="vertical" gap="2rem"></ui-divider>
  <span>Middle Panel</span>
  <ui-divider orientation="vertical" variant="dashed" gap="2rem"></ui-divider>
  <span>Right Panel</span>
</div>`;

  shapesCode = `<ui-divider shape="wave" shape-color="#f3f4f6"></ui-divider>
<ui-divider shape="tilt" shape-color="#fef2f2" style="height: 50px"></ui-divider>`;

  ngOnInit() {}
}
