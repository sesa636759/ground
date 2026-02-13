import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { TabsPlaygroundComponent } from './components/tabs-playground/tabs-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-tabs-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputValueAccessorDirective, AppCheckboxValueAccessorDirective, TabsPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tabs-demo.component.html',
  styleUrl: './set-tabs-demo.component.scss',
})
export class SetTabsDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'visual-variants', title: 'Visual Variants', icon: '🎨' },
    { id: 'advanced-layouts', title: 'Advanced Layouts', icon: '🥈' },
    { id: 'interactive-features', title: 'Interactive Features', icon: '🚀' },
  ];

  playgroundCode = `<app-tabs>
  <app-tab label="Tab 1">
    Content for tab 1
  </app-tab>
  <app-tab label="Tab 2">
    Content for tab 2
  </app-tab>
</app-tabs>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
