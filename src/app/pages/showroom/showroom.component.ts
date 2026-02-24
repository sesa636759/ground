import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { categoryNavItems } from '../../data/navigation.data';
import { COMPONENT_SVG_MAP } from '../../shared/utils/component-svg-map';

@Component({
  selector: 'app-showroom',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="showroom-wrapper">
      <!-- Glow Effects behind dashboard -->
      <div class="glow-orb top-left"></div>
      <div class="glow-orb bottom-right"></div>

      <div class="dashboard-layout">
        <!-- Sidebar Navigation -->
        <aside class="dashboard-sidebar">
          <div class="sidebar-header">
            <div class="logo-box">
              <svg viewBox="0 0 24 24" fill="none" class="neon-icon">
                <rect
                  x="2"
                  y="2"
                  width="9"
                  height="9"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="13"
                  y="2"
                  width="9"
                  height="9"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="2"
                  y="13"
                  width="9"
                  height="9"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="13"
                  y="13"
                  width="9"
                  height="9"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <span class="brand-name">GROUND</span>
          </div>

          <div class="menu-section">
            <h4 class="menu-label">MENU</h4>
            <nav class="sidebar-nav">
              <button class="nav-btn active"><i class="fas fa-home"></i> Component Hub</button>
              <button class="nav-btn"><i class="fas fa-chart-pie"></i> Analytics</button>
              <button class="nav-btn"><i class="fas fa-cog"></i> Settings</button>
            </nav>
          </div>

          <div class="menu-section">
            <h4 class="menu-label">CATEGORIES</h4>
            <nav class="sidebar-nav">
              <button
                *ngFor="let cat of categories; let i = index"
                class="nav-btn"
                [class.selected]="activeCategoryId() === cat.id"
                (click)="activeCategoryId.set(cat.id)"
              >
                <i [class]="cat.icon || 'fas fa-box'"></i>
                {{ cat.label }}
                <span class="badge" *ngIf="cat.children && cat.children.length">{{
                  cat.children.length
                }}</span>
              </button>
            </nav>
          </div>

          <div class="sidebar-footer">
            <div class="cta-card">
              <div class="cta-glow"></div>
              <h5>Premium Available</h5>
              <p>Unlock all components</p>
              <button>Upgrade Pro</button>
            </div>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="dashboard-main">
          <!-- Topbar -->
          <header class="dashboard-topbar">
            <div class="topbar-left">
              <h2>{{ activeCategory()?.label || 'All Components' }}</h2>
              <p>Explore the elite dark-mode component registry.</p>
            </div>

            <div class="topbar-right">
              <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search resources..." (input)="onSearch($event)" />
              </div>
              <button class="icon-btn">
                <i class="fas fa-bell"></i><span class="dot-indicator"></span>
              </button>
              <div class="avatar-profile">
                <img src="https://i.pravatar.cc/150?u=groundui" alt="User" />
              </div>
            </div>
          </header>

          <!-- Metrics Widgets Row -->
          <section class="metrics-row">
            <div class="metric-card">
              <div class="card-header">
                <span class="title">Total Assets</span>
                <i class="fas fa-cubes neon-text-blue"></i>
              </div>
              <div class="metric-value">{{ totalCount }}</div>
              <div class="metric-trend positive">+14 this week</div>
            </div>

            <div class="metric-card">
              <div class="card-header">
                <span class="title">Production Ready</span>
                <i class="fas fa-check-circle neon-text-green"></i>
              </div>
              <div class="metric-value">100<span class="symbol">%</span></div>
              <div class="metric-trend positive">Fully tested</div>
            </div>

            <!-- Fake Chart Card for aesthetics -->
            <div class="metric-card chart-card">
              <div class="card-header">
                <span class="title">Adoption Rate</span>
                <i class="fas fa-chart-line neon-text-purple"></i>
              </div>
              <div class="fake-chart">
                <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path
                    d="M0,30 Q20,25 30,15 T60,20 T100,5"
                    fill="none"
                    stroke="url(#purpleGradient)"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stop-color="#a855f7" />
                      <stop offset="100%" stop-color="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="metric-trend positive">+2.4% vs last month</div>
            </div>
          </section>

          <!-- Component Grid -->
          <section class="components-grid">
            <div
              class="comp-widget"
              *ngFor="let comp of visibleComponents()"
              (click)="navigateTo(comp.id)"
            >
              <div class="widget-header">
                <div class="comp-icon">{{ comp.label.charAt(0) }}</div>
                <div class="comp-info">
                  <h3>{{ comp.label }}</h3>
                  <span class="tag">{{ activeCategory()?.label }}</span>
                </div>
                <button class="action-btn"><i class="fas fa-arrow-right"></i></button>
              </div>
              <div class="widget-preview" [innerHTML]="getPreviewSvg(comp.id)"></div>
            </div>

            <div class="empty-state" *ngIf="visibleComponents().length === 0">
              <i class="fas fa-filter"></i>
              <h3>No components found</h3>
              <p>Try a different search term or category.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

      :host {
        --bg-base: #0d0f14;
        --bg-surface: #16181d;
        --bg-surface-elevated: #1a1c23;

        --text-main: #ffffff;
        --text-muted: #94a3b8;
        --text-faint: #64748b;

        --accent-purple: #a855f7;
        --accent-blue: #3b82f6;
        --accent-green: #10b981;
        --accent-pink: #f43f5e;
        --accent-orange: #f97316;

        --border-subtle: rgba(255, 255, 255, 0.08);
        --border-hover: rgba(255, 255, 255, 0.15);

        --radius-lg: 28px;
        --radius-md: 20px;
        --radius-sm: 12px;

        display: block;
        background-color: var(--bg-base);
        color: var(--text-main);
        font-family: 'Inter', sans-serif;
        min-height: 100vh;
        overflow-x: hidden;
      }

      * {
        box-sizing: border-box;
      }

      /* Glows */
      .glow-orb {
        position: fixed;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 60%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
        filter: blur(40px);
      }
      .glow-orb.top-left {
        top: -200px;
        left: -200px;
      }
      .glow-orb.bottom-right {
        bottom: -200px;
        right: -200px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%);
      }

      /* Layout */
      .showroom-wrapper {
        position: relative;
        padding: 24px;
        min-height: 100vh;
      }

      .dashboard-layout {
        position: relative;
        z-index: 10;
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 24px;
        max-width: 1800px;
        margin: 0 auto;
        height: calc(100vh - 48px);
      }

      /* Sidebar */
      .dashboard-sidebar {
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        overflow-y: auto;
      }
      .dashboard-sidebar::-webkit-scrollbar {
        display: none;
      }

      .sidebar-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 8px;
        .logo-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2));
          border: 1px solid rgba(168, 85, 247, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
        }
        .brand-name {
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.05em;
        }
      }

      .menu-section {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .menu-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-faint);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 4px 8px;
        }
      }

      .sidebar-nav {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .nav-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          text-align: left;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 500;
          font-family: inherit;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.25s ease;

          i {
            font-size: 1.1rem;
            width: 20px;
            text-align: center;
          }

          &:hover {
            background: rgba(255, 255, 255, 0.04);
            color: var(--text-main);
          }

          &.active,
          &.selected {
            background: rgba(255, 255, 255, 0.08);
            color: var(--text-main);
            box-shadow: inset 3px 0 0 var(--accent-blue);
          }

          .badge {
            margin-left: auto;
            background: var(--accent-purple);
            color: white;
            font-size: 0.7rem;
            padding: 2px 8px;
            border-radius: 100px;
            font-weight: 700;
          }
        }
      }

      .sidebar-footer {
        margin-top: auto;
        padding-top: 24px;

        .cta-card {
          background: linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(249, 115, 22, 0.15));
          border: 1px solid rgba(244, 63, 94, 0.3);
          border-radius: var(--radius-md);
          padding: 20px;
          position: relative;
          overflow: hidden;
          text-align: center;

          h5 {
            margin: 0 0 6px;
            font-size: 1rem;
            color: #fff;
            font-weight: 700;
          }
          p {
            margin: 0 0 16px;
            font-size: 0.85rem;
            color: var(--text-muted);
          }
          button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background: linear-gradient(to right, #f43f5e, #f97316);
            color: white;
            font-weight: 700;
            cursor: pointer;
            transition: opacity 0.2s;
            &:hover {
              opacity: 0.9;
            }
          }
        }
      }

      /* Main Area */
      .dashboard-main {
        display: flex;
        flex-direction: column;
        gap: 32px;
        overflow-y: auto;
        padding-right: 12px;
      }
      .dashboard-main::-webkit-scrollbar {
        width: 6px;
      }
      .dashboard-main::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
      }

      /* Topbar */
      .dashboard-topbar {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        padding: 24px 32px;
        border-radius: var(--radius-lg);

        .topbar-left {
          h2 {
            margin: 0 0 6px;
            font-size: 2rem;
            font-weight: 800;
          }
          p {
            margin: 0;
            color: var(--text-muted);
            font-size: 1.05rem;
          }
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 20px;

          .search-box {
            background: var(--bg-base);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-sm);
            padding: 0 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            width: 300px;
            transition: border-color 0.3s;
            &:focus-within {
              border-color: var(--accent-blue);
            }
            i {
              color: var(--text-faint);
            }
            input {
              background: transparent;
              border: none;
              color: white;
              padding: 12px 0;
              width: 100%;
              outline: none;
              font-family: inherit;
              font-size: 0.95rem;
              &::placeholder {
                color: var(--text-faint);
              }
            }
          }

          .icon-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 1px solid var(--border-subtle);
            background: transparent;
            color: var(--text-main);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            position: relative;
            transition: background 0.2s;
            &:hover {
              background: rgba(255, 255, 255, 0.05);
            }
            .dot-indicator {
              position: absolute;
              top: 12px;
              right: 14px;
              width: 6px;
              height: 6px;
              background: var(--accent-pink);
              border-radius: 50%;
              box-shadow: 0 0 8px var(--accent-pink);
            }
          }

          .avatar-profile {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid var(--bg-surface);
            box-shadow: 0 0 0 2px var(--accent-blue);
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }

      /* Metrics Row */
      .metrics-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .metric-card {
        background: var(--bg-surface);
        padding: 24px;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border-subtle);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          .title {
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--text-muted);
          }
          i {
            font-size: 1.25rem;
          }
        }

        .metric-value {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 8px;
          line-height: 1;
          .symbol {
            font-size: 1.5rem;
            color: var(--text-faint);
            margin-left: 4px;
          }
        }

        .metric-trend {
          font-size: 0.85rem;
          font-weight: 600;
          &.positive {
            color: var(--accent-green);
          }
        }

        &.chart-card {
          .fake-chart {
            height: 40px;
            margin-bottom: 12px;
          }
        }

        .neon-text-blue {
          color: var(--accent-blue);
          text-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
        }
        .neon-text-green {
          color: var(--accent-green);
          text-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
        }
        .neon-text-purple {
          color: var(--accent-purple);
          text-shadow: 0 0 12px rgba(168, 85, 247, 0.4);
        }
      }

      /* Components Grid */
      .components-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 24px;
        padding-bottom: 40px;
      }

      .comp-widget {
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-md);
        padding: 20px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
          .action-btn {
            background: var(--accent-blue);
            color: white;
            border-color: var(--accent-blue);
          }
        }

        .widget-header {
          display: flex;
          align-items: center;
          gap: 16px;
          .comp-icon {
            width: 48px;
            height: 48px;
            border-radius: var(--radius-sm);
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            font-weight: 800;
            color: var(--accent-blue);
          }
          .comp-info {
            flex: 1;
            h3 {
              margin: 0 0 4px;
              font-size: 1.1rem;
              font-weight: 700;
              color: var(--text-main);
            }
            .tag {
              font-size: 0.75rem;
              color: var(--text-faint);
              font-weight: 500;
            }
          }
          .action-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: transparent;
            border: 1px solid var(--border-subtle);
            color: var(--text-muted);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
          }
        }

        .widget-preview {
          height: 120px;
          border-radius: var(--radius-sm);
          background: var(--bg-base);
          border: 1px solid rgba(255, 255, 255, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-faint);
          overflow: hidden;
          pointer-events: none;
          svg {
            width: 100%;
            height: 100%;
            opacity: 0.7;
          }
        }
      }

      .empty-state {
        grid-column: 1 / -1;
        padding: 60px 0;
        text-align: center;
        i {
          font-size: 3rem;
          color: var(--text-faint);
          margin-bottom: 16px;
        }
        h3 {
          font-size: 1.5rem;
          margin: 0 0 8px;
        }
        p {
          color: var(--text-muted);
          margin: 0;
        }
      }

      /* Media Queries */
      @media (max-width: 1200px) {
        .dashboard-layout {
          grid-template-columns: 240px 1fr;
        }
        .metrics-row {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 900px) {
        .dashboard-layout {
          grid-template-columns: 1fr;
          height: auto;
        }
        .dashboard-sidebar {
          display: none;
        } /* Could add a hamburger menu logic for mobile */
        .dashboard-topbar .topbar-right .search-box {
          width: 200px;
        }
        .metrics-row {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ShowroomComponent implements OnInit {
  categories = categoryNavItems;
  activeCategoryId = signal<string>(this.categories[0]?.id || '');
  searchQuery = signal<string>('');

  totalCount = 0;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.totalCount = this.categories.reduce((acc, cat) => acc + (cat.children?.length || 0), 0);
  }

  activeCategory() {
    return this.categories.find((c) => c.id === this.activeCategoryId());
  }

  visibleComponents() {
    const query = this.searchQuery().toLowerCase();

    // If there's a search, check globally
    if (query) {
      let results: any[] = [];
      this.categories.forEach((cat) => {
        if (cat.children) {
          results = [
            ...results,
            ...cat.children.filter((c) => c.label.toLowerCase().includes(query)),
          ];
        }
      });
      return results;
    }

    // Otherwise return active category's children
    return this.activeCategory()?.children || [];
  }

  onSearch(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  getPreviewSvg(id: string): SafeHtml {
    // Invert the SVG preview color slightly for dark mode or just pass it as is
    const svg = COMPONENT_SVG_MAP[id] ?? COMPONENT_SVG_MAP['default'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  navigateTo(id: string) {
    this.router.navigate(['playground', id]);
  }
}
