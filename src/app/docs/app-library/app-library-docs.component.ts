import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-library-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-library-docs.component.html',
  styleUrls: ['./app-library-docs.component.scss'],
})
export class AppLibraryDocsComponent {
  config = COMPONENT_CONFIGS['app-library'];
}
