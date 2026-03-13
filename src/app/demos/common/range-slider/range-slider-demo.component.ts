import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmRangeSliderPlaygroundComponent } from '../../../playground/common/range-slider-playground/range-slider-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-range-slider-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmRangeSliderPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './range-slider-demo.component.html',
  styleUrl: './range-slider-demo.component.scss',
})
export class DmRangeSliderDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Single Slider', icon: 'sliders', iconLibrary: 'lucide' },
    { id: 'range', title: 'Dual Range', icon: 'git-commit', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visual Styles', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'marks', title: 'Step Marks', icon: 'align-justify', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced Scaling', icon: 'activity', iconLibrary: 'lucide' },
    { id: 'vertical', title: 'Vertical Mode', icon: 'arrow-up-down', iconLibrary: 'lucide' },
    { id: 'icons', title: 'With Icons', icon: 'image', iconLibrary: 'lucide' },
  ];

  basicCode = signal(`<ui-range-slider value="30" min="0" max="100"></ui-range-slider>
<ui-range-slider step="10" show-marks value="50"></ui-range-slider>`);

  rangeCode = signal(`<ui-range-slider range start-value="20" end-value="80"></ui-range-slider>
<ui-range-slider range start-value="40" end-value="60" color="success"></ui-range-slider>`);

  visualsCode = signal(`<ui-range-slider size="sm" label="Small"></ui-range-slider>
<ui-range-slider size="lg" color="#8b5cf6" label="Custom Color"></ui-range-slider>
<ui-range-slider tooltip-always-visible label="Always Visible Tooltip"></ui-range-slider>`);

  marksCode = signal(`<ui-range-slider show-marks step="25" label="Quarter Steps"></ui-range-slider>
<ui-range-slider 
  show-marks 
  [marks]="[{value: 0, label: 'Min'}, {value: 50, label: 'Mid'}, {value: 100, label: 'Max'}]"
></ui-range-slider>`);

  advancedCode = signal(`<!-- Restricted Values -->
<ui-range-slider 
  [restricted-values]="[0, 25, 50, 75, 100]" 
  show-marks 
  label="Restricted to Specific Steps"
></ui-range-slider>

<!-- Custom/Non-linear Steps -->
<ui-range-slider 
  [custom-steps]="[0, 10, 20, 50, 100, 200, 500]" 
  show-marks 
  label="Non-linear Scale (Logarithmic style)"
></ui-range-slider>`);

  verticalCode = signal(`<div style="height: 300px;">
  <ui-range-slider vertical value="50"></ui-range-slider>
  <ui-range-slider vertical range start-value="25" end-value="75" color="danger"></ui-range-slider>
</div>`);

  iconsCode = signal(`<ui-range-slider 
  start-icon="volume-X" 
  end-icon="volume-2" 
  value="60"
></ui-range-slider>
<ui-range-slider 
  start-icon="sun" 
  end-icon="moon" 
  value="30" 
  color="warning"
></ui-range-slider>`);

  onSliderChange(event: any) {
    console.log('Slider event:', event.detail);
  }
}
