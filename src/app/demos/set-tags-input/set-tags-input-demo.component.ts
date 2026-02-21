import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { TagsInputPlaygroundComponent } from './components/tags-input-playground/tags-input-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-tags-input-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TagsInputPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tags-input-demo.component.html',
  styleUrl: './set-tags-input-demo.component.scss',
})
export class SetTagsInputDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'basic', title: 'Basic Usage', icon: '📝' },
    { id: 'colors', title: 'Color Variants', icon: '🎨' },
    { id: 'sizes', title: 'Size Variants', icon: '📏' },
    { id: 'premium', title: 'Premium Features', icon: '💎' },
    { id: 'states', title: 'Component States', icon: '🔄' },
  ];

  defaultTags = ['Angular', 'TypeScript', 'Stencil'];
  skillTags = ['JavaScript', 'CSS', 'HTML', 'React', 'Vue'];
  categoryTags = ['Frontend', 'Backend', 'DevOps'];

  playgroundCode = `<app-tags-input
  [(ngModel)]="tags"
  placeholder="Add tags"
  [max]="10"
></app-tags-input>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
