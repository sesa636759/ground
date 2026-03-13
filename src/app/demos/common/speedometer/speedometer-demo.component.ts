import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmSpeedometerPlaygroundComponent } from '../../../playground/common/speedometer-playground/speedometer-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-speedometer-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmSpeedometerPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speedometer-demo.component.html',
  styleUrl: './speedometer-demo.component.scss',
})
export class DmSpeedometerDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Gauges', icon: 'gauge', iconLibrary: 'lucide' },
    { id: 'ranges', title: 'Color Thresholds', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'angles', title: 'Custom Arcs', icon: 'rotate-cw', iconLibrary: 'lucide' },
    { id: 'shapes', title: 'Needle Shapes', icon: 'navigation', iconLibrary: 'lucide' },
    { id: 'interactive', title: 'Interactive Mode', icon: 'hand-metal', iconLibrary: 'lucide' },
    { id: 'labels', title: 'Custom Labels', icon: 'type', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Secondary & Export', icon: 'plus-circle', iconLibrary: 'lucide' },
  ];

  fuelRanges = JSON.stringify([
    { min: 0, max: 20, color: '#ef4444' },
    { min: 20, max: 100, color: '#3b82f6' }
  ]);

  scoreRanges = JSON.stringify([
    { min: 0, max: 30, color: '#ef4444' },
    { min: 30, max: 70, color: '#f59e0b' },
    { min: 70, max: 100, color: '#10b981' }
  ]);

  customMap = JSON.stringify({
    0: 'E',
    25: '1/4',
    50: '1/2',
    75: '3/4',
    100: 'F'
  });

  basicCode = `<ui-speedometer [value]="65" label="Speed" unit="km/h"></ui-speedometer>`;

  rangesCode = `<ui-speedometer 
  [value]="85" 
  ranges='[{"min":0,"max":30,"color":"#red"},{"min":30,"max":100,"color":"#green"}]'
></ui-speedometer>`;

  anglesCode = `<ui-speedometer [start-angle]="-90" [end-angle]="90" [value]="45"></ui-speedometer>
<ui-speedometer [start-angle]="0" [end-angle]="360" [value]="270"></ui-speedometer>`;

  shapesCode = `<ui-speedometer needle-shape="arrow" [value]="50"></ui-speedometer>
<ui-speedometer needle-shape="line" [value]="40" needle-color="#ff4d4f"></ui-speedometer>`;

  interactiveCode = `<ui-speedometer interactive [value]="30"></ui-speedometer>`;

  labelsCode = `<ui-speedometer 
  [custom-labels]='{"0":"Low","50":"Med","100":"High"}' 
  show-percentage
></ui-speedometer>`;

  advancedCode = `<ui-speedometer [value]="80" [secondary-value]="45"></ui-speedometer>`;
}
