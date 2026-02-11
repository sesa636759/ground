import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-panel-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './panel-docs.component.html',
  styleUrls: ['./panel-docs.component.scss'],
})
export class PanelDocsComponent {
  panelConfig = COMPONENT_CONFIGS['panel'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  // Track visibility for modal/overlay panels
  isModalOpen: boolean = false;
  isSidePanelOpen: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-panel panel-title="Welcome Panel" panel-subtitle="Basic usage">
  <div slot="content">
    <p>This is the main content area.</p>
  </div>
  <div slot="footer">
    <ui-button label="Save" size="sm"></ui-button>
    <ui-button label="Cancel" variant="secondary" size="sm"></ui-button>
  </div>
</ui-panel>`,
    themes: `<div style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
  <ui-panel panel-title="Primary" theme="primary">Content</ui-panel>
  <ui-panel panel-title="Success" theme="success">Content</ui-panel>
  <ui-panel panel-title="Warning" theme="warning">Content</ui-panel>
  <ui-panel panel-title="Danger" theme="danger">Content</ui-panel>
</div>`,
    badges: `<ui-panel panel-title="Notifications" badge="5" badge-variant="count" theme="danger">
  <div slot="content">You have 5 unread messages.</div>
</ui-panel>`,
    draggable: `<ui-panel panel-title="Drag Me" is-draggable="true" width="300px" theme="info">
  <div slot="content">Click header to move.</div>
</ui-panel>`,
    resizable: `<ui-panel panel-title="Resize Me" resizable="true" width="300px" height="200px">
  <div slot="content">Drag edges to resize.</div>
</ui-panel>`,
    minmax: `<ui-panel panel-title="Window" minimizable="true" maximizable="true" width="400px">
  <div slot="content">Minimize/Maximize supported.</div>
</ui-panel>`,
    glass: `<ui-panel panel-title="Glassmorphism" glass="true" theme="default" width="400px">
  <div slot="content" style="color: white; text-align: center;">
    Frosted glass effect overlay.
  </div>
</ui-panel>`,
    modal: `<ui-panel *ngIf="isModalOpen" panel-title="Modal Panel" modal="true" position="center" (panelClose)="isModalOpen = false">
  <div slot="content">Focused interaction with backdrop.</div>
  <div slot="footer">
    <button (click)="isModalOpen = false">Close</button>
  </div>
</ui-panel>`,
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

  openModal() {
    this.isModalOpen = true;
  }

  openSidePanel() {
    this.isSidePanelOpen = true;
  }
}
