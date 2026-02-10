import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-tag-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tag-docs.component.html',
  styleUrls: ['./tag-docs.component.scss'],
})
export class TagDocsComponent {
  tagConfig = COMPONENT_CONFIGS['tag'];
  tagGroupConfig = COMPONENT_CONFIGS['tag-group'];

  members = [
    { label: 'Alice', color: 'primary', image: 'https://i.pravatar.cc/150?img=1' },
    { label: 'Bob', color: 'success', image: 'https://i.pravatar.cc/150?img=2' },
    { label: 'Charlie', color: 'warning', image: 'https://i.pravatar.cc/150?img=3' },
    { label: 'Diana', color: 'danger', image: 'https://i.pravatar.cc/150?img=4' },
  ];
}
