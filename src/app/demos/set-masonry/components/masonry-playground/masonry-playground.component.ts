import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-masonry-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './masonry-playground.component.html',
  styleUrl: './masonry-playground.component.scss',
})
export class MasonryPlaygroundComponent implements OnInit, AfterViewInit {
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
  generatedCodeSignal = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.playgroundItems = JSON.stringify(this.generateItems(24));
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
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

  getCleanFormatedDom(): string {
    if (!this.masonryLayout) return '';
    return generatePlaygroundCode(this.masonryLayout.nativeElement as Element, 'app-masonry');
  }

  updateConfig() {
    this.pgConfig.filterBy = this.filterCategory ? `category:${this.filterCategory}` : '';

    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
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

  resetConfig() {
    this.pgConfig = {
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
    this.filterCategory = '';
    this.eventLog.set([]);
    this.updateConfig();
  }
}

