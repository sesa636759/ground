import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmPaginationPlaygroundComponent } from '../../../playground/common/pagination-playground/pagination-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-pagination-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmPaginationPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pagination-demo.component.html',
  styleUrl: './pagination-demo.component.scss',
})
export class DmPaginationDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic & Variants', icon: 'file-text', iconLibrary: 'lucide' },
    { id: 'detailed', title: 'Detailed Controls', icon: 'list', iconLibrary: 'lucide' },
    { id: 'minimal', title: 'Minimalist Styles', icon: 'minus', iconLibrary: 'lucide' },
    { id: 'infinite', title: 'Streaming (Infinite)', icon: 'infinity', iconLibrary: 'lucide' },
    { id: 'modes', title: 'Selector Modes', icon: 'chevron-down', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visual Progress', icon: 'circle-dot', iconLibrary: 'lucide' },
    { id: 'shapes', title: 'Shapes & Borders', icon: 'square', iconLibrary: 'lucide' },
    { id: 'themes', title: 'Color Themes', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'logic', title: 'Behavioral Logic', icon: 'zap', iconLibrary: 'lucide' },
  ];

  basicCode = signal(`<ui-pagination [total-items]="100" [items-per-page]="10"></ui-pagination>`);
  detailedCode = signal(
    `<ui-pagination type="detailed" show-page-size show-total show-jump-to></ui-pagination>`,
  );
  infiniteCode = signal(`<ui-pagination infinite loading></ui-pagination>`);
  dropdownCode = signal(`<ui-pagination type="dropdown"></ui-pagination>`);
  logicCode = signal(`<ui-pagination url-sync persist-page smart-compact></ui-pagination>`);
}
