import { Component, Input, signal, computed, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss',
})
export class CodeBlockComponent {
  @Input() code: string = '';
  @Input() title: string = 'Code Example';
  @Input() language: string = 'typescript';

  showCode = signal(true);
  copied = signal(false);

  highlightedCode = signal('');

  // Computed signals for template readability
  toggleButtonLabel = computed(() => (this.showCode() ? 'Hide Code' : 'Show Code'));
  toggleButtonAriaLabel = computed(() => (this.showCode() ? 'Hide code' : 'Show code'));
  toggleButtonVariant = computed(() => (this.showCode() ? 'secondary' : 'primary'));
  toggleButtonIcon = computed(() => (this.showCode() ? 'fa fa-eye-slash' : 'fa fa-eye'));

  copyButtonLabel = computed(() => (this.copied() ? 'Copied!' : 'Copy Code'));
  copyButtonIcon = computed(() => (this.copied() ? 'fa fa-check' : 'fa fa-copy'));

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
