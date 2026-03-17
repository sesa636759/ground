import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
    { id: 'size', title: 'Size Variants', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'colors', title: 'Custom Colors', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'arc', title: 'Arc Styles (Gauge)', icon: 'gauge', iconLibrary: 'lucide' },
    { id: 'ticks', title: 'Ticks & Subticks', icon: 'list', iconLibrary: 'lucide' },
    { id: 'labels', title: 'Custom Labels', icon: 'type', iconLibrary: 'lucide' },
    { id: 'snap', title: 'Snapping & Steps', icon: 'magnet', iconLibrary: 'lucide' },
    { id: 'rotation', title: 'Rotation Range', icon: 'rotate-cw', iconLibrary: 'lucide' },
    {
      id: 'interaction',
      title: 'Wheel & Keyboard',
      icon: 'mouse-pointer-2',
      iconLibrary: 'lucide',
    },
    { id: 'states', title: 'Disabled & Readonly', icon: 'ban', iconLibrary: 'lucide' },
  ];

  sizeCode = `<dui-knob size="60"></dui-knob>\n<dui-knob size="150"></dui-knob>`;
  colorsCode = `<dui-knob color="#ef4444" track-color="#fee2e2" thumb-color="#b91c1c"></dui-knob>`;
  ticksCode = `<dui-knob show-ticks tick-count="12" sub-ticks="4"></dui-knob>`;
  snapCode = `<dui-knob snap [snap-step]="10"></dui-knob>`;
}
