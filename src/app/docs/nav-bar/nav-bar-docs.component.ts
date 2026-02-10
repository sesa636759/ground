import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-nav-bar-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nav-bar-docs.component.html',
  styleUrls: ['./nav-bar-docs.component.scss'],
})
export class NavBarDocsComponent {
  navBarConfig = COMPONENT_CONFIGS['nav-bar'] || {
    id: 'nav-bar',
    tagName: 'ui-nav-bar',
    label: 'Nav Bar',
    description: 'A responsive navigation bar with support for branding, links, and actions.',
    props: [
      { name: 'logo', type: 'string', defaultValue: '', description: 'URL for logo image' },
      { name: 'brand', type: 'string', defaultValue: 'Brand', description: 'Brand name text' },
      { name: 'fixed', type: 'boolean', defaultValue: false },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-nav-bar brand="My App">
  <div slot="main">
    <a href="#">Home</a>
    <a href="#">Features</a>
  </div>
  <div slot="end">
    <button>Login</button>
  </div>
</ui-nav-bar>`,
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
