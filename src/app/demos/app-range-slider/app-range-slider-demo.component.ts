import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { RangeSliderPlaygroundComponent } from './components/range-slider-playground/range-slider-playground.component';

@Component({
  selector: 'app-app-range-slider-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, RangeSliderPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-range-slider-demo.component.html',
  styleUrl: './app-range-slider-demo.component.scss',
})
export class AppRangeSliderDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'modes', name: 'Slider Modes', icon: '↔️', color: '#3b82f6' },
    { id: 'layouts', name: 'Layouts', icon: '📐', color: '#10b981' },
  ];

  playgroundCode = `<ui-range-slider [min]="0" [max]="100" [value]="[20, 80]" range></ui-range-slider>`;

  modesCode = `<!-- Single Thumb -->
<ui-range-slider [value]="45"></ui-range-slider>

<!-- Range (Dual Thumbs) -->
<ui-range-slider range [value]="[25, 75]"></ui-range-slider>`;

  layoutsCode = `<!-- Vertical Slider -->
<ui-range-slider orientation="vertical" height="200px"></ui-range-slider>

<!-- With Step Increments -->
<ui-range-slider [step]="10" [min]="0" [max]="100"></ui-range-slider>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
