import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-pagination-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pagination-docs.component.html',
  styleUrls: ['./pagination-docs.component.scss'],
})
export class PaginationDocsComponent {
  paginationConfig = COMPONENT_CONFIGS['pagination'] || {
    id: 'pagination',
    tagName: 'ui-pagination',
    label: 'Pagination',
    description: 'A component to navigate through pages of data.',
    props: [
      { name: 'total', type: 'number', defaultValue: 100 },
      { name: 'pageSize', type: 'number', defaultValue: 10 },
      { name: 'current', type: 'number', defaultValue: 1 },
      {
        name: 'variant',
        type: 'select',
        options: ['default', 'simple', 'minimal'],
        defaultValue: 'default',
      },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-pagination [total]="100" [pageSize]="10" [current]="1"></ui-pagination>`,
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
