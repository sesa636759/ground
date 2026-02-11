import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-tag-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tag-docs.component.html',
  styleUrls: ['./tag-docs.component.scss'],
})
export class TagDocsComponent {
  tagConfig = COMPONENT_CONFIGS['tag'];
  tagGroupConfig = COMPONENT_CONFIGS['tag-group'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'colors';
  isCodeVisible: boolean = false;

  members = [
    { label: 'Alice', color: 'primary', image: 'https://i.pravatar.cc/150?img=1' },
    { label: 'Bob', color: 'success', image: 'https://i.pravatar.cc/150?img=2' },
    { label: 'Charlie', color: 'warning', image: 'https://i.pravatar.cc/150?img=3' },
    { label: 'Diana', color: 'danger', image: 'https://i.pravatar.cc/150?img=4' },
  ];

  exampleCodes: Record<string, string> = {
    colors: `<ui-tag label="Primary" color="primary"></ui-tag>
<ui-tag label="Success" color="success"></ui-tag>
<ui-tag label="Danger" color="danger"></ui-tag>`,
    variants: `<ui-tag label="Filled" variant="filled" color="primary"></ui-tag>
<ui-tag label="Outlined" variant="outlined" color="primary"></ui-tag>
<ui-tag label="Dot" variant="dot" color="primary"></ui-tag>`,
    groups: `<ui-tag-group overlap="true" spacing="-12px">
  <ui-tag label="User 1" rounded="true" image="..."></ui-tag>
  <ui-tag label="User 2" rounded="true" image="..."></ui-tag>
</ui-tag-group>

<ui-tag-group selection-mode="multiple">
  <ui-tag label="Option A"></ui-tag>
  <ui-tag label="Option B"></ui-tag>
</ui-tag-group>`,
    interactive_states: `<ui-tag label="Processing" loading="true" variant="filled"></ui-tag>
<ui-tag label="Live Status" pulse="true" color="danger" variant="dot"></ui-tag>
<ui-tag label="Interactive" clickable="true" color="primary"></ui-tag>`,
    managed_groups: `<ui-tag-group 
  searchable="true" 
  creatable="true" 
  removable="true"
  [attr.items]="members">
</ui-tag-group>`,
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
