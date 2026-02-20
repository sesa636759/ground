import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  signal,
  computed,
  AfterViewInit,
  OnDestroy,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  ComponentDocsService,
  ComponentDocumentation,
  ComponentProp,
} from '../../services/component-docs.service';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="docs-wrapper animate-in" [class.embedded]="isEmbedded">
      <div class="docs-container" *ngIf="componentDoc">
        <!-- Sticky Navigation (Aside for desktop, mini-nav for embedded/mobile) -->
        <aside class="docs-nav-aside" *ngIf="!isEmbedded">
          <nav class="sticky-nav">
            <div class="nav-header">Jump to Section</div>
            <ul>
              <li *ngFor="let section of sections">
                <a
                  (click)="scrollTo(section.id)"
                  class="nav-link"
                  [class.active]="activeSection() === section.id"
                >
                  <i [class]="section.icon"></i>
                  <span>{{ section.label }}</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- Embedded Mini-Nav (Horizontal) -->
        <nav class="embedded-mini-nav animate-slide-down" *ngIf="isEmbedded">
          <div class="mini-nav-inner">
            <a
              *ngFor="let section of sections"
              (click)="scrollTo(section.id)"
              class="mini-link"
              [class.active]="activeSection() === section.id"
            >
              <i [class]="section.icon"></i>
              <span>{{ section.label }}</span>
            </a>
          </div>
        </nav>

        <!-- Main Content Area -->
        <main class="docs-main-content">
          <!-- Hero Header (Desktop Only) -->
          <header class="docs-header" *ngIf="!isEmbedded">
            <div class="header-inner">
              <div class="breadcrumb-mini">Components / API</div>
              <div class="title-row">
                <h1>{{ componentDoc.name }}</h1>
                <div class="version-tag">STABLE</div>
              </div>
              <p class="lead-text">{{ componentDoc.shortDescription }}</p>
            </div>
            <div class="header-decoration"></div>
          </header>

          <div class="docs-sections">
            <!-- Overview Section -->
            <section [id]="getSectionId('overview')" class="doc-section hero-section">
              <div class="section-title">
                <div class="icon-orb"><i class="fas fa-rocket"></i></div>
                <div class="title-text">
                  <h2>Overview</h2>
                  <p>Core functionality and conceptual overview</p>
                </div>
              </div>
              <div class="glass-card overview-content">
                <p class="description-text">{{ componentDoc.detailedDescription }}</p>
              </div>
            </section>

            <!-- Usage Section -->
            <section [id]="getSectionId('usage')" class="doc-section">
              <div class="section-title">
                <div class="icon-orb secondary"><i class="fas fa-terminal"></i></div>
                <div class="title-text">
                  <h2>Quick Start</h2>
                  <p>Basic implementation and markup</p>
                </div>
              </div>
              <ui-code-preview
                [htmlCode]="componentDoc.usage"
                [label]="componentDoc.name + ' Basic Implementation'"
                activeLang="html"
                expanded="true"
              ></ui-code-preview>
            </section>

            <!-- Props Section -->
            <section
              [id]="getSectionId('properties')"
              class="doc-section"
              *ngIf="componentDoc.props.length > 0"
            >
              <div class="section-title">
                <div class="icon-orb success"><i class="fas fa-sliders-h"></i></div>
                <div class="title-text">
                  <h2>Properties</h2>
                  <p>Configurable inputs and attributes</p>
                </div>
              </div>

              <div class="table-controls" *ngIf="componentDoc.props.length > 5">
                <div class="search-box">
                  <i class="fas fa-search"></i>
                  <input
                    type="text"
                    placeholder="Filter properties..."
                    (input)="filterText.set($any($event.target).value)"
                  />
                </div>
              </div>

              <div class="props-grid-container glass-card">
                <div class="props-table-header">
                  <div class="col-prop">Member</div>
                  <div class="col-type">Type</div>
                  <div class="col-default">Default</div>
                  <div class="col-desc">Description</div>
                </div>
                <div class="props-table-body">
                  <div class="props-row" *ngFor="let prop of filteredProps()">
                    <div class="col-prop">
                      <div class="prop-id-group">
                        <span class="prop-name">{{ prop.name }}</span>
                        <button
                          class="copy-tiny"
                          (click)="copyText(prop.name)"
                          title="Copy property name"
                        >
                          <i class="far fa-copy"></i>
                        </button>
                      </div>
                      <span class="required-indicator" *ngIf="prop.required">Required</span>
                    </div>
                    <div class="col-type">
                      <code class="type-pill">{{ prop.type }}</code>
                    </div>
                    <div class="col-default">
                      <code class="default-pill" *ngIf="prop.defaultValue">{{
                        prop.defaultValue
                      }}</code>
                      <span class="no-default" *ngIf="!prop.defaultValue">—</span>
                    </div>
                    <div class="col-desc">{{ prop.description }}</div>
                  </div>
                  <div class="empty-filter" *ngIf="filteredProps().length === 0">
                    No properties match your filter.
                  </div>
                </div>
              </div>
            </section>

            <!-- Events Section -->
            <section
              [id]="getSectionId('events')"
              class="doc-section"
              *ngIf="componentDoc.events.length > 0"
            >
              <div class="section-title">
                <div class="icon-orb warning"><i class="fas fa-broadcast-tower"></i></div>
                <div class="title-text">
                  <h2>Events</h2>
                  <p>Custom outputs and event emitters</p>
                </div>
              </div>
              <div class="events-stack">
                <div class="event-entry glass-card" *ngFor="let event of componentDoc.events">
                  <div class="event-main">
                    <div class="event-name-group">
                      <span class="event-symbol">(</span>
                      <span class="event-name">{{ event.name }}</span>
                      <span class="event-symbol">)</span>
                    </div>
                    <p class="event-desc">{{ event.description }}</p>
                  </div>
                  <div class="event-payload" *ngIf="event.payloadType">
                    <div class="payload-label">Payload Type</div>
                    <code class="payload-type">{{ event.payloadType }}</code>
                    <p class="payload-desc" *ngIf="event.payloadDescription">
                      {{ event.payloadDescription }}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Considerations Section -->
            <section
              [id]="getSectionId('limitations')"
              class="doc-section"
              *ngIf="componentDoc.limitations.length > 0"
            >
              <div class="section-title">
                <div class="icon-orb danger"><i class="fas fa-shield-alt"></i></div>
                <div class="title-text">
                  <h2>Considerations</h2>
                  <p>Best practices and versioning notes</p>
                </div>
              </div>
              <div class="considerations-card">
                <ul class="checklist">
                  <li *ngFor="let limitation of componentDoc.limitations">
                    <i class="fas fa-check-circle"></i>
                    <span>{{ limitation }}</span>
                  </li>
                </ul>
              </div>
            </section>

            <!-- Advanced Examples -->
            <section
              [id]="getSectionId('examples')"
              class="doc-section"
              *ngIf="componentDoc.examples && componentDoc.examples.length > 0"
            >
              <div class="section-title">
                <div class="icon-orb info"><i class="fas fa-puzzle-piece"></i></div>
                <div class="title-text">
                  <h2>Implementation Patterns</h2>
                  <p>Common real-world usage scenarios</p>
                </div>
              </div>
              <div class="patterns-grid">
                <div
                  class="pattern-card"
                  *ngFor="let example of componentDoc.examples; let i = index"
                >
                  <div class="pattern-header">
                    <span class="pattern-number">0{{ i + 1 }}</span>
                    <h3>Pattern Variation</h3>
                  </div>
                  <ui-code-preview
                    [htmlCode]="example"
                    [label]="'Composition Example ' + (i + 1)"
                    activeLang="html"
                    expanded="true"
                  ></ui-code-preview>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <!-- Empty State -->
      <div class="no-docs-empty" *ngIf="!componentDoc">
        <div class="empty-state-card glass-card">
          <div class="empty-icon"><i class="fas fa-compass"></i></div>
          <h3>API Specification Missing</h3>
          <p>
            We couldn't locate the documentation metadata for
            <strong>{{ componentId || 'unknown' }}</strong
            >.
          </p>
          <button (click)="goBack()" class="btn-primary">Return to Library</button>
        </div>
      </div>

      <!-- Back to Top -->
      <button class="back-to-top" [class.show]="showScrollTop()" (click)="scrollToTop()">
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: #fdfdfd;
        --p-docs: #3b82f6;
        --p-docs-light: #eff6ff;
        --p-docs-dark: #1e3a8a;
      }

      .docs-wrapper {
        max-width: 1440px;
        margin: 0 auto;
        position: relative;
        padding-bottom: 100px;
      }

      .docs-container {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 3rem;
        padding: 3rem 2rem;
      }

      /* Sticky Nav Sidebar */
      .docs-nav-aside {
        @media (max-width: 1024px) {
          display: none;
        }
      }

      .sticky-nav {
        position: sticky;
        top: 2rem;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(12px);
        border: 1px solid var(--border-color);
        border-radius: 1.5rem;
        padding: 1.5rem 1rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

        .nav-header {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-tertiary);
          margin-bottom: 1.25rem;
          padding-left: 0.75rem;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1rem;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 2px;

          i {
            font-size: 1rem;
            width: 20px;
            opacity: 0.6;
          }

          &:hover {
            color: var(--p-docs);
            background: var(--p-docs-light);
            i {
              opacity: 1;
            }
          }

          &.active {
            color: white;
            background: var(--p-docs);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
            i {
              opacity: 1;
            }
          }
        }
      }

      /* Embedded Mini-Nav */
      .embedded-mini-nav {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--border-color);
        padding: 0.75rem 1.5rem;
        margin-bottom: 2rem;
        margin-left: -4rem;
        margin-right: -4rem;
        margin-top: -4rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

        /* Improved pill styling */
        .mini-nav-inner {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 0.25rem;
          background: #f1f5f9; /* Light gray background for pill container */
          border-radius: 12px;
          border: 1px solid #e2e8f0;

          &::-webkit-scrollbar {
            display: none;
          }
        }

        .mini-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
          font-size: 0.85rem;
          font-weight: 600;
          color: #64748b;
          padding: 0.5rem 1rem;
          cursor: pointer;
          border-radius: 8px; /* Rounded pill shape */
          border: 1px solid transparent; /* Prepare for border transition */
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

          i {
            font-size: 0.9rem;
            opacity: 0.7;
          }

          &:hover {
            color: #0f172a;
            background: rgba(255, 255, 255, 0.6);
          }

          &.active {
            color: #2563eb; /* Primary blue */
            background: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            border-color: #e2e8f0;
            font-weight: 700;

            i {
              opacity: 1;
              color: #2563eb;
            }
          }
        }
      }

      /* Hero Header */
      .docs-header {
        position: relative;
        margin-bottom: 4rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid var(--border-color);

        .breadcrumb-mini {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--p-docs);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        h1 {
          font-size: 4rem;
          font-weight: 950;
          letter-spacing: -0.05em;
          color: #0f172a;
          margin: 0;
        }

        .version-tag {
          background: #f1f5f9;
          color: #475569;
          font-size: 0.65rem;
          font-weight: 900;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          letter-spacing: 0.05em;
          border: 1px solid #e2e8f0;
        }

        .lead-text {
          font-size: 1.35rem;
          color: #475569;
          max-width: 900px;
          line-height: 1.6;
          font-weight: 500;
        }
      }

      /* Section Common */
      .doc-section {
        margin-bottom: 6rem;
        scroll-margin-top: 5rem;
      }

      .section-title {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2.5rem;

        .icon-orb {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          background: var(--p-docs-light);
          color: var(--p-docs);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

          &.secondary {
            background: #fdf2f8;
            color: #db2777;
          }
          &.success {
            background: #f0fdf4;
            color: #16a34a;
          }
          &.warning {
            background: #fffbeb;
            color: #d97706;
          }
          &.danger {
            background: #fef2f2;
            color: #dc2626;
          }
          &.info {
            background: #f0f9ff;
            color: #0284c7;
          }
        }

        h2 {
          font-size: 1.85rem;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin: 0;
        }

        p {
          margin: 0;
          font-size: 0.95rem;
          color: #64748b;
          font-weight: 500;
        }
      }

      .glass-card {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
        border: 1px solid var(--border-color);
        border-radius: 1.5rem;
        padding: 2.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.02);
      }

      .description-text {
        font-size: 1.15rem;
        line-height: 1.8;
        color: #334155;
      }

      /* Property Controls */
      .table-controls {
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: flex-end;

        .search-box {
          position: relative;
          width: 300px;

          i {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
          }

          input {
            width: 100%;
            padding: 0.75rem 1rem 0.75rem 2.75rem;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            font-size: 0.9rem;
            font-weight: 600;
            outline: none;
            transition: all 0.2s;

            &:focus {
              border-color: var(--p-docs);
              box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
            }
          }
        }
      }

      /* Properties Table */
      .props-grid-container {
        padding: 0;
        overflow: hidden;
      }

      .props-table-header {
        display: grid;
        grid-template-columns: 240px 180px 150px 1fr;
        padding: 1.25rem 2rem;
        background: #f8fafc;
        border-bottom: 1px solid var(--border-color);
        font-weight: 800;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #475569;
      }

      .props-row {
        display: grid;
        grid-template-columns: 240px 180px 150px 1fr;
        padding: 1.5rem 2rem;
        border-bottom: 1px solid #f1f5f9;
        align-items: center;
        transition: background 0.2s;

        &:hover {
          background: #fcfdfe;
        }
        &:last-child {
          border-bottom: none;
        }
      }

      .prop-id-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .prop-name {
          font-family: var(--font-mono);
          color: #0f172a;
          font-weight: 800;
          font-size: 0.95rem;
        }

        .copy-tiny {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
          padding: 4px;

          &:hover {
            color: var(--p-docs);
          }
        }
      }

      .props-row:hover .copy-tiny {
        opacity: 1;
      }

      .required-indicator {
        font-size: 0.65rem;
        color: #dc2626;
        background: #fee2e2;
        padding: 2px 8px;
        border-radius: 6px;
        font-weight: 900;
        text-transform: uppercase;
        display: inline-block;
        margin-top: 4px;
      }

      .type-pill {
        background: #f0f9ff;
        color: #0369a1;
        font-weight: 700;
        font-size: 0.8rem;
        padding: 6px 12px;
        border-radius: 8px;
        border: 1px solid #e0f2fe;
      }

      .default-pill {
        background: #f0fdf4;
        color: #15803d;
        font-weight: 700;
        font-size: 0.8rem;
        padding: 6px 12px;
        border-radius: 8px;
        border: 1px solid #dcfce7;
      }

      .no-default {
        color: #94a3b8;
        font-size: 1.25rem;
        font-weight: 300;
      }

      .col-desc {
        color: #475569;
        font-size: 1rem;
        line-height: 1.6;
        font-weight: 500;
      }

      /* Events Stack */
      .events-stack {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .event-entry {
        display: flex;
        padding: 2rem;
        gap: 3rem;

        @media (max-width: 900px) {
          flex-direction: column;
          gap: 1.5rem;
        }

        .event-main {
          flex: 1;
        }

        .event-name-group {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--p-docs);
          margin-bottom: 0.75rem;

          .event-symbol {
            color: #94a3b8;
            font-weight: 300;
            margin: 0 2px;
          }
        }

        .event-desc {
          font-size: 1.05rem;
          color: #334155;
          line-height: 1.6;
        }

        .event-payload {
          width: 300px;
          background: #f8fafc;
          border-radius: 1rem;
          padding: 1.25rem;

          .payload-label {
            font-size: 0.65rem;
            font-weight: 900;
            color: #64748b;
            text-transform: uppercase;
            margin-bottom: 0.75rem;
          }

          .payload-type {
            display: block;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            color: #0369a1;
            margin-bottom: 0.5rem;
          }

          .payload-desc {
            font-size: 0.8rem;
            color: #64748b;
          }
        }
      }

      /* Considerations Checklist */
      .considerations-card {
        background: #1e293b;
        border-radius: 2rem;
        padding: 3rem;
        color: rgba(255, 255, 255, 0.9);

        .checklist {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;

          li {
            display: flex;
            gap: 1.25rem;
            font-size: 1.1rem;
            font-weight: 500;
            line-height: 1.6;

            i {
              color: #38bdf8;
              font-size: 1.4rem;
              flex-shrink: 0;
            }
          }
        }
      }

      /* Advanced Examples Grid */
      .patterns-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .pattern-card {
        .pattern-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;

          .pattern-number {
            font-size: 2rem;
            font-weight: 950;
            color: #e2e8f0;
            line-height: 1;
          }

          h3 {
            font-size: 1.25rem;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
          }
        }
      }

      /* Empty State Enhancements */
      .no-docs-empty {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 60vh;

        .empty-state-card {
          text-align: center;
          max-width: 500px;
          padding: 4rem;

          .empty-icon {
            font-size: 4rem;
            color: var(--p-docs);
            margin-bottom: 2rem;
            animation: float 3s ease-in-out infinite;
          }

          h3 {
            font-size: 2rem;
            font-weight: 900;
            margin-bottom: 1rem;
          }
          p {
            font-size: 1.1rem;
            color: #64748b;
            margin-bottom: 2.5rem;
          }
        }
      }

      .btn-primary {
        background: var(--p-docs);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 12px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.2s;
        &:hover {
          transform: scale(1.05);
        }
      }

      /* Scroll Top */
      .back-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        background: white;
        color: var(--p-docs);
        border: 1px solid #e2e8f0;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 1000;

        &.show {
          opacity: 1;
          visibility: visible;
          bottom: 3rem;
        }
        &:hover {
          transform: translateY(-5px);
          background: #f8fafc;
        }
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-15px);
        }
      }

      /* Responsive Adjustments */
      @media (max-width: 1200px) {
        .docs-container {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 768px) {
        .props-table-header {
          display: none;
        }
        .props-row {
          grid-template-columns: 1fr;
          gap: 1rem;
          padding: 2rem;
        }
        .docs-header h1 {
          font-size: 3rem;
        }
      }

      .embedded {
        .docs-container {
          grid-template-columns: 1fr;
          padding-top: 0;
        }
        .docs-main-content {
          padding: 0;
        }
      }
    `,
  ],
})
export class ComponentDocumentationComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() componentId: string | undefined;
  componentDoc: ComponentDocumentation | undefined;
  isEmbedded = false;

  activeSection = signal<string>('overview');
  filterText = signal<string>('');
  showScrollTop = signal<boolean>(false);

  sections = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-info-circle' },
    { id: 'usage', label: 'Usage', icon: 'fas fa-code' },
    { id: 'properties', label: 'Properties', icon: 'fas fa-list-ul' },
    { id: 'events', label: 'Events', icon: 'fas fa-bolt' },
    { id: 'limitations', label: 'Considerations', icon: 'fas fa-shield-alt' },
    { id: 'examples', label: 'Examples', icon: 'fas fa-vials' },
  ];

  filteredProps = computed(() => {
    if (!this.componentDoc) return [];
    const filter = this.filterText().toLowerCase();
    if (!filter) return this.componentDoc.props;

    return this.componentDoc.props.filter(
      (p) =>
        (p.name && p.name.toLowerCase().includes(filter)) ||
        (p.description && p.description.toLowerCase().includes(filter)) ||
        (p.type && p.type.toLowerCase().includes(filter)),
    );
  });

  private observer: IntersectionObserver | undefined;

  constructor(
    private route: ActivatedRoute,
    private componentDocsService: ComponentDocsService,
    private elementRef: ElementRef,
  ) {}

  ngOnInit(): void {
    if (this.componentId) {
      this.isEmbedded = true;
      this.componentDoc = this.componentDocsService.getComponentDocs(this.componentId);
    } else {
      this.route.queryParams.subscribe((params) => {
        const id = params['component'];
        if (id) {
          this.componentDoc = this.componentDocsService.getComponentDocs(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    const scrollHandler = () => {
      if (this.isEmbedded) {
        const scrollContainer = this.getScrollParent(this.elementRef.nativeElement);
        if (scrollContainer) {
          this.showScrollTop.set(scrollContainer.scrollTop > 400);
        }
      } else {
        this.showScrollTop.set(window.scrollY > 400);
      }
    };

    if (this.isEmbedded) {
      setTimeout(() => {
        const scrollContainer = this.getScrollParent(this.elementRef.nativeElement);
        if (scrollContainer) {
          scrollContainer.addEventListener('scroll', scrollHandler);
          (this as any)._scrollContainer = scrollContainer;
          (this as any)._scrollHandler = scrollHandler;
        }
      }, 500);
    } else {
      window.addEventListener('scroll', scrollHandler);
    }
  }

  ngAfterViewInit() {
    this.initIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
    window.removeEventListener('scroll', () => {});
    if ((this as any)._scrollContainer && (this as any)._scrollHandler) {
      (this as any)._scrollContainer.removeEventListener('scroll', (this as any)._scrollHandler);
    }
  }

  private initIntersectionObserver() {
    let root = null;
    if (this.isEmbedded) {
      root = this.getScrollParent(this.elementRef.nativeElement);
    }

    const options = {
      root: root,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Extract the original ID if prefixed
          const id = entry.target.id;
          const originalId =
            this.componentId && id.startsWith(this.componentId + '-')
              ? id.substring(this.componentId.length + 1)
              : id;
          this.activeSection.set(originalId);
        }
      });
    }, options);

    this.sections.forEach((section) => {
      const dynamicId = this.getSectionId(section.id);
      const element = document.getElementById(dynamicId);
      if (element) this.observer?.observe(element);
    });
  }

  getSectionId(sectionId: string): string {
    return this.componentId ? `${this.componentId}-${sectionId}` : sectionId;
  }

  scrollTo(sectionId: string) {
    const dynamicId = this.getSectionId(sectionId);
    const element = document.getElementById(dynamicId);

    if (element) {
      // Find the scrollable container
      const scrollContainer = this.getScrollParent(element);
      const isWindow =
        !scrollContainer ||
        scrollContainer === document.documentElement ||
        scrollContainer === document.body;

      // Calculate offset based on context
      // For embedded, we have the sticky mini-nav (~60px) + some buffer
      // For standalone, we have the sticky sidebar, but the window scrolls
      const offset = this.isEmbedded ? 100 : 80;

      if (isWindow) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      } else if (scrollContainer) {
        // Calculate relative position inside the scroll container
        const elementTop = element.getBoundingClientRect().top;
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const relativeTop = elementTop - containerTop + scrollContainer.scrollTop;

        scrollContainer.scrollTo({
          top: relativeTop - offset,
          behavior: 'smooth', // 'smooth' might be choppy in some browsers inside nested containers, but let's try
        });
      }
    }
  }

  // Helper to find the nearest scrollable parent
  private getScrollParent(node: HTMLElement | null): HTMLElement | null {
    if (!node) {
      return null;
    }

    if (node.scrollHeight > node.clientHeight) {
      const style = getComputedStyle(node);
      const overflowY = style.overflowY;
      if (overflowY === 'auto' || overflowY === 'scroll') {
        // Specifically for our demo-tabs case, we might be looking at the .viewport-pane
        return node;
      }
    }

    return this.getScrollParent(node.parentElement);
  }

  scrollToTop() {
    // If embedded, scroll the container
    if (this.isEmbedded && this.componentDoc) {
      // Check componentDoc as a proxy for initialization
      // Try to find the container relative to a known element, e.g. the first section or the wrapper
      const wrapper = document.querySelector('.docs-wrapper');
      const scrollContainer = this.getScrollParent(wrapper as HTMLElement);
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async copyText(text: string) {
    await navigator.clipboard.writeText(text);
  }

  goBack() {
    window.history.back();
  }
}
