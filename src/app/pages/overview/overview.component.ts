import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
                  <line x1="8" y1="6"  x2="21" y2="6"  stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="3" y1="6"  x2="3.01" y2="6"  stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
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

          <ng-masonry-grid
            [columns]="viewMode() === 'list' ? 1 : 4"
            gap="20px"
            [rowGap]="20"
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
                <span class="view-demo">View Demo
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
      </div>
    </div>
  `,
  styles: [
    `
      /* ── Schneider Green base color override (scoped to this page) ── */
      :host {
        --primary:          #3DCD58;
        --primary-hover:    #2db84d;
        --primary-light:    #5edb72;
        --primary-lighter:  #86e898;
        --primary-glow:     rgba(61, 205, 88, 0.4);

        --gradient-primary: linear-gradient(135deg, #3DCD58 0%, #059669 100%);
        --gradient-hero:    linear-gradient(135deg, #064e3b 0%, #065f46 100%);
        --gradient-premium: linear-gradient(135deg, #3DCD58 0%, #059669 100%);
        --gradient-mesh:
          radial-gradient(at 40% 20%, rgba(61, 205, 88, 0.08) 0px, transparent 50%),
          radial-gradient(at 80% 0%,  rgba(5, 150, 105, 0.08) 0px, transparent 50%),
          radial-gradient(at 0%  50%, rgba(61, 205, 88, 0.06) 0px, transparent 50%);

        --bg-primary:   #f8faf9;
        --bg-secondary: #ffffff;
        --bg-tertiary:  #ecfdf5;
        --bg-accent:    #d1fae5;
        --surface-1:    #ffffff;
        --surface-2:    #f0fdf4;
        --surface-3:    #ecfdf5;
        --surface-elevated: #ffffff;

        --text-primary:   #064e3b;
        --text-secondary: #065f46;
        --text-tertiary:  #10b981;
        --text-muted:     #6ee7b7;
        --border-color:   #d1fae5;
        --border-light:   #ecfdf5;
        --border-strong:  #34d399;

        --shadow-premium: 0 24px 48px -12px rgba(61, 205, 88, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.06);
        --shadow-glow:    0 0 24px 0 rgba(61, 205, 88, 0.35);
      }

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
          radial-gradient(ellipse 70% 90% at 90% 20%, color-mix(in srgb, var(--primary) 22%, transparent) 0%, transparent 55%),
          radial-gradient(ellipse 55% 65% at 5% 80%,  color-mix(in srgb, var(--primary) 14%, transparent) 0%, transparent 50%),
          var(--gradient-hero);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        padding: 72px 60px 96px;
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
        padding: 7px 18px 7px 12px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.18);
        border-radius: 100px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 28px;
        backdrop-filter: blur(14px);
        box-shadow: 0 2px 16px rgba(0,0,0,0.12);
      }
      .header-badge svg {
        opacity: 0.8;
        flex-shrink: 0;
        color: var(--primary);
      }

      .overview-header h1 {
        font-size: clamp(2.4rem, 4vw, 3.6rem);
        font-weight: 950;
        color: #ffffff;
        margin-bottom: 16px;
        letter-spacing: -0.04em;
        line-height: 1.1;
        text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        position: relative;
        z-index: 1;
      }

      .overview-header > p,
      .header-content > p {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.62);
        margin-bottom: 32px;
        position: relative;
        z-index: 1;
        line-height: 1.7;
        font-weight: 400;
        max-width: 620px;
      }

      .header-actions {
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .search-box {
        flex: 1;
        max-width: 560px;
        position: relative;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 22px;
        background: rgba(255,255,255,0.96);
        border: 1.5px solid rgba(255,255,255,0.3);
        border-radius: 14px;
        transition: all 0.28s cubic-bezier(.4,0,.2,1);
        box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.1);
      }

      .search-box:focus-within {
        transform: translateY(-2px);
        border-color: var(--primary);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 25%, transparent),
                    0 12px 36px rgba(0,0,0,0.2);
      }

      .search-box svg {
        color: #9ca3af;
        flex-shrink: 0;
      }

      .search-box input {
        flex: 1;
        border: none;
        background: transparent;
        color: #1f2937;
        font-size: 0.95rem;
        font-weight: 500;
        outline: none;
      }

      .search-box input::placeholder {
        color: #9ca3af;
        font-weight: 400;
      }

      .view-toggle {
        display: flex;
        gap: 4px;
        padding: 5px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 12px;
        backdrop-filter: blur(12px);
        flex-shrink: 0;
      }

      .view-toggle button {
        width: 42px;
        height: 42px;
        background: transparent;
        border: none;
        border-radius: 9px;
        color: rgba(255,255,255,0.55);
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .view-toggle button:hover {
        color: rgba(255,255,255,0.9);
        background: rgba(255,255,255,0.1);
      }

      .view-toggle button.active {
        background: var(--gradient-primary);
        color: #fff;
        box-shadow: 0 3px 10px color-mix(in srgb, var(--primary) 45%, transparent);
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
        border-image: linear-gradient(180deg, var(--primary, #4f46e5), color-mix(in srgb, var(--primary) 20%, transparent)) 1;
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

      /* Component Grid — layout handled by <app-masonry> component */

      .component-card {
        break-inside: avoid;
        -webkit-column-break-inside: avoid;
        margin-bottom: 20px;
        padding: 1.375rem 1.5rem;
        background: var(--surface-1);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.32s cubic-bezier(.4,0,.2,1);
        position: relative;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,.05);
        animation: ovCardIn .5s cubic-bezier(.22,1,.36,1) both;
        display: flex;
        flex-direction: column;
        min-height: 160px;
      }

      /* Gradient top border – subtle at rest, vivid on hover */
      .component-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary, #4f46e5), var(--primary-light, #6366f1), var(--primary-lighter, #818cf8));
        opacity: 0.3;
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

      .list-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
        min-height: 0;
      }

      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        position: relative;
      }

      .card-icon-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .85rem;
      }

      /* Component preview illustration strip */
      .card-preview {
        width: 100%;
        height: 84px;
        background: color-mix(in srgb, var(--primary) 5%, var(--bg-tertiary, #f8fafc));
        border-radius: 10px;
        margin-bottom: 1rem;
        overflow: hidden;
        border: 1px solid color-mix(in srgb, var(--primary) 10%, transparent);
        color: var(--primary, #4f46e5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background .3s ease;
      }

      .card-preview svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      .component-card:hover .card-preview {
        background: color-mix(in srgb, var(--primary) 9%, var(--bg-tertiary, #f8fafc));
      }

      /* In list mode, hide the preview to keep rows compact */
      .list-card .card-preview {
        display: none;
      }

      .comp-letter {
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gradient-primary);
        color: white;
        border-radius: 12px;
        font-size: 1.15rem;
        font-weight: 900;
        letter-spacing: -0.02em;
        box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 30%, transparent);
        transition: transform .3s ease;
        flex-shrink: 0;
      }

      .component-card:hover .comp-letter {
        transform: scale(1.1) rotate(-5deg);
      }

      .comp-name {
        font-size: 1rem;
        font-weight: 800;
        color: var(--text-primary);
        letter-spacing: -0.01em;
        margin-bottom: 6px;
      }

      .list-card .card-header {
        flex: 0 0 200px;
        margin-bottom: 0;
      }

      .list-card .card-icon-row {
        flex: 0 0 auto;
        margin-bottom: 0;
      }

      .list-card .comp-name {
        flex: 0 0 150px;
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
        font-size: 0.875rem;
        line-height: 1.55;
        margin-bottom: 0;
        position: relative;
        flex: 1;
      }

      .list-card .card-description {
        flex: 1;
        margin-bottom: 0;
      }

      .card-footer {
        position: relative;
        margin-top: 1rem;
        padding-top: 0.75rem;
        border-top: 1px solid var(--border-color);
      }

      .list-card .card-footer {
        flex: 0 0 auto;
        margin-top: 0;
        padding-top: 0;
        border-top: none;
        border-left: 1px solid var(--border-color);
        padding-left: 1.25rem;
      }

      .view-demo {
        color: var(--primary);
        font-weight: 700;
        font-size: 0.78rem;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      .view-demo svg {
        transition: transform .25s ease;
      }

      .component-card:hover .view-demo svg {
        transform: translateX(4px);
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

        .list-card {
          flex-direction: column;
          align-items: flex-start;
        }

        .list-card .card-header,
        .list-card .card-description {
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

  /** Masonry responsive breakpoints — passed to <app-masonry> */
  masonryBp: Record<number, number> = { 1400: 4, 1000: 3, 600: 2, 0: 1 };
  listBp:    Record<number, number> = { 0: 1 };

  get totalComponents(): number {
    return this.categories.reduce((total, cat) => total + (cat.children?.length || 0), 0);
  }

  constructor(private router: Router, private sanitizer: DomSanitizer) {}

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
