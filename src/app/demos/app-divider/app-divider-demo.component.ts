import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DividerPlaygroundComponent } from './components/divider-playground/divider-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-divider-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockComponent,
    DividerPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-divider-demo.component.html',
  styleUrl: './app-divider-demo.component.scss',
})
export class AppDividerDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'variants', name: 'Variants', icon: '🎨', color: '#3b82f6' },
    { id: 'text-content', name: 'Text & Content', icon: '📝', color: '#10b981' },
    { id: 'vertical', name: 'Vertical', icon: '↕️', color: '#f59e0b' },
    { id: 'shapes', name: 'Shapes', icon: '📐', color: '#ef4444' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-divider text="SECTION 1" variant="dashed" size="lg"></ui-divider>`;

  variantsCode = `<ui-divider variant="solid"></ui-divider>
<ui-divider variant="dashed"></ui-divider>
<ui-divider variant="dotted"></ui-divider>
<ui-divider variant="gradient"></ui-divider>`;

  textContentCode = `<ui-divider text="Centered Text"></ui-divider>
<ui-divider text="Left Text" text-align="left"></ui-divider>
<ui-divider icon="⭐"></ui-divider>
<ui-divider badge="99+"></ui-divider>`;

  verticalCode = `<div style="display: flex; height: 100px;">
  <div>Left</div>
  <ui-divider orientation="vertical"></ui-divider>
  <div>Right</div>
</div>`;

  shapesCode = `<ui-divider shape="wave" shape-color="#3b82f6"></ui-divider>
<ui-divider shape="curve"></ui-divider>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
