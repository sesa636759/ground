import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResizablePanelPlaygroundComponent } from './components/resizable-panel-playground/resizable-panel-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-resizable-panel-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ResizablePanelPlaygroundComponent, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-resizable-panel-demo.component.html',
  styleUrl: './set-resizable-panel-demo.component.scss',
})
export class SetResizablePanelDemoComponent implements OnInit {
  basicHPanels = [
    { id: 'p1', size: 30, minSize: 15 },
    { id: 'p2', size: 70 },
  ];

  basicVPanels = [
    { id: 't1', size: 50 },
    { id: 't2', size: 50 },
  ];

  nestedOuter = [
    { id: 'sidebar', size: 25, minSize: 15, maxSize: 50, collapsible: true },
    { id: 'main', size: 75 },
  ];

  nestedInner = [
    { id: 'editor', size: 70, minSize: 30 },
    { id: 'terminal', size: 30, minSize: 10 },
  ];

  playgroundCode = `<app-resizable-panel
  [panels]="panels"
  direction="horizontal"
></app-resizable-panel>`;

  ngOnInit() {}
}
