import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollTopPlaygroundComponent } from './components/scroll-top-playground/scroll-top-playground.component';

@Component({
  selector: 'app-set-scroll-top-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollTopPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-scroll-top-demo.component.html',
  styleUrl: './set-scroll-top-demo.component.scss',
})
export class SetScrollTopDemoComponent implements OnInit {
  ngOnInit() {}
}
