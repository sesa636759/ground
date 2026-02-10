import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-accordion-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accordion-docs.component.html',
  styleUrls: ['./accordion-docs.component.scss'],
})
export class AccordionDocsComponent {
  accordionConfig = COMPONENT_CONFIGS['accordion'];
  basicItems = JSON.stringify([
    { id: '1', title: 'Section 1', content: 'Content for section 1' },
    { id: '2', title: 'Section 2', content: 'Content for section 2' },
    { id: '3', title: 'Section 3', content: 'Content for section 3' },
  ]);

  nestedItems = JSON.stringify([
    {
      id: '1',
      title: 'Parent 1',
      children: [
        { id: '1-1', title: 'Child 1.1', content: 'Nested Content 1.1' },
        { id: '1-2', title: 'Child 1.2', content: 'Nested Content 1.2' },
      ],
    },
    { id: '2', title: 'Parent 2', content: 'Flat content' },
  ]);

  searchableItems = JSON.stringify([
    {
      id: '1',
      title: 'React',
      subtitle: 'UI Library',
      content: 'A JavaScript library for building user interfaces.',
    },
    {
      id: '2',
      title: 'Angular',
      subtitle: 'Framework',
      content: 'A platform for building mobile and desktop web applications.',
    },
    {
      id: '3',
      title: 'Vue',
      subtitle: 'Framework',
      content: 'The Progressive JavaScript Framework.',
    },
    {
      id: '4',
      title: 'Svelte',
      subtitle: 'Compiler',
      content: 'Cybernetically enhanced web apps.',
    },
  ]);

  actionItems = JSON.stringify([
    {
      id: '1',
      title: 'Project Alpha',
      content: 'Status: Active',
      actions: [
        { id: 'edit', label: 'Edit', icon: '✏️' },
        { id: 'delete', label: 'Delete', icon: '🗑️' },
      ],
    },
    {
      id: '2',
      title: 'Project Beta',
      content: 'Status: Pending',
      actions: [{ id: 'approve', label: 'Approve', icon: '✅' }],
    },
  ]);

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
