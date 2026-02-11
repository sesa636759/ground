import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-theme-switcher-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-theme-switcher-docs.component.html',
  styleUrls: ['./set-theme-switcher-docs.component.scss'],
})
export class SetThemeSwitcherDocsComponent {
  themeSwitcherConfig = COMPONENT_CONFIGS['set-theme-switcher'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<set-theme-switcher>
</set-theme-switcher>`,
    with_label: `<set-theme-switcher label="Theme">
</set-theme-switcher>`,
    dropdown: `<set-theme-switcher variant="dropdown">
</set-theme-switcher>`,
    icons: `<set-theme-switcher show-icons="true">
</set-theme-switcher>`,
    custom_themes: `<set-theme-switcher themes="light,dark,auto">
</set-theme-switcher>`,
    button_style: `<set-theme-switcher variant="button">
</set-theme-switcher>`,
    minimal: `<set-theme-switcher variant="minimal">
</set-theme-switcher>`,
    with_storage: `<set-theme-switcher persist="true">
</set-theme-switcher>`,
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
