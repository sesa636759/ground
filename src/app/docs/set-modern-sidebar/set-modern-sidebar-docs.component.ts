import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-modern-sidebar-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-modern-sidebar-docs.component.html',
  styleUrls: ['./set-modern-sidebar-docs.component.scss'],
})
export class SetModernSidebarDocsComponent {
  sidebarConfig = COMPONENT_CONFIGS['set-modern-sidebar'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<set-modern-sidebar>
  <nav sidebar-nav>
    <a href="#">Dashboard</a>
    <a href="#">Projects</a>
    <a href="#">Settings</a>
  </nav>
</set-modern-sidebar>`,
    collapsed: `<set-modern-sidebar collapsed="true">
  <nav sidebar-nav>
    <a href="#">Home</a>
    <a href="#">Profile</a>
  </nav>
</set-modern-sidebar>`,
    with_icons: `<set-modern-sidebar>
  <nav sidebar-nav>
    <a href="#"><i class="icon">🏠</i> Home</a>
    <a href="#"><i class="icon">📊</i> Analytics</a>
    <a href="#"><i class="icon">⚙️</i> Settings</a>
  </nav>
</set-modern-sidebar>`,
    themed: `<set-modern-sidebar theme="dark">
  <nav sidebar-nav>
    <a href="#">Dashboard</a>
    <a href="#">Projects</a>
  </nav>
</set-modern-sidebar>`,
    expandable: `<set-modern-sidebar expandable="true">
  <nav sidebar-nav>
    <a href="#">Menu Item 1</a>
    <a href="#">Menu Item 2</a>
  </nav>
</set-modern-sidebar>`,
    with_footer: `<set-modern-sidebar>
  <nav sidebar-nav>
    <a href="#">Main Menu</a>
  </nav>
  <div sidebar-footer>
    <p>Footer Content</p>
  </div>
</set-modern-sidebar>`,
    mobile: `<set-modern-sidebar mobile-breakpoint="768">
  <nav sidebar-nav>
    <a href="#">Responsive Menu</a>
  </nav>
</set-modern-sidebar>`,
    nested: `<set-modern-sidebar>
  <nav sidebar-nav>
    <a href="#">Parent Item</a>
    <div nested-menu>
      <a href="#">Child Item 1</a>
      <a href="#">Child Item 2</a>
    </div>
  </nav>
</set-modern-sidebar>`,
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
