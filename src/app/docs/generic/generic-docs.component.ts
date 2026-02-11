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
    <div class="docs-premium-page">
      <header class="premium-header">
        <div class="header-overlay"></div>
        <div class="header-content">
          <div class="title-section">
            <span class="component-icon">{{ getIcon() }}</span>
            <h1>{{ config()?.label || componentId() }}</h1>
          </div>
        </div>
      </header>

      <div class="premium-container">
        <div class="demo-dashboard">
          <aside class="demo-sidebar">
            <h3>Variations</h3>
            <ul class="demo-nav">
              <li
                [class.active]="activeView() === 'preview'"
                (click)="activeView.set('preview'); renderExample()"
              >
                Live Preview
              </li>
              <li
                *ngIf="config()?.features?.length"
                [class.active]="activeView() === 'features'"
                (click)="activeView.set('features')"
              >
                Key Features
              </li>
            </ul>
          </aside>

          <main class="demo-viewport">
            <div class="viewport-header">
              <h3>{{ activeView() === 'features' ? 'Key Features' : 'Live Preview' }}</h3>
              <div class="viewport-actions">
                <a
                  [routerLink]="['/playground', componentId()]"
                  class="action-btn"
                  title="Open in Playground"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div class="viewport-canvas">
              <div
                *ngIf="activeView() === 'preview'"
                [id]="'generic-preview-' + componentId()"
              ></div>

              <!-- Features Grid integrated as Variation -->
              <div
                *ngIf="activeView() === 'features'"
                class="advanced-section"
                style="margin: 0; padding: 0; background: transparent; box-shadow: none; border: none;"
              >
                <div class="feature-grid" style="padding: 0;">
                  <div *ngFor="let feature of config()?.features" class="feature-card">
                    <div class="feature-icon">✨</div>
                    <h4>{{ feature }}</h4>
                    <p>Built-in support for advanced interaction and seamless integration.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="viewport-code" *ngIf="activeView() === 'preview'">
              <pre
                style="background: #1e293b; padding: 24px; border-radius: 12px; color: #e2e8f0; font-family: monospace;"
              ><code>&lt;{{ config()?.tagName }}&gt;&lt;/{{ config()?.tagName }}&gt;</code></pre>
            </div>
          </main>
        </div>

        <!-- API Reference -->
        <div class="api-card" *ngIf="config()?.props?.length" style="margin-top: 60px;">
          <h3>API Reference</h3>
          <div class="api-table-wrapper">
            <table class="premium-table">
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
                    <code class="prop-name">{{ prop.name }}</code>
                  </td>
                  <td>
                    <span class="type-pill">{{ prop.type }}</span>
                  </td>
                  <td>
                    <code class="default-val">{{ prop.defaultValue }}</code>
                  </td>
                  <td>{{ prop.label || 'Configures the ' + prop.name + ' property.' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class GenericDocsComponent implements OnInit {
  getIcon() {
    const id = this.componentId();
    const item = getAllNavItems().find((i) => i.id === id);
    return item?.icon || '🧩';
  }

  componentId = signal<string>('');
  activeView = signal<'preview' | 'features'>('preview');

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
        this.renderExample();
      }
    });
  }

  renderExample() {
    setTimeout(() => {
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
    }, 50);
  }
}
