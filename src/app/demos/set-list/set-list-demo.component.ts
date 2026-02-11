import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPlaygroundComponent } from './components/list-playground/list-playground.component';

@Component({
  selector: 'app-set-list-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ListPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-list-demo.component.html',
  styleUrl: './set-list-demo.component.scss',
})
export class SetListDemoComponent implements OnInit {
  ngOnInit() {}
}
