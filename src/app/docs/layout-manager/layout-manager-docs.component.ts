import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-layout-manager-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './layout-manager-docs.component.html',
  styleUrls: ['./layout-manager-docs.component.scss'],
})
export class LayoutManagerDocsComponent {
  layoutManagerConfig = COMPONENT_CONFIGS['layout-manager'] || {
    id: 'layout-manager',
    tagName: 'app-layout-manager',
    label: 'Layout Manager',
    description: 'A component to manage complex page layouts with customizable regions.',
    props: [
      { name: 'layoutMode', type: 'select', options: ['fixed', 'fluid'], defaultValue: 'fluid' },
      { name: 'showSidebar', type: 'boolean', defaultValue: true },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'dashboard';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    dashboard: `<app-layout-manager>
  <div slot="header">Header Content</div>
  <div slot="sidebar">Sidebar Navigation</div>
  <div slot="main">
    <h2>Dashboard Overview</h2>
    <p>Main content area.</p>
  </div>
  <div slot="footer">Footer Info</div>
</app-layout-manager>`,
  };

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
