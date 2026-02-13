import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { StackPlaygroundComponent } from './components/stack-playground/stack-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-stack-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockComponent,
    StackPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-stack-demo.component.html',
  styleUrl: './app-stack-demo.component.scss',
})
export class AppStackDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'direction', name: 'Direction', icon: '↔️', color: '#3b82f6' },
    { id: 'spacing', name: 'Spacing', icon: '📏', color: '#10b981' },
    { id: 'overlap', name: 'Overlap', icon: '叠', color: '#f59e0b' },
    { id: 'dividers', name: 'Dividers', icon: '➖', color: '#ef4444' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-stack direction="horizontal" spacing="12px" align="center">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</ui-stack>`;

  directionCode = `<!-- Horizontal -->
<ui-stack direction="horizontal">...</ui-stack>

<!-- Vertical -->
<ui-stack direction="vertical">...</ui-stack>`;

  spacingCode = `<!-- Large Spacing -->
<ui-stack spacing="32px">...</ui-stack>

<!-- Compact -->
<ui-stack spacing="4px">...</ui-stack>`;

  overlapCode = `<!-- Avatar Stack -->
<ui-stack overlap spacing="-12px">
  <div class="avatar">JD</div>
  <div class="avatar">AS</div>
  <div class="avatar">MK</div>
</ui-stack>`;

  dividersCode = `<ui-stack show-dividers spacing="24px">
  <div>Item A</div>
  <div>Item B</div>
  <div>Item C</div>
</ui-stack>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
