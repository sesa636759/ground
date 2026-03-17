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

  basicCode = signal(`<dui-range-slider value="30" min="0" max="100"></dui-range-slider>
<dui-range-slider step="10" show-marks value="50"></dui-range-slider>`);

  rangeCode = signal(`<dui-range-slider range start-value="20" end-value="80"></dui-range-slider>
<dui-range-slider range start-value="40" end-value="60" color="success"></dui-range-slider>`);

  visualsCode = signal(`<dui-range-slider size="sm" label="Small"></dui-range-slider>
<dui-range-slider size="lg" color="#8b5cf6" label="Custom Color"></dui-range-slider>
<dui-range-slider tooltip-always-visible label="Always Visible Tooltip"></dui-range-slider>`);

  marksCode =
    signal(`<dui-range-slider show-marks step="25" label="Quarter Steps"></dui-range-slider>
<dui-range-slider 
  show-marks 
  [marks]="[{value: 0, label: 'Min'}, {value: 50, label: 'Mid'}, {value: 100, label: 'Max'}]"
></dui-range-slider>`);

  advancedCode = signal(`<!-- Restricted Values -->
<dui-range-slider 
  [restricted-values]="[0, 25, 50, 75, 100]" 
  show-marks 
  label="Restricted to Specific Steps"
></dui-range-slider>

<!-- Custom/Non-linear Steps -->
<dui-range-slider 
  [custom-steps]="[0, 10, 20, 50, 100, 200, 500]" 
  show-marks 
  label="Non-linear Scale (Logarithmic style)"
></dui-range-slider>`);

  verticalCode = signal(`<div style="height: 300px;">
  <dui-range-slider vertical value="50"></dui-range-slider>
  <dui-range-slider vertical range start-value="25" end-value="75" color="danger"></dui-range-slider>
</div>`);

  iconsCode = signal(`<dui-range-slider 
  start-icon="volume-X" 
  end-icon="volume-2" 
  value="60"
></dui-range-slider>
<dui-range-slider 
  start-icon="sun" 
  end-icon="moon" 
  value="30" 
  color="warning"
></dui-range-slider>`);

  onSliderChange(event: any) {
    console.log('Slider event:', event.detail);
  }
}
