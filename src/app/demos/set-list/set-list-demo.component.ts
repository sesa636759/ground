import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPlaygroundComponent } from './components/list-playground/list-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-list-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ListPlaygroundComponent, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-list-demo.component.html',
  styleUrl: './set-list-demo.component.scss',
})
export class SetListDemoComponent implements OnInit {
  playgroundCode = `<app-list
  [items]="listItems"
  [selectable]="true"
  [hoverable]="true"
></app-list>`;

  ngOnInit() {}
}
