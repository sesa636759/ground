import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accordion-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accordion.playground.html',
  styleUrl: './accordion.playground.scss',
})
export class AccordionPlaygroundComponent implements AfterViewInit {
  activeDemo = signal('interactive');
  copyButtonText = 'Copy';
  actionLog: string[] = [];
  reorderLog = '';

  config = {
    multiple: false,
    showNumbers: false,
    enableSearch: false,
    expandCollapseAll: false,
    enableDragDrop: false,
    rtl: false,
    dense: false,
    disabled: false,
    variant: 'default',
    size: 'md',
    iconPosition: 'end',
  };

  demos = [
    { id: 'interactive', label: 'Interactive', icon: '🎮' },
    { id: 'basic', label: 'Basic', icon: '📋' },
    { id: 'subtitle', label: 'Subtitles', icon: '📝' },
    { id: 'search', label: 'Search', icon: '🔍' },
    { id: 'actions', label: 'Actions', icon: '⚡' },
    { id: 'nested', label: 'Nested', icon: '🌳' },
    { id: 'dragdrop', label: 'Drag & Drop', icon: '🎯' },
    { id: 'docs', label: 'Documentation', icon: '📖' },
  ];

  get generatedCode(): string {
    let props = '';
    if (this.config.multiple) props += ' multiple';
    if (this.config.showNumbers) props += ' show-numbers';
    if (this.config.enableSearch) props += ' enable-search';
    if (this.config.expandCollapseAll) props += ' enable-expand-collapse-all';
    if (this.config.enableDragDrop) props += ' enable-drag-drop';
    if (this.config.rtl) props += ' rtl';
    if (this.config.dense) props += ' dense';
    if (this.config.disabled) props += ' disabled';
    if (this.config.variant !== 'default') props += ` variant="${this.config.variant}"`;
    if (this.config.size !== 'md') props += ` size="${this.config.size}"`;
    if (this.config.iconPosition !== 'end') props += ` icon-position="${this.config.iconPosition}"`;

    return `<ui-accordion${props}></ui-accordion>
<script>
  const accordion = document.querySelector('ui-accordion');
  accordion.items = JSON.stringify([...]);
</script>`;
  }

  ngAfterViewInit() {
    console.log('🎯 Accordion Playground: ngAfterViewInit called');
    // Increase timeout to ensure web components are fully loaded
    setTimeout(() => {
      console.log('🎯 Accordion Playground: Initializing accordions...');
      this.initializeAccordions();
    }, 500);
  }

  initializeAccordions() {
    console.log('🎯 Accordion Playground: initializeAccordions started');

    // Interactive Accordion
    const interactive = document.getElementById('interactiveAccordion') as any;
    console.log('🎯 Interactive accordion element:', interactive);

    if (interactive) {
      try {
        const items = [
          {
            id: 'item1',
            title: 'Feature-Rich Item',
            subtitle: 'With subtitle and actions',
            content: 'This item demonstrates subtitle, badge, and action buttons.',
            icon: '🎨',
            badge: 3,
            actions: [
              { id: 'edit', label: 'Edit', icon: '✏️' },
              { id: 'delete', label: 'Delete', icon: '🗑️' },
            ],
          },
          {
            id: 'item2',
            title: 'Nested Content',
            subtitle: 'Enable nested mode to see children',
            content: 'This item has nested children.',
            icon: '🌳',
            children: [
              { id: 'child1', title: 'Child Item 1', content: 'Nested content 1', icon: '📄' },
              { id: 'child2', title: 'Child Item 2', content: 'Nested content 2', icon: '📄' },
            ],
          },
          {
            id: 'item3',
            title: 'Searchable Item',
            subtitle: 'Try searching for keywords',
            content:
              'This item contains searchable text with keywords like JavaScript, React, and TypeScript.',
            icon: '🔍',
            badge: 5,
          },
        ];

        console.log('🎯 Setting items:', items);
        interactive.items = JSON.stringify(items);
        interactive.setAttribute('enable-nested', 'true');
        interactive.defaultOpen = JSON.stringify(['item1']);
        console.log('✅ Interactive accordion initialized with items');
      } catch (error) {
        console.error('❌ Error initializing interactive accordion:', error);
      }
    } else {
      console.error('❌ Interactive accordion element not found!');
    }

    // Basic Accordion
    const basic = document.getElementById('basicAccordion') as any;
    if (basic) {
      basic.items = JSON.stringify([
        {
          id: 'item1',
          title: 'What is Stencil?',
          content:
            'Stencil is a toolchain for building reusable, scalable Design Systems. It generates Web Components that can be used in any framework or no framework at all.',
          icon: 'ℹ️',
        },
        {
          id: 'item2',
          title: 'Why use Web Components?',
          content:
            '<ul style="margin:0;"><li>Web Components standard</li><li>TypeScript support</li><li>Framework agnostic</li><li>Lazy loading</li><li>Pre-rendering</li></ul>',
          icon: '⚡',
        },
        {
          id: 'item3',
          title: 'Getting Started',
          content:
            'Install Stencil CLI with <code>npm init stencil</code> and choose a starter template. Then run <code>npm start</code> to begin development.',
          icon: '🚀',
        },
      ]);
      basic.defaultOpen = JSON.stringify(['item1']);
    }

    // Subtitle Accordion
    const subtitle = document.getElementById('subtitleAccordion') as any;
    if (subtitle) {
      subtitle.items = JSON.stringify([
        {
          id: 'profile',
          title: 'User Profile',
          subtitle: 'Manage your personal information',
          content: 'Update your name, email, avatar, and other profile details here.',
          icon: '👤',
        },
        {
          id: 'security',
          title: 'Security Settings',
          subtitle: 'Password, 2FA, and login history',
          content:
            'Configure two-factor authentication, change your password, and review recent login activity.',
          icon: '🔒',
        },
        {
          id: 'notifications',
          title: 'Notifications',
          subtitle: 'Email and push notification preferences',
          content:
            'Choose which notifications you want to receive and how you want to be notified.',
          icon: '🔔',
          badge: 3,
        },
      ]);
    }

    // Search Accordion
    const search = document.getElementById('searchAccordion') as any;
    if (search) {
      search.items = JSON.stringify([
        {
          id: 'react',
          title: 'React',
          subtitle: 'A JavaScript library for building user interfaces',
          content:
            'React makes it painless to create interactive UIs. Design simple views for each state in your application.',
          icon: '⚛️',
        },
        {
          id: 'vue',
          title: 'Vue.js',
          subtitle: 'The Progressive JavaScript Framework',
          content:
            'Vue is a progressive framework for building user interfaces. It is designed to be incrementally adoptable.',
          icon: '💚',
        },
        {
          id: 'angular',
          title: 'Angular',
          subtitle: 'Platform for building mobile and desktop web applications',
          content:
            'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
          icon: '🅰️',
        },
        {
          id: 'svelte',
          title: 'Svelte',
          subtitle: 'Cybernetically enhanced web apps',
          content:
            'Svelte is a radical new approach to building user interfaces. It shifts work into a compile step.',
          icon: '🔥',
        },
      ]);
    }

    // Actions Accordion
    const actions = document.getElementById('actionsAccordion') as any;
    if (actions) {
      actions.items = JSON.stringify([
        {
          id: 'doc1',
          title: 'Project Proposal.docx',
          subtitle: 'Last modified: 2 hours ago',
          content:
            'This is the main project proposal document containing all requirements and specifications.',
          icon: '📄',
          actions: [
            { id: 'edit', label: 'Edit', icon: '✏️' },
            { id: 'share', label: 'Share', icon: '🔗' },
            { id: 'delete', label: 'Delete', icon: '🗑️' },
          ],
        },
        {
          id: 'doc2',
          title: 'Budget Report.xlsx',
          subtitle: 'Last modified: 1 day ago',
          content: 'Financial budget report for Q1 2024 with detailed breakdowns.',
          icon: '📊',
          actions: [
            { id: 'download', label: 'Download', icon: '⬇️' },
            { id: 'print', label: 'Print', icon: '🖨️' },
          ],
        },
      ]);

      actions.addEventListener('accordionAction', (e: any) => {
        const { itemId, actionId, action } = e.detail;
        const logEntry = `${new Date().toLocaleTimeString()}: Action "${action.label}" (${actionId}) clicked on item "${itemId}"`;
        this.actionLog.unshift(logEntry);
        if (this.actionLog.length > 5) this.actionLog.pop();
      });
    }

    // Nested Accordion
    const nested = document.getElementById('nestedAccordion') as any;
    if (nested) {
      nested.items = JSON.stringify([
        {
          id: 'frontend',
          title: 'Frontend Development',
          subtitle: '3 subcategories',
          content: 'All frontend-related topics and resources.',
          icon: '🎨',
          children: [
            {
              id: 'html',
              title: 'HTML',
              content: 'HyperText Markup Language - the standard markup language for Web pages.',
              icon: '📝',
            },
            {
              id: 'css',
              title: 'CSS',
              content: 'Cascading Style Sheets - describes how HTML elements are to be displayed.',
              icon: '🎨',
            },
            {
              id: 'js',
              title: 'JavaScript',
              content: 'Programming language that enables interactive web pages.',
              icon: '⚡',
            },
          ],
        },
        {
          id: 'backend',
          title: 'Backend Development',
          subtitle: '2 subcategories',
          content: 'Server-side development topics.',
          icon: '⚙️',
          children: [
            {
              id: 'nodejs',
              title: 'Node.js',
              content: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
              icon: '💚',
            },
            {
              id: 'databases',
              title: 'Databases',
              content: 'SQL and NoSQL database systems.',
              icon: '🗄️',
            },
          ],
        },
      ]);
    }

    // Drag & Drop Accordion
    const dragDrop = document.getElementById('dragDropAccordion') as any;
    if (dragDrop) {
      dragDrop.items = JSON.stringify([
        { id: 'task1', title: '1. First Task', content: 'Complete project setup', icon: '📋' },
        { id: 'task2', title: '2. Second Task', content: 'Design UI mockups', icon: '🎨' },
        { id: 'task3', title: '3. Third Task', content: 'Implement features', icon: '⚙️' },
        { id: 'task4', title: '4. Fourth Task', content: 'Testing and QA', icon: '✅' },
      ]);

      dragDrop.addEventListener('accordionReorder', (e: any) => {
        const { itemId, oldIndex, newIndex } = e.detail;
        this.reorderLog = `Reordered: Item "${itemId}" moved from position ${oldIndex + 1} to ${newIndex + 1}`;
      });
    }
  }

  updateAccordion() {
    const accordion = document.getElementById('interactiveAccordion') as any;
    if (!accordion) return;

    accordion.setAttribute('multiple', this.config.multiple.toString());
    accordion.setAttribute('show-numbers', this.config.showNumbers.toString());
    accordion.setAttribute('enable-search', this.config.enableSearch.toString());
    accordion.setAttribute('enable-expand-collapse-all', this.config.expandCollapseAll.toString());
    accordion.setAttribute('enable-drag-drop', this.config.enableDragDrop.toString());
    accordion.setAttribute('rtl', this.config.rtl.toString());
    accordion.setAttribute('dense', this.config.dense.toString());
    accordion.setAttribute('disabled', this.config.disabled.toString());
    accordion.setAttribute('variant', this.config.variant);
    accordion.setAttribute('size', this.config.size);
    accordion.setAttribute('icon-position', this.config.iconPosition);
    accordion.setAttribute('enable-nested', 'true');
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode).then(() => {
      this.copyButtonText = 'Copied!';
      setTimeout(() => {
        this.copyButtonText = 'Copy';
      }, 2000);
    });
  }
}
