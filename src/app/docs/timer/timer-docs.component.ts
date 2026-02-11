import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-timer-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timer-docs.component.html',
  styleUrls: ['./timer-docs.component.scss'],
})
export class TimerDocsComponent {
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  // Example codes
  exampleCodes: any = {
    basic: `<ui-timer duration="300" format="default" autoStart="true"></ui-timer>`,
    stopwatch: `<ui-timer mode="stopwatch" precision="milliseconds"></ui-timer>`,
    themes: `<div style="display: flex; gap: 20px;">
  <ui-timer duration="60" theme='{"primary": "#10b981", "track": "#d1fae5"}'></ui-timer>
  <ui-timer duration="60" theme='{"primary": "#f59e0b", "track": "#fef3c7"}'></ui-timer>
  <ui-timer duration="60" theme='{"primary": "#ef4444", "track": "#fee2e2"}'></ui-timer>
</div>`,
    progress: `<ui-timer duration="60" progressType="linear" variant="full"></ui-timer>`,
    precision: `<ui-timer duration="60" precision="milliseconds"></ui-timer>`,
    steps: `<ui-timer 
  [steps]='[
    {"label": "Warm Up", "duration": 10}, 
    {"label": "Sprint", "duration": 20}, 
    {"label": "Cool Down", "duration": 10}
  ]'
  autoStart="true"
></ui-timer>`,
    controls: `<ui-timer #timerControl duration="60"></ui-timer>
<div style="margin-top: 10px; display: flex; gap: 10px;">
  <ui-button label="Start" (click)="timerControl.start()"></ui-button>
  <ui-button label="Pause" (click)="timerControl.pause()"></ui-button>
  <ui-button label="Reset" (click)="timerControl.reset()"></ui-button>
</div>`,
  };

  componentConfig = COMPONENT_CONFIGS['timer'] || {
    id: 'timer',
    tagName: 'ui-timer',
    label: 'Timer',
    description:
      'A versatile timer component supporting countdowns, stopwatches, steps, and customization.',
    props: [
      {
        name: 'duration',
        type: 'number',
        defaultValue: 60,
        description: 'Duration in seconds (countdown mode).',
      },
      {
        name: 'mode',
        type: 'select',
        options: ['countdown', 'stopwatch'],
        defaultValue: 'countdown',
      },
      {
        name: 'format',
        type: 'select',
        options: ['default', 'human', 'simple'],
        defaultValue: 'default',
      },
      {
        name: 'precision',
        type: 'select',
        options: ['seconds', 'milliseconds'],
        defaultValue: 'seconds',
      },
      { name: 'variant', type: 'select', options: ['full', 'compact'], defaultValue: 'full' },
      {
        name: 'progressType',
        type: 'select',
        options: ['circular', 'linear'],
        defaultValue: 'circular',
      },
      { name: 'autoStart', type: 'boolean', defaultValue: false },
      { name: 'loop', type: 'boolean', defaultValue: false },
      { name: 'enableSound', type: 'boolean', defaultValue: false },
      { name: 'enableNotifications', type: 'boolean', defaultValue: false },
    ],
  };

  constructor() {}

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }

  // Helper properties for Steps usage in template
  timerSteps = [
    { label: 'Warm Up', duration: 10, color: '#10b981' },
    { label: 'High Intensity', duration: 20, color: '#ef4444' },
    { label: 'Rest', duration: 10, color: '#3b82f6' },
    { label: 'Cool Down', duration: 15, color: '#10b981' },
  ];

  // Methods to interact with the controlled timer example
  startTimer(id: string) {
    const timer = document.getElementById(id) as any;
    if (timer) timer.start();
  }

  pauseTimer(id: string) {
    const timer = document.getElementById(id) as any;
    if (timer) timer.pause();
  }

  resetTimer(id: string) {
    const timer = document.getElementById(id) as any;
    if (timer) timer.reset();
  }

  lapTimer(id: string) {
    const timer = document.getElementById(id) as any;
    if (timer) timer.lap();
  }
}
