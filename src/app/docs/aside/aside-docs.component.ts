import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-aside-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aside-docs.component.html',
  styleUrls: ['./aside-docs.component.scss'],
})
export class AsideDocsComponent {
  asideConfig = COMPONENT_CONFIGS['aside'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'directions';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    directions: `<aside-panel [attr.direction]="'right'" id="rightAsideDoc">
  <div slot="header">Right Panel</div>
  <div slot="content">Content goes here...</div>
</aside-panel>

<aside-panel [attr.direction]="'left'" id="leftAsideDoc">
  <div slot="header">Left Panel</div>
  <div slot="content">Content goes here...</div>
</aside-panel>`,
    premium: `<aside-panel variant="glass" [attr.backdrop-blur]="'8px'" id="glassAsideDoc">
  <div slot="header">✨ Premium Glass</div>
  <div slot="content">Glassmorphism effect content...</div>
</aside-panel>`,
    resizable: `<aside-panel [attr.resizable]="true" min-size="250" max-size="600" id="resizableAsideDoc">
  <div slot="header">Resizable Panel</div>
  <div slot="content">Drag the edge to resize!</div>
</aside-panel>`,
    states: `<aside-panel [attr.loading]="true" id="loadingAsideDoc">
  <div slot="header">Fetching Data...</div>
  <div slot="content">Async content loading...</div>
</aside-panel>`,
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

  openAside(id: string) {
    const el = document.getElementById(id) as any;
    if (el) el.show();
  }

  stopLoading(id: string) {
    const el = document.getElementById(id) as any;
    if (el) el.loading = false;
  }
}
