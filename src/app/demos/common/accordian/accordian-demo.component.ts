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
    {
      id: 'slot-content',
      title: 'Slot Content',
      icon: '🧩',
      iconLibrary: 'emoji',
      color: '#0891b2',
    },
    { id: 'emoji-icons', title: 'Emoji Icons', icon: '😊', iconLibrary: 'emoji', color: '#f97316' },
    { id: 'events', title: 'Events', icon: '📣', iconLibrary: 'emoji', color: '#f97316' },
    { id: 'controlled', title: 'Controlled', icon: '🎮', iconLibrary: 'emoji', color: '#2563eb' },
    { id: 'async-lazy', title: 'Async & Lazy', icon: '⚡', iconLibrary: 'emoji', color: '#7c3aed' },
    { id: 'auto-scroll', title: 'Auto Scroll', icon: '📜', iconLibrary: 'emoji', color: '#4338ca' },
    { id: 'physics', title: 'Kinetic Physics', icon: '🧬', iconLibrary: 'emoji', color: '#f43f5e' },
    {
      id: 'dropdown-integration',
      title: 'Dropdown Integration',
      icon: '🔽',
      iconLibrary: 'emoji',
      color: '#8b5cf6',
    },
    {
      id: 'success-pulse',
      title: 'Success Pulse',
      icon: '✨',
      iconLibrary: 'emoji',
      color: '#10b981',
    },
    {
      id: 'headline',
      title: 'Headline Variant',
      icon: '🎯',
      iconLibrary: 'emoji',
      color: '#111827',
    },
    {
      id: 'selection-position',
      title: 'Selection Position',
      icon: '📍',
      iconLibrary: 'emoji',
      color: '#3b82f6',
    },
    {
      id: 'zenith-controls',
      title: 'Zenith Controls',
      icon: '🛠️',
      iconLibrary: 'emoji',
      color: '#8b5cf6',
    },
    {
      id: 'apex-god-tier',
      title: 'Apex God-Tier',
      icon: '👑',
      iconLibrary: 'emoji',
      color: '#38bdf8',
    },
    { id: 'veto-shake', title: 'Veto & Shake', icon: '🚥', iconLibrary: 'emoji', color: '#ef4444' },
  ];

  basicAccordionItems = [
    {
      id: 'what-is',
      title: 'What is an Accordion?',
      icon: 'info',
      iconLibrary: 'lucide',
      content:
        '<p>An accordion is a vertically stacked list of items where each item can be expanded or collapsed to reveal the content associated with that item.</p>',
    },
    {
      id: 'when-to-use',
      title: 'When should I use it?',
      icon: 'zap',
      iconLibrary: 'lucide',
      content:
        "<p>Use accordions to organize related information in a limited space. They're perfect for FAQs, settings panels, and content sections.</p>",
    },
    {
      id: 'features',
      title: 'Key Features',
      icon: 'rocket',
      iconLibrary: 'lucide',
      content:
        '<ul><li>Compact vertical layout</li><li>Single or multiple expansion</li><li>Keyboard accessible</li><li>Customizable styling</li></ul>',
    },
  ];
  basicAccordionCode = `<ui-accordion [items]="items" icon-library="lucide"></ui-accordion>`;

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
      id: 'profile',
      title: 'User Profile',
      subtitle: 'Manage your personal information',
      icon: 'user',
      iconLibrary: 'lucide',
      content: '<p>Update your name, email, avatar, and other profile details here.</p>',
    },
    {
      id: 'security',
      title: 'Security Settings',
      subtitle: 'Password, 2FA, and login history',
      icon: 'lock',
      iconLibrary: 'lucide',
      content:
        '<p>Configure two-factor authentication, change your password, and review recent login activity.</p>',
    },
    {
      id: 'notifications',
      title: 'Notifications',
      subtitle: 'Email and push notification preferences',
      icon: 'bell',
      iconLibrary: 'lucide',
      badge: 3,
      content:
        '<p>Choose which notifications you want to receive and how you want to be notified.</p>',
    },
  ];
  subtitlesCode = `<ui-accordion [items]="items" icon-library="lucide"></ui-accordion>`;

  searchItems = [
    {
      id: 'react',
      title: 'React',
      subtitle: 'A JavaScript library for building user interfaces',
      icon: 'layers',
      iconLibrary: 'lucide',
      content:
        'React makes it painless to create interactive UIs. Design simple views for each state in your application.',
    },
    {
      id: 'angular',
      title: 'Angular',
      subtitle: 'Platform for building mobile and desktop web applications',
      icon: 'triangle',
      iconLibrary: 'lucide',
      content:
        'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
    },
    {
      id: 'vue',
      title: 'Vue.js',
      subtitle: 'The Progressive JavaScript Framework',
      icon: 'heart',
      iconLibrary: 'lucide',
      content:
        'Vue is a progressive framework for building user interfaces. It is designed to be incrementally adoptable.',
    },
    {
      id: 'svelte',
      title: 'Svelte',
      subtitle: 'Cybernetically enhanced web apps',
      icon: 'flame',
      iconLibrary: 'lucide',
      content:
        'Svelte is a radical new approach to building user interfaces. It shifts work into a compile step.',
    },
    {
      id: 'ember',
      title: 'Ember',
      subtitle: 'A framework for ambitious web developers',
      icon: 'star',
      iconLibrary: 'lucide',
      content:
        'Ember is a productive, battle-tested JavaScript framework for building modern web applications.',
    },
  ];
  searchCode = `<ui-accordion [items]="items" enable-search search-placeholder="Search frameworks..." icon-library="lucide"></ui-accordion>`;

  actionsItems = [
    {
      id: 'doc1',
      title: 'Project Proposal.docx',
      subtitle: 'Last modified: 2 hours ago',
      icon: 'file',
      iconLibrary: 'lucide',
      content:
        '<p>This is the main project proposal document containing all requirements and specifications.</p>',
      actions: [
        { id: 'edit', label: 'Edit', icon: 'pencil' },
        { id: 'share', label: 'Share', icon: 'link',
      iconLibrary: 'lucide' },
        { id: 'delete', label: 'Delete', icon: 'trash-2',
      iconLibrary: 'lucide' },
      ],
    },
    {
      id: 'doc2',
      title: 'Budget Report.xlsx',
      subtitle: 'Last modified: 1 day ago',
      icon: 'bar-chart-2',
      iconLibrary: 'lucide',
      content: '<p>Financial budget report for Q1 2024 with detailed breakdowns.</p>',
      actions: [
        { id: 'download', label: 'Download', icon: 'download' },
        { id: 'print', label: 'Print', icon: 'printer',
      iconLibrary: 'lucide' },
      ],
    },
    {
      id: 'doc3',
      title: 'Design Assets.zip',
      subtitle: 'Last modified: 3 days ago',
      icon: 'palette',
      iconLibrary: 'lucide',
      content: '<p>All design assets and source files for the project.</p>',
      actions: [
        { id: 'download', label: 'Download', icon: 'download' },
        { id: 'delete', label: 'Delete', icon: 'trash-2',
      iconLibrary: 'lucide' },
      ],
    },
  ];
  actionsCode = `<ui-accordion [items]="items" icon-library="lucide" (accordionAction)="handleAction($event)"></ui-accordion>`;

  nestedItems = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      subtitle: '3 subcategories',
      icon: 'palette',
      iconLibrary: 'lucide',
      content: 'All frontend-related topics and resources.',
      children: [
        {
          id: 'js',
          title: 'JavaScript',
          icon: 'zap',
          children: [
            {
              id: 'ts',
              title: 'TypeScript',
              icon: 'file-text',
              content: 'Superset of JS with static types',
            },
            { id: 'es6', title: 'ES6+', icon: 'star',
      iconLibrary: 'lucide', content: 'Modern JS features' },
          ],
        },
        { id: 'css', title: 'CSS', icon: 'layout',
      iconLibrary: 'lucide', content: 'Styling the web' },
        { id: 'html', title: 'HTML', icon: 'code',
      iconLibrary: 'lucide', content: 'Markup language for the web' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      subtitle: '2 subcategories',
      icon: 'server',
      iconLibrary: 'lucide',
      content: 'Server-side development topics.',
      children: [
        { id: 'node', title: 'Node.js', icon: 'globe', content: 'JS on the server' },
        { id: 'python', title: 'Python', icon: 'terminal',
      iconLibrary: 'lucide', content: 'Versatile language' },
      ],
    },
  ];
  nestedCode = `<ui-accordion [items]="items" enable-nested icon-library="lucide"></ui-accordion>`;

  dragDropItems = [
    {
      id: 'task1',
      title: '1. Project Setup',
      icon: 'clipboard-list',
      iconLibrary: 'lucide',
      content: 'Initialize the repository and install dependencies.',
    },
    {
      id: 'task2',
      title: '2. UI Design',
      icon: 'palette',
      iconLibrary: 'lucide',
      content: 'Create wireframes and design mockups.',
    },
    {
      id: 'task3',
      title: '3. Implementation',
      icon: 'settings',
      iconLibrary: 'lucide',
      content: 'Build features based on the design.',
    },
    {
      id: 'task4',
      title: '4. Testing & QA',
      icon: 'check-circle',
      iconLibrary: 'lucide',
      content: 'Write tests and fix bugs.',
    },
  ];
  dragDropCode = `<ui-accordion [items]="items" enable-drag-drop icon-library="lucide" (accordionReorder)="handleReorder($event)"></ui-accordion>`;

  persistenceItems = [
    {
      id: 'pref1',
      title: 'Persistent Item 1',
      icon: 'save',
      iconLibrary: 'lucide',
      content: 'Open/close this and refresh the page — the state is saved!',
    },
    {
      id: 'pref2',
      title: 'Persistent Item 2',
      icon: 'refresh-cw',
      iconLibrary: 'lucide',
      content: 'Try opening/closing and refreshing the page.',
    },
    {
      id: 'pref3',
      title: 'Persistent Item 3',
      icon: 'star',
      iconLibrary: 'lucide',
      content: 'Your preferences are remembered via localStorage.',
    },
  ];
  persistenceCode = `<ui-accordion [items]="items" enable-persistence persistence-key="custom-key-v1" icon-library="lucide"></ui-accordion>`;

  loadingItems = [
    {
      id: 'load1',
      title: 'Loaded Item',
      icon: 'check-circle',
      iconLibrary: 'lucide',
      content: 'This item is fully loaded and ready.',
    },
    {
      id: 'load2',
      title: 'Loading Item',
      icon: 'loader',
      iconLibrary: 'lucide',
      loading: true,
      content: 'This item is still loading...',
    },
    { id: 'load3', title: 'Another Item', icon: 'file',
      iconLibrary: 'lucide', content: 'Normal fully loaded item.' },
  ];
  loadingCode = `<ui-accordion [items]="loadingItems" icon-library="lucide"></ui-accordion>`;
  globalLoadingCode = `<ui-accordion loading></ui-accordion>`;

  rtlItems = [
    {
      id: 'rtl1',
      title: 'مرحبا بك (Welcome)',
      icon: 'globe',
      iconLibrary: 'lucide',
      content: 'This is RTL mode with Arabic text support.',
    },
    {
      id: 'rtl2',
      title: 'שלום (Hello)',
      icon: 'book-open',
      iconLibrary: 'lucide',
      content: 'Hebrew text is also supported in RTL mode.',
    },
    {
      id: 'rtl3',
      title: 'RTL Layout',
      icon: 'arrow-right',
      iconLibrary: 'lucide',
      content: 'All elements are properly aligned for right-to-left reading.',
    },
  ];
  rtlCode = `<ui-accordion [items]="items" rtl icon-library="lucide"></ui-accordion>`;

  denseItems = [
    {
      id: 'd1',
      title: 'Compact Item 1',
      subtitle: 'Less padding',
      icon: 'package',
      iconLibrary: 'lucide',
      content: 'Dense mode uses less spacing — perfect for data-heavy UIs.',
    },
    {
      id: 'd2',
      title: 'Compact Item 2',
      subtitle: 'Higher density',
      icon: 'bar-chart-2',
      iconLibrary: 'lucide',
      content: 'More content visible without scrolling.',
    },
    {
      id: 'd3',
      title: 'Compact Item 3',
      subtitle: 'Efficient layout',
      icon: 'trending-up',
      iconLibrary: 'lucide',
      content: 'Fit more on screen for dashboard-style views.',
    },
    {
      id: 'd4',
      title: 'Compact Item 4',
      subtitle: 'Optimized spacing',
      icon: 'zap',
      iconLibrary: 'lucide',
      content: 'Ideal for tables, logs, and compact lists.',
    },
    {
      id: 'd5',
      title: 'Compact Item 5',
      subtitle: 'Fast scanning',
      icon: 'eye',
      iconLibrary: 'lucide',
      content: 'Users can scan content quickly in dense mode.',
    },
  ];
  denseCode = `<ui-accordion [items]="items" dense multiple icon-library="lucide"></ui-accordion>`;

  cardAccordionItems = [
    {
      id: 'card1',
      title: 'Security Settings',
      subtitle: 'Manage your passwords and 2FA',
      icon: 'shield',
      iconLibrary: 'lucide',
      content: '<p>Enhanced security options for your account protection.</p>',
    },
    {
      id: 'card2',
      title: 'Notification Center',
      subtitle: 'Stay updated with your activities',
      icon: 'bell',
      iconLibrary: 'lucide',
      badge: 4,
      content: '<p>Configure how you receive alerts and updates.</p>',
    },
    {
      id: 'card3',
      title: 'Data Privacy',
      subtitle: 'Control your personal information',
      icon: 'lock',
      iconLibrary: 'lucide',
      content: '<p>Review and manage your personal data sharing preferences.</p>',
    },
    {
      id: 'card4',
      title: 'Billing & Payments',
      subtitle: 'Credit cards, invoices, and history',
      icon: 'credit-card',
      iconLibrary: 'lucide',
      content: '<p>Manage payment methods and view your billing history.</p>',
    },
  ];
  cardAccordionCode = `<ui-accordion [items]="cardAccordionItems" variant="card"></ui-accordion>`;

  cardListAccordionItems = [
    {
      id: 'guide1',
      title: 'Getting Started',
      subtitle: 'Design philosophy and core concepts',
      icon: 'rocket',
      iconLibrary: 'lucide',
      content:
        'Learn how to integrate our components into your workflow. We support React, Angular, Vue, and Vanilla JS out of the box with zero configuration required.',
    },
    {
      id: 'guide2',
      title: 'Installation',
      subtitle: 'Step-by-step setup and dependencies',
      icon: 'download',
      iconLibrary: 'lucide',
      content:
        'Install via NPM or use our CDN for quick prototyping. Highly optimized for bundles with dead-code elimination and efficient lazy loading.',
    },
    {
      id: 'guide3',
      title: 'Usage Guide',
      subtitle: 'Principles for implementing components',
      icon: 'terminal',
      iconLibrary: 'lucide',
      content:
        'Our API is consistent and intuitive. Every component follows standard accessibility rules (ARIA), supports RTL/LTR, and ships with full TypeScript definitions.',
    },
    {
      id: 'guide4',
      title: 'Advanced Tips',
      subtitle: 'Performance tuning and custom theming',
      icon: 'zap',
      iconLibrary: 'lucide',
      content:
        'Dive deep into CSS variables, design tokens, and shadow DOM strategies to build complex, high-performance web applications.',
    },
  ];
  cardListSelectedColor = '#10b981';
  cardListAccordionCode = `<ui-accordion [items]="cardListAccordionItems" variant="card-list" [attr.selected-header-color]="selectedColor"></ui-accordion>`;

  eventsItems = [
    { id: 'e1', title: 'Event Item 1', icon: 'rss',
      iconLibrary: 'lucide', content: 'Click to trigger lifecycle events.' },
    {
      id: 'e2',
      title: 'Event Item 2',
      icon: 'eye',
      iconLibrary: 'lucide',
      content: 'Watch the log below for event details.',
    },
    {
      id: 'e3',
      title: 'Event Item 3',
      icon: 'sparkles',
      iconLibrary: 'lucide',
      content: 'All events (beforeOpen, afterOpen, beforeClose, afterClose) are captured.',
    },
  ];
  eventsLog: string[] = [];
  eventsCode = `<ui-accordion [items]="items" icon-library="lucide"
  (beforeOpen)="log('Before Open', $event)"
  (afterOpen)="log('After Open', $event)"
  (beforeClose)="log('Before Close', $event)"
  (afterClose)="log('After Close', $event)">
</ui-accordion>`;

  controlledItems = [
    {
      id: 'c1',
      title: 'Controlled Panel 1',
      icon: 'gamepad',
      iconLibrary: 'lucide',
      content: 'I am controlled by the buttons above.',
    },
    {
      id: 'c2',
      title: 'Controlled Panel 2',
      icon: 'sliders',
      iconLibrary: 'lucide',
      content: 'Me too! Click the buttons to open/close me.',
    },
    {
      id: 'c3',
      title: 'Controlled Panel 3',
      icon: 'dices',
      iconLibrary: 'lucide',
      content: 'We can be opened together with "Open All".',
    },
  ];
  controlledExpanded: string[] = [];
  controlledCode = `<ui-accordion [items]="items" [expandedItems]="controlledExpanded" multiple icon-library="lucide"></ui-accordion>`;

  asyncLazyItems = [
    {
      id: 'l1',
      title: 'Lazy Content 1',
      icon: 'cloud',
      iconLibrary: 'lucide',
      content: 'This content was rendered only when you opened me.',
    },
    {
      id: 'l2',
      title: 'Lazy Content 2',
      icon: 'zap',
      iconLibrary: 'lucide',
      content: 'Check the DOM — I was not there when closed.',
    },
    {
      id: 'l3',
      title: 'Lazy Content 3',
      icon: 'package',
      iconLibrary: 'lucide',
      content: 'Heavy content is ideal for lazy rendering.',
    },
  ];
  asyncLazyCode = `<ui-accordion [items]="items" lazy icon-library="lucide"></ui-accordion>`;

  slotContentItems = [
    {
      id: 'slot1',
      title: 'Rich Content Item',
      subtitle: 'Uses slot="content-slot1"',
      icon: 'layout',
      iconLibrary: 'lucide',
    },
    {
      id: 'slot2',
      title: 'Table Layout Item',
      subtitle: 'Uses slot="content-slot2"',
      icon: 'table',
      iconLibrary: 'lucide',
    },
    {
      id: 'normal',
      title: 'Standard Item',
      subtitle: 'Uses the content property directly',
      icon: 'file-text',
      iconLibrary: 'lucide',
      content: 'This is a standard string content item — no slot needed.',
    },
  ];
  slotContentCode = `<ui-accordion [items]="items" icon-library="lucide" multiple>
  <!-- Custom slot content for item id="slot1" -->
  <div slot="content-slot1">...</div>
  <!-- Custom slot content for item id="slot2" -->
  <div slot="content-slot2">...</div>
</ui-accordion>`;

  emojiItems = [
    {
      id: 'emoji1',
      title: 'Rocket Launch',
      subtitle: 'High-priority feature',
      icon: '🚀',
      iconLibrary: 'emoji',
      badge: 2,
      content:
        'Emoji icons render natively using the platform emoji font — no icon library CDN needed.',
    },
    {
      id: 'emoji2',
      title: 'Fire Alert',
      subtitle: 'Critical bug',
      icon: '🔥',
      iconLibrary: 'emoji',
      content:
        "Each item can specify its own emoji via the <code>iconLibrary: 'emoji'</code> field, or inherit from the accordion's <code>icon-library</code> prop.",
    },
    {
      id: 'emoji3',
      title: 'Celebration',
      subtitle: 'Release milestone',
      icon: '🎉',
      iconLibrary: 'emoji',
      badge: 1,
      content: 'Emojis scale perfectly because they are text characters.',
    },
    {
      id: 'emoji4',
      title: 'Idea / Research',
      subtitle: 'New proposal',
      icon: '💡',
      iconLibrary: 'emoji',
      content:
        'Mix emoji with other icon libraries: set <code>icon-library="emoji"</code> globally and override individual items as needed.',
    },
    {
      id: 'emoji5',
      title: 'Security & Access',
      subtitle: 'Permissions review',
      icon: '🔐',
      iconLibrary: 'emoji',
      content:
        'The icon color is automatically preserved as native emoji when iconLibrary is set to "emoji".',
    },
  ];
  emojiIconsCode = `<ui-accordion [items]="items" icon-library="emoji" multiple></ui-accordion>`;

  // Auto Scroll
  autoScrollItems = Array.from({ length: 20 }, (_, i) => ({
    id: `as-${i + 1}`,
    title: `Accordion Item #${i + 1}`,
    subtitle: `Supporting text for item ${i + 1}`,
    icon: 'list',
    content: `
      <div style="padding: 10px 0;">
        <p>Detailed content for section ${i + 1}. Demonstrates auto-scroll capabilities.</p>
        <div style="height: 120px; background: #f0f4f8; border-radius: 6px; display: flex; align-items: center;
            justify-content: center; color: #94a3b8; font-style: italic; margin: 10px 0;">Tall content area</div>
        <p>When auto-scroll is enabled, expanding this item will scroll it into view automatically.</p>
      </div>
    `,
  }));
  autoScrollCode = `<ui-accordion [items]="items" auto-scroll variant="bordered" icon-library="lucide"></ui-accordion>`;

  // Kinetic Physics
  physicsItems = [
    {
      id: 'p1',
      title: 'Expand Me',
      icon: 'zap',
      iconLibrary: 'lucide',
      content: 'Notice the spring over-travel on expansion.',
    },
    {
      id: 'p2',
      title: 'Mechanical Feel',
      icon: 'cog',
      iconLibrary: 'lucide',
      content: 'High-fidelity motion curves for premium look.',
    },
    {
      id: 'p3',
      title: 'Elastic Return',
      icon: 'repeat',
      iconLibrary: 'lucide',
      content: 'The panel overshoots and settles smoothly.',
    },
  ];
  physicsCode = `<!-- Bouncy spring physics -->
<ui-accordion [items]="items" physics="bouncy" multiple icon-library="lucide"></ui-accordion>

<!-- Liquid viscosity physics -->
<ui-accordion [items]="items" physics="liquid" animation-duration="600" multiple icon-library="lucide"></ui-accordion>`;

  // Dropdown Integration
  dropdownIntegrationItems = [
    {
      id: 'filters',
      title: 'Reporting Filters',
      subtitle: 'Single and Multi-select dropdowns',
      icon: 'filter',
      iconLibrary: 'lucide',
    },
    {
      id: 'settings',
      title: 'Global Settings',
      subtitle: 'Cascading hierarchy dropdown',
      icon: 'globe',
      iconLibrary: 'lucide',
    },
  ];
  dropdownIntegrationCode = `<ui-accordion [items]="items" variant="card-list" multiple>
  <div slot="content-filters">...</div>
  <div slot="content-settings">...</div>
</ui-accordion>`;

  deptOptions = [
    { value: 'hr', label: 'Human Resources', icon: 'users' },
    { value: 'it', label: 'Information Technology', icon: 'monitor' },
    { value: 'fin', label: 'Finance', icon: 'credit-card' },
  ];
  roleOptions = [
    { value: 'eng', label: 'Engineer' },
    { value: 'mgr', label: 'Manager' },
    { value: 'dir', label: 'Director' },
  ];
  regionOptions = [
    {
      value: 'na',
      label: 'North America',
      children: [
        { value: 'usa', label: 'United States' },
        { value: 'can', label: 'Canada' },
      ],
    },
    {
      value: 'eu',
      label: 'Europe',
      children: [
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ger', label: 'Germany' },
      ],
    },
  ];

  // Veto & Kinetic Shake
  vetoItems = [
    {
      id: 'unlocked',
      title: 'Unlocked Content (Click me)',
      content: 'Universal access permitted. This item opens freely.',
      icon: 'unlock',
      iconLibrary: 'lucide',
    },
    {
      id: 'locked',
      title: 'Locked Content (Vetoed)',
      subtitle: 'Restricted access — click to see the veto shake',
      content: '',
      icon: 'lock',
      iconLibrary: 'lucide',
      actions: [{ id: 'req', label: 'Request Access', icon: 'key' }],
    },
  ];
  vetoStatus = '';
  vetoShakeCode = `<ui-accordion [items]="items" variant="card-list" icon-library="lucide"
  (beforeOpen)="onVetoBeforeOpen($event, vetoAccEl)">
</ui-accordion>

// In component:
onVetoBeforeOpen(event: CustomEvent, accordion: any) {
  if (event.detail?.itemId === 'locked') {
    event.preventDefault();
    accordion.shake?.('locked');
  }
}`;

  onVetoBeforeOpen(event: any, accordion: any) {
    if (event.detail?.itemId === 'locked') {
      event.preventDefault();
      accordion.shake?.('locked');
      this.vetoStatus = '⛔ ACCESS DENIED: VETO REJECTION';
      setTimeout(() => (this.vetoStatus = ''), 2500);
    }
  }

  // Success Radiant Pulse
  successPulseItems = [
    {
      id: 'step1',
      title: 'Workflow Step 1',
      subtitle: 'Data Validation Completed',
      content: 'Step 1 has been validated automatically. All data integrity checks passed.',
      icon: 'check-circle',
      iconLibrary: 'lucide',
    },
    {
      id: 'step2',
      title: 'Workflow Step 2',
      subtitle: 'Compliance Review',
      content: 'Compliance tokens generated successfully. Regulatory thresholds met.',
      icon: 'shield-check',
      iconLibrary: 'lucide',
    },
  ];
  successPulseCode = `<ui-accordion [items]="items" variant="card-list" multiple icon-library="lucide"></ui-accordion>
// Trigger the radiant pulse via the component method:
accordion.success('step1');`;

  // Headline Variant
  headlineItems = [
    {
      id: '1',
      title: 'Solutions by Partner and Services',
      subtitle:
        'Understanding how the digitization and electrification trends create strategic opportunities for your business.',
      content: 'Detailed strategy documentation for global partners.',
      badge: 1,
    },
    {
      id: '2',
      title: 'Explore All Services',
      content: 'Comprehensive catalog of modern industrial solutions.',
    },
    {
      id: '3',
      title: 'Solutions by Industry',
      subtitle:
        'A cloud-based data centre infrastructure management platform for multiple sectors.',
      content: 'Industry roadmaps for critical sectors.',
    },
  ];
  headlineNoSubItems = [
    {
      id: '1',
      title: 'Corporate Governance Dashboard',
      content: 'Detailed compliance logs and executive summaries.',
      badge: 4,
    },
    {
      id: '2',
      title: 'Strategic Resource Allocation',
      content: 'Budget splits across departments.',
    },
    {
      id: '3',
      title: 'Annual Performance Metrics',
      content: 'Key KPIs for the current fiscal year.',
    },
  ];
  headlineCode = `<ui-accordion [items]="items" variant="headline" size="main" selection-position="none"></ui-accordion>`;

  // Selection Position
  selectionItems = [
    {
      id: '1',
      title: 'Interactive Selection',
      content: 'The colored border indicates the active state.',
      icon: 'mouse-pointer',
      iconLibrary: 'lucide',
    },
    {
      id: '2',
      title: 'Configurable Color',
      content: 'Set any hex color via selected-header-color for the indicator.',
      icon: 'palette',
      iconLibrary: 'lucide',
    },
  ];
  selectionCode = `<!-- Left indicator (default) -->
<ui-accordion [items]="items" selection-position="left" selected-header-color="#3b82f6"></ui-accordion>

<!-- Top tab-style indicator -->
<ui-accordion [items]="items" selection-position="top" selected-header-color="#8b5cf6"></ui-accordion>`;

  // Zenith Mastery Controls
  zenithItems = [
    {
      id: 'node-stream',
      title: 'Sovereign Telemetry',
      subtitle: 'Live Cluster A',
      icon: 'zap',
      iconLibrary: 'lucide',
      content: 'Telemetry stream is operating within normal industrial thresholds.',
    },
    {
      id: 'node-sec',
      title: 'Security Perimeter',
      subtitle: 'Zone Alpha',
      content: 'Authenticated! All perimeter nodes are active and secure.',
      icon: 'shield',
      iconLibrary: 'lucide',
      actions: [{ id: 'lock', icon: 'lock' }],
    },
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `node-${i}`,
      title: `Data Log ${i + 1}`,
      subtitle: `Server Instance #${100 + i}`,
      content: `Technical logs for instance ${i + 1}. No critical errors recorded.`,
      icon: 'server',
      actions: [{ id: 'pin', icon: 'pin',
      iconLibrary: 'lucide' }],
    })),
  ];
  zenithCode = `<ui-accordion [items]="items" variant="card-list"
  enable-search enable-nested enable-quick-actions
  selected-header-color="#8b5cf6"
></ui-accordion>`;

  // Apex God-Tier
  godTierItems = [
    {
      id: 'step1',
      title: 'Infrastructure Setup',
      subtitle: 'Cloud resource provisioning status',
      content: '✅ All production clusters were initialized in 2.4s. DNS propagation complete.',
      status: 'completed',
      progress: 100,
      badge: 12,
      icon: 'server',
      iconLibrary: 'lucide',
    },
    {
      id: 'step2',
      title: 'Security Sync',
      subtitle: 'Identity and Access Management',
      content:
        '❌ Token rotation failed for regional subgroup B. Permission denied by root-authority.',
      status: 'error',
      progress: 12,
      icon: 'lock',
      iconLibrary: 'lucide',
    },
    {
      id: 'step3',
      title: 'Data Ingestion Pipeline',
      subtitle: 'Real-time telemetry streams',
      content: 'Currently processing: 2.4 TB/min | Throughput: 98.2%',
      status: 'current',
      progress: 70,
      icon: 'activity',
      iconLibrary: 'lucide',
    },
    {
      id: 'step4',
      title: 'Optimization Engine',
      subtitle: 'AI-driven cost reduction',
      content: 'Engine is analyzing traffic patterns. Estimated cost savings: $4.2k/month.',
      status: 'warning',
      icon: 'zap',
      iconLibrary: 'lucide',
    },
    {
      id: 'step5',
      title: 'Deployment Manifest',
      subtitle: 'Version 4.2.0 stable rollout',
      content: 'Ready to finalize. All hooks are verified.',
      icon: 'package',
      iconLibrary: 'lucide',
    },
    {
      id: 'step6',
      title: 'Resource Monitoring',
      subtitle: 'Active node health checks',
      content: 'Nodes: 42 Active, 0 Drained, 0 Failing.',
      icon: 'bar-chart',
      iconLibrary: 'lucide',
    },
  ];
  godTierCode = `<ui-accordion [items]="items" variant="card-list"
  theme="radiant"
  lazy
  sticky-headers
  enable-parallax
  enable-haptics
  selected-header-color="#38bdf8"
></ui-accordion>`;

  handleAction(event: any) {
    const { actionId, itemId } = event.detail;
    console.log(`Action "${actionId}" clicked on item "${itemId}"`);
  }

  handleReorder(_event: Event) {}

  changeCardListColor(color: string) {
    this.cardListSelectedColor = color;
  }

  logEvent(name: string, event: any) {
    const timestamp = new Date().toLocaleTimeString();
    this.eventsLog.unshift(`${timestamp}: ${name} — ${event.detail?.itemId ?? ''}`);
    if (this.eventsLog.length > 6) this.eventsLog.pop();
  }

  setControlledExpanded(ids: string[]) {
    this.controlledExpanded = [...ids];
  }
}
