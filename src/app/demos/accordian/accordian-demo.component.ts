import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccordianPlaygroundComponent } from './components/accordian-playground/accordian-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { PlaygroundEventLogComponent } from '../../shared/components/playground-event-log/playground-event-log.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-accordian-demo',
  standalone: true,
  imports: [
    AccordianPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    PlaygroundEventLogComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accordian-demo.component.html',
  styleUrl: './accordian-demo.component.scss',
})
export class DmAccordianDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'basic', title: 'Basic', icon: 'ðŸ“', color: '#3b82f6' },
    { id: 'subtitles', title: 'Subtitles', icon: 'ðŸ“', color: '#10b981' },
    { id: 'search', title: 'Search', icon: 'ðŸ”', color: '#f59e0b' },
    { id: 'actions', title: 'Actions', icon: 'âš¡', color: '#ef4444' },
    { id: 'nested', title: 'Nested', icon: 'ðŸŒ³', color: '#6366f1' },
    { id: 'drag-drop', title: 'Drag & Drop', icon: 'âœ‹', color: '#ec4899' },
    { id: 'persistence', title: 'Persistence', icon: 'ðŸ’¾', color: '#14b8a6' },
    { id: 'loading', title: 'Loading', icon: 'â³', color: '#a855f7' },
    { id: 'rtl', title: 'RTL', icon: 'ðŸŒ', color: '#06b6d4' },
    { id: 'dense', title: 'Dense', icon: 'ðŸ“¦', color: '#84cc16' },
    { id: 'events', title: 'Events', icon: 'ðŸ“£', color: '#f97316' },
    { id: 'controlled', title: 'Controlled', icon: 'ðŸŽ®', color: '#2563eb' },
    { id: 'async-lazy', title: 'Async & Lazy', icon: 'âš¡', color: '#7c3aed' },
  ];

  basicAccordionItems = [
    {
      id: 'what-is',
      title: 'What is an Accordion?',
      content:
        '<p>An accordion is a vertically stacked list of items where each item can be expanded or collapsed to reveal the content associated with that item.</p>',
    },
    {
      id: 'when-to-use',
      title: 'When should I use it?',
      content:
        "<p>Use accordions to organize related information in a limited space. They're perfect for FAQs, settings panels, and content sections.</p>",
    },
    {
      id: 'features',
      title: 'Key Features',
      content:
        '<ul><li>Compact vertical layout</li><li>Single or multiple expansion</li><li>Keyboard accessible</li><li>Customizable styling</li></ul>',
    },
  ];
  basicAccordionCode = `<ui-accordion [items]="items"></ui-accordion>`;

  subtitlesItems = [
    {
      id: '1',
      title: 'Personal Information',
      subtitle: 'Name, Email, Phone',
      content: '<p>Manage your personal details here.</p>',
    },
    {
      id: '2',
      title: 'Security Settings',
      subtitle: 'Password, 2FA, Recovery',
      content: '<p>Update your security preferences.</p>',
    },
    {
      id: '3',
      title: 'Billing',
      subtitle: 'Credit Cards, History',
      content: '<p>View and manage your billing information.</p>',
    },
  ];
  subtitlesCode = `<ui-accordion [items]="items"></ui-accordion>`;

  searchItems = [
    { id: 'react', title: 'React', content: 'A JavaScript library for building user interfaces' },
    {
      id: 'angular',
      title: 'Angular',
      content: 'A platform for building mobile and desktop web applications',
    },
    { id: 'vue', title: 'Vue', content: 'The Progressive JavaScript Framework' },
    { id: 'svelte', title: 'Svelte', content: 'Cybernetically enhanced web apps' },
    { id: 'ember', title: 'Ember', content: 'A framework for ambitious web developers' },
  ];
  searchCode = `<ui-accordion [items]="items" enable-search search-placeholder="Search frameworks..."></ui-accordion>`;

  actionsItems = [
    {
      id: 'file1',
      title: 'Document.pdf',
      subtitle: '2.4 MB',
      content: '<p>Preview of Document.pdf</p>',
      actions: [
        { id: 'download', label: 'â¬‡ï¸', ariaLabel: 'Download' },
        { id: 'delete', label: 'ðŸ—‘ï¸', ariaLabel: 'Delete' },
      ],
    },
    {
      id: 'file2',
      title: 'Image.png',
      subtitle: '1.2 MB',
      content: '<p>Preview of Image.png</p>',
      actions: [
        { id: 'download', label: 'â¬‡ï¸', ariaLabel: 'Download' },
        { id: 'share', label: 'ðŸ”—', ariaLabel: 'Share' },
      ],
    },
  ];
  actionsCode = `<ui-accordion [items]="items" (accordionAction)="handleAction($event)"></ui-accordion>`;

  nestedItems = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      children: [
        {
          id: 'js',
          title: 'JavaScript',
          children: [
            { id: 'ts', title: 'TypeScript', content: 'Superset of JS' },
            { id: 'es6', title: 'ES6+', content: 'Modern JS features' },
          ],
        },
        { id: 'css', title: 'CSS', content: 'Styling the web' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      children: [
        { id: 'node', title: 'Node.js', content: 'JS on the server' },
        { id: 'python', title: 'Python', content: 'Versatile language' },
      ],
    },
  ];
  nestedCode = `<ui-accordion [items]="items" enable-nested></ui-accordion>`;

  dragDropItems = [
    { id: 'todo', title: 'To Do', content: 'Tasks to be done' },
    { id: 'progres', title: 'In Progress', content: 'Tasks currently being worked on' },
    { id: 'done', title: 'Done', content: 'Completed tasks' },
    { id: 'archived', title: 'Archived', content: 'Old tasks' },
  ];
  dragDropCode = `<ui-accordion [items]="items" enable-drag-drop (accordionReorder)="handleReorder($event)"></ui-accordion>`;

  persistenceItems = [
    { id: 'pref1', title: 'Preference 1', content: 'Setting 1' },
    { id: 'pref2', title: 'Preference 2', content: 'Setting 2' },
    { id: 'pref3', title: 'Preference 3', content: 'Setting 3' },
  ];
  persistenceCode = `<ui-accordion [items]="items" enable-persistence persistence-key="custom-key-v1"></ui-accordion>`;

  loadingCode = `<ui-accordion [items]="[]" loading></ui-accordion>`;

  rtlItems = [
    { id: '1', title: 'Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø£ÙˆÙ„', content: 'Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø£ÙˆÙ„' },
    { id: '2', title: 'Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø«Ø§Ù†ÙŠ', content: 'Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø«Ø§Ù†ÙŠ' },
  ];
  rtlCode = `<ui-accordion [items]="items" rtl></ui-accordion>`;

  denseItems = Array.from({ length: 5 }, (_, i) => ({
    id: `item-${i}`,
    title: `Dense Item ${i + 1}`,
    content: `Compact content for item ${i + 1}`,
  }));
  denseCode = `<ui-accordion [items]="items" dense></ui-accordion>`;

  eventsItems = [
    { id: 'e1', title: 'Event Source 1', content: 'Interact with me' },
    { id: 'e2', title: 'Event Source 2', content: 'Interact with me too' },
  ];
  eventsLog: string[] = [];
  eventsCode = `<ui-accordion [items]="items" (afterOpen)="log('After Open', $event)"></ui-accordion>`;

  controlledItems = [
    { id: 'c1', title: 'Panel 1', content: 'Controlled Panel 1' },
    { id: 'c2', title: 'Panel 2', content: 'Controlled Panel 2' },
    { id: 'c3', title: 'Panel 3', content: 'Controlled Panel 3' },
  ];
  controlledExpanded: string[] = [];
  controlledCode = `<ui-accordion [items]="items" [expandedItems]="currentExpanded"></ui-accordion>`;

  asyncLazyItems = [
    { id: 'l1', title: 'Lazy Content 1', content: 'This content was rendered only when opened.' },
    { id: 'l2', title: 'Lazy Content 2', content: 'Check the DOM, I was not there when closed.' },
  ];
  asyncLazyCode = `<ui-accordion [items]="items" lazy></ui-accordion>`;

  handleAction(event: any) {
    alert(`Action clicked: ${event.detail.actionId} on item ${event.detail.itemId}`);
  }

  handleReorder(_event: Event) {}

  logEvent(name: string, event: any) {
    const timestamp = new Date().toLocaleTimeString();
    this.eventsLog.unshift(`${timestamp}: ${name} - ${event.detail.itemId}`);
    if (this.eventsLog.length > 5) this.eventsLog.pop();
  }

  setControlledExpanded(ids: string[]) {
    this.controlledExpanded = [...ids];
  }
}

