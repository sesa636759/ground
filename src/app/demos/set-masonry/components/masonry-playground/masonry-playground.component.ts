import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { CodeBlockComponent } from '../../../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-masonry-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    CodeBlockComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './masonry-playground.component.html',
  styleUrl: './masonry-playground.component.scss',
})
export class MasonryPlaygroundComponent implements OnInit {
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

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.playgroundItems = JSON.stringify(this.generateItems(24));
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

    let code = `<app-masonry\n`;
    code += `  layout-type="${this.pgConfig.layoutType}"\n`;
    code += `  columns="${this.pgConfig.columns}"\n`;
    code += `  gap="${this.pgConfig.gap}"\n`;

    if (this.pgConfig.sortBy) {
      code += `  sort-by="${this.pgConfig.sortBy}"\n`;
      code += `  sort-order="${this.pgConfig.sortOrder}"\n`;
    }
    if (this.pgConfig.filterBy) code += `  filter-by="${this.pgConfig.filterBy}"\n`;

    if (this.pgConfig.enableAnimation) code += `  enable-animation="true"\n`;
    if (this.pgConfig.showFilters) code += `  show-filters="true"\n`;
    if (this.pgConfig.selectable) code += `  selectable="true"\n`;
    if (this.pgConfig.multiSelect) code += `  multi-select="true"\n`;
    if (this.pgConfig.showBatchActions) code += `  show-batch-actions="true"\n`;
    if (this.pgConfig.lazyLoad) code += `  lazy-load="true"\n`;
    if (this.pgConfig.infiniteScroll) code += `  infinite-scroll="true"\n`;
    if (this.pgConfig.lightbox) code += `  lightbox="true"\n`;
    if (this.pgConfig.loadingState) code += `  loading-state="true"\n`;

    if (this.pgConfig.itemMinWidth !== 200)
      code += `  item-min-width="${this.pgConfig.itemMinWidth}"\n`;
    if (this.pgConfig.itemMaxWidth !== 400)
      code += `  item-max-width="${this.pgConfig.itemMaxWidth}"\n`;

    code += `  [items]="items"\n`;
    code += `></app-masonry>`;

    this.generatedCode.set(code);
  }

  onItemClick(event: any) {
    const { item, index } = event.detail;
    this.logEvent(`Clicked: "${item.title}" (index: ${index})`);
  }

  onSelectionChange(event: any) {
    const { selectedItems } = event.detail;
    this.logEvent(`Selection changed: ${selectedItems.length} item(s) selected`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  getBreakpointsJson() {
    return JSON.stringify(this.pgConfig.breakpoints);
  }

  updateBreakpoints(event: any) {
    try {
      this.pgConfig.breakpoints = JSON.parse(event.target.value);
      this.updateConfig();
    } catch (e) {
      // ignore invalid json
    }
  }
}
