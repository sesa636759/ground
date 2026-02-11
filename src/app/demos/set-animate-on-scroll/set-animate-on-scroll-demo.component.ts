import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollPlaygroundComponent } from './components/animate-on-scroll-playground/animate-on-scroll-playground.component';

@Component({
  selector: 'app-set-animate-on-scroll-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimateOnScrollPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-animate-on-scroll-demo.component.html',
  styleUrl: './set-animate-on-scroll-demo.component.scss',
})
export class SetAnimateOnScrollDemoComponent implements OnInit {
  ngOnInit() {}
}
