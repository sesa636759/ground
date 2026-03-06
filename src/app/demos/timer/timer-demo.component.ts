import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';
import { DmTimerPlaygroundComponent } from '../../playground/common/timer-playground/timer-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timer-demo.component.html',
  styleUrl: './timer-demo.component.scss',
})
export class DmTimerDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'modes', name: 'Timer Modes', icon: 'â²ï¸', color: '#3b82f6' },
    { id: 'formats', name: 'Display Formats', icon: 'ðŸ•°ï¸', color: '#10b981' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-timer [duration]="60" mode="countdown" format="mm:ss"></ui-timer>`;

  modesCode = `<!-- Countdown from 5 mins -->
<ui-timer mode="countdown" [duration]="300"></ui-timer>

<!-- Stopwatch -->
<ui-timer mode="stopwatch"></ui-timer>`;

  formatsCode = `<!-- Seconds Only -->
<ui-timer format="ss"></ui-timer>

<!-- Full Timestamp -->
<ui-timer format="HH:mm:ss"></ui-timer>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
