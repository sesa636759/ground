import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-switch-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './switch-docs.component.html',
  styleUrls: ['./switch-docs.component.scss'],
})
export class SwitchDocsComponent {
  switchConfig = COMPONENT_CONFIGS['switch'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'variants';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    variants: `<ui-switch label="Primary" variant="primary" checked></ui-switch>
<ui-switch label="Success" variant="success" checked></ui-switch>
<ui-switch label="Danger" variant="danger" checked></ui-switch>`,
    shapes: `<ui-switch label="Default" shape="default" checked></ui-switch>
<ui-switch label="Rounded" shape="rounded" checked></ui-switch>
<ui-switch label="Pill" shape="pill" checked></ui-switch>
<ui-switch label="Square" shape="square" checked></ui-switch>`,
    icons: `<ui-switch label="Dark Mode" icon-on="🌙" icon-off="☀️" checked></ui-switch>
<ui-switch label="Notifications" show-default-icons checked></ui-switch>
<ui-switch label="WiFi" icon-on="📶" icon-off="📵"></ui-switch>`,
    states: `<ui-switch label="Saving..." loading checked></ui-switch>
<ui-switch label="Disabled" disabled checked></ui-switch>
<ui-switch label="Required" required></ui-switch>`,
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

  onSwitchChange(event: any) {
    console.log('Switch state changed:', event.detail.checked);
  }
}
