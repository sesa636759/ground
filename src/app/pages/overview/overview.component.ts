import { Component, signal, CUSTOM_ELEMENTS_SCHEMA, HostListener, computed } from '@angular/core';
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
      <!-- Background Ambient Glows -->
      <div class="ambient-glow glow-top-left"></div>
      <div class="ambient-glow glow-bottom-right"></div>
      <div class="grid-overlay"></div>

      <!-- Hero Header -->
      <header class="overview-header">
        <div class="header-content">
          <div class="badge-wrapper">
            <div class="enterprise-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <span>Enterprise Component Registry</span>
            </div>
          </div>

          <h1 class="hero-title">
            The Building Blocks of <br />
            <span class="text-gradient">Ground UI System</span>
          </h1>
          <p class="hero-subtitle">
            Explore {{ totalComponents }} meticulously crafted, fully responsive, and accessible
            components designed for scalable enterprise applications.
          </p>

          <div class="header-actions">
            <div class="search-box">
              <i class="search-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </i>
              <input
                type="text"
                placeholder="Search components, categories, or keywords..."
                [value]="searchQuery()"
                (input)="onSearchInput($event)"
              />
              <button class="clear-btn" *ngIf="searchQuery()" (click)="clearSearch()">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div class="view-toggle">
              <button
                class="toggle-btn"
                [class.active]="viewMode() === 'grid'"
                (click)="viewMode.set('grid')"
                title="Grid View"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button
                class="toggle-btn"
                [class.active]="viewMode() === 'list'"
                (click)="viewMode.set('list')"
                title="List View"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Layout -->
      <div class="overview-layout">
        <aside class="sidebar-nav">
          <div class="sidebar-inner glass-panel">
            <div class="sidebar-header">
              <h3>Directory</h3>
              <span class="count-badge">{{ filteredCategories().length }} Sets</span>
            </div>
            <nav class="category-menu">
              <button
                *ngFor="let category of filteredCategories()"
                class="menu-item"
                [class.active]="activeCategory() === category.id"
                (click)="scrollToCategory(category.id)"
              >
                <div class="menu-item-content">
                  <span class="menu-icon">{{ category.icon }}</span>
                  <span class="menu-label">{{ category.label }}</span>
                </div>
                <span class="menu-count" *ngIf="category.children?.length">{{
                  category.children?.length
                }}</span>
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
              <div class="category-title-wrapper">
                <span class="category-icon-large">{{ category.icon }}</span>
                <h2>{{ category.label }}</h2>
              </div>
              <div class="category-divider"></div>
            </div>

            <ng-masonry-grid
              [columns]="viewMode() === 'list' ? 1 : 3"
              gap="24px"
              [rowGap]="24"
              [breakpoints]="viewMode() === 'list' ? listBp : masonryBp"
            >
              <div
                *ngFor="let component of category.children"
                class="component-card glass-panel"
                [class.list-card]="viewMode() === 'list'"
                (click)="navigateToComponent(component.id)"
              >
                <!-- Card Glow Effect on Hover -->
                <div class="card-glow"></div>

                <div class="card-header">
                  <div class="comp-avatar">{{ component.label.charAt(0) }}</div>
                  <div class="comp-title-area">
                    <h3 class="comp-name">{{ component.label }}</h3>
                    <span class="comp-meta">{{ category.label }}</span>
                  </div>
                  <span *ngIf="component.badge" class="status-badge">{{ component.badge }}</span>
                </div>

                <div class="card-preview-container">
                  <div class="card-preview" [innerHTML]="getPreviewSvg(component.id)"></div>
                  <div class="preview-overlay">
                    <button class="explore-btn">
                      <span>Explore Demo</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="card-footer">
                  <p class="card-description">{{ getComponentDescription(component.id) }}</p>
                </div>
              </div>
            </ng-masonry-grid>
          </div>

          <!-- Empty State -->
          <div *ngIf="filteredCategories().length === 0" class="empty-state glass-panel">
            <div class="empty-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.3-4.3"></path>
                <line x1="9" y1="11" x2="13" y2="11"></line>
                <line x1="11" y1="9" x2="11" y2="13"></line>
              </svg>
            </div>
            <h3>No matching components</h3>
            <p>
              We couldn't find anything matching "<strong>{{ searchQuery() }}</strong
              >". <br />
              Try adjusting your search terms or filters.
            </p>
            <button class="reset-btn" (click)="clearSearch()">Clear Search</button>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

      :host {
        /* Enterprise Dark Palette */
        --bg-base: #030712; /* deepest gray almost black */
        --bg-glass: rgba(17, 24, 39, 0.6);
        --bg-glass-hover: rgba(31, 41, 55, 0.7);

        --text-pure: #ffffff;
        --text-primary: #f3f4f6;
        --text-secondary: #9ca3af;
        --text-muted: #6b7280;

        --accent-primary: #6366f1; /* Indigo */
        --accent-secondary: #8b5cf6; /* Violet */
        --accent-tertiary: #ec4899; /* Pink */

        --border-subtle: rgba(255, 255, 255, 0.08);
        --border-focus: rgba(99, 102, 241, 0.5);

        --gradient-text: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
        --gradient-glow: conic-gradient(
          from 180deg at 50% 50%,
          #6366f1 0deg,
          #8b5cf6 180deg,
          #3b82f6 360deg
        );

        font-family: 'Plus Jakarta Sans', sans-serif;
        display: block;
        height: 100%;
      }

      * {
        box-sizing: border-box;
      }

      .overview-container {
        min-height: 100vh;
        background-color: var(--bg-base);
        color: var(--text-primary);
        position: relative;
        overflow-x: hidden;
      }

      /* Ambient Effects */
      .ambient-glow {
        position: absolute;
        width: 800px;
        height: 800px;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.15;
        pointer-events: none;
        z-index: 0;
      }
      .glow-top-left {
        top: -400px;
        left: -200px;
        background: radial-gradient(circle, var(--accent-primary) 0%, transparent 60%);
      }
      .glow-bottom-right {
        bottom: -200px;
        right: -100px;
        background: radial-gradient(circle, var(--accent-tertiary) 0%, transparent 60%);
      }

      .grid-overlay {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 64px 64px;
        mask-image: linear-gradient(to bottom, black 20%, transparent 90%);
        -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 90%);
        pointer-events: none;
        z-index: 1;
      }

      /* Reusable Glass Panel */
      .glass-panel {
        background: var(--bg-glass);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--border-subtle);
        border-radius: 24px;
        box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.2);
      }

      /* Header */
      .overview-header {
        position: relative;
        z-index: 10;
        padding: 100px 40px 60px;
        text-align: center;
      }

      .header-content {
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .badge-wrapper {
        margin-bottom: 24px;
        padding: 1px;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(236, 72, 153, 0.1));
        border-radius: 100px;
      }

      .enterprise-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(17, 24, 39, 0.9);
        padding: 6px 16px;
        border-radius: 100px;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: var(--text-primary);
        text-transform: uppercase;
      }

      .enterprise-badge svg {
        color: var(--accent-primary);
      }

      .hero-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.02em;
        margin: 0 0 24px;
        color: var(--text-pure);
      }

      .text-gradient {
        background: var(--gradient-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero-subtitle {
        font-size: 1.15rem;
        color: var(--text-secondary);
        max-width: 680px;
        margin: 0 0 48px;
        line-height: 1.6;
      }

      /* Search & Controls */
      .header-actions {
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
        max-width: 700px;
      }

      .search-box {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        background: rgba(17, 24, 39, 0.8);
        border: 1px solid var(--border-subtle);
        border-radius: 16px;
        padding: 4px;
        transition: all 0.3s ease;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
      }

      .search-box:focus-within {
        border-color: var(--border-focus);
        box-shadow:
          0 0 0 4px rgba(99, 102, 241, 0.1),
          0 8px 32px rgba(0, 0, 0, 0.3);
      }

      .search-icon {
        padding: 0 16px;
        color: var(--text-muted);
        display: flex;
        align-items: center;
      }

      .search-box input {
        flex: 1;
        background: transparent;
        border: none;
        color: var(--text-pure);
        font-size: 1.05rem;
        padding: 12px 0;
        font-family: inherit;
        outline: none;
      }

      .search-box input::placeholder {
        color: var(--text-muted);
      }

      .clear-btn {
        background: transparent;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        transition: color 0.2s;
      }
      .clear-btn:hover {
        color: var(--text-pure);
      }

      .view-toggle {
        display: flex;
        background: rgba(17, 24, 39, 0.8);
        border: 1px solid var(--border-subtle);
        border-radius: 16px;
        padding: 4px;
        backdrop-filter: blur(10px);
      }

      .toggle-btn {
        background: transparent;
        border: none;
        color: var(--text-muted);
        width: 44px;
        height: 44px;
        border-radius: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
      }

      .toggle-btn:hover {
        color: var(--text-primary);
        background: rgba(255, 255, 255, 0.05);
      }

      .toggle-btn.active {
        background: var(--bg-glass-hover);
        color: var(--accent-primary);
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
      }

      /* Layout */
      .overview-layout {
        position: relative;
        z-index: 10;
        display: flex;
        align-items: flex-start;
        gap: 40px;
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 40px 100px;
      }

      /* Sidebar */
      .sidebar-nav {
        flex: 0 0 280px;
        position: sticky;
        top: 40px;
      }

      .sidebar-inner {
        padding: 24px;
      }

      .sidebar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--border-subtle);
      }

      .sidebar-header h3 {
        margin: 0;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-secondary);
        font-weight: 700;
      }

      .count-badge {
        background: rgba(255, 255, 255, 0.05);
        padding: 4px 10px;
        border-radius: 100px;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--text-muted);
        border: 1px solid var(--border-subtle);
      }

      .category-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .menu-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px 16px;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 14px;
        color: var(--text-secondary);
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: inherit;
      }

      .menu-item-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .menu-icon {
        font-size: 1.1rem;
        opacity: 0.7;
        transition: transform 0.2s;
      }

      .menu-label {
        font-weight: 600;
        font-size: 0.95rem;
      }

      .menu-count {
        font-size: 0.75rem;
        font-weight: 700;
        background: rgba(0, 0, 0, 0.3);
        padding: 2px 8px;
        border-radius: 100px;
        border: 1px solid rgba(255, 255, 255, 0.05);
      }

      .menu-item:hover {
        background: rgba(255, 255, 255, 0.03);
        color: var(--text-primary);
      }

      .menu-item:hover .menu-icon {
        transform: scale(1.1);
        opacity: 1;
      }

      .menu-item.active {
        background: rgba(99, 102, 241, 0.1);
        border-color: rgba(99, 102, 241, 0.2);
        color: var(--text-pure);
      }

      .menu-item.active .menu-icon {
        opacity: 1;
      }

      .menu-item.active .menu-count {
        background: var(--accent-primary);
        color: white;
        border-color: transparent;
      }

      /* Content Area */
      .overview-content {
        flex: 1;
        min-width: 0;
      }

      .category-section {
        margin-bottom: 80px;
        scroll-margin-top: 40px;
      }

      .category-header {
        margin-bottom: 32px;
      }

      .category-title-wrapper {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
      }

      .category-icon-large {
        font-size: 2rem;
        background: rgba(255, 255, 255, 0.05);
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        border: 1px solid var(--border-subtle);
      }

      .category-title-wrapper h2 {
        font-size: 2rem;
        font-weight: 800;
        margin: 0;
        color: var(--text-pure);
        letter-spacing: -0.02em;
      }

      .category-divider {
        height: 1px;
        background: linear-gradient(90deg, var(--border-subtle), transparent);
        width: 100%;
      }

      /* Component Grid Cards */
      .component-card {
        padding: 20px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transition:
          transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
          box-shadow 0.3s;
        position: relative;
        overflow: hidden;
      }

      .card-glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
      }

      .component-card:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 255, 255, 0.15);
        box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.5);
      }

      .component-card:hover .card-glow {
        opacity: 1;
      }

      .card-header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 20px;
        position: relative;
        z-index: 2;
      }

      .comp-avatar {
        width: 44px;
        height: 44px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02));
        border: 1px solid var(--border-subtle);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: 800;
        color: var(--text-pure);
      }

      .comp-title-area {
        flex: 1;
      }

      .comp-name {
        margin: 0 0 4px;
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--text-pure);
      }

      .comp-meta {
        font-size: 0.8rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 600;
      }

      .status-badge {
        background: rgba(16, 185, 129, 0.1);
        color: #34d399;
        border: 1px solid rgba(16, 185, 129, 0.2);
        padding: 4px 10px;
        border-radius: 100px;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      .card-preview-container {
        position: relative;
        height: 160px;
        border-radius: 16px;
        margin-bottom: 20px;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid var(--border-subtle);
        z-index: 2;
      }

      .card-preview {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
        transition:
          opacity 0.3s ease,
          filter 0.3s ease;
        filter: grayscale(1);
      }

      .card-preview svg {
        width: 80%;
        height: 80%;
      }

      .component-card:hover .card-preview {
        opacity: 0.9;
        filter: grayscale(0);
      }

      .preview-overlay {
        position: absolute;
        inset: 0;
        background: rgba(3, 7, 18, 0.7);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .component-card:hover .preview-overlay {
        opacity: 1;
      }

      .explore-btn {
        background: var(--text-pure);
        color: var(--bg-base);
        border: none;
        padding: 10px 20px;
        border-radius: 100px;
        font-weight: 700;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        transform: translateY(10px);
        transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .component-card:hover .explore-btn {
        transform: translateY(0);
      }

      .card-footer {
        position: relative;
        z-index: 2;
      }

      .card-description {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* List View Adjustments */
      .list-card {
        flex-direction: row;
        align-items: center;
        padding: 16px 24px;
        gap: 24px;
      }

      .list-card .card-preview-container {
        display: none;
      }

      .list-card .card-header {
        margin-bottom: 0;
        width: 300px;
      }

      .list-card .card-footer {
        flex: 1;
      }

      .list-card .card-description {
        -webkit-line-clamp: 1;
      }

      /* Empty State */
      .empty-state {
        padding: 80px 40px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 600px;
        margin: 40px auto;
      }

      .empty-icon {
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-muted);
        margin-bottom: 24px;
        border: 1px solid var(--border-subtle);
      }

      .empty-state h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-pure);
        margin: 0 0 12px;
      }

      .empty-state p {
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0 0 32px;
      }

      .reset-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid var(--border-subtle);
        color: var(--text-pure);
        padding: 12px 24px;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }

      .reset-btn:hover {
        background: rgba(255, 255, 255, 0.15);
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .overview-layout {
          flex-direction: column;
          padding: 0 24px 80px;
        }

        .sidebar-nav {
          width: 100%;
          position: relative;
          top: 0;
        }

        .sidebar-inner {
          padding: 16px;
        }

        .category-menu {
          flex-direction: row;
          overflow-x: auto;
          padding-bottom: 8px;
        }

        .menu-item {
          width: auto;
          white-space: nowrap;
        }

        .sidebar-header {
          display: none;
        }
      }

      @media (max-width: 768px) {
        .overview-header {
          padding: 60px 24px 40px;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .header-actions {
          flex-direction: column;
        }

        .view-toggle {
          width: 100%;
          justify-content: center;
        }
      }
    `,
  ],
})
export class OverviewComponent {
  categories = categoryNavItems;
  searchQuery = signal<string>('');
  viewMode = signal<'grid' | 'list'>('grid');
  activeCategory = signal<string>(this.categories[0]?.id || '');

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

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
  ) {}

  @HostListener('window:scroll')
  onScroll() {
    const currentScrollPos = window.scrollY + 200; // Trigger offset
    const activeData = this.filteredCategories();

    // Find section closest to top
    for (let i = activeData.length - 1; i >= 0; i--) {
      const category = activeData[i];
      const element = document.getElementById('cat-' + category.id);
      if (element && element.offsetTop <= currentScrollPos) {
        if (this.activeCategory() !== category.id) {
          this.activeCategory.set(category.id);
        }
        break;
      }
    }
  }

  scrollToCategory(id: string) {
    this.activeCategory.set(id);
    const element = document.getElementById('cat-' + id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Accounts for sticky headers/spacing
        behavior: 'smooth',
      });
    }
  }

  getPreviewSvg(id: string): SafeHtml {
    const svg = COMPONENT_SVG_MAP[id] ?? COMPONENT_SVG_MAP['default'];
    // Ensures SVG fits properly in preview box by removing predefined sizing limits
    const cleanedSvg = svg
      ?.replace(/width="[0-9]+"/, 'width="100%"')
      .replace(/height="[0-9]+"/, 'height="100%"');
    return this.sanitizer.bypassSecurityTrustHtml(cleanedSvg || '');
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
    this.router.navigate(['playground', componentId]);
  }

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  clearSearch() {
    this.searchQuery.set('');
  }
}
