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
    variants: `<ui-avatar icon="👤" bg-color="#94a3b8" size="56px" tooltip="Icon Avatar"></ui-avatar>
<ui-avatar content="AB" bg-color="#6366f1" size="56px" tooltip="Text Avatar"></ui-avatar>
<ui-avatar content="John Smith" bg-color="#ec4899" size="56px" tooltip="Long Name"></ui-avatar>
<ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" size="56px" tooltip="Image"></ui-avatar>`,
    shapes: `<ui-avatar src="https://i.pravatar.cc/150?img=1" shape="circle"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=2" shape="square"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=3" shape="hexagon"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=4" shape="squircle"></ui-avatar>`,
    sizes: `<ui-avatar content="XS" bg-color="#6366f1" size="24px"></ui-avatar>
<ui-avatar content="S" bg-color="#8b5cf6" size="32px"></ui-avatar>
<ui-avatar content="M" bg-color="#ec4899" size="40px"></ui-avatar>
<ui-avatar content="L" bg-color="#f59e0b" size="48px"></ui-avatar>
<ui-avatar content="XL" bg-color="#10b981" size="64px"></ui-avatar>
<ui-avatar content="C" bg-color="#06b6d4" size="80px"></ui-avatar>`,
    status: `<ui-avatar src="https://i.pravatar.cc/150?img=5" status="online"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=8" status="offline"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=7" status="away"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=6" status="busy"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=9" status="dnd"></ui-avatar>`,
    groups: `<ui-avatar-group max="4" size="48px">
  <ui-avatar src="https://i.pravatar.cc/150?img=11"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?img=12"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?img=13"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?img=14"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?img=15"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?img=16"></ui-avatar>
</ui-avatar-group>`,
    badges: `<ui-avatar src="https://i.pravatar.cc/150?img=1" badge="3" badge-position="top-right"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=2" badge="99+" badge-position="bottom-right"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=3" badge="NEW" badge-position="top-left" badge-color="#ef4444"></ui-avatar>
<ui-avatar content="JD" bg-color="#6366f1" verified="true"></ui-avatar>`,
    borders: `<ui-avatar src="https://i.pravatar.cc/150?img=5" border="2px solid #3b82f6"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=6" ring-color="#ef4444" ring-width="3"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=7" ring-color="#10b981" ring-width="4"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=8" ring-color="#f59e0b" ring-width="3"></ui-avatar>`,
    icons: `<ui-avatar icon="👤" bg-color="#6366f1"></ui-avatar>
<ui-avatar icon="👥" bg-color="#8b5cf6"></ui-avatar>
<ui-avatar icon="⚙️" bg-color="#64748b"></ui-avatar>
<ui-avatar icon="🔔" bg-color="#f59e0b"></ui-avatar>
<ui-avatar icon="⭐" bg-color="#eab308"></ui-avatar>
<ui-avatar icon="💼" bg-color="#06b6d4"></ui-avatar>`,
    colors: `<ui-avatar content="Alice Anderson" auto-color="true"></ui-avatar>
<ui-avatar content="Bob Baker" auto-color="true"></ui-avatar>
<ui-avatar content="Charlie Clark" auto-color="true"></ui-avatar>
<ui-avatar content="Diana Davis" auto-color="true"></ui-avatar>
<ui-avatar content="JD" bg-color="#6366f1" color="#ffffff"></ui-avatar>`,
    gradients: `<ui-avatar content="A" gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"></ui-avatar>
<ui-avatar content="B" gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"></ui-avatar>
<ui-avatar content="C" gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"></ui-avatar>
<ui-avatar content="D" gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"></ui-avatar>`,
    animations: `<ui-avatar src="https://i.pravatar.cc/150?img=31" animation="pulse"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=32" animation="ring"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=33" animation="glow"></ui-avatar>
<ui-avatar content="AB" bg-color="#6366f1" animation="bounce"></ui-avatar>`,
    premium: `<ui-avatar src="https://i.pravatar.cc/150?img=41" story-ring="true" ring-color="#ec4899"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=42" story-ring="true" story-seen="true"></ui-avatar>
<ui-avatar src="https://i.pravatar.cc/150?img=43" active-speaker="true"></ui-avatar>
<ui-avatar content="John Doe" bg-color="#6366f1" smart-initials="true"></ui-avatar>
<ui-avatar loading="true" skeleton="shimmer"></ui-avatar>`,
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
