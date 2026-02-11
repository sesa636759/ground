import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardPlaygroundComponent } from './components/card-playground/card-playground.component';

@Component({
  selector: 'app-set-card-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CardPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-card-demo.component.html',
  styleUrl: './set-card-demo.component.scss',
})
export class SetCardDemoComponent implements OnInit {
  isLoading = false;

  ngOnInit() {}

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
