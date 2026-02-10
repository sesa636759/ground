import { Component, computed, signal, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { COMPONENT_CONFIGS, ComponentConfig } from '../../pages/playground/component-configs';
import { getAllNavItems } from '../../data/navigation.data';

@Component({
  selector: 'app-generic-docs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="docs-page">
      <!-- Header -->
      <header class="page-header">
        <div class="header-content">
          <div class="header-actions">
            <a routerLink="/docs" class="back-link">← Components</a>
            <a [routerLink]="['/playground', componentId()]" class="playground-link">
              Open in Playground ↗
            </a>
          </div>
          <h1>{{ config()?.label || componentId() }}</h1>
          <p class="description">
            {{
              config()?.description ||
                'Documentation and examples for the ' +
                  (config()?.label || componentId()) +
                  ' component.'
            }}
          </p>
        </div>
      </header>

      <!-- Content -->
      <div class="docs-content">
        <!-- Features Section -->
        <section class="docs-section" *ngIf="config()?.features?.length">
          <h2>Key Features</h2>
          <div class="features-grid">
            <div *ngFor="let feature of config()?.features" class="feature-item">
              <span class="check-icon">✓</span> {{ feature }}
            </div>
          </div>
        </section>

        <!-- Live Preview Section -->
        <section class="docs-section">
          <h2>Basic Usage</h2>
          <div class="preview-card">
            <div class="preview-area">
              <!-- We use dynamic element creation in a simpler way here, 
                     or just render the tag with *ngIf hacks, 
                     but manually creating element in TS is safer for generic tags. -->
              <div [id]="'generic-preview-' + componentId()"></div>
            </div>
            <div class="code-snippet">
              <pre><code>&lt;{{ config()?.tagName || 'ui-' + componentId() }}&gt;&lt;/{{ config()?.tagName || 'ui-' + componentId() }}&gt;</code></pre>
            </div>
          </div>
        </section>

        <!-- API Reference -->
        <section class="docs-section" *ngIf="config()?.props?.length">
          <h2>API Reference</h2>
          <div class="api-table-wrapper">
            <table class="api-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let prop of config()!.props">
                  <td>
                    <code>{{ prop.name }}</code>
                  </td>
                  <td>
                    <span class="type-badge">{{ prop.type }}</span>
                  </td>
                  <td>
                    <code>{{ prop.defaultValue }}</code>
                  </td>
                  <td>{{ prop.label || '-' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [
    `
      .docs-page {
        padding: 40px;
        max-width: 1200px;
        margin: 0 auto;
        font-family: 'Inter', sans-serif;
        color: #1e293b;
      }

      .page-header {
        margin-bottom: 60px;

        h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: capitalize;
        }

        .description {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 600px;
        }
      }

      .header-actions {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
      }

      .back-link {
        color: #9ca3af;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.875rem;
        &:hover {
          color: #3b82f6;
        }
      }

      .playground-link {
        display: inline-flex;
        align-items: center;
        padding: 8px 16px;
        background: white;
        color: #4b5563;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.875rem;
        transition: all 0.2s;

        &:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
      }

      .docs-section {
        margin-bottom: 60px;

        h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: #334155;
        }
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;
        margin-bottom: 40px;
      }

      .feature-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-weight: 500;
        color: #334155;
      }

      .check-icon {
        color: #10b981;
        background: #ecfdf5;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.75rem;
        font-weight: 800;
        flex-shrink: 0;
      }

      .preview-card {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        overflow: hidden;
      }

      .preview-area {
        padding: 48px;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        justify-content: center;
      }

      .code-snippet {
        padding: 24px;
        background: #1e293b;

        pre {
          margin: 0;
          color: #e2e8f0;
          font-family: 'JetBrains Mono', monospace;
        }
      }

      .api-table-wrapper {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        overflow: hidden;
      }

      .api-table {
        width: 100%;
        border-collapse: collapse;
        background: white;

        th,
        td {
          text-align: left;
          padding: 16px 24px;
          border-bottom: 1px solid #e2e8f0;
        }

        th {
          background: #f8fafc;
          font-weight: 600;
          color: #475569;
          font-size: 0.875rem;
        }

        td {
          color: #334155;
          font-size: 0.9375rem;
        }

        code {
          font-family: 'JetBrains Mono', monospace;
          background: #f1f5f9;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.8125rem;
          color: #0f172a;
        }
      }

      .type-badge {
        display: inline-block;
        padding: 2px 8px;
        background: #eff6ff;
        color: #3b82f6;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 600;
      }
    `,
  ],
})
export class GenericDocsComponent implements OnInit {
  componentId = signal<string>('');

  config = computed(() => {
    const id = this.componentId();
    if (!id) return null;

    // Look up or fallback
    let conf = COMPONENT_CONFIGS[id];
    if (!conf) {
      // Generate Generic
      conf = {
        id,
        tagName: `ui-${id}`,
        label: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' '),
        props: [
          {
            name: 'variant',
            type: 'select',
            options: ['primary', 'secondary'],
            defaultValue: 'primary',
          },
          { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
          { name: 'disabled', type: 'boolean', defaultValue: false },
        ],
        slots: [],
      };
    }
    return conf;
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.componentId.set(params['id']);
        // Render basic example
        setTimeout(() => this.renderExample(), 50);
      }
    });
  }

  renderExample() {
    const id = this.componentId();
    const container = document.getElementById('generic-preview-' + id);
    const conf = this.config();

    if (container && conf) {
      container.innerHTML = '';
      const el = document.createElement(conf.tagName);
      el.innerText = `Example ${conf.label}`;

      // Set basic props
      if (conf.props) {
        conf.props.forEach((p) => {
          if (p.defaultValue !== undefined && p.defaultValue !== false && p.type !== 'json') {
            el.setAttribute(p.name, String(p.defaultValue));
          }
        });
      }

      container.appendChild(el);
    }
  }
}
