import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { TimerPlaygroundComponent } from './components/timer-playground/timer-playground.component';

@Component({
  selector: 'app-app-timer-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, TimerPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-timer-demo.component.html',
  styleUrl: './app-timer-demo.component.scss',
})
export class AppTimerDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'modes', name: 'Timer Modes', icon: '⏲️', color: '#3b82f6' },
    { id: 'formats', name: 'Display Formats', icon: '🕰️', color: '#10b981' },
  ];

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
