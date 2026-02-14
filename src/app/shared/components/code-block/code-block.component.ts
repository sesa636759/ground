import { Component, Input, signal, computed, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="code-block-wrapper">
      <div class="code-block-header">
        <span class="code-block-title">{{ title }}</span>
        <div class="code-block-actions">
          <app-tooltip [content]="toggleButtonLabel()" position="top">
            <ui-button
              slot="target"
              (click)="toggleCode()"
              icon-only
              [attr.aria-label]="toggleButtonAriaLabel()"
              [variant]="toggleButtonVariant()"
              size="sm"
            >
              <i [class]="toggleButtonIcon()"></i>
            </ui-button>
          </app-tooltip>

          <app-tooltip [content]="copyButtonLabel()" position="top">
            <ui-button
              slot="target"
              variant="secondary"
              size="sm"
              icon-only
              (click)="copyCode()"
              [class.copied]="copied()"
              aria-label="Copy code"
            >
              <i [class]="copyButtonIcon()"></i>
            </ui-button>
          </app-tooltip>
        </div>
      </div>

      <div class="code-block-content" [class.show]="showCode()">
        <pre><code [innerHTML]="highlightedCode()"></code></pre>
      </div>
    </div>
  `,
  styles: [
    `
      .code-block-wrapper {
        margin: 1rem 0;
        border: 1px solid var(--border-color, #e2e8f0);
        border-radius: 8px;
        overflow: hidden;
        background: var(--card-bg, #ffffff);
      }

      .code-block-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1rem;
        background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
        border-bottom: 1px solid var(--border-color, #e2e8f0);
      }

      .code-block-title {
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--text-primary, #1a202c);
      }

      .code-block-actions {
        display: flex;
        gap: 0.5rem;
      }

      .action-btn {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
        font-weight: 500;
        border: 1px solid var(--border-color, #e2e8f0);
        border-radius: 6px;
        background: var(--bg-primary, #ffffff);
        color: var(--text-primary, #1a202c);
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background: var(--bg-hover, #f7fafc);
          border-color: #667eea;
          color: #667eea;
        }

        &:active {
          transform: scale(0.95);
        }

        i {
          font-size: 0.85rem;
        }
      }

      .copy-btn.copied {
        background: #48bb78;
        color: white;
        border-color: #48bb78;

        &:hover {
          background: #38a169;
          border-color: #38a169;
        }
      }

      .code-block-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;

        &.show {
          max-height: 600px;
          overflow-y: auto;
        }
      }

      pre {
        margin: 0;
        padding: 1rem;
        background: #1e1e1e;
        overflow-x: auto;
      }

      code {
        font-family: 'Courier New', 'Consolas', monospace;
        font-size: 0.875rem;
        line-height: 1.6;
        color: #d4d4d4;
      }

      /* Syntax highlighting */
      :global {
        .hljs-keyword {
          color: #569cd6;
        }
        .hljs-string {
          color: #ce9178;
        }
        .hljs-number {
          color: #b5cea8;
        }
        .hljs-comment {
          color: #6a9955;
          font-style: italic;
        }
        .hljs-function {
          color: #dcdcaa;
        }
        .hljs-class {
          color: #4ec9b0;
        }
        .hljs-attr {
          color: #9cdcfe;
        }
        .hljs-tag {
          color: #569cd6;
        }
      }

      /* Dark mode */
      @media (prefers-color-scheme: dark) {
        .code-block-wrapper {
          background: var(--card-bg-dark, #2d3748);
          border-color: var(--border-color-dark, #4a5568);
        }

        .code-block-header {
          background: linear-gradient(135deg, #667eea25 0%, #764ba225 100%);
          border-bottom-color: var(--border-color-dark, #4a5568);
        }

        .code-block-title {
          color: var(--text-primary-dark, #f7fafc);
        }

        .action-btn {
          background: var(--bg-primary-dark, #1a202c);
          color: var(--text-primary-dark, #f7fafc);
          border-color: var(--border-color-dark, #4a5568);

          &:hover {
            background: var(--bg-hover-dark, #2d3748);
          }
        }
      }
    `,
  ],
})
export class CodeBlockComponent {
  @Input() code: string = '';
  @Input() title: string = 'Code Example';
  @Input() language: string = 'typescript';

  showCode = signal(false);
  copied = signal(false);

  highlightedCode = signal('');

  // Computed signals for template readability
  toggleButtonLabel = computed(() => (this.showCode() ? 'Hide Code' : 'Show Code'));
  toggleButtonAriaLabel = computed(() => (this.showCode() ? 'Hide code' : 'Show code'));
  toggleButtonVariant = computed(() => (this.showCode() ? 'secondary' : 'primary'));
  toggleButtonIcon = computed(() => (this.showCode() ? 'fas fa-eye-slash' : 'fas fa-eye'));

  copyButtonLabel = computed(() => (this.copied() ? 'Copied!' : 'Copy Code'));
  copyButtonIcon = computed(() => (this.copied() ? 'fas fa-check' : 'fas fa-copy'));

  ngOnInit() {
    this.highlightedCode.set(this.escapeHtml(this.code));
  }

  ngOnChanges() {
    this.highlightedCode.set(this.escapeHtml(this.code));
  }

  toggleCode() {
    this.showCode.update((v) => !v);
  }

  async copyCode() {
    try {
      await navigator.clipboard.writeText(this.code);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}
