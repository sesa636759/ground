import {
  Component,
  signal,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { categoryNavItems } from '../../data/navigation.data';
import { AppMasonryComponent } from '../../shared/components/app-masonry/app-masonry.component';
import { COMPONENT_SVG_MAP } from '../../shared/utils/component-svg-map';
import { ComponentCardComponent } from '../../shared/components/component-card/component-card.component';

@Component({
  selector: 'pg-overview',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, AppMasonryComponent, ComponentCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent implements AfterViewInit, OnDestroy {
  categories = categoryNavItems;
  searchQuery = signal<string>('');
  viewMode = signal<'grid' | 'list'>('grid');
  viewOptions = [
    { value: 'grid', label: 'Grid View', icon: 'fas fa-th' },
    { value: 'list', label: 'List View', icon: 'fas fa-list' },
  ];
  activeCategory = signal<string>(this.categories[0]?.id || '');

  private scrollContainer: Element | null = null;
  private boundScrollHandler = this._onContainerScroll.bind(this);

  /** Masonry responsive breakpoints — passed to <app-masonry> */
  masonryBp: Record<number, number> = { 1600: 3, 1200: 2, 768: 1, 0: 1 };
  listBp: Record<number, number> = { 0: 1 };

  get totalComponents(): number {
    return this.categories.reduce((total, cat) => total + (cat.children?.length || 0), 0);
  }

  filteredCategories = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.categories;

    return this.categories
      .map((cat) => {
        const matchingChildren = cat.children?.filter(
          (child) =>
            child.label.toLowerCase().includes(query) || child.id.toLowerCase().includes(query),
        );
        return {
          ...cat,
          children: matchingChildren,
        };
      })
      .filter((cat) => cat.children && cat.children.length > 0);
  });

  overviewAnchorLinks = computed(() => {
    return JSON.stringify(
      this.filteredCategories().map((cat) => ({
        id: cat.id,
        target: 'cat-' + cat.id,
        label: `${cat.label} (${cat.children?.length || 0})`,
        icon: cat.icon,
      })),
    );
  });

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
  ) {}

  ngAfterViewInit() {
    this.scrollContainer = document.querySelector('.content-body');
    if (this.scrollContainer) {
      this.scrollContainer.addEventListener('scroll', this.boundScrollHandler, { passive: true });
    }
  }

  ngOnDestroy() {
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('scroll', this.boundScrollHandler);
    }
  }

  private _onContainerScroll() {
    const offset = (this.scrollContainer?.scrollTop ?? 0) + 120;
    let newActive = this.activeCategory();
    for (const category of this.filteredCategories()) {
      const el = document.getElementById('cat-' + category.id);
      if (el && el.offsetTop <= offset) {
        newActive = category.id;
      }
    }
    this.activeCategory.set(newActive);
  }

  scrollToCategory(id: string) {
    this.activeCategory.set(id);
    const el = document.getElementById('cat-' + id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getPreviewSvg(id: string): SafeHtml {
    const normalizedId = id.split('/').pop() || id;
    const svg = COMPONENT_SVG_MAP[normalizedId] ?? COMPONENT_SVG_MAP['default'];
    // Ensures SVG fits properly in preview box by removing predefined sizing limits
    const cleanedSvg = svg
      ?.replace(/width="[0-9]+"/, 'width="100%"')
      .replace(/height="[0-9]+"/, 'height="100%"');
    return this.sanitizer.bypassSecurityTrustHtml(cleanedSvg || '');
  }

  getImageUrl(id: string): string | undefined {
    const normalizedId = id.split('/').pop() || id;
    const downloadedCharts = [
      'bar-chart',
      'line-chart',
      'pie-chart',
      'donut-chart',
      'area-chart',
      'polar-area-chart',
      'radial-bar',
      'sparkline',
      'timeline-range',
      'candlestick-chart',
      'ohlc-chart',
      'rose-chart',
      'gantt-chart',
      'waffle-chart',
      'tree-diagram',
      'step-line-chart',
      'waterfall-chart',
      'funnel-chart',
      'lollipop-chart',
    ];
    if (downloadedCharts.includes(normalizedId)) {
      return `assets/charts/${normalizedId}.png`;
    }

    const downloadedComponents = [
      'accordion',
      'advanced-data-table',
      'anchor',
      'animate-on-scroll',
      'aside',
      'avatar-group',
      'avatar',
      'badge',
      'breadcrumb',
      'button-toggle',
      'button',
      'card',
      'carousel',
      'cascade-select',
      'chart',
      'checkbox',
      'chip',
      'code-editor',
      'context-menu',
      'dashboard',
      'dialog-box',
      'divider',
      'dock',
      'dropdown',
      'horizontal-nav',
      'knob',
      'layout-manager',
      'meter-group',
      'nav-bar',
      'pagination',
      'panel',
      'pattern-input',
      'picklist',
      'pill',
      'popover',
      'range-slider',
      'rating',
      'scroll-top',
      'skeleton',
      'smart-menu',
      'smart-stepper',
      'snackbar',
      'speed-dial',
      'speedometer',
      'split-button',
      'stack',
      'stepper',
      'switch',
      'tabs',
      'tag',
      'timeline',
      'timer',
      'top-bar',
      'transfer-list',
      'tree-list',
    ];

    if (downloadedComponents.includes(normalizedId)) {
      return `assets/components/${normalizedId}.jpg`;
    }

    return undefined;
  }

  getComponentDescription(id: string): string {
    // Generate placeholder contextual descriptions based on strings
    if (id.includes('button'))
      return 'Interactive elements that trigger actions when clicked. Supports multiple variants and sizes.';
    if (id.includes('input'))
      return 'Fields that allow users to enter text, numbers, or specific data formats.';
    if (id.includes('card'))
      return 'Flexible containment blocks used to group related content and actions together.';
    if (id.includes('nav'))
      return 'Routing components that guide users through different sections of the application.';
    if (id.includes('chart'))
      return 'Visual representations of data to make complex information easy to digest at a glance.';
    return `Interactive ${id.replace('-', ' ')} component following enterprise accessibility and styling guidelines.`;
  }

  navigateToComponent(componentId: string) {
    this.router.navigate(['/demos', ...componentId.split('/')]);
  }

  navigateToDocs(componentId: string) {
    // The component documentation page expects component ID (the last part of the path usually)
    const id = componentId.split('/').pop();
    this.router.navigate(['/component-documentation'], {
      queryParams: { component: id },
    });
  }

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  clearSearch() {
    this.searchQuery.set('');
  }
}
