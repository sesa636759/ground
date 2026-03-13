import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
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
    { id: 'themes', title: 'Themes & Shapes', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'logic', title: 'Behavioral Logic', icon: 'zap', iconLibrary: 'lucide' },
  ];

  basicCode = signal(`<ui-pagination [total-items]="100" [items-per-page]="10"></ui-pagination>`);
  
  detailedCode = signal(`<ui-pagination
  type="detailed"
  [total-items]="1000"
  show-page-size
  show-total
  show-jump-to
></ui-pagination>`);

  infiniteCode = signal(`<ui-pagination infinite loading [total-items]="500"></ui-pagination>`);
  
  dropdownCode = signal(`<ui-pagination type="dropdown" [total-items]="500" show-total></ui-pagination>`);

  labelsCode = signal(`<ui-pagination
  first-text="Start"
  last-text="End"
  prev-text="Back"
  next-text="Forward"
  [total-items]="100"
></ui-pagination>`);

  advancedCode = signal(`<ui-pagination
  url-sync
  persist-page
  smart-compact
  [total-items]="1000"
></ui-pagination>`);
}
