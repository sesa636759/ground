import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-timeline-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-timeline-docs.component.html',
  styleUrls: ['./set-timeline-docs.component.scss'],
})
export class SetTimelineDocsComponent {
  setTimelineConfig = {
    id: 'set-timeline',
    tagName: 'app-set-timeline',
    label: 'Timeline',
    props: [
      { name: 'events', type: 'json' as const, defaultValue: '[]', description: 'Array of timeline events' },
      { name: 'layout', type: 'string' as const, defaultValue: 'vertical', description: 'Timeline layout (vertical, horizontal, alternating)' },
      { name: 'show-icons', type: 'boolean' as const, defaultValue: 'false', description: 'Display icons for each event' },
      { name: 'custom-colors', type: 'boolean' as const, defaultValue: 'false', description: 'Enable custom colors per event' },
      { name: 'interactive', type: 'boolean' as const, defaultValue: 'false', description: 'Make events interactive/clickable' },
      { name: 'grouped', type: 'boolean' as const, defaultValue: 'false', description: 'Group events by date or category' },
      { name: 'show-dates', type: 'boolean' as const, defaultValue: 'true', description: 'Display event dates' },
      { name: 'compact', type: 'boolean' as const, defaultValue: 'false', description: 'Use compact spacing' },
    ]
  };
  
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-set-timeline
  [events]="basicEvents">
</app-set-timeline>`,
    vertical: `<app-set-timeline
  layout="vertical"
  [events]="verticalEvents">
</app-set-timeline>`,
    horizontal: `<app-set-timeline
  layout="horizontal"
  [events]="horizontalEvents">
</app-set-timeline>`,
    alternating: `<app-set-timeline
  layout="alternating"
  [events]="alternatingEvents">
</app-set-timeline>`,
    icons: `<app-set-timeline
  [events]="iconEvents"
  [show-icons]="true">
</app-set-timeline>`,
    colors: `<app-set-timeline
  [events]="colorEvents"
  [custom-colors]="true">
</app-set-timeline>`,
    interactive: `<app-set-timeline
  [events]="interactiveEvents"
  [interactive]="true">
</app-set-timeline>`,
    grouped: `<app-set-timeline
  [events]="groupedEvents"
  [grouped]="true">
</app-set-timeline>`,
  };

  basicEvents = JSON.stringify([
    { id: 1, title: 'Project Started', date: '2024-01-01', description: 'Initial setup' },
    { id: 2, title: 'First Release', date: '2024-02-15', description: 'Version 1.0' },
    { id: 3, title: 'Major Update', date: '2024-03-20', description: 'Version 2.0' },
  ]);

  verticalEvents = JSON.stringify([
    { id: 1, title: 'Event 1', date: '2024-01-01' },
    { id: 2, title: 'Event 2', date: '2024-02-01' },
  ]);

  horizontalEvents = JSON.stringify([
    { id: 1, title: 'Q1', date: '2024-01-01' },
    { id: 2, title: 'Q2', date: '2024-04-01' },
  ]);

  alternatingEvents = JSON.stringify([
    { id: 1, title: 'Left Event', date: '2024-01-01' },
    { id: 2, title: 'Right Event', date: '2024-02-01' },
  ]);

  iconEvents = JSON.stringify([
    { id: 1, title: 'Start', date: '2024-01-01', icon: 'rocket' },
    { id: 2, title: 'Milestone', date: '2024-02-01', icon: 'flag' },
  ]);

  colorEvents = JSON.stringify([
    { id: 1, title: 'Success', date: '2024-01-01', color: 'green' },
    { id: 2, title: 'Warning', date: '2024-02-01', color: 'orange' },
  ]);

  interactiveEvents = JSON.stringify([
    { id: 1, title: 'Clickable Event', date: '2024-01-01', onClick: 'handleClick' },
  ]);

  groupedEvents = JSON.stringify([
    {
      group: '2024 Q1',
      events: [
        { id: 1, title: 'January Event', date: '2024-01-15' },
        { id: 2, title: 'February Event', date: '2024-02-15' },
      ],
    },
  ]);

  getActiveExampleLabel() {
    return this.activeExample.replace(/_/g, ' ');
  }

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
}
