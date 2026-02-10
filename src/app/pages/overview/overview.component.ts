import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { categoryNavItems } from '../../data/navigation.data';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
              <input
                type="text"
                placeholder="Search components..."
                [(ngModel)]="searchQuery"
                (input)="onSearch()"
              />
            </div>
            <div class="view-toggle">
              <button
                [class.active]="viewMode() === 'grid'"
                (click)="viewMode.set('grid')"
                title="Grid view"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" />
                  <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" />
                  <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" />
                  <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" />
                </svg>
              </button>
              <button
                [class.active]="viewMode() === 'list'"
                (click)="viewMode.set('list')"
                title="List view"
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
              </button>
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
        background: linear-gradient(
          135deg,
          rgba(99, 102, 241, 0.1) 0%,
          rgba(139, 92, 246, 0.1) 100%
        );
        border-bottom: 1px solid var(--border-color);
        padding: 48px 60px;
      }

      .header-content {
        max-width: 1400px;
        margin: 0 auto;
      }

      .header-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: var(--primary-bg);
        border: 1px solid rgba(99, 102, 241, 0.3);
        border-radius: 100px;
        color: var(--primary-color);
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 24px;
      }

      .overview-header h1 {
        font-size: 3rem;
        font-weight: 900;
        color: var(--text-primary);
        margin-bottom: 12px;
        letter-spacing: -0.02em;
      }

      .overview-header > p {
        font-size: 1.125rem;
        color: var(--text-secondary);
        margin-bottom: 32px;
      }

      .header-actions {
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .search-box {
        flex: 1;
        max-width: 500px;
        position: relative;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 20px;
        background: var(--surface-2);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        transition: all 0.3s;
      }

      .search-box:focus-within {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px var(--primary-bg);
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
        padding: 4px;
        background: var(--surface-2);
        border: 1px solid var(--border-color);
        border-radius: 10px;
      }

      .view-toggle button {
        padding: 10px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: var(--text-secondary);
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .view-toggle button:hover {
        background: var(--surface-1);
        color: var(--text-primary);
      }

      .view-toggle button.active {
        background: var(--primary-bg);
        color: var(--primary-color);
      }

      /* Content */
      .overview-content {
        flex: 1;
        overflow-y: auto;
        padding: 60px;
      }

      .category-section {
        max-width: 1400px;
        margin: 0 auto 80px;
      }

      .category-section:last-child {
        margin-bottom: 0;
      }

      .category-header {
        margin-bottom: 32px;
      }

      .category-title {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .category-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--primary-bg);
        border-radius: 14px;
        color: var(--primary-color);
      }

      .category-title h2 {
        font-size: 1.75rem;
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
        padding: 24px;
        background: var(--surface-2);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .component-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(99, 102, 241, 0.05) 0%,
          rgba(236, 72, 153, 0.05) 100%
        );
        opacity: 0;
        transition: opacity 0.3s;
      }

      .component-card:hover::before {
        opacity: 1;
      }

      .component-card:hover {
        transform: translateY(-4px);
        border-color: rgba(99, 102, 241, 0.4);
        box-shadow: 0 12px 40px -10px rgba(99, 102, 241, 0.3);
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
        padding: 4px 10px;
        background: rgba(236, 72, 153, 0.15);
        color: #f472b6;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 600;
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
        color: var(--primary-color);
        font-weight: 600;
        font-size: 0.9375rem;
        transition: transform 0.3s;
        display: inline-block;
      }

      .component-card:hover .view-demo {
        transform: translateX(4px);
      }

      /* No Results */
      .no-results {
        text-align: center;
        padding: 80px 20px;
        color: var(--text-secondary);
      }

      .no-results svg {
        margin-bottom: 24px;
        opacity: 0.3;
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
