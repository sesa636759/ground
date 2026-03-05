import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-masonry-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './masonry-playground.component.html',
  styleUrl: './masonry-playground.component.scss',
})
export class MasonryPlaygroundComponent extends BasePlaygroundComponent implements AfterViewInit {
  @ViewChild('masonryLayout') masonryLayout!: ElementRef;

  // Playground State
  pgConfig = {
    layoutType: 'masonry',
    columns: 3,
    gap: 16,
    sortBy: '',
    sortOrder: 'asc',
    filterBy: '',
    enableAnimation: true,
    showFilters: false,
    selectable: true,
    multiSelect: false,
    showBatchActions: false,
    lazyLoad: false,
    infiniteScroll: false,
    lightbox: false,
    loadingState: false,
    itemMinWidth: 200,
    itemMaxWidth: 400,
    breakpoints: { 640: 2, 768: 3, 1024: 4, 1280: 5 },
  };

  pgAccordionItems = JSON.stringify([
    { id: 'layout', title: 'Layout Configuration', icon: '⚙️' },
    { id: 'filter', title: 'Filtering & Sorting', icon: '🔍' },
    { id: 'features', title: 'Features', icon: '✨' },
  ]);

  accordionDefaultOpen = JSON.stringify(['layout']);

  layoutTypeOptions = [
    { label: 'Masonry', value: 'masonry' },
    { label: 'Grid', value: 'grid' },
    { label: 'Columns', value: 'columns' },
  ];

  sortByOptions = [
    { label: 'None', value: '' },
    { label: 'Title', value: 'title' },
    { label: 'Date', value: 'date' },
    { label: 'Category', value: 'category' },
  ];

  sortOrderOptions = [
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
  ];

  playgroundItems = '';
  filterCategory = '';

  filterOptions = [
    { key: 'nature', label: 'Nature' },
    { key: 'architecture', label: 'Architecture' },
    { key: 'food', label: 'Food' },
    { key: 'technology', label: 'Technology' },
  ];

  constructor() {
    super();
    this.playgroundItems = JSON.stringify(this.generateItems(24));
  }

  ngAfterViewInit() {
    this.updateConfig();
  }

  generateItems(count: number) {
    const categories = ['nature', 'architecture', 'food', 'technology'];
    const heights = [200, 250, 300, 350, 400, 450];

    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      image: `https://picsum.photos/400/${heights[i % heights.length]}?random=${i}`,
      title: `Item ${i + 1}`,
      description: `Sample description for item ${i + 1}.`,
      category: categories[i % categories.length],
      height: heights[i % heights.length],
      tags: [`tag${(i % 3) + 1}`, `${categories[i % categories.length]}`],
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    }));
  }

  updateConfig() {
    this.pgConfig.filterBy = this.filterCategory ? `category:${this.filterCategory}` : '';
    this.updateConfigFromDom(this.masonryLayout, 'app-masonry');
  }

  onItemClick(event: any) {
    const { item, index } = event.detail;
    this.logEvent(`Clicked: "${item.title}" (index: ${index})`);
  }

  onSelectionChange(event: any) {
    const { selectedItems } = event.detail;
    this.logEvent(`Selection changed: ${selectedItems.length} item(s) selected`);
  }

  getDefaultConfig() {
    return {
      layoutType: 'masonry',
      columns: 3,
      gap: 16,
      sortBy: '',
      sortOrder: 'asc',
      filterBy: '',
      enableAnimation: true,
      showFilters: false,
      selectable: true,
      multiSelect: false,
      showBatchActions: false,
      lazyLoad: false,
      infiniteScroll: false,
      lightbox: false,
      loadingState: false,
      itemMinWidth: 200,
      itemMaxWidth: 400,
      breakpoints: { 640: 2, 768: 3, 1024: 4, 1280: 5 },
    };
  }

  override resetConfig() {
    super.resetConfig();
    this.filterCategory = '';
    this.updateConfig();
  }
}
