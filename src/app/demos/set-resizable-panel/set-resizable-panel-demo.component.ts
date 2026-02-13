import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { ResizablePanelPlaygroundComponent } from './components/resizable-panel-playground/resizable-panel-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-resizable-panel-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputValueAccessorDirective, AppCheckboxValueAccessorDirective, ResizablePanelPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-resizable-panel-demo.component.html',
  styleUrl: './set-resizable-panel-demo.component.scss',
})
export class SetResizablePanelDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'orientations', title: 'Basic Orientations', icon: '📋' },
    { id: 'complex', title: 'Complex Layouts', icon: '🥈' },
    { id: 'features', title: 'Premium Features', icon: '💎' },
  ];

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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
