import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/ui-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/ui-checkbox-value-accessor.directive';
import { RangeSliderPlaygroundComponent } from './components/range-slider-playground/range-slider-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-range-slider-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RangeSliderPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-range-slider-demo.component.html',
  styleUrl: './app-range-slider-demo.component.scss',
})
export class AppRangeSliderDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'modes', title: 'Slider Modes', icon: '↔️', color: '#3b82f6' },
    { id: 'layouts', title: 'Layouts', icon: '📐', color: '#10b981' },
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
}
