import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmLayoutManagerPlaygroundComponent } from '../../../playground/common/layout-manager-playground/layout-manager-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-layout-manager-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    ExampleSectionComponent,
    DmLayoutManagerPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './layout-manager-demo.component.html',
  styleUrl: './layout-manager-demo.component.scss',
})
export class DmLayoutManagerDemoComponent extends BaseDemoComponent {
  exampleVariants = [{ id: 'modes', title: 'Layout Modes', icon: 'settings-2',
      iconLibrary: 'lucide', color: '#3b82f6' }];

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
