import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { ScrollTopPlaygroundComponent } from './components/scroll-top-playground/scroll-top-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-scroll-top-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ScrollTopPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-scroll-top-demo.component.html',
  styleUrl: './app-scroll-top-demo.component.scss',
})
export class AppScrollTopDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'shapes', name: 'Shapes & Icons', icon: '💎', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-scroll-top threshold="400" icon="↑"></ui-scroll-top>`;

  shapesCode = `<!-- Square Shape -->
<ui-scroll-top shape="square" icon="TOP"></ui-scroll-top>

<!-- Circle with Custom Icon -->
<ui-scroll-top shape="circle" icon="🚀"></ui-scroll-top>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
