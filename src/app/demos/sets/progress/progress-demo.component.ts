import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmProgressPlaygroundComponent } from '../../../playground/sets/progress-playground/progress-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-progress-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmProgressPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './progress-demo.component.html',
  styleUrls: ['./progress-demo.component.scss'],
})
export class DmProgressDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'line', title: 'Line Progress', icon: 'minus', iconLibrary: 'lucide' },
    { id: 'circle', title: 'Circle Progress', icon: 'circle', iconLibrary: 'lucide' },
    { id: 'dashboard', title: 'Dashboard Progress', icon: 'gauge', iconLibrary: 'lucide' },
    { id: 'status', title: 'Progress Status', icon: 'info', iconLibrary: 'lucide' },
    { id: 'indeterminate', title: 'Indeterminate State', icon: 'loader-2', iconLibrary: 'lucide' },
    { id: 'colors', title: 'Custom Colors', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'gradient', title: 'Gradient Progress', icon: 'wind', iconLibrary: 'lucide' },
    { id: 'steps', title: 'Steps Progress', icon: 'columns-3', iconLibrary: 'lucide' },
    { id: 'stroke', title: 'Stroke Width', icon: 'move-vertical', iconLibrary: 'lucide' },
    { id: 'linecap', title: 'Stroke Linecap', icon: 'square', iconLibrary: 'lucide' },
    { id: 'hide-info', title: 'Hide Info Text', icon: 'eye-off', iconLibrary: 'lucide' },
    { id: 'premium', title: 'Premium Styles', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  progressValue = 50;

  // Grouped Code snippets
  lineCode = `<!-- Line Progress Variants -->
<ui-progress percent="30"></ui-progress>
<ui-progress percent="50"></ui-progress>
<ui-progress percent="70"></ui-progress>
<ui-progress percent="100" status="success"></ui-progress>`;

  circleCode = `<!-- Circle Progress Variants -->
<ui-progress type="circle" percent="60"></ui-progress>
<ui-progress type="circle" percent="75"></ui-progress>
<ui-progress type="circle" percent="100" status="success"></ui-progress>
<ui-progress type="circle" percent="50" width="80"></ui-progress>
<ui-progress type="circle" percent="85" width="150"></ui-progress>`;

  dashboardCode = `<!-- Dashboard Progress Variants -->
<ui-progress type="dashboard" percent="75"></ui-progress>
<ui-progress type="dashboard" percent="75" gap-position="top"></ui-progress>
<ui-progress type="dashboard" percent="75" gap-position="bottom"></ui-progress>
<ui-progress type="dashboard" percent="50" gap-degree="120"></ui-progress>`;

  statusCode = `<!-- Progress Status Types -->
<ui-progress percent="60" status="active"></ui-progress>
<ui-progress percent="100" status="success"></ui-progress>
<ui-progress percent="50" status="exception"></ui-progress>`;

  indeterminateCode = `<!-- Indeterminate States -->
<ui-progress indeterminate="true"></ui-progress>
<ui-progress type="circle" indeterminate="true"></ui-progress>
<ui-progress type="dashboard" indeterminate="true"></ui-progress>`;

  colorsCode = `<!-- Custom Color Variants -->
<ui-progress percent="60" stroke-color="#9b59b6"></ui-progress>
<ui-progress percent="75" stroke-color="#ff9800"></ui-progress>
<ui-progress percent="85" stroke-color="#e91e63"></ui-progress>`;

  gradientCode = `<!-- Gradient Progress Bars -->
<ui-progress percent="80" stroke-color="linear-gradient(to right, #667eea, #06b6d4)"></ui-progress>
<ui-progress percent="90" stroke-color="linear-gradient(to right, #a855f7, #ec4899)"></ui-progress>
<ui-progress percent="70" stroke-color="linear-gradient(to right, #f97316, #ef4444)"></ui-progress>`;

  stepsCode = `<!-- Discrete Steps Progress -->
<ui-progress percent="60" steps="5"></ui-progress>
<ui-progress percent="80" steps="10"></ui-progress>
<ui-progress percent="100" steps="8" status="success"></ui-progress>`;

  strokeCode = `<!-- Custom Stroke Widths -->
<ui-progress percent="60" stroke-width="4"></ui-progress>
<ui-progress percent="60" stroke-width="10"></ui-progress>
<ui-progress percent="60" stroke-width="20"></ui-progress>`;

  linecapCode = `<!-- Stroke Linecap Options -->
<ui-progress percent="75" stroke-linecap="round"></ui-progress>
<ui-progress percent="75" stroke-linecap="square"></ui-progress>`;

  hideInfoCode = `<!-- Progress without Info Text -->
<ui-progress percent="60" show-info="false"></ui-progress>
<ui-progress type="circle" percent="75" show-info="false"></ui-progress>`;

  premiumCode = `<!-- Premium Animation Styles -->
<ui-progress percent="65" liquid="true" stroke-color="#3DCD58"></ui-progress>
<ui-progress percent="50" glass="true" stroke-color="#fff"></ui-progress>
<ui-progress percent="80" glow="true" stroke-color="#ff4d4f"></ui-progress>`;

  decreaseProgress() {
    this.progressValue = Math.max(0, this.progressValue - 10);
  }

  increaseProgress() {
    this.progressValue = Math.min(100, this.progressValue + 10);
  }
}
