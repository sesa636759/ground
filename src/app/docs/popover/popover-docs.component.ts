import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-popover-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './popover-docs.component.html',
  styleUrls: ['./popover-docs.component.scss'],
})
export class PopoverDocsComponent {
  componentConfig = COMPONENT_CONFIGS['popover'] || {
    id: 'popover',
    tagName: 'ui-popover',
    label: 'Popover',
    description: 'A non-modal dialog that floats around a trigger element.',
    props: [
      {
        name: 'position',
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
        defaultValue: 'bottom',
      },
      { name: 'trigger', type: 'select', options: ['click', 'hover'], defaultValue: 'click' },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-popover position="bottom">
   <ui-button label="Click Me" slot="trigger"></ui-button>
   <div slot="content" class="p-4">
       <h3>Popover Title</h3>
       <p>This is the content of the popover.</p>
   </div>
</ui-popover>`,
  };

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
