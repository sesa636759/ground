import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-chip-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chip-docs.component.html',
  styleUrls: ['./chip-docs.component.scss'],
})
export class ChipDocsComponent {
  chipConfig = COMPONENT_CONFIGS['chip'];

  onChipRemove(event: any) {
    console.log('Chip removed:', event.detail);
  }
}
