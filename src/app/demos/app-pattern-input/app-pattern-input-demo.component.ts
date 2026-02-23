import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { PatternInputPlaygroundComponent } from './components/pattern-input-playground/pattern-input-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-pattern-input-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PatternInputPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-pattern-input-demo.component.html',
  styleUrl: './app-pattern-input-demo.component.scss',
})
export class AppPatternInputDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'patterns', name: 'Common Patterns', icon: '🎭', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-pattern-input mask="(999) 999-9999" placeholder="Phone"></ui-pattern-input>`;

  patternsCode = `<!-- Credit Card -->
<ui-pattern-input mask="9999-9999-9999-9999"></ui-pattern-input>

<!-- Date -->
<ui-pattern-input mask="99/99/9999" placeholder="MM/DD/YYYY"></ui-pattern-input>

<!-- SSN -->
<ui-pattern-input mask="999-99-9999"></ui-pattern-input>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
