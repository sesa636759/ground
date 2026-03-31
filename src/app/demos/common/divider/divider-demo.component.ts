import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmDividerPlaygroundComponent } from '../../../playground/common/divider-playground/divider-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-divider-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    ExampleSectionComponent,
    
    DmDividerPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './divider-demo.component.html',
  styleUrl: './divider-demo.component.scss',
})
export class DmDividerDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'variants', title: 'Line Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'content', title: 'Text & Icons', icon: 'type', iconLibrary: 'lucide' },
    {
      id: 'vertical',
      title: 'Vertical Dividers',
      icon: 'separator-vertical',
      iconLibrary: 'lucide',
    },
    { id: 'patterns', title: 'Visual Patterns', icon: 'grid-3x3', iconLibrary: 'lucide' },
    { id: 'shapes', title: 'Shape Dividers', icon: 'shapes', iconLibrary: 'lucide' },
    { id: 'effects', title: 'Premium Effects', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  variantsCode = `<ui-divider variant="solid"></ui-divider>
<ui-divider variant="dashed" size="lg"></ui-divider>
<ui-divider variant="double-solid" size="lg"></ui-divider>
<ui-divider variant="gradient" color="linear-gradient(to right, #3b82f6, #ec4899)"></ui-divider>`;

  contentCode = `<ui-divider text="Label"></ui-divider>
<ui-divider text="Left Align" text-align="left"></ui-divider>
<ui-divider icon="â­"></ui-divider>
<ui-divider text="New Section" badge="Updated" color="primary"></ui-divider>`;

  verticalCode = `<div style="display: flex; height: 100px; align-items: center;">
  <span>Section A</span>
  <ui-divider orientation="vertical" gap="0 24px"></ui-divider>
  <span>Section B</span>
  <ui-divider orientation="vertical" variant="dashed" vertical-align="top" gap="0 24px"></ui-divider>
  <span>Section C</span>
</div>`;

  patternsCode = `<ui-divider pattern="dots" color="#94a3b8"></ui-divider>
<ui-divider pattern="stripes" size="lg"></ui-divider>
<ui-divider pattern="zigzag" size="lg"></ui-divider>`;

  shapesCode = `<ui-divider shape="wave" shape-color="#f8fafc"></ui-divider>
<ui-divider shape="tilt" shape-color="#f1f5f9"></ui-divider>
<ui-divider shape="triangle" shape-color="#e2e8f0"></ui-divider>`;

  effectsCode = `<ui-divider loading></ui-divider>
<ui-divider text="Hover Me" clickable glow color="primary"></ui-divider>
<ui-divider shadow variant="double-solid" size="lg"></ui-divider>`;
}
