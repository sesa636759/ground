import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-avatar-group-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-group-docs.component.html',
  styleUrls: ['./avatar-group-docs.component.scss'],
})
export class AvatarGroupDocsComponent {
  avatarGroupConfig = COMPONENT_CONFIGS['avatar-group'];

  members = [
    { src: 'https://i.pravatar.cc/150?img=1', name: 'User 1' },
    { src: 'https://i.pravatar.cc/150?img=2', name: 'User 2' },
    { src: 'https://i.pravatar.cc/150?img=3', name: 'User 3' },
    { src: 'https://i.pravatar.cc/150?img=4', name: 'User 4' },
    { src: 'https://i.pravatar.cc/150?img=5', name: 'User 5' },
    { src: 'https://i.pravatar.cc/150?img=6', name: 'User 6' },
  ];
}
