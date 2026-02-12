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
          <ui-button
            (click)="toggleCode()"
            [attr.aria-label]="toggleButtonAriaLabel()"
            [variant]="toggleButtonVariant()"
            size="sm"
            [label]="toggleButtonLabel()"
          >
            <i [class]="toggleButtonIcon()"></i>
          </ui-button>
          <ui-button
            variant="secondary"
            size="sm"
            (click)="copyCode()"
            [class.copied]="copied()"
            aria-label="Copy code"
            [label]="copyButtonLabel()"
          >
            <i [class]="copyButtonIcon()"></i>
          </ui-button>
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
        margin: 2rem 0;
        border: 1px solid var(--border-color);
        border-radius: 16px;
        overflow: hidden;
        background: var(--surface-1);
        box-shadow: var(--shadow-md);
        transition: box-shadow 0.3s ease;

        &:hover {
          box-shadow: var(--shadow-lg);
        }
      }

      .code-block-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
        background: var(--surface-2);
        border-bottom: 1px solid var(--border-color);
        backdrop-filter: blur(10px);
      }

      .code-block-title {
        font-weight: 700;
        font-size: 0.85rem;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        display: flex;
        align-items: center;
        gap: 8px;

        &::before {
          content: '';
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 2px;
        }
      }

      .code-block-actions {
        display: flex;
        gap: 8px;

        ui-button {
          --ui-button-radius: 8px;
          &::part(button) {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
        }
      }

      .code-block-content {
        max-height: 0;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        background: #0f172a; // Deep slate for code

        &.show {
          max-height: 800px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
      }

      pre {
        margin: 0;
        padding: 24px;
        overflow-x: auto;
        font-family: var(--font-mono);

        &::-webkit-scrollbar {
          height: 8px;
        }
        &::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        &::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }

      code {
        font-family: var(--font-mono);
        font-size: 0.9rem;
        line-height: 1.7;
        color: #e2e8f0;
        background: transparent;
        padding: 0;
      }

      /* Syntax highlighting - Modern Palette */
      :global {
        .hljs-keyword {
          color: #818cf8;
          font-weight: 600;
        }
        .hljs-string {
          color: #34d399;
        }
        .hljs-number {
          color: #fbbf24;
        }
        .hljs-comment {
          color: #64748b;
          font-style: italic;
        }
        .hljs-function {
          color: #60a5fa;
        }
        .hljs-class {
          color: #4ec9b0;
        }
        .hljs-attr {
          color: #94a3b8;
        }
        .hljs-tag {
          color: #818cf8;
        }
        .hljs-name {
          color: #60a5fa;
        }
      }

      .dark .code-block-wrapper {
        background: var(--surface-2);
        border-color: rgba(255, 255, 255, 0.1);
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
