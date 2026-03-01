import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-playground.component.html',
  styleUrl: './app-playground.component.scss'
})
export class AppPlaygroundComponent {
  @Input() accordionItems: any[] | string = [];
  @Input() defaultOpen: any[] | string = [];

  get parsedItems(): any[] {
    if (typeof this.accordionItems === 'string') {
      try {
        return JSON.parse(this.accordionItems);
      } catch {
        return [];
      }
    }
    return this.accordionItems || [];
  }

  get parsedDefaultOpen(): string[] {
    if (typeof this.defaultOpen === 'string') {
      try {
        return JSON.parse(this.defaultOpen);
      } catch {
        // If parsing fails, use the first item as default if available
        const items = this.parsedItems;
        return items.length > 0 ? [items[0].id] : [];
      }
    }
    
    // If it's an array but empty, and we have items, open the first one
    const openArray = this.defaultOpen as string[];
    if ((!openArray || openArray.length === 0) && this.parsedItems.length > 0) {
        return [this.parsedItems[0].id];
    }
    
    return openArray || [];
  }

  get stringifiedItems(): string {
    return JSON.stringify(this.parsedItems);
  }

  get stringifiedDefaultOpen(): string {
    return JSON.stringify(this.parsedDefaultOpen);
  }
}
