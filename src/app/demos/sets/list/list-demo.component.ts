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
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'layouts', title: 'Layout Orientations', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'nesting', title: 'Nesting & Tree', icon: 'list-tree', iconLibrary: 'lucide' },
    { id: 'selection', title: 'Selection Modes', icon: 'check-square', iconLibrary: 'lucide' },
    { id: 'headers', title: 'Headers & Groups', icon: 'layers', iconLibrary: 'lucide' },
    {
      id: 'interactive',
      title: 'Interactive Features',
      icon: 'mouse-pointer-2',
      iconLibrary: 'lucide',
    },
    { id: 'performance', title: 'Performance & Data', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'states', title: 'Loading & Empty', icon: 'ghost', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizes & Spacing', icon: 'move-vertical', iconLibrary: 'lucide' },
  ];

  basicCode = `<ui-list variant="filled" color="primary">
  <ui-list-item label="Item 1" icon="lucide-star"></ui-list-item>
  <ui-list-item label="Item 2" icon="lucide-heart"></ui-list-item>
</ui-list>`;

  layoutCode = `<ui-list horizontal>...</ui-list>\n<ui-list numbered>...</ui-list>`;

  nestingCode = `<ui-list-item label="Parent" collapsible expanded>
  <div slot="children">
    <ui-list-item label="Child" level="1"></ui-list-item>
  </div>
</ui-list-item>`;

  selectionCode = `<ui-list selectable multi-select checkbox-selection>...</ui-list>`;

  performanceCode = `<ui-list virtual-scroll [attr.items]="largeData"></ui-list>`;
}
