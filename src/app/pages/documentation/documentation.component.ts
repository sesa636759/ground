import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ComponentDocsService } from '../../services/component-docs.service';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="docs-landing animate-in">
      <!-- Enterprise Light Hero -->
      <header class="hero-section">
        <div class="hero-content">
          <div class="hero-badge">Documentation</div>
          <h1>Build Better, <span class="text-gradient">Faster.</span></h1>
          <p class="hero-lead">
            Explore our comprehensive component library designed for high-performance enterprise
            applications. Modern API, full TypeScript support, and elite aesthetics out of the box.
          </p>
          <div class="hero-actions">
            <button class="btn-primary" (click)="selectDoc('installation')">
              Get Started <i class="fas fa-arrow-right"></i>
            </button>
            <button class="btn-outline" (click)="scrollTo('catalogue')">View Components</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="visual-card-stack">
            <div class="visual-card glass-premium"></div>
            <div class="visual-card glass-premium"></div>
            <div class="visual-card glass-premium"></div>
          </div>
        </div>

        <!-- Decorative Gradients -->
        <div class="gradient-blob blob-1"></div>
        <div class="gradient-blob blob-2"></div>
      </header>

      <div class="docs-grid-layout">
        <aside class="docs-sidebar-nav">
          <nav class="sticky-side-nav">
            <div class="nav-group">
              <div class="group-title">Getting Started</div>
              <ul>
                <li
                  [class.active]="currentDoc() === 'introduction'"
                  (click)="selectDoc('introduction')"
                >
                  <i class="fas fa-book-open"></i> Introduction
                </li>
                <li
                  [class.active]="currentDoc() === 'installation'"
                  (click)="selectDoc('installation')"
                >
                  <i class="fas fa-download"></i> Installation
                </li>
                <li [class.active]="currentDoc() === 'usage'" (click)="selectDoc('usage')">
                  <i class="fas fa-laptop-code"></i> Basic Usage
                </li>
              </ul>
            </div>

            <div class="nav-group" id="catalogue">
              <div class="group-title">Component API</div>
              <ul class="component-list-nav">
                <li
                  *ngFor="let comp of componentsList()"
                  [class.active]="currentDoc() === comp.id"
                  (click)="viewComponentDoc(comp.id)"
                >
                  <span class="comp-icon">{{ comp.name.charAt(0) }}</span>
                  {{ comp.name }}
                  <i class="fas fa-chevron-right arrow"></i>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <main class="docs-main-viewer">
          <article class="doc-article intro-view" *ngIf="currentDoc() === 'introduction'">
            <div class="article-header">
              <h2>Introduction</h2>
              <div class="separator"></div>
            </div>
            <p>
              This library is meticulously crafted to empower developers to create stunning,
              consistent, and highly functional user interfaces. Built with a focus on developer
              experience (DX) and end-user accessibility.
            </p>

            <div class="feature-grid-premium">
              <div class="feature-card-enterprise">
                <div class="f-icon"><i class="fas fa-bolt"></i></div>
                <h4>High Performance</h4>
                <p>Optimized for Core Web Vitals and smooth interactions.</p>
              </div>
              <div class="feature-card-enterprise">
                <div class="f-icon"><i class="fas fa-palette"></i></div>
                <h4>Design Driven</h4>
                <p>Tokens-based design system for perfect consistency.</p>
              </div>
              <div class="feature-card-enterprise">
                <div class="f-icon"><i class="fas fa-universal-access"></i></div>
                <h4>Accessible</h4>
                <p>WCAG 2.1 compliance and screen reader friendly.</p>
              </div>
            </div>
          </article>

          <article class="doc-article" *ngIf="currentDoc() === 'installation'">
            <div class="article-header">
              <h2>Installation</h2>
              <div class="separator"></div>
            </div>
            <p>Ready to level up your UI? Follow these simple steps to integrate the library.</p>

            <div class="step-card">
              <div class="step-num">01</div>
              <div class="step-content">
                <h3>Install via NPM</h3>
                <div class="code-terminal">
                  <code>npm install @enterprise/ui-ground</code>
                </div>
              </div>
            </div>

            <div class="step-card">
              <div class="step-num">02</div>
              <div class="step-content">
                <h3>Global Styles</h3>
                <p>Import the theme tokens and core styles in your <code>styles.scss</code>.</p>
                <div class="code-terminal">
                  <code>@import "@enterprise/ui-ground/theme";</code>
                </div>
              </div>
            </div>
          </article>

          <article class="doc-article" *ngIf="currentDoc() === 'usage'">
            <div class="article-header">
              <h2>Usage</h2>
              <div class="separator"></div>
            </div>
            <p>
              Using our components is intuitive. Simply import the standalone component and you're
              good to go.
            </p>

            <div class="snippet-box">
              <div class="snippet-header">Angular Implementation</div>
              <pre><code>import {{ '{' }} UiButton {{ '}' }} from '@enterprise/ui-ground';

@Component({{ '{' }}
  imports: [UiButton],
  template: \`&lt;ui-button variant="primary"&gt;Elite Button&lt;/ui-button&gt;\`
{{ '}' }})</code></pre>
            </div>
          </article>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      .docs-landing {
        min-height: 100vh;
        background: #ffffff;
      }

      /* Enterprise Light Hero with White Gradients */
      .hero-section {
        padding: 120px var(--space-xl);
        background: linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%);
        color: var(--text-primary);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-2xl);
        align-items: center;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid var(--border-color);

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(
            circle at 2px 2px,
            rgba(0, 0, 0, 0.02) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        }

        .hero-content {
          position: relative;
          z-index: 2;

          .hero-badge {
            display: inline-block;
            padding: 0.4rem 1rem;
            background: #ffffff;
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-sm);
            border-radius: var(--radius-full);
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: var(--space-xl);
            color: var(--primary);
          }

          h1 {
            font-size: 5rem;
            font-weight: 900;
            line-height: 1;
            letter-spacing: -0.05em;
            margin-bottom: var(--space-lg);
            color: #0f172a;

            .text-gradient {
              background: linear-gradient(135deg, var(--primary) 0%, #818cf8 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }

          .hero-lead {
            font-size: 1.5rem;
            color: var(--text-secondary);
            line-height: 1.5;
            margin-bottom: var(--space-2xl);
            max-width: 600px;
          }
        }

        .hero-actions {
          display: flex;
          gap: var(--space-md);

          button {
            padding: 1.1rem 2rem;
            font-weight: 700;
            font-size: 1rem;
            border-radius: var(--radius-lg);
            cursor: pointer;
            transition: all var(--transition-base);
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .btn-primary {
            background: var(--primary);
            color: white;
            border: none;
            box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.4);

            &:hover {
              transform: translateY(-3px);
              box-shadow: 0 15px 30px -5px rgba(79, 70, 229, 0.5);
              background: var(--primary-hover);
            }
          }

          .btn-outline {
            background: #ffffff;
            color: var(--text-primary);
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-sm);

            &:hover {
              background: #f8fafc;
              border-color: var(--text-tertiary);
              transform: translateY(-2px);
            }
          }
        }

        .hero-visual {
          position: relative;
          z-index: 1;

          .visual-card-stack {
            position: relative;
            height: 400px;

            .visual-card {
              position: absolute;
              width: 320px;
              height: 220px;
              border-radius: 24px;
              background: rgba(255, 255, 255, 0.8);
              border: 1px solid rgba(255, 255, 255, 1);
              backdrop-filter: blur(20px);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);

              &:nth-child(1) {
                top: 0;
                left: 100px;
                z-index: 3;
              }
              &:nth-child(2) {
                top: 60px;
                left: 50px;
                z-index: 2;
                opacity: 0.6;
              }
              &:nth-child(3) {
                top: 120px;
                left: 0;
                z-index: 1;
                opacity: 0.3;
              }
            }
          }
        }

        .gradient-blob {
          position: absolute;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.4;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: #e0e7ff;
          top: -100px;
          right: -100px;
          border-radius: 50%;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          background: #f0f9ff;
          bottom: -50px;
          left: -50px;
          border-radius: 50%;
        }
      }

      /* Layout Grid */
      .docs-grid-layout {
        display: grid;
        grid-template-columns: 320px 1fr;
        max-width: 1400px;
        margin: 0 auto;
        padding: var(--space-2xl) var(--space-xl);
        gap: var(--space-2xl);
      }

      .docs-sidebar-nav {
        .sticky-side-nav {
          position: sticky;
          top: 2rem;
        }

        .nav-group {
          margin-bottom: var(--space-2xl);

          .group-title {
            font-size: 0.75rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--text-tertiary);
            margin-bottom: var(--space-md);
            padding-left: var(--space-md);
          }

          ul {
            list-style: none;
            padding: 0;

            li {
              padding: 0.75rem 1rem;
              color: var(--text-secondary);
              font-weight: 500;
              border-radius: var(--radius-md);
              cursor: pointer;
              transition: all var(--transition-fast);
              display: flex;
              align-items: center;
              gap: 0.75rem;
              margin-bottom: 2px;

              i {
                font-size: 0.9rem;
                opacity: 0.7;
              }

              &:hover {
                background: #f1f5f9;
                color: var(--text-primary);
                transform: translateX(4px);
              }

              &.active {
                background: #f1f5f9;
                color: var(--primary);
                font-weight: 700;
                box-shadow: inset 0 0 0 1px rgba(79, 70, 229, 0.1);
              }
            }
          }
        }

        .component-list-nav {
          li {
            .comp-icon {
              width: 24px;
              height: 24px;
              background: #f1f5f9;
              color: var(--text-tertiary);
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 6px;
              font-size: 0.7rem;
              font-weight: 800;
            }

            .arrow {
              margin-left: auto;
              font-size: 0.7rem;
              opacity: 0;
              transition: all 0.2s;
            }

            &:hover .arrow {
              opacity: 0.5;
              transform: translateX(-4px);
            }
          }
        }
      }

      /* Main Viewer */
      .docs-main-viewer {
        min-width: 0;

        .doc-article {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;

          .article-header {
            margin-bottom: var(--space-xl);

            h2 {
              font-size: 3rem;
              font-weight: 900;
              letter-spacing: -0.02em;
              color: #0f172a;
              margin-bottom: var(--space-sm);
            }

            .separator {
              width: 60px;
              height: 4px;
              background: var(--primary);
              border-radius: var(--radius-full);
            }
          }

          p {
            font-size: 1.25rem;
            line-height: 1.7;
            color: var(--text-secondary);
            margin-bottom: var(--space-2xl);
            max-width: 800px;
          }
        }
      }

      /* Feature Cards - Enterprise Edition */
      .feature-grid-premium {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: var(--space-lg);
        margin-top: var(--space-2xl);
      }

      .feature-card-enterprise {
        padding: var(--space-xl);
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-2xl);
        transition: all var(--transition-base);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
          border-color: var(--primary-light);
        }

        .f-icon {
          width: 54px;
          height: 54px;
          background: #f8fafc;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          font-size: 1.5rem;
          margin-bottom: var(--space-lg);
          border: 1px solid #f1f5f9;
        }

        h4 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: var(--space-sm);
        }

        p {
          font-size: 0.95rem !important;
          color: var(--text-secondary) !important;
          margin-bottom: 0 !important;
        }
      }

      /* Steps & Code */
      .step-card {
        display: flex;
        gap: var(--space-xl);
        margin-bottom: var(--space-2xl);

        .step-num {
          font-size: 3rem;
          font-weight: 900;
          color: var(--primary);
          opacity: 0.1;
          line-height: 1;
        }

        .step-content {
          flex: 1;

          h3 {
            font-size: 1.5rem;
            font-weight: 800;
            color: #0f172a;
            margin-bottom: var(--space-md);
          }
        }
      }

      .code-terminal {
        background: #0f172a;
        padding: 1.25rem 1.5rem;
        border-radius: 12px;
        color: #e2e8f0;
        font-family: var(--font-mono);
        font-size: 0.95rem;
        position: relative;
        overflow: hidden;

        &::before {
          content: 'Terminal';
          position: absolute;
          top: 0;
          right: 0;
          padding: 0.25rem 0.6rem;
          background: rgba(255, 255, 255, 0.15);
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
        }
      }

      .snippet-box {
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-xl);
        overflow: hidden;
        box-shadow: var(--shadow-sm);

        .snippet-header {
          padding: 0.75rem 1.25rem;
          background: #f8fafc;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-tertiary);
        }

        pre {
          padding: 1.5rem;
          margin: 0;
          overflow-x: auto;
          code {
            font-family: var(--font-mono);
            color: #334155;
          }
        }
      }

      @media (max-width: 1024px) {
        .hero-section {
          grid-template-columns: 1fr;
          text-align: center;
          padding: 80px var(--space-lg);
        }
        .hero-content h1 {
          font-size: 3.5rem;
        }
        .hero-actions {
          justify-content: center;
        }
        .hero-visual {
          display: none;
        }
        .docs-grid-layout {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class DocumentationComponent {
  currentDoc = signal('introduction');
  componentsList = signal<Array<{ id: string; name: string }>>([]);

  constructor(
    private router: Router,
    private componentDocsService: ComponentDocsService,
  ) {
    this.componentsList.set(this.componentDocsService.getComponentList());
  }

  selectDoc(docId: string) {
    this.currentDoc.set(docId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  viewComponentDoc(componentId: string) {
    this.router.navigate(['/component-documentation'], {
      queryParams: { component: componentId },
    });
  }

  scrollTo(elementId: string) {
    const el = document.getElementById(elementId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
