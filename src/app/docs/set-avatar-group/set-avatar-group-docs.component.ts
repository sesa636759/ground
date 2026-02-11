import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-avatar-group-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-avatar-group-docs.component.html',
  styleUrls: ['./set-avatar-group-docs.component.scss'],
})
export class SetAvatarGroupDocsComponent {
  setAvatarGroupConfig = {
    id: 'set-avatar-group',
    tagName: 'app-avatar-group',
    label: 'Avatar Group',
    props: [
      {
        name: 'avatars',
        type: 'json' as const,
        defaultValue: '[]',
        description: 'Array of avatar configurations',
      },
      {
        name: 'layout',
        type: 'string' as const,
        defaultValue: 'stacked',
        description: 'Layout type (stacked, grid, inline)',
      },
      {
        name: 'max',
        type: 'number' as const,
        defaultValue: '0',
        description: 'Maximum number of visible avatars (0 = all)',
      },
      {
        name: 'size',
        type: 'string' as const,
        defaultValue: 'medium',
        description: 'Size of all avatars in the group',
      },
      {
        name: 'columns',
        type: 'number' as const,
        defaultValue: '3',
        description: 'Number of columns for grid layout',
      },
      {
        name: 'show-tooltips',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Show name tooltips on hover',
      },
      {
        name: 'clickable',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Make avatars clickable',
      },
      {
        name: 'show-status',
        type: 'boolean' as const,
        defaultValue: 'false',
        description: 'Show status indicators',
      },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-avatar-group
  [avatars]="basicAvatars">
</app-avatar-group>`,
    stacked: `<app-avatar-group
  layout="stacked"
  [avatars]="stackedAvatars">
</app-avatar-group>`,
    grid: `<app-avatar-group
  layout="grid"
  [columns]="4"
  [avatars]="gridAvatars">
</app-avatar-group>`,
    max: `<app-avatar-group
  [max]="3"
  [avatars]="maxAvatars">
</app-avatar-group>`,
    sizes: `<app-avatar-group
  size="large"
  [avatars]="sizeAvatars">
</app-avatar-group>`,
    tooltips: `<app-avatar-group
  [show-tooltips]="true"
  [avatars]="tooltipAvatars">
</app-avatar-group>`,
    interactive: `<app-avatar-group
  [clickable]="true"
  [avatars]="interactiveAvatars">
</app-avatar-group>`,
    status: `<app-avatar-group
  [show-status]="true"
  [avatars]="statusAvatars">
</app-avatar-group>`,
  };

  basicAvatars = JSON.stringify([
    { src: '/assets/avatar1.jpg', name: 'John Doe' },
    { src: '/assets/avatar2.jpg', name: 'Jane Smith' },
    { src: '/assets/avatar3.jpg', name: 'Bob Wilson' },
  ]);

  stackedAvatars = JSON.stringify([
    { src: '/assets/avatar1.jpg' },
    { src: '/assets/avatar2.jpg' },
    { src: '/assets/avatar3.jpg' },
    { src: '/assets/avatar4.jpg' },
  ]);

  gridAvatars = JSON.stringify([
    { initials: 'JD' },
    { initials: 'JS' },
    { initials: 'BW' },
    { initials: 'AM' },
  ]);

  maxAvatars = JSON.stringify([
    { src: '/assets/avatar1.jpg' },
    { src: '/assets/avatar2.jpg' },
    { src: '/assets/avatar3.jpg' },
    { src: '/assets/avatar4.jpg' },
    { src: '/assets/avatar5.jpg' },
  ]);

  sizeAvatars = JSON.stringify([{ src: '/assets/avatar1.jpg' }, { src: '/assets/avatar2.jpg' }]);

  tooltipAvatars = JSON.stringify([
    { src: '/assets/avatar1.jpg', name: 'John Doe' },
    { src: '/assets/avatar2.jpg', name: 'Jane Smith' },
  ]);

  interactiveAvatars = JSON.stringify([
    { src: '/assets/avatar1.jpg', id: 1 },
    { src: '/assets/avatar2.jpg', id: 2 },
  ]);

  statusAvatars = JSON.stringify([
    { src: '/assets/avatar1.jpg', status: 'online' },
    { src: '/assets/avatar2.jpg', status: 'away' },
    { src: '/assets/avatar3.jpg', status: 'offline' },
  ]);

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
