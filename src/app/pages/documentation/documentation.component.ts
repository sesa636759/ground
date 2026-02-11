import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="documentation-container">
      <header class="documentation-header">
        <h1>Documentation</h1>
        <p>Comprehensive guides and API references</p>
      </header>

      <div class="documentation-content">
        <aside class="doc-sidebar">
          <nav>
            <h3>Getting Started</h3>
            <ul>
              <li
                [class.active]="currentDoc() === 'introduction'"
                (click)="selectDoc('introduction')"
              >
                Introduction
              </li>
              <li
                [class.active]="currentDoc() === 'installation'"
                (click)="selectDoc('installation')"
              >
                Installation
              </li>
              <li [class.active]="currentDoc() === 'usage'" (click)="selectDoc('usage')">Usage</li>
            </ul>

            <h3>Components</h3>
            <ul>
              <li [class.active]="currentDoc() === 'button'" (click)="selectDoc('button')">
                Button
              </li>
              <li [class.active]="currentDoc() === 'card'" (click)="selectDoc('card')">Card</li>
              <li [class.active]="currentDoc() === 'dialog'" (click)="selectDoc('dialog')">
                Dialog
              </li>
              <li [class.active]="currentDoc() === 'table'" (click)="selectDoc('table')">Table</li>
            </ul>
          </nav>
        </aside>

        <main class="doc-main">
          <article>
            <h2>{{ getDocTitle() }}</h2>

            <div *ngIf="currentDoc() === 'introduction'">
              <p>
                Welcome to the Component Library documentation. This library provides a
                comprehensive set of UI components for building modern web applications.
              </p>

              <h3>Features</h3>
              <ul>
                <li>Modern, accessible components</li>
                <li>Fully customizable</li>
                <li>TypeScript support</li>
                <li>Responsive design</li>
              </ul>
            </div>

            <div *ngIf="currentDoc() === 'installation'">
              <p>Install the component library using npm:</p>
              <pre><code>npm install @your-org/component-library</code></pre>

              <h3>Setup</h3>
              <p>Import the components you need in your application:</p>
              <pre><code>import {{ '{' }} Button {{ '}' }} from '@your-org/component-library';</code></pre>
            </div>

            <div *ngIf="currentDoc() === 'usage'">
              <p>Learn how to use components in your application.</p>

              <h3>Basic Example</h3>
              <pre><code>&lt;ui-button variant="primary"&gt;Click Me&lt;/ui-button&gt;</code></pre>
            </div>

            <div *ngIf="currentDoc() === 'button'">
              <p>The Button component provides various styles and states for user interactions.</p>

              <h3>Props</h3>
              <ul>
                <li><strong>variant</strong>: primary | secondary | outline</li>
                <li><strong>size</strong>: small | medium | large</li>
                <li><strong>disabled</strong>: boolean</li>
              </ul>
            </div>

            <div *ngIf="currentDoc() === 'card'">
              <p>The Card component is a container for content with optional header and footer.</p>
            </div>

            <div *ngIf="currentDoc() === 'dialog'">
              <p>The Dialog component displays modal content over the main application.</p>
            </div>

            <div *ngIf="currentDoc() === 'table'">
              <p>
                The Table component displays data in a structured format with sorting and filtering.
              </p>
            </div>
          </article>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      .documentation-container {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .documentation-header {
        padding: 80px 40px;
        background: var(--gradient-premium);
        color: white;
        position: relative;
        overflow: hidden;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        h1 {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
          letter-spacing: -0.04em;
        }

        p {
          opacity: 0.9;
          font-size: 1.35rem;
          position: relative;
          z-index: 1;
          max-width: 600px;
          line-height: 1.5;
        }
      }

      .documentation-content {
        flex: 1;
        display: flex;
        overflow: hidden;
        background: var(--bg-primary);
      }

      .doc-sidebar {
        width: 300px;
        background: var(--surface-1);
        border-right: 1px solid var(--border-color);
        overflow-y: auto;
        padding: 40px 24px;

        h3 {
          padding-left: 16px;
          color: var(--text-tertiary);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 20px;
          margin-top: 32px;

          &:first-child {
            margin-top: 0;
          }
        }

        ul {
          list-style: none;
          margin-bottom: 24px;
          padding: 0;

          li {
            padding: 12px 16px;
            color: var(--text-secondary);
            cursor: pointer;
            border-radius: 12px;
            transition: all var(--transition-base);
            font-size: 0.95rem;
            font-weight: 500;
            margin-bottom: 2px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &:hover {
              background: var(--bg-secondary);
              color: var(--text-primary);
              transform: translateX(4px);
            }

            &.active {
              background: var(--bg-tertiary);
              color: var(--primary);
              font-weight: 700;
              box-shadow: var(--shadow-sm);

              &::after {
                content: '→';
                font-weight: 800;
              }
            }
          }
        }
      }

      .doc-main {
        flex: 1;
        overflow-y: auto;
        padding: 60px 80px;
        scroll-behavior: smooth;

        article {
          max-width: 800px;

          h2 {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--text-primary);
            margin-bottom: 32px;
            letter-spacing: -0.02em;
          }

          h3 {
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-top: 48px;
            margin-bottom: 20px;
          }

          p {
            color: var(--text-secondary);
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 24px;
          }

          ul {
            color: var(--text-secondary);
            margin-left: 24px;
            margin-bottom: 24px;

            li {
              margin-bottom: 12px;
              line-height: 1.7;
              font-size: 1.05rem;

              strong {
                color: var(--primary);
              }
            }
          }

          pre {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 24px;
            overflow-x: auto;
            margin: 32px 0;
            box-shadow: var(--shadow-sm);

            code {
              color: var(--primary);
              font-family: var(--font-mono);
              font-size: 0.95rem;
            }
          }
        }
      }
    `,
  ],
})
export class DocumentationComponent {
  currentDoc = signal('introduction');

  selectDoc(docId: string) {
    this.currentDoc.set(docId);
  }

  getDocTitle() {
    const doc = this.currentDoc();
    return doc.charAt(0).toUpperCase() + doc.slice(1);
  }
}
