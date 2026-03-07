import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-component-card',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './component-card.component.html',
  styleUrl: './component-card.component.scss',
})
export class ComponentCardComponent {
  @Input() componentId!: string;
  @Input() label!: string;
  @Input() category?: string;
  @Input() icon?: string;
  @Input() iconLibrary: string = 'lucide';
  @Input() badge?: string;
  @Input() description?: string;
  @Input() previewSvg?: SafeHtml | string;
  @Input() imageUrl?: string;
  @Input() viewMode: 'grid' | 'list' = 'grid';

  @Output() cardClick = new EventEmitter<string>();
  @Output() docsClick = new EventEmitter<string>();

  onDemoClick(event?: Event) {
    if (event) event.stopPropagation();
    this.cardClick.emit(this.componentId);
  }

  onDocsClick(event: Event) {
    event.stopPropagation();
    this.docsClick.emit(this.componentId);
  }
}



