import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnchorPlaygroundComponent } from './components/anchor-playground/anchor-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-anchor-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AnchorPlaygroundComponent, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-anchor-demo.component.html',
  styleUrl: './set-anchor-demo.component.scss',
})
export class SetAnchorDemoComponent implements OnInit {
  // Data for static examples
  basicItems = [
    { id: 'start', label: 'Start' },
    { id: 'middle', label: 'Middle' },
    { id: 'end', label: 'End' },
  ];

  numberedItems = [
    { id: 'num-1', label: 'First' },
    { id: 'num-2', label: 'Second' },
    { id: 'num-3', label: 'Third' },
  ];

  playgroundCode = `<app-anchor
  href="#section"
  [smooth]="true"
>
  Jump to section
</app-anchor>`;

  ngOnInit() {}
}
