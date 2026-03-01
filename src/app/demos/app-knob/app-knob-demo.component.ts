import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/ui-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/ui-checkbox-value-accessor.directive';
import { KnobPlaygroundComponent } from './components/knob-playground/knob-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-knob-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    KnobPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-knob-demo.component.html',
  styleUrl: './app-knob-demo.component.scss',
})
export class AppKnobDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'styles', name: 'Visual Styles', icon: '🎨', color: '#3b82f6' },
    { id: 'readonly', name: 'States', icon: '🔒', color: '#10b981' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-knob [value]="50" [size]="150" value-color="#3b82f6"></ui-knob>`;

  stylesCode = `<!-- Custom Colors & Stroke -->
<ui-knob value-color="#10b981" [stroke-width]="20"></ui-knob>

<!-- Small Compact Knob -->
<ui-knob [size]="80" [show-value]="false"></ui-knob>`;

  readonlyCode = `<!-- Readonly Display -->
<ui-knob [value]="75" readonly></ui-knob>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
