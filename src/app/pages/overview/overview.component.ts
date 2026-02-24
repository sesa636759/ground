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

      /* ── Keyframes ─────────────────────────────────────────── */
      @keyframes ovHeaderIn {
        from { opacity: 0; transform: translateY(-16px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes ovOrbDrift {
        0%,100% { transform: translateY(0) scale(1); }
        50%      { transform: translateY(-24px) scale(1.05); }
      }
      @keyframes ovCardIn {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes ovShimmer {
        0%   { background-position: -200% center; }
        100% { background-position:  200% center; }
      }

      /* Header */
      .overview-header {
        background:
          radial-gradient(ellipse 60% 80% at 85% 30%, color-mix(in srgb, var(--primary) 18%, transparent) 0%, transparent 55%),
          radial-gradient(ellipse 50% 60% at 10% 70%, color-mix(in srgb, var(--primary) 12%, transparent) 0%, transparent 50%),
          var(--gradient-hero);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        padding: 64px 60px 100px;
        position: relative;
        overflow: hidden;
        animation: ovHeaderIn .5s cubic-bezier(.22,1,.36,1) both;
      }

      .overview-header::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: radial-gradient(circle, color-mix(in srgb, var(--primary) 14%, transparent) 1px, transparent 1px);
        background-size: 32px 32px;
        mask-image: linear-gradient(to bottom, rgba(0,0,0,.25) 0%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,.25) 0%, transparent 100%);
        pointer-events: none;
      }

      .overview-header::after {
        content: '';
        position: absolute;
        width: 600px; height: 600px;
        top: -300px; right: -150px;
        border-radius: 50%;
        background: radial-gradient(circle, color-mix(in srgb, var(--primary) 15%, transparent) 0%, transparent 70%);
        animation: ovOrbDrift 10s ease-in-out infinite;
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
        padding: 6px 16px 6px 10px;
        background: linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--primary) 12%, transparent));
        border: 1px solid color-mix(in srgb, var(--primary) 35%, transparent);
        border-radius: 100px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 24px;
        backdrop-filter: blur(12px);
        box-shadow: 0 2px 12px color-mix(in srgb, var(--primary) 20%, transparent);
      }
      .header-badge svg {
        opacity: 0.85;
        flex-shrink: 0;
      }

      .overview-header h1 {
        font-size: 3.5rem;
        font-weight: 900;
        color: #f8fafc;
        margin-bottom: 12px;
        letter-spacing: -0.03em;
        line-height: 1.12;
        text-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
        position: relative;
        z-index: 1;
      }

      .overview-header > p,
      .header-content > p {
        font-size: 1.15rem;
        color: #94a3b8;
        margin-bottom: 32px;
        position: relative;
        z-index: 1;
        line-height: 1.65;
        font-weight: 400;
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

      .category-section {
        max-width: 1400px;
        margin: 0 auto 80px;
        position: relative;
        padding-left: 1.5rem;
        border-left: 3px solid transparent;
        border-image: linear-gradient(180deg, var(--primary, #4f46e5), rgba(124,58,237,.3)) 1;
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
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent), color-mix(in srgb, var(--primary) 6%, transparent));
        border-radius: 18px;
        color: var(--primary);
        box-shadow: 0 4px 14px color-mix(in srgb, var(--primary) 12%, transparent);
        border: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
        transition: all 0.3s ease;
      }
      .category-section:hover .category-icon {
        background: linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--primary) 12%, transparent));
        transform: scale(1.06) rotate(-3deg);
        box-shadow: 0 8px 24px color-mix(in srgb, var(--primary) 20%, transparent);
      }

      .category-title h2 {
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 4px;
        letter-spacing: -0.02em;
      }

      .category-title p {
        font-size: 0.875rem;
        color: var(--text-secondary);
        font-weight: 500;
      }

      .category-count-chip {
        display: inline-flex;
        align-items: center;
        padding: 3px 10px;
        background: linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent), color-mix(in srgb, var(--primary) 7%, transparent));
        border: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
        border-radius: 100px;
        font-size: 0.72rem;
        font-weight: 800;
        color: var(--primary, #4f46e5);
        letter-spacing: 0.05em;
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
        padding: 28px;
        background: var(--surface-1);
        border: 1px solid var(--border-color);
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.32s cubic-bezier(.4,0,.2,1);
        position: relative;
        overflow: hidden;
        box-shadow: 0 1px 4px rgba(0,0,0,.04);
        animation: ovCardIn .5s cubic-bezier(.22,1,.36,1) both;
      }

      /* Gradient top border – revealed on hover */
      .component-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2.5px;
        background: linear-gradient(90deg, var(--primary, #4f46e5), #7c3aed, #818cf8);
        opacity: 0;
        transition: opacity .3s ease;
      }

      /* Shimmer sweep on hover */
      .component-card::after {
        content: '';
        position: absolute; inset: 0;
        background: linear-gradient(115deg, transparent 30%, color-mix(in srgb, var(--primary) 4%, transparent) 50%, transparent 70%);
        background-size: 200% 100%;
        background-position: 200% center;
        transition: background-position .7s ease;
        pointer-events: none;
      }

      .component-card:hover {
        transform: translateY(-8px) scale(1.01);
        border-color: var(--primary);
        box-shadow: 0 20px 40px -12px color-mix(in srgb, var(--primary) 22%, transparent), 0 6px 12px -3px rgba(0,0,0,.06);
      }

      .component-card:hover::before { opacity: 1; }
      .component-card:hover::after  { background-position: -200% center; }

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
        font-size: 1.05rem;
        font-weight: 800;
        color: var(--text-primary);
        letter-spacing: -0.01em;
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
        font-size: 0.85rem;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        letter-spacing: 0.01em;
      }

      .component-card:hover .view-demo {
        gap: 12px;
        letter-spacing: 0.04em;
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
    return descriptions[id] || 'Explore this component in the playground';
  }
}
