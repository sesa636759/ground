import { Component, signal, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { categoryNavItems } from '../../data/navigation.data';
import { AppMasonryComponent } from '../../shared/components/app-masonry/app-masonry.component';
import { COMPONENT_SVG_MAP } from '../../shared/utils/component-svg-map';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, FormsModule, AppMasonryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="overview-container">
      <!-- Hero Header -->
      <header class="overview-header">
        <div class="header-content">
          <div class="header-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" />
              <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" />
              <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" />
              <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" />
            </svg>
            <span>Component Library</span>
          </div>
          <h1>Explore Components</h1>
          <p>Browse all {{ totalComponents }} production-ready components organized by category</p>

          <div class="header-actions">
            <div class="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search components..."
                [value]="searchQuery"
                (input)="onSearchInput($event)"
              />
            </div>
            <div class="view-toggle">
              <button
                [class.active]="viewMode() === 'grid'"
                title="Grid view"
                (click)="viewMode.set('grid')"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" />
                  <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" />
                  <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" />
                  <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" />
                </svg>
              </button>
              <button
                [class.active]="viewMode() === 'list'"
                title="List view"
                (click)="viewMode.set('list')"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <line
                    x1="8"
                    y1="6"
                    x2="21"
                    y2="6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <line
                    x1="8"
                    y1="12"
                    x2="21"
                    y2="12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <line
                    x1="8"
                    y1="18"
                    x2="21"
                    y2="18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <line
                    x1="3"
                    y1="6"
                    x2="3.01"
                    y2="6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="3.01"
                    y2="12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="3.01"
                    y2="18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Layout with Sidebar -->
      <div class="overview-layout">
        <aside class="sidebar-nav">
          <div class="sidebar-inner">
            <h3 class="sidebar-title">Categories</h3>
            <nav class="category-menu">
              <button
                *ngFor="let category of filteredCategories()"
                class="menu-item"
                [class.active]="activeCategory === category.id"
                (click)="scrollToCategory(category.id)"
              >
                <span class="menu-icon">{{ category.icon }}</span>
                <span class="menu-label">{{ category.label }}</span>
                <span class="menu-count">{{ category.children?.length || 0 }}</span>
              </button>
            </nav>
          </div>
        </aside>

        <!-- Content Area -->
        <main class="overview-content">
          <div
            *ngFor="let category of filteredCategories()"
            class="category-section"
            [id]="'cat-' + category.id"
          >
            <div class="category-header">
              <div class="category-title">
                <h2>{{ category.label }}</h2>
                <div class="category-divider"></div>
              </div>
            </div>

            <ng-masonry-grid
              [columns]="viewMode() === 'list' ? 1 : 3"
              gap="24px"
              [rowGap]="24"
              [breakpoints]="viewMode() === 'list' ? listBp : masonryBp"
            >
              <div
                *ngFor="let component of category.children"
                class="component-card"
                [class.list-card]="viewMode() === 'list'"
                (click)="navigateToComponent(component.id)"
              >
                <div class="card-icon-row">
                  <div class="comp-letter">{{ component.label.charAt(0) }}</div>
                  <span *ngIf="component.badge" class="badge">{{ component.badge }}</span>
                </div>
                <div class="card-preview" [innerHTML]="getPreviewSvg(component.id)"></div>
                <h3 class="comp-name">{{ component.label }}</h3>
                <p class="card-description">{{ getComponentDescription(component.id) }}</p>
                <div class="card-footer">
                  <span class="view-demo">
                    Explore Component
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M13 6l6 6-6 6"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </ng-masonry-grid>
          </div>

          <!-- No Results -->
          <div *ngIf="filteredCategories().length === 0" class="no-results">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <h3>No components found</h3>
            <p>Try adjusting your search query</p>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      /* ── Schneider Green base color override (scoped to this page) ── */
      :host {
        --primary: #3dcd58;
        --primary-hover: #2db84d;
        --primary-light: #5edb72;
        --primary-lighter: #86e898;
        --primary-glow: rgba(61, 205, 88, 0.4);

        --gradient-primary: linear-gradient(135deg, #3dcd58 0%, #059669 100%);
        --gradient-hero: linear-gradient(135deg, #064e3b 0%, #065f46 100%);

        --bg-primary: #f8faf9;
        --bg-secondary: #ffffff;
        --bg-tertiary: #ecfdf5;
        --surface-1: #ffffff;
        --surface-2: #f0fdf4;

        --text-primary: #064e3b;
        --text-secondary: #065f46;
        --text-tertiary: #10b981;
        --border-color: #d1fae5;
        --border-strong: #34d399;
      }

      .overview-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: var(--bg-primary);
        overflow-y: auto;
        scroll-behavior: smooth;
      }

      /* Header */
      .overview-header {
        background:
          radial-gradient(
            ellipse 70% 90% at 90% 20%,
            color-mix(in srgb, var(--primary) 22%, transparent) 0%,
            transparent 55%
          ),
          radial-gradient(
            ellipse 55% 65% at 5% 80%,
            color-mix(in srgb, var(--primary) 14%, transparent) 0%,
            transparent 50%
          ),
          var(--gradient-hero);
        padding: 60px 0 80px;
        position: relative;
        overflow: hidden;
      }

      .header-content {
        max-width: 1500px;
        margin: 0 auto;
        padding: 0 40px;
        position: relative;
        z-index: 1;
      }

      .header-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px 6px 10px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 100px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 24px;
        backdrop-filter: blur(14px);
      }

      .header-badge svg {
        color: var(--primary);
      }

      .overview-header h1 {
        font-size: clamp(2.4rem, 4vw, 3.2rem);
        font-weight: 900;
        color: #ffffff;
        margin-bottom: 12px;
        letter-spacing: -0.03em;
        line-height: 1.1;
      }

      .overview-header > p,
      .header-content > p {
        font-size: 1.15rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 32px;
        line-height: 1.6;
        font-weight: 400;
        max-width: 600px;
      }

      .header-actions {
        display: flex;
        gap: 16px;
        align-items: center;
        max-width: 640px;
      }

      .search-box {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 20px;
        background: rgba(255, 255, 255, 0.95);
        border: 2px solid transparent;
        border-radius: 14px;
        transition: all 0.25s ease;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      }

      .search-box:focus-within {
        border-color: var(--primary);
        box-shadow:
          0 12px 36px rgba(0, 0, 0, 0.2),
          0 0 0 4px color-mix(in srgb, var(--primary) 20%, transparent);
        transform: translateY(-2px);
      }

      .search-box svg {
        color: #9ca3af;
      }

      .search-box input {
        flex: 1;
        border: none;
        background: transparent;
        font-size: 1rem;
        color: #1f2937;
        font-weight: 500;
        outline: none;
      }

      /* Layout */
      .overview-layout {
        display: flex;
        align-items: flex-start;
        max-width: 1540px;
        margin: -40px auto 0;
        padding: 0 40px 80px;
        gap: 40px;
        position: relative;
        z-index: 10;
        width: 100%;
        box-sizing: border-box;
      }

      /* Sidebar */
      .sidebar-nav {
        flex: 0 0 280px;
        position: sticky;
        top: 24px;
      }

      .sidebar-inner {
        background: var(--surface-1);
        border-radius: 20px;
        padding: 24px 16px;
        box-shadow: 0 12px 40px -12px rgba(0, 0, 0, 0.08);
        border: 1px solid var(--border-color);
      }

      .sidebar-title {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: var(--text-tertiary);
        margin: 0 0 16px 16px;
        font-weight: 800;
      }

      .category-menu {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .menu-item {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 12px 16px;
        border: none;
        background: transparent;
        border-radius: 12px;
        cursor: pointer;
        text-align: left;
        transition: all 0.2s ease;
        color: var(--text-secondary);
        font-weight: 600;
        font-size: 0.95rem;
      }

      .menu-item:hover {
        background: var(--bg-tertiary);
        color: var(--text-primary);
      }

      .menu-item.active {
        background: color-mix(in srgb, var(--primary) 12%, transparent);
        color: var(--primary);
      }

      .menu-icon {
        margin-right: 12px;
        font-size: 1.1rem;
        opacity: 0.8;
      }
      .menu-item.active .menu-icon {
        opacity: 1;
      }

      .menu-label {
        flex: 1;
      }

      .menu-count {
        background: var(--surface-2);
        padding: 2px 8px;
        border-radius: 100px;
        font-size: 0.75rem;
        font-weight: 700;
        border: 1px solid var(--border-color);
        color: var(--text-tertiary);
      }
      .menu-item.active .menu-count {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
      }

      /* Content Area */
      .overview-content {
        flex: 1;
        min-width: 0;
      }

      .category-section {
        margin-bottom: 72px;
        scroll-margin-top: 40px;
      }

      .category-header {
        margin-bottom: 32px;
      }

      .category-title {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .category-title h2 {
        font-size: 1.8rem;
        font-weight: 800;
        color: var(--text-primary);
        letter-spacing: -0.02em;
        margin: 0;
        white-space: nowrap;
      }

      .category-divider {
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, var(--border-strong), transparent);
        opacity: 0.3;
      }

      /* Component Grid */
      .component-card {
        background: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        padding: 24px;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        box-shadow:
          0 4px 20px -2px rgba(0, 0, 0, 0.03),
          inset 0 0 0 1px rgba(255, 255, 255, 0.2);
      }

      .component-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: var(--gradient-primary);
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: 2;
      }

      .component-card::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          115deg,
          transparent 20%,
          rgba(255, 255, 255, 0.8) 40%,
          rgba(255, 255, 255, 0.9) 50%,
          transparent 80%
        );
        background-size: 200% 100%;
        background-position: -200% center;
        transition: background-position 0.1s ease;
        pointer-events: none;
        opacity: 0;
      }

      .component-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow:
          0 24px 48px -12px color-mix(in srgb, var(--primary) 22%, transparent),
          0 0 0 1px var(--primary);
        background: rgba(255, 255, 255, 0.9);
      }

      .component-card:hover::before {
        opacity: 1;
      }

      .component-card:hover::after {
        opacity: 1;
        background-position: 200% center;
        transition: background-position 0.9s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card-icon-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }

      .comp-letter {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gradient-primary);
        color: white;
        border-radius: 12px;
        font-size: 1.2rem;
        font-weight: 800;
        box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 30%, transparent);
      }

      .card-preview {
        height: 100px;
        background: color-mix(in srgb, var(--primary) 4%, var(--bg-tertiary));
        border-radius: 12px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-color);
        color: var(--primary);
        transition: background 0.3s ease;
      }

      .card-preview svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      .component-card:hover .card-preview {
        background: color-mix(in srgb, var(--primary) 8%, var(--bg-tertiary));
      }

      .comp-name {
        font-size: 1.15rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 8px;
        letter-spacing: -0.01em;
      }

      .card-description {
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.6;
        flex: 1;
        margin-bottom: 24px;
      }

      .card-footer {
        padding-top: 16px;
        border-top: 1px dashed var(--border-color);
      }

      .view-demo {
        color: var(--primary);
        font-weight: 700;
        font-size: 0.85rem;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .view-demo svg {
        transition: transform 0.2s ease;
      }
      .component-card:hover .view-demo svg {
        transform: translateX(6px);
      }

      /* List View Override */
      .list-card {
        flex-direction: row;
        align-items: center;
        padding: 20px 24px;
        gap: 24px;
      }
      .list-card .card-preview {
        display: none;
      }
      .list-card .card-icon-row {
        margin-bottom: 0;
      }
      .list-card .comp-name {
        width: 220px;
        margin-bottom: 0;
      }
      .list-card .card-description {
        margin-bottom: 0;
      }
      .list-card .card-footer {
        border-top: none;
        padding-top: 0;
        padding-left: 24px;
        border-left: 1px solid var(--border-color);
        margin-top: 0;
      }

      /* View Toggle */
      .view-toggle button {
        width: 46px;
        height: 46px;
        background: transparent;
        border: none;
        border-radius: 12px;
        color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
      }
      .view-toggle button.active {
        background: var(--gradient-primary);
        color: white;
        box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 40%, transparent);
      }

      /* No Results */
      .no-results {
        text-align: center;
        padding: 100px 20px;
        color: var(--text-tertiary);
      }
      .no-results svg {
        opacity: 0.2;
        margin-bottom: 24px;
      }
      .no-results h3 {
        font-size: 1.5rem;
        color: var(--text-primary);
        margin-bottom: 8px;
        font-weight: 700;
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .overview-layout {
          flex-direction: column;
        }
        .sidebar-nav {
          width: 100%;
          position: relative;
          top: 0;
        }
        .sidebar-inner {
          display: flex;
          overflow-x: auto;
          padding: 12px;
          gap: 8px;
        }
        .category-menu {
          flex-direction: row;
        }
        .sidebar-title {
          display: none;
        }
        .menu-item {
          width: auto;
          white-space: nowrap;
        }
      }
    `,
  ],
})
export class OverviewComponent implements AfterViewInit, OnDestroy {
  categories = categoryNavItems;
  searchQuery = '';
  viewMode = signal<'grid' | 'list'>('grid');
  activeCategory: string = this.categories[0]?.id;

  private scrollContainer: Element | null = null;
  private boundScrollHandler = this._onContainerScroll.bind(this);

  /** Masonry responsive breakpoints — passed to <app-masonry> */
  masonryBp: Record<number, number> = { 1600: 3, 1200: 2, 768: 2, 0: 1 };
  listBp: Record<number, number> = { 0: 1 };

  get totalComponents(): number {
    return this.categories.reduce((total, cat) => total + (cat.children?.length || 0), 0);
  }

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
    let newActive = this.activeCategory;
    for (const category of this.filteredCategories()) {
      const el = document.getElementById('cat-' + category.id);
      if (el && el.offsetTop <= offset) {
        newActive = category.id;
      }
    }
    this.activeCategory = newActive;
  }

  scrollToCategory(id: string) {
    this.activeCategory = id;
    const el = document.getElementById('cat-' + id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getPreviewSvg(id: string): SafeHtml {
    const svg = COMPONENT_SVG_MAP[id] ?? COMPONENT_SVG_MAP['default'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  navigateToComponent(componentId: string) {
    this.router.navigate(['playground', componentId]);
  }

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
  }

  filteredCategories() {
    if (!this.searchQuery.trim()) {
      return this.categories;
    }

    const query = this.searchQuery.toLowerCase();
    return this.categories
      .map((category) => ({
        ...category,
        children: category.children?.filter(
          (comp) => comp.label && comp.label.toLowerCase().includes(query),
        ),
      }))
      .filter((category) => category.children && category.children.length > 0);
  }

  getComponentDescription(id: string): string {
    const descriptions: Record<string, string> = {
      button: 'Versatile button component with multiple variants and sizes',
      card: 'Container component for grouping related content',
      dialog: 'Modal dialog for focused user interactions',
      dropdown: 'Select component with rich customization options',
      tabs: 'Organize content into switchable panels',
      accordion: 'Collapsible content sections for better organization',
      table: 'Advanced data table with sorting and filtering',
      pagination: 'Navigate through large datasets efficiently',
      breadcrumb: 'Show current location in navigation hierarchy',
      avatar: 'Display user profile images and initials',
      badge: 'Small count and labeling component',
      chip: 'Compact element for tags and selections',
      snackbar: 'Brief messages about app processes',
      skeleton: 'Loading placeholder for content',
      timeline: 'Display events in chronological order',
    };
    return descriptions[id] || 'Seamlessly explore this component in the interactive playground.';
  }
}
