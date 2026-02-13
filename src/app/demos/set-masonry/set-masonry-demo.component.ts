import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasonryPlaygroundComponent } from './components/masonry-playground/masonry-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-masonry-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MasonryPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-masonry-demo.component.html',
  styleUrl: './set-masonry-demo.component.scss',
})
export class SetMasonryDemoComponent {
  exampleVariants = [
    { id: 'masonry', title: 'Masonry Layout', icon: '🧱' },
    { id: 'grid', title: 'Grid Layout', icon: '📦' },
    { id: 'columns', title: 'Columns Layout', icon: '📰' },
    { id: 'responsive', title: 'Responsive Design', icon: '📱' },
    { id: 'filtering', title: 'Filtering & Sorting', icon: '🔍' },
    { id: 'selection', title: 'Multi-Select', icon: '✅' },
    { id: 'lightbox', title: 'Lightbox Gallery', icon: '📸' },
    { id: 'skeleton', title: 'Skeleton Loading', icon: '💀' },
  ];

  // Sample items for different layouts
  sampleItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/400/${200 + ((i % 5) * 50)}?random=${i}`,
    title: `Item ${i + 1}`,
    description: 'Sample description for gallery item',
    category: ['nature', 'tech', 'design', 'food', 'architecture'][i % 5],
    tags: [`tag${(i % 3) + 1}`],
  }));

  // Code examples
  masonryCode = signal(`<app-masonry
  layout-type="masonry"
  columns="4"
  gap="16"
  [items]="items"
></app-masonry>`);

  gridCode = signal(`<app-masonry
  layout-type="grid"
  columns="4"
  gap="16"
  [items]="productItems"
></app-masonry>`);

  columnsCode = signal(`<app-masonry
  layout-type="columns"
  columns="3"
  gap="20"
  [items]="newsItems"
></app-masonry>`);

  responsiveCode = signal(`<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  responsive="true"
  [breakpoints]="{{ '{' }} 640: 2, 768: 3, 1024: 4, 1280: 5 {{ '}' }}"
  [items]="items"
></app-masonry>`);

  filteringCode = signal(`<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  show-filters="true"
  [filterOptions]="filterOptions"
  [items]="items"
  (filterChange)="onFilterChange($event)"
></app-masonry>`);

  selectionCode = signal(`<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  selectable="true"
  multi-select="true"
  show-batch-actions="true"
  [items]="items"
  (selectionChange)="onSelectionChange($event)"
></app-masonry>`);

  lightboxCode = signal(`<app-masonry
  layout-type="masonry"
  columns="4"
  gap="12"
  lightbox="true"
  lightbox-animation="zoom"
  [items]="galleryItems"
  (itemClick)="onItemClick($event)"
></app-masonry>`);

  skeletonCode = signal(`<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  [loading]="isLoading"
  [skeletonCount]="12"
></app-masonry>`);

  playgroundCode = signal(`<app-masonry
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
></app-masonry>`);

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
