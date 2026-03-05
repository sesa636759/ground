import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MeterGroupPlaygroundComponent } from './components/meter-group-playground/meter-group-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-meter-group-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MeterGroupPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-meter-group-demo.component.html',
  styleUrl: './app-meter-group-demo.component.scss',
})
export class AppMeterGroupDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'displays', title: 'Display Types', icon: '📊', color: '#3b82f6' },
    { id: 'layouts', title: 'Advanced Layouts', icon: '📐', color: '#10b981' },
  ];

  storageValues = [
    { label: 'Apps', value: 35, color: '#3b82f6' },
    { label: 'Photos', value: 20, color: '#ec4899' },
    { label: 'System', value: 15, color: '#94a3b8' },
  ];

  playgroundCode = `<ui-meter-group [values]="values"></ui-meter-group>`;

  displaysCode = `<!-- Simple Markers -->
<ui-meter-group [values]="values" show-markers></ui-meter-group>

<!-- Custom Meter Height -->
<ui-meter-group [values]="values" meter-height="24px"></ui-meter-group>`;

  layoutsCode = `<!-- Vertical Alignment -->
<ui-meter-group orientation="vertical" [values]="values"></ui-meter-group>

<!-- Legend at Start -->
<ui-meter-group label-position="start" [values]="values"></ui-meter-group>`;
}
