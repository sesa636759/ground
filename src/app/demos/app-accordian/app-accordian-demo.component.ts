import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordianPlaygroundComponent } from './components/accordian-playground/accordian-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-app-accordian-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AccordianPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-accordian-demo.component.html',
  styleUrl: './app-accordian-demo.component.scss',
})
export class SetAccordianDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'basic', title: 'Basic', icon: '📁', color: '#3b82f6' },
    { id: 'subtitles', title: 'Subtitles', icon: '📝', color: '#10b981' },
    { id: 'search', title: 'Search', icon: '🔍', color: '#f59e0b' },
    { id: 'actions', title: 'Actions', icon: '⚡', color: '#ef4444' },
    { id: 'nested', title: 'Nested', icon: '🌳', color: '#6366f1' },
    { id: 'drag-drop', title: 'Drag & Drop', icon: '✋', color: '#ec4899' },
    { id: 'persistence', title: 'Persistence', icon: '💾', color: '#14b8a6' },
    { id: 'loading', title: 'Loading', icon: '⏳', color: '#a855f7' },
    { id: 'rtl', title: 'RTL', icon: '🌍', color: '#06b6d4' },
    { id: 'dense', title: 'Dense', icon: '📦', color: '#84cc16' },
    { id: 'events', title: 'Events', icon: '📣', color: '#f97316' },
    { id: 'controlled', title: 'Controlled', icon: '🎮', color: '#2563eb' },
    { id: 'async-lazy', title: 'Async & Lazy', icon: '⚡', color: '#7c3aed' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  anchorLinks = JSON.stringify(
    this.variants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  basicAccordionItems = JSON.stringify([
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
  ]);
  basicAccordionCode = `<ui-accordion [items]="items"></ui-accordion>`;

  subtitlesItems = JSON.stringify([
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
  ]);
  subtitlesCode = `<ui-accordion [items]="items"></ui-accordion>`;

  searchItems = JSON.stringify([
    { id: 'react', title: 'React', content: 'A JavaScript library for building user interfaces' },
    {
      id: 'angular',
      title: 'Angular',
      content: 'A platform for building mobile and desktop web applications',
    },
    { id: 'vue', title: 'Vue', content: 'The Progressive JavaScript Framework' },
    { id: 'svelte', title: 'Svelte', content: 'Cybernetically enhanced web apps' },
    { id: 'ember', title: 'Ember', content: 'A framework for ambitious web developers' },
  ]);
  searchCode = `<ui-accordion [items]="items" enable-search search-placeholder="Search frameworks..."></ui-accordion>`;

  actionsItems = JSON.stringify([
    {
      id: 'file1',
      title: 'Document.pdf',
      subtitle: '2.4 MB',
      content: '<p>Preview of Document.pdf</p>',
      actions: [
        { id: 'download', label: '⬇️', ariaLabel: 'Download' },
        { id: 'delete', label: '🗑️', ariaLabel: 'Delete' },
      ],
    },
    {
      id: 'file2',
      title: 'Image.png',
      subtitle: '1.2 MB',
      content: '<p>Preview of Image.png</p>',
      actions: [
        { id: 'download', label: '⬇️', ariaLabel: 'Download' },
        { id: 'share', label: '🔗', ariaLabel: 'Share' },
      ],
    },
  ]);
  actionsCode = `<ui-accordion [items]="items" (accordionAction)="handleAction($event)"></ui-accordion>`;

  nestedItems = JSON.stringify([
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
  ]);
  nestedCode = `<ui-accordion [items]="items" enable-nested></ui-accordion>`;

  dragDropItems = JSON.stringify([
    { id: 'todo', title: 'To Do', content: 'Tasks to be done' },
    { id: 'progres', title: 'In Progress', content: 'Tasks currently being worked on' },
    { id: 'done', title: 'Done', content: 'Completed tasks' },
    { id: 'archived', title: 'Archived', content: 'Old tasks' },
  ]);
  dragDropCode = `<ui-accordion [items]="items" enable-drag-drop (accordionReorder)="handleReorder($event)"></ui-accordion>`;

  persistenceItems = JSON.stringify([
    { id: 'pref1', title: 'Preference 1', content: 'Setting 1' },
    { id: 'pref2', title: 'Preference 2', content: 'Setting 2' },
    { id: 'pref3', title: 'Preference 3', content: 'Setting 3' },
  ]);
  persistenceCode = `<ui-accordion [items]="items" enable-persistence persistence-key="custom-key-v1"></ui-accordion>`;

  loadingCode = `<ui-accordion [items]="[]" loading></ui-accordion>`;

  rtlItems = JSON.stringify([
    { id: '1', title: 'القسم الأول', content: 'محتوى القسم الأول' },
    { id: '2', title: 'القسم الثاني', content: 'محتوى القسم الثاني' },
  ]);
  rtlCode = `<ui-accordion [items]="items" rtl></ui-accordion>`;

  denseItems = JSON.stringify(
    Array.from({ length: 5 }, (_, i) => ({
      id: `item-${i}`,
      title: `Dense Item ${i + 1}`,
      content: `Compact content for item ${i + 1}`,
    })),
  );
  denseCode = `<ui-accordion [items]="items" dense></ui-accordion>`;

  eventsItems = JSON.stringify([
    { id: 'e1', title: 'Event Source 1', content: 'Interact with me' },
    { id: 'e2', title: 'Event Source 2', content: 'Interact with me too' },
  ]);
  eventsLog: string[] = [];
  eventsCode = `<ui-accordion [items]="items" (afterOpen)="log('After Open', $event)"></ui-accordion>`;

  controlledItems = JSON.stringify([
    { id: 'c1', title: 'Panel 1', content: 'Controlled Panel 1' },
    { id: 'c2', title: 'Panel 2', content: 'Controlled Panel 2' },
    { id: 'c3', title: 'Panel 3', content: 'Controlled Panel 3' },
  ]);
  controlledExpanded: string[] = [];
  controlledCode = `<ui-accordion [items]="items" [expandedItems]="currentExpanded"></ui-accordion>`;

  asyncLazyItems = JSON.stringify([
    { id: 'l1', title: 'Lazy Content 1', content: 'This content was rendered only when opened.' },
    { id: 'l2', title: 'Lazy Content 2', content: 'Check the DOM, I was not there when closed.' },
  ]);
  asyncLazyCode = `<ui-accordion [items]="items" lazy></ui-accordion>`;

  handleAction(event: any) {
    alert(`Action clicked: ${event.detail.actionId} on item ${event.detail.itemId}`);
  }

  handleReorder(event: Event) {}

  logEvent(name: string, event: any) {
    const timestamp = new Date().toLocaleTimeString();
    this.eventsLog.unshift(`${timestamp}: ${name} - ${event.detail.itemId}`);
    if (this.eventsLog.length > 5) this.eventsLog.pop();
  }

  setControlledExpanded(ids: string[]) {
    this.controlledExpanded = [...ids];
  }

  ngOnInit() {}
}
