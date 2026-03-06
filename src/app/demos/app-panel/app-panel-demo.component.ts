import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelPlaygroundComponent } from './components/panel-playground/panel-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'app-app-panel-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PanelPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-panel-demo.component.html',
  styleUrl: './app-panel-demo.component.scss',
})
export class AppPanelDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'visual-styles', title: 'Visual Styles', icon: '🎨' },
    { id: 'themes', title: 'Themes', icon: '🌈' },
    { id: 'interactivity', title: 'Interactive', icon: '🕹️' },
    { id: 'glassmorphism', title: 'Glassmorphism', icon: '🔮' },
  ];

  playgroundCode = `<ui-panel variant="elevated" panel-title="Elevated Panel">
  <div slot="content">Default card-like panel with shadow.</div>
</ui-panel>`;

  stylesCode = `<!-- Elevated (default) -->
<ui-panel variant="elevated" panel-title="Elevated Panel">
  <div slot="content">Default card-like panel with shadow.</div>
</ui-panel>

<!-- Outlined -->
<ui-panel variant="outlined" panel-title="Outlined Panel">
  <div slot="content">Clean border without shadow.</div>
</ui-panel>

<!-- Filled -->
<ui-panel variant="filled" panel-title="Filled Panel">
  <div slot="content">Subtle background fill.</div>
</ui-panel>

<!-- Flat -->
<ui-panel variant="flat" panel-title="Flat Panel">
  <div slot="content">No border or shadow.</div>
</ui-panel>`;

  themesCode = `<ui-panel theme="primary" panel-title="Primary Theme"><div slot="content">Blue accent.</div></ui-panel>
<ui-panel theme="success" panel-title="Success Theme"><div slot="content">Green accent.</div></ui-panel>
<ui-panel theme="warning" panel-title="Warning Theme"><div slot="content">Orange accent.</div></ui-panel>
<ui-panel theme="danger"  panel-title="Danger Theme"><div slot="content">Red accent.</div></ui-panel>`;

  interactiveCode = `<ui-panel
  toggleable
  minimizable
  maximizable
  resizable
  is-draggable
  panel-title="Full Interactive Panel"
>
  <div slot="content">Drag, resize, minimize, maximize me!</div>
</ui-panel>`;

  glassCode = `<!-- Wrap in a gradient/image background -->
<div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 32px; border-radius: 12px">
  <ui-panel glass panel-title="Glass Panel">
    <div slot="content">Translucent blur effect.</div>
  </ui-panel>
</div>`;
}
