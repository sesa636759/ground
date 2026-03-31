import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmMasonryPlaygroundComponent } from '../../../playground/sets/masonry-playground/masonry-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-masonry-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    ExampleSectionComponent,
    
    DmMasonryPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './masonry-demo.component.html',
  styleUrl: './masonry-demo.component.scss',
})
export class DmMasonryDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'masonry', title: 'Masonry Layout', icon: 'grid', iconLibrary: 'lucide' },
    { id: 'grid', title: 'Fixed Grid', icon: 'layout-grid', iconLibrary: 'lucide' },
    { id: 'columns', title: 'Flex Columns', icon: 'columns-3', iconLibrary: 'lucide' },
    { id: 'responsive', title: 'Responsive Design', icon: 'tablet', iconLibrary: 'lucide' },
    { id: 'filtering', title: 'Filtering & Sorting', icon: 'search', iconLibrary: 'lucide' },
    { id: 'selection', title: 'Selection & Batch', icon: 'check-square', iconLibrary: 'lucide' },
    { id: 'lightbox', title: 'Gallery Lightbox', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'skeleton', title: 'Loading States', icon: 'ghost', iconLibrary: 'lucide' },
  ];

  sampleItems = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Project ${String.fromCharCode(65 + i)}`,
    image: `https://picsum.photos/seed/${i + 50}/400/${300 + (i % 4) * 100}`,
    category: ['Nature', 'Urban', 'Tech'][i % 3],
    date: new Date(Date.now() - i * 86400000).toISOString(),
  }));

  filterOptions = JSON.stringify([
    { key: 'Nature', label: 'Nature' },
    { key: 'Urban', label: 'Urban' },
    { key: 'Tech', label: 'Technology' },
  ]);

  masonryCode = `<ui-masonry layout-type="masonry" [columns]="3" [items]="items"></ui-masonry>`;
  gridCode = `<ui-masonry layout-type="grid" [columns]="4" [items]="items"></ui-masonry>`;
  columnsCode = `<ui-masonry layout-type="columns" [columns]="3" [items]="items"></ui-masonry>`;
  responsiveCode = `<ui-masonry [breakpoints]='{"640":2, "768":3, "1024":4}' [items]="items"></ui-masonry>`;
  filteringCode = `<ui-masonry show-filters [filter-options]="options" [items]="items"></ui-masonry>`;
  selectionCode = `<ui-masonry selectable multi-select show-batch-actions [items]="items"></ui-masonry>`;
  lightboxCode = `<ui-masonry lightbox [items]="items"></ui-masonry>`;
  skeletonCode = `<ui-masonry loading-state [columns]="3"></ui-masonry>`;
}
