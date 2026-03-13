import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmKnobPlaygroundComponent } from '../../../playground/common/knob-playground/knob-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'dm-knob-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmKnobPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './knob-demo.component.html',
  styleUrl: './knob-demo.component.scss',
})
export class DmKnobDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'visuals', title: 'Color & Aesthetics', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'gauges', title: 'Functional Gauges', icon: 'gauge', iconLibrary: 'lucide' },
    { id: 'ticks', title: 'Ticks & Labels', icon: 'list', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior & Input', icon: 'mouse-pointer-2', iconLibrary: 'lucide' },
    { id: 'states', title: 'Interactive States', icon: 'zap', iconLibrary: 'lucide' },
  ];

  visualsCode = signal(`<ui-knob value="65" color="#3b82f6" track-color="#e2e8f0" size="120"></ui-knob>`);
  gaugesCode = signal(`<ui-knob type="gauge" min="0" max="220" value="120" start-angle="135" end-angle="45"></ui-knob>`);
  ticksCode = signal(`<ui-knob show-ticks tick-count="12" show-labels [label-step]="30"></ui-knob>`);
  behaviorCode = signal(`<ui-knob snap [snap-step]="10" allow-input enable-wheel></ui-knob>`);
  statesCode = signal(`<ui-knob value="45" disabled></ui-knob>\n<ui-knob value="75" readonly></ui-knob>`);
}
