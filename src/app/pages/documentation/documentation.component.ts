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
        padding: 32px 40px;
        background: linear-gradient(
          135deg,
          rgba(16, 185, 129, 0.1) 0%,
          rgba(5, 150, 105, 0.1) 100%
        );
        border-bottom: 1px solid var(--border-color);

        h1 {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
      }

      .documentation-content {
        flex: 1;
        display: flex;
        overflow: hidden;
      }

      .doc-sidebar {
        width: 280px;
        background: var(--surface-2);
        border-right: 1px solid var(--border-color);
        overflow-y: auto;
        padding: 24px;

        h3 {
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          margin-top: 24px;

          &:first-child {
            margin-top: 0;
          }
        }

        ul {
          list-style: none;
          margin-bottom: 16px;

          li {
            padding: 8px 12px;
            color: var(--text-secondary);
            cursor: pointer;
            border-radius: 6px;
            transition: all 0.2s;
            font-size: 0.95rem;

            &:hover {
              background: var(--surface-1);
              color: var(--text-primary);
            }

            &.active {
              background: rgba(16, 185, 129, 0.1);
              color: #34d399;
              font-weight: 600;
            }
          }
        }
      }

      .doc-main {
        flex: 1;
        overflow-y: auto;
        padding: 40px;

        article {
          max-width: 900px;

          h2 {
            font-size: 2rem;
            color: var(--text-primary);
            margin-bottom: 24px;
          }

          h3 {
            font-size: 1.5rem;
            color: var(--text-primary);
            margin-top: 32px;
            margin-bottom: 16px;
          }

          p {
            color: var(--text-secondary);
            font-size: 1.05rem;
            line-height: 1.7;
            margin-bottom: 16px;
          }

          ul {
            color: var(--text-secondary);
            margin-left: 24px;
            margin-bottom: 16px;

            li {
              margin-bottom: 8px;
              line-height: 1.6;

              strong {
                color: #34d399;
              }
            }
          }

          pre {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 16px;
            overflow-x: auto;
            margin: 16px 0;

            code {
              color: #e879f9;
              font-family: 'Courier New', monospace;
              font-size: 0.9rem;
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
