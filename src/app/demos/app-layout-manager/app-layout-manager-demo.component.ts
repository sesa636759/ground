import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutManagerPlaygroundComponent } from './components/layout-manager-playground/layout-manager-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-layout-manager-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LayoutManagerPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-layout-manager-demo.component.html',
  styleUrl: './app-layout-manager-demo.component.scss',
})
export class AppLayoutManagerDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'modes', title: 'Layout Modes', icon: '🗂️', color: '#3b82f6' },
  ];

  playgroundCode = `<ui-layout-manager mode="docking" resizable closable>
  <div slot="panel-1">Main Content</div>
  <div slot="panel-2">Sidebar</div>
</ui-layout-manager>`;

  modesCode = `<!-- Docking Mode -->
<ui-layout-manager mode="docking">
  <!-- Panels can be docked and rearranged -->
</ui-layout-manager>

<!-- Grid Mode -->
<ui-layout-manager mode="grid">
  <!-- Panels arranged in a grid -->
</ui-layout-manager>`;
}
