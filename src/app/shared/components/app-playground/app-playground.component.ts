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

  ngOnInit() {
    // console.log('AppPlayground initialized with items:', this.items);
  }

  // ui-accordion handles both string and array inputs for items and defaultOpen
}
