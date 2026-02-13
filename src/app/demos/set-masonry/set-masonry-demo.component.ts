import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasonryPlaygroundComponent } from './components/masonry-playground/masonry-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-masonry-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MasonryPlaygroundComponent,
    CodeBlockComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-masonry-demo.component.html',
  styleUrl: './set-masonry-demo.component.scss',
})
export class SetMasonryDemoComponent {
  variants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'masonry', title: 'Masonry Layout', icon: '🧱' },
    { id: 'grid', title: 'Grid Layout', icon: '📦' },
    { id: 'columns', title: 'Columns Layout', icon: '📰' },
    { id: 'responsive', title: 'Responsive Design', icon: '📱' },
    { id: 'filtering', title: 'Filtering & Sorting', icon: '🔍' },
    { id: 'selection', title: 'Multi-Select', icon: '✅' },
    { id: 'lazy-load', title: 'Lazy Loading', icon: '⚡' },
    { id: 'lightbox', title: 'Lightbox Gallery', icon: '📸' },
    { id: 'skeleton', title: 'Skeleton Loading', icon: '💀' },
  ];

  masonryCode = `<app-masonry
  layout-type="masonry"
  columns="4"
  gap="16"
  [items]='[
    { id: 1, image: "https://picsum.photos/400/200?random=0", title: "Item 1", description: "Sample description" },
    { id: 2, image: "https://picsum.photos/400/250?random=1", title: "Item 2", description: "Sample description" },
    { id: 3, image: "https://picsum.photos/400/300?random=2", title: "Item 3", description: "Sample description" }
  ]'
></app-masonry>`;

  gridCode = `<app-masonry
  layout-type="grid"
  columns="4"
  gap="16"
  [items]="productItems"
></app-masonry>`;

  columnsCode = `<app-masonry
  layout-type="columns"
  columns="3"
  gap="20"
  [items]="newsItems"
></app-masonry>`;

  responsiveCode = `<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  responsive="true"
  [breakpoints]="{ 640: 2, 768: 3, 1024: 4, 1280: 5 }"
  [items]="items"
></app-masonry>`;

  filteringCode = `<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  show-filters="true"
  [filter-options]="[{ key: 'nature', label: 'Nature' }, { key: 'tech', label: 'Technology' }]"
  [items]="items"
></app-masonry>`;

  selectionCode = `<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  selectable="true"
  multi-select="true"
  show-batch-actions="true"
  [items]="items"
  (selection-change)="onSelectionChange($event)"
></app-masonry>`;

  lazyLoadCode = `<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  lazy-load="true"
  infinite-scroll="true"
  [items]="items"
></app-masonry>`;

  lightboxCode = `<app-masonry
  layout-type="masonry"
  columns="4"
  gap="12"
  lightbox="true"
  lightbox-animation="zoom"
  [items]="galleryItems"
></app-masonry>`;

  skeletonCode = `<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  loading-state="true"
  [skeleton-count]="12"
></app-masonry>`;

  advancedCode = `<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  responsive="true"
  selectable="true"
  multi-select="true"
  show-filters="true"
  lazy-load="true"
  lightbox="true"
  enable-animation="true"
  [items]="items"
  [breakpoints]="{ 640: 2, 768: 3, 1024: 4, 1280: 5 }"
  [filter-options]="filterOptions"
  (item-click)="onItemClick($event)"
  (selection-change)="onSelectionChange($event)"
></app-masonry>`;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
