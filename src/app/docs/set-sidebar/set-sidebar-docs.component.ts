import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-sidebar-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-sidebar-docs.component.html',
  styleUrls: ['./set-sidebar-docs.component.scss'],
})
export class SetSidebarDocsComponent {
  sidebarConfig = COMPONENT_CONFIGS['set-sidebar'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-aside-panel>
  <nav sidebar-content>
    <a href="#">Menu Item 1</a>
    <a href="#">Menu Item 2</a>
  </nav>
</app-aside-panel>`,
    right_side: `<app-aside-panel position="right">
  <nav sidebar-content>
    <a href="#">Right sidebar</a>
  </nav>
</app-aside-panel>`,
    collapsible: `<app-aside-panel [collapsible]="true">
  <nav sidebar-content>
    <a href="#">Collapsible menu</a>
  </nav>
</app-aside-panel>`,
    with_header: `<app-aside-panel>
  <div sidebar-header>
    <h3>Navigation</h3>
  </div>
  <nav sidebar-content>
    <a href="#">Menu items</a>
  </nav>
</app-aside-panel>`,
    overlay: `<app-aside-panel [overlay]="true">
  <nav sidebar-content>
    <a href="#">Overlay sidebar</a>
  </nav>
</app-aside-panel>`,
    responsive: `<app-aside-panel mobile-breakpoint="768">
  <nav sidebar-content>
    <a href="#">Responsive menu</a>
  </nav>
</app-aside-panel>`,
    fixed: `<app-aside-panel [fixed]="true">
  <nav sidebar-content>
    <a href="#">Fixed sidebar</a>
  </nav>
</app-aside-panel>`,
    themed: `<app-aside-panel theme="dark">
  <nav sidebar-content>
    <a href="#">Dark theme</a>
  </nav>
</app-aside-panel>`,
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
