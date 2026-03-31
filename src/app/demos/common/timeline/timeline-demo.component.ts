import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmTimelinePlaygroundComponent } from '../../../playground/common/timeline-playground/timeline-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-timeline-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTimelinePlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timeline-demo.component.html',
  styleUrl: './timeline-demo.component.scss',
})
export class DmTimelineDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'alignments', title: 'Alignments', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'orientations', title: 'Orientations', icon: 'move-horizontal', iconLibrary: 'lucide' },
    { id: 'statuses', title: 'Statuses & Colors', icon: 'circle-dot', iconLibrary: 'lucide' },
    { id: 'markers', title: 'Markers & Icons', icon: 'map-pin', iconLibrary: 'lucide' },
    { id: 'panel', title: 'Panel Variant', icon: 'layout-panel-left', iconLibrary: 'lucide' },
  ];

  events = [
    { status: 'Draft', date: 'Oct 1st', color: '#94a3b8' },
    { status: 'Submitted', date: 'Oct 3rd', color: '#3b82f6' },
    { status: 'Approved', date: 'Oct 5th', color: '#10b981' },
  ];

  statusEvents = JSON.stringify([
    {
      label: 'Project Kickoff',
      timestamp: '2024-01-01',
      description: 'Initial stakeholder meeting',
      status: 'success',
    },
    {
      label: 'Design Phase',
      timestamp: '2024-02-15',
      description: 'UI/UX mockups completed',
      status: 'success',
    },
    {
      label: 'Development',
      timestamp: '2024-03-20',
      description: 'Repository setup',
      status: 'active',
    },
    {
      label: 'Beta Launch',
      timestamp: '2024-06-10',
      description: 'Internal testing',
      status: 'pending',
    },
    { label: 'Release', timestamp: '2024-07-01', description: 'Public launch', status: 'wait' },
  ]);

  markerEvents = JSON.stringify([
    { label: 'First Step', description: 'Auto-numbered marker', status: 'success' },
    {
      label: 'Profile Update',
      description: 'Avatar marker',
      image: 'https://i.pravatar.cc/150?img=12',
      status: 'active',
    },
    { label: 'Rocket Launch', description: 'Explicit icon marker', icon: '🚀', status: 'wait' },
  ]);

  panelEvents = JSON.stringify([
    {
      label: 'Step 1',
      description: 'Card-like panel styling.',
      timestamp: '10:00 AM',
      status: 'success',
    },
    {
      label: 'Step 2',
      description: 'Elevated with shadow on hover.',
      timestamp: '11:00 AM',
      status: 'active',
    },
    { label: 'Step 3', description: 'Pending action.', timestamp: '12:00 PM', status: 'pending' },
  ]);

  alignmentsCode = `<!-- Alternating Sides -->
<ui-timeline align="alternate" [events]="events"></ui-timeline>
<!-- Left Aligned -->
<ui-timeline align="left" [events]="events"></ui-timeline>
<!-- Right Aligned -->
<ui-timeline align="right" [events]="events"></ui-timeline>`;

  orientationsCode = `<!-- Horizontal Flow -->
<ui-timeline orientation="horizontal" [events]="events"></ui-timeline>`;

  statusesCode = `<ui-timeline align="left" [events]='[
  {"label":"Done","status":"success"},
  {"label":"Active","status":"active"},
  {"label":"Waiting","status":"wait"},
  {"label":"Pending","status":"pending"}
]'></ui-timeline>`;

  markersCode = `<!-- Auto-number + Icon + Image markers -->
<ui-timeline align="left" marker="number" [events]="markerEvents"></ui-timeline>`;

  panelCode = `<!-- Panel variant for card-like styling -->
<ui-timeline align="alternate" variant="panel" [events]="panelEvents"></ui-timeline>`;

  ngOnInit() {}
}
