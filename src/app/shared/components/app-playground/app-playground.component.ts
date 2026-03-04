import {
  Component,
  Input,
  Output,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-playground.component.html',
  styleUrl: './app-playground.component.scss',
})
export class AppPlaygroundComponent implements OnInit {
  @Input() items: any[] | string = [];
  @Input() defaultOpen: any[] | string = [];
  @Input() code: string = '';
  @Input() layout: 'row' | 'column' = 'row';
  @Output() reset = new EventEmitter<void>();

  get parsedItems(): any[] {
    if (typeof this.items === 'string' && this.items.trim()) {
      try {
        return JSON.parse(this.items);
      } catch (e) {
        console.error('AppPlayground: Failed to parse items string:', this.items, e);
        return [];
      }
    }
    return Array.isArray(this.items) ? this.items : [];
  }

  get parsedDefaultOpen(): string[] {
    if (typeof this.defaultOpen === 'string' && this.defaultOpen.trim()) {
      try {
        return JSON.parse(this.defaultOpen);
      } catch (e) {
        console.error('AppPlayground: Failed to parse defaultOpen string:', this.defaultOpen, e);
        return [];
      }
    }
    return Array.isArray(this.defaultOpen) ? this.defaultOpen : [];
  }

  ngOnInit() {}
}
