import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-layout-manager-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-layout-manager-docs.component.html',
  styleUrls: ['./set-layout-manager-docs.component.scss'],
})
export class SetLayoutManagerDocsComponent {
  layoutConfig = COMPONENT_CONFIGS['set-layout-manager'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-layout-manager>
  <div layout-header>Header</div>
  <div layout-content>Main Content</div>
  <div layout-footer>Footer</div>
</app-layout-manager>`,
    with_sidebar: `<app-layout-manager>
  <div layout-sidebar>Sidebar</div>
  <div layout-content>Content Area</div>
</app-layout-manager>`,
    grid: `<app-layout-manager type="grid" [columns]="3">
  <div layout-item>Item 1</div>
  <div layout-item>Item 2</div>
  <div layout-item>Item 3</div>
</app-layout-manager>`,
    dashboard: `<app-layout-manager type="dashboard">
  <div layout-widget>Widget 1</div>
  <div layout-widget>Widget 2</div>
  <div layout-widget>Widget 3</div>
</app-layout-manager>`,
    responsive: `<app-layout-manager [responsive]="true">
  <div layout-content>Responsive layout</div>
</app-layout-manager>`,
    nested: `<app-layout-manager>
  <app-layout-manager type="grid">
    <div layout-item>Nested Grid</div>
  </app-layout-manager>
</app-layout-manager>`,
    holy_grail: `<app-layout-manager type="holy-grail">
  <div layout-header>Header</div>
  <div layout-left>Left Nav</div>
  <div layout-content>Main</div>
  <div layout-right>Sidebar</div>
  <div layout-footer>Footer</div>
</app-layout-manager>`,
    masonry: `<app-layout-manager type="masonry">
  <div layout-item>Card 1</div>
  <div layout-item>Card 2</div>
  <div layout-item>Card 3</div>
</app-layout-manager>`,
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
