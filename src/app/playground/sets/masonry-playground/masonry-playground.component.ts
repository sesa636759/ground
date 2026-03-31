import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-masonry-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './masonry-playground.component.html',
  styleUrl: './masonry-playground.component.scss',
})
export class DmMasonryPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout & Columns', icon: 'grid', iconLibrary: 'lucide' },
    { id: 'data', title: 'Filtering & Sorting', icon: 'search', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior & Interaction', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced Optimization', icon: 'maximize', iconLibrary: 'lucide' },
  ];

  layoutTypeOptions = [
    { label: 'Masonry', value: 'masonry' },
    { label: 'Grid', value: 'grid' },
    { label: 'Flex Columns', value: 'columns' },
  ];

  sortOrderOptions = [
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
  ];

  sortByOptions = [
    { label: 'None', value: '' },
    { label: 'Title', value: 'title' },
    { label: 'Date', value: 'date' },
    { label: 'Category', value: 'category' },
  ];

  filterOptions = [
    { key: 'nature', label: 'Nature' },
    { key: 'architecture', label: 'Architecture' },
    { key: 'food', label: 'Food' },
    { key: 'tech', label: 'Technology' },
  ];

  playgroundItems: any[] = [];
  itemsJson = '';

  constructor() {
    super();
    this.playgroundItems = this.generateItems(32);
    this.itemsJson = JSON.stringify(this.playgroundItems, null, 2);
  }

  ngOnInit() {
    this.updateConfig();
  }

  generateItems(count: number) {
    const cats = ['nature', 'architecture', 'food', 'tech'];
    const tags = ['New', 'Popular', 'Trending', 'Staff Pick'];
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      title: `Project ${String.fromCharCode(65 + (i % 26))}${i + 1}`,
      image: `https://picsum.photos/seed/${i + 1}/600/${400 + (i % 5) * 100}`,
      description: 'Luminous elements captured in high fidelity.',
      category: cats[i % cats.length],
      tags: [cats[i % cats.length], tags[i % tags.length]],
      date: new Date(Date.now() - i * 86400000).toISOString(),
    }));
  }

  getDefaultConfig() {
    return {
      items: '',
      columns: 3,
      gap: 20,
      layoutType: 'masonry',
      itemMinWidth: 280,
      itemMaxWidth: 450,
      filterBy: '',
      sortBy: '',
      sortOrder: 'asc',
      animationDuration: 300,
      enableAnimation: true,
      loadingState: false,
      emptyMessage: 'No matching items found',
      showFilters: false,
      filterOptions: JSON.stringify([
        { key: 'nature', label: 'Nature' },
        { key: 'architecture', label: 'Architecture' },
        { key: 'food', label: 'Food' },
        { key: 'tech', label: 'Technology' },
      ]),
      lazyLoad: true,
      lazyLoadMargin: '200px',
      infiniteScroll: false,
      infiniteScrollDistance: 200,
      selectable: false,
      multiSelect: false,
      showBatchActions: false,
      lightbox: true,
    };
  }

  updateConfig() {
    let code = `<ui-masonry\n`;
    code += `  [items]="items"\n`;
    if (this.pgConfig.layoutType !== 'masonry')
      code += `  layout-type="${this.pgConfig.layoutType}"\n`;
    if (this.pgConfig.columns !== 3) code += `  [columns]="${this.pgConfig.columns}"\n`;
    if (this.pgConfig.gap !== 16) code += `  [gap]="${this.pgConfig.gap}"\n`;
    if (this.pgConfig.itemMinWidth !== 200)
      code += `  [item-min-width]="${this.pgConfig.itemMinWidth}"\n`;
    if (this.pgConfig.showFilters) code += `  show-filters\n`;
    if (this.pgConfig.selectable) code += `  selectable\n`;
    if (this.pgConfig.multiSelect) code += `  multi-select\n`;
    if (this.pgConfig.lightbox) code += `  lightbox\n`;
    if (this.pgConfig.infiniteScroll) code += `  infinite-scroll\n`;
    if (this.pgConfig.loadingState) code += `  loading-state\n`;

    code += `></ui-masonry>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onItemClick(ev: any) {
    this.logEvent(`Masonry Item Clicked: ${ev.detail.item.title}`);
  }

  onSelectionChange(ev: any) {
    this.logEvent(`Selection Changed: ${ev.detail.selectedItems.length} items`);
  }
}
