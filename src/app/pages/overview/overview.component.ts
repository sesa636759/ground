import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { categoryNavItems } from '../../data/navigation.data';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
          <h1>Component Overview</h1>
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
              <app-input
                type="text"
                name="searchQuery"
                placeholder="Search components..."
                [value]="searchQuery"
                (input)="onSearchInput($event)"
              />
            </div>
            <div class="view-toggle">
              <ui-button
                [variant]="viewMode() === 'grid' ? 'primary' : 'ghost'"
                icon-only
                title="Grid view"
                (click)="viewMode.set('grid')"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" />
                  <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" />
                  <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" />
                  <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" />
                </svg>
              </ui-button>
              <ui-button
                [variant]="viewMode() === 'list' ? 'primary' : 'ghost'"
                icon-only
                title="List view"
                (click)="viewMode.set('list')"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
              </ui-button>
            </div>
          </div>
        </div>
      </header>

      <!-- Content -->
      <div class="overview-content">
        <div *ngFor="let category of filteredCategories()" class="category-section">
          <div class="category-header">
            <div class="category-title">
              <div class="category-icon" [innerHTML]="category.icon"></div>
              <div>
                <h2>{{ category.label }}</h2>
                <p>{{ category.children?.length || 0 }} components</p>
              </div>
            </div>
          </div>

          <div class="component-grid" [class.list-view]="viewMode() === 'list'">
            <div
              *ngFor="let component of category.children"
              class="component-card"
              (click)="navigateToComponent(component.id)"
            >
              <div class="card-header">
                <h3>{{ component.label }}</h3>
                <span *ngIf="component.badge" class="badge">{{ component.badge }}</span>
              </div>
              <p class="card-description">{{ getComponentDescription(component.id) }}</p>
              <div class="card-footer">
                <span class="view-demo">View Demo →</span>
              </div>
            </div>
          </div>
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
      </div>
    </div>
  `,
  styles: [
    `
      .overview-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: var(--bg-primary);
      }

      /* Header */
      .overview-header {
        background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 64px 60px 100px;
        position: relative;
        overflow: hidden;
      }

      .overview-header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
          radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.1) 0%, transparent 50%);
        pointer-events: none;
      }

      .header-content {
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
      }

      .header-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: rgba(99, 102, 241, 0.15);
        border: 1px solid rgba(129, 140, 248, 0.3);
        border-radius: 100px;
        color: #a5b4fc;
        font-size: 0.85rem;
        font-weight: 700;
        margin-bottom: 24px;
        backdrop-filter: blur(10px);
      }

      .overview-header h1 {
        font-size: 3.5rem;
        font-weight: 900;
        color: #f8fafc;
        margin-bottom: 12px;
        letter-spacing: -0.02em;
        text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        position: relative;
        z-index: 1;
      }

      .overview-header > p {
        font-size: 1.25rem;
        color: #cbd5e1;
        margin-bottom: 32px;
        position: relative;
        z-index: 1;
      }

      .header-actions {
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .search-box {
        flex: 1;
        max-width: 600px;
        position: relative;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 24px;
        background: var(--surface-1);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        transition: all var(--transition-base);
        box-shadow: var(--shadow-md);
      }

      .search-box:focus-within {
        transform: translateY(-2px);
        border-color: var(--primary);
        box-shadow: var(--shadow-lg);
      }

      .search-box svg {
        color: var(--text-tertiary);
        flex-shrink: 0;
      }

      .search-box input {
        flex: 1;
        border: none;
        background: transparent;
        color: var(--text-primary);
        font-size: 1rem;
        outline: none;
      }

      .search-box input::placeholder {
        color: var(--text-tertiary);
      }

      .view-toggle {
        display: flex;
        gap: 4px;
        padding: 6px;
        background: rgba(15, 23, 42, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        backdrop-filter: blur(10px);
      }

      .view-toggle button {
        width: 44px;
        height: 44px;
        background: transparent;
        border: none;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
      }

      .view-toggle button:hover {
        opacity: 1;
        background: rgba(255, 255, 255, 0.1);
      }

      .view-toggle button.active {
        background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
        color: white;
        opacity: 1;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
      }

      /* Content */
      .overview-content {
        flex: 1;
        overflow-y: auto;
        padding: 0 60px 80px;
        margin-top: -40px;
        position: relative;
        z-index: 10;
      }

      .category-section {
        max-width: 1400px;
        margin: 0 auto 80px;
      }

      .category-header {
        margin-bottom: 32px;
      }

      .category-title {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .category-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--surface-1);
        border-radius: 18px;
        color: var(--primary);
        box-shadow: var(--shadow-sm);
        border: 1px solid var(--border-color);
      }

      .category-title h2 {
        font-size: 2rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 4px;
      }

      .category-title p {
        font-size: 0.9375rem;
        color: var(--text-secondary);
      }

      /* Component Grid */
      .component-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
      }

      .component-grid.list-view {
        grid-template-columns: 1fr;
      }

      .component-card {
        padding: 32px;
        background: var(--surface-1);
        border: 1px solid var(--border-color);
        border-radius: 24px;
        cursor: pointer;
        transition: all var(--transition-base);
        position: relative;
        overflow: hidden;
        box-shadow: var(--shadow-sm);
      }

      .component-card:hover {
        transform: translateY(-8px);
        border-color: var(--primary);
        box-shadow: var(--shadow-premium);
      }

      .list-view .component-card {
        display: flex;
        align-items: center;
        gap: 24px;
      }

      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        position: relative;
      }

      .list-view .card-header {
        flex: 0 0 200px;
        margin-bottom: 0;
      }

      .component-card h3 {
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--text-primary);
      }

      .badge {
        padding: 6px 12px;
        background: var(--bg-secondary);
        color: var(--primary);
        border-radius: 100px;
        font-size: 0.75rem;
        font-weight: 700;
        border: 1px solid var(--border-color);
      }

      .card-description {
        color: var(--text-secondary);
        font-size: 0.9375rem;
        line-height: 1.5;
        margin-bottom: 16px;
        position: relative;
      }

      .list-view .card-description {
        flex: 1;
        margin-bottom: 0;
      }

      .card-footer {
        position: relative;
      }

      .list-view .card-footer {
        flex: 0 0 auto;
      }

      .view-demo {
        color: var(--primary);
        font-weight: 700;
        font-size: 0.95rem;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .component-card:hover .view-demo {
        transform: translateX(8px);
      }

      /* No Results */
      .no-results {
        text-align: center;
        padding: 120px 20px;
        color: var(--text-tertiary);
      }

      .no-results svg {
        margin-bottom: 24px;
        opacity: 0.2;
      }

      .no-results h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 8px;
      }

      .no-results p {
        font-size: 1rem;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .overview-header {
          padding: 32px 24px;
        }

        .overview-header h1 {
          font-size: 2rem;
        }

        .header-actions {
          flex-direction: column;
          align-items: stretch;
        }

        .search-box {
          max-width: none;
        }

        .overview-content {
          padding: 40px 24px;
        }

        .component-grid {
          grid-template-columns: 1fr;
        }

        .list-view .component-card {
          flex-direction: column;
          align-items: flex-start;
        }

        .list-view .card-header,
        .list-view .card-description {
          flex: 1;
        }
      }
    `,
  ],
})
export class OverviewComponent {
  categories = categoryNavItems;
  searchQuery = '';
  viewMode = signal<'grid' | 'list'>('grid');

  get totalComponents(): number {
    return this.categories.reduce((total, cat) => total + (cat.children?.length || 0), 0);
  }

  constructor(private router: Router) {}

  navigateToComponent(componentId: string) {
    this.router.navigate(['playground', componentId]);
  }

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
  }

  onSearch() {
    // Search functionality would filter categories
  }

  filteredCategories() {
    if (!this.searchQuery.trim()) {
      return this.categories;
    }

    const query = this.searchQuery.toLowerCase();
    return this.categories
      .map((category) => ({
        ...category,
        children: category.children?.filter((comp) => comp.label.toLowerCase().includes(query)),
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
    return descriptions[id] || 'Explore this component in the playground';
  }
}
