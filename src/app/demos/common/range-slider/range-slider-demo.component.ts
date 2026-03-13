import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmRangeSliderPlaygroundComponent } from '../../../playground/common/range-slider-playground/range-slider-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-range-slider-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmRangeSliderPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './range-slider-demo.component.html',
  styleUrl: './range-slider-demo.component.scss',
})
export class DmRangeSliderDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'modes', title: 'Slider Modes', icon: 'sliders-horizontal', iconLibrary: 'lucide' },
    { id: 'layouts', title: 'Layouts', icon: 'layout', iconLibrary: 'lucide' },
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
