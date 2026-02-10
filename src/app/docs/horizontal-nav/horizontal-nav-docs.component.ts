import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-horizontal-nav-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './horizontal-nav-docs.component.html',
  styleUrls: ['./horizontal-nav-docs.component.scss'],
})
export class HorizontalNavDocsComponent {
  horizontalNavConfig = COMPONENT_CONFIGS['horizontal-nav'] || {
    id: 'horizontal-nav',
    tagName: 'ui-horizontal-nav',
    label: 'Horizontal Nav',
    description: 'A horizontal navigation bar for top-level menu items.',
    props: [
      { name: 'navItems', type: 'json', defaultValue: [] },
      {
        name: 'variant',
        type: 'select',
        options: ['default', 'dark', 'light'],
        defaultValue: 'default',
      },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-horizontal-nav [navItems]="items"></ui-horizontal-nav>`,
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
