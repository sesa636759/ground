import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-navigation-playground',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-page">
      <div class="playground-header">
        <h2>UI Navigation</h2>
        <p>
          A flexible navigation component with support for categories, items, badges, and icons.
        </p>
      </div>

      <!-- Live Demo -->
      <div class="demo-section">
        <div class="section-title">
          <h3>Live Demo</h3>
          <div class="demo-controls">
            <button class="btn-control" (click)="toggleTheme()">
              {{ currentTheme() === 'dark' ? '🌙 Dark' : '☀️ Light' }}
            </button>
            <button class="btn-control" (click)="toggleSearch()">
              {{ showSearch() ? '🔍 Hide Search' : '🔍 Show Search' }}
            </button>
          </div>
        </div>

        <div class="demo-container">
          <ui-navigation
            [categories]="demoCategories"
            [items]="demoItems"
            [bottomItems]="demoBottomItems"
            [theme]="currentTheme()"
            [show-search]="showSearch()"
            width="280px"
            [max-items]="7"
          >
          </ui-navigation>
        </div>
      </div>

      <!-- Props Documentation -->
      <div class="docs-section">
        <h3>Properties</h3>
        <div class="props-table">
          <div class="prop-row">
            <div class="prop-name">categories</div>
            <div class="prop-type">Array</div>
            <div class="prop-desc">Top-level navigation items (typically Home, Overview, etc.)</div>
          </div>
          <div class="prop-row">
            <div class="prop-name">items</div>
            <div class="prop-type">Array</div>
            <div class="prop-desc">
              Main navigation items with optional children for nested menus
            </div>
          </div>
          <div class="prop-row">
            <div class="prop-name">bottomItems</div>
            <div class="prop-type">Array</div>
            <div class="prop-desc">Items displayed at the bottom of the navigation</div>
          </div>
          <div class="prop-row">
            <div class="prop-name">theme</div>
            <div class="prop-type">String</div>
            <div class="prop-desc">Theme mode: 'light', 'dark', or 'auto'</div>
          </div>
          <div class="prop-row">
            <div class="prop-name">show-search</div>
            <div class="prop-type">Boolean</div>
            <div class="prop-desc">Show or hide the search input</div>
          </div>
          <div class="prop-row">
            <div class="prop-name">width</div>
            <div class="prop-type">String</div>
            <div class="prop-desc">Width of the navigation sidebar (e.g., '280px')</div>
          </div>
        </div>
      </div>

      <!-- Events Documentation -->
      <div class="docs-section">
        <h3>Events</h3>
        <div class="props-table">
          <div class="prop-row">
            <div class="prop-name">navItemClick</div>
            <div class="prop-type">CustomEvent</div>
            <div class="prop-desc">
              Fired when a navigation item is clicked. Returns item details in event.detail
            </div>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div class="docs-section">
        <h3>Usage Example</h3>
        <div class="code-block">
          <pre><code>&lt;ui-navigation
  [categories]="topItems"
  [items]="mainItems"
  [bottomItems]="bottomItems"
  theme="dark"
  [show-search]="true"
  width="280px"
  (navItemClick)="handleNavClick($event)"&gt;
&lt;/ui-navigation&gt;</code></pre>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .playground-page {
        padding: 0;
      }

      .playground-header {
        margin-bottom: 40px;

        h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
        }

        p {
          color: #94a3b8;
          font-size: 1.1rem;
          line-height: 1.6;
        }
      }

      .demo-section {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        padding: 32px;
        margin-bottom: 32px;

        .section-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;

          h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin: 0;
          }

          .demo-controls {
            display: flex;
            gap: 12px;
          }

          .btn-control {
            padding: 10px 20px;
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 10px;
            color: #818cf8;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background: rgba(99, 102, 241, 0.2);
            }
          }
        }

        .demo-container {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 40px;
          display: flex;
          justify-content: center;
          min-height: 500px;

          ui-navigation {
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
            border-radius: 16px;
            overflow: hidden;
          }
        }
      }

      .docs-section {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        padding: 32px;
        margin-bottom: 32px;

        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 24px;
        }

        .props-table {
          display: flex;
          flex-direction: column;
          gap: 16px;

          .prop-row {
            display: grid;
            grid-template-columns: 200px 120px 1fr;
            gap: 24px;
            padding: 16px;
            background: rgba(15, 23, 42, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;

            .prop-name {
              color: #818cf8;
              font-weight: 600;
              font-family: 'Courier New', monospace;
            }

            .prop-type {
              color: #34d399;
              font-weight: 600;
              font-size: 0.9rem;
            }

            .prop-desc {
              color: #cbd5e1;
              line-height: 1.6;
            }
          }
        }

        .code-block {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 24px;
          overflow-x: auto;

          pre {
            margin: 0;

            code {
              color: #cbd5e1;
              font-family: 'Courier New', monospace;
              font-size: 0.9rem;
              line-height: 1.6;
            }
          }
        }
      }

      @media (max-width: 768px) {
        .demo-section .section-title {
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .docs-section .props-table .prop-row {
          grid-template-columns: 1fr;
          gap: 8px;
        }
      }
    `,
  ],
})
export class UiNavigationPlayground {
  currentTheme = signal('dark');
  showSearch = signal(true);

  demoCategories = [
    {
      id: 'home',
      label: 'Home',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      badge: '3',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
    },
  ];

  demoItems = [
    {
      id: 'components',
      label: 'Components',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
      children: [
        { id: 'buttons', label: 'Buttons' },
        { id: 'inputs', label: 'Inputs' },
        { id: 'cards', label: 'Cards', badge: 'New' },
      ],
    },
    {
      id: 'pages',
      label: 'Pages',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
      children: [
        { id: 'landing', label: 'Landing' },
        { id: 'about', label: 'About' },
      ],
    },
  ];

  demoBottomItems = [
    {
      id: 'settings',
      label: 'Settings',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6M5.6 5.6l4.3 4.3m4.2 4.2l4.3 4.3M1 12h6m6 0h6M5.6 18.4l4.3-4.3m4.2-4.2l4.3-4.3"></path></svg>',
      badge: '1',
    },
  ];

  toggleTheme() {
    this.currentTheme.set(this.currentTheme() === 'dark' ? 'light' : 'dark');
  }

  toggleSearch() {
    this.showSearch.set(!this.showSearch());
  }
}
