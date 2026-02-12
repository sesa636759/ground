import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { SpeedometerPlaygroundComponent } from './components/speedometer-playground/speedometer-playground.component';

@Component({
  selector: 'app-app-speedometer-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, SpeedometerPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-speedometer-demo.component.html',
  styleUrl: './app-speedometer-demo.component.scss',
})
export class AppSpeedometerDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'modes', name: 'Color Modes', icon: '🌈', color: '#3b82f6' },
    { id: 'sizes', name: 'Scaling', icon: '📐', color: '#10b981' },
  ];

  playgroundCode = `<ui-speedometer [value]="65" label="MPH" color-mode="gradient"></ui-speedometer>`;

  modesCode = `<!-- Solid Arc -->
<ui-speedometer color-mode="solid" [value]="40"></ui-speedometer>

<!-- Segmented Arc -->
<ui-speedometer color-mode="segments" [value]="80"></ui-speedometer>`;

  sizesCode = `<!-- Small Gauge -->
<ui-speedometer [size]="150" [arc-width]="10"></ui-speedometer>

<!-- Large Hero Gauge -->
<ui-speedometer [size]="400" [arc-width]="40"></ui-speedometer>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
