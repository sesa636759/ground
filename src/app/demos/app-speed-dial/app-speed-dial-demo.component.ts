import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { SpeedDialPlaygroundComponent } from './components/speed-dial-playground/speed-dial-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-speed-dial-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SpeedDialPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-speed-dial-demo.component.html',
  styleUrl: './app-speed-dial-demo.component.scss',
})
export class AppSpeedDialDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'directions', name: 'Opening Directions', icon: '↔️', color: '#3b82f6' },
    { id: 'types', name: 'Motion Patterns', icon: '🌀', color: '#10b981' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  items = JSON.stringify([
    { label: 'Add', icon: '➕' },
    { label: 'Update', icon: '🔄' },
    { label: 'Delete', icon: '🗑️' },
    { label: 'Home', icon: '🏠' },
  ]);

  playgroundCode = `<ui-speed-dial [model]="items" direction="up"></ui-speed-dial>`;

  directionsCode = `<!-- Vertical Up -->
<ui-speed-dial direction="up" [model]="items"></ui-speed-dial>

<!-- Horizontal Right -->
<ui-speed-dial direction="right" [model]="items"></ui-speed-dial>`;

  typesCode = `<!-- Circular Expansion -->
<ui-speed-dial type="circle" [radius]="100" [model]="items"></ui-speed-dial>

<!-- Half Circle -->
<ui-speed-dial type="half-circle" direction="up" [model]="items"></ui-speed-dial>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
