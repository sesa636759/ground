import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-playground.component.html',
  styleUrl: './app-playground.component.scss',
})
export class AppPlaygroundComponent {
  @Input() items: any[] | string = [];
  @Input() defaultOpen: any[] | string = [];
  @Input() code: string = '';
  @Input() layout: 'row' | 'column' = 'row';
  @Output() reset = new EventEmitter<void>();

  get parsedItems(): any[] {
    try {
      if (Array.isArray(this.items)) {
        return this.items;
      }
      if (typeof this.items === 'string' && this.items.trim()) {
        return JSON.parse(this.items);
      }
    } catch (e) {
      console.error('AppPlayground: Error parsing items:', e, this.items);
    }
    return [];
  }

  get parsedDefaultOpen(): string[] {
    try {
      if (Array.isArray(this.defaultOpen)) {
        return this.defaultOpen;
      }
      if (typeof this.defaultOpen === 'string' && this.defaultOpen.trim()) {
        return JSON.parse(this.defaultOpen);
      }
    } catch (e) {
      console.error('AppPlayground: Error parsing defaultOpen:', e, this.defaultOpen);
    }
    return [];
  }
}
