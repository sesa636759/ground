import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-context-menu-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-context-menu-docs.component.html',
  styleUrls: ['./set-context-menu-docs.component.scss'],
})
export class SetContextMenuDocsComponent {
  contextMenuConfig = COMPONENT_CONFIGS['set-context-menu'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-context-menu>
  <app-menu-item>Copy</app-menu-item>
  <app-menu-item>Paste</app-menu-item>
  <app-menu-item>Cut</app-menu-item>
</app-context-menu>`,
    with_icons: `<app-context-menu>
  <app-menu-item icon="📋">Copy</app-menu-item>
  <app-menu-item icon="📄">Paste</app-menu-item>
  <app-menu-item icon="✂️">Cut</app-menu-item>
</app-context-menu>`,
    nested: `<app-context-menu>
  <app-menu-item>Edit</app-menu-item>
  <app-menu-item [submenu]="true">
    <span>More Actions</span>
    <app-context-menu>
      <app-menu-item>Duplicate</app-menu-item>
      <app-menu-item>Delete</app-menu-item>
    </app-context-menu>
  </app-menu-item>
</app-context-menu>`,
    with_dividers: `<app-context-menu>
  <app-menu-item>New</app-menu-item>
  <app-menu-divider></app-menu-divider>
  <app-menu-item>Open</app-menu-item>
  <app-menu-item>Save</app-menu-item>
</app-context-menu>`,
    disabled: `<app-context-menu>
  <app-menu-item>Enabled</app-menu-item>
  <app-menu-item [disabled]="true">Disabled</app-menu-item>
</app-context-menu>`,
    shortcuts: `<app-context-menu>
  <app-menu-item shortcut="Ctrl+C">Copy</app-menu-item>
  <app-menu-item shortcut="Ctrl+V">Paste</app-menu-item>
  <app-menu-item shortcut="Ctrl+X">Cut</app-menu-item>
</app-context-menu>`,
    custom_trigger: `<app-context-menu trigger="click">
  <app-menu-item>Option 1</app-menu-item>
  <app-menu-item>Option 2</app-menu-item>
</app-context-menu>`,
    styled: `<app-context-menu theme="dark">
  <app-menu-item>Dark Theme Item</app-menu-item>
  <app-menu-item>Another Item</app-menu-item>
</app-context-menu>`,
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
