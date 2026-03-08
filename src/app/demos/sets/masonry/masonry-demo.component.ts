import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmMasonryPlaygroundComponent } from '../../../playground/sets/masonry-playground/masonry-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-masonry-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmMasonryPlaygroundComponent,
    DemoTabsComponent,

    ExampleSectionComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './masonry-demo.component.html',
  styleUrl: './masonry-demo.component.scss',
})
export class DmMasonryDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '??', color: '#8b5cf6' },
    { id: 'masonry', title: 'Masonry Layout', icon: '??', color: '#8b5cf6' },
    { id: 'grid', title: 'Grid Layout', icon: '??', color: '#3b82f6' },
    { id: 'columns', title: 'Columns Layout', icon: '??', color: '#10b981' },
    { id: 'responsive', title: 'Responsive Design', icon: '??', color: '#f59e0b' },
    { id: 'filtering', title: 'Filtering & Sorting', icon: '??', color: '#ef4444' },
    { id: 'selection', title: 'Multi-Select', icon: '?', color: '#ec4899' },
    { id: 'lightbox', title: 'Lightbox Gallery', icon: '??', color: '#06b6d4' },
    { id: 'skeleton', title: 'Skeleton Loading', icon: '??', color: '#64748b' },
  ];

  // Sample items for different layouts
  sampleItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/400/${200 + (i % 5) * 50}?random=${i}`,
    title: `Item ${i + 1}`,
    description: 'Sample description for gallery item',
    category: ['nature', 'tech', 'design', 'food', 'architecture'][i % 5],
    tags: [`tag${(i % 3) + 1}`],
  }));

  // Code examples
  masonryCode = signal(`<ui-masonry
  layout-type="masonry"
  columns="4"
  gap="16"
  [items]="items"
></ui-masonry>`);

  gridCode = signal(`<ui-masonry
  layout-type="grid"
  columns="4"
  gap="16"
  [items]="productItems"
></ui-masonry>`);

  columnsCode = signal(`<ui-masonry
  layout-type="columns"
  columns="3"
  gap="20"
  [items]="newsItems"
></ui-masonry>`);

  responsiveCode = signal(`<ui-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  responsive="true"
  [breakpoints]="{ 640: 2, 768: 3, 1024: 4, 1280: 5 }"
  [items]="items"
></ui-masonry>`);

  filteringCode = signal(`<ui-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  show-filters="true"
  [filterOptions]="filterOptions"
  [items]="items"
  (filterChange)="onFilterChange($event)"
></ui-masonry>`);

  selectionCode = signal(`<ui-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  selectable="true"
  multi-select="true"
  show-batch-actions="true"
  [items]="items"
  (selectionChange)="onSelectionChange($event)"
></ui-masonry>`);

  lightboxCode = signal(`<ui-masonry
  layout-type="masonry"
  columns="4"
  gap="12"
  lightbox="true"
  lightbox-animation="zoom"
  [items]="galleryItems"
  (itemClick)="onItemClick($event)"
></ui-masonry>`);

  skeletonCode = signal(`<ui-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  [loading]="isLoading"
  [skeletonCount]="12"
></ui-masonry>`);

  playgroundCode = signal(`<ui-masonry
  layout-type="masonry"
  [columns]="columns"
  [gap]="gap"
  responsive="true"
  selectable="true"
  show-filters="true"
  lazy-load="true"
  [items]="items"
  [breakpoints]="breakpoints"
  (itemClick)="onItemClick($event)"
></ui-masonry>`);
}
