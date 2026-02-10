import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-skeleton-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skeleton-docs.component.html',
  styleUrls: ['./skeleton-docs.component.scss'],
})
export class SkeletonDocsComponent {
  skeletonConfig = COMPONENT_CONFIGS['skeleton'];
}
