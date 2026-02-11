import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-avatar-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-avatar-docs.component.html',
  styleUrls: ['./set-avatar-docs.component.scss'],
})
export class SetAvatarDocsComponent {
  setAvatarConfig = {
    id: 'set-avatar',
    tagName: 'app-avatar',
    label: 'Avatar',
    props: [
      {
        name: 'src',
        type: 'string' as const,
        defaultValue: '',
        description: 'Avatar image source URL',
      },
      {
        name: 'alt',
        type: 'string' as const,
        defaultValue: '',
        description: 'Alternative text for the image',
      },
      {
        name: 'size',
        type: 'string' as const,
        defaultValue: 'medium',
        description: 'Avatar size (small, medium, large, xlarge)',
      },
      {
        name: 'shape',
        type: 'string' as const,
        defaultValue: 'circle',
        description: 'Avatar shape (circle, square, rounded)',
      },
      {
        name: 'initials',
        type: 'string' as const,
        defaultValue: '',
        description: 'Initials to display when no image',
      },
      {
        name: 'background-color',
        type: 'string' as const,
        defaultValue: '#ccc',
        description: 'Background color for initials',
      },
      { name: 'badge', type: 'string' as const, defaultValue: '', description: 'Badge content' },
      {
        name: 'badge-color',
        type: 'string' as const,
        defaultValue: 'primary',
        description: 'Badge color variant',
      },
      {
        name: 'status',
        type: 'string' as const,
        defaultValue: '',
        description: 'Status indicator (online, offline, away, busy)',
      },
      {
        name: 'bordered',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Show border around avatar',
      },
      {
        name: 'border-color',
        type: 'string' as const,
        defaultValue: '#fff',
        description: 'Border color',
      },
      {
        name: 'fallback-icon',
        type: 'string' as const,
        defaultValue: '',
        description: 'Fallback icon name',
      },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-avatar
  src="/assets/avatar.jpg"
  alt="User Avatar">
</app-avatar>`,
    sizes: `<app-avatar
  size="large"
  src="/assets/avatar.jpg">
</app-avatar>`,
    shapes: `<app-avatar
  shape="square"
  src="/assets/avatar.jpg">
</app-avatar>`,
    initials: `<app-avatar
  initials="JD"
  [background-color]="'#3b82f6'">
</app-avatar>`,
    badges: `<app-avatar
  src="/assets/avatar.jpg"
  [badge]="'5'"
  badge-color="error">
</app-avatar>`,
    status: `<app-avatar
  src="/assets/avatar.jpg"
  status="online">
</app-avatar>`,
    fallback: `<app-avatar
  src="/invalid.jpg"
  fallback-icon="user">
</app-avatar>`,
    bordered: `<app-avatar
  src="/assets/avatar.jpg"
  [bordered]="true"
  border-color="#3b82f6">
</app-avatar>`,
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
