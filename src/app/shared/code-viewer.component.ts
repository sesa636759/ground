import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="code-viewer">
      <div class="code-header">
        <h4>{{ title }}</h4>
        <button class="copy-btn" (click)="copyCode()" [class.copied]="copied">
          {{ copied ? '✓ Copied!' : '📋 Copy' }}
        </button>
      </div>
      <pre><code [innerHTML]="highlightedCode"></code></pre>
    </div>
  `,
  styles: [
    `
      .code-viewer {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        overflow: hidden;
        margin-top: 24px;
      }

      .code-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
        background: var(--surface-1);
        border-bottom: 1px solid var(--border-color);
      }

      .code-header h4 {
        margin: 0;
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      .copy-btn {
        padding: 6px 12px;
        background: var(--surface-2);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        color: var(--text-primary);
        font-size: 0.8125rem;
        cursor: pointer;
        transition: all 0.2s;
      }

      .copy-btn:hover {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }

      .copy-btn.copied {
        background: #10b981;
        color: white;
        border-color: #10b981;
      }

      pre {
        margin: 0;
        padding: 20px;
        overflow-x: auto;
      }

      code {
        font-family: 'Courier New', Consolas, Monaco, monospace;
        font-size: 0.875rem;
        line-height: 1.6;
        color: var(--text-primary);
      }

      code :global(.tag) {
        color: #e879f9;
      }
      code :global(.attr) {
        color: #60a5fa;
      }
      code :global(.value) {
        color: #34d399;
      }
      code :global(.comment) {
        color: #6b7280;
        font-style: italic;
      }
    `,
  ],
})
export class CodeViewerComponent {
  @Input() code: string = '';
  @Input() title: string = 'Generated Code';
  @Input() language: string = 'html';

  copied = false;

  get highlightedCode(): string {
    if (this.language === 'html') {
      return this.highlightHTML(this.code);
    }
    return this.escapeHTML(this.code);
  }

  highlightHTML(code: string): string {
    // 1. Escape HTML special characters (but keep quotes for regex matching)
    let text = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // 2. Highlight Strings (Attribute Values) - MUST BE FIRST to avoid matching inside our own spans from subsequent steps
    text = text.replace(/("[^"]*")/g, '<span class="value">$1</span>');

    // 3. Highlight Comments
    text = text.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="comment">$1</span>');

    // 4. Highlight Tag Names (opening and closing)
    // Match &lt; followed by tag name (alphanumeric + hyphen + numbers), OR &lt;/ followed by tag name
    text = text.replace(/(&lt;\/?)(\w[\w-]*)/g, '$1<span class="tag">$2</span>');

    return text;
  }

  escapeHTML(code: string): string {
    // Only escape basic chars for the fallback
    return code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  copyCode() {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    });
  }
}
