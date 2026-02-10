import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-badge-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './badge-docs.component.html',
  styleUrls: ['./badge-docs.component.scss'],
})
export class BadgeDocsComponent {
  badgeConfig = COMPONENT_CONFIGS['badge'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'colors';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    colors: `<ui-badge color="primary" value="Primary"></ui-badge>
<ui-badge color="success" value="Success"></ui-badge>
<ui-badge color="danger" value="Danger"></ui-badge>
<ui-badge color="warning" value="Warning"></ui-badge>`,
    variants: `<ui-badge variant="standard" value="Standard" color="primary"></ui-badge>
<ui-badge variant="outlined" value="Outlined" color="primary"></ui-badge>
<ui-badge variant="soft" value="Soft" color="primary"></ui-badge>
<ui-badge variant="bordered" value="Bordered" color="primary"></ui-badge>`,
    icons: `<ui-badge value="5" icon="🔔" color="danger">
  <ui-button label="Notifications"></ui-button>
</ui-badge>
<ui-badge value="New" icon="⭐" color="warning" icon-position="end">
  <ui-button label="Features"></ui-button>
</ui-badge>`,
    gradients: `<ui-badge value="Pro" gradient="blue-purple">
  <ui-button label="Premium Account"></ui-button>
</ui-badge>
<ui-badge value="Hot" gradient="orange-red">
  <ui-button label="Trending Deals"></ui-button>
</ui-badge>`,
    interactive: `<ui-badge value="5" interactive="true" color="primary" (badgeClick)="onBadgeClick()">
  <ui-button label="Click My Badge"></ui-button>
</ui-badge>`,
    closeable: `<ui-badge value="5" closeable="true" color="danger" (badgeClose)="onBadgeClose()">
  <ui-button label="Dismissible Badge"></ui-button>
</ui-badge>`,
    animations: `<ui-badge value="99+" animation="pulse" color="danger"></ui-badge>
<ui-badge value="New" animation="bounce" color="success"></ui-badge>
<ui-badge value="!" animation="shake" color="warning"></ui-badge>`,
    glow: `<ui-badge value="Live" glow="true" color="danger">
  <ui-button label="Streaming Now"></ui-button>
</ui-badge>
<ui-badge value="VIP" glow="true" color="warning">
  <ui-button label="Special Access"></ui-button>
</ui-badge>`,
    shapes: `<ui-badge value="5" shape="circle" color="danger"></ui-badge>
<ui-badge value="9" shape="square" color="primary"></ui-badge>
<ui-badge value="12" shape="default" color="success"></ui-badge>`,
    positioning: `<ui-badge value="5" position="top-right" color="danger">
  <div class="avatar-demo">JD</div>
</ui-badge>
<ui-badge dot="true" position="bottom-right" color="success" animation="pulse">
  <div class="avatar-demo">Online</div>
</ui-badge>`,
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

  onBadgeClick() {
    console.log('Badge logic: User clicked the interactive badge.');
  }

  onBadgeClose() {
    console.log('Badge logic: User dismissed the badge.');
  }
}
