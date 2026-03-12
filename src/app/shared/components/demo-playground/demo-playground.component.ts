import {
  Component,
  Input,
  Output,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pg-playground',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './demo-playground.component.html',
  styleUrl: './demo-playground.component.scss',
})
export class DemoPlaygroundComponent implements OnInit, OnChanges {
  private cd = inject(ChangeDetectorRef);
  @Input() items: any[] | string = [];
  @Input() defaultOpen: any[] | string = [];
  @Input() code: string = '';
  @Input() layout: 'row' | 'column' = 'row';
  @Output() reset = new EventEmitter<void>();

  showCodePreview = true;
  isExpanded = true;

  get parsedItems(): any[] {
    if (typeof this.items === 'string' && this.items.trim()) {
      try {
        return JSON.parse(this.items);
      } catch (e) {
        console.error('AppPlayground: Failed to parse items string: ', this.items, e);
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
        console.error('AppPlayground: Failed to parse defaultOpen string: ', this.defaultOpen, e);
        return [];
      }
    }
    return Array.isArray(this.defaultOpen) ? this.defaultOpen : [];
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['code'] && !changes['code'].firstChange) {
      console.log('Playground: Code updated', changes['code'].currentValue.length);
      this.refreshCode();
    }
  }

  refreshCode() {
    this.showCodePreview = false;
    this.cd.detectChanges();
    setTimeout(() => {
      this.showCodePreview = true;
      this.cd.detectChanges();
    }, 50);
  }

  handleExpandedChange(event: any) {
    this.isExpanded = event.detail;
  }
}
