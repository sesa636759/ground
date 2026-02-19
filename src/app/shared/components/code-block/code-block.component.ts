import {
  Component,
  Input,
  signal,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="code-block-wrapper" [class.expanded]="showCode()">
      <div class="code-block-header">
        <div class="header-main">
          <ui-icon name="code" library="lucide" class="header-icon"></ui-icon>
          <span class="code-block-title">{{ title }}</span>
          <span class="language-badge">{{ language }}</span>
        </div>
        <div class="code-block-actions">
          <ui-button
            icon="code"
            icon-library="lucide"
            (click)="toggleCode()"
            [variant]="showCode() ? 'secondary' : 'ghost'"
            size="sm"
            class="action-btn"
            [label]="showCode() ? 'Hide' : 'Show'"
          >
            <ui-icon
              [name]="showCode() ? 'eye-slash' : 'eye'"
              library="fontawesome"
              slot="icon-start"
            ></ui-icon>
          </ui-button>

          <ui-button
            (click)="copyCode()"
            [variant]="copied() ? 'success' : 'ghost'"
            size="sm"
            class="action-btn copy-btn"
            [class.copied]="copied()"
            [label]="copied() ? 'Copied!' : 'Copy'"
          >
            <ui-icon
              [name]="copied() ? 'check' : 'copy'"
              library="fontawesome"
              slot="icon-start"
            ></ui-icon>
          </ui-button>
        </div>
      </div>

      <div class="code-block-content" [class.show]="showCode()">
        <div class="scroll-container">
          <pre *ngIf="code"><code [innerHTML]="highlightedCode"></code></pre>
          <div *ngIf="!code" class="empty-state">No code generated yet...</div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        margin: 1.5rem 0;
      }

      .code-block-wrapper {
        border: 1px solid var(--border-color, #e2e8f0);
        border-radius: 12px;
        overflow: hidden;
        background: var(--card-bg, #ffffff);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow:
          0 4px 6px -1px rgba(0, 0, 0, 0.05),
          0 2px 4px -1px rgba(0, 0, 0, 0.03);

        &:hover {
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.08),
            0 4px 6px -2px rgba(0, 0, 0, 0.04);
          border-color: #667eea40;
        }

        &.expanded {
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      }

      .code-block-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1.25rem;
        background: linear-gradient(to right, #f8fafc, #ffffff);
        border-bottom: 1px solid var(--border-color, #e2e8f0);
      }

      .header-main {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .header-icon {
        color: #667eea;
        font-size: 1rem;
      }

      .code-block-title {
        font-weight: 600;
        font-size: 0.95rem;
        color: var(--text-primary, #1e293b);
        letter-spacing: -0.01em;
      }

      .language-badge {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        padding: 0.2rem 0.5rem;
        background: #f1f5f9;
        color: #64748b;
        border-radius: 4px;
        letter-spacing: 0.05em;
      }

      .code-block-actions {
        display: flex;
        gap: 0.4rem;
      }

      .action-btn {
        --ui-button-radius: 8px;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          transform: translateY(-1px);
        }

        &:active {
          transform: translateY(0);
        }
      }

      .copy-btn.copied {
        animation: pulse-success 0.5s ease;
      }

      @keyframes pulse-success {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }

      .code-block-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        background: #1e1e1e;

        &.show {
          max-height: 800px;
        }
      }

      .scroll-container {
        overflow-x: auto;
        padding: 1.25rem;

        &::-webkit-scrollbar {
          height: 8px;
        }
        &::-webkit-scrollbar-track {
          background: #2d2d2d;
        }
        &::-webkit-scrollbar-thumb {
          background: #4a4a4a;
          border-radius: 4px;
          &:hover {
            background: #5a5a5a;
          }
        }
      }

      pre {
        margin: 0;
        background: transparent;
      }

      code {
        font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
        font-size: 0.85rem;
        line-height: 1.6;
        color: #d4d4d4;
        white-space: pre-wrap;
      }

      .empty-state {
        color: #64748b;
        font-style: italic;
        text-align: center;
        padding: 1rem;
      }

      /* Syntax highlighting */
      :global {
        .hljs-keyword {
          color: #569cd6;
          font-weight: 500;
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
        .hljs-name {
          color: #569cd6;
        }
        .hljs-punctuation {
          color: #808080;
        }
      }

      /* Dark mode support */
      :host-context(.dark-theme) {
        .code-block-wrapper {
          background: #1e293b;
          border-color: #334155;
        }
        .code-block-header {
          background: linear-gradient(to right, #1e293b, #0f172a);
          border-bottom-color: #334155;
        }
        .code-block-title {
          color: #f1f5f9;
        }
        .language-badge {
          background: #334155;
          color: #94a3b8;
        }
      }
    `,
  ],
})
export class CodeBlockComponent implements OnInit, OnChanges {
  @Input() code: string = '';
  @Input() title: string = 'Code Example';
  @Input() language: string = 'typescript';

  showCode = signal(true);
  copied = signal(false);

  // We'll use a getter to ensure the highlighted code is always in sync with the input
  get highlightedCode(): string {
    if (!this.code) return '';
    return this.escapeHtml(this.code.trim());
  }

  ngOnInit() {
    console.log('CodeBlock ngOnInit - title:', this.title, 'code length:', this.code?.length);
    if (!this.code) {
      console.warn('CodeBlock: code input is empty in ngOnInit');
    }
  }

  ngOnChanges(changes: any) {
    if (changes.code) {
      console.log(
        'CodeBlock ngOnChanges - code changed, new length:',
        changes.code.currentValue?.length,
      );
    }
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
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}
