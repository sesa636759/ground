import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmPanelPlaygroundComponent } from '../../../playground/common/panel-playground/panel-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'dm-panel-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmPanelPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './panel-demo.component.html',
  styleUrl: './panel-demo.component.scss',
})
export class DmPanelDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'visual-styles', title: 'Visual Styles', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'themes', title: 'Themes', icon: 'swatch-book', iconLibrary: 'lucide' },
    {
      id: 'interactivity',
      title: 'Interactive',
      icon: 'mouse-pointer-click',
      iconLibrary: 'lucide',
    },
    { id: 'glassmorphism', title: 'Glassmorphism', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  playgroundCode = `<dui-panel variant="elevated" panel-title="Elevated Panel">
  <div slot="content">Default card-like panel with shadow.</div>
</dui-panel>`;

  stylesCode = `<!-- Elevated (default) -->
<dui-panel variant="elevated" panel-title="Elevated Panel">
  <div slot="content">Default card-like panel with shadow.</div>
</dui-panel>

<!-- Outlined -->
<dui-panel variant="outlined" panel-title="Outlined Panel">
  <div slot="content">Clean border without shadow.</div>
</dui-panel>

<!-- Filled -->
<dui-panel variant="filled" panel-title="Filled Panel">
  <div slot="content">Subtle background fill.</div>
</dui-panel>

<!-- Flat -->
<dui-panel variant="flat" panel-title="Flat Panel">
  <div slot="content">No border or shadow.</div>
</dui-panel>`;

  themesCode = `<dui-panel theme="primary" panel-title="Primary Theme"><div slot="content">Blue accent.</div></dui-panel>
<dui-panel theme="success" panel-title="Success Theme"><div slot="content">Green accent.</div></dui-panel>
<dui-panel theme="warning" panel-title="Warning Theme"><div slot="content">Orange accent.</div></dui-panel>
<dui-panel theme="danger"  panel-title="Danger Theme"><div slot="content">Red accent.</div></dui-panel>`;

  interactiveCode = `<dui-panel
  toggleable
  minimizable
  maximizable
  resizable
  is-draggable
  panel-title="Full Interactive Panel"
>
  <div slot="content">Drag, resize, minimize, maximize me!</div>
</dui-panel>`;

  glassCode = `<!-- Wrap in a gradient/image background -->
<div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 32px; border-radius: 12px">
  <dui-panel glass panel-title="Glass Panel">
    <div slot="content">Translucent blur effect.</div>
  </dui-panel>
</div>`;
}
