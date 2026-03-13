import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmMeterGroupPlaygroundComponent } from '../../../playground/common/meter-group-playground/meter-group-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-meter-group-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmMeterGroupPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './meter-group-demo.component.html',
  styleUrl: './meter-group-demo.component.scss',
})
export class DmMeterGroupDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Layouts', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'shapes', title: 'Line vs Circle', icon: 'shapes', iconLibrary: 'lucide' },
    { id: 'sizing', title: 'Sizes & Thickness', icon: 'maximize-2', iconLibrary: 'lucide' },
    { id: 'legend', title: 'Legends & Labels', icon: 'list', iconLibrary: 'lucide' },
    { id: 'icons', title: 'Icons & Libraries', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'interactive', title: 'Interactive Mode', icon: 'touch-interaction', iconLibrary: 'lucide' },
  ];

  diskValues = JSON.stringify([
    { label: 'Apps', value: 45, color: '#3b82f6', icon: 'app-window' },
    { label: 'System', value: 20, color: '#94a3b8', icon: 'settings' },
    { label: 'Media', value: 15, color: '#f59e0b', icon: 'video' },
    { label: 'Documents', value: 10, color: '#10b981', icon: 'file-text' },
    { label: 'Free', value: 10, color: '#e5e7eb', icon: 'cloud' }
  ]);

  taskValues = JSON.stringify([
    { label: 'Completed', value: 75, color: '#10b981' },
    { label: 'Pending', value: 25, color: '#f59e0b' }
  ]);

  basicCode = `<ui-meter-group [values]="diskValues"></ui-meter-group>`;

  shapeCode = `<ui-meter-group [values]="values" shape="circle"></ui-meter-group>
<ui-meter-group [values]="values" shape="line" orientation="vertical"></ui-meter-group>`;

  sizingCode = `<ui-meter-group size="sm" [values]="values"></ui-meter-group>
<ui-meter-group size="lg" [values]="values"></ui-meter-group>`;

  legendCode = `<ui-meter-group show-legend [values]="values"></ui-meter-group>
<ui-meter-group [show-labels]="false" [show-values]="false" [values]="values"></ui-meter-group>`;

  iconsCode = `<ui-meter-group icon-library="lucide" [values]="valuesWithIcons"></ui-meter-group>`;

  interactiveCode = `<ui-meter-group interactive (meterClick)="handleMeterClick($event)" [values]="values"></ui-meter-group>`;

  handleMeterClick(ev: any) {
    console.log('Meter clicked:', ev.detail);
  }
}
