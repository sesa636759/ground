import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-dialog-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dialog-docs.component.html',
  styleUrls: ['./dialog-docs.component.scss'],
})
export class DialogDocsComponent {
  dialogConfig = COMPONENT_CONFIGS['dialog'];

  openDialog(id: string) {
    const dialog = document.getElementById(id) as any;
    if (dialog) dialog.show();
  }

  closeDialog(id: string) {
    const dialog = document.getElementById(id) as any;
    if (dialog) dialog.hide();
  }
}
