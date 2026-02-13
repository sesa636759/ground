import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  ComponentDocsService,
  ComponentDocumentation,
} from '../../services/component-docs.service';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="docs-wrapper animate-in" [class.embedded]="isEmbedded">
      <div class="docs-container" *ngIf="componentDoc">
        <!-- Sticky Left Navigation for Sections -->
        <aside class="docs-nav-aside" *ngIf="!isEmbedded">
          <nav class="sticky-nav">
            <div class="nav-header">Jump to</div>
            <ul>
              <li><a (click)="scrollTo('overview')" class="nav-link">Overview</a></li>
              <li><a (click)="scrollTo('usage')" class="nav-link">Usage</a></li>
              <li *ngIf="componentDoc.props.length > 0">
                <a (click)="scrollTo('properties')" class="nav-link">Properties</a>
              </li>
              <li *ngIf="componentDoc.events.length > 0">
                <a (click)="scrollTo('events')" class="nav-link">Events</a>
              </li>
              <li *ngIf="componentDoc.limitations.length > 0">
                <a (click)="scrollTo('limitations')" class="nav-link">Considerations</a>
              </li>
              <li *ngIf="componentDoc.examples && componentDoc.examples.length > 0">
                <a (click)="scrollTo('examples')" class="nav-link">Examples</a>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content Area -->
        <main class="docs-main-content">
          <header class="docs-header" *ngIf="!isEmbedded">
            <div class="header-inner">
              <div class="header-badge">API Reference</div>
              <h1>{{ componentDoc.name }}</h1>
              <p class="lead-text">{{ componentDoc.shortDescription }}</p>
            </div>
          </header>

          <div class="docs-sections">
            <!-- Overview Section -->
            <section id="overview" class="doc-section card-enterprise">
              <div class="section-title">
                <i class="fas fa-info-circle"></i>
                <h2>Overview</h2>
              </div>
              <p class="description-text">{{ componentDoc.detailedDescription }}</p>
            </section>

            <!-- Usage Section -->
            <section id="usage" class="doc-section">
              <div class="section-title">
                <i class="fas fa-code"></i>
                <h2>Basic Usage</h2>
              </div>
              <app-code-block
                [code]="componentDoc.usage"
                [title]="componentDoc.name + ' Basic Implementation'"
                language="html"
              ></app-code-block>
            </section>

            <!-- Props Section -->
            <section id="properties" class="doc-section" *ngIf="componentDoc.props.length > 0">
              <div class="section-title">
                <i class="fas fa-list-ul"></i>
                <h2>Properties</h2>
              </div>
              <p class="section-hint">
                API attributes to configure the {{ componentDoc.name }} component.
              </p>

              <div class="props-grid-container card-enterprise">
                <div class="props-table-header">
                  <div class="col-prop">Property</div>
                  <div class="col-type">Type</div>
                  <div class="col-default">Default</div>
                  <div class="col-desc">Description</div>
                </div>
                <div class="props-table-body">
                  <div class="props-row" *ngFor="let prop of componentDoc.props">
                    <div class="col-prop">
                      <span class="prop-name">{{ prop.name }}</span>
                      <span class="required-indicator" *ngIf="prop.required">required</span>
                    </div>
                    <div class="col-type">
                      <code class="badge-type">{{ prop.type }}</code>
                    </div>
                    <div class="col-default">
                      <code class="badge-default" *ngIf="prop.defaultValue">{{
                        prop.defaultValue
                      }}</code>
                      <span class="no-default" *ngIf="!prop.defaultValue">—</span>
                    </div>
                    <div class="col-desc">{{ prop.description }}</div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Events Section -->
            <section id="events" class="doc-section" *ngIf="componentDoc.events.length > 0">
              <div class="section-title">
                <i class="fas fa-bolt"></i>
                <h2>Events</h2>
              </div>
              <div class="events-grid">
                <div class="event-card-enterprise" *ngFor="let event of componentDoc.events">
                  <div class="event-header">
                    <span class="event-name">{{ event.name }}</span>
                  </div>
                  <p class="event-desc">{{ event.description }}</p>
                  <div class="event-meta" *ngIf="event.payloadType">
                    <span class="meta-label">Payload:</span>
                    <code class="meta-value">{{ event.payloadType }}</code>
                    <p class="meta-desc" *ngIf="event.payloadDescription">
                      {{ event.payloadDescription }}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Limitations Section -->
            <section
              id="limitations"
              class="doc-section"
              *ngIf="componentDoc.limitations.length > 0"
            >
              <div class="section-title">
                <i class="fas fa-exclamation-triangle"></i>
                <h2>Considerations</h2>
              </div>
              <div class="alert-box enterprise-info">
                <ul class="limitations-checklist">
                  <li *ngFor="let limitation of componentDoc.limitations">
                    {{ limitation }}
                  </li>
                </ul>
              </div>
            </section>

            <!-- Examples Section -->
            <section
              id="examples"
              class="doc-section"
              *ngIf="componentDoc.examples && componentDoc.examples.length > 0"
            >
              <div class="section-title">
                <i class="fas fa-vials"></i>
                <h2>Examples</h2>
              </div>
              <div class="examples-stack">
                <div
                  class="example-box"
                  *ngFor="let example of componentDoc.examples; let i = index"
                >
                  <div class="example-meta">Variation #{{ i + 1 }}</div>
                  <app-code-block
                    [code]="example"
                    [title]="'Composition Example ' + (i + 1)"
                    language="html"
                  ></app-code-block>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <div class="no-docs-empty" *ngIf="!componentDoc">
        <div class="empty-state-card">
          <i class="fas fa-search"></i>
          <h3>Documentation Not Found</h3>
          <p>We couldn't find any documentation metadata for this component ID.</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: #ffffff;
      }

      .docs-wrapper {
        padding: 0;
        max-width: 1400px;
        margin: 0 auto;

        &.embedded {
          padding: 0;
          max-width: 100%;
          min-height: auto;
          background: transparent;

          .docs-container {
            grid-template-columns: 1fr;
            padding-top: 0;
          }
        }
      }

      .docs-container {
        display: grid;
        grid-template-columns: 260px 1fr;
        gap: var(--space-2xl);
        position: relative;
        padding-top: var(--space-2xl);
      }

      /* Navigation Sidebar */
      .docs-nav-aside {
        @media (max-width: 1024px) {
          display: none;
        }
      }

      .sticky-nav {
        position: sticky;
        top: 2rem;
        padding-top: 1rem;
        padding-left: var(--space-xl);

        .nav-header {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin-bottom: var(--space-md);
        }

        ul {
          list-style: none;
          padding: 0;

          li {
            margin-bottom: 2px;
          }
        }

        .nav-link {
          display: block;
          padding: 0.65rem 1rem;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          border-left: 2px solid transparent;

          &:hover {
            background: #f8fafc;
            color: var(--primary);
          }

          &.active {
            color: var(--primary);
            background: #f1f5f9;
            border-left-color: var(--primary);
            font-weight: 700;
          }
        }
      }

      /* Main Content */
      .docs-main-content {
        min-width: 0;
        padding: 0 var(--space-xl) var(--space-2xl);
      }

      .docs-header {
        margin-bottom: var(--space-2xl);
        padding: 60px 0;
        border-bottom: 1px solid var(--border-color);
        background: radial-gradient(circle at top right, #f8fafc, #ffffff);

        .header-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: #f1f5f9;
          color: var(--primary);
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: var(--space-md);
          letter-spacing: 0.05em;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #0f172a;
          margin-bottom: var(--space-md);
        }

        .lead-text {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 800px;
          line-height: 1.6;
        }
      }

      .docs-sections {
        display: flex;
        flex-direction: column;
        gap: var(--space-2xl);
      }

      .doc-section {
        scroll-margin-top: 2rem;

        .section-title {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);

          i {
            font-size: 1.1rem;
            color: var(--primary);
          }

          h2 {
            font-size: 1.5rem;
            font-weight: 800;
            color: #0f172a;
            letter-spacing: -0.02em;
          }
        }

        &.card-enterprise {
          padding: var(--space-xl);
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xl);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        }
      }

      .description-text {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-secondary);
      }

      .section-hint {
        color: var(--text-tertiary);
        margin-bottom: var(--space-lg);
        font-size: 0.9rem;
      }

      /* Properties Table - Modern Grid Style */
      .props-grid-container {
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg);
        overflow: hidden;
        background: #ffffff;
      }

      .props-table-header {
        display: grid;
        grid-template-columns: 200px 180px 140px 1fr;
        padding: 1rem 1.5rem;
        background: #f8fafc;
        border-bottom: 1px solid var(--border-color);
        font-weight: 700;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-tertiary);
      }

      .props-row {
        display: grid;
        grid-template-columns: 200px 180px 140px 1fr;
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid #f1f5f9;
        align-items: center;
        transition: background var(--transition-fast);

        &:hover {
          background: #f8fafc;
        }

        &:last-child {
          border-bottom: none;
        }
      }

      .prop-name {
        font-family: var(--font-mono);
        color: var(--primary);
        font-weight: 700;
        font-size: 0.85rem;
      }

      .required-indicator {
        font-size: 0.65rem;
        color: var(--danger);
        background: #fee2e2;
        padding: 1px 6px;
        border-radius: 4px;
        margin-left: 0.5rem;
        font-weight: 800;
        text-transform: uppercase;
      }

      .badge-type {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: #0369a1;
        background: #f0f9ff;
        padding: 4px 8px;
        border-radius: 6px;
        border: 1px solid #e0f2fe;
      }

      .badge-default {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: #15803d;
        background: #f0fdf4;
        padding: 4px 8px;
        border-radius: 6px;
        border: 1px solid #dcfce7;
      }

      .no-default {
        color: var(--text-tertiary);
        font-size: 0.85rem;
      }

      .col-desc {
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.6;
      }

      /* Events Grid */
      .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: var(--space-lg);
      }

      .event-card-enterprise {
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-xl);
        padding: 1.5rem;
        transition: all var(--transition-base);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

        &:hover {
          border-color: var(--primary-light);
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }

        .event-name {
          font-family: var(--font-mono);
          font-weight: 700;
          color: var(--primary);
          font-size: 0.9rem;
          padding: 0.5rem 0.75rem;
          background: #f1f5f9;
          border-radius: var(--radius-md);
          display: inline-block;
          margin-bottom: 1rem;
        }

        .event-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .event-meta {
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;

          .meta-label {
            font-size: 0.7rem;
            font-weight: 800;
            color: var(--text-tertiary);
            text-transform: uppercase;
            display: block;
            margin-bottom: 0.5rem;
          }

          .meta-value {
            font-family: var(--font-mono);
            font-size: 0.8rem;
            color: #0369a1;
          }

          .meta-desc {
            font-size: 0.8rem;
            color: var(--text-secondary);
            margin-top: 0.5rem;
          }
        }
      }

      /* Alert Box for Limitations */
      .alert-box {
        padding: 1.5rem;
        border-radius: var(--radius-xl);
        display: flex;
        gap: 1rem;

        &.enterprise-info {
          background: #f8fafc;
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--primary);
        }

        .limitations-checklist {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            position: relative;
            padding-left: 1.75rem;
            margin-bottom: 0.75rem;
            color: var(--text-secondary);
            font-weight: 500;
            font-size: 0.95rem;

            &::before {
              content: '✓';
              position: absolute;
              left: 0;
              color: var(--primary);
              font-weight: 900;
            }

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }

      /* Examples */
      .examples-stack {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
      }

      .example-box {
        .example-meta {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-tertiary);
          margin-bottom: var(--space-sm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      }

      /* Empty State */
      .no-docs-empty {
        padding: 100px 0;
        display: flex;
        justify-content: center;

        .empty-state-card {
          text-align: center;
          padding: 4rem;
          background: #ffffff;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
          max-width: 500px;

          i {
            font-size: 3rem;
            color: var(--text-muted);
            margin-bottom: 1.5rem;
          }

          h3 {
            font-size: 1.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
          }

          p {
            color: var(--text-secondary);
          }
        }
      }

      @media (max-width: 768px) {
        .docs-container {
          grid-template-columns: 1fr;
        }

        .props-table-header,
        .props-row {
          grid-template-columns: 1fr;
          gap: 0.5rem;
        }

        .docs-header h1 {
          font-size: 2.75rem;
        }
      }
    `,
  ],
})
export class ComponentDocumentationComponent implements OnInit {
  @Input() componentId: string | undefined;
  componentDoc: ComponentDocumentation | undefined;
  isEmbedded = false;

  constructor(
    private route: ActivatedRoute,
    private componentDocsService: ComponentDocsService,
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
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
