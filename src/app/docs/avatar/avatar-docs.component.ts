import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-avatar-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-docs.component.html',
  styleUrls: ['./avatar-docs.component.scss'],
})
export class AvatarDocsComponent {
  avatarConfig = COMPONENT_CONFIGS['avatar'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'variants';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    variants: `<ui-avatar content="JD" bg-color="#3b82f6"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=12" size="48px"></ui-avatar>
<ui-avatar icon="👤" bg-color="#6b7280" size="40px"></ui-avatar>`,
    shapes: `<ui-avatar src="https://i.pravatar.cc/150?img=1" shape="circle"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=2" shape="square"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=3" shape="hexagon"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=4" shape="squircle"></ui-avatar>`,
    status: `<ui-avatar src="https://i.pravatar.cc/150?img=5" status="online"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=6" status="busy"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=7" status="away"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=8" status="offline"></ui-avatar>`,
    groups: `<ui-avatar-group max="5" size="40px">
  <ui-avatar src="https://i.pravatar.cc/150?img=1"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?img=2"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?img=3"></ui-avatar>
  <ui-avatar content="AB"></ui-avatar>
  <ui-avatar content="CD"></ui-avatar>
  <ui-avatar content="EF"></ui-avatar>
</ui-avatar-group>`,
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
