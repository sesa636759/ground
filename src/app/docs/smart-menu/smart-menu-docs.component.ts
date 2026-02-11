import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-smart-menu-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './smart-menu-docs.component.html',
  styleUrls: ['./smart-menu-docs.component.scss'],
})
export class SmartMenuDocsComponent {
  smartMenuConfig = COMPONENT_CONFIGS['smart-menu'] || {
    id: 'smart-menu',
    tagName: 'ui-smart-menu',
    label: 'Smart Menu',
    description: 'An intelligent dropdown-like menu that adapts to screen size and content.',
    props: [
      { name: 'items', type: 'json', defaultValue: [] },
      { name: 'mode', type: 'select', options: ['fixed', 'float'], defaultValue: 'float' },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-smart-menu [items]="menuItems"></ui-smart-menu>`,
  };

  menuItems = JSON.stringify([
    { label: 'File', icon: '📄', children: [{ label: 'New' }, { label: 'Open' }] },
    { label: 'Edit', icon: '✏️' },
    { label: 'View', icon: '👁️' },
  ]);

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
