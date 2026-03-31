import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmTimerPlaygroundComponent } from '../../../playground/common/timer-playground/timer-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-timer-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTimerPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timer-demo.component.html',
  styleUrl: './timer-demo.component.scss',
})
export class DmTimerDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Timers', icon: 'timer', iconLibrary: 'lucide' },
    { id: 'modes', title: 'Modes & Precision', icon: 'clock', iconLibrary: 'lucide' },
    { id: 'steps', title: 'Multi-Step Flow', icon: 'list-checks', iconLibrary: 'lucide' },
    { id: 'display', title: 'Visualization', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'alerts', title: 'Alerts & Sounds', icon: 'bell', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Persistence & Behavior', icon: 'save', iconLibrary: 'lucide' },
  ];

  pomodoroSteps = JSON.stringify([
    { label: 'Work', duration: 1500, color: '#ef4444' },
    { label: 'Short Break', duration: 300, color: '#10b981' },
    { label: 'Work', duration: 1500, color: '#ef4444' },
    { label: 'Long Break', duration: 900, color: '#3b82f6' },
  ]);

  basicCode = `<ui-timer [duration]="60"></ui-timer>`;

  modesCode = `<ui-timer mode="stopwatch" precision="milliseconds"></ui-timer>
<ui-timer mode="countdown" format="human" [duration]="3600"></ui-timer>`;

  stepsCode = `<ui-timer [steps]='[{"label":"Exercise","duration":45},{"label":"Rest","duration":15}]' loop auto-start></ui-timer>`;

  displayCode = `<ui-timer variant="compact"></ui-timer>
<ui-timer progress-type="linear" [duration]="120"></ui-timer>`;

  alertsCode = `<ui-timer enable-sound enable-notifications [alert-threshold]="20"></ui-timer>`;

  targetDateCode = `<ui-timer target-date="2025-01-01T00:00:00"></ui-timer>`;

  behaviorCode = `<ui-timer persist="my-timer-key" auto-start></ui-timer>`;
}
