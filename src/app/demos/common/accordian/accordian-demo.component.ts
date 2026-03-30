import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DmAccordianPlaygroundComponent } from '../../../playground/common/accordian-playground/accordian-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';

import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { PlaygroundEventLogComponent } from '../../../shared/components/playground-event-log/playground-event-log.component';

@Component({
  selector: 'dm-accordian-demo',
  standalone: true,
  imports: [
    DmAccordianPlaygroundComponent,
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
    { id: 'basic', title: 'Basic', icon: '📁', iconLibrary: 'emoji', color: '#3b82f6' },
    { id: 'forms', title: 'Forms', icon: '📋', iconLibrary: 'emoji', color: '#8b5cf6' },
    { id: 'subtitles', title: 'Subtitles', icon: '📝', iconLibrary: 'emoji', color: '#10b981' },
    { id: 'search', title: 'Search', icon: '🔍', iconLibrary: 'emoji', color: '#f59e0b' },
    { id: 'actions', title: 'Actions', icon: '⚡', iconLibrary: 'emoji', color: '#ef4444' },
    { id: 'nested', title: 'Nested', icon: '🌳', iconLibrary: 'emoji', color: '#6366f1' },
    { id: 'drag-drop', title: 'Drag & Drop', icon: '✋', iconLibrary: 'emoji', color: '#ec4899' },
    { id: 'persistence', title: 'Persistence', icon: '💾', iconLibrary: 'emoji', color: '#14b8a6' },
    { id: 'loading', title: 'Loading', icon: '⏳', iconLibrary: 'emoji', color: '#a855f7' },
    { id: 'rtl', title: 'RTL', icon: '🌍', iconLibrary: 'emoji', color: '#06b6d4' },
    { id: 'dense', title: 'Dense', icon: '📦', iconLibrary: 'emoji', color: '#84cc16' },
    { id: 'card', title: 'Card Variant', icon: '💳', iconLibrary: 'emoji', color: '#3b82f6' },
    { id: 'card-list', title: 'Card List', icon: '📇', iconLibrary: 'emoji', color: '#6366f1' },
    { id: 'events', title: 'Events', icon: '📣', iconLibrary: 'emoji', color: '#f97316' },
    { id: 'controlled', title: 'Controlled', icon: '🎮', iconLibrary: 'emoji', color: '#2563eb' },
    { id: 'async-lazy', title: 'Async & Lazy', icon: '⚡', iconLibrary: 'emoji', color: '#7c3aed' },
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

  formAccordionItems = [
    {
      id: 'user-details',
      title: 'User Details',
      subtitle: 'Complete your profile',
      content: `
        <form style="display: flex; flex-direction: column; gap: 1rem;">
          <ui-input type="text" label="First Name" placeholder="Enter first name"></ui-input>
          <ui-input type="text" label="Last Name" placeholder="Enter last name"></ui-input>
          <ui-input type="email" label="Email Address" placeholder="alex@example.com"></ui-input>
          <ui-input type="password" label="Password" show-password-toggle="true" placeholder="Enter password"></ui-input>
          <ui-input type="tel" label="Phone Number" placeholder="+1 (555) 000-0000"></ui-input>
          <ui-input type="number" label="Age" min="18" max="120" show-steppers="true"></ui-input>
          <ui-input type="date" label="Date of Birth"></ui-input>
          <ui-input type="time" label="Preferred Meeting Time"></ui-input>
          <ui-input type="color" label="Favorite Color" value="#667eea"></ui-input>
          <ui-input type="file" label="Profile Picture" accept="image/*"></ui-input>
          <ui-input type="range" label="Experience Level" min="1" max="100" value="50"></ui-input>
          <ui-input multiline="true" label="Bio" placeholder="Tell us about yourself" rows="4"></ui-input>
          <div style="margin-top: 1rem; text-align: right;">
            <ui-button label="Save Details" variant="primary"></ui-button>
          </div>
        </form>
      `,
    },
    {
      id: 'preferences',
      title: 'Preferences',
      content: `
         <form style="display: flex; flex-direction: column; gap: 1rem;">
           <ui-checkbox label="Subscribe to newsletter" checked="true"></ui-checkbox>
           <ui-switch label="Enable notifications" checked="true"></ui-switch>
           <ui-radio-group label="Theme" options="[{&quot;label&quot;:&quot;Light&quot;,&quot;value&quot;:&quot;light&quot;},{&quot;label&quot;:&quot;Dark&quot;,&quot;value&quot;:&quot;dark&quot;},{&quot;label&quot;:&quot;System&quot;,&quot;value&quot;:&quot;system&quot;}]" value="system"></ui-radio-group>
           <ui-dropdown label="Role" placeholder="Select a role" o
           ptions="[{&quot;label&quot;:&quot;Admin&quot;,&quot;value&quot;:&quot;admin&quot;},
           {&quot;label&quot;:&quot;User&quot;,&quot;value&quot;:&quot;user&quot;}]"></ui-dropdown>
         </form>
       `,
    },
  ];
  formAccordionCode = '<ui-accordion [items]="formAccordionItems"></ui-accordion>';

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
    { id: '1', title: 'القسم الأول', content: 'محتوى القسم الأول' },
    { id: '2', title: 'القسم الثاني', content: 'محتوى القسم الثاني' },
  ];
  rtlCode = `<ui-accordion [items]="items" rtl></ui-accordion>`;

  denseItems = Array.from({ length: 5 }, (_, i) => ({
    id: `item-${i}`,
    title: `Dense Item ${i + 1}`,
    content: `Compact content for item ${i + 1}`,
  }));
  denseCode = `<ui-accordion [items]="items" dense></ui-accordion>`;

  cardAccordionItems = [
    {
      id: 'card1',
      title: 'Security Settings',
      subtitle: 'Manage your passwords and 2FA',
      icon: 'shield',
      content: '<p>Enhanced security options for your account protection.</p>',
    },
    {
      id: 'card2',
      title: 'Notification Center',
      subtitle: 'Stay updated with your activities',
      icon: 'bell',
      content: '<p>Configure how you receive alerts and updates.</p>',
    },
    {
      id: 'card3',
      title: 'Data Privacy',
      subtitle: 'Control your personal information',
      icon: 'lock',
      content: '<p>Review and manage your personal data sharing preferences.</p>',
    },
  ];
  cardAccordionCode = `<ui-accordion [items]="cardAccordionItems" variant="card"></ui-accordion>`;

  cardListAccordionCode = `<ui-accordion [items]="cardAccordionItems" variant="card-list"></ui-accordion>`;

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
