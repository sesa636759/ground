import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmProgressPlaygroundComponent } from '../../../playground/sets/progress-playground/progress-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
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
    { id: 'dashboard', title: 'Dashboard Style', icon: 'gauge', iconLibrary: 'lucide' },
    { id: 'status', title: 'State & Status', icon: 'info', iconLibrary: 'lucide' },
    { id: 'buffer', title: 'Buffer & Loading', icon: 'timer', iconLibrary: 'lucide' },
    { id: 'multi', title: 'Multi-Segment', icon: 'layers', iconLibrary: 'lucide' },
    { id: 'premium', title: 'Premium Effects', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'controls', title: 'Interactive Controls', icon: 'pause', iconLibrary: 'lucide' },
    { id: 'labels', title: 'Layout & Labels', icon: 'type', iconLibrary: 'lucide' },
  ];

  progressValue = 50;

  multiProgressValues = [
    { percent: 30, color: '#3b82f6', label: 'Apps' },
    { percent: 20, color: '#ef4444', label: 'System' },
    { percent: 15, color: '#10b981', label: 'Media' },
  ];

  lineCode = `<dui-progress percent="50"></dui-progress>
<dui-progress percent="100" status="success"></dui-progress>`;

  circleCode = `<dui-progress type="circle" percent="75"></dui-progress>
<dui-progress type="circle" percent="50" size="small"></dui-progress>`;

  dashboardCode = `<dui-progress type="dashboard" percent="75"></dui-progress>
<dui-progress type="dashboard" percent="50" gap-degree="120" gap-position="bottom"></dui-progress>`;

  statusCode = `<dui-progress percent="50" status="exception"></dui-progress>
<dui-progress percent="80" status="active"></dui-progress>`;

  bufferCode = `<dui-progress percent="40" show-buffer buffer="70"></dui-progress>`;

  multiCode = `<dui-progress [multi-progress]='[{"percent":30,"color":"#blue"},{"percent":20,"color":"#red"}]'></dui-progress>`;

  premiumCode = `<dui-progress percent="65" liquid stroke-color="#3DCD58"></dui-progress>
<dui-progress percent="50" glass glow stroke-color="#fff"></dui-progress>`;

  controlsCode = `<dui-progress percent="45" show-pause-button show-time-estimate estimated-time="120"></dui-progress>`;

  labelsCode = `<dui-progress percent="75" label-position="top" percentage-color="#ff4d4f"></dui-progress>`;

  increaseProgress() {
    this.progressValue = Math.min(100, this.progressValue + 10);
  }
  decreaseProgress() {
    this.progressValue = Math.max(0, this.progressValue - 10);
  }
}
