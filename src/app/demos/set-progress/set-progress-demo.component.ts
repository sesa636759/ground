import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressPlaygroundComponent } from './components/progress-playground/progress-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-progress-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgressPlaygroundComponent, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-progress-demo.component.html',
  styleUrl: './set-progress-demo.component.scss',
})
export class SetProgressDemoComponent implements OnInit {
  playgroundCode = `<app-progress
  [value]="50"
  [max]="100"
  variant="primary"
></app-progress>`;

  ngOnInit() {}
}
