import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { ProgressPlaygroundComponent } from './components/progress-playground/progress-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-progress-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    ProgressPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-progress-demo.component.html',
  styleUrl: './set-progress-demo.component.scss',
})
export class SetProgressDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'line', title: 'Line Progress', icon: '📏' },
    { id: 'circular', title: 'Circular & Dashboard', icon: '⚪' },
    { id: 'premium', title: 'Premium Effects', icon: '💎' },
  ];

  playgroundCode = `<app-progress
  [value]="50"
  [max]="100"
  variant="primary"
></app-progress>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
