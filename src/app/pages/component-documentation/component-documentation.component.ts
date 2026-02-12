import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ComponentDocsService, ComponentDocumentation } from '../../services/component-docs.service';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="component-docs">
      <div class="docs-header" *ngIf="componentDoc">
        <h1>{{ componentDoc.name }}</h1>
        <p class="short-description">{{ componentDoc.shortDescription }}</p>
      </div>

      <div class="docs-container" *ngIf="componentDoc">
        <!-- Overview Section -->
        <section class="doc-section">
          <h2>Overview</h2>
          <p class="detailed-description">{{ componentDoc.detailedDescription }}</p>
        </section>

        <!-- Usage Section -->
        <section class="doc-section">
          <h2>Basic Usage</h2>
          <div class="code-block">
            <pre><code>{{ componentDoc.usage }}</code></pre>
          </div>
        </section>

        <!-- Props Section -->
        <section class="doc-section" *ngIf="componentDoc.props.length > 0">
          <h2>Properties</h2>
          <p class="section-description">
            All properties that can be passed to the {{ componentDoc.name }} component.
          </p>
          <div class="props-table">
            <div class="table-header">
              <div class="col-name">Property</div>
              <div class="col-type">Type</div>
              <div class="col-default">Default</div>
              <div class="col-description">Description</div>
            </div>
            <div class="table-row" *ngFor="let prop of componentDoc.props">
              <div class="col-name">
                <code>{{ prop.name }}</code>
                <span class="required-badge" *ngIf="prop.required">required</span>
              </div>
              <div class="col-type">
                <code class="type">{{ prop.type }}</code>
              </div>
              <div class="col-default">
                <code *ngIf="prop.defaultValue" class="default">{{ prop.defaultValue }}</code>
                <span *ngIf="!prop.defaultValue" class="none">—</span>
              </div>
              <div class="col-description">{{ prop.description }}</div>
            </div>
          </div>
        </section>

        <!-- Events Section -->
        <section class="doc-section" *ngIf="componentDoc.events.length > 0">
          <h2>Events</h2>
          <p class="section-description">
            Events emitted by the {{ componentDoc.name }} component.
          </p>
          <div class="events-container">
            <div class="event-card" *ngFor="let event of componentDoc.events">
              <div class="event-name">
                <code>{{ event.name }}</code>
              </div>
              <p class="event-description">{{ event.description }}</p>
              <div class="event-details" *ngIf="event.payloadType">
                <strong>Payload Type:</strong> <code>{{ event.payloadType }}</code>
                <p *ngIf="event.payloadDescription">{{ event.payloadDescription }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Limitations Section -->
        <section class="doc-section" *ngIf="componentDoc.limitations.length > 0">
          <h2>Limitations & Considerations</h2>
          <ul class="limitations-list">
            <li *ngFor="let limitation of componentDoc.limitations">
              <span class="icon">⚠️</span>
              <span>{{ limitation }}</span>
            </li>
          </ul>
        </section>

        <!-- Examples Section -->
        <section class="doc-section" *ngIf="componentDoc.examples && componentDoc.examples.length > 0">
          <h2>Examples</h2>
          <div class="examples-container">
            <div class="example-item" *ngFor="let example of componentDoc.examples; let i = index">
              <h3>Example {{ i + 1 }}</h3>
              <div class="code-block">
                <pre><code>{{ example }}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="no-docs" *ngIf="!componentDoc">
        <p>Documentation not found for this component.</p>
      </div>
    </div>
  `,
  styles: [
    `
      .component-docs {
        padding: 40px;
        max-width: 1200px;
        margin: 0 auto;
      }

      .docs-header {
        margin-bottom: 60px;

        h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .short-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin: 0;
        }
      }

      .docs-container {
        display: flex;
        flex-direction: column;
        gap: 60px;
      }

      .doc-section {
        h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 2px solid var(--border-color);
        }

        .section-description {
          color: var(--text-secondary);
          margin-bottom: 24px;
          font-size: 1rem;
        }
      }

      .code-block {
        background: var(--surface-2);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 20px;
        overflow-x: auto;
        margin: 16px 0;

        code {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.6;
        }
      }

      .props-table {
        background: var(--surface-1);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        overflow: hidden;

        .table-header,
        .table-row {
          display: grid;
          grid-template-columns: 200px 250px 150px 1fr;
          gap: 20px;
          padding: 20px;
          align-items: start;
          border-bottom: 1px solid var(--border-color);

          &:last-child {
            border-bottom: none;
          }
        }

        .table-header {
          background: var(--surface-2);
          font-weight: 700;
          color: var(--text-primary);
          position: sticky;
          top: 0;
        }

        .col-name,
        .col-type,
        .col-default,
        .col-description {
          code {
            background: var(--bg-secondary);
            padding: 2px 8px;
            border-radius: 4px;
            font-family: var(--font-mono);
            font-size: 0.85rem;
          }
        }

        .required-badge {
          display: inline-block;
          background: var(--danger-color);
          color: white;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-left: 8px;
        }

        .type {
          color: var(--info-color);
        }

        .default {
          color: var(--success-color);
        }

        .none {
          color: var(--text-tertiary);
        }
      }

      .events-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 20px;
      }

      .event-card {
        background: var(--surface-2);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 24px;
        transition: all 0.3s;

        &:hover {
          border-color: var(--primary-color);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.1);
        }

        .event-name {
          margin-bottom: 12px;

          code {
            background: var(--primary);
            color: white;
            padding: 4px 12px;
            border-radius: 6px;
            font-family: var(--font-mono);
            font-size: 0.9rem;
          }
        }

        .event-description {
          color: var(--text-secondary);
          margin: 0 0 12px 0;
          font-size: 0.95rem;
        }

        .event-details {
          background: var(--bg-secondary);
          padding: 12px;
          border-radius: 6px;
          font-size: 0.9rem;

          strong {
            color: var(--text-primary);
          }

          code {
            background: var(--surface-1);
            padding: 2px 6px;
            border-radius: 3px;
            color: var(--info-color);
          }

          p {
            margin: 8px 0 0 0;
            color: var(--text-secondary);
          }
        }
      }

      .limitations-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          margin-bottom: 12px;
          background: var(--surface-2);
          border-left: 4px solid var(--warning-color);
          border-radius: 8px;
          color: var(--text-secondary);

          .icon {
            flex-shrink: 0;
            font-size: 1.2rem;
          }

          span {
            flex: 1;
          }
        }
      }

      .examples-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }

      .example-item {
        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 12px;
        }
      }

      .no-docs {
        text-align: center;
        padding: 60px 20px;
        color: var(--text-secondary);

        p {
          font-size: 1.1rem;
        }
      }

      @media (max-width: 1024px) {
        .props-table {
          .table-header,
          .table-row {
            grid-template-columns: 1fr;
          }
        }
      }
    `,
  ],
})
export class ComponentDocumentationComponent implements OnInit {
  componentDoc: ComponentDocumentation | undefined;

  constructor(
    private route: ActivatedRoute,
    private componentDocsService: ComponentDocsService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const componentId = params['component'];
      if (componentId) {
        this.componentDoc = this.componentDocsService.getComponentDocs(componentId);
      }
    });
  }
}
