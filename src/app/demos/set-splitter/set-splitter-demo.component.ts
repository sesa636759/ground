import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { SplitterPlaygroundComponent } from './components/splitter-playground/splitter-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-splitter-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputValueAccessorDirective, AppCheckboxValueAccessorDirective, SplitterPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-splitter-demo.component.html',
  styleUrl: './set-splitter-demo.component.scss',
})
export class SetSplitterDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'orientations', title: 'Basic Orientations', icon: '📋' },
    { id: 'complex', title: 'Complex Layouts', icon: '🥈' },
    { id: 'features', title: 'Premium Features', icon: '💎' },
  ];

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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Helper for JSON strings
  jsonOptions = (opts: any) => JSON.stringify(opts);
}
