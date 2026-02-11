import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-tabs-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tabs-docs.component.html',
  styleUrls: ['./set-tabs-docs.component.scss'],
})
export class SetTabsDocsComponent {
  tabsConfig = COMPONENT_CONFIGS['set-tabs'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  // Tab data for ui-tabs component
  basicTabs = JSON.stringify([
    {
      id: '1',
      title: 'Home',
      icon: '🏠',
      content:
        '<div style="padding: 20px"><h4>Home View</h4><p>Welcome to the main dashboard. This is the basic tab configuration.</p></div>',
    },
    {
      id: '2',
      title: 'Profile',
      icon: '👤',
      content:
        '<div style="padding: 20px"><h4>User Profile</h4><p>Manage your account settings and personal information here.</p></div>',
    },
    {
      id: '3',
      title: 'Settings',
      icon: '⚙️',
      content:
        '<div style="padding: 20px"><h4>System Settings</h4><p>Configure preferences and application-wide parameters.</p></div>',
    },
  ]);

  verticalTabs = JSON.stringify([
    {
      id: '1',
      title: 'General',
      content:
        '<div style="padding: 20px"><h4>General</h4><p>General application settings.</p></div>',
    },
    {
      id: '2',
      title: 'Security',
      content:
        '<div style="padding: 20px"><h4>Security</h4><p>Privacy and authentication controls.</p></div>',
    },
    {
      id: '3',
      title: 'Notifications',
      content:
        '<div style="padding: 20px"><h4>Notifications</h4><p>Alert and mailing preferences.</p></div>',
    },
  ]);

  pillsTabs = JSON.stringify([
    {
      id: '1',
      title: 'All Projects',
      content: '<div style="padding: 20px">Showing all active projects.</div>',
    },
    {
      id: '2',
      title: 'Ongoing',
      content: '<div style="padding: 20px">Current tasks in progress.</div>',
    },
    {
      id: '3',
      title: 'Completed',
      content: '<div style="padding: 20px">Archive of finished work.</div>',
    },
  ]);

  borderedTabs = JSON.stringify([
    {
      id: '1',
      title: 'Basic Info',
      content: '<div style="padding: 20px">Primary metadata details.</div>',
    },
    {
      id: '2',
      title: 'Extended Info',
      content: '<div style="padding: 20px">Additional auxiliary data.</div>',
    },
  ]);

  coloredTabs = JSON.stringify([
    {
      id: '1',
      title: 'Status A',
      content: '<div style="padding: 20px">Content for status A.</div>',
    },
    {
      id: '2',
      title: 'Status B',
      content: '<div style="padding: 20px">Content for status B.</div>',
    },
  ]);

  iconsTabs = JSON.stringify([
    {
      id: '1',
      title: 'Gallery',
      icon: '🖼️',
      content: '<div style="padding: 20px">Asset collection.</div>',
    },
    {
      id: '2',
      title: 'Movies',
      icon: '🎥',
      content: '<div style="padding: 20px">Media vault.</div>',
    },
    {
      id: '3',
      title: 'Notes',
      icon: '📄',
      content: '<div style="padding: 20px">Document stack.</div>',
    },
  ]);

  closableTabs = JSON.stringify([
    {
      id: '1',
      title: 'Dynamic 1',
      closable: true,
      content: '<div style="padding: 20px">You can close this tab.</div>',
    },
    {
      id: '2',
      title: 'Dynamic 2',
      closable: true,
      content: '<div style="padding: 20px">Try the close button.</div>',
    },
  ]);

  scrollableTabs = JSON.stringify([
    { id: '1', title: 'Tab 1', content: '<p style="padding: 20px">Panel 1</p>' },
    { id: '2', title: 'Tab 2', content: '<p style="padding: 20px">Panel 2</p>' },
    { id: '3', title: 'Tab 3', content: '<p style="padding: 20px">Panel 3</p>' },
    { id: '4', title: 'Tab 4', content: '<p style="padding: 20px">Panel 4</p>' },
    { id: '5', title: 'Tab 5', content: '<p style="padding: 20px">Panel 5</p>' },
    { id: '6', title: 'Tab 6', content: '<p style="padding: 20px">Panel 6</p>' },
    { id: '7', title: 'Tab 7', content: '<p style="padding: 20px">Panel 7</p>' },
    { id: '8', title: 'Tab 8', content: '<p style="padding: 20px">Panel 8</p>' },
  ]);

  exampleCodes: Record<string, string> = {
    basic: `<app-tab-stack>
  <app-tab-panel label="Home" icon="🏠">
    <p>Home content goes here</p>
  </app-tab-panel>
  <app-tab-panel label="Profile" icon="👤">
    <p>Profile content goes here</p>
  </app-tab-panel>
  <app-tab-panel label="Settings" icon="⚙️">
    <p>Settings content goes here</p>
  </app-tab-panel>
</app-tab-stack>`,
    vertical: `<app-tab-stack orientation="vertical">
  <app-tab-panel label="Dashboard">
    <p>Dashboard overview</p>
  </app-tab-panel>
  <app-tab-panel label="Analytics">
    <p>Analytics data</p>
  </app-tab-panel>
  <app-tab-panel label="Reports">
    <p>Reports section</p>
  </app-tab-panel>
</app-tab-stack>`,
    pills: `<app-tab-stack variant="pills">
  <app-tab-panel label="Featured">
    <p>Featured items</p>
  </app-tab-panel>
  <app-tab-panel label="Popular">
    <p>Popular items</p>
  </app-tab-panel>
  <app-tab-panel label="New">
    <p>New items</p>
  </app-tab-panel>
</app-tab-stack>`,
    bordered: `<app-tab-stack variant="bordered">
  <app-tab-panel label="Overview">
    <p>Overview content</p>
  </app-tab-panel>
  <app-tab-panel label="Details">
    <p>Detailed information</p>
  </app-tab-panel>
  <app-tab-panel label="Specs">
    <p>Specifications</p>
  </app-tab-panel>
</app-tab-stack>`,
    colored: `<app-tab-stack color="primary">
  <app-tab-panel label="Primary">
    <p>Primary tab content</p>
  </app-tab-panel>
  <app-tab-panel label="Secondary">
    <p>Secondary tab content</p>
  </app-tab-panel>
</app-tab-stack>`,
    icons: `<app-tab-stack>
  <app-tab-panel label="Images" icon="🖼️">
    <p>Image gallery</p>
  </app-tab-panel>
  <app-tab-panel label="Videos" icon="🎥">
    <p>Video collection</p>
  </app-tab-panel>
  <app-tab-panel label="Documents" icon="📄">
    <p>Document list</p>
  </app-tab-panel>
</app-tab-stack>`,
    closable: `<app-tab-stack [closable]="true">
  <app-tab-panel label="Tab 1">
    <p>Closable tab content 1</p>
  </app-tab-panel>
  <app-tab-panel label="Tab 2">
    <p>Closable tab content 2</p>
  </app-tab-panel>
  <app-tab-panel label="Tab 3">
    <p>Closable tab content 3</p>
  </app-tab-panel>
</app-tab-stack>`,
    scrollable: `<app-tab-stack [scrollable]="true">
  <app-tab-panel label="Tab 1"><p>Content 1</p></app-tab-panel>
  <app-tab-panel label="Tab 2"><p>Content 2</p></app-tab-panel>
  <app-tab-panel label="Tab 3"><p>Content 3</p></app-tab-panel>
  <app-tab-panel label="Tab 4"><p>Content 4</p></app-tab-panel>
  <app-tab-panel label="Tab 5"><p>Content 5</p></app-tab-panel>
</app-tab-stack>`,
  };

  getActiveExampleLabel() {
    return this.activeExample.replace(/_/g, ' ');
  }

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }
}
