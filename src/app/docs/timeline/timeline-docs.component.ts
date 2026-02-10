import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-timeline-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timeline-docs.component.html',
  styleUrls: ['./timeline-docs.component.scss'],
})
export class TimelineDocsComponent {
  timelineConfig = COMPONENT_CONFIGS['timeline'];

  standardEvents = JSON.stringify([
    {
      label: 'Project Kickoff',
      timestamp: '2023-01-01',
      description: 'Initial meeting with stakeholders',
      status: 'success',
    },
    {
      label: 'Design Phase',
      timestamp: '2023-02-15',
      description: 'Working on UI/UX mockups',
      status: 'success',
    },
    {
      label: 'Development Start',
      timestamp: '2023-03-20',
      description: 'Setting up repository',
      icon: '🚀',
      status: 'active',
    },
    {
      label: 'Beta Launch',
      timestamp: '2023-06-10',
      description: 'Internal testing',
      status: 'pending',
    },
  ]);

  panelEvents = JSON.stringify([
    {
      label: 'Step 1',
      description: 'This uses the Panel variant.',
      timestamp: '10:00 AM',
      status: 'success',
    },
    { label: 'Step 2', description: 'Card-like styling.', timestamp: '11:00 AM', status: 'active' },
    {
      label: 'Step 3',
      description: 'With shadow hover effects.',
      timestamp: '12:00 PM',
      status: 'pending',
    },
  ]);

  markerEvents = JSON.stringify([
    { label: 'First Step', description: 'Shows number 1 in the dot.', status: 'success' },
    {
      label: 'Profile Update',
      description: 'Shows user avatar.',
      image: 'https://i.pravatar.cc/150?img=12',
      status: 'active',
    },
    { label: 'Rocket Launch', description: 'Explicit icon marker.', icon: '🚀', status: 'wait' },
  ]);

  horizontalEvents = JSON.stringify([
    { label: 'Q1 Strategy', timestamp: 'Jan - Mar', status: 'success' },
    { label: 'Q2 Execution', timestamp: 'Apr - Jun', status: 'active' },
    { label: 'Q3 Review', timestamp: 'Jul - Sep', status: 'pending' },
    { label: 'Q4 Launch', timestamp: 'Oct - Dec', status: 'pending' },
  ]);
}
