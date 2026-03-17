import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmDividerPlaygroundComponent } from '../../../playground/common/divider-playground/divider-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-divider-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
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

  variantsCode = `<dui-divider variant="solid"></dui-divider>
<dui-divider variant="dashed" size="lg"></dui-divider>
<dui-divider variant="double-solid" size="lg"></dui-divider>
<dui-divider variant="gradient" color="linear-gradient(to right, #3b82f6, #ec4899)"></dui-divider>`;

  contentCode = `<dui-divider text="Label"></dui-divider>
<dui-divider text="Left Align" text-align="left"></dui-divider>
<dui-divider icon="⭐"></dui-divider>
<dui-divider text="New Section" badge="Updated" color="primary"></dui-divider>`;

  verticalCode = `<div style="display: flex; height: 100px; align-items: center;">
  <span>Section A</span>
  <dui-divider orientation="vertical" gap="0 24px"></dui-divider>
  <span>Section B</span>
  <dui-divider orientation="vertical" variant="dashed" vertical-align="top" gap="0 24px"></dui-divider>
  <span>Section C</span>
</div>`;

  patternsCode = `<dui-divider pattern="dots" color="#94a3b8"></dui-divider>
<dui-divider pattern="stripes" size="lg"></dui-divider>
<dui-divider pattern="zigzag" size="lg"></dui-divider>`;

  shapesCode = `<dui-divider shape="wave" shape-color="#f8fafc"></dui-divider>
<dui-divider shape="tilt" shape-color="#f1f5f9"></dui-divider>
<dui-divider shape="triangle" shape-color="#e2e8f0"></dui-divider>`;

  effectsCode = `<dui-divider loading></dui-divider>
<dui-divider text="Hover Me" clickable glow color="primary"></dui-divider>
<dui-divider shadow variant="double-solid" size="lg"></dui-divider>`;
}
