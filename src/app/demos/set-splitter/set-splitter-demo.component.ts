import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitterPlaygroundComponent } from './components/splitter-playground/splitter-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-splitter-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, SplitterPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-splitter-demo.component.html',
  styleUrl: './set-splitter-demo.component.scss',
})
export class SetSplitterDemoComponent implements OnInit {
  basicPanels = [
    { minSize: 20, maxSize: 80 },
    { minSize: 20, maxSize: 80 },
  ];

  collapsiblePanels = [{ collapsible: true, minSize: 10 }, { minSize: 20 }];

  constraintsPanels = [
    { minSize: 20, maxSize: 40 },
    { minSize: 20, maxSize: 80 },
  ];

  threePanels = [{}, {}, {}];

  playgroundCode = `<app-splitter
  direction="horizontal"
  [panels]="panels"
></app-splitter>`;

  ngOnInit() {}

  // Helper for JSON strings
  jsonOptions = (opts: any) => JSON.stringify(opts);
}
