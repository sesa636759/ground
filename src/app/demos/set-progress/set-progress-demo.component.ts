import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressPlaygroundComponent } from './components/progress-playground/progress-playground.component';

@Component({
  selector: 'app-set-progress-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgressPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-progress-demo.component.html',
  styleUrl: './set-progress-demo.component.scss',
})
export class SetProgressDemoComponent implements OnInit {
  ngOnInit() {}
}
