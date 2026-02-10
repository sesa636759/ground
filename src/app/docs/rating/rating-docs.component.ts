import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-rating-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './rating-docs.component.html',
  styleUrls: ['./rating-docs.component.scss'],
})
export class RatingDocsComponent {
  ratingConfig = COMPONENT_CONFIGS['rating'];

  logRating(event: any) {
    console.log('Rating changed:', event.detail);
  }
}
