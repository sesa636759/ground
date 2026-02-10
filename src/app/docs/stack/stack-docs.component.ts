import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-stack-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stack-docs.component.html',
  styleUrls: ['./stack-docs.component.scss'],
})
export class StackDocsComponent {
  stackConfig = COMPONENT_CONFIGS['stack'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-stack spacing="1rem">
  <div class="box">Item 1</div>
  <div class="box">Item 2</div>
  <div class="box">Item 3</div>
</ui-stack>`,
    vertical: `<ui-stack direction="vertical" spacing="1rem" align="stretch">
  <div class="box">Header</div>
  <div class="box">Body Content</div>
  <div class="box">Footer</div>
</ui-stack>`,
    wrap: `<div style="width: 300px; border: 1px dashed #ccc;">
  <ui-stack wrap="wrap" spacing="8px" justify="center">
    <div class="chip">React</div>
    <div class="chip">Angular</div>
    <div class="chip">Vue</div>
    <div class="chip">Svelte</div>
    <div class="chip">Ember</div>
    <div class="chip">Solid</div>
  </ui-stack>
</div>`,
    dividers: `<ui-stack show-dividers="true" divider-type="solid" spacing="16px">
  <span>Dashboard</span>
  <span>Settings</span>
  <span>Profile</span>
</ui-stack>`,
    overlap: `<ui-stack overlap="true" spacing="-15px">
  <ui-avatar src="https://i.pravatar.cc/150?img=1"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?img=2"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?img=3"></ui-avatar>
</ui-stack>`,
    interactive: `<ui-stack max="3">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
</ui-stack>`,
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
