import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordianPlaygroundComponent } from './components/accordian-playground/accordian-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-accordian-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AccordianPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-accordian-demo.component.html',
  styleUrl: './app-accordian-demo.component.scss',
})
export class SetAccordianDemoComponent {
  variants = [
    { id: 'playground', name: 'Interactive Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'basic', name: 'Basic', icon: '📁', color: '#3b82f6' },
    { id: 'subtitles', name: 'Subtitles', icon: '📝', color: '#10b981' },
    { id: 'search', name: 'Search', icon: '🔍', color: '#f59e0b' },
    { id: 'actions', name: 'Actions', icon: '⚡', color: '#ef4444' },
    { id: 'nested', name: 'Nested', icon: '🌳', color: '#6366f1' },
    { id: 'drag-drop', name: 'Drag & Drop', icon: '✋', color: '#ec4899' },
    { id: 'persistence', name: 'Persistence', icon: '💾', color: '#14b8a6' },
    { id: 'loading', name: 'Loading', icon: '⏳', color: '#a855f7' },
    { id: 'rtl', name: 'RTL', icon: '🌍', color: '#06b6d4' },
    { id: 'dense', name: 'Dense', icon: '📦', color: '#84cc16' },
    { id: 'events', name: 'Events', icon: '📣', color: '#f97316' },
    { id: 'controlled', name: 'Controlled', icon: '🎮', color: '#2563eb' },
    { id: 'async-lazy', name: 'Async & Lazy', icon: '⚡', color: '#7c3aed' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  playgroundCode = `<ui-accordion [items]="accordionItems"></ui-accordion>`;

  // ... existing items ...
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

  // Subtitles
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
  subtitlesCode = `<ui-accordion [items]="items"></ui-accordion>

// Items with subtitle property
{
  id: '1',
  title: 'Personal Information',
  subtitle: 'Name, Email, Phone',
  content: '...'
}`;

  // Search
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

  // Actions
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
  actionsCode = `<ui-accordion 
  [items]="items" 
  (accordionAction)="handleAction($event)">
</ui-accordion>`;

  // Nested - utilizing existing nestedItems but renaming for clarity if needed, or keeping nestedItems
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

  // Drag & Drop
  dragDropItems = JSON.stringify([
    { id: 'todo', title: 'To Do', content: 'Tasks to be done' },
    { id: 'progres', title: 'In Progress', content: 'Tasks currently being worked on' },
    { id: 'done', title: 'Done', content: 'Completed tasks' },
    { id: 'archived', title: 'Archived', content: 'Old tasks' },
  ]);
  dragDropCode = `<ui-accordion [items]="items" enable-drag-drop (accordionReorder)="handleReorder($event)"></ui-accordion>`;

  // Persistence
  persistenceItems = JSON.stringify([
    { id: 'pref1', title: 'Preference 1', content: 'Setting 1' },
    { id: 'pref2', title: 'Preference 2', content: 'Setting 2' },
    { id: 'pref3', title: 'Preference 3', content: 'Setting 3' },
  ]);
  persistenceCode = `<ui-accordion [items]="items" enable-persistence persistence-key="custom-key-v1"></ui-accordion>`;

  // Loading
  loadingCode = `<ui-accordion [items]="[]" loading></ui-accordion>`;

  // RTL
  rtlItems = JSON.stringify([
    { id: '1', title: 'القسم الأول', content: 'محتوى القسم الأول' },
    { id: '2', title: 'القسم الثاني', content: 'محتوى القسم الثاني' },
  ]);
  rtlCode = `<ui-accordion [items]="items" rtl></ui-accordion>`;

  // Dense
  denseItems = JSON.stringify(
    Array.from({ length: 5 }, (_, i) => ({
      id: `item-${i}`,
      title: `Dense Item ${i + 1}`,
      content: `Compact content for item ${i + 1}`,
    })),
  );
  denseCode = `<ui-accordion [items]="items" dense></ui-accordion>`;

  // Events
  eventsItems = JSON.stringify([
    { id: 'e1', title: 'Event Source 1', content: 'Interact with me' },
    { id: 'e2', title: 'Event Source 2', content: 'Interact with me too' },
  ]);
  eventsLog: string[] = [];
  eventsCode = `<ui-accordion 
  [items]="items" 
  (beforeOpen)="log('Before Open', $event)"
  (afterOpen)="log('After Open', $event)"
  (beforeClose)="log('Before Close', $event)"
  (afterClose)="log('After Close', $event)">
</ui-accordion>`;

  // Controlled
  controlledItems = JSON.stringify([
    { id: 'c1', title: 'Panel 1', content: 'Controlled Panel 1' },
    { id: 'c2', title: 'Panel 2', content: 'Controlled Panel 2' },
    { id: 'c3', title: 'Panel 3', content: 'Controlled Panel 3' },
  ]);
  controlledExpanded: string[] = [];
  controlledCode = `<div class="buttons">
  <ui-button (click)="expand('c1')" label="Open 1"></ui-button>
  <ui-button (click)="expand('c2')" label="Open 2"></ui-button>
  <ui-button (click)="collapseAll()" label="Close All"></ui-button>
</div>
<ui-accordion [items]="items" [expandedItems]="currentExpanded"></ui-accordion>`;

  // Async & Lazy
  asyncLazyItems = JSON.stringify([
    { id: 'l1', title: 'Lazy Content 1', content: 'This content was rendered only when opened.' },
    { id: 'l2', title: 'Lazy Content 2', content: 'Check the DOM, I was not there when closed.' },
  ]);
  asyncLazyCode = `<ui-accordion [items]="items" lazy></ui-accordion>`;

  handleAction(event: CustomEvent) {
    alert(`Action clicked: ${event.detail.actionId} on item ${event.detail.itemId}`);
  }

  handleReorder(event: CustomEvent) {}

  logEvent(name: string, event: CustomEvent) {
    const timestamp = new Date().toLocaleTimeString();
    this.eventsLog.unshift(`${timestamp}: ${name} - ${event.detail.itemId}`);
    if (this.eventsLog.length > 5) this.eventsLog.pop();
  }

  setControlledExpanded(ids: string[]) {
    this.controlledExpanded = [...ids];
  }

  itemStructureCode = `interface AccordionItem {
  id: string;              // Unique identifier (required)
  title: string;           // Item header text (required)
  content: string;         // HTML content for the panel (required)
  subtitle?: string;       // Optional subtitle below title
  icon?: string;           // Optional icon (emoji or icon class)
  actions?: Action[];      // Optional action buttons
  children?: AccordionItem[]; // Optional nested items
}

interface Action {
  id: string;              // Unique action identifier
  label: string;           // Button label/icon
  ariaLabel: string;       // Accessibility label
}`;

  usageBasicCode = `<ui-accordion [items]="items"></ui-accordion>

// Component
items = [
  {
    id: 'item1',
    title: 'First Item',
    content: '<p>Content for first item</p>'
  },
  {
    id: 'item2',
    title: 'Second Item',
    content: '<p>Content for second item</p>'
  }
];`;

  usageSearchCode = `<ui-accordion 
  [items]="items" 
  enable-search 
  search-placeholder="Search items...">
</ui-accordion>`;

  usageActionsCode = `<ui-accordion 
  [items]="items" 
  (accordionAction)="handleAction($event)"
  (afterOpen)="onItemOpen($event)">
</ui-accordion>

// Component
items = [
  {
    id: 'file1',
    title: 'Document.pdf',
    subtitle: '2.4 MB',
    content: '<p>Preview...</p>',
    actions: [
      { id: 'download', label: '⬇️', ariaLabel: 'Download' },
      { id: 'delete', label: '🗑️', ariaLabel: 'Delete' }
    ]
  }
];

handleAction(event: CustomEvent) {
  const { itemId, actionId } = event.detail;
  console.log(\`Action \${actionId} on item \${itemId}\`);
}`;

  usageDragDropCode = `<ui-accordion 
  [items]="items" 
  enable-drag-drop 
  enable-persistence 
  persistence-key="my-accordion-v1"
  (accordionReorder)="handleReorder($event)">
</ui-accordion>

// Component
handleReorder(event: CustomEvent) {
  const { oldIndex, newIndex } = event.detail;
  // Update your data model
}`;
}
