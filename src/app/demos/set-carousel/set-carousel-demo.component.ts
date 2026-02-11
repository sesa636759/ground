import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselPlaygroundComponent } from './components/carousel-playground/carousel-playground.component';

@Component({
  selector: 'app-set-carousel-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CarouselPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-carousel-demo.component.html',
  styleUrl: './set-carousel-demo.component.scss',
})
export class SetCarouselDemoComponent implements OnInit {
  ngOnInit() {}
}
