import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmMeterGroupPlaygroundComponent } from '../../../playground/common/meter-group-playground/meter-group-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-meter-group-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    ExampleSectionComponent,
    
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
    { id: 'vertical', title: 'Vertical Ticks', icon: 'move-vertical', iconLibrary: 'lucide' },
    { id: 'sizing', title: 'Sizes & Thickness', icon: 'maximize-2', iconLibrary: 'lucide' },
    { id: 'legend', title: 'Legends & Labels', icon: 'list', iconLibrary: 'lucide' },
    { id: 'icons', title: 'Icons & Libraries', icon: 'sparkles', iconLibrary: 'lucide' },
    {
      id: 'interactive',
      title: 'Interactive Mode',
      icon: 'mouse-pointer-2',
      iconLibrary: 'lucide',
    },
  ];

  diskValues = JSON.stringify([
    { label: 'Apps', value: 45, color: '#3b82f6', icon: 'app-window' },
    { label: 'System', value: 20, color: '#94a3b8', icon: 'settings' },
    { label: 'Media', value: 15, color: '#f59e0b', icon: 'video' },
    { label: 'Documents', value: 10, color: '#10b981', icon: 'file' },
    { label: 'Free', value: 10, color: '#e2e8f0', icon: 'cloud' },
  ]);

  basicCode = `<ui-meter-group [values]="diskValues"></ui-meter-group>`;
  shapeCode = `<ui-meter-group shape="circle" [values]="diskValues"></ui-meter-group>`;
  verticalCode = `<ui-meter-group orientation="vertical" [values]="diskValues" height="200px"></ui-meter-group>`;

  handleMeterClick(ev: any) {
    console.log(`Meter Clicked: ${ev.detail.label} (${ev.detail.value})`);
  }
}
