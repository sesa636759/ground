import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-accordion-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accordion-docs.component.html',
  styleUrls: ['./accordion-docs.component.scss'],
})
export class AccordionDocsComponent {
  accordionConfig = COMPONENT_CONFIGS['accordion'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;
  isAsyncLoading: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-accordion [attr.items]="basicItems" variant="default" default-open='["item1"]'></ui-accordion>`,
    numbered: `<ui-accordion [attr.items]="numberedItems" show-numbers="true" variant="bordered"></ui-accordion>`,
    multiple: `<ui-accordion [attr.items]="multiItems" multiple="true" variant="bordered" default-open='["multi1", "multi2"]'></ui-accordion>`,
    search: `<ui-accordion [attr.items]="searchableItems" enable-search="true" search-placeholder="Filter..." variant="bordered"></ui-accordion>`,
    actions: `<ui-accordion [attr.items]="actionItems" variant="light"></ui-accordion>`,
    nested: `<ui-accordion [attr.items]="nestedItems" enable-nested="true" variant="shadow"></ui-accordion>`,
    dragdrop: `<ui-accordion [attr.items]="dragDropItems" enable-drag-drop="true" variant="bordered"></ui-accordion>`,
    persistence: `<ui-accordion [attr.items]="persistenceItems" enable-persistence="true" persistence-key="demo-key" multiple="true"></ui-accordion>`,
    loading: `<ui-accordion [attr.items]="loadingItems" variant="light"></ui-accordion>`,
    rtl: `<ui-accordion [attr.items]="rtlItems" rtl="true" variant="bordered"></ui-accordion>`,
    dense: `<ui-accordion [attr.items]="denseItems" dense="true" multiple="true" variant="bordered"></ui-accordion>`,
    events: `<ui-accordion [attr.items]="eventItems" variant="bordered" (beforeOpen)="onEvent($event)" (afterOpen)="onEvent($event)"></ui-accordion>`,
    controlled: `<ui-accordion [attr.items]="controlledItems" [expandedItems]="['c1', 'c2']" multiple="true" variant="shadow"></ui-accordion>`,
    async: `<ui-accordion [attr.items]="asyncItems" [loading]="isAsyncLoading" lazy="true" variant="bordered"></ui-accordion>`,
  };

  basicItems = JSON.stringify([
    {
      id: 'item1',
      title: 'What is Stencil?',
      content: 'Stencil is a toolchain for building reusable, scalable Design Systems.',
      icon: 'ℹ️',
    },
    {
      id: 'item2',
      title: 'Why use Web Components?',
      content: 'Framework agnostic and standard-based.',
      icon: '⚡',
    },
    {
      id: 'item3',
      title: 'Getting Started',
      content: 'Run <code>npm init stencil</code>.',
      icon: '🚀',
    },
  ]);

  numberedItems = JSON.stringify([
    { id: 'step1', title: 'Install', content: 'Run <code>npm install</code>.', icon: '📥' },
    { id: 'step2', title: 'Configure', content: 'Set up config files.', icon: '⚙️' },
    { id: 'step3', title: 'Build', content: 'Execute <code>npm run build</code>.', icon: '🔨' },
  ]);

  multiItems = JSON.stringify([
    { id: 'multi1', title: 'Design Tokens', content: 'Centralized design values.', icon: '🎨' },
    { id: 'multi2', title: 'Component Library', content: 'Reusable UI components.', icon: '📦' },
    { id: 'multi3', title: 'Documentation', content: 'Comprehensive guides.', icon: '📚' },
  ]);

  searchableItems = JSON.stringify([
    {
      id: 'react',
      title: 'React',
      subtitle: 'UI Library',
      content: 'Painless interactive UIs.',
      icon: '⚛️',
    },
    {
      id: 'vue',
      title: 'Vue.js',
      subtitle: 'Framework',
      content: 'Progressive interfaces.',
      icon: '💚',
    },
    {
      id: 'angular',
      title: 'Angular',
      subtitle: 'Framework',
      content: 'Platform for SPAs.',
      icon: '🅰️',
    },
  ]);

  actionItems = JSON.stringify([
    {
      id: 'doc1',
      title: 'Proposal.docx',
      subtitle: '2h ago',
      content: 'Project specs.',
      icon: '📄',
      actions: [
        { id: 'edit', label: 'Edit', icon: '✏️' },
        { id: 'share', label: 'Share', icon: '🔗' },
      ],
    },
    {
      id: 'doc2',
      title: 'Budget.xlsx',
      subtitle: '1d ago',
      content: 'Q1 breakdown.',
      icon: '📊',
      actions: [{ id: 'download', label: 'Download', icon: '⬇️' }],
    },
  ]);

  nestedItems = JSON.stringify([
    {
      id: 'frontend',
      title: 'Frontend',
      children: [
        { id: 'html', title: 'HTML' },
        { id: 'css', title: 'CSS' },
      ],
      icon: '🎨',
    },
    {
      id: 'backend',
      title: 'Backend',
      children: [
        { id: 'node', title: 'Node.js' },
        { id: 'db', title: 'SQL' },
      ],
      icon: '⚙️',
    },
  ]);

  dragDropItems = JSON.stringify([
    { id: 't1', title: '1. Setup', content: 'Initial setup', icon: '📋' },
    { id: 't2', title: '2. Mockups', content: 'Design phase', icon: '🎨' },
    { id: 't3', title: '3. Coding', content: 'Implementation', icon: '⚙️' },
  ]);

  persistenceItems = JSON.stringify([
    { id: 'p1', title: 'Persistent 1', content: 'State is saved to localStorage!', icon: '💾' },
    { id: 'p2', title: 'Persistent 2', content: 'Try refreshing the browser.', icon: '🔄' },
  ]);

  loadingItems = JSON.stringify([
    { id: 'l1', title: 'Loaded', content: 'Fully loaded.', icon: '✅' },
    { id: 'l2', title: 'Loading', content: 'Fetching...', icon: '⏳', loading: true },
  ]);

  rtlItems = JSON.stringify([
    { id: 'r1', title: 'مرحبا بك', content: 'Arabic text support.', icon: '🌍' },
    { id: 'r2', title: 'שלום', content: 'Hebrew text support.', icon: '📖' },
  ]);

  denseItems = JSON.stringify([
    { id: 'd1', title: 'Compact 1', content: 'Optimized for dashboards.', icon: '📦' },
    { id: 'd2', title: 'Compact 2', content: 'High density layout.', icon: '📊' },
  ]);

  eventItems = JSON.stringify([
    { id: 'e1', title: 'Click Me', content: 'Trigger beforeOpen/afterOpen events.', icon: '📡' },
    { id: 'e2', title: 'Watch Log', content: 'Events are captured in console.', icon: '👀' },
  ]);

  controlledItems = JSON.stringify([
    { id: 'c1', title: 'Item 1', content: 'Controlled by external state.', icon: '🎮' },
    { id: 'c2', title: 'Item 2', content: 'Also controlled.', icon: '🕹️' },
  ]);

  asyncItems = JSON.stringify([
    { id: 'a1', title: 'Async 1', content: 'Fetched data from cloud.', icon: '☁️' },
    { id: 'a2', title: 'Lazy 2', content: 'Rendered only when opened.', icon: '⚡' },
  ]);

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;

    if (example === 'async') {
      this.reloadAsyncData();
    }
  }

  reloadAsyncData() {
    this.isAsyncLoading = true;
    setTimeout(() => {
      this.isAsyncLoading = false;
    }, 1500);
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }

  onEvent(event: any) {
    console.log('Accordion LifeCycle Event:', event);
  }

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
