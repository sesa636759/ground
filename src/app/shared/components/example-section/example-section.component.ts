import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pg-example-section',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './example-section.component.html',
  styleUrl: './example-section.component.scss',
})
export class ExampleSectionComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() code: string = '';
  @Input() language: string = 'html';
  @Input() id: string = '';
  @Input() expanded: boolean = true;

  ngOnInit(): void {}

  ngOnChanges(): void {}
}



