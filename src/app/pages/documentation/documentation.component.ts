import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  ComponentDocsService,
  ComponentDocumentation,
} from '../../services/component-docs.service';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="docs-hub-wrapper animate-in">
      <!-- 🌟 Premium Search Hero -->
      <section class="hub-hero">
        <div class="hero-bg-accent"></div>
        <div class="hero-container">
          <div class="hero-content">
            <div class="hub-badge animate-slide-down">Enterprise Design System</div>
            <h1 class="animate-slide-up">Documentation <span class="text-gradient">Hub</span></h1>
            <p class="hero-lead animate-slide-up" style="animation-delay: 0.1s">
              Search the registry for components, utilities, and design guidelines. Built for speed,
              efficiency, and engineering excellence.
            </p>

            <!-- 🔍 High-Performance Hub Search -->
            <div class="hub-search-vessel animate-slide-up" style="animation-delay: 0.2s">
              <div class="search-input-group" [class.focused]="isSearchFocused()">
                <i class="fas fa-search search-icon"></i>
                <input
                  type="text"
                  placeholder="What are you looking for? (e.g. 'Table', 'Validation', 'Input')"
                  (input)="onSearchInput($event)"
                  (focus)="isSearchFocused.set(true)"
                  (blur)="isSearchFocused.set(false)"
                  #searchInput
                />
                <div class="search-kbd" *ngIf="!searchText()">⌘K</div>
                <button class="clear-btn" *ngIf="searchText()" (click)="clearSearch(searchInput)">
                  <i class="fas fa-times"></i>
                </button>
              </div>

              <div class="popular-searches" *ngIf="!searchText()">
                <span>Popular:</span>
                <button (click)="searchText.set('table')">Table</button>
                <button (click)="searchText.set('form')">Forms</button>
                <button (click)="searchText.set('navigation')">Navigation</button>
                <button (click)="searchText.set('overlay')">Overlays</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="hub-main-content">
        <!-- 🧭 Quick Access Navigation -->
        <nav class="hub-quick-nav animate-slide-up" style="animation-delay: 0.3s">
          <button
            class="nav-card"
            [class.active]="activeTab() === 'all'"
            (click)="activeTab.set('all')"
          >
            <div class="card-icon gradient-blue"><i class="fas fa-th-large"></i></div>
            <div class="card-text">
              <span class="title">All Components</span>
              <span class="count">{{ components().length }} Assets</span>
            </div>
          </button>

          <button
            class="nav-card"
            [class.active]="activeTab() === 'guides'"
            (click)="activeTab.set('guides')"
          >
            <div class="card-icon gradient-purple"><i class="fas fa-map"></i></div>
            <div class="card-text">
              <span class="title">Guides & Setup</span>
              <span class="count">3 Documentations</span>
            </div>
          </button>

          <button
            class="nav-card"
            [class.active]="activeTab() === 'utilities'"
            (click)="activeTab.set('utilities')"
          >
            <div class="card-icon gradient-green"><i class="fas fa-tools"></i></div>
            <div class="card-text">
              <span class="title">Design Tokens</span>
              <span class="count">12 Categories</span>
            </div>
          </button>
        </nav>

        <!-- 📄 Main Results Display -->
        <div class="results-viewer">
          <!-- 📚 Guides Logic -->
          <div
            class="guides-grid"
            *ngIf="activeTab() === 'guides' || (searchText() && filteredGuides().length > 0)"
          >
            <div class="section-heading" *ngIf="activeTab() === 'all'">Guides</div>
            <div
              class="guide-card glass-card"
              *ngFor="let guide of filteredGuides()"
              (click)="selectGuide(guide.id)"
            >
              <div class="guide-icon"><i [class]="guide.icon"></i></div>
              <div class="guide-info">
                <h3>{{ guide.title }}</h3>
                <p>{{ guide.desc }}</p>
              </div>
              <div class="guide-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>
          </div>

          <!-- 💎 Component Grid Logic -->
          <div
            class="components-section"
            *ngIf="activeTab() === 'all' || activeTab() === 'components' || searchText()"
          >
            <div class="section-heading">
              {{ searchText() ? 'Search Results' : 'Library Registry' }}
              <span class="results-count" *ngIf="searchText()"
                >({{ filteredComponents().length }} found)</span
              >
            </div>

            <div class="comp-hub-grid">
              <div
                class="comp-card glass-card animate-in"
                *ngFor="let comp of filteredComponents()"
                (click)="viewComponentDoc(comp.id)"
              >
                <div class="card-header">
                  <div class="comp-symbol">{{ comp.name.charAt(0) }}</div>
                  <div class="status-indicator">READY</div>
                </div>
                <div class="card-body">
                  <h3>{{ comp.name }}</h3>
                  <p>{{ comp.shortDescription }}</p>
                </div>
                <div class="card-footer">
                  <span class="tag">Standalone</span>
                  <div class="view-action">Explore <i class="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </div>

            <div class="empty-results" *ngIf="filteredComponents().length === 0 && searchText()">
              <div class="empty-icon"><i class="fas fa-ghost"></i></div>
              <h3>No components found</h3>
              <p>Try adjusting your search query or browse categories.</p>
              <button class="btn-reset" (click)="searchText.set('')">View All Components</button>
            </div>
          </div>

          <!-- 📂 Selected Guide Content (Standalone View) -->
          <div class="guide-content-viewer animate-slide-up" *ngIf="selectedGuideId()">
            <div class="viewer-header">
              <button class="back-link" (click)="selectedGuideId.set('')">
                <i class="fas fa-arrow-left"></i> Back to Hub
              </button>
              <div class="viewer-meta">Guide / {{ getSelectedGuide()?.title }}</div>
            </div>

            <article class="doc-article intro-view" *ngIf="selectedGuideId() === 'introduction'">
              <div class="article-header">
                <h2>Introduction</h2>
                <div class="separator-premium"></div>
              </div>
              <p class="lead-text">
                GROUND UI is an elite design system built on atomic principles, engineered for
                maximum performance and visual sophistication.
              </p>

              <div class="principle-grid">
                <div class="principle-card">
                  <i class="fas fa-microchip"></i>
                  <h4>Performance First</h4>
                  <p>Optimized for Core Web Vitals with zero overhead architectures.</p>
                </div>
                <div class="principle-card">
                  <i class="fas fa-universal-access"></i>
                  <h4>Accessible</h4>
                  <p>WCAG 2.1 compliant components that everyone can use intuitively.</p>
                </div>
                <div class="principle-card">
                  <i class="fas fa-sync"></i>
                  <h4>Consistent</h4>
                  <p>Shared tokens ensure every component feels like part of one family.</p>
                </div>
              </div>
            </article>

            <article class="doc-article" *ngIf="selectedGuideId() === 'installation'">
              <div class="article-header">
                <h2>Installation</h2>
                <div class="separator-premium"></div>
              </div>
              <div class="step-vessel">
                <div class="step-num-ring">01</div>
                <div class="step-detail">
                  <h3>Install Core Package</h3>
                  <div class="bash-container">
                    <code>npm install &#64;enterprise/ui-ground</code>
                    <button
                      class="copy-hint"
                      (click)="copyText('npm install @enterprise/ui-ground')"
                    >
                      <i class="far fa-copy"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="step-vessel">
                <div class="step-num-ring">02</div>
                <div class="step-detail">
                  <h3>Setup Styles</h3>
                  <p>Add the following to your global <code>styles.scss</code> file:</p>
                  <div class="bash-container">
                    <code>&#64;use "&#64;enterprise/ui-ground/theme";</code>
                  </div>
                </div>
              </div>
            </article>

            <article class="doc-article" *ngIf="selectedGuideId() === 'usage'">
              <div class="article-header">
                <h2>Basic Usage</h2>
                <div class="separator-premium"></div>
              </div>
              <div class="usage-pattern">
                <p>
                  GROUND components are standalone. Import only what you need to keep your bundles
                  lean.
                </p>
                <div class="pattern-code glass-card">
                  <pre><code>import {{ '{' }} UiButton {{ '}' }} from '&#64;enterprise/ui-ground';

&#64;Component({{ '{' }}
  selector: 'app-home',
  standalone: true,
  imports: [UiButton],
  template: \`&lt;ui-button variant="primary"&gt;Action&lt;/ui-button&gt;\`
{{ '}' }})</code></pre>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <footer class="hub-footer">
        <div class="footer-container">
          <div class="brand-group">
            <span class="brand-logo">GROUND</span>
            <span class="brand-sub">DESIGN SYSTEM</span>
          </div>
          <div class="footer-links">
            <a href="#">Support</a>
            <a href="#">Github</a>
            <a href="#">Changelog</a>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [
    `
      :host {
        --hub-primary: #3b82f6;
        --hub-gray: #f8fafc;
        --hub-border: #e2e8f0;
        --hub-text: #0f172a;
        display: block;
        background: #ffffff;
        min-height: 100vh;
      }

      .docs-hub-wrapper {
        position: relative;
      }

      /* 🏙️ Hero UI */
      .hub-hero {
        position: relative;
        background: radial-gradient(circle at top right, #f1f5f9, #ffffff);
        padding: 100px 2rem 80px;
        overflow: hidden;
        border-bottom: 1px solid var(--hub-border);
      }

      .hero-bg-accent {
        position: absolute;
        top: -200px;
        right: -100px;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
        pointer-events: none;
      }

      .hero-container {
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        z-index: 10;
      }

      .hub-badge {
        display: inline-block;
        padding: 0.4rem 1rem;
        background: #ffffff;
        border: 1px solid var(--hub-border);
        border-radius: 100px;
        font-size: 0.7rem;
        font-weight: 800;
        color: var(--hub-primary);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      }

      h1 {
        font-size: 4rem;
        font-weight: 950;
        letter-spacing: -0.05em;
        color: var(--hub-text);
        margin-bottom: 1.5rem;

        .text-gradient {
          background: linear-gradient(135deg, var(--hub-primary), #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .hero-lead {
        font-size: 1.25rem;
        color: #64748b;
        max-width: 700px;
        line-height: 1.6;
        margin-bottom: 3rem;
        font-weight: 500;
      }

      /* 🔍 Hub Search Bar */
      .hub-search-vessel {
        max-width: 800px;
      }

      .search-input-group {
        position: relative;
        background: #ffffff;
        border: 1px solid var(--hub-border);
        border-radius: 20px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &.focused {
          border-color: var(--hub-primary);
          box-shadow: 0 20px 30px -10px rgba(59, 130, 246, 0.15);
          transform: translateY(-2px);
        }

        .search-icon {
          padding: 0 1rem;
          color: #94a3b8;
          font-size: 1.1rem;
        }

        input {
          flex: 1;
          border: none;
          outline: none;
          padding: 1rem 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--hub-text);

          &::placeholder {
            color: #cbd5e1;
          }
        }

        .search-kbd {
          margin-right: 1rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: #94a3b8;
          padding: 0.25rem 0.5rem;
          background: #f1f5f9;
          border-radius: 6px;
        }

        .clear-btn {
          margin-right: 1rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #94a3b8;
          &:hover {
            color: var(--hub-text);
          }
        }
      }

      .popular-searches {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1.5rem;
        padding-left: 1rem;

        span {
          font-size: 0.8rem;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
        }

        button {
          background: transparent;
          border: none;
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748b;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          transition: all 0.2s;

          &:hover {
            background: #eff6ff;
            color: var(--hub-primary);
          }
        }
      }

      /* 🏛️ Main Content */
      .hub-main-content {
        max-width: 1200px;
        margin: -40px auto 100px;
        padding: 0 2rem;
        position: relative;
        z-index: 20;
      }

      /* 🧭 Navigation Cards */
      .hub-quick-nav {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-bottom: 4rem;
      }

      .nav-card {
        background: #ffffff;
        border: 1px solid var(--hub-border);
        border-radius: 24px;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        cursor: pointer;
        text-align: left;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
          border-color: var(--hub-primary);
        }

        &.active {
          background: #eff6ff;
          border-color: var(--hub-primary);
          box-shadow: inset 0 0 0 1px var(--hub-primary);

          .card-text .title {
            color: var(--hub-primary);
          }
        }

        .card-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          color: white;

          &.gradient-blue {
            background: linear-gradient(135deg, #3b82f6, #6366f1);
          }
          &.gradient-purple {
            background: linear-gradient(135deg, #a855f7, #ec4899);
          }
          &.gradient-green {
            background: linear-gradient(135deg, #10b981, #3b82f6);
          }
        }

        .card-text {
          display: flex;
          flex-direction: column;

          .title {
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--hub-text);
          }
          .count {
            font-size: 0.85rem;
            font-weight: 600;
            color: #64748b;
          }
        }
      }

      .section-heading {
        font-size: 1.5rem;
        font-weight: 900;
        color: var(--hub-text);
        letter-spacing: -0.02em;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;

        .results-count {
          font-size: 1rem;
          color: #94a3b8;
          font-weight: 500;
        }
      }

      .glass-card {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        border: 1px solid var(--hub-border);
        border-radius: 20px;
      }

      /* 📚 Guides UI */
      .guides-grid {
        margin-bottom: 4rem;
      }

      .guide-card {
        display: flex;
        align-items: center;
        padding: 1.5rem 2rem;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background: #f8fafc;
          transform: translateX(10px);
          border-color: var(--hub-primary);
        }

        .guide-icon {
          width: 48px;
          height: 48px;
          background: var(--hub-gray);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          color: var(--hub-primary);
          margin-right: 1.5rem;
        }

        .guide-info {
          flex: 1;
          h3 {
            font-size: 1.15rem;
            font-weight: 800;
            margin-bottom: 0.25rem;
            color: var(--hub-text);
          }
          p {
            font-size: 0.95rem;
            color: #64748b;
            margin: 0;
          }
        }

        .guide-arrow {
          color: #cbd5e1;
          font-size: 0.9rem;
        }
      }

      /* 💎 Component Cards */
      .comp-hub-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
      }

      .comp-card {
        padding: 1.75rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 100%;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          border-color: var(--hub-primary);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;

          .comp-symbol {
            width: 36px;
            height: 36px;
            background: #3b82f6;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            font-weight: 950;
            font-size: 0.8rem;
            box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
          }

          .status-indicator {
            font-size: 0.65rem;
            font-weight: 900;
            color: #10b981;
            letter-spacing: 0.05em;
            background: #ecfdf5;
            padding: 2px 8px;
            border-radius: 6px;
          }
        }

        .card-body {
          flex: 1;
          h3 {
            font-size: 1.25rem;
            font-weight: 850;
            color: var(--hub-text);
            margin-bottom: 0.75rem;
          }
          p {
            font-size: 0.9rem;
            color: #64748b;
            line-height: 1.5;
            margin: 0;
          }
        }

        .card-footer {
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;

          .tag {
            font-size: 0.7rem;
            font-weight: 800;
            color: #94a3b8;
            text-transform: uppercase;
          }
          .view-action {
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--hub-primary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
        }
      }

      /* 📄 Content Viewer */
      .guide-content-viewer {
        background: #ffffff;
        border: 1px solid var(--hub-border);
        border-radius: 2rem;
        padding: 3rem;
        box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.08);

        .viewer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--hub-border);

          .back-link {
            background: transparent;
            border: none;
            color: var(--hub-primary);
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            &:hover {
              transform: translateX(-4px);
            }
          }

          .viewer-meta {
            font-size: 0.8rem;
            font-weight: 800;
            color: #94a3b8;
            text-transform: uppercase;
          }
        }
      }

      .doc-article {
        h2 {
          font-size: 3rem;
          font-weight: 950;
          letter-spacing: -0.04em;
          margin-bottom: 1.5rem;
        }
        .separator-premium {
          width: 80px;
          height: 6px;
          background: var(--hub-primary);
          border-radius: 10px;
          margin-bottom: 3rem;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 3rem;
        }
      }

      /* Steps */
      .step-vessel {
        display: flex;
        gap: 2rem;
        margin-bottom: 4rem;

        .step-num-ring {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid var(--hub-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
          color: var(--hub-primary);
          flex-shrink: 0;
        }

        .step-detail {
          h3 {
            font-size: 1.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
          }
        }
      }

      .bash-container {
        background: #0f172a;
        padding: 1.5rem 2rem;
        border-radius: 16px;
        color: #38bdf8;
        font-family: var(--font-mono);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;

        .copy-hint {
          background: transparent;
          border: none;
          color: #64748b;
          cursor: pointer;
          &:hover {
            color: white;
          }
        }
      }

      /* Typography */
      .pattern-code pre {
        border-radius: 16px;
        padding: 2rem;
        margin: 0;
      }

      /* Results UI */
      .empty-results {
        padding: 100px 0;
        text-align: center;
        .empty-icon {
          font-size: 4rem;
          color: #e2e8f0;
          margin-bottom: 2rem;
        }
        h3 {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        p {
          color: #64748b;
          margin-bottom: 2rem;
        }
        .btn-reset {
          background: var(--hub-primary);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
        }
      }

      /* 👟 Transitions */
      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      /* Footer */
      .hub-footer {
        padding: 100px 2rem 60px;
        border-top: 1px solid var(--hub-border);
        background: #fafafa;

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand-group {
          display: flex;
          flex-direction: column;
          .brand-logo {
            font-size: 1.25rem;
            font-weight: 950;
            letter-spacing: 0.1em;
            color: #0f172a;
          }
          .brand-sub {
            font-size: 0.7rem;
            font-weight: 800;
            color: #94a3b8;
            letter-spacing: 0.2em;
          }
        }

        .footer-links {
          display: flex;
          gap: 2.5rem;
          a {
            font-size: 0.9rem;
            font-weight: 700;
            color: #64748b;
            text-decoration: none;
            &:hover {
              color: var(--hub-primary);
            }
          }
        }
      }

      @media (max-width: 768px) {
        h1 {
          font-size: 2.75rem;
        }
        .hub-quick-nav {
          grid-template-columns: 1fr;
        }
        .guide-card {
          flex-direction: column;
          text-align: center;
          .guide-icon {
            margin-right: 0;
            margin-bottom: 1rem;
          }
        }
      }
    `,
  ],
})
export class DocumentationComponent implements OnInit {
  searchText = signal('');
  isSearchFocused = signal(false);
  activeTab = signal<'all' | 'guides' | 'components' | 'utilities'>('all');
  selectedGuideId = signal<string>('');

  components = signal<ComponentDocumentation[]>([]);

  guides = [
    {
      id: 'introduction',
      title: 'Getting Started',
      desc: 'Design philosophy and core concepts',
      icon: 'fas fa-rocket',
    },
    {
      id: 'installation',
      title: 'Installation',
      desc: 'Step-by-step setup and dependencies',
      icon: 'fas fa-download',
    },
    {
      id: 'usage',
      title: 'Usage Guide',
      desc: 'Principles for implementing components',
      icon: 'fas fa-laptop-code',
    },
  ];

  filteredComponents = computed(() => {
    const list = this.components();
    const search = this.searchText().toLowerCase();
    if (!search) return list;

    return list.filter(
      (c) =>
        c.name.toLowerCase().includes(search) || c.shortDescription.toLowerCase().includes(search),
    );
  });

  filteredGuides = computed(() => {
    const search = this.searchText().toLowerCase();
    if (!search) return this.guides;
    return this.guides.filter(
      (g) => g.title.toLowerCase().includes(search) || g.desc.toLowerCase().includes(search),
    );
  });

  constructor(
    private router: Router,
    private componentDocsService: ComponentDocsService,
  ) {}

  ngOnInit() {
    this.components.set(this.componentDocsService.getAllComponents());
  }

  onSearchInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.searchText.set(val);
    if (val) this.selectedGuideId.set('');
  }

  clearSearch(input: HTMLInputElement) {
    input.value = '';
    this.searchText.set('');
    input.focus();
  }

  selectGuide(id: string) {
    this.selectedGuideId.set(id);
    this.activeTab.set('guides');
    window.scrollTo({ top: 500, behavior: 'smooth' });
  }

  getSelectedGuide() {
    return this.guides.find((g) => g.id === this.selectedGuideId());
  }

  viewComponentDoc(componentId: string) {
    this.router.navigate(['/component-documentation'], {
      queryParams: { component: componentId },
    });
  }

  async copyText(text: string) {
    await navigator.clipboard.writeText(text);
  }
}
