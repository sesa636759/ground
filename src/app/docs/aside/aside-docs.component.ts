import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-aside-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aside-docs.component.html',
  styleUrls: ['./aside-docs.component.scss'],
})
export class AsideDocsComponent {
  asideConfig = COMPONENT_CONFIGS['aside'];

  openAside(id: string) {
    const el = document.getElementById(id) as any;
    if (el) el.show();
  }

  closeAside(id: string) {
    const el = document.getElementById(id) as any;
    if (el) el.hide();
  }
}
