import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { AnchorPlaygroundComponent } from './components/anchor-playground/anchor-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-anchor-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AnchorPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-anchor-demo.component.html',
  styleUrl: './set-anchor-demo.component.scss',
})
export class SetAnchorDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'orientation', title: 'Orientation & Layout', icon: '🧭' },
    { id: 'styles', title: 'Styles & Features', icon: '🎨' },
  ];

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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
