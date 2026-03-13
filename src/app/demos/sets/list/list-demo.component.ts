import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmListPlaygroundComponent } from '../../../playground/sets/list-playground/list-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-list-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmListPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './list-demo.component.html',
  styleUrl: './list-demo.component.scss',
})
export class DmListDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic & Variants', icon: 'list', iconLibrary: 'lucide' },
    { id: 'layouts', title: 'Layout Modes', icon: 'layout-template', iconLibrary: 'lucide' },
    { id: 'nesting', title: 'Nesting & Hierarchy', icon: 'list-tree', iconLibrary: 'lucide' },
    { id: 'selection', title: 'Selection & Interactivity', icon: 'check-square', iconLibrary: 'lucide' },
    { id: 'grouping', title: 'Grouping & Headers', icon: 'layers', iconLibrary: 'lucide' },
    { id: 'context', title: 'Context Menus', icon: 'mouse-pointer-click', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visual Enhancements', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Data & States', icon: 'database', iconLibrary: 'lucide' },
  ];

  basicCode = signal(`<ui-list variant="filled" color="primary">
  <ui-list-item label="Item 1" icon="fas fa-star"></ui-list-item>
  <ui-list-item label="Item 2" icon="fas fa-heart"></ui-list-item>
</ui-list>`);

  layoutCode = signal(`<ui-list horizontal>
  <ui-list-item label="H-Item 1"></ui-list-item>
  <ui-list-item label="H-Item 2"></ui-list-item>
</ui-list>

<ui-list numbered>
  <ui-list-item label="First Step"></ui-list-item>
  <ui-list-item label="Second Step"></ui-list-item>
</ui-list>`);

  nestingCode = signal(`<ui-list variant="soft">
  <ui-list-item label="Parent" collapsible expanded>
    <div slot="children">
      <ui-list-item label="Child" level="1"></ui-list-item>
    </div>
  </ui-list-item>
</ui-list>`);

  selectionCode = signal(`<ui-list selectable multi-select checkbox-selection>
  <ui-list-item label="Multi-select Task"></ui-list-item>
</ui-list>`);
}
